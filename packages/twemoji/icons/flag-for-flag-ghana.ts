import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagForFlagGhanaIcon],svg[twemoji-flag-for-flag-ghana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CC212D" d="M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4z"></svg:path><svg:path fill="#FBD116" d="M15.423 22h5.185l-2.592-1.884zm3.587-4.941h3.215l-2.601 1.889l.991 3.052H36v-8H18.016zm-2.602 1.889l-2.601-1.889h3.215L18.016 14H0v8h15.416z"></svg:path><svg:path fill="#288541" d="M20.617 22.006L20.608 22h-5.186l-.009.006l.003-.006H0v5a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-5H20.615l.002.006z"></svg:path><svg:path d="M13.807 17.059l2.601 1.889L15.416 22l-.002.006l.009-.006l2.593-1.884L20.608 22l.009.006l-.002-.006l-.991-3.052l2.601-1.889H19.01L18.016 14l-.994 3.059z" fill="#000"></svg:path>`,
})
export class TwemojiFlagForFlagGhanaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
