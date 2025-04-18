import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashQuestionLightIcon],svg[stash-question-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8.5a1.5 1.5 0 0 0-1.5 1.5v.107a.5.5 0 1 1-1 0V10A2.5 2.5 0 0 1 12 7.5h.116a2.384 2.384 0 0 1 1.552 4.193l-.771.661a1.14 1.14 0 0 0-.397.863v.533a.5.5 0 0 1-1 0v-.533c0-.624.273-1.216.746-1.622l.77-.66a1.384 1.384 0 0 0-.9-2.435zm0 8a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"></svg:path><svg:path fill="currentColor" d="M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0M12 4.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15"></svg:path>`,
})
export class StashQuestionLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
