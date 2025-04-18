import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1ArticulatedLorryIcon],svg[noto-v1-articulated-lorry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="notoV1ArticulatedLorry0" fill="#ed6c30" d="M63.62 98.61h10.43v9.48H63.62z"></svg:path></svg:defs><svg:use href="#notoV1ArticulatedLorry0"></svg:use><svg:use href="#notoV1ArticulatedLorry0"></svg:use><svg:path fill="#78a3ad" d="M84.67 94.5h40.29v19.43H84.67z"></svg:path><svg:path fill="#ed6c30" d="M52.12 105.93V62.87H28.33c-2.44 0-5.99 1.85-6.54 6.09c-.8 6.23-2.66 15.53-2.66 15.53L4.9 86.42S.16 87.96.16 93.8v16.38c0 1.58 1.94 3.74 3.4 3.74h73.88c1.37 0 2.48-1.12 2.48-2.49v-5.49h-27.8z"></svg:path><svg:path fill="#fff" d="M37.06 81.71c0 1.37-1.11 2.49-2.48 2.49h-7.99c-1.37 0-2.33-1.11-2.13-2.46l1.71-11.86c.2-1.36 1.48-2.46 2.84-2.46h5.56c1.37 0 2.48 1.12 2.48 2.49v11.8z"></svg:path><svg:circle cx="18.86" cy="113.91" r="7.01" fill="#2f2f2f"></svg:circle><svg:circle cx="57.34" cy="113.91" r="7.01" fill="#2f2f2f"></svg:circle><svg:path fill="#2f2f2f" d="M78.38 113.91c0 3.87-3.14 7.01-7.01 7.01c-3.88 0-7.02-3.14-7.02-7.01c0-3.88 3.14-7.01 7.02-7.01c3.87 0 7.01 3.13 7.01 7.01m30.24 0c0 3.87-3.14 7.01-7.01 7.01c-3.88 0-7.02-3.14-7.02-7.01c0-3.88 3.14-7.01 7.02-7.01c3.87 0 7.01 3.13 7.01 7.01"></svg:path><svg:ellipse cx="115.64" cy="113.91" fill="#2f2f2f" rx="7.02" ry="7.01"></svg:ellipse><svg:path fill="#78a3ad" d="M41.88 62.87h10.24v38.17H41.88z"></svg:path><svg:path fill="#78a3ad" d="M49.05 64.77h-4.39v-6.14c-.02-.09-.13-2.35 1.56-4.17c1.27-1.36 3.1-2.05 5.46-2.05v4.39c-.73 0-1.72.11-2.22.62c-.43.44-.42 1.08-.42 1.09zm-2.2 41.84a2.19 2.19 0 0 1-2.19-2.19v-6.14c0-1.21.98-2.2 2.19-2.2s2.2.99 2.2 2.2v6.14c0 1.21-.99 2.19-2.2 2.19"></svg:path><svg:path fill="#ed6c30" d="M57.17 51.84h70.67v48.82H57.17z"></svg:path><svg:path fill="#f79329" d="M69.89 56.44h2.68v39.63h-2.68zm14.34 0h2.68v39.63h-2.68zm14.34 0h2.68v39.63h-2.68zm14.34 0h2.68v39.63h-2.68z"></svg:path>`,
})
export class NotoV1ArticulatedLorryIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
