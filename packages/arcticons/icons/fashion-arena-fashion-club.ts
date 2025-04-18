import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFashionArenaFashionClubIcon],svg[arcticons-fashion-arena-fashion-club-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.588 18.224l2.674 5.349l-5.411 2.706L5 22.662l2.686-8.06zm10.825.049l-2.675 5.349l5.411 2.706L43 22.71l-2.686-8.06zm-13.188 9.33l5.845-1.269l1.283 5.913l-6.189 9.619l-7.144-4.597zM19.79 17.6l4.229 4.229l4.278-4.278V6.113h-8.495zm12.024 10.024l-5.845-1.268l-1.283 5.912l6.189 9.62l7.144-4.597z"></svg:path>`,
})
export class ArcticonsFashionArenaFashionClubIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
