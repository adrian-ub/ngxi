import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignColaIcon],svg[tdesign-cola-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.307.893l5.8 5.8l-1.204 4.818l-3.173 3.174q-.2.225-.47.47l-6.749 6.748l-4.818 1.205l-5.8-5.801l1.204-4.818L12.49 2.097zm-.426 12.812L19.586 11l-1.53-1.53c-2.105 2.3-5.903 5.192-11.633 5.538l1.041 1.042c4.912.56 8.137-1.213 9.417-2.345m-7.313 4.45L11 19.584l1.805-1.804c-.978.218-2.059.355-3.237.373m-.524 2.303l-5.502-5.502l-.434 1.737l4.199 4.2zm-4.607-7.435c6.198.288 10.145-2.691 12.204-4.968L13 4.415L4.414 13zM14.956 3.54l5.502 5.502l.435-1.737l-4.2-4.2z"></svg:path>`,
})
export class TdesignColaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
