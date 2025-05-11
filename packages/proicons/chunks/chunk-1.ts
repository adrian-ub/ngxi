import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTuneIcon],svg[proicons-tune-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 12h10.5m0 0a2.5 2.5 0 0 0 5 0m-5 0a2.5 2.5 0 0 1 5 0m0 0h3M7.75 5.25h13.5m-13.5 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-5 13.5h3m0 0a2.5 2.5 0 0 0 5 0m-5 0a2.5 2.5 0 0 1 5 0m0 0h10.5"></svg:path>`,
})
export class ProiconsTuneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsTvIcon],svg[proicons-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="18.5" height="13" x="2.75" y="4" rx="3"></svg:rect><svg:path d="M7 20h10"></svg:path></svg:g>`,
})
export class ProiconsTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsTypescriptIcon],svg[proicons-typescript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="16.5" height="16.5" x="3.75" y="3.75" rx="2"></svg:rect><svg:path d="M17.25 11.25h-2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2m-4.75-6v6m-2-6h4"></svg:path></svg:g>`,
})
export class ProiconsTypescriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsUbuntuIcon],svg[proicons-ubuntu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12.75" cy="12" r="4.75"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14.546 20.054a8.254 8.254 0 0 1-9.67-5.582m13.95 3.109A8.22 8.22 0 0 0 21 12a8.22 8.22 0 0 0-2.174-5.582m-4.28-2.473a8.254 8.254 0 0 0-9.67 5.582"></svg:path><svg:path d="M15.625 16.98a2.5 2.5 0 1 1 2.5 4.33a2.5 2.5 0 0 1-2.5-4.33ZM4.5 9.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Zm11.125-6.81a2.5 2.5 0 1 1 2.5 4.33a2.5 2.5 0 0 1-2.5-4.33Z"></svg:path></svg:g>`,
})
export class ProiconsUbuntuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsVehicleCarIcon],svg[proicons-vehicle-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 11.75a2 2 0 0 1 2-2h12.5a2 2 0 0 1 2 2v6H3.75z"></svg:path><svg:circle cx="7" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="17" cy="13" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 14.75h4M6.271 5.567a2 2 0 0 1 1.88-1.317h7.698a2 2 0 0 1 1.88 1.317L19.25 9.75H4.75zM3.75 17.75h3.438v1.7a1.3 1.3 0 0 1-1.3 1.3H5.05a1.3 1.3 0 0 1-1.3-1.3zm13.063 0h3.437v1.7a1.3 1.3 0 0 1-1.3 1.3h-.837a1.3 1.3 0 0 1-1.3-1.3z"></svg:path></svg:g>`,
})
export class ProiconsVehicleCarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsVideoIcon],svg[proicons-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="13.5" height="12" x="2.75" y="6" rx="3.5"></svg:rect><svg:path d="m16.25 9.74l3.554-1.77a1 1 0 0 1 1.446.895v6.268a1 1 0 0 1-1.447.895l-3.553-1.773z"></svg:path></svg:g>`,
})
export class ProiconsVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsVideoClipIcon],svg[proicons-video-clip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="18.5" height="15.5" x="2.75" y="4.25" stroke-linecap="round" stroke-linejoin="round" rx="3.5"></svg:rect><svg:path d="M8.83 13.29c0 1.098 0 1.646.23 1.964c.201.277.51.456.85.492c.391.041.867-.232 1.818-.779l2.244-1.29c.956-.55 1.435-.825 1.595-1.185a1.2 1.2 0 0 0 0-.984c-.16-.36-.639-.635-1.595-1.184l-2.244-1.291c-.951-.547-1.427-.82-1.817-.779c-.34.036-.65.215-.85.492c-.231.318-.231.866-.231 1.963z"></svg:path></svg:g>`,
})
export class ProiconsVideoClipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsVisualStudioCodeIcon],svg[proicons-visual-studio-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M15.695 16.318L10.333 12m5.362 4.318V7.682m0 8.636v2.18c0 .68-.27 1.332-.75 1.813M10.332 12l5.362-4.318M10.333 12L7.828 9.983m7.867-2.3v-2.18c0-.68-.27-1.333-.75-1.814M7.827 14.017l-3.516 2.831a.61.61 0 0 1-.813-.044l-1.071-1.076a.61.61 0 0 1 .022-.881L5.598 12m2.23 2.017l6.456 5.84q.304.273.66.454m-7.116-6.294L5.598 12m0 0L2.45 9.153a.61.61 0 0 1-.022-.881l1.071-1.076c.22-.22.57-.24.813-.044l3.516 2.83m0 0l6.456-5.839q.304-.273.66-.454m0 16.622a3.04 3.04 0 0 0 2.517.113l2.334-.937c.577-.232.955-.791.955-1.413V5.926c0-.622-.378-1.181-.955-1.413l-2.334-.937a3.04 3.04 0 0 0-2.517.113"></svg:path>`,
})
export class ProiconsVisualStudioCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsVolumeIcon],svg[proicons-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.253 19.4L7.99 15.782a1 1 0 0 0-.647-.238H4.75a2 2 0 0 1-2-2v-3.086a2 2 0 0 1 2-2h2.594a1 1 0 0 0 .647-.238l4.262-3.62a1 1 0 0 1 1.647.762V18.64a1 1 0 0 1-1.647.762Z"></svg:path><svg:path stroke-linecap="round" d="M16.664 8.542c.48.35.88.854 1.158 1.462c.277.607.424 1.295.424 1.996c0 .7-.147 1.39-.424 1.996c-.278.607-.677 1.112-1.158 1.462M18.7 6.424c.775.565 1.42 1.378 1.867 2.357c.447.978.683 2.089.683 3.219s-.236 2.24-.683 3.22c-.448.978-1.092 1.791-1.867 2.356"></svg:path></svg:g>`,
})
export class ProiconsVolumeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsVolumeLowIcon],svg[proicons-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.253 19.4L7.99 15.782a1 1 0 0 0-.647-.238H4.75a2 2 0 0 1-2-2v-3.086a2 2 0 0 1 2-2h2.594a1 1 0 0 0 .647-.238l4.262-3.62a1 1 0 0 1 1.647.762V18.64a1 1 0 0 1-1.647.762Z"></svg:path><svg:path stroke-linecap="round" d="M16.664 8.542c.48.35.88.854 1.158 1.462c.277.607.423 1.295.423 1.996c0 .7-.146 1.39-.423 1.996c-.278.607-.677 1.112-1.158 1.462"></svg:path></svg:g>`,
})
export class ProiconsVolumeLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsVolumeMuteIcon],svg[proicons-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.253 19.4L7.99 15.782a1 1 0 0 0-.647-.238H4.75a2 2 0 0 1-2-2v-3.086a2 2 0 0 1 2-2h2.594a1 1 0 0 0 .647-.238l4.262-3.62a1 1 0 0 1 1.647.762V18.64a1 1 0 0 1-1.647.762Z"></svg:path><svg:path stroke-linecap="round" d="m16.53 9.64l4.72 4.72m0-4.72l-4.72 4.72"></svg:path></svg:g>`,
})
export class ProiconsVolumeMuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsVuejsIcon],svg[proicons-vuejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M5.701 4.57h3.161c.384 0 .739.202.936.531L12 8.791l2.203-3.69a1.09 1.09 0 0 1 .935-.531h3.16m-12.597 0h-1.86a1.09 1.09 0 0 0-.935 1.648l8.158 13.671a1.09 1.09 0 0 0 1.872 0l8.158-13.671a1.09 1.09 0 0 0-.935-1.648h-1.86M5.7 4.57L12 15.124L18.299 4.57"></svg:path>`,
})
export class ProiconsVuejsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsWatchIcon],svg[proicons-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.314 12a6.3 6.3 0 0 0-2.623-5.123v-2.92c0-.805-.652-1.457-1.457-1.457H9.766c-.805 0-1.457.652-1.457 1.457v2.92A6.3 6.3 0 0 0 5.686 12m12.628 0a6.3 6.3 0 0 1-2.623 5.123v2.92c0 .805-.652 1.457-1.457 1.457H9.766a1.457 1.457 0 0 1-1.457-1.457v-2.92A6.3 6.3 0 0 1 5.686 12m12.628 0a6.314 6.314 0 1 1-12.628 0m12.628 0a6.314 6.314 0 1 0-12.628 0"></svg:path>`,
})
export class ProiconsWatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsWeatherCloudyIcon],svg[proicons-weather-cloudy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.465 13.796a3.43 3.43 0 0 1-.715-2.101a3.457 3.457 0 0 1 3.114-3.437a.31.31 0 0 0 .276-.305A3.46 3.46 0 0 1 9.603 4.5c.88 0 1.682.327 2.293.866m4.665 6.083a3.46 3.46 0 0 0-3.493-3.453a3.46 3.46 0 0 0-3.432 3.453c0 .157-.12.29-.276.305a3.46 3.46 0 0 0-3.114 3.437a3.46 3.46 0 0 0 3.462 3.453h8.08a3.46 3.46 0 0 0 3.462-3.453a3.46 3.46 0 0 0-3.462-3.454h-.95a.283.283 0 0 1-.277-.288"></svg:path>`,
})
export class ProiconsWeatherCloudyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsWebpackIcon],svg[proicons-webpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12L7.435 9.364M12 12l4.565-2.636M12 12v5.272m-8.01-.647c.178.31.437.573.757.757l6.218 3.59c.32.186.678.278 1.035.278m-8.01-4.625a2.07 2.07 0 0 1-.278-1.035V8.41c0-.37.099-.726.277-1.035m0 9.25l3.446-1.99M12 21.25a2.07 2.07 0 0 0 1.035-.277l6.218-3.59c.32-.185.58-.449.758-.758M12 21.25v-3.978m8.01-.647l-3.306-1.91l-.136-.083m3.443 1.993c.178-.31.277-.665.277-1.035V8.41c0-.37-.099-.726-.277-1.035m0 0a2.07 2.07 0 0 0-.758-.757l-6.218-3.59A2.07 2.07 0 0 0 12 2.75m8.01 4.625l-3.445 1.99M12 2.75a2.07 2.07 0 0 0-1.035.277l-6.218 3.59c-.32.185-.58.449-.758.758M12 2.75v3.978m-8.01.647l3.445 1.99m0 0c-.09.154-.139.332-.139.516v4.237c0 .185.05.363.139.518m0-5.272c.089-.155.218-.286.378-.379l3.67-2.118c.16-.092.338-.139.517-.139m4.565 2.636a1.03 1.03 0 0 0-.378-.379l-3.67-2.118A1.03 1.03 0 0 0 12 6.728m4.565 2.636c.09.155.139.333.139.517v4.237c0 .184-.049.36-.136.514m0 0c-.09.156-.22.29-.381.383l-3.67 2.118c-.16.092-.338.139-.517.139m-4.565-2.636c.089.155.218.286.378.379l3.67 2.118c.16.092.338.139.517.139"></svg:path>`,
})
export class ProiconsWebpackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsWiFiIcon],svg[proicons-wi-fi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 8.988A12.068 12.068 0 0 1 21.25 9"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.64 11.964a8.297 8.297 0 0 1 12.72.01m-9.805 3.029a4.495 4.495 0 0 1 6.89.005"></svg:path><svg:circle cx="12" cy="17.878" r="1.445" fill="currentColor"></svg:circle></svg:g>`,
})
export class ProiconsWiFiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsWindowIcon],svg[proicons-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 7.75a4 4 0 0 1 4-4h8.5a4 4 0 0 1 4 4v8.5a4 4 0 0 1-4 4h-8.5a4 4 0 0 1-4-4zm0 .5h16.5"></svg:path>`,
})
export class ProiconsWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsWindowAddIcon],svg[proicons-window-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 8.25h16.5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20.25 10.736V7.75a4 4 0 0 0-4-4h-8.5a4 4 0 0 0-4 4v8.5a4 4 0 0 0 4 4h2.986"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 23a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m0-8.993a.5.5 0 0 1 .5.5V17h2.493a.5.5 0 1 1 0 1H18v2.493a.5.5 0 1 1-1 0V18h-2.493a.5.5 0 1 1 0-1H17v-2.493a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class ProiconsWindowAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsWindowMultipleIcon],svg[proicons-window-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.75 6.25a3.5 3.5 0 0 1 3.5-3.5h8.5a3.5 3.5 0 0 1 3.5 3.5v8.5a3.5 3.5 0 0 1-3.5 3.5h-8.5a3.5 3.5 0 0 1-3.5-3.5z"></svg:path><svg:path d="M21.25 6.75v8a6.5 6.5 0 0 1-6.5 6.5h-8m-4-14.273h15.5"></svg:path></svg:g>`,
})
export class ProiconsWindowMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsWindowMultipleVarIcon],svg[proicons-window-multiple-var-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.75 6.75a4 4 0 0 1 4-4h7.5a4 4 0 0 1 4 4v7.5a4 4 0 0 1-4 4h-7.5a4 4 0 0 1-4-4z"></svg:path><svg:path d="M21.25 6.75v7.5a7 7 0 0 1-7 7h-7.5m-4-14.273h15.5"></svg:path></svg:g>`,
})
export class ProiconsWindowMultipleVarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsWrenchIcon],svg[proicons-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M10.691 4.562a6.19 6.19 0 0 1 6.545-1.42c.378.141.45.62.165.906l-2.787 2.787a1.037 1.037 0 0 0 0 1.467l1.084 1.084a1.037 1.037 0 0 0 1.467 0L19.953 6.6c.285-.285.764-.212.905.165a6.187 6.187 0 0 1-7.696 8.058c-.396-.128-.84-.054-1.134.24L6.481 20.61a2.186 2.186 0 1 1-3.09-3.09l5.547-5.548c.294-.294.368-.738.24-1.134a6.19 6.19 0 0 1 1.513-6.276Z"></svg:path>`,
})
export class ProiconsWrenchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsXTwitterIcon],svg[proicons-x-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13.081 10.712l-4.786-6.71a.6.6 0 0 0-.489-.252H5.28a.6.6 0 0 0-.488.948l6.127 8.59m2.162-2.576l6.127 8.59a.6.6 0 0 1-.488.948h-2.526a.6.6 0 0 1-.489-.252l-4.786-6.71m2.162-2.576l5.842-6.962m-8.004 9.538L5.077 20.25"></svg:path>`,
})
export class ProiconsXTwitterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsYoutubeIcon],svg[proicons-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2.45 11.419c0-3.017.3-4.526 1.237-5.463s2.446-.937 5.463-.937h5.7c3.017 0 4.525 0 5.463.937s1.237 2.446 1.237 5.463v1.162c0 3.017-.3 4.526-1.237 5.463s-2.446.937-5.463.937h-5.7c-3.017 0-4.526 0-5.463-.937S2.45 15.598 2.45 12.581z"></svg:path><svg:path d="m14.686 11.491l-4.268-2.667a.6.6 0 0 0-.918.509v5.335a.6.6 0 0 0 .918.508l4.268-2.667a.6.6 0 0 0 0-1.018Z"></svg:path></svg:g>`,
})
export class ProiconsYoutubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsYoutubeShortsIcon],svg[proicons-youtube-shorts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M12.834 3.186a3.627 3.627 0 0 1 3.627 6.282l-.74.426a3.626 3.626 0 0 1 1.935 6.766l-7.02 4.053a3.626 3.626 0 1 1-3.627-6.28l.739-.428A3.627 3.627 0 0 1 5.814 7.24z"></svg:path><svg:path fill="currentColor" d="M13.992 11.016L11.2 9.271c-.74-.463-1.7.07-1.7.942v3.49c0 .873.96 1.405 1.7.943l2.792-1.746a1.11 1.11 0 0 0 0-1.884"></svg:path></svg:g>`,
})
export class ProiconsYoutubeShortsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsZoomInIcon],svg[proicons-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.56 10.56h6m-3 3v-6m4.993 7.993a7.06 7.06 0 1 0-9.985-9.985a7.06 7.06 0 0 0 9.985 9.985m0 0L20 20"></svg:path><svg:path d="M15.553 5.568a7.06 7.06 0 1 1-9.985 9.985a7.06 7.06 0 0 1 9.985-9.985"></svg:path></svg:g>`,
})
export class ProiconsZoomInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[proiconsZoomOutIcon],svg[proicons-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.56 10.56h6m1.993 4.993a7.06 7.06 0 1 0-9.985-9.985a7.06 7.06 0 0 0 9.985 9.985m0 0L20 20"></svg:path><svg:path d="M15.553 5.568a7.06 7.06 0 1 1-9.985 9.985a7.06 7.06 0 0 1 9.985-9.985"></svg:path></svg:g>`,
})
export class ProiconsZoomOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
