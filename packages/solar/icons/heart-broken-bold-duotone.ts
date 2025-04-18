import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarHeartBrokenBoldDuotoneIcon],svg[solar-heart-broken-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.038 18.91C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501l-1.118 2.235c-.182.364-.273.547-.229.726c.044.18.21.298.542.535l1.916 1.368c.416.297.624.445.65.664s-.14.413-.472.8l-1.686 1.968c-.286.333-.43.5-.422.696s.163.351.474.662l.945.945c.195.195.293.293.328.42s.002.261-.065.53L12 20.5c1 0 2-.77 3.038-1.59"></svg:path><svg:path fill="currentColor" d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501l-1.118 2.235c-.182.364-.273.547-.229.726c.044.18.21.298.542.535l1.916 1.368c.416.297.624.445.65.664s-.14.413-.472.8l-1.686 1.968c-.286.333-.43.5-.422.696s.163.351.474.662l.945.945c.195.195.293.293.328.42s.002.261-.065.53L12 20.5c-1 0-2-.77-3.038-1.59q-.417-.326-.856-.663" opacity=".5"></svg:path>`,
})
export class SolarHeartBrokenBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
