import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTagQuestionMark20FilledIcon],svg[fluent-tag-question-mark-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.007 4.033a2 2 0 0 0-1.987-1.997l-4.89-.032a2 2 0 0 0-1.426.584L3.022 9.252a2 2 0 0 0-.002 2.83l4.949 4.95a2 2 0 0 0 1.95.512a5.5 5.5 0 0 1 7.797-7.507a2 2 0 0 0 .298-1.054zM14 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2m5 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4.5 1.88a.625.625 0 1 0 0 1.25a.625.625 0 0 0 0-1.25m0-4.877c-1.048 0-1.864.818-1.853 1.955a.5.5 0 1 0 1-.01c-.006-.579.36-.945.853-.945c.472 0 .853.392.853.95c0 .202-.07.315-.36.544l-.277.215c-.506.404-.716.717-.716 1.288a.5.5 0 0 0 .992.09l.011-.156c.017-.148.1-.254.346-.448l.277-.215c.513-.41.727-.732.727-1.318c0-1.104-.822-1.95-1.853-1.95"></svg:path>`,
})
export class FluentTagQuestionMark20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
