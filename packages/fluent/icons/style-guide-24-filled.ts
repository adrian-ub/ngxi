import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStyleGuide24FilledIcon],svg[fluent-style-guide-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.402 4.723l2.718 10.142a2.75 2.75 0 0 1-1.945 3.368l-6.278 1.682a2.75 2.75 0 0 1-3.368-1.944L5.81 7.828A2.75 2.75 0 0 1 7.756 4.46l6.278-1.682a2.75 2.75 0 0 1 3.368 1.945m-6.438 3.019a1 1 0 1 0-1.932.517a1 1 0 0 0 1.932-.517m-5.163 3.917l1.762 6.57a3.73 3.73 0 0 0 1.002 1.713l-.443-.023a2.75 2.75 0 0 1-2.602-2.89zm-.925-1.479l-.355 6.796c-.037.699.12 1.363.424 1.94l-.414-.16a2.75 2.75 0 0 1-1.582-3.553z"></svg:path>`,
})
export class FluentStyleGuide24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
