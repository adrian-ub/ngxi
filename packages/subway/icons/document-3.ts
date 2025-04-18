import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayDocument3Icon],svg[subway-document-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M372.4 512L512 372.4H372.4zM93.1 93.1V512h256V349.1H512v-256zM418.9 0H0v418.9h46.5V46.5h372.4z"></svg:path>`,
})
export class SubwayDocument3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
