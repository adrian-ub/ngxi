import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeDuneIcon],svg[vscode-icons-file-type-dune-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#84421d" d="M30 29.635V7.268L2 10.002v19.633z"></svg:path><svg:path fill="#815021" d="M25.742 10.112c-.062-.52.989-1.395.934-1.914L30 9.073v7.984c-1.264-4.73-4.157-5.523-4.258-6.945"></svg:path><svg:path fill="#b76f29" d="M30 5.037c-5.806-2.634-8.174-3.132-9.515-2.308c-1.342.85 5.38 4.998 6.065 5.437c.684.44 2.028.907 3.45 1.07z"></svg:path><svg:path fill="#b0a788" d="M20.484 2.729L2 9.919v18.677c5.004-.082 8.313-3.09 10.5-7.93c2.215-5.14 5.414-6.714 8.86-8.75c3.609-2.132 5.413-2.706 5.413-4.347c0-.711-1.234-1.597-3.308-2.598c-2.76-1.332-3.282-1.941-2.981-2.242"></svg:path>`,
})
export class VscodeIconsFileTypeDuneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
