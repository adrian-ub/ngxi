import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBug01Icon],svg[hugeicons-bug-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.013 4.991c-.12 1.06.54 3.432 3.476 3.432m11.106-.043c1.24.199 3.518-.881 3.4-3.377m-.002 15.996c.06-1.056-.815-3.444-3.394-3.576m-11.147.048c-.802-.24-3.439.864-3.439 3.528M9.33 6.119c.024-1.02.515-3.12 2.673-3.12c1.918 0 2.583 1.62 2.673 3.12m-8.415 3.3c.12-.78 1.031-2.604 3.105-2.784c2.098-.08 4.975-.048 5.514.036c.707.063 2.415.768 2.87 2.748c.163 1.02.079 2.46.103 3.3c-.036.84.068 2.543-.096 3.42c-.12.96-.768 2.328-1.655 3.168c-1.318 1.416-4.938 2.904-8.067.144c-1.618-1.56-1.726-3.072-1.845-3.672c-.033-.322-.031-1.902-.024-3.42c-.024-1.313.006-2.578.095-2.94m-3.248 3.48H5.95m15.043 0h-2.877m-6.113 3.6v3.78" color="currentColor"></svg:path>`,
})
export class HugeiconsBug01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
