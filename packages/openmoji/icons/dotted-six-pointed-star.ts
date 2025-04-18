import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiDottedSixPointedStarIcon],svg[openmoji-dotted-six-pointed-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b399c8" d="M12 12.08h48v47.83H12z"></svg:path><svg:path d="M38.5 36a2.5 2.5 0 1 1-2.499-2.5A2.5 2.5 0 0 1 38.5 36"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12h48v48H12z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.696" d="m36 18.67l14.97 25.96H21.03l7.486-12.98z" paint-order="stroke fill markers"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.696" d="m21.01 27.39l29.97.019l-14.97 25.93l-7.5-12.97z" paint-order="stroke fill markers"></svg:path>`,
})
export class OpenmojiDottedSixPointedStarIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
