import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalKibanaIcon],svg[devicon-original-kibana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f04e98" d="M112 0H12v48c17.3 0 33.54 4.453 47.73 12.188Zm0 0"></svg:path><svg:path fill="#343741" d="M12 48v67.152l47.73-54.96A99.422 99.422 0 0 0 12 48"></svg:path><svg:path fill="#00bfb3" d="m70.04 66.621l-48.974 56.406L16.738 128h93.258c-5.121-25.21-19.758-46.945-39.957-61.379"></svg:path>`,
})
export class DeviconOriginalKibanaIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
