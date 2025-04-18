import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirStarHalfDashedIcon],svg[iconoir-star-half-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.815 3.004a.911.911 0 0 0-1.63 0l-.496.998M12 18.678l-1.572.822m-4.757-.131l-.185 1.072c-.127.739.653 1.302 1.32.953l.847-.443M6.253 16l.225-1.308l-.695-.673M3.699 12l-1.423-1.378a.902.902 0 0 1 .503-1.542l1.11-.161M7 8.467l1.587-.231l.804-1.618"></svg:path><svg:path d="m15.413 8.236l-2.598-5.232A.9.9 0 0 0 12 2.5v16.178l5.195 2.716c.666.349 1.446-.214 1.319-.953l-.992-5.75l4.202-4.07a.902.902 0 0 0-.503-1.54z"></svg:path></svg:g>`,
})
export class IconoirStarHalfDashedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
