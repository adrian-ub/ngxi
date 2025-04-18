import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCheckCircleOneSolidIcon],svg[mynaui-check-circle-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.449 2.399a.75.75 0 0 1 .152 1.05l-7.232 9.69a1.537 1.537 0 0 1-2.364.11l-3.561-3.94a.75.75 0 1 1 1.112-1.006l3.562 3.939l.007.005q.006.003.02.003l.017-.004l.004-.004l7.233-9.69a.75.75 0 0 1 1.05-.153M12 3.75A8.25 8.25 0 1 0 20.25 12a.75.75 0 0 1 1.5 0c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12S6.615 2.25 12 2.25a.75.75 0 0 1 0 1.5"></svg:path>`,
})
export class MynauiCheckCircleOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
