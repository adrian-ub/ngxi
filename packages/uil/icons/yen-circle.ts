import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilYenCircleIcon],svg[uil-yen-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1m0 20a9 9 0 1 1 9-9a9 9 0 0 1-9 9m2.83-14.55L12 10.7L9.17 6.45a1 1 0 0 0-1.39-.28a1 1 0 0 0-.28 1.38l2.11 3.17H9a1 1 0 0 0 0 2h2l.05.08v.92H9a1 1 0 0 0 0 2h2V18a1 1 0 0 0 2 0v-2.28h2a1 1 0 0 0 0-2h-2v-.92l.05-.08H15a1 1 0 0 0 0-2h-.61l2.11-3.17a1 1 0 0 0-.28-1.38a1 1 0 0 0-1.39.28"></svg:path>`,
})
export class UilYenCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
