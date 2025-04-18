import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMusicbrainzIcon],svg[openmoji-musicbrainz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8967AA" d="M34 9.146L12 21.75v27.5l22 12.604z"></svg:path><svg:path fill="#F4AA41" d="M38 9.146L60 21.75v27.5L38 61.854z"></svg:path><svg:path fill="#B399C8" d="M18 26.76L23 24l5 2.76V47l-5-2.76L18 47z"></svg:path><svg:path d="m12 21.75l-.497-.868a1 1 0 0 0-.503.868zM34 9.146h1a1 1 0 0 0-1.497-.868zM12 49.25h-1a1 1 0 0 0 .503.868zm22 12.604l-.497.868A1 1 0 0 0 35 61.854zM60 49.25l.497.868A1 1 0 0 0 61 49.25zM38 61.854h-1a1 1 0 0 0 1.497.868zM60 21.75h1a1 1 0 0 0-.503-.868zM38 9.146l.497-.868A1 1 0 0 0 37 9.146zM12.497 22.618l22-12.604l-.994-1.736l-22 12.604zM13 49.25v-27.5h-2v27.5zm21.497 11.737l-22-12.605l-.994 1.736l22 12.604zm.503.867V9.146h-2v52.708zm24.503-13.472l-22 12.605l.994 1.735l22-12.604zM59 21.75v27.5h2v-27.5zM37.503 10.014l22 12.604l.994-1.736l-22-12.604zM37 9.146v52.708h2V9.146z"></svg:path><svg:path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M18 26.76L23 24l5 2.76V47l-5-2.76L18 47z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="M31 16.055A9.004 9.004 0 0 0 23.055 24"></svg:path><svg:circle cx="47" cy="28" r="2" fill="none" stroke="#000" stroke-width="2"></svg:circle><svg:circle cx="47" cy="42" r="2" fill="none" stroke="#000" stroke-width="2"></svg:circle><svg:circle cx="47" cy="20" r="2" fill="none" stroke="#000" stroke-width="2"></svg:circle><svg:circle cx="55" cy="41" r="2" fill="none" stroke="#000" stroke-width="2"></svg:circle><svg:circle cx="55" cy="33" r="2" fill="none" stroke="#000" stroke-width="2"></svg:circle><svg:circle cx="55" cy="25" r="2" fill="none" stroke="#000" stroke-width="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M38 30h2l4 4h4l5 5"></svg:path><svg:path fill="none" stroke="#000" stroke-width="2" d="M50.5 37.5L53 35m2-4v-4"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M38 16h4l3 3"></svg:path><svg:circle r="2" fill="none" stroke="#000" stroke-width="2" transform="matrix(1 0 0 -1 47 50)"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M38 54h4l3-3"></svg:path><svg:path fill="none" stroke="#000" stroke-width="2" d="M47 22v4m0 18v4"></svg:path>`,
})
export class OpenmojiMusicbrainzIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
