import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWindowsOldIcon],svg[hugeicons-windows-old-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.986 21.065c1.707.283 2.991.496 4.014.496l-.01.01c1.02 0 1.77-.21 2.43-.76c1.33-1.12 1.33-2.88 1.33-6.37v-4.24c0-3.49 0-5.24-1.33-6.37c-1.32-1.11-3.06-.83-6.52-.25l.11.74l-.12-.74l-2.91.48a.7.7 0 0 0-.197.033L7.89 4.57c-2.49.41-3.86.64-4.75 1.68c-.89 1.05-.89 2.43-.89 4.94v2.24c0 2.51 0 3.9.89 4.95c.889 1.029 2.256 1.26 4.74 1.678l.01.002l6.01.99zM3.75 13.061v.37c0 2.38.02 3.37.53 3.98c.524.613 1.616.796 3.78 1.158l.07.012l2.12.35v-5.87zm8 6.117v-6.117h8.5v1.37c0 3.04 0 4.56-.79 5.23c-.8.66-2.31.41-5.33-.09zm8.5-7.617h-8.5V5.444l2.38-.393h.01c1.72-.29 2.95-.49 3.83-.49c.67 0 1.14.11 1.48.4c.8.68.8 2.2.8 5.23zm-10-5.87v5.87h-6.5v-.37c0-2.38.02-3.37.53-3.97c.524-.623 1.617-.806 3.78-1.168l.07-.012z" color="currentColor"></svg:path>`,
})
export class HugeiconsWindowsOldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
