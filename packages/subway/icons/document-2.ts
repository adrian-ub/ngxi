import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayDocument2Icon],svg[subway-document-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M372.4 517.5L512 377.9H372.4zM0 5.5v512h349.1V354.6H512V5.5zm395.6 279.3H116.4v-46.5h279.3v46.5z"></svg:path>`,
})
export class SubwayDocument2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
