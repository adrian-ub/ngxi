import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhRetweetIcon],svg[whh-retweet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 384L832 640L640 384h128V128H384L288 0h608v384zM256 256v256h384l96 128H128V256H0L192 0l192 256z"></svg:path>`,
})
export class WhhRetweetIcon {
  readonly viewBox = input("0 0 1024 640")
  readonly width = input("1.6em")
  readonly height = input("1em")
}
