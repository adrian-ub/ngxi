import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagForFlagArubaIcon],svg[twemoji-flag-for-flag-aruba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4189DD" d="M32 5H4a4 4 0 0 0-4 4v13.055h36V9a4 4 0 0 0-4-4zM6.276 11.276l-.943 3.057l-.943-3.057l-3.057-.943L4.39 9.39l.943-3.057l.943 3.057l3.057.943l-3.057.943zM4 31h28a3.991 3.991 0 0 0 3.867-3.028H.133A3.991 3.991 0 0 0 4 31zm-4-6.972h36V26H0z"></svg:path><svg:path fill="#FFF" d="M5.333 6.333l-.942 3.058l-3.057.943l3.057.943l.943 3.057l.943-3.057l3.057-.943l-3.058-.943l-.943-3.058zm.727 4.727l-.726 2.355l-.727-2.355l-2.355-.726l2.355-.726l.726-2.355l.727 2.354l2.355.726l-2.355.727z"></svg:path><svg:path fill="#D21034" d="M5.333 7.252l-.726 2.355l-2.355.726l2.355.727l.726 2.355l.727-2.355l2.355-.727l-2.355-.726z"></svg:path><svg:path fill="#F9D616" d="M0 22.055h36v1.972H0zM0 27c0 .337.054.659.133.972h35.734A3.95 3.95 0 0 0 36 27v-1H0v1z"></svg:path>`,
})
export class TwemojiFlagForFlagArubaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
