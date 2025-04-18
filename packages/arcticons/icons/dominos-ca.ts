import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDominosCaIcon],svg[arcticons-dominos-ca-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="35.909" height="17.47" x="6.045" y="15.265" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".9" ry=".9" transform="rotate(-45 24 24)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.813 17.819l12.36 12.359"></svg:path><svg:circle cx="30.543" cy="17.448" r="2.98" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="21.843" cy="30.508" r="2.98" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="13.113" cy="30.508" r="2.98" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.968 40.824h-2.137m-.533 1.661l1.6-4.985l1.6 5m-4.305-1.679v.02c0 .915-.717 1.657-1.6 1.657s-1.6-.742-1.6-1.656v-1.688c0-.915.716-1.656 1.6-1.656h0c.883 0 1.6.741 1.6 1.656v.02"></svg:path>`,
})
export class ArcticonsDominosCaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
