import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerIroningSteamFilledIcon],svg[tabler-ironing-steam-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m4.459-15a4 4 0 0 1 3.945 3.343l.577 3.464l.81 4.865A2 2 0 0 1 19.82 17H3a1 1 0 0 1-1-1a8 8 0 0 1 8-8h8.652l-.22-1.329a2 2 0 0 0-1.811-1.665L16.459 5H9a1 1 0 1 1 0-2zM7.106 18.553a1 1 0 0 1 1.788.894l-1 2a1 1 0 0 1-1.788-.894zm8.447-.447a1 1 0 0 1 1.341.447l1 2a1 1 0 0 1-1.788.894l-1-2a1 1 0 0 1 .447-1.341"></svg:path>`,
})
export class TablerIroningSteamFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
