import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCameraIcon],svg[proicons-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.857 3.189h-1.714c-.681 0-1.022 0-1.331.094c-.274.083-.529.22-.75.401c-.25.205-.438.489-.816 1.056L7.103 6.454c-1.524 0-2.286 0-2.868.296a2.72 2.72 0 0 0-1.188 1.19c-.297.581-.297 1.343-.297 2.867v5.651c0 1.524 0 2.286.297 2.868c.26.512.677.928 1.188 1.189c.582.296 1.344.296 2.868.296h9.794c1.524 0 2.286 0 2.868-.296a2.72 2.72 0 0 0 1.188-1.19c.297-.581.297-1.343.297-2.867v-5.651c0-1.524 0-2.286-.297-2.868a2.72 2.72 0 0 0-1.188-1.189c-.582-.296-1.344-.296-2.868-.296L15.754 4.74c-.378-.567-.567-.85-.816-1.056a2.2 2.2 0 0 0-.75-.401c-.309-.094-.65-.094-1.331-.094"></svg:path><svg:path d="M15.775 13.212a3.775 3.775 0 1 1-7.55 0a3.775 3.775 0 0 1 7.55 0"></svg:path></svg:g>`,
})
export class ProiconsCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
