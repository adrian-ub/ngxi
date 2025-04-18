import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsTmuxIcon],svg[file-icons-tmux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 22.4h192.005C490.512 22.4 512 43.92 512 70.42V240H272zm-32 0H47.995C21.51 22.4 0 43.9 0 70.42V489.6h240zM272 272v217.6h240V272z"></svg:path>`,
})
export class FileIconsTmuxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
