import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSatellite03Icon],svg[hugeicons-satellite-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.536 6.11a3.787 3.787 0 0 1 5.355 5.354l-2.142 2.143c-.86.86-1.291 1.29-1.812 1.373a1.6 1.6 0 0 1-.508 0c-.52-.082-.95-.513-1.812-1.373l-1.224-1.224c-.86-.861-1.29-1.291-1.373-1.812a1.6 1.6 0 0 1 0-.508c.082-.52.513-.951 1.373-1.812zM6.848 14c.12 1.57 1.57 3.008 3.152 3.13m-6.994-1.892c-.154 3.028 2.748 5.904 5.798 5.757M12.53 5.53l-1.596-1.663C10.356 3.29 10.066 3 9.707 3s-.648.29-1.226.867l-.614.614C7.29 5.059 7 5.348 7 5.707c0 .36.29.648.867 1.227l1.451 1.45m9.103 2.971l1.712 1.711c.578.579.867.868.867 1.227s-.29.648-.867 1.226l-.614.614c-.578.578-.867.867-1.226.867c-.36 0-.648-.29-1.227-.867l-1.555-1.555" color="currentColor"></svg:path>`,
})
export class HugeiconsSatellite03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
