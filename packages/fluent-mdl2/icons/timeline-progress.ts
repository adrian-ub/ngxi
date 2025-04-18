import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TimelineProgressIcon],svg[fluent-mdl2-timeline-progress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 640h640v128H256zm1024 512h512v128h-512zm768-896v1408H0V256zm-127 128h-514v384h-127V384H768v128H640V384H128v1153h512V896h128v641h512v-129h127v129h514zM897 896h639v128H897z"></svg:path>`,
})
export class FluentMdl2TimelineProgressIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
