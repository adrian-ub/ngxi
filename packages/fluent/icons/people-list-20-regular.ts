import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPeopleList20RegularIcon],svg[fluent-people-list-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 6.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0M6.75 3.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5M10 11c.398 0 .768.116 1.08.316a1.5 1.5 0 0 0-.54.842A1 1 0 0 0 10 12H3.5a1 1 0 0 0-1 1v.078l.007.083a2.95 2.95 0 0 0 .498 1.336C3.492 15.201 4.513 16 6.75 16s3.258-.799 3.745-1.503l.005-.008v.011c0 .384.144.735.382 1a1.5 1.5 0 0 0-.194.273C9.894 16.471 8.656 17 6.75 17c-2.513 0-3.867-.92-4.568-1.934a3.95 3.95 0 0 1-.67-1.807a3 3 0 0 1-.012-.175V13a2 2 0 0 1 2-2zm3-3.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M14.5 5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M12 12a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentPeopleList20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
