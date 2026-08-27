import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function CardStat({ data, children }) {
    const { title, background, className = '', icon: Icon, iconClassname = '' } = data;
    return (
        <Card className={cn(background, className)}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="flex flex-row items-center justify-between space-y-0 pb-2">{title}</CardTitle>
                {Icon && <Icon className={cn('size-5', iconClassname)} />}
            </CardHeader>
            <CardContent>{children}</CardContent>
        </Card>
    );
}
