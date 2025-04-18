import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRoadFinishFillIcon],svg[lets-icons-road-finish-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 17v-3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v6"></svg:path><svg:path fill="currentColor" d="M11 3v4a1 1 0 0 0 1 1h5.793a.5.5 0 0 0 .353-.854l-1.97-1.97a.25.25 0 0 1 0-.353l1.97-1.97A.5.5 0 0 0 17.793 2H12a1 1 0 0 0-1 1m7.8 19H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 20.48 2 19.92 2 18.8v-5.6c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 10 4.08 10 5.2 10h1.824c.335 0 .502 0 .62.069a.5.5 0 0 1 .219.267c.044.129.011.293-.054.62l-1.426 7.13c-.131.656-.197.984-.108 1.24a1 1 0 0 0 .439.537c.234.137.569.137 1.238.137h8.096c.67 0 1.004 0 1.238-.137a1 1 0 0 0 .44-.536c.088-.257.022-.585-.109-1.24l-1.426-7.13c-.065-.328-.098-.492-.054-.62a.5.5 0 0 1 .22-.268c.117-.069.284-.069.619-.069H18.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C22 11.52 22 12.08 22 13.2v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C20.48 22 19.92 22 18.8 22"></svg:path></svg:g>`,
})
export class LetsIconsRoadFinishFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
