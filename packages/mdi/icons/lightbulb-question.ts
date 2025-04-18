import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbQuestionIcon],svg[mdi-lightbulb-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2C4.1 2 1 5.1 1 9c0 2.4 1.2 4.5 3 5.7V17c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-2.3c1.8-1.3 3-3.4 3-5.7c0-3.9-3.1-7-7-7M5 21c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-1H5zm15.5-6.5V16H19v-1.5zm-2-5H17V9c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1-.5 1.9-1.3 2.4l-.3.2c-.6.4-.9 1-.9 1.7v.2H19v-.2c0-1.2.6-2.3 1.6-2.9l.3-.2q.6-.45.6-1.2c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5z"></svg:path>`,
})
export class MdiLightbulbQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
