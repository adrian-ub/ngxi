import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8CommentsIcon],svg[icons8-comments-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v20h9.563l2.718 2.72l.72.686l.72-.687L19.437 26H29V6zm2 2h22v16h-8.406l-.313.28L16 26.563l-2.28-2.28l-.314-.282H5zm4 3v2h14v-2zm0 4v2h14v-2zm0 4v2h10v-2z"></svg:path>`,
})
export class Icons8CommentsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
