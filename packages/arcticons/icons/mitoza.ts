import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMitozaIcon],svg[arcticons-mitoza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.462 26.083c-.925-9.014-8.736-13.436-14.484-21.526c-.069-.097-.224-.064-.246.053c-.697 3.69-3.62 11.221-4.702 12.854c-.46.693-3.155 5.67-3.545 10.744c-.74 9.62 5.132 15.712 12.477 15.27c7.92-.478 11.31-9.502 10.5-17.395"></svg:path>`,
})
export class ArcticonsMitozaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
