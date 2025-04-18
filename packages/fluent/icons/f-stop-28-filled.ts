import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFStop28FilledIcon],svg[fluent-f-stop-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.598 7.987a4 4 0 0 1 5.33-2.977l.471.176a1 1 0 1 0 .702-1.872l-.47-.177c-3.473-1.302-7.284.826-7.996 4.466L12.775 12H7.75a1 1 0 1 0 0 2h4.633l-.98 5.013a4 4 0 0 1-5.33 2.977l-.472-.176a1 1 0 1 0-.702 1.872l.471.177c3.473 1.302 7.283-.826 7.995-4.466L14.421 14h4.829a1 1 0 1 0 0-2h-4.437z"></svg:path>`,
})
export class FluentFStop28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
