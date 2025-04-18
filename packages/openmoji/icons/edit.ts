import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiEditIcon],svg[openmoji-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="M12.854 16.577h42.498v42.246H12.854z"></svg:path><svg:path fill="#F4AA41" d="m32.775 39.406l4.719-1.782l-2.937-2.937z"></svg:path><svg:path fill="#A57939" d="m56.611 11.678l3.784 3.785l-22.014 22.013l-3.784-3.784z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M54.557 28.084v30.684c0 .55-.45 1-1 1H13.169c-.55 0-1-.45-1-1V18.379a1 1 0 0 1 1-1H44.19"></svg:path><svg:path d="m38.053 37.749l21.46-21.461a1 1 0 0 0 0-1.415l-2.335-2.335a1 1 0 0 0-1.414 0l-21.461 21.46l-2.626 6.387zl-3.75-3.75"></svg:path></svg:g>`,
})
export class OpenmojiEditIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
