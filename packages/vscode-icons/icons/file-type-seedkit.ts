import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeSeedkitIcon],svg[vscode-icons-file-type-seedkit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4F51E5" d="M2 10.944c0-3.13 0-4.696.61-5.892a5.6 5.6 0 0 1 2.448-2.443c1.198-.61 2.766-.61 5.902-.61h10.08c3.136 0 4.704 0 5.902.61a5.6 5.6 0 0 1 2.448 2.443c.61 1.196.61 2.761.61 5.892v10.062c0 3.13 0 4.696-.61 5.892a5.6 5.6 0 0 1-2.448 2.443c-1.198.61-2.766.61-5.902.61H10.96c-3.136 0-4.704 0-5.902-.61a5.6 5.6 0 0 1-2.448-2.443C2 25.702 2 24.137 2 21.006z"></svg:path><svg:path fill="#fff" d="M16.56 16.922c0-.214.174-.387.388-.387H21.6a5.036 5.036 0 0 1 5.04 5.03c0 2.78-2.256 5.032-5.04 5.032s-5.04-2.253-5.04-5.031zm0-1.893c0 .214.174.387.388.387H21.6a5.036 5.036 0 0 0 5.04-5.03c0-2.78-2.256-5.032-5.04-5.032s-5.04 2.253-5.04 5.031zm-1.12 1.893a.39.39 0 0 0-.388-.387H10.4a5.036 5.036 0 0 0-5.04 5.03a5.036 5.036 0 0 0 5.04 5.032a5.036 5.036 0 0 0 5.04-5.031zm0-1.893a.39.39 0 0 1-.388.387H10.4a5.036 5.036 0 0 1-5.04-5.03a5.036 5.036 0 0 1 5.04-5.032a5.036 5.036 0 0 1 5.04 5.031z"></svg:path>`,
})
export class VscodeIconsFileTypeSeedkitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
