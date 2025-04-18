import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVotingChipRoundedIcon],svg[material-symbols-voting-chip-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19q-2.925 0-4.962-2.037T1 12t2.038-4.962T8 5h8q2.925 0 4.963 2.038T23 12t-2.037 4.963T16 19zm.25-6.25v1.5q0 .325.213.538T9 15t.538-.213t.212-.537v-1.5h1.5q.325 0 .538-.213T12 12t-.213-.537t-.537-.213h-1.5v-1.5q0-.325-.213-.537T9 9t-.537.213t-.213.537v1.5h-1.5q-.325 0-.537.213T6 12t.213.538t.537.212zm7.25-2.25v3.75q0 .325.213.538t.537.212t.538-.213t.212-.537V10q0-.425-.288-.712T16 9h-1.25q-.325 0-.537.213T14 9.75t.213.538t.537.212z"></svg:path>`,
})
export class MaterialSymbolsVotingChipRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
