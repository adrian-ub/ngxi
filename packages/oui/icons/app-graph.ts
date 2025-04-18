import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAppGraphIcon],svg[oui-app-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 20a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-6a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-8.2-5.62A4 4 0 1 1 18 1.06a4 4 0 0 1-2.2 7.32m0-6a2 2 0 1 0 .01 0zm.01 29.24a4 4 0 1 1-.083-8a4 4 0 0 1 .083 8m0-6a2 2 0 1 0 .39 0a2 2 0 0 0-.4 0z" class="ouiIcon__fillSecondary"></svg:path><svg:path fill="currentColor" d="M18 17v-2h-6.14a4 4 0 0 0-.86-1.64l2.31-3.44l-1.68-1.12l-2.31 3.44A4 4 0 0 0 8 12a4 4 0 1 0 0 8a4 4 0 0 0 1.32-.24l2.31 3.44l1.66-1.12L11 18.64a4 4 0 0 0 .86-1.64zM6 16a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class OuiAppGraphIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
