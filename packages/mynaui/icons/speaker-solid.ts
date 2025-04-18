import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiSpeakerSolidIcon],svg[mynaui-speaker-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.409 12.409a2.25 2.25 0 1 1 3.182 3.183a2.25 2.25 0 0 1-3.182-3.183"></svg:path><svg:path d="M7.899 2.425c1.049-.175 2.382-.175 4.034-.175h.134c1.652 0 2.985 0 4.034.175c1.104.184 1.99.577 2.671 1.423c.663.822.952 1.85 1.09 3.134C20 8.247 20 9.872 20 11.953v.094c0 2.082 0 3.706-.137 4.971c-.14 1.284-.428 2.312-1.09 3.134c-.682.846-1.568 1.239-2.672 1.423c-1.049.175-2.382.175-4.034.175h-.134c-1.652 0-2.985 0-4.034-.175c-1.104-.184-1.99-.576-2.671-1.422c-.663-.823-.952-1.851-1.09-3.134C4 15.753 4 14.128 4 12.046v-.094c0-2.081 0-3.706.137-4.971c.14-1.284.428-2.312 1.09-3.134c.682-.846 1.568-1.239 2.672-1.423M11.5 6.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm.5 4a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"></svg:path></svg:g>`,
})
export class MynauiSpeakerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
