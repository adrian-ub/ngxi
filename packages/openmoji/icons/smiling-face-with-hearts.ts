import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSmilingFaceWithHeartsIcon],svg[openmoji-smiling-face-with-hearts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="24" fill="#FCEA2B"></svg:circle><svg:path fill="#FFA7C0" d="M11.319 34.66a.351.351 0 0 1-.633 0a4.048 4.048 0 1 0-6.917 4.143l7.233 9.274l7.191-9.218l.232-.342a4.048 4.048 0 1 0-7.106-3.857m37-27a.351.351 0 0 1-.633 0a4.048 4.048 0 1 0-6.917 4.143l7.233 9.274l7.191-9.218l.232-.342A4.048 4.048 0 1 0 48.32 7.66m7.999 45a.351.351 0 0 1-.633 0a4.048 4.048 0 1 0-6.917 4.143l7.233 9.274l7.191-9.218l.232-.342a4.048 4.048 0 1 0-7.106-3.857"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"><svg:path stroke-linejoin="round" d="M45.815 44.804a15.43 15.43 0 0 1-19.63 0m25.855 5.562a4.05 4.05 0 0 0-3.462 6.15l.232.343l7.191 9.218l7.233-9.275a4.048 4.048 0 1 0-6.916-4.142a.351.351 0 0 1-.633 0a4.02 4.02 0 0 0-3.645-2.294m-45-18a4.05 4.05 0 0 0-3.462 6.15l.232.343l7.191 9.218l7.233-9.275a4.048 4.048 0 1 0-6.916-4.142a.351.351 0 0 1-.633 0a4.02 4.02 0 0 0-3.645-2.294m37-27a4.05 4.05 0 0 0-3.462 6.15l.232.343l7.191 9.218l7.233-9.275a4.048 4.048 0 1 0-6.916-4.142a.351.351 0 0 1-.633 0a4.02 4.02 0 0 0-3.645-2.294m-1.232 52.61A23 23 0 0 1 36 59c-7.94 0-14.939-4.022-19.072-10.14m36.82-27.49A22.9 22.9 0 0 1 59 36a22.9 22.9 0 0 1-2.306 10.05M14.732 27.227C18.181 18.877 26.404 13 36 13"></svg:path><svg:path stroke-miterlimit="10" d="M31.694 32.404a4.726 4.726 0 0 0-8.638 0m25.888 0a4.726 4.726 0 0 0-8.638 0"></svg:path></svg:g>`,
})
export class OpenmojiSmilingFaceWithHeartsIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
