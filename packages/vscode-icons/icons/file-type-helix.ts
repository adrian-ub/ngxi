import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeHelixIcon],svg[vscode-icons-file-type-helix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00aeef" d="M19.5 17.479h-7a1.479 1.479 0 1 1 0-2.958h7a1.479 1.479 0 0 1 0 2.958"></svg:path><svg:path fill="#00aeef" d="M26.106 16.3c0-.789.592-5.028-6.507-8.972a15 15 0 0 1-2.169 2.165c.1.1 1.282.789 1.38.887c4.437 2.268 4.338 5.423 4.338 5.718v.3c0 .3-.2 2.662-4.338 5.028c-5.324 3.155-6.31 5.817-6.408 6.31l2.958.789v.1a4.8 4.8 0 0 1 1.183-1.577l4.831 2.752a1.9 1.9 0 0 0 .789.2a1.42 1.42 0 0 0 1.282-.789a1.5 1.5 0 0 0-.592-2.07l-3.845-2.169a5.6 5.6 0 0 1 1.282-.789c5.521-3.352 5.816-7 5.816-7.883"></svg:path><svg:path fill="#00aeef" d="M5.9 15.7c0 .789-.592 5.028 6.507 8.972a15 15 0 0 1 2.169-2.169c-.1-.1-1.282-.789-1.38-.887C8.754 19.352 8.853 16.2 8.853 15.9v-.3c0-.3.2-2.662 4.338-5.028c5.324-3.155 6.31-5.817 6.408-6.31l-2.958-.789v-.1a4.8 4.8 0 0 1-1.183 1.577l-4.83-2.75a1.9 1.9 0 0 0-.789-.2a1.42 1.42 0 0 0-1.282.789a1.5 1.5 0 0 0 .592 2.07l3.845 2.169a5.6 5.6 0 0 1-1.282.789c-5.62 3.352-5.912 7-5.812 7.883"></svg:path>`,
})
export class VscodeIconsFileTypeHelixIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
