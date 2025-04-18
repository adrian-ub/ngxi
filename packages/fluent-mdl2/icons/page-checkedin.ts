import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PageCheckedinIcon],svg[fluent-mdl2-page-checkedin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1920h1024v128H128V0h1115l549 549v731h-128V640h-512V128H256zM1280 512h293l-293-293zm659 1517l-403-402v293h-128v-512h512v128h-293l402 403z"></svg:path>`,
})
export class FluentMdl2PageCheckedinIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
