import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsPkgsrcIcon],svg[file-icons-pkgsrc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 143.184L21.893 400.85L241.692 512l-2.552-272.82zm294.717 92.605l191.986-114.517l-20.21 252.615L291.756 510.02zm-32.002-48.853l195.35-109.467L227.349 0L21.89 94.31z"></svg:path>`,
})
export class FileIconsPkgsrcIcon {
  readonly viewBox = input("0 0 487 512")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
