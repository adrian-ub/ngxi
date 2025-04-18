import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMemoIcon],svg[openmoji-memo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiMemo0" d="m38.07 47.191l2.386 2.386l-3.464 1.28z"></svg:path></svg:defs><svg:path fill="#fff" d="M16.405 11.378H55.97v49.066H16.405z"></svg:path><svg:path fill="#f4aa41" d="m39.931 40.222l11.294-11.294l5.631 7.431l-10.5 10.512"></svg:path><svg:path fill="#a57939" d="m37.941 46.819l1.961-5.649l6.454 6.454l-5.648 1.961"></svg:path><svg:path fill="#ea5a47" d="m55.322 25.58l3.978-3.979l6.735 6.584l-3.945 3.945"></svg:path><svg:path fill="#d0cfce" d="m50.494 29.659l4.608-4.607l6.682 6.739l-4.569 4.568"></svg:path><svg:use href="#openmojiMemo0"></svg:use><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22.322 19.875h27m-27 8h25.6m-25.6 8h17.109m-17.109 8h12.206m-12.206 8h10.146"></svg:path><svg:use href="#openmojiMemo0"></svg:use><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m40.692 49.591l5.664-1.967l15.59-15.59l-6.454-6.454l-15.59 15.59l-1.974 5.671zm17.394-26.605l1.555-1.555l6.454 6.454l-1.632 1.632M40.279 40.793l6.454 6.454"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m37.932 46.828l-1.383 4.149l4.159-1.392m10.594-19.428l5.893 5.893"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.021" d="M55.322 44.228v15.647h-39v-48h39v8.456"></svg:path>`,
})
export class OpenmojiMemoIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
