import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFidoMyAccountIcon],svg[arcticons-fido-my-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.545 40.015c-.166-3.932-.343-7.853 1.104-10.493s4.507-3.976 6.627-3.313s3.28 3.324 3.866 6.075c.585 2.75.585 5.577.585 8.394m7.709-15.441q.542 8.15 1.094 16.987M9.918 41.119q0-7.521-.552-15.462m-3.866 0q12.15-14.359 18.776-19.88"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.62 7.433q9.94 6.627 19.88 17.12"></svg:path>`,
})
export class ArcticonsFidoMyAccountIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
