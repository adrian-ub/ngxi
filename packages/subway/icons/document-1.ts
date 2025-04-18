import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayDocument1Icon],svg[subway-document-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M372.4 512L512 372.4H372.4zM0 0v512h349.1V349.1H512V0zm395.6 279.3H279.3v116.4h-46.5V279.3H116.4v-46.5h116.4V116.4h46.5v116.4h116.4v46.5z"></svg:path>`,
})
export class SubwayDocument1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
