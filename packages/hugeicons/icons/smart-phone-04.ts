import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSmartPhone04Icon],svg[hugeicons-smart-phone-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 6.5c-.062-1.712-.275-2.75-1.001-3.475C13.972 2 12.319 2 9.013 2S4.054 2 3.027 3.025S2 5.7 2 9v6c0 3.3 0 4.95 1.027 5.975S5.707 22 9.013 22s4.959 0 5.986-1.025c.726-.725.939-1.763 1.001-3.475M8 19h2m6-7.01V12m4.048 4.491C21.254 15.34 22 13.75 22 11.991c0-1.757-.746-3.348-1.952-4.5M18 9.741c.603.576.976 1.372.976 2.25c0 .879-.373 1.674-.976 2.25"></svg:path><svg:path d="m6 2l.089.534c.193 1.157.29 1.736.686 2.088C7.19 4.989 7.776 5 9 5s1.81-.01 2.225-.378c.397-.352.493-.93.686-2.088L12 2"></svg:path></svg:g>`,
})
export class HugeiconsSmartPhone04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
