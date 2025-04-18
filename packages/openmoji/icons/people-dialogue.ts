import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPeopleDialogueIcon],svg[openmoji-people-dialogue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9b9b9a" d="M16.05 54.946a3.01 3.01 0 0 1-3.008-3.009v-8.862l-.002-3.407c0-.211.247-.326.408-.19l3.78 3.3a.75.75 0 0 0 .484.177h23.28A3.01 3.01 0 0 1 44 45.963v5.974a3.01 3.01 0 0 1-3.008 3.008z"></svg:path><svg:path fill="#d0cfce" d="M58.647 32.468a.25.25 0 0 0 .41-.191V20.018a3.024 3.024 0 0 0-3.024-3.024H31.122a3.024 3.024 0 0 0-3.024 3.024v6.006a3.024 3.024 0 0 0 3.024 3.024h23.33c.178 0 .35.063.487.178z"></svg:path><svg:g fill="#fcea2b"><svg:circle cx="13.02" cy="20.122" r="3"></svg:circle><svg:circle cx="59.08" cy="42.036" r="3"></svg:circle><svg:path d="M8.566 29.248a7.4 7.4 0 0 1 4.596-1.843a5.22 5.22 0 0 1 3.811 1.435a5.7 5.7 0 0 1 1.687 3.162l.365 2.12l-12.081-.008l.319-2.42a3.95 3.95 0 0 1 1.303-2.446m46.75 21.365a5.06 5.06 0 0 1 3.136-1.257l1.413-.058a3.85 3.85 0 0 1 2.812 1.058a7.45 7.45 0 0 1 2.205 4.134l.266 1.548l-12.081-.008l.21-1.593a6.17 6.17 0 0 1 2.04-3.824Z"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-width="2"><svg:circle cx="13.02" cy="20.122" r="3" stroke-miterlimit="10"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7.02 33.122s1-4.31 3-5.31s4-1 6 0s3 5.31 3 5.31"></svg:path><svg:circle cx="59.08" cy="42.036" r="3" stroke-miterlimit="10"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M53.08 55.036s1-4.31 3-5.31s4-1 6 0s3 5.31 3 5.31"></svg:path><svg:path stroke-miterlimit="10" d="M16.05 54.946a3.01 3.01 0 0 1-3.008-3.009v-8.862l-.002-3.407c0-.211.247-.326.408-.19l3.78 3.3a.75.75 0 0 0 .484.177h23.28A3.01 3.01 0 0 1 44 45.963v5.974a3.01 3.01 0 0 1-3.008 3.008zm42.597-22.478a.25.25 0 0 0 .41-.191V20.018a3.024 3.024 0 0 0-3.024-3.024H31.122a3.024 3.024 0 0 0-3.024 3.024v6.006a3.024 3.024 0 0 0 3.024 3.024h23.33c.178 0 .35.063.487.178z"></svg:path></svg:g>`,
})
export class OpenmojiPeopleDialogueIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
