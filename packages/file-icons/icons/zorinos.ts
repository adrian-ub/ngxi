import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsZorinosIcon],svg[file-icons-zorinos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128.318 28.904L92.55 91.602h327.106l-35.355-62.698zM48.287 169.397L0 254.657l44.985 79.927h17.368l245.494-165.187zm399.02 0L201.78 334.584h265.372L512 255.344l-48.356-85.947zM88.94 412.38l38.794 68.716h255.983l39.208-68.716z"></svg:path>`,
})
export class FileIconsZorinosIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
