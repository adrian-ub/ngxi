import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiVideoGameIcon],svg[openmoji-video-game-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#9B9B9A" stroke-miterlimit="10" stroke-width="2"><svg:path stroke="#9B9B9A" d="M34.355 28.171V9.115s1.314-2.392 3 0V28.17"></svg:path><svg:path d="M36.046 53.866H25.598c-.678 0-1.285.386-1.61.981c-3.458 6.342-8.083 7.842-9.34 8.079c-.163.03-.321.057-.486.062c-14.404.425-7.096-18.564-7.096-18.564c2.084-6.09 7.114-13.241 8.808-14.89c.348-.34.81-.53 1.297-.53h37.656c.487 0 .949.19 1.297.53c1.694 1.649 6.724 8.8 8.808 14.89c0 0 7.308 18.99-7.096 18.564a3 3 0 0 1-.486-.062c-1.257-.237-5.882-1.737-9.34-8.078c-.325-.596-.932-.982-1.61-.982H35.954"></svg:path></svg:g><svg:path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M36.046 53.866H25.598c-.678 0-1.285.386-1.61.981c-3.458 6.342-8.083 7.842-9.34 8.079c-.163.03-.321.057-.486.062c-14.404.425-7.096-18.564-7.096-18.564c2.084-6.09 7.114-13.241 8.808-14.89c.348-.34.81-.53 1.297-.53h37.656c.487 0 .949.19 1.297.53c1.694 1.649 6.724 8.8 8.808 14.89c0 0 7.308 18.99-7.096 18.564a3 3 0 0 1-.486-.062c-1.257-.237-5.882-1.737-9.34-8.078c-.325-.596-.932-.982-1.61-.982H35.954"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M24.011 38.376v.81h-9.364v-.81h5.045z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M18.924 34.099h.81v9.363h-.81v-5.045z"></svg:path><svg:circle cx="30.25" cy="46" r="4"></svg:circle><svg:circle cx="41.75" cy="46" r="4"></svg:circle><svg:circle cx="48.612" cy="38.781" r="2"></svg:circle><svg:circle cx="57.081" cy="38.781" r="2"></svg:circle><svg:circle cx="52.847" cy="42.536" r="2"></svg:circle><svg:circle cx="52.847" cy="35.067" r="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M34.355 25.083V7.057s.505-.87 1.29-.991c.482-.075 1.07.131 1.71.991v18.026"></svg:path>`,
})
export class OpenmojiVideoGameIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
