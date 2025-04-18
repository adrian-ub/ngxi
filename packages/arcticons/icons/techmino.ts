import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTechminoIcon],svg[arcticons-techmino-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.112 6.325l-1.769-.474L4.5 16.462l1.769.474m9.711-8.771l1.768.474l-2.843 10.611l-1.769-.474m10.852-8.465l-1.769-.474l-2.843 10.611l1.768.474m9.711-8.771l1.769.474l-2.843 10.611l-1.769-.474m-8.024 2.476l-1.769-.474l-2.843 10.611l1.769.474m9.711-8.771l1.768.474l-2.843 10.611l-1.769-.474m10.852-8.465l-1.769-.474l-2.843 10.611l1.768.474m9.711-8.771l1.769.474l-2.843 10.611l-1.769-.474"></svg:path>`,
})
export class ArcticonsTechminoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
