import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWebhookOffIcon],svg[lucide-webhook-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15M9 3.4a4 4 0 0 1 6.52.66"></svg:path><svg:path d="m6 17l3.1-5.8a2.5 2.5 0 0 0 .057-2.05M20.3 20.3a4 4 0 0 1-2.3.7m.6-8a4 4 0 0 1 3.357 3.414M12 6l.6 1M2 2l20 20"></svg:path></svg:g>`
})
export class LucideWebhookOffIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
