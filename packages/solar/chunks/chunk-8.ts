import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMirrorRightLinearIcon],svg[solar-mirror-right-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 21h1c3.771 0 5.657 0 6.828-1.172S21 16.771 21 13v-2c0-3.771 0-5.657-1.172-6.828S16.771 3 13 3h-1"></svg:path><svg:path stroke-dasharray="2.5 3" stroke-linecap="round" d="M13 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15V9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h4"></svg:path><svg:path stroke-linecap="round" d="M12 22V2"></svg:path></svg:g>`,
})
export class SolarMirrorRightLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMirrorRightOutlineIcon],svg[solar-mirror-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 3.75q-.653 0-1.202.003a.75.75 0 0 1-.013-1.5q.561-.004 1.213-.003h.911a.75.75 0 0 1 0 1.5zm-3.371-.695a.75.75 0 0 1-.494.938c-.321.1-.545.235-.726.416s-.316.405-.416.726a.75.75 0 0 1-1.432-.445c.16-.515.408-.962.787-1.342s.827-.627 1.342-.787a.75.75 0 0 1 .939.494M3.009 7.04a.75.75 0 0 1 .744.757Q3.75 8.348 3.75 9v1.364a.75.75 0 1 1-1.5 0V8.998q0-.652.003-1.213a.75.75 0 0 1 .757-.744M3 12.886a.75.75 0 0 1 .75.75V15q0 .653.003 1.202a.75.75 0 0 1-1.5.013q-.004-.562-.003-1.213v-1.366a.75.75 0 0 1 .75-.75m.055 5.485a.75.75 0 0 1 .938.494c.1.321.235.545.416.726s.405.316.726.416a.75.75 0 1 1-.445 1.432a3.2 3.2 0 0 1-1.342-.787a3.2 3.2 0 0 1-.787-1.342a.75.75 0 0 1 .494-.939m3.986 2.62a.75.75 0 0 1 .757-.744q.55.004 1.202.003h.91a.75.75 0 0 1 0 1.5h-.912q-.652 0-1.213-.003a.75.75 0 0 1-.744-.757M12 1.25a.75.75 0 0 1 .75.75v.25h.306c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-.306V22a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75m.75 2.5v16.5H13c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14z" clip-rule="evenodd"></svg:path>`,
})
export class SolarMirrorRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoneyBagBoldIcon],svg[solar-money-bag-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.052 1.25h-.104c-.899 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.057.427-.074 1.446-.078 2.32c-2.022.067-3.237.303-4.08 1.147C2 8.343 2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14s0-5.657-1.172-6.828c-.843-.844-2.058-1.08-4.08-1.146c-.004-.875-.02-1.894-.078-2.32c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.344-.08-2.242-.08m3.196 4.752c-.005-.847-.019-1.758-.064-2.097c-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.045.34-.06 1.25-.064 2.097Q9.34 5.999 10 6h4q.662 0 1.248.002M12 9.25a.75.75 0 0 1 .75.75v.01c1.089.274 2 1.133 2 2.323a.75.75 0 0 1-1.5 0c0-.384-.426-.916-1.25-.916s-1.25.532-1.25.916s.426.917 1.25.917c1.385 0 2.75.96 2.75 2.417c0 1.19-.911 2.048-2 2.323V18a.75.75 0 0 1-1.5 0v-.01c-1.089-.274-2-1.133-2-2.323a.75.75 0 0 1 1.5 0c0 .384.426.916 1.25.916s1.25-.532 1.25-.916s-.426-.917-1.25-.917c-1.385 0-2.75-.96-2.75-2.417c0-1.19.911-2.049 2-2.323V10a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarMoneyBagBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoneyBagBoldDuotoneIcon],svg[solar-money-bag-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.172 7.172c.843-.844 2.058-1.08 4.08-1.146l1.5-.024Q9.34 5.999 10 6h4q.662 0 1.248.002l1.5.024c2.022.066 3.237.302 4.08 1.146C22 8.343 22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14s0-5.657 1.172-6.828" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 10a.75.75 0 0 0-1.5 0v.01c-1.089.274-2 1.133-2 2.323c0 1.457 1.365 2.417 2.75 2.417c.824 0 1.25.533 1.25.917s-.426.916-1.25.916s-1.25-.532-1.25-.916a.75.75 0 0 0-1.5 0c0 1.19.911 2.048 2 2.323V18a.75.75 0 0 0 1.5 0v-.01c1.089-.274 2-1.133 2-2.323c0-1.457-1.365-2.417-2.75-2.417c-.824 0-1.25-.533-1.25-.917s.426-.916 1.25-.916s1.25.532 1.25.916a.75.75 0 0 0 1.5 0c0-1.19-.911-2.049-2-2.323zm-.698-8.75h-.104c-.898 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.057.427-.073 1.446-.078 2.32l1.5-.023c.005-.847.02-1.758.065-2.097c.062-.461.169-.659.3-.789s.327-.237.789-.3c.483-.064 1.13-.066 2.094-.066s1.612.002 2.095.067c.461.062.659.169.789.3s.238.327.3.788c.045.34.06 1.25.064 2.097l1.5.024c-.004-.875-.02-1.894-.078-2.32c-.084-.628-.27-1.195-.725-1.65c-.456-.456-1.023-.642-1.65-.726c-.595-.08-1.344-.08-2.243-.08"></svg:path>`,
})
export class SolarMoneyBagBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoneyBagBrokenIcon],svg[solar-money-bag-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M3.172 20.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14c0-1.17 0-2.158-.035-3m-1.137-3.828C19.657 6 17.771 6 14 6h-4C6.229 6 4.343 6 3.172 7.172S2 10.229 2 14c0 1.17 0 2.158.035 3M12 2c1.886 0 2.828 0 3.414.586S16 4.114 16 6M8.586 2.586C8 3.172 8 4.114 8 6"></svg:path><svg:path d="M12 17.333c1.105 0 2-.746 2-1.666S13.105 14 12 14s-2-.746-2-1.667c0-.92.895-1.666 2-1.666m0 6.666c-1.105 0-2-.746-2-1.666m2 1.666V18m0-8v.667m0 0c1.105 0 2 .746 2 1.666"></svg:path></svg:g>`,
})
export class SolarMoneyBagBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoneyBagLineDuotoneIcon],svg[solar-money-bag-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14Z"></svg:path><svg:path d="M16 6c0-1.886 0-2.828-.586-3.414S13.886 2 12 2s-2.828 0-3.414.586S8 4.114 8 6" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 17.333c1.105 0 2-.746 2-1.666S13.105 14 12 14s-2-.746-2-1.667c0-.92.895-1.666 2-1.666m0 6.666c-1.105 0-2-.746-2-1.666m2 1.666V18m0-8v.667m0 0c1.105 0 2 .746 2 1.666" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMoneyBagLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoneyBagLinearIcon],svg[solar-money-bag-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14Zm14-8c0-1.886 0-2.828-.586-3.414S13.886 2 12 2s-2.828 0-3.414.586S8 4.114 8 6"></svg:path><svg:path stroke-linecap="round" d="M12 17.333c1.105 0 2-.746 2-1.666S13.105 14 12 14s-2-.746-2-1.667c0-.92.895-1.666 2-1.666m0 6.666c-1.105 0-2-.746-2-1.666m2 1.666V18m0-8v.667m0 0c1.105 0 2 .746 2 1.666"></svg:path></svg:g>`,
})
export class SolarMoneyBagLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoneyBagOutlineIcon],svg[solar-money-bag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.948 1.25h.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.06.44.075.964.079 1.57c.648.021 1.226.06 1.74.128c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238a18 18 0 0 1 1.74-.128c.004-.606.02-1.13.079-1.57c.084-.627.27-1.194.725-1.65c.456-.455 1.023-.64 1.65-.725c.595-.08 1.345-.08 2.243-.08M8.752 5.252q.567-.003 1.192-.002h4.112q.625 0 1.192.002c-.004-.57-.018-1-.064-1.347c-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.046.346-.06.776-.064 1.347M5.71 6.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.027-.14 2.382-.14 4.289s.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289s-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14M12 9.25a.75.75 0 0 1 .75.75v.01c1.089.274 2 1.133 2 2.323a.75.75 0 0 1-1.5 0c0-.384-.426-.916-1.25-.916s-1.25.532-1.25.916s.426.917 1.25.917c1.385 0 2.75.96 2.75 2.417c0 1.19-.911 2.048-2 2.323V18a.75.75 0 0 1-1.5 0v-.01c-1.089-.274-2-1.133-2-2.323a.75.75 0 0 1 1.5 0c0 .384.426.916 1.25.916s1.25-.532 1.25-.916s-.426-.917-1.25-.917c-1.385 0-2.75-.96-2.75-2.417c0-1.19.911-2.049 2-2.323V10a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarMoneyBagOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorBoldIcon],svg[solar-monitor-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17c-2.828 0-4.243 0-5.121-.879c-.57-.569-.77-1.363-.84-2.621h19.923c-.07 1.258-.271 2.052-.84 2.621C20.241 17 18.827 17 16 17h-3.25v4H16a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 8 21h3.25v-4zm2-15h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v1q.002.827-.006 1.5H2.007Q1.998 11.827 2 11v-1c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2"></svg:path>`,
})
export class SolarMonitorBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorBoldDuotoneIcon],svg[solar-monitor-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v1c0 .552 0 1.55-.006 2H2.007C2 12.55 2 11.552 2 11v-1c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.985 17.5c-2.84 0-4.26 0-5.141-.879C2.272 16.052 2.07 15.258 2 14v-1h20v1c-.07 1.258-.272 2.052-.844 2.621c-.882.879-2.301.879-5.14.879h-3.263v4h3.262c.416 0 .753.336.753.75s-.337.75-.753.75h-8.03a.75.75 0 0 1-.753-.75c0-.414.337-.75.753-.75h3.262v-4z"></svg:path>`,
})
export class SolarMonitorBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorBrokenIcon],svg[solar-monitor-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 2.252c-.774.169-1.359.45-1.828.92C2 4.343 2 6.229 2 10v1c0 2.828 0 4.243.879 5.121C3.757 17 5.172 17 8 17h8c2.828 0 4.243 0 5.121-.879C22 15.243 22 13.828 22 11v-1c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2H9m7 20H8m4-5v5m10-9h-6M2 13h10"></svg:path>`,
})
export class SolarMonitorBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorCameraBoldIcon],svg[solar-monitor-camera-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2h-1c-1.414 0-2.121 0-2.56.44C12 2.878 12 3.585 12 5s0 2.121.44 2.56C12.878 8 13.585 8 15 8h1c1.414 0 2.121 0 2.56-.44c.285-.284.386-.681.42-1.31H19l1.615.673c.627.261.94.391 1.162.243C22 7.018 22 6.678 22 6V4c0-.678 0-1.018-.223-1.166c-.222-.148-.535-.018-1.162.243L19 3.75h-.02c-.035-.629-.135-1.026-.42-1.31C18.122 2 17.415 2 16 2M8 17c-2.828 0-4.243 0-5.121-.879c-.57-.569-.77-1.363-.84-2.621h19.923c-.07 1.258-.271 2.052-.84 2.621C20.241 17 18.827 17 16 17h-3.25v4H16a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 8 21h3.25v-4z"></svg:path><svg:path fill="currentColor" d="M22 10v1q.002.827-.006 1.5H2.007Q1.998 11.827 2 11v-1c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h.918c-.205.384-.3.786-.35 1.154c-.068.51-.068 1.128-.068 1.764v.164c0 .636 0 1.254.068 1.764c.078.575.266 1.23.81 1.775c.546.545 1.201.733 1.776.81c.51.07 1.128.07 1.764.069h1.164c.636 0 1.254 0 1.764-.068c.575-.078 1.23-.266 1.775-.81a2.6 2.6 0 0 0 .302-.362l.116.048l.056.023c.26.109.59.246.885.321c.233.06.606.122 1.018.027Q22 9.298 22 10"></svg:path>`,
})
export class SolarMonitorCameraBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorCameraBoldDuotoneIcon],svg[solar-monitor-camera-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2h-1c-1.414 0-2.121 0-2.56.44C12 2.878 12 3.585 12 5s0 2.121.44 2.56C12.878 8 13.585 8 15 8h1c1.414 0 2.121 0 2.56-.44c.285-.284.386-.681.42-1.31H19l1.615.673c.627.261.94.391 1.162.243C22 7.018 22 6.678 22 6V4c0-.678 0-1.018-.223-1.166c-.222-.148-.535-.018-1.162.243L19 3.75h-.02c-.035-.629-.135-1.026-.42-1.31C18.122 2 17.415 2 16 2M7.985 17.5c-2.84 0-4.26 0-5.141-.879C2.272 16.052 2.07 15.258 2 14v-1h20v1c-.07 1.258-.272 2.052-.844 2.621c-.882.879-2.301.879-5.14.879h-3.263v4h3.262c.416 0 .753.336.753.75s-.337.75-.753.75h-8.03a.75.75 0 0 1-.753-.75c0-.414.337-.75.753-.75h3.262v-4z"></svg:path><svg:path fill="currentColor" d="M22 10v1c0 .552-.006 1.55-.013 2H2c-.007-.45 0-1.448 0-2v-1c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h.918c-.205.384-.3.786-.35 1.154c-.068.51-.068 1.128-.068 1.764v.164c0 .636 0 1.254.068 1.764c.078.575.266 1.23.81 1.775c.545.545 1.201.733 1.776.81c.51.07 1.128.07 1.764.069h1.164c.636 0 1.254 0 1.764-.068c.575-.078 1.23-.266 1.775-.81q.174-.176.302-.362l.115.048l.057.023c.26.109.59.246.885.321c.233.06.606.122 1.018.027Q22 9.298 22 10" opacity=".5"></svg:path>`,
})
export class SolarMonitorCameraBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorCameraBrokenIcon],svg[solar-monitor-camera-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 5c0-1.414 0-2.121.44-2.56C12.878 2 13.585 2 15 2h1c1.414 0 2.121 0 2.56.44C19 2.878 19 3.585 19 5s0 2.121-.44 2.56C18.122 8 17.415 8 16 8h-1c-1.414 0-2.121 0-2.56-.44C12 7.122 12 6.415 12 5Zm7-1.25l1.615-.673c.627-.261.94-.392 1.162-.243C22 2.982 22 3.322 22 4v2c0 .678 0 1.018-.223 1.166c-.222.148-.535.018-1.162-.243L19 6.25z"></svg:path><svg:path stroke-linecap="round" d="M16 22H8m4-5v5m10-12v1c0 2.828 0 4.243-.879 5.121C20.243 17 18.828 17 16 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11v-1m7.5-8c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554c-.505.616-.73 1.398-.829 2.538M22 13h-6M2 13h10"></svg:path></svg:g>`,
})
export class SolarMonitorCameraBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorCameraLineDuotoneIcon],svg[solar-monitor-camera-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 5c0-1.414 0-2.121.44-2.56C12.878 2 13.585 2 15 2h1c1.414 0 2.121 0 2.56.44C19 2.878 19 3.585 19 5s0 2.121-.44 2.56C18.122 8 17.415 8 16 8h-1c-1.414 0-2.121 0-2.56-.44C12 7.122 12 6.415 12 5Zm7-1.25l1.615-.673c.627-.261.94-.391 1.162-.243C22 2.982 22 3.322 22 4v2c0 .678 0 1.018-.223 1.166c-.222.148-.535.018-1.162-.243L19 6.25z"></svg:path><svg:path stroke-linecap="round" d="M16 22H8m4-5v5m10-9H2" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M22 10v1c0 2.828 0 4.243-.879 5.121C20.243 17 18.828 17 16 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11V9.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 2 6.212 2 9.5 2"></svg:path></svg:g>`,
})
export class SolarMonitorCameraLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorCameraLinearIcon],svg[solar-monitor-camera-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 5c0-1.414 0-2.121.44-2.56C12.878 2 13.585 2 15 2h1c1.414 0 2.121 0 2.56.44C19 2.878 19 3.585 19 5s0 2.121-.44 2.56C18.122 8 17.415 8 16 8h-1c-1.414 0-2.121 0-2.56-.44C12 7.122 12 6.415 12 5Zm7-1.25l1.615-.673c.627-.261.94-.392 1.162-.243C22 2.982 22 3.322 22 4v2c0 .678 0 1.018-.223 1.166c-.222.148-.535.018-1.162-.243L19 6.25z"></svg:path><svg:path stroke-linecap="round" d="M16 22H8m4-5v5m10-9H2m20-3v1c0 2.828 0 4.243-.879 5.121C20.243 17 18.828 17 16 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11V9.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 2 6.212 2 9.5 2"></svg:path></svg:g>`,
})
export class SolarMonitorCameraLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorCameraOutlineIcon],svg[solar-monitor-camera-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.95 1.25h1.1c.664 0 1.237 0 1.696.062c.492.066.963.215 1.345.597c.236.236.383.505.476.792l.76-.316l.041-.017c.277-.116.557-.233.796-.293c.265-.067.657-.113 1.03.135c.372.248.48.628.52.899c.036.244.036.546.036.847v2.088c0 .3 0 .604-.036.848c-.04.27-.148.65-.52.898c-.373.248-.765.202-1.03.135a6 6 0 0 1-.796-.293q-.02-.007-.041-.017l-.76-.316c-.093.287-.24.556-.476.792c-.382.382-.854.531-1.345.597c-.459.062-1.032.062-1.697.062h-1.098c-.665 0-1.238 0-1.697-.062c-.492-.066-.963-.215-1.345-.597s-.531-.854-.597-1.345c-.062-.459-.062-1.032-.062-1.697v-.098c0-.665 0-1.238.062-1.697c.066-.491.215-.963.597-1.345s.853-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062m4.8 4.5l1.154.48c.135.057.247.103.344.142c.002-.105.002-.226.002-.372V4c0-.146 0-.267-.002-.372q-.145.058-.344.141l-1.154.481zM18.25 5c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048h-1c-.728 0-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546s.002 1.2.048 1.546c.044.325.115.427.172.484s.159.128.484.172c.347.046.818.048 1.546.048h1c.728 0 1.2-.002 1.546-.048c.325-.044.427-.115.484-.172s.128-.159.172-.484c.046-.347.048-.818.048-1.546M9.451 1.25H9.5a.75.75 0 1 1 0 1.5c-1.662 0-2.843.001-3.749.108c-.889.105-1.415.304-1.813.63a3.3 3.3 0 0 0-.45.45c-.326.398-.525.924-.63 1.813c-.107.906-.108 2.087-.108 3.749V11q-.001.687.004 1.25h18.492q.005-.563.004-1.25v-1a.75.75 0 0 1 1.5 0v1.055c0 .662 0 1.263-.013 1.804a.75.75 0 0 1-.01.327c-.017.444-.045.845-.093 1.206c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116H12.75v3.5H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25v-3.5H7.945c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.049-.36-.077-.762-.094-1.206a.75.75 0 0 1-.01-.327c-.013-.541-.013-1.142-.013-1.804V9.45c0-1.602 0-2.872.119-3.876c.122-1.03.377-1.88.96-2.588a5 5 0 0 1 .658-.659c.709-.582 1.557-.837 2.588-.96C6.58 1.25 7.85 1.25 9.451 1.25m-6.644 12.5q.018.234.046.442c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h8c1.435 0 2.436-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4q.028-.207.046-.441z" clip-rule="evenodd"></svg:path>`,
})
export class SolarMonitorCameraOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorLineDuotoneIcon],svg[solar-monitor-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v1c0 2.828 0 4.243-.879 5.121C20.243 17 18.828 17 16 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11z"></svg:path><svg:path stroke-linecap="round" d="M16 22H8m4-5v5m10-9H2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMonitorLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorLinearIcon],svg[solar-monitor-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v1c0 2.828 0 4.243-.879 5.121C20.243 17 18.828 17 16 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11z"></svg:path><svg:path stroke-linecap="round" d="M16 22H8m4-5v5m10-9H2"></svg:path></svg:g>`,
})
export class SolarMonitorLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorOutlineIcon],svg[solar-monitor-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 1.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v1.11c0 .663 0 1.264-.013 1.805a.75.75 0 0 1-.01.327c-.017.444-.045.845-.093 1.206c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116H12.75v3.5H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25v-3.5H7.945c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.049-.36-.077-.762-.094-1.206a.75.75 0 0 1-.01-.327c-.013-.541-.013-1.142-.013-1.804V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m-7.137 12.5q.018.234.046.442c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h8c1.435 0 2.436-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4a8 8 0 0 0 .046-.441zm18.44-1.5H2.753q-.005-.563-.004-1.25v-1c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.138 1.028.14 2.382.14 4.289v1q.001.687-.004 1.25" clip-rule="evenodd"></svg:path>`,
})
export class SolarMonitorOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorSmartphoneBoldIcon],svg[solar-monitor-smartphone-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2h-4C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10v1q-.002.827.007 1.5h10.595c.103-.68.336-1.387.923-1.975c.618-.618 1.37-.843 2.08-.938c.646-.087 1.44-.087 2.305-.087h.18c.865 0 1.659 0 2.304.087c.538.072 1.098.218 1.606.551V10c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2M2.879 16.121C3.757 17 5.172 17 8 17h3.25v4H8a.75.75 0 0 0 0 1.5h5.55l-.025-.025c-.618-.618-.843-1.37-.938-2.08c-.087-.646-.087-1.44-.087-2.305v-3.18c0-.498 0-.973.017-1.41H2.038c.07 1.258.271 2.052.84 2.621"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 15v3c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18v-3c0-1.886 0-2.828.586-3.414S16.114 11 18 11s2.828 0 3.414.586S22 13.114 22 15m-5.75 5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarMonitorSmartphoneBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorSmartphoneBoldDuotoneIcon],svg[solar-monitor-smartphone-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 15v3c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18v-3c0-1.886 0-2.828.586-3.414S16.114 11 18 11s2.828 0 3.414.586S22 13.114 22 15m-5.75 5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8 17c-2.829 0-4.243 0-5.122-.879c-.569-.569-.807-1.363-.878-2.621V13h10.516v.5c-.016.437-.016.912-.016 1.41v3.18c0 .865 0 1.659.086 2.304c.096.711.32 1.463.939 2.08l.025.026H8A.75.75 0 0 1 8 21h3.25v-4z"></svg:path><svg:path fill="currentColor" d="M10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v.138c-.508-.333-1.069-.48-1.606-.551C19.75 9.5 18.955 9.5 18.09 9.5h-.18c-.865 0-1.659 0-2.304.087c-.711.095-1.463.32-2.08.938c-.588.588-.82 1.296-.924 1.975v.5H2v-.5c-.007-.45 0-.948 0-1.5v-1c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2" opacity=".5"></svg:path>`,
})
export class SolarMonitorSmartphoneBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorSmartphoneBrokenIcon],svg[solar-monitor-smartphone-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11v-1c0-3.771 0-5.657 1.172-6.828c.47-.47 1.054-.751 1.828-.92M22 8.5c0-2.335 0-3.502-.472-4.386a4 4 0 0 0-1.642-1.642C19.002 2 17.835 2 15.5 2H9"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M14 15c0-1.886 0-2.828.586-3.414S16.114 11 18 11s2.828 0 3.414.586S22 13.114 22 15v3c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 20h-2"></svg:path><svg:path fill="currentColor" d="M11 22v.75a.75.75 0 0 0 .75-.75zm-3-.75a.75.75 0 0 0 0 1.5zM11.75 17a.75.75 0 0 0-1.5 0zM11 21.25H8v1.5h3zm.75.75v-5h-1.5v5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11 13H2"></svg:path></svg:g>`,
})
export class SolarMonitorSmartphoneBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorSmartphoneLineDuotoneIcon],svg[solar-monitor-smartphone-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11v-1c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h5.5c2.335 0 3.502 0 4.386.472a4 4 0 0 1 1.642 1.642C22 4.998 22 6.165 22 8.5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M14 15c0-1.886 0-2.828.586-3.414S16.114 11 18 11s2.828 0 3.414.586S22 13.114 22 15v3c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 20h-2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11 22v.75a.75.75 0 0 0 .75-.75zm-3-.75a.75.75 0 0 0 0 1.5zM11.75 17a.75.75 0 0 0-1.5 0zM11 21.25H8v1.5h3zm.75.75v-5h-1.5v5z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11 13H2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMonitorSmartphoneLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorSmartphoneLinearIcon],svg[solar-monitor-smartphone-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M11 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11v-1c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h5.5c2.335 0 3.502 0 4.386.472a4 4 0 0 1 1.642 1.642C22 4.998 22 6.165 22 8.5"></svg:path><svg:path d="M14 15c0-1.886 0-2.828.586-3.414S16.114 11 18 11s2.828 0 3.414.586S22 13.114 22 15v3c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z"></svg:path><svg:path stroke-linecap="round" d="M19 20h-2m-6 2H8m3 0v-5m0-4H2"></svg:path></svg:g>`,
})
export class SolarMonitorSmartphoneLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorSmartphoneOutlineIcon],svg[solar-monitor-smartphone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 1.25h5.59c1.139 0 2.04 0 2.766.062c.743.063 1.37.195 1.94.499a4.75 4.75 0 0 1 1.95 1.95c.303.569.435 1.196.498 1.939c.062.725.062 1.627.062 2.766V8.5a.75.75 0 0 1-1.5 0c0-1.18 0-2.018-.056-2.673c-.055-.646-.16-1.044-.328-1.359a3.25 3.25 0 0 0-1.334-1.334c-.315-.168-.713-.273-1.359-.328c-.655-.055-1.493-.056-2.673-.056H10c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 4.705 2.89 5.71c-.138 1.029-.14 2.383-.14 4.29v1q-.001.687.004 1.25H11a.75.75 0 0 1 0 1.5H2.807q.018.234.046.442c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h3a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h2.25v-3.5H7.945c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.049-.36-.077-.762-.094-1.206a.75.75 0 0 1-.01-.327c-.013-.541-.013-1.142-.013-1.804V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m8.004 9h.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.344.08 2.242v3.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.343.08-2.242.08h-.104c-.899 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.343-.08-2.242v-3.104c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.726-1.65c.455-.456 1.022-.642 1.65-.726c.594-.08 1.343-.08 2.242-.08m-2.043 1.566c-.461.063-.659.17-.789.3s-.237.328-.3.79c-.064.482-.066 1.13-.066 2.094v3c0 .964.002 1.612.066 2.095c.063.461.17.659.3.789s.328.237.79.3c.482.064 1.13.066 2.094.066s1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095v-3c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066s-1.612.002-2.095.066M16.25 20a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarMonitorSmartphoneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonBoldIcon],svg[solar-moon-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10"></svg:path>`,
})
export class SolarMoonBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonBoldDuotoneIcon],svg[solar-moon-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10a10 10 0 0 1-3.321-.564A9 9 0 0 1 8 18a8.97 8.97 0 0 1 2.138-5.824A6.5 6.5 0 0 0 15.5 15a6.5 6.5 0 0 0 5.567-3.143c.24-.396.933-.32.933.143" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M2 12c0 4.359 2.789 8.066 6.679 9.435A9 9 0 0 1 8 18c0-2.221.805-4.254 2.138-5.824A6.47 6.47 0 0 1 9 8.5a6.5 6.5 0 0 1 3.143-5.567C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12"></svg:path>`,
})
export class SolarMoonBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonBrokenIcon],svg[solar-moon-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zm-4.767 17.08a.75.75 0 1 0-.752 1.298zm-4.687-2.638a.75.75 0 1 0 1.298-.75zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zm-18.5 0A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606zM12 21.25a9.2 9.2 0 0 1-4.624-1.237l-.752 1.298A10.7 10.7 0 0 0 12 22.75zm-8.013-4.625A9.2 9.2 0 0 1 2.75 12h-1.5a10.7 10.7 0 0 0 1.439 5.375z"></svg:path>`,
})
export class SolarMoonBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonFogBoldIcon],svg[solar-moon-fog-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2c.463 0 .54.693.143.933a6.5 6.5 0 1 0 8.924 8.924c.24-.396.933-.32.933.143c0 1.138-.19 2.231-.54 3.25H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.54A10 10 0 0 1 2 12m3 6.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5zm3 3a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zM19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.48.48 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.48.48 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.48.48 0 0 1-.273-.274z"></svg:path><svg:path fill="currentColor" d="M16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.48.48 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.48.48 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.48.48 0 0 1-.272-.273z"></svg:path>`,
})
export class SolarMoonFogBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonFogBoldDuotoneIcon],svg[solar-moon-fog-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 16a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m6 6a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4.25 19a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75M12 2C6.477 2 2 6.477 2 12a10 10 0 0 0 .832 4h18.336A10 10 0 0 0 22 12c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.48.48 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.48.48 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.48.48 0 0 1-.273-.274zM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.48.48 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.48.48 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.48.48 0 0 1-.272-.273z"></svg:path>`,
})
export class SolarMoonFogBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonFogBrokenIcon],svg[solar-moon-fog-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 22h8M5 19h14M2 16h20"></svg:path><svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zM20.481 15.7a.75.75 0 0 0 1.374.6zm-18.336.6a.75.75 0 0 0 1.374-.6zm1.842-8.924a.75.75 0 0 0-1.298-.752zm2.637-4.687a.75.75 0 1 0 .752 1.298zM15.5 14.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zm11.5 3.5a9.2 9.2 0 0 1-.77 3.7l1.375.6c.576-1.318.895-2.773.895-4.3zM3.52 15.7a9.2 9.2 0 0 1-.77-3.7h-1.5c0 1.527.319 2.982.895 4.3zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606zM2.75 12c0-1.686.45-3.265 1.237-4.624l-1.298-.752A10.7 10.7 0 0 0 1.25 12zm4.626-8.013A9.2 9.2 0 0 1 12 2.75v-1.5c-1.957 0-3.794.524-5.376 1.439z"></svg:path><svg:path stroke="currentColor" d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.48.48 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.48.48 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.48.48 0 0 1-.273-.274zM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.48.48 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.48.48 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.48.48 0 0 1-.272-.273z"></svg:path></svg:g>`,
})
export class SolarMoonFogBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonFogLineDuotoneIcon],svg[solar-moon-fog-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 22h8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 19h14" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 16h20"></svg:path><svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zm11.5 3.5a9.2 9.2 0 0 1-.77 3.7l1.375.6c.576-1.318.895-2.773.895-4.3zM3.52 15.7a9.2 9.2 0 0 1-.77-3.7h-1.5c0 1.527.319 2.982.895 4.3zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606z" opacity=".5"></svg:path><svg:path stroke="currentColor" d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.48.48 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.48.48 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.48.48 0 0 1-.273-.274zM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.48.48 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.48.48 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.48.48 0 0 1-.272-.273z"></svg:path></svg:g>`,
})
export class SolarMoonFogLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonFogLinearIcon],svg[solar-moon-fog-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 22h8M5 19h14M2 16h20"></svg:path><svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zm11.5 3.5a9.2 9.2 0 0 1-.77 3.7l1.375.6c.576-1.318.895-2.773.895-4.3zM3.52 15.7a9.2 9.2 0 0 1-.77-3.7h-1.5c0 1.527.319 2.982.895 4.3zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606z"></svg:path><svg:path stroke="currentColor" d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.48.48 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.48.48 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.48.48 0 0 1-.273-.274zM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.48.48 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.48.48 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.48.48 0 0 1-.272-.273z"></svg:path></svg:g>`,
})
export class SolarMoonFogLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonFogOutlineIcon],svg[solar-moon-fog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.017 2.802A9.25 9.25 0 0 0 2.75 12c0 1.145.208 2.24.587 3.25h9.512a7.253 7.253 0 0 1-1.832-12.448m7.134 12.448h2.512a9.2 9.2 0 0 0 .535-2.267a7.27 7.27 0 0 1-3.047 2.267m4.087.038c.332-1.037.512-2.142.512-3.288c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606a5.75 5.75 0 1 1-7.894-7.894c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026C6.063 1.25 1.25 6.063 1.25 12c0 1.146.18 2.251.512 3.288A.75.75 0 0 0 2 16.75h20a.75.75 0 0 0 .238-1.462M4.25 19a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75m3 3a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"></svg:path><svg:path d="M20.366 2.124c-.328-.832-1.504-.832-1.83 0l-.429 1.09l-1.084.429c-.83.328-.83 1.504 0 1.832l1.084.43l.428 1.089c.327.832 1.503.832 1.83 0l.429-1.09l1.084-.429c.83-.328.83-1.504 0-1.832l-1.084-.43zm-.916.406l.415 1.055c.1.254.3.455.554.556l1.057.418l-1.057.419a.98.98 0 0 0-.554.555l-.415 1.055l-.414-1.055a.98.98 0 0 0-.554-.555l-1.057-.419l1.057-.418a.98.98 0 0 0 .554-.556zm-2.952 5.417c-.327-.833-1.503-.833-1.83 0l-.155.393l-.39.155c-.83.328-.83 1.504 0 1.833l.39.154l.155.394c.327.832 1.503.832 1.83 0l.155-.394l.39-.154c.83-.329.83-1.505 0-1.833l-.39-.155zm-.915.405l.141.36c.1.253.3.455.554.555l.364.144l-.364.144a.98.98 0 0 0-.554.556l-.141.36l-.141-.36a.98.98 0 0 0-.554-.556l-.364-.144l.364-.144a.98.98 0 0 0 .554-.555z"></svg:path></svg:g>`,
})
export class SolarMoonFogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonLineDuotoneIcon],svg[solar-moon-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606z"></svg:path>`,
})
export class SolarMoonLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonLinearIcon],svg[solar-moon-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606z"></svg:path>`,
})
export class SolarMoonLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonOutlineIcon],svg[solar-moon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.017 2.802a9.25 9.25 0 1 0 10.181 10.181A7.25 7.25 0 1 1 11.017 2.802M1.25 12C1.25 6.063 6.063 1.25 12 1.25c.717 0 1.075.571 1.137 1.026c.059.438-.103.995-.606 1.299a5.75 5.75 0 1 0 7.894 7.894c.304-.503.861-.665 1.299-.606c.455.062 1.026.42 1.026 1.137c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12" clip-rule="evenodd"></svg:path>`,
})
export class SolarMoonOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonSleepBoldIcon],svg[solar-moon-sleep-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 2.75a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .53 1.28l-2.72 2.72H22a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.53-1.28l2.72-2.72zm-4.5 6a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .53 1.28l-1.72 1.72h1.19a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.53-1.28l1.72-1.72z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10"></svg:path>`,
})
export class SolarMoonSleepBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonSleepBoldDuotoneIcon],svg[solar-moon-sleep-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 2.75a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .53 1.28l-2.72 2.72H22a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.53-1.28l2.72-2.72zm-4.5 6a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .53 1.28l-1.72 1.72h1.19a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.53-1.28l1.72-1.72z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path>`,
})
export class SolarMoonSleepBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonSleepBrokenIcon],svg[solar-moon-sleep-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 8h3l-3 3h3M18 2h4l-4 4h4"></svg:path><svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zm-4.767 17.08a.75.75 0 1 0-.752 1.298zm-4.687-2.638a.75.75 0 1 0 1.298-.75zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zm-18.5 0A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606zM12 21.25a9.2 9.2 0 0 1-4.624-1.237l-.752 1.298A10.7 10.7 0 0 0 12 22.75zm-8.013-4.625A9.2 9.2 0 0 1 2.75 12h-1.5a10.7 10.7 0 0 0 1.439 5.375z"></svg:path></svg:g>`,
})
export class SolarMoonSleepBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonSleepLineDuotoneIcon],svg[solar-moon-sleep-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 8h3l-3 3h3M18 2h4l-4 4h4"></svg:path><svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606z" opacity=".4"></svg:path></svg:g>`,
})
export class SolarMoonSleepLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonSleepLinearIcon],svg[solar-moon-sleep-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 8h3l-3 3h3M18 2h4l-4 4h4"></svg:path><svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606z"></svg:path></svg:g>`,
})
export class SolarMoonSleepLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonSleepOutlineIcon],svg[solar-moon-sleep-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.017 2.802a9.25 9.25 0 1 0 10.181 10.181A7.25 7.25 0 1 1 11.017 2.802M1.25 12C1.25 6.063 6.063 1.25 12 1.25c.717 0 1.075.571 1.137 1.026c.059.438-.103.995-.606 1.299a5.75 5.75 0 1 0 7.894 7.894c.304-.503.861-.665 1.299-.606c.455.062 1.026.42 1.026 1.137c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12M18 2.75a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .53 1.28l-2.72 2.72H22a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.53-1.28l2.72-2.72zm-4.5 6a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .53 1.28l-1.72 1.72h1.19a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.53-1.28l1.72-1.72z" clip-rule="evenodd"></svg:path>`,
})
export class SolarMoonSleepOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonStarsBoldIcon],svg[solar-moon-stars-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.48.48 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.48.48 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.48.48 0 0 1-.273-.274zM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.48.48 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.48.48 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.48.48 0 0 1-.272-.273z"></svg:path><svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10"></svg:path>`,
})
export class SolarMoonStarsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonStarsBoldDuotoneIcon],svg[solar-moon-stars-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.48.48 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.48.48 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.48.48 0 0 1-.273-.274zM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.48.48 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.48.48 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.48.48 0 0 1-.272-.273z"></svg:path><svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path>`,
})
export class SolarMoonStarsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonStarsBrokenIcon],svg[solar-moon-stars-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.48.48 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.48.48 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.48.48 0 0 1-.273-.274zM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.48.48 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.48.48 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.48.48 0 0 1-.272-.273z"></svg:path><svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zm-4.767 17.08a.75.75 0 1 0-.752 1.298zm-4.687-2.638a.75.75 0 1 0 1.298-.75zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zm-18.5 0A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606zM12 21.25a9.2 9.2 0 0 1-4.624-1.237l-.752 1.298A10.7 10.7 0 0 0 12 22.75zm-8.013-4.625A9.2 9.2 0 0 1 2.75 12h-1.5a10.7 10.7 0 0 0 1.439 5.375z"></svg:path></svg:g>`,
})
export class SolarMoonStarsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonStarsLineDuotoneIcon],svg[solar-moon-stars-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.48.48 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.48.48 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.48.48 0 0 1-.273-.274zM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.48.48 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.48.48 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.48.48 0 0 1-.272-.273z"></svg:path><svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMoonStarsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonStarsLinearIcon],svg[solar-moon-stars-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.48.48 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.48.48 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.48.48 0 0 1-.273-.274zM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.48.48 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.48.48 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.48.48 0 0 1-.272-.273z"></svg:path><svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606z"></svg:path></svg:g>`,
})
export class SolarMoonStarsLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonStarsOutlineIcon],svg[solar-moon-stars-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M20.366 2.124c-.328-.832-1.504-.832-1.83 0l-.429 1.09l-1.084.429c-.83.328-.83 1.504 0 1.832l1.084.43l.428 1.089c.327.832 1.503.832 1.83 0l.429-1.09l1.084-.429c.83-.328.83-1.504 0-1.832l-1.084-.43zm-.916.406l.415 1.055c.1.254.3.455.554.556l1.057.418l-1.057.419a.98.98 0 0 0-.554.555l-.415 1.055l-.414-1.055a.98.98 0 0 0-.554-.555l-1.057-.419l1.057-.418a.98.98 0 0 0 .554-.556zm-2.952 5.417c-.327-.833-1.503-.833-1.83 0l-.155.393l-.39.155c-.83.328-.83 1.504 0 1.833l.39.154l.155.394c.327.832 1.503.832 1.83 0l.155-.394l.39-.154c.83-.329.83-1.505 0-1.833l-.39-.155zm-.915.405l.141.36c.1.253.3.455.554.555l.364.144l-.364.144a.98.98 0 0 0-.554.556l-.141.36l-.141-.36a.98.98 0 0 0-.554-.556l-.364-.144l.364-.144a.98.98 0 0 0 .554-.555z"></svg:path><svg:path d="M11.017 2.802a9.25 9.25 0 1 0 10.181 10.181A7.25 7.25 0 1 1 11.017 2.802M1.25 12C1.25 6.063 6.063 1.25 12 1.25c.717 0 1.075.571 1.137 1.026c.059.438-.103.995-.606 1.299a5.75 5.75 0 1 0 7.894 7.894c.304-.503.861-.665 1.299-.606c.455.062 1.026.42 1.026 1.137c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12"></svg:path></svg:g>`,
})
export class SolarMoonStarsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseBoldIcon],svg[solar-mouse-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8.974v6.012C19 18.86 15.866 22 12 22s-7-3.14-7-7.014V8.974A7.01 7.01 0 0 1 11.25 2v3.385c-.591.282-1 .886-1 1.585v2.004c0 .969.784 1.754 1.75 1.754s1.75-.785 1.75-1.754V6.97c0-.7-.409-1.303-1-1.585V2A7.01 7.01 0 0 1 19 8.974"></svg:path>`,
})
export class SolarMouseBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseBoldDuotoneIcon],svg[solar-mouse-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8.974v6.012C19 18.86 15.866 22 12 22s-7-3.14-7-7.014V8.974A7.01 7.01 0 0 1 11.25 2v3.385c-.591.282-1 .886-1 1.585v2.004c0 .969.784 1.754 1.75 1.754s1.75-.785 1.75-1.754V6.97c0-.7-.409-1.303-1-1.585V2A7.01 7.01 0 0 1 19 8.974" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.75 8.974V6.97c0-.7-.409-1.303-1-1.585V2a7 7 0 0 0-1.5 0v3.385c-.591.282-1 .885-1 1.585v2.004c0 .968.784 1.753 1.75 1.753s1.75-.785 1.75-1.753"></svg:path>`,
})
export class SolarMouseBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseBrokenIcon],svg[solar-mouse-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 15a7 7 0 1 1-14 0V9a7 7 0 0 1 14 0v2"></svg:path><svg:path d="M10.5 8.5a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1-3 0z"></svg:path><svg:path stroke-linecap="round" d="M12 2v5"></svg:path></svg:g>`,
})
export class SolarMouseBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseCircleBoldIcon],svg[solar-mouse-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21.453c-5.227 0-9.465-4.27-9.465-9.537c0-4.617 3.257-8.47 7.583-9.349c.527-.107 1.115.335 1.115 1.1V5.73h1.534V3.668c0-1.513-1.263-2.96-2.952-2.617C4.787 2.073 1 6.548 1 11.916C1 18.038 5.925 23 12 23s11-4.962 11-11.084c0-4.388-2.531-8.18-6.199-9.975a.765.765 0 0 0-1.026.358a.776.776 0 0 0 .355 1.033a9.54 9.54 0 0 1 5.335 8.584c0 5.267-4.238 9.537-9.465 9.537" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.907 13.954c0 2.291 1.832 4.148 4.093 4.148c2.26 0 4.093-1.857 4.093-4.148v-3.37H7.907zm4.86-4.616h3.254c-.312-1.667-1.609-3.292-3.254-3.608zm-1.534 0V5.73c-1.646.316-2.943 1.94-3.254 3.608z"></svg:path>`,
})
export class SolarMouseCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseCircleBoldDuotoneIcon],svg[solar-mouse-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.535 11.916c0 5.267 4.238 9.537 9.465 9.537s9.465-4.27 9.465-9.537a9.54 9.54 0 0 0-5.335-8.584a.776.776 0 0 1-.355-1.033a.765.765 0 0 1 1.026-.358A11.09 11.09 0 0 1 23 11.916C23 18.038 18.075 23 12 23S1 18.038 1 11.916C1 6.548 4.787 2.073 9.815 1.051c1.689-.343 2.952 1.104 2.952 2.617v2.134c1.894.364 3.326 2.05 3.326 4.076V14c0 2.291-1.832 4.148-4.093 4.148c-2.26 0-4.093-1.857-4.093-4.148V9.878c0-2.025 1.432-3.711 3.326-4.075V3.668c0-.766-.588-1.208-1.115-1.101c-4.326.879-7.583 4.732-7.583 9.35" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.907 13.954c0 2.29 1.833 4.148 4.093 4.148s4.093-1.857 4.093-4.148v-3.37H7.907zm4.861-4.616h3.253c-.312-1.667-1.608-3.292-3.253-3.609zm-1.535 0V5.73c-1.645.317-2.942 1.942-3.254 3.61z"></svg:path>`,
})
export class SolarMouseCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseCircleBrokenIcon],svg[solar-mouse-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M16 14a4 4 0 0 1-8 0v-4a4 4 0 1 1 8 0m-7.5 0H16m-4 0V6"></svg:path><svg:path d="M12 8.892V3.85c0-1.114-.905-2.037-1.987-1.817C5.442 2.962 2 7.034 2 11.917A10.1 10.1 0 0 0 3.362 17M16.364 2.842A10.09 10.09 0 0 1 22 11.917C22 17.486 17.523 22 12 22a9.9 9.9 0 0 1-5-1.349"></svg:path></svg:g>`,
})
export class SolarMouseCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseCircleLineDuotoneIcon],svg[solar-mouse-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M8 10a4 4 0 1 1 8 0v4a4 4 0 0 1-8 0z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.5 10h7M12 10V6"></svg:path><svg:path fill="currentColor" d="m10.013 2.033l-.15-.735zm6.681.135a.75.75 0 0 0-.66 1.347zm-6.83-.87c-4.918 1-8.614 5.377-8.614 10.619h1.5c0-4.524 3.188-8.29 7.412-9.15zM1.25 11.917C1.25 17.894 6.057 22.75 12 22.75v-1.5c-5.103 0-9.25-4.173-9.25-9.333zM12 22.75c5.943 0 10.75-4.856 10.75-10.833h-1.5c0 5.16-4.147 9.333-9.25 9.333zm-.75-18.9v5.042h1.5V3.85zm11.5 8.067c0-4.286-2.47-7.992-6.056-9.749l-.66 1.347a9.34 9.34 0 0 1 5.216 8.402zm-12.588-9.15c.508-.103 1.088.324 1.088 1.083h1.5c0-1.468-1.229-2.89-2.887-2.552z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMouseCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseCircleLinearIcon],svg[solar-mouse-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M8 10a4 4 0 1 1 8 0v4a4 4 0 0 1-8 0z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.5 10h7M12 10V6"></svg:path><svg:path fill="currentColor" d="m10.013 2.033l-.15-.735zm6.681.135a.75.75 0 0 0-.66 1.347zm-6.83-.87c-4.918 1-8.614 5.377-8.614 10.619h1.5c0-4.524 3.188-8.29 7.412-9.15zM1.25 11.917C1.25 17.894 6.057 22.75 12 22.75v-1.5c-5.103 0-9.25-4.173-9.25-9.333zM12 22.75c5.943 0 10.75-4.856 10.75-10.833h-1.5c0 5.16-4.147 9.333-9.25 9.333zm-.75-18.9v5.042h1.5V3.85zm11.5 8.067c0-4.286-2.47-7.992-6.056-9.749l-.66 1.347a9.34 9.34 0 0 1 5.216 8.402zm-12.588-9.15c.508-.103 1.088.324 1.088 1.083h1.5c0-1.468-1.229-2.89-2.887-2.552z"></svg:path></svg:g>`,
})
export class SolarMouseCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseCircleOutlineIcon],svg[solar-mouse-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 3.85c0-.759-.58-1.185-1.088-1.082c-4.224.859-7.412 4.626-7.412 9.15c0 5.16 4.147 9.332 9.25 9.332s9.25-4.172 9.25-9.333c0-3.696-2.13-6.89-5.216-8.401a.75.75 0 1 1 .66-1.347a10.84 10.84 0 0 1 6.056 9.748c0 5.977-4.807 10.833-10.75 10.833S1.25 17.894 1.25 11.917c0-5.242 3.696-9.62 8.613-10.619c1.658-.337 2.887 1.084 2.887 2.553v1.458c2.267.36 4 2.323 4 4.691v4a4.75 4.75 0 1 1-9.5 0v-4a4.75 4.75 0 0 1 4-4.69zm0 2.987A3.26 3.26 0 0 0 8.837 9.25h2.413zm1.5 2.413h2.413a3.26 3.26 0 0 0-2.413-2.413zm2.5 1.5h-6.5V14a3.25 3.25 0 1 0 6.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarMouseCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseLineDuotoneIcon],svg[solar-mouse-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 9a7 7 0 0 1 14 0v6a7 7 0 1 1-14 0z"></svg:path><svg:path d="M10.5 8.5a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1-3 0z"></svg:path><svg:path stroke-linecap="round" d="M12 2v5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMouseLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseLinearIcon],svg[solar-mouse-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 9a7 7 0 0 1 14 0v6a7 7 0 1 1-14 0z"></svg:path><svg:path d="M10.5 8.5a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1-3 0z"></svg:path><svg:path stroke-linecap="round" d="M12 2v5"></svg:path></svg:g>`,
})
export class SolarMouseLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseMinimalisticBoldIcon],svg[solar-mouse-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 9v6a7 7 0 1 1-14 0V9a7 7 0 0 1 14 0m-7-4.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarMouseMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseMinimalisticBoldDuotoneIcon],svg[solar-mouse-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15V9A7 7 0 1 0 5 9v6a7 7 0 1 0 14 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 4.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class SolarMouseMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseMinimalisticBrokenIcon],svg[solar-mouse-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 15a7 7 0 1 1-14 0V9a7 7 0 0 1 14 0v2m-7-6v3"></svg:path>`,
})
export class SolarMouseMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseMinimalisticLineDuotoneIcon],svg[solar-mouse-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 9a7 7 0 0 1 14 0v6a7 7 0 1 1-14 0z"></svg:path><svg:path stroke-linecap="round" d="M12 5v3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMouseMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseMinimalisticLinearIcon],svg[solar-mouse-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 9a7 7 0 0 1 14 0v6a7 7 0 1 1-14 0z"></svg:path><svg:path stroke-linecap="round" d="M12 5v3"></svg:path></svg:g>`,
})
export class SolarMouseMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseMinimalisticOutlineIcon],svg[solar-mouse-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 9a7.75 7.75 0 1 1 15.5 0v6a7.75 7.75 0 0 1-15.5 0zM12 2.75A6.25 6.25 0 0 0 5.75 9v6a6.25 6.25 0 1 0 12.5 0V9A6.25 6.25 0 0 0 12 2.75m0 1.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarMouseMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseOutlineIcon],svg[solar-mouse-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 9a7.75 7.75 0 1 1 15.5 0v6a7.75 7.75 0 0 1-15.5 0zm7-6.205A6.25 6.25 0 0 0 5.75 9v6a6.25 6.25 0 1 0 12.5 0V9a6.25 6.25 0 0 0-5.5-6.205v3.583a2.25 2.25 0 0 1 1.5 2.122v2a2.25 2.25 0 0 1-4.5 0v-2c0-.98.626-1.813 1.5-2.122zM12 7.75a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarMouseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoveToFolderBoldIcon],svg[solar-move-to-folder-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11.798V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172c-.975-.974-1.139-2.442-1.166-5.078h8.688l-2.26 1.643a.75.75 0 0 0 .882 1.214l4.125-3a.75.75 0 0 0 0-1.213l-4.125-3a.75.75 0 1 0-.882 1.213l2.26 1.643H2v-7.3c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495q.404.226.848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.118.105.225.224C22 7.849 22 9.166 22 11.798"></svg:path>`,
})
export class SolarMoveToFolderBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoveToFolderBoldDuotoneIcon],svg[solar-move-to-folder-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95v7.3l.006 1.5c.027 2.636.191 4.104 1.166 5.078C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.316 11.394a.75.75 0 0 0-.882 1.213l2.26 1.643H2l.006 1.5h8.688l-2.26 1.643a.75.75 0 0 0 .882 1.214l4.125-3a.75.75 0 0 0 0-1.213z"></svg:path>`,
})
export class SolarMoveToFolderBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoveToFolderBrokenIcon],svg[solar-move-to-folder-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828M2 12V6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.57.633.718 1.52.757 3.006"></svg:path><svg:path stroke-linejoin="round" d="M2 15h11m0 0l-4.125-3M13 15l-4.125 3"></svg:path></svg:g>`,
})
export class SolarMoveToFolderBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoveToFolderLineDuotoneIcon],svg[solar-move-to-folder-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 12V6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M2 15h11m0 0l-4.125-3M13 15l-4.125 3"></svg:path></svg:g>`,
})
export class SolarMoveToFolderLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoveToFolderLinearIcon],svg[solar-move-to-folder-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 12V6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"></svg:path><svg:path stroke-linejoin="round" d="M2 15h11m0 0l-4.125-3M13 15l-4.125 3"></svg:path></svg:g>`,
})
export class SolarMoveToFolderLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoveToFolderOutlineIcon],svg[solar-move-to-folder-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.86 1.25h.127c.351 0 .577 0 .798.02a4.75 4.75 0 0 1 2.59 1.073c.17.142.33.302.579.55l.576.577c.846.845 1.171 1.161 1.547 1.37q.328.182.689.286c.413.117.866.124 2.062.124h.425c1.273 0 2.3 0 3.111.102c.841.106 1.556.332 2.144.86q.147.133.28.28c.529.588.754 1.303.86 2.144c.102.812.102 1.838.102 3.111v2.31c0 1.837 0 3.293-.153 4.432c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.835-.835-1.152-1.92-1.286-3.286a.75.75 0 0 1 1.493-.146c.121 1.234.382 1.9.854 2.371c.423.423 1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2.202c0-1.336-.001-2.267-.09-2.975c-.087-.689-.246-1.06-.487-1.328a2 2 0 0 0-.168-.168c-.268-.241-.64-.4-1.328-.487c-.707-.089-1.639-.09-2.975-.09h-.484c-1.048 0-1.724 0-2.363-.182c-.35-.1-.689-.24-1.008-.417c-.58-.324-1.058-.802-1.8-1.543l-.077-.078l-.55-.55a8 8 0 0 0-.503-.482a3.25 3.25 0 0 0-1.771-.734a8 8 0 0 0-.696-.014c-.917 0-1.271.003-1.553.056a3.25 3.25 0 0 0-2.59 2.591c-.054.282-.057.636-.057 1.553V12a.75.75 0 0 1-1.5 0V6.86c0-.797 0-1.303.082-1.74A4.75 4.75 0 0 1 5.12 1.331c.438-.082.944-.082 1.74-.082m1.408 10.309a.75.75 0 0 1 1.048-.165l4.125 3a.75.75 0 0 1 0 1.213l-4.125 3a.75.75 0 0 1-.882-1.213l2.26-1.644H2a.75.75 0 0 1 0-1.5h8.694l-2.26-1.643a.75.75 0 0 1-.166-1.048" clip-rule="evenodd"></svg:path>`,
})
export class SolarMoveToFolderOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMultipleForwardLeftBoldIcon],svg[solar-multiple-forward-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.475 5.184L7.497 9.608c-.93.827-1.396 1.241-1.567 1.73a2 2 0 0 0 0 1.325c.171.488.637.902 1.567 1.729l4.978 4.425c.422.375.634.563.813.57a.5.5 0 0 0 .405-.182c.114-.139.114-.421.114-.986v-2.79c2.428 0 4.992.78 6.865 2.164c.975.72 1.462 1.08 1.648 1.067a.45.45 0 0 0 .39-.24c.096-.16.01-.658-.16-1.653c-1.104-6.466-5.554-8.196-8.743-8.196v-2.79c0-.565 0-.847-.114-.986a.5.5 0 0 0-.405-.181c-.18.006-.39.194-.813.57"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.818 3.99a.75.75 0 0 0-1.06-.04L3.542 8.794a4.647 4.647 0 0 0 .15 6.944l5.09 4.333a.75.75 0 1 0 .972-1.142l-5.09-4.333a3.147 3.147 0 0 1-.102-4.703L9.78 5.05a.75.75 0 0 0 .039-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarMultipleForwardLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMultipleForwardLeftBoldDuotoneIcon],svg[solar-multiple-forward-left-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.476 5.183L7.498 9.608c-.93.827-1.396 1.24-1.568 1.73a2 2 0 0 0 0 1.324c.172.489.637.902 1.568 1.73l4.978 4.424c.422.376.633.563.812.57a.5.5 0 0 0 .405-.182c.114-.138.114-.42.114-.986v-2.79c2.428 0 4.993.78 6.865 2.165c.975.72 1.463 1.08 1.648 1.067a.45.45 0 0 0 .39-.24c.096-.16.011-.658-.159-1.653c-1.105-6.467-5.555-8.196-8.744-8.196v-2.79c0-.565 0-.847-.114-.986a.5.5 0 0 0-.405-.181c-.18.006-.39.194-.812.57"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.818 3.99a.75.75 0 0 0-1.06-.04L3.542 8.794a4.647 4.647 0 0 0 .15 6.944l5.09 4.333a.75.75 0 1 0 .972-1.142l-5.09-4.333a3.147 3.147 0 0 1-.102-4.703L9.78 5.05a.75.75 0 0 0 .039-1.06" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarMultipleForwardLeftBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMultipleForwardLeftBrokenIcon],svg[solar-multiple-forward-left-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M18 10.13c-1.613-1.153-3.455-1.56-5-1.56V6.227c0-.958 0-1.437-.295-1.57c-.295-.132-.653.186-1.37.823L7.363 9.01C5.795 10.405 5.011 11.102 5.011 12s.784 1.596 2.352 2.99l3.973 3.53c.716.637 1.074.956 1.369.823s.295-.611.295-1.57v-2.344c3.6 0 7.5 1.714 9 4.571c0-2.431-.377-4.378-1-5.925"></svg:path><svg:path d="M8.461 4.5L3.245 9.344a3.897 3.897 0 0 0 .126 5.823L8.46 19.5"></svg:path></svg:g>`,
})
export class SolarMultipleForwardLeftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMultipleForwardLeftLineDuotoneIcon],svg[solar-multiple-forward-left-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m11.336 5.479l-3.973 3.53C5.795 10.405 5.011 11.102 5.011 12s.784 1.596 2.352 2.99l3.973 3.53c.716.637 1.074.956 1.369.823s.295-.611.295-1.57v-2.344c3.6 0 7.5 1.714 9 4.571c0-9.142-5.333-11.428-9-11.428V6.226c0-.958 0-1.437-.295-1.57c-.295-.132-.653.186-1.37.823"></svg:path><svg:path d="M8.461 4.5L3.245 9.344a3.897 3.897 0 0 0 .126 5.823L8.46 19.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMultipleForwardLeftLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMultipleForwardLeftLinearIcon],svg[solar-multiple-forward-left-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m11.336 5.479l-3.973 3.53C5.795 10.405 5.01 11.102 5.01 12s.785 1.596 2.353 2.99l3.972 3.53c.716.637 1.074.956 1.37.823c.295-.133.295-.611.295-1.57v-2.344c3.6 0 7.5 1.714 9 4.571c0-9.142-5.334-11.428-9-11.428V6.226c0-.958 0-1.437-.295-1.57c-.296-.132-.653.186-1.37.823"></svg:path><svg:path d="M8.462 4.5L3.245 9.344a3.897 3.897 0 0 0 .126 5.823l5.09 4.333"></svg:path></svg:g>`,
})
export class SolarMultipleForwardLeftLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMultipleForwardLeftOutlineIcon],svg[solar-multiple-forward-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.011 3.99a.75.75 0 0 1-.04 1.06L3.757 9.893a3.147 3.147 0 0 0 .101 4.703l5.09 4.333a.75.75 0 1 1-.972 1.142l-5.09-4.333a4.647 4.647 0 0 1-.15-6.944L7.951 3.95a.75.75 0 0 1 1.06.04m3.236 1.687q-.168.144-.413.363L7.862 9.57c-.801.713-1.342 1.196-1.692 1.607c-.336.396-.41.626-.41.823s.074.428.41.823c.35.411.89.894 1.692 1.606l3.972 3.531q.245.219.413.363q.004-.222.003-.55V15.43a.75.75 0 0 1 .75-.75c1.913 0 3.9.454 5.616 1.29a10.3 10.3 0 0 1 2.5 1.688c-.369-3.047-1.458-5.013-2.76-6.258C16.736 9.85 14.69 9.322 13 9.322a.75.75 0 0 1-.75-.75V6.227q0-.328-.003-.55m-.482-1.523c.257-.17.724-.416 1.247-.18c.524.234.65.747.694 1.052c.044.31.044.715.044 1.15V7.85c1.824.141 3.922.817 5.644 2.464c1.975 1.89 3.356 4.964 3.356 9.685a.75.75 0 0 1-1.414.349c-.656-1.25-1.864-2.295-3.377-3.032a11.6 11.6 0 0 0-4.209-1.112v1.62c0 .434 0 .84-.044 1.15c-.044.304-.17.817-.694 1.052s-.99-.012-1.247-.181c-.261-.173-.564-.442-.889-.73l-.038-.035l-4.014-3.568c-.75-.665-1.37-1.217-1.796-1.718C4.58 13.268 4.26 12.7 4.26 12s.319-1.268.767-1.795c.426-.5 1.047-1.053 1.796-1.718l4.014-3.568l.038-.034c.325-.289.628-.558.889-.73" clip-rule="evenodd"></svg:path>`,
})
export class SolarMultipleForwardLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMultipleForwardRightBoldIcon],svg[solar-multiple-forward-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.332 5.184l4.977 4.424c.93.827 1.396 1.241 1.568 1.73a2 2 0 0 1 0 1.325c-.172.488-.637.902-1.568 1.729l-4.978 4.425c-.422.375-.633.563-.812.57a.5.5 0 0 1-.405-.182C11 19.066 11 18.784 11 18.219v-2.79c-2.428 0-4.993.78-6.865 2.164c-.975.72-1.463 1.08-1.648 1.067a.45.45 0 0 1-.39-.24c-.096-.16-.011-.658.159-1.653C3.361 10.3 7.811 8.57 11 8.57V5.78c0-.565 0-.847.114-.986a.5.5 0 0 1 .405-.181c.18.006.39.194.813.57"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14.989 3.99a.75.75 0 0 1 1.06-.04l5.216 4.844a4.647 4.647 0 0 1-.15 6.944l-5.09 4.333a.75.75 0 1 1-.973-1.142l5.09-4.333a3.147 3.147 0 0 0 .102-4.703L15.028 5.05a.75.75 0 0 1-.04-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarMultipleForwardRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMultipleForwardRightBoldDuotoneIcon],svg[solar-multiple-forward-right-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.332 5.183l4.977 4.425c.93.827 1.396 1.24 1.568 1.73a2 2 0 0 1 0 1.324c-.172.489-.637.902-1.568 1.73l-4.978 4.424c-.422.376-.633.563-.812.57a.5.5 0 0 1-.405-.182c-.114-.138-.114-.42-.114-.986v-2.79c-2.428 0-4.993.78-6.865 2.165c-.975.72-1.463 1.08-1.648 1.067a.45.45 0 0 1-.39-.24c-.096-.16-.011-.658.159-1.653C3.361 10.3 7.811 8.57 11 8.57V5.78c0-.565 0-.847.114-.986a.5.5 0 0 1 .405-.181c.18.006.39.194.813.57"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14.99 3.99a.75.75 0 0 1 1.06-.04l5.216 4.844a4.647 4.647 0 0 1-.15 6.944l-5.09 4.333a.75.75 0 1 1-.973-1.142l5.09-4.333a3.147 3.147 0 0 0 .102-4.703L15.029 5.05a.75.75 0 0 1-.04-1.06" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarMultipleForwardRightBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMultipleForwardRightBrokenIcon],svg[solar-multiple-forward-right-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M6 10.13c1.613-1.153 3.454-1.56 5-1.56V6.227c0-.958 0-1.437.295-1.57c.295-.132.653.186 1.37.823l3.971 3.53c1.569 1.395 2.353 2.092 2.353 2.99s-.784 1.596-2.353 2.99l-3.972 3.53c-.716.637-1.074.956-1.37.823C11 19.21 11 18.732 11 17.773v-2.344c-3.6 0-7.5 1.714-9 4.571c0-2.431.377-4.378 1-5.925"></svg:path><svg:path d="m15.539 4.5l5.216 4.844a3.897 3.897 0 0 1-.126 5.823l-5.09 4.333"></svg:path></svg:g>`,
})
export class SolarMultipleForwardRightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMultipleForwardRightLineDuotoneIcon],svg[solar-multiple-forward-right-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m12.664 5.479l3.973 3.53c1.568 1.395 2.353 2.092 2.353 2.99s-.785 1.596-2.353 2.99l-3.973 3.53c-.716.637-1.074.956-1.369.823S11 18.731 11 17.772v-2.344c-3.6 0-7.5 1.714-9 4.571c0-9.142 5.333-11.428 9-11.428V6.226c0-.958 0-1.437.295-1.57c.295-.132.653.186 1.37.823"></svg:path><svg:path d="m15.539 4.5l5.216 4.844a3.897 3.897 0 0 1-.126 5.823l-5.09 4.333" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMultipleForwardRightLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMultipleForwardRightLinearIcon],svg[solar-multiple-forward-right-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m12.664 5.479l3.973 3.53c1.568 1.395 2.353 2.092 2.353 2.99s-.785 1.596-2.353 2.99l-3.973 3.53c-.716.637-1.074.956-1.369.823S11 18.731 11 17.772v-2.344c-3.6 0-7.5 1.714-9 4.571c0-9.142 5.333-11.428 9-11.428V6.226c0-.958 0-1.437.295-1.57c.295-.132.653.186 1.37.823"></svg:path><svg:path d="m15.539 4.5l5.216 4.844a3.897 3.897 0 0 1-.126 5.823l-5.09 4.333"></svg:path></svg:g>`,
})
export class SolarMultipleForwardRightLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMultipleForwardRightOutlineIcon],svg[solar-multiple-forward-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.989 3.99a.75.75 0 0 1 1.06-.04l5.216 4.844a4.647 4.647 0 0 1-.15 6.944l-5.09 4.333a.75.75 0 1 1-.973-1.142l5.09-4.333a3.147 3.147 0 0 0 .102-4.703L15.028 5.05a.75.75 0 0 1-.04-1.06m-1.865.895q.02.015.039.034l4.014 3.568c.748.665 1.37 1.217 1.796 1.718c.448.527.767 1.094.767 1.795s-.32 1.268-.767 1.795c-.427.5-1.048 1.053-1.796 1.718l-4.014 3.568l-.039.035c-.324.288-.627.557-.889.73c-.257.17-.724.416-1.247.18c-.523-.234-.65-.747-.693-1.052c-.045-.31-.045-.715-.045-1.15v-1.62a11.6 11.6 0 0 0-4.209 1.113c-1.513.737-2.721 1.783-3.377 3.032A.75.75 0 0 1 1.25 20c0-4.721 1.381-7.795 3.356-9.685c1.722-1.647 3.82-2.323 5.644-2.464V6.175c0-.434 0-.84.045-1.15c.043-.304.17-.817.693-1.052s.99.012 1.247.181c.262.173.565.442.889.73m-1.37.792q.166.144.412.363l3.972 3.53c.801.713 1.342 1.196 1.692 1.607c.337.396.41.626.41.823s-.073.428-.41.823c-.35.411-.89.894-1.692 1.606l-3.972 3.531q-.245.219-.413.363q-.004-.222-.003-.55V15.43a.75.75 0 0 0-.75-.75c-1.913 0-3.9.454-5.616 1.29a10.3 10.3 0 0 0-2.5 1.688c.369-3.047 1.458-5.013 2.76-6.258C7.264 9.849 9.31 9.321 11 9.321a.75.75 0 0 0 .75-.75V6.227q0-.328.003-.55" clip-rule="evenodd"></svg:path>`,
})
export class SolarMultipleForwardRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicLibrary2BoldIcon],svg[solar-music-library-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.51 2h6.98c.232 0 .41 0 .566.015c1.108.109 2.015.775 2.4 1.672H5.544c.385-.897 1.292-1.563 2.4-1.672C8.098 2 8.276 2 8.51 2m-2.2 2.723c-1.39 0-2.53.84-2.91 1.954l-.024.07c.398-.12.813-.2 1.232-.253c1.08-.139 2.446-.139 4.032-.139h6.892c1.586 0 2.951 0 4.032.139c.42.054.834.132 1.232.253l-.023-.07c-.38-1.114-1.52-1.954-2.911-1.954zM11.25 17a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.672 7.542h6.656c3.374 0 5.062 0 6.01.987s.724 2.511.278 5.56l-.422 2.892c-.35 2.391-.525 3.587-1.422 4.303s-2.22.716-4.867.716h-5.81c-2.646 0-3.97 0-4.867-.716s-1.072-1.912-1.422-4.303l-.422-2.891c-.447-3.05-.67-4.574.278-5.561s2.636-.987 6.01-.987M12.75 10.5a.75.75 0 0 0-1.5 0v4.378A2.25 2.25 0 1 0 12.75 17v-3.68c.67.543 1.512.93 2.25.93a.75.75 0 0 0 0-1.5c-.305 0-.886-.219-1.416-.69c-.519-.46-.834-1.021-.834-1.56" clip-rule="evenodd"></svg:path>`,
})
export class SolarMusicLibrary2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicLibrary2BoldDuotoneIcon],svg[solar-music-library-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 17a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.672 7.542h6.656c3.374 0 5.062 0 6.01.987s.724 2.511.278 5.56l-.422 2.892c-.35 2.391-.525 3.587-1.422 4.303s-2.22.716-4.867.716h-5.81c-2.646 0-3.97 0-4.867-.716s-1.072-1.912-1.422-4.303l-.422-2.892c-.447-3.049-.67-4.573.278-5.56s2.636-.987 6.01-.987M12.75 10.5a.75.75 0 0 0-1.5 0v4.378A2.25 2.25 0 1 0 12.75 17v-3.68c.67.543 1.512.93 2.25.93a.75.75 0 1 0 0-1.5c-.305 0-.886-.219-1.416-.69c-.519-.46-.834-1.021-.834-1.56" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.51 2h6.98c.232 0 .41 0 .566.015c1.108.109 2.015.775 2.4 1.672H5.543c.384-.897 1.291-1.563 2.399-1.672C8.099 2 8.277 2 8.51 2" opacity=".4"></svg:path><svg:path fill="currentColor" d="M6.31 4.723c-1.39 0-2.53.84-2.911 1.953l-.023.07c.398-.12.812-.199 1.232-.253c1.08-.138 2.446-.138 4.032-.138h6.892c1.586 0 2.951 0 4.032.138a8 8 0 0 1 1.232.253l-.023-.07c-.38-1.114-1.521-1.953-2.912-1.953z" opacity=".7"></svg:path>`,
})
export class SolarMusicLibrary2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicLibrary2BrokenIcon],svg[solar-music-library-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 17a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 0v-6.5c0 1.657 1.895 3 3 3"></svg:path><svg:path d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496"></svg:path><svg:path stroke-linecap="round" d="M21.194 16.793c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464l-.422-3c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024c.749.809.767 1.966.521 3.976"></svg:path></svg:g>`,
})
export class SolarMusicLibrary2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicLibrary2LineDuotoneIcon],svg[solar-music-library-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024s.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 17a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 0v-6.5c0 1.657 1.895 3 3 3"></svg:path><svg:path d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMusicLibrary2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicLibrary2LinearIcon],svg[solar-music-library-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024s.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 17a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 0v-6.5c0 1.657 1.895 3 3 3"></svg:path><svg:path d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496"></svg:path></svg:g>`,
})
export class SolarMusicLibrary2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicLibrary2OutlineIcon],svg[solar-music-library-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 9.75a.75.75 0 0 1 .75.75c0 .539.315 1.1.834 1.56c.53.471 1.11.69 1.416.69a.75.75 0 0 1 0 1.5c-.738 0-1.58-.387-2.25-.93V17a2.25 2.25 0 1 1-1.5-2.122V10.5a.75.75 0 0 1 .75-.75M11.25 17a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"></svg:path><svg:path d="M8.7 1.25h6.6c.22 0 .389 0 .536.016A2.75 2.75 0 0 1 18.29 3.87a2.89 2.89 0 0 1 2.054 2.721c.601.18 1.12.465 1.544.923c.652.705.854 1.572.862 2.586c.007.975-.166 2.207-.382 3.736l-.44 3.114c-.168 1.196-.305 2.168-.518 2.929c-.223.797-.552 1.452-1.16 1.956c-.604.5-1.32.715-2.166.817c-.819.098-1.849.098-3.13.098H9.046c-1.282 0-2.312 0-3.13-.098c-.847-.102-1.563-.317-2.167-.817c-.608-.504-.937-1.16-1.16-1.956c-.213-.761-.35-1.733-.519-2.93l-.439-3.113c-.215-1.53-.39-2.761-.382-3.736c.008-1.014.21-1.881.862-2.586c.424-.458.942-.742 1.543-.923a2.89 2.89 0 0 1 2.055-2.72a2.75 2.75 0 0 1 2.454-2.605c.147-.016.316-.016.535-.016m-3.51 5.078c.926-.078 2.06-.078 3.427-.078h6.768c1.366 0 2.5 0 3.427.078a1.38 1.38 0 0 0-1.35-1.078H6.539c-.669 0-1.212.47-1.349 1.078m10.487-3.57c.55.058.985.468 1.092.992H7.232a1.25 1.25 0 0 1 1.092-.993c.056-.006.136-.007.417-.007h6.518c.28 0 .36.001.417.007M3.213 8.532c.303-.327.758-.544 1.643-.662c.901-.12 2.108-.121 3.816-.121h6.656c1.708 0 2.915.002 3.816.121c.885.118 1.34.335 1.643.662c.296.32.457.755.463 1.579c.006.85-.15 1.97-.376 3.576l-.423 3c-.178 1.261-.302 2.133-.485 2.787c-.177.63-.384.965-.673 1.204c-.293.244-.687.4-1.388.484c-.719.086-1.658.087-3 .087h-5.81c-1.342 0-2.281-.001-3-.087c-.7-.085-1.095-.24-1.388-.483c-.289-.24-.496-.576-.673-1.205c-.183-.654-.307-1.526-.485-2.787l-.423-3c-.226-1.605-.382-2.726-.376-3.576c.006-.824.167-1.26.463-1.579"></svg:path></svg:g>`,
})
export class SolarMusicLibrary2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicLibraryBoldIcon],svg[solar-music-library-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.51 2h6.98c.232 0 .41 0 .566.015c1.108.109 2.015.775 2.4 1.672H5.544c.385-.897 1.292-1.563 2.4-1.672C8.098 2 8.276 2 8.51 2m-2.2 2.723c-1.39 0-2.53.84-2.91 1.954l-.024.07c.398-.12.813-.2 1.232-.253c1.08-.139 2.446-.139 4.032-.139h6.892c1.586 0 2.951 0 4.032.139c.42.054.834.132 1.232.253l-.023-.07c-.38-1.114-1.52-1.954-2.911-1.954z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.328 7.542H8.672c-3.374 0-5.062 0-6.01.987s-.725 2.511-.278 5.56l.422 2.892c.35 2.391.525 3.587 1.422 4.303c.898.716 2.22.716 4.867.716h5.81c2.646 0 3.97 0 4.867-.716s1.072-1.912 1.422-4.303l.422-2.891c.447-3.05.67-4.574-.278-5.561s-2.636-.987-6.01-.987m-.74 2.623c-1.231-.526-2.645.266-2.727 1.528q-.005.082-.004.206v3.623a2.7 2.7 0 0 0-1.286-.321C9.151 15.2 8 16.275 8 17.6S9.151 20 10.571 20s2.572-1.074 2.572-2.4v-3.919l.928.462q.118.06.198.095c1.231.526 2.645-.266 2.728-1.528q.004-.082.003-.207v-.026l-.001-.093c-.021-.623-.387-1.192-.966-1.503l-.087-.044l-1.16-.578q-.118-.059-.197-.094" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.053 11.256c-.41-.175-.882.089-.909.51a4 4 0 0 0 0 .214a.6.6 0 0 0 .321.501l.058.03l1.135.564c.107.054.133.066.146.072c.41.175.882-.089.91-.51a4 4 0 0 0 0-.215a.6.6 0 0 0-.322-.5zM10.571 16.4c.71 0 1.286.538 1.286 1.2c0 .663-.575 1.2-1.286 1.2c-.71 0-1.285-.537-1.285-1.2s.575-1.2 1.285-1.2"></svg:path>`,
})
export class SolarMusicLibraryBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicLibraryBoldDuotoneIcon],svg[solar-music-library-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.328 7.542H8.672c-3.374 0-5.062 0-6.01.987s-.725 2.511-.278 5.56l.422 2.892c.35 2.391.525 3.587 1.422 4.303c.898.716 2.22.716 4.867.716h5.81c2.646 0 3.97 0 4.867-.716s1.072-1.912 1.422-4.303l.422-2.892c.447-3.049.67-4.573-.278-5.56s-2.636-.987-6.01-.987m-.74 2.623c-1.231-.526-2.645.265-2.727 1.527q-.005.083-.004.207v3.623a2.7 2.7 0 0 0-1.286-.321C9.151 15.2 8 16.275 8 17.6S9.151 20 10.571 20s2.572-1.074 2.572-2.4v-3.919l.928.462q.118.06.198.095c1.231.526 2.645-.266 2.728-1.528q.004-.082.003-.207v-.026l-.001-.093c-.021-.623-.387-1.192-.966-1.503l-.087-.044l-1.16-.578a4 4 0 0 0-.197-.094" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.053 11.256c-.41-.175-.882.089-.909.51a4 4 0 0 0 0 .214a.6.6 0 0 0 .321.501l.058.03l1.135.564c.107.054.133.066.146.072c.41.175.882-.089.91-.51a4 4 0 0 0 0-.215a.6.6 0 0 0-.322-.5zM10.571 16.4c.71 0 1.286.538 1.286 1.2c0 .663-.575 1.2-1.286 1.2c-.71 0-1.285-.537-1.285-1.2s.575-1.2 1.285-1.2"></svg:path><svg:path fill="currentColor" d="M8.51 2h6.98c.233 0 .41 0 .567.015c1.108.109 2.014.775 2.399 1.672H5.544c.385-.897 1.292-1.563 2.4-1.672C8.099 2 8.278 2 8.51 2" opacity=".4"></svg:path><svg:path fill="currentColor" d="M6.31 4.723c-1.39 0-2.53.84-2.91 1.953l-.024.07a8 8 0 0 1 1.232-.253c1.08-.138 2.446-.138 4.032-.138h6.892c1.586 0 2.952 0 4.032.138c.42.054.834.133 1.232.253l-.023-.07c-.38-1.114-1.52-1.953-2.911-1.953z" opacity=".7"></svg:path>`,
})
export class SolarMusicLibraryBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicLibraryBrokenIcon],svg[solar-music-library-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m12.56 12.7l-.352.661zm.883.47l.353-.662zm.996-1.868l.353-.662zm-.882-.471l.353-.662zm-1.555.776l.749.045zm1.414-.85l-.312.683zM15 12.17l.75-.024zm-.5-.835l.373-.65zm-.915 1.91l.312-.683zm1.414-.85l-.748-.045zm-2.496.273l-.374.65zM12 11.832l-.75.024zm-.75 4.668a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25zm2.25.75V12h-1.5v4.5zm-.542-3.139l.882.47l.706-1.323l-.882-.47zm2.584-2.721l-.882-.47l-.706 1.323l.882.47zm-2.042 1.125v-.113l-1.497-.09c-.003.058-.003.131-.003.203zm1.16-1.596a5 5 0 0 0-.181-.093l-.625 1.364l.018.009l.082.044zm-1.16 1.483a.25.25 0 0 1 .354-.212l.625-1.364a1.75 1.75 0 0 0-2.476 1.485zm3 .584v-.091l-1.5.048v.043zm-1.664-.273l.032.017l.007.004l.747-1.3l-.08-.044zm1.663.182a1.75 1.75 0 0 0-.877-1.462l-.747 1.3a.25.25 0 0 1 .125.21zm-2.659 1.687c.064.034.128.068.181.093l.625-1.364l-.018-.009l-.082-.044zm1.16-1.596v.113l1.497.09c.003-.058.003-.131.003-.203zm-.979 1.689a1.75 1.75 0 0 0 2.476-1.485l-1.498-.091a.25.25 0 0 1-.353.212zm-.357-1.887l-.032-.017l-.007-.004l-.747 1.3l.08.044zm-1.664-.273v.091l1.5-.048v-.043zm1.625.252a.25.25 0 0 1-.125-.209l-1.5.048c.02.606.352 1.16.878 1.462z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.194 16.793c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464l-.422-3c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024c.749.809.767 1.966.521 3.976"></svg:path></svg:g>`,
})
export class SolarMusicLibraryBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicLibraryLineDuotoneIcon],svg[solar-music-library-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496" opacity=".5"></svg:path><svg:path fill="currentColor" d="m12.56 12.7l-.352.661zm.883.47l.353-.662zm.996-1.868l.353-.662zm-.882-.471l.353-.662zm-1.555.776l.749.045zm1.414-.85l-.312.683zM15 12.17l.75-.024zm-.5-.835l.373-.65zm-.915 1.91l.312-.683zm1.414-.85l-.748-.045zm-2.496.273l-.374.65zM12 11.832l-.75.024zm-.75 4.668a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25zm2.25.75V12h-1.5v4.5zm-.542-3.139l.882.47l.706-1.323l-.882-.47zm2.584-2.721l-.882-.47l-.706 1.323l.882.47zm-2.042 1.125v-.113l-1.497-.09c-.003.058-.003.131-.003.203zm1.16-1.596a5 5 0 0 0-.181-.093l-.625 1.364l.018.009l.082.044zm-1.16 1.483a.25.25 0 0 1 .354-.212l.625-1.364a1.75 1.75 0 0 0-2.476 1.485zm3 .584v-.091l-1.5.048v.043zm-1.664-.273l.032.017l.007.004l.747-1.3l-.08-.044zm1.663.182a1.75 1.75 0 0 0-.877-1.462l-.747 1.3a.25.25 0 0 1 .125.21zm-2.659 1.687c.064.034.128.068.181.093l.625-1.364l-.018-.009l-.082-.044zm1.16-1.596v.113l1.497.09c.003-.058.003-.131.003-.203zm-.979 1.689a1.75 1.75 0 0 0 2.476-1.485l-1.498-.091a.25.25 0 0 1-.353.212zm-.357-1.887l-.032-.017l-.007-.004l-.747 1.3l.08.044zm-1.664-.273v.091l1.5-.048v-.043zm1.625.252a.25.25 0 0 1-.125-.209l-1.5.048c.02.606.352 1.16.878 1.462z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024s.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464z"></svg:path></svg:g>`,
})
export class SolarMusicLibraryLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicLibraryLinearIcon],svg[solar-music-library-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496"></svg:path><svg:path fill="currentColor" d="m12.56 12.7l-.352.661zm.883.47l.353-.662zm.996-1.868l.353-.662zm-.882-.471l.353-.662zm-1.555.776l.749.045zm1.414-.85l-.312.683zM15 12.17l.75-.024zm-.5-.835l.373-.65zm-.915 1.91l.312-.683zm1.414-.85l-.748-.045zm-2.496.273l-.374.65zM12 11.832l-.75.024zm-.75 4.668a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25zm2.25.75V12h-1.5v4.5zm-.542-3.139l.882.47l.706-1.323l-.882-.47zm2.584-2.721l-.882-.47l-.706 1.323l.882.47zm-2.042 1.125v-.113l-1.497-.09c-.003.058-.003.131-.003.203zm1.16-1.596a5 5 0 0 0-.181-.093l-.625 1.364l.018.009l.082.044zm-1.16 1.483a.25.25 0 0 1 .354-.212l.625-1.364a1.75 1.75 0 0 0-2.476 1.485zm3 .584v-.091l-1.5.048v.043zm-1.664-.273l.032.017l.007.004l.747-1.3l-.08-.044zm1.663.182a1.75 1.75 0 0 0-.877-1.462l-.747 1.3a.25.25 0 0 1 .125.21zm-2.659 1.687c.064.034.128.068.181.093l.625-1.364l-.018-.009l-.082-.044zm1.16-1.596v.113l1.497.09c.003-.058.003-.131.003-.203zm-.979 1.689a1.75 1.75 0 0 0 2.476-1.485l-1.498-.091a.25.25 0 0 1-.353.212zm-.357-1.887l-.032-.017l-.007-.004l-.747 1.3l.08.044zm-1.664-.273v.091l1.5-.048v-.043zm1.625.252a.25.25 0 0 1-.125-.209l-1.5.048c.02.606.352 1.16.878 1.462z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024s.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464z"></svg:path></svg:g>`,
})
export class SolarMusicLibraryLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicLibraryOutlineIcon],svg[solar-music-library-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m12.756 11.759l-.001.016a8 8 0 0 0-.004.537h.002c.027.015.064.034.137.07l.988.492c.17.084.271.134.347.167l.02.008v-.016a8 8 0 0 0 .004-.536l-.002-.001l-.137-.07l-.988-.491a9 9 0 0 0-.347-.168zm-.006 2.229l.475.236c.15.075.287.143.403.193c.118.052.272.11.449.131a1.5 1.5 0 0 0 1.583-.975c.06-.167.077-.332.083-.46c.007-.127.007-.28.007-.446v-.049c0-.118 0-.265-.027-.408a1.5 1.5 0 0 0-.563-.907a2 2 0 0 0-.353-.206l-.03-.014l-1.002-.499c-.15-.074-.287-.143-.403-.193a1.6 1.6 0 0 0-.449-.13a1.5 1.5 0 0 0-1.583.975c-.06.167-.077.332-.083.46a7 7 0 0 0-.007.335v2.362a2.254 2.254 0 0 0-3 2.115a2.246 2.246 0 0 0 2.25 2.242c1.239 0 2.25-1 2.25-2.242zm-1.5 2.52a.746.746 0 0 0-.75-.742a.746.746 0 0 0-.75.742c0 .406.332.742.75.742s.75-.336.75-.742"></svg:path><svg:path d="M8.7 1.25h6.6c.22 0 .389 0 .536.016A2.75 2.75 0 0 1 18.29 3.87a2.89 2.89 0 0 1 2.054 2.721c.601.18 1.12.465 1.544.923c.652.705.854 1.572.862 2.586c.007.975-.166 2.207-.382 3.736l-.44 3.114c-.168 1.196-.305 2.168-.518 2.929c-.223.797-.552 1.452-1.16 1.956c-.604.5-1.32.715-2.166.817c-.819.098-1.849.098-3.13.098H9.046c-1.282 0-2.312 0-3.13-.098c-.847-.102-1.563-.317-2.167-.817c-.608-.504-.937-1.16-1.16-1.956c-.213-.761-.35-1.733-.519-2.93l-.439-3.113c-.215-1.53-.39-2.761-.382-3.736c.008-1.014.21-1.881.862-2.586c.424-.458.942-.742 1.543-.923a2.89 2.89 0 0 1 2.055-2.72a2.75 2.75 0 0 1 2.454-2.605c.147-.016.316-.016.535-.016m-3.51 5.078c.926-.078 2.06-.078 3.427-.078h6.768c1.366 0 2.5 0 3.427.078a1.38 1.38 0 0 0-1.35-1.078H6.539c-.669 0-1.212.47-1.349 1.078m10.487-3.57c.55.058.985.468 1.092.992H7.232a1.25 1.25 0 0 1 1.092-.993c.056-.006.136-.007.417-.007h6.518c.28 0 .36.001.417.007M3.213 8.532c.303-.327.758-.544 1.643-.662c.901-.12 2.108-.121 3.816-.121h6.656c1.708 0 2.915.002 3.816.121c.885.118 1.34.335 1.643.662c.296.32.457.755.463 1.579c.006.85-.15 1.97-.376 3.576l-.423 3c-.178 1.261-.302 2.133-.485 2.787c-.177.63-.384.965-.673 1.204c-.293.244-.687.4-1.388.484c-.719.086-1.658.087-3 .087h-5.81c-1.342 0-2.281-.001-3-.087c-.7-.085-1.095-.24-1.388-.483c-.289-.24-.496-.576-.673-1.205c-.183-.654-.307-1.526-.485-2.787l-.423-3c-.226-1.605-.382-2.726-.376-3.576c.006-.824.167-1.26.463-1.579"></svg:path></svg:g>`,
})
export class SolarMusicLibraryOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote2BoldIcon],svg[solar-music-note-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.75 2a.75.75 0 0 0-1.5 0v12.536A4.75 4.75 0 1 0 13.75 18V6.243A6.74 6.74 0 0 0 19 8.75a.75.75 0 0 0 0-1.5A5.25 5.25 0 0 1 13.75 2"></svg:path>`,
})
export class SolarMusicNote2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote2BoldDuotoneIcon],svg[solar-music-note-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13 1.25a.75.75 0 0 1 .75.75c0 2.9 2.35 5.25 5.25 5.25a.75.75 0 0 1 0 1.5A6.75 6.75 0 0 1 12.25 2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.25 14.536V2c0 1.607.562 3.084 1.5 4.243V18a4.74 4.74 0 0 0-1.5-3.464" opacity=".5"></svg:path>`,
})
export class SolarMusicNote2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote2BrokenIcon],svg[solar-music-note-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M13 12V2"></svg:path><svg:circle cx="9" cy="18" r="4"></svg:circle><svg:path stroke-linecap="round" d="M19 8a6 6 0 0 1-6-6"></svg:path></svg:g>`,
})
export class SolarMusicNote2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote2LineDuotoneIcon],svg[solar-music-note-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M13 18V2" opacity=".5"></svg:path><svg:circle cx="9" cy="18" r="4"></svg:circle><svg:path stroke-linecap="round" d="M19 8a6 6 0 0 1-6-6"></svg:path></svg:g>`,
})
export class SolarMusicNote2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote2LinearIcon],svg[solar-music-note-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M13 18V2"></svg:path><svg:circle cx="9" cy="18" r="4"></svg:circle><svg:path stroke-linecap="round" d="M19 8a6 6 0 0 1-6-6"></svg:path></svg:g>`,
})
export class SolarMusicNote2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote2OutlineIcon],svg[solar-music-note-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.75 2c0 2.9 2.35 5.25 5.25 5.25a.75.75 0 0 1 0 1.5a6.74 6.74 0 0 1-5.25-2.507V18a4.75 4.75 0 1 1-1.5-3.464V2zm-1.5 16a3.25 3.25 0 1 0-6.5 0a3.25 3.25 0 0 0 6.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarMusicNote2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote3BoldIcon],svg[solar-music-note-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.319 2.505A2.75 2.75 0 0 0 11.414 4.3c-.098.27-.132.563-.148.869A17 17 0 0 0 11.25 6v8.536A4.75 4.75 0 1 0 12.75 18V9.21q.156.083.343.175L15.8 10.74c.418.21.759.38 1.038.5c.281.123.558.223.843.257A2.75 2.75 0 0 0 20.586 9.7c.098-.27.132-.563.148-.87c.016-.303.016-.683.016-1.151v-.083c0-.348 0-.62-.049-.878a2.75 2.75 0 0 0-1.03-1.667c-.21-.16-.453-.281-.764-.436L16.2 3.262a22 22 0 0 0-1.038-.501c-.28-.123-.558-.223-.843-.256"></svg:path>`,
})
export class SolarMusicNote3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote3BoldDuotoneIcon],svg[solar-music-note-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.319 2.505A2.75 2.75 0 0 0 11.414 4.3c-.098.27-.132.563-.148.869A17 17 0 0 0 11.25 6v8.536A4.75 4.75 0 1 0 12.75 18V9.21q.156.083.343.175L15.8 10.74c.418.21.759.38 1.038.5c.281.123.558.223.843.257A2.75 2.75 0 0 0 20.586 9.7c.098-.27.132-.563.148-.87c.016-.303.016-.683.016-1.151v-.083c0-.348 0-.62-.049-.878a2.75 2.75 0 0 0-1.03-1.667c-.21-.16-.453-.281-.764-.436L16.2 3.262a22 22 0 0 0-1.038-.501c-.28-.123-.558-.223-.843-.256"></svg:path>`,
})
export class SolarMusicNote3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote3BrokenIcon],svg[solar-music-note-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 18a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z"></svg:path><svg:path stroke-linecap="round" d="M12 12V6m4.117 4.059l-2.634-1.317c-.365-.182-.547-.274-.698-.389a2 2 0 0 1-.75-1.213C12 6.954 12 6.75 12 6.342c0-.971 0-1.457.12-1.787a2 2 0 0 1 2.112-1.305c.348.04.783.258 1.651.692l2.634 1.317c.365.182.547.273.698.389a2 2 0 0 1 .75 1.212c.035.187.035.39.035.799c0 .97 0 1.456-.12 1.786a2 2 0 0 1-2.112 1.306c-.348-.04-.783-.258-1.651-.692Z"></svg:path></svg:g>`,
})
export class SolarMusicNote3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote3LineDuotoneIcon],svg[solar-music-note-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 18a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z"></svg:path><svg:path d="M12 18V6" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m16.117 10.059l-2.634-1.317c-.365-.182-.547-.274-.698-.389a2 2 0 0 1-.75-1.213C12 6.954 12 6.75 12 6.342c0-.971 0-1.457.12-1.787a2 2 0 0 1 2.112-1.305c.348.04.783.258 1.651.692l2.634 1.317c.365.182.547.273.698.389a2 2 0 0 1 .75 1.212c.035.187.035.39.035.799c0 .97 0 1.456-.12 1.786a2 2 0 0 1-2.112 1.306c-.348-.04-.783-.258-1.651-.692Z"></svg:path></svg:g>`,
})
export class SolarMusicNote3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote3LinearIcon],svg[solar-music-note-3-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 18a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm0 0V6"></svg:path><svg:path stroke-linecap="round" d="m16.117 10.059l-2.634-1.317c-.365-.182-.547-.274-.698-.389a2 2 0 0 1-.75-1.213C12 6.954 12 6.75 12 6.342c0-.971 0-1.457.12-1.787a2 2 0 0 1 2.112-1.305c.348.04.783.258 1.651.692l2.634 1.317c.365.182.547.273.698.389a2 2 0 0 1 .75 1.212c.035.187.035.39.035.799c0 .97 0 1.456-.12 1.786a2 2 0 0 1-2.112 1.306c-.348-.04-.783-.258-1.651-.692Z"></svg:path></svg:g>`,
})
export class SolarMusicNote3LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote3OutlineIcon],svg[solar-music-note-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.145 3.995a1.25 1.25 0 0 0-1.32.816c-.022.06-.047.175-.061.437c-.014.26-.014.6-.014 1.094c0 .438.003.558.022.657c.058.302.225.572.469.758c.08.062.186.118.578.314l2.633 1.317c.442.22.747.373.985.477c.24.105.355.134.418.14a1.25 1.25 0 0 0 1.32-.815c.022-.06.047-.175.061-.437c.014-.26.014-.6.014-1.094c0-.439-.003-.558-.022-.658a1.25 1.25 0 0 0-.469-.758c-.08-.061-.186-.117-.578-.313l-2.633-1.317a24 24 0 0 0-.985-.477c-.24-.105-.355-.134-.418-.141M12.75 9.21a15 15 0 0 0 .398.202l2.652 1.326c.418.21.759.38 1.038.5c.281.123.558.223.843.257A2.75 2.75 0 0 0 20.586 9.7c.098-.27.132-.563.148-.87c.016-.303.016-.684.016-1.151v-.083c0-.348 0-.62-.049-.878a2.75 2.75 0 0 0-1.03-1.667c-.21-.16-.453-.281-.764-.436l-.055-.028L16.2 3.262a22 22 0 0 0-1.038-.501c-.281-.123-.558-.223-.843-.256A2.75 2.75 0 0 0 11.414 4.3c-.098.27-.132.563-.148.869A17 17 0 0 0 11.25 6v8.536A4.75 4.75 0 1 0 12.75 18zM11.25 18a3.25 3.25 0 1 0-6.5 0a3.25 3.25 0 0 0 6.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarMusicNote3OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote4BoldIcon],svg[solar-music-note-4-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.85 4.7c-.398-1.124-1.497-1.821-2.656-1.683a2.7 2.7 0 0 0-.77.24c-.256.114-.567.274-.95.47L13 4.997c-.284.145-.507.259-.698.409a2.6 2.6 0 0 0-.942 1.563c-.045.242-.045.497-.045.823v6.506a4.27 4.27 0 0 0-2.971-1.206c-2.4 0-4.344 1.994-4.344 4.454S5.944 22 8.343 22s4.343-1.994 4.343-4.454v-6.363c.43.226.926.325 1.434.265c.261-.032.514-.125.771-.24c.255-.114.566-.274.949-.47l2.475-1.27c.285-.145.507-.259.698-.408c.49-.385.826-.942.942-1.564c.045-.242.045-.497.045-.823v-.077c0-.439 0-.796-.015-1.08a3 3 0 0 0-.135-.816"></svg:path>`,
})
export class SolarMusicNote4BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote4BoldDuotoneIcon],svg[solar-music-note-4-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.85 4.7c-.398-1.124-1.497-1.821-2.656-1.682a2.7 2.7 0 0 0-.77.24c-.256.114-.567.273-.95.47L13 4.995c-.284.146-.507.26-.698.41a2.6 2.6 0 0 0-.942 1.563c-.045.242-.045.497-.045.823v6.506a4.27 4.27 0 0 0-2.971-1.206C5.944 13.093 4 15.087 4 17.547C4 20.006 5.944 22 8.343 22s4.343-1.994 4.343-4.454v-6.363c.43.226.926.325 1.434.265c.261-.032.514-.125.771-.24c.255-.114.566-.274.949-.47l2.475-1.27c.285-.145.507-.259.698-.408c.49-.385.826-.942.942-1.564C20 7.254 20 7 20 6.673v-.077c0-.439 0-.796-.015-1.08a3 3 0 0 0-.135-.815"></svg:path>`,
})
export class SolarMusicNote4BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote4BrokenIcon],svg[solar-music-note-4-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12.114 20.376a.75.75 0 1 0-1.298-.751zM11.464 16l-.648.375zM12 17l-.667.344A.75.75 0 0 0 12.75 17zm.75-9a.75.75 0 0 0-1.5 0zM8 21.25A3.25 3.25 0 0 1 4.75 18h-1.5A4.75 4.75 0 0 0 8 22.75zM4.75 18A3.25 3.25 0 0 1 8 14.75v-1.5A4.75 4.75 0 0 0 3.25 18zm6.066 1.625A3.25 3.25 0 0 1 8 21.25v1.5c1.76 0 3.294-.957 4.114-2.375zM8 14.75a3.25 3.25 0 0 1 2.816 1.625l1.298-.75A4.75 4.75 0 0 0 8 13.25zm2.816 1.625c.08.14.208.378.32.59l.14.268l.042.081l.012.022l.002.006l.001.001L12 17l.667-.344l-.002-.002l-.015-.03l-.043-.083l-.144-.275a20 20 0 0 0-.349-.641zM12.75 17V8h-1.5v9z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m16.117 3.942l-2.634 1.317c-.365.182-.547.273-.698.389a2 2 0 0 0-.75 1.212c-.035.187-.035.39-.035.8c0 .97 0 1.456.12 1.786a2 2 0 0 0 2.112 1.306c.348-.04.783-.258 1.651-.692l2.634-1.317c.365-.182.547-.274.698-.389a2 2 0 0 0 .75-1.213C20 6.954 20 6.75 20 6.342c0-.971 0-1.457-.12-1.787a2 2 0 0 0-2.112-1.305c-.348.04-.783.258-1.651.692Z"></svg:path></svg:g>`,
})
export class SolarMusicNote4BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote4LineDuotoneIcon],svg[solar-music-note-4-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 18a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z"></svg:path><svg:path d="M12 18V8" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m16.117 3.942l-2.634 1.317c-.365.182-.547.273-.698.389a2 2 0 0 0-.75 1.212c-.035.187-.035.39-.035.8c0 .97 0 1.456.12 1.786a2 2 0 0 0 2.112 1.306c.348-.04.783-.258 1.651-.692l2.634-1.317c.365-.182.547-.274.698-.389a2 2 0 0 0 .75-1.213C20 6.954 20 6.75 20 6.342c0-.971 0-1.457-.12-1.787a2 2 0 0 0-2.112-1.305c-.348.04-.783.258-1.651.692Z"></svg:path></svg:g>`,
})
export class SolarMusicNote4LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote4LinearIcon],svg[solar-music-note-4-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 18a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm0 0V8"></svg:path><svg:path stroke-linecap="round" d="m16.117 3.942l-2.634 1.317c-.365.182-.547.273-.698.389a2 2 0 0 0-.75 1.212c-.035.187-.035.39-.035.8c0 .97 0 1.456.12 1.786a2 2 0 0 0 2.112 1.306c.348-.04.783-.258 1.651-.692l2.634-1.317c.365-.182.547-.274.698-.389a2 2 0 0 0 .75-1.213C20 6.954 20 6.75 20 6.342c0-.971 0-1.457-.12-1.787a2 2 0 0 0-2.112-1.305c-.348.04-.783.258-1.651.692Z"></svg:path></svg:g>`,
})
export class SolarMusicNote4LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote4OutlineIcon],svg[solar-music-note-4-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.175 4.81a1.25 1.25 0 0 0-1.32-.815c-.063.007-.178.036-.418.14c-.238.105-.543.257-.985.478L13.82 5.93c-.392.196-.498.252-.578.313a1.25 1.25 0 0 0-.469.758c-.019.1-.022.22-.022.658c0 .494 0 .834.014 1.094c.014.262.04.377.06.437a1.25 1.25 0 0 0 1.32.816c.064-.007.179-.036.419-.141c.238-.104.543-.256.985-.477L18.18 8.07c.392-.196.497-.252.578-.314a1.25 1.25 0 0 0 .47-.756c.019-.1.022-.219.022-.657c0-.494 0-.835-.014-1.094c-.014-.262-.04-.378-.06-.437m-1.494-2.305A2.75 2.75 0 0 1 20.586 4.3c.098.27.132.563.148.869c.016.304.016.684.016 1.152v.083c0 .347 0 .62-.049.877a2.75 2.75 0 0 1-1.03 1.668c-.21.16-.453.28-.764.436l-.055.028l-2.652 1.326c-.418.21-.759.38-1.038.5c-.281.123-.558.223-.843.257a2.74 2.74 0 0 1-1.569-.282V18a4.75 4.75 0 1 1-1.5-3.464V7.597c0-.348 0-.62.049-.878a2.75 2.75 0 0 1 1.03-1.667c.21-.16.453-.281.764-.436l.055-.028L15.8 3.262c.418-.21.759-.38 1.038-.501c.281-.123.558-.223.843-.256M11.25 18a3.25 3.25 0 1 0-6.5 0a3.25 3.25 0 0 0 6.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarMusicNote4OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteBoldIcon],svg[solar-music-note-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.09 11.963l9.274-3.332v5.54a3.8 3.8 0 0 0-1.91-.501c-1.958 0-3.545 1.426-3.545 3.185s1.587 3.185 3.545 3.185c1.959 0 3.546-1.426 3.546-3.185V7.492c0-1.12 0-2.059-.088-2.807a7 7 0 0 0-.043-.31c-.084-.51-.234-.988-.522-1.386a2.2 2.2 0 0 0-.676-.617l-.009-.005c-.771-.461-1.639-.428-2.532-.224c-.864.198-1.936.6-3.25 1.095l-2.284.859c-.615.231-1.137.427-1.547.63c-.435.216-.81.471-1.092.851c-.281.38-.398.79-.452 1.234c-.05.418-.05.926-.05 1.525v7.794a3.8 3.8 0 0 0-1.91-.501C4.587 15.63 3 17.056 3 18.815S4.587 22 6.545 22c1.959 0 3.546-1.426 3.546-3.185z"></svg:path>`,
})
export class SolarMusicNoteBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteBoldDuotoneIcon],svg[solar-music-note-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.09 11.963l9.273-3.332L21 7.952v-.46c0-1.12 0-2.059-.088-2.807a7 7 0 0 0-.043-.31c-.085-.51-.234-.988-.523-1.386a2.2 2.2 0 0 0-.675-.617l-.01-.005c-.77-.461-1.638-.428-2.532-.224c-.864.198-1.935.6-3.249 1.095l-2.284.859c-.616.231-1.138.427-1.547.63c-.436.216-.811.471-1.092.851s-.399.79-.452 1.234c-.05.418-.05.926-.05 1.525v4.265z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.455 16.13a3.8 3.8 0 0 0-1.91-.5C4.587 15.63 3 17.056 3 18.815S4.587 22 6.545 22c1.959 0 3.546-1.426 3.546-3.185v-6.852l-1.636.638zm10.909-7.5v5.54a3.8 3.8 0 0 0-1.91-.5c-1.958 0-3.545 1.426-3.545 3.185s1.587 3.185 3.545 3.185c1.959 0 3.546-1.426 3.546-3.185V7.952z" opacity=".5"></svg:path>`,
})
export class SolarMusicNoteBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteBrokenIcon],svg[solar-music-note-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M9 19a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm12-2a3 3 0 1 1-6 0a3 3 0 0 1 6 0ZM9 19V8"></svg:path><svg:path fill="currentColor" d="M20.25 11.5a.75.75 0 0 0 1.5 0zm1.5 0V6h-1.5v5.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m15.735 3.755l-4 1.333c-1.32.44-1.98.66-2.357 1.184S9 7.492 9 8.882V12l12-4v-.45c0-2.533 0-3.8-.83-4.398c-.831-.599-2.032-.198-4.435.603Z"></svg:path></svg:g>`,
})
export class SolarMusicNoteBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteLineDuotoneIcon],svg[solar-music-note-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9 19a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm12-2a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path d="M9 19V8m12 9V6" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m15.735 3.755l-4 1.333c-1.32.44-1.98.66-2.357 1.184S9 7.492 9 8.882V12l12-4v-.45c0-2.533 0-3.8-.83-4.398c-.831-.599-2.032-.198-4.435.603Z"></svg:path></svg:g>`,
})
export class SolarMusicNoteLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteLinearIcon],svg[solar-music-note-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9 19a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm12-2a3 3 0 1 1-6 0a3 3 0 0 1 6 0ZM9 19V8m12 9V6"></svg:path><svg:path stroke-linecap="round" d="m15.735 3.755l-4 1.333c-1.32.44-1.98.66-2.357 1.184S9 7.492 9 8.882V12l12-4v-.45c0-2.533 0-3.8-.83-4.398c-.831-.599-2.032-.198-4.435.603Z"></svg:path></svg:g>`,
})
export class SolarMusicNoteLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteOutlineIcon],svg[solar-music-note-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.673 3.667c-.637.113-1.476.39-2.7.799l-4 1.333c-.677.226-1.124.376-1.454.53c-.312.144-.447.261-.533.381s-.155.285-.194.627c-.04.36-.042.833-.042 1.546v2.076l10.5-3.5c0-1.242-.004-2.1-.096-2.725c-.091-.623-.248-.847-.423-.974c-.175-.126-.438-.204-1.058-.093M21.74 6c-.012-.565-.04-1.06-.102-1.483c-.116-.793-.375-1.501-1.03-1.974c-.655-.472-1.409-.493-2.198-.353c-.758.135-1.702.45-2.854.834l-4.098 1.365c-.626.21-1.155.386-1.571.58c-.443.205-.827.46-1.118.864s-.412.849-.467 1.334A9 9 0 0 0 8.255 8H8.25v7.999a3.75 3.75 0 1 0 1.5 3V12.54l10.5-3.5V14a3.75 3.75 0 1 0 1.5 3V6zm-1.49 11a2.25 2.25 0 1 0-4.5 0a2.25 2.25 0 0 0 4.5 0m-12 2a2.25 2.25 0 1 0-4.5 0a2.25 2.25 0 0 0 4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarMusicNoteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteSlider2BoldIcon],svg[solar-music-note-slider-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.419 8c0-2.828 0-4.243.817-5.121S9.369 2 12 2s3.947 0 4.764.879c.817.878.817 2.293.817 5.121v8c0 2.828 0 4.243-.817 5.121S14.631 22 12 22s-3.947 0-4.764-.879c-.817-.878-.817-2.293-.817-5.121zm-1.396-.099V16.1c0 .982 0 1.865.046 2.629q.025.405.069.764q.02.16.046.32c.036.217-.131.42-.35.401c-.43-.037-.82-.118-1.183-.317a3.15 3.15 0 0 1-1.321-1.42c-.186-.391-.26-.81-.296-1.273C2 16.756 2 16.205 2 15.531V8.47c0-.674 0-1.224.034-1.672c.035-.463.11-.882.296-1.272a3.15 3.15 0 0 1 1.32-1.42c.364-.2.753-.28 1.184-.318c.219-.02.386.184.35.4a8 8 0 0 0-.046.321q-.044.36-.069.764c-.046.764-.046 1.646-.046 2.63m13.954 0V16.1c0 .982 0 1.865-.047 2.629q-.023.405-.068.764a8 8 0 0 1-.046.32c-.036.217.131.42.35.401c.43-.037.82-.118 1.183-.317a3.15 3.15 0 0 0 1.322-1.42c.185-.391.26-.81.295-1.273c.034-.447.034-.998.034-1.671V8.468c0-.674 0-1.225-.034-1.672c-.035-.463-.11-.882-.296-1.272a3.15 3.15 0 0 0-1.32-1.42c-.364-.2-.753-.28-1.184-.318c-.219-.02-.386.184-.35.4q.026.16.046.321q.044.36.069.764c.046.764.046 1.646.046 2.63m-4.109.51a1 1 0 0 1 .11-.042a.25.25 0 0 1 .254.157a1 1 0 0 1 .012.118c.006.117.006.276.006.527a7 7 0 0 1-.005.259a.25.25 0 0 1-.093.15l-.038.023c-.04.022-.095.05-.191.097l-1.317.659c-.224.112-.366.183-.474.23a1 1 0 0 1-.11.042a.25.25 0 0 1-.254-.157a1 1 0 0 1-.012-.117a11 11 0 0 1-.006-.528a7 7 0 0 1 .005-.258a.25.25 0 0 1 .093-.151l.038-.022c.04-.022.095-.05.191-.098l1.317-.658c.224-.112.366-.183.474-.23m1.777-.389a1.75 1.75 0 0 0-1.848-1.142c-.198.023-.377.09-.528.157c-.149.064-.326.153-.53.255l-1.333.667l-.036.018a2.7 2.7 0 0 0-.433.251a1.75 1.75 0 0 0-.656 1.061a2.6 2.6 0 0 0-.031.5v2.761a2.75 2.75 0 1 0 1.5 2.45v-2.886q.222.033.453.006c.198-.023.377-.09.528-.156c.149-.065.326-.154.53-.255l1.333-.667l.036-.018c.145-.073.299-.15.433-.252a1.75 1.75 0 0 0 .656-1.06c.031-.167.031-.338.031-.5v-.06c0-.226 0-.425-.009-.587a1.9 1.9 0 0 0-.096-.543M10 13.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarMusicNoteSlider2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteSlider2BoldDuotoneIcon],svg[solar-music-note-slider-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.869 8.412c.07-.03.102-.04.11-.043a.25.25 0 0 1 .254.157a1 1 0 0 1 .01.118c.007.117.007.276.007.527a7 7 0 0 1-.004.259a.25.25 0 0 1-.093.15l-.039.023c-.04.022-.095.05-.19.097l-1.317.659c-.225.112-.367.183-.475.23a1 1 0 0 1-.11.042a.25.25 0 0 1-.254-.157a1 1 0 0 1-.011-.117a11 11 0 0 1-.007-.528a7 7 0 0 1 .005-.258a.25.25 0 0 1 .093-.151l.038-.022l.191-.098l1.317-.658c.225-.112.367-.183.475-.23M10 13.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.236 2.879C6.42 3.757 6.42 5.172 6.42 8v8c0 2.828 0 4.243.817 5.121S9.37 22 12 22s3.947 0 4.764-.879c.818-.878.818-2.293.818-5.121V8c0-2.828 0-4.243-.818-5.121C15.947 2 14.631 2 12 2c-2.63 0-3.946 0-4.764.879m9.41 5.143a1.75 1.75 0 0 0-1.848-1.142c-.199.023-.378.09-.529.157c-.148.064-.326.153-.529.255l-1.37.685a2.7 2.7 0 0 0-.433.251a1.75 1.75 0 0 0-.655 1.061c-.032.166-.032.338-.032.5v2.761a2.75 2.75 0 1 0 1.5 2.45v-2.886q.223.033.453.006c.199-.023.377-.09.528-.156c.149-.065.327-.154.53-.255l1.37-.685c.144-.073.298-.15.432-.252a1.75 1.75 0 0 0 .656-1.06a2.6 2.6 0 0 0 .031-.5v-.06c0-.226 0-.425-.008-.587a1.9 1.9 0 0 0-.096-.543" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.724 3.762H5.268a8 8 0 0 0-.434.025c-.43.038-.82.119-1.183.318a3.15 3.15 0 0 0-1.321 1.42c-.186.39-.26.809-.296 1.272C2 7.245 2 7.796 2 8.47v7.063c0 .673 0 1.224.034 1.671c.035.464.11.882.296 1.273c.29.611.752 1.108 1.32 1.42c.364.2.753.28 1.184.318q.202.018.434.025h1.456c-.304-.899-.304-2.203-.304-4.24V8c0-2.037 0-3.34.305-4.238m10.551 16.477c.306-.898.306-2.202.306-4.239V8c0-2.037 0-3.34-.305-4.238h1.455q.233.007.434.025c.43.038.82.119 1.183.318a3.15 3.15 0 0 1 1.322 1.42c.185.39.26.809.295 1.272c.034.448.034.999.034 1.672v7.063c0 .673 0 1.224-.034 1.671c-.035.464-.11.882-.296 1.273a3.15 3.15 0 0 1-1.32 1.42c-.364.2-.753.28-1.184.318a8 8 0 0 1-.434.025z" opacity=".5"></svg:path>`,
})
export class SolarMusicNoteSlider2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteSlider2BrokenIcon],svg[solar-music-note-slider-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19 19.5c.465 0 .697 0 .891-.03a2.5 2.5 0 0 0 2.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891a2.5 2.5 0 0 0-2.08-2.079c-.193-.03-.425-.03-.89-.03m-14 15c-.465 0-.697 0-.891-.03a2.5 2.5 0 0 1-2.079-2.08C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 0 1 4.11 4.53c.193-.03.425-.03.89-.03M12 15a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm0 0v-5"></svg:path><svg:path stroke-linecap="round" d="m14.058 7.971l-1.316.658a2.3 2.3 0 0 0-.35.195a1 1 0 0 0-.374.606c-.018.093-.018.195-.018.4c0 .485 0 .728.06.893a1 1 0 0 0 1.056.652c.174-.02.391-.129.826-.346l1.316-.658c.183-.091.274-.137.35-.194a1 1 0 0 0 .374-.607C16 9.477 16 9.375 16 9.171c0-.486 0-.728-.06-.893a1 1 0 0 0-1.056-.653c-.174.02-.391.129-.826.346Z"></svg:path><svg:path stroke-linecap="round" d="M18.998 17c-.012 2.175-.108 3.353-.877 4.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16V8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v5"></svg:path></svg:g>`,
})
export class SolarMusicNoteSlider2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteSlider2LineDuotoneIcon],svg[solar-music-note-slider-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M19 19.5c.465 0 .697 0 .891-.03a2.5 2.5 0 0 0 2.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891a2.5 2.5 0 0 0-2.08-2.079c-.193-.03-.425-.03-.89-.03m-14 15c-.465 0-.697 0-.891-.03a2.5 2.5 0 0 1-2.079-2.08C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 0 1 4.11 4.53c.193-.03.425-.03.89-.03" opacity=".5"></svg:path><svg:path fill="currentColor" d="m12.742 8.63l-.336-.671zm1.316-.659l-.335-.67zm-.116 3.058l-.336-.67zm-1.882-.306l.705-.256zm1.056.652l-.087-.745zm2.866-1.805l.737.141zm-.375.607l.456.595zm-.723-2.552l.087.745zm1.056.653l-.705.255zm-3.547.546l.455.596zm-.375.606l-.737-.14zM11.25 15c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 12.75 15zM10 16.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 17.75zM8.75 15c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 7.25 15zM10 13.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 10 12.25zM12.75 15v-5h-1.5v5zm.327-5.7l1.317-.658l-.671-1.342l-1.317.659zm1.846.4l-1.317.659l.671 1.341l1.317-.658zm-3.673.13c0 .234 0 .44.008.606c.01.164.029.354.097.542l1.41-.51c.008.022-.002.008-.009-.111a11 11 0 0 1-.006-.528zm2.356.528a9 9 0 0 1-.474.23c-.11.049-.127.045-.103.043l.174 1.49c.198-.024.377-.091.528-.157c.153-.067.336-.159.546-.264zm-2.251.62a1.75 1.75 0 0 0 1.848 1.142l-.174-1.49a.25.25 0 0 1-.264-.163zm3.895-1.807c0 .107 0 .168-.002.214l-.002.044l1.473.282c.034-.18.031-.366.031-.54zm.344 1.87c.155-.077.324-.158.469-.269l-.911-1.191l-.038.022l-.191.097zm-.348-1.612a.25.25 0 0 1-.094.152l.91 1.191a1.75 1.75 0 0 0 .657-1.06zm-.852-.787c.224-.112.366-.183.474-.23c.11-.048.127-.045.103-.042l-.174-1.49c-.198.023-.377.09-.528.157c-.153.066-.336.158-.546.263zm2.356.529c0-.235 0-.44-.009-.606a1.9 1.9 0 0 0-.096-.543l-1.41.511c-.008-.023.002-.01.009.11c.006.118.006.277.006.528zm-1.779-.801a.25.25 0 0 1 .264.163l1.41-.51a1.75 1.75 0 0 0-1.848-1.143zm-2.565-.411c-.155.077-.324.158-.469.269l.911 1.192l.038-.022c.04-.022.095-.05.191-.098zm.344 1.87c0-.107 0-.168.002-.214l.002-.044l-1.473-.282c-.034.18-.031.367-.031.54zm-.813-1.601a1.75 1.75 0 0 0-.656 1.061l1.473.282a.25.25 0 0 1 .094-.151z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMusicNoteSlider2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteSlider2LinearIcon],svg[solar-music-note-slider-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16zm14 11.5c.465 0 .697 0 .891-.03a2.5 2.5 0 0 0 2.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891a2.5 2.5 0 0 0-2.08-2.079c-.193-.03-.425-.03-.89-.03m-14 15c-.465 0-.697 0-.891-.03a2.5 2.5 0 0 1-2.079-2.08C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 0 1 4.11 4.53c.193-.03.425-.03.89-.03"></svg:path><svg:path d="M12 15a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm0 0v-5"></svg:path><svg:path stroke-linecap="round" d="m14.058 7.971l-1.316.658a2.3 2.3 0 0 0-.35.195a1 1 0 0 0-.374.606c-.018.093-.018.195-.018.4c0 .485 0 .728.06.893a1 1 0 0 0 1.056.652c.174-.02.391-.129.826-.346l1.316-.658c.183-.091.274-.137.35-.194a1 1 0 0 0 .374-.607C16 9.477 16 9.375 16 9.171c0-.486 0-.728-.06-.893a1 1 0 0 0-1.056-.653c-.174.02-.391.129-.826.346Z"></svg:path></svg:g>`,
})
export class SolarMusicNoteSlider2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteSlider2OutlineIcon],svg[solar-music-note-slider-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.945 1.25h2.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.4.4.648.87.806 1.404c.211.003.388.012.55.038a3.25 3.25 0 0 1 2.702 2.702c.04.253.04.542.04.943v9.13c0 .401 0 .69-.04.943a3.25 3.25 0 0 1-2.702 2.702a4 4 0 0 1-.55.038c-.158.534-.406 1.003-.806 1.404c-.602.602-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-2.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982c-.4-.4-.648-.87-.806-1.404a4 4 0 0 1-.55-.038a3.25 3.25 0 0 1-2.702-2.702c-.04-.253-.04-.542-.04-.943v-9.13c0-.401 0-.69.04-.943A3.25 3.25 0 0 1 3.992 3.79c.162-.026.339-.035.55-.038c.158-.534.406-1.003.806-1.404c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M4.302 5.262l-.076.01a1.75 1.75 0 0 0-1.454 1.454c-.02.122-.022.28-.022.774v9c0 .493.002.652.022.774a1.75 1.75 0 0 0 1.53 1.464c-.052-.749-.052-1.639-.052-2.683v-8.11c0-1.044 0-1.934.052-2.683m15.396 13.476l.076-.01a1.75 1.75 0 0 0 1.454-1.454c.02-.122.022-.28.022-.774v-9c0-.493-.002-.652-.021-.774a1.75 1.75 0 0 0-1.53-1.464c.051.749.051 1.639.051 2.683v8.11c0 1.044 0 1.934-.052 2.683M7.808 2.853c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C5.752 5.562 5.75 6.564 5.75 8v8c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h2c1.435 0 2.437-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191V8c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.754-.101-1.756-.103-3.191-.103h-2c-1.435 0-2.437.002-3.192.103m7.17 5.516a1 1 0 0 0-.11.043c-.108.047-.25.117-.474.23l-1.317.658a7 7 0 0 0-.23.12a.25.25 0 0 0-.092.15l-.003.045l-.002.214c0 .251 0 .41.007.528c.004.076.01.109.01.117a.25.25 0 0 0 .255.157a1 1 0 0 0 .11-.043c.108-.047.25-.117.474-.23l1.317-.658a7 7 0 0 0 .23-.12a.25.25 0 0 0 .093-.151l.002-.044l.002-.214c0-.251 0-.41-.006-.528a1 1 0 0 0-.012-.117a.25.25 0 0 0-.253-.157m-.18-1.49a1.75 1.75 0 0 1 1.847 1.143c.068.188.088.378.096.543c.009.161.009.36.009.587v.059c0 .163 0 .334-.031.5c-.081.422-.315.8-.656 1.061a2.7 2.7 0 0 1-.433.251l-.036.019l-1.334.666c-.203.102-.38.19-.529.255c-.15.066-.33.134-.528.157a1.8 1.8 0 0 1-.453-.006V15a2.75 2.75 0 1 1-1.5-2.45V9.789c0-.163 0-.334.031-.5c.081-.422.314-.8.656-1.061a2.5 2.5 0 0 1 .433-.251l.036-.019l1.334-.666q.305-.155.529-.256c.15-.065.33-.133.528-.156M11.25 15a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarMusicNoteSlider2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteSliderBoldIcon],svg[solar-music-note-slider-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 12.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.419 8c0-2.828 0-4.243.817-5.121S9.369 2 12 2s3.947 0 4.764.879c.817.878.817 2.293.817 5.121v8c0 2.828 0 4.243-.817 5.121S14.631 22 12 22s-3.947 0-4.764-.879c-.817-.878-.817-2.293-.817-5.121zm7.331 0a.75.75 0 0 0-1.5 0v3.55a2.75 2.75 0 1 0 1.5 2.45v-3.55c.375.192.8.3 1.25.3a.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.023 7.901V16.1c0 .982 0 1.865.046 2.629q.025.405.069.764q.02.16.046.32c.036.217-.131.42-.35.401c-.43-.037-.82-.118-1.183-.317a3.15 3.15 0 0 1-1.321-1.42c-.186-.391-.26-.81-.296-1.273C2 16.756 2 16.205 2 15.531V8.47c0-.674 0-1.224.034-1.672c.035-.463.11-.882.296-1.272a3.15 3.15 0 0 1 1.32-1.42c.364-.2.753-.28 1.184-.318c.219-.02.386.184.35.4a8 8 0 0 0-.046.321q-.044.36-.069.764c-.046.764-.046 1.646-.046 2.63m13.954-.002V16.1c0 .982 0 1.865-.047 2.629q-.023.405-.068.764a8 8 0 0 1-.046.32c-.036.217.131.42.35.401c.43-.037.82-.118 1.183-.317a3.15 3.15 0 0 0 1.322-1.42c.185-.391.26-.81.295-1.273c.034-.447.034-.998.034-1.671V8.468c0-.674 0-1.225-.034-1.672c-.035-.463-.11-.882-.296-1.272a3.15 3.15 0 0 0-1.32-1.42c-.364-.2-.753-.28-1.184-.318c-.219-.02-.386.184-.35.4q.026.16.046.321q.044.36.069.764c.046.764.046 1.646.046 2.63"></svg:path>`,
})
export class SolarMusicNoteSliderBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteSliderBoldDuotoneIcon],svg[solar-music-note-slider-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.724 3.762H5.268a8 8 0 0 0-.434.025c-.43.038-.82.119-1.183.318a3.15 3.15 0 0 0-1.321 1.42c-.186.39-.26.809-.296 1.272C2 7.245 2 7.796 2 8.47v7.063c0 .673 0 1.224.034 1.671c.035.464.11.882.296 1.273c.29.611.752 1.108 1.32 1.42c.364.2.753.28 1.184.318q.202.018.434.025h1.456c-.304-.899-.304-2.203-.304-4.24V8c0-2.037 0-3.34.305-4.238m10.551 16.477c.306-.898.306-2.202.306-4.239V8c0-2.037 0-3.34-.305-4.238h1.455q.233.007.434.025c.43.038.82.119 1.183.318a3.15 3.15 0 0 1 1.322 1.42c.185.39.26.809.295 1.272c.034.448.034.999.034 1.672v7.063c0 .673 0 1.224-.034 1.671c-.035.464-.11.882-.296 1.273a3.15 3.15 0 0 1-1.32 1.42c-.364.2-.753.28-1.184.318a8 8 0 0 1-.434.025z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11 12.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.419 8c0-2.828 0-4.243.817-5.121C8.054 2 9.37 2 12 2s3.947 0 4.764.879c.818.878.818 2.293.818 5.121v8c0 2.828 0 4.243-.818 5.121C15.947 22 14.631 22 12 22c-2.63 0-3.946 0-4.764-.879c-.817-.878-.817-2.293-.817-5.121zm7.331 0a.75.75 0 1 0-1.5 0v3.55a2.75 2.75 0 1 0 1.5 2.45v-3.55c.375.192.8.3 1.25.3a.75.75 0 1 0 0-1.5c-.69 0-1.25-.56-1.25-1.25" clip-rule="evenodd"></svg:path>`,
})
export class SolarMusicNoteSliderBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteSliderBrokenIcon],svg[solar-music-note-slider-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M18.998 17c-.012 2.175-.108 3.353-.877 4.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16V8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v5"></svg:path><svg:path d="M19 19.5c.465 0 .697 0 .891-.03a2.5 2.5 0 0 0 2.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891a2.5 2.5 0 0 0-2.08-2.079c-.193-.03-.425-.03-.89-.03"></svg:path><svg:path stroke-linecap="round" d="M13 14V8"></svg:path><svg:circle cx="11" cy="14" r="2"></svg:circle><svg:path stroke-linecap="round" d="M15 10a2 2 0 0 1-2-2"></svg:path><svg:path d="M5 19.5c-.465 0-.697 0-.891-.03a2.5 2.5 0 0 1-2.079-2.08C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 0 1 4.11 4.53c.193-.03.425-.03.89-.03"></svg:path></svg:g>`,
})
export class SolarMusicNoteSliderBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteSliderLineDuotoneIcon],svg[solar-music-note-slider-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16z"></svg:path><svg:path d="M19 19.5c.465 0 .697 0 .891-.03a2.5 2.5 0 0 0 2.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891a2.5 2.5 0 0 0-2.08-2.079c-.193-.03-.425-.03-.89-.03" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 0V8a2 2 0 0 0 2 2" opacity=".5"></svg:path><svg:path d="M5 19.5c-.465 0-.697 0-.891-.03a2.5 2.5 0 0 1-2.079-2.08C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 0 1 4.11 4.53c.193-.03.425-.03.89-.03" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMusicNoteSliderLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteSliderLinearIcon],svg[solar-music-note-slider-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16zm14 11.5c.465 0 .697 0 .891-.03a2.5 2.5 0 0 0 2.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891a2.5 2.5 0 0 0-2.08-2.079c-.193-.03-.425-.03-.89-.03"></svg:path><svg:path stroke-linecap="round" d="M13 14V8"></svg:path><svg:circle cx="11" cy="14" r="2"></svg:circle><svg:path stroke-linecap="round" d="M15 10a2 2 0 0 1-2-2"></svg:path><svg:path d="M5 19.5c-.465 0-.697 0-.891-.03a2.5 2.5 0 0 1-2.079-2.08C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 0 1 4.11 4.53c.193-.03.425-.03.89-.03"></svg:path></svg:g>`,
})
export class SolarMusicNoteSliderLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteSliderOutlineIcon],svg[solar-music-note-slider-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.945 1.25h2.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.4.4.648.87.806 1.404c.211.003.388.012.55.038a3.25 3.25 0 0 1 2.702 2.702c.04.253.04.542.04.943v9.13c0 .401 0 .69-.04.943a3.25 3.25 0 0 1-2.702 2.702a4 4 0 0 1-.55.038c-.158.534-.406 1.003-.806 1.404c-.602.602-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-2.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982c-.4-.4-.648-.87-.806-1.404a4 4 0 0 1-.55-.038a3.25 3.25 0 0 1-2.702-2.702c-.04-.253-.04-.542-.04-.943v-9.13c0-.401 0-.69.04-.943A3.25 3.25 0 0 1 3.992 3.79c.162-.026.339-.035.55-.038c.158-.534.406-1.003.806-1.404c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M4.302 5.262l-.076.01a1.75 1.75 0 0 0-1.454 1.454c-.02.122-.022.28-.022.774v9c0 .493.002.652.022.774a1.75 1.75 0 0 0 1.53 1.464c-.052-.749-.052-1.639-.052-2.683v-8.11c0-1.044 0-1.934.052-2.683m15.396 13.476l.076-.01a1.75 1.75 0 0 0 1.454-1.454c.02-.122.022-.28.022-.774v-9c0-.493-.002-.652-.021-.774a1.75 1.75 0 0 0-1.53-1.464c.051.749.051 1.639.051 2.683v8.11c0 1.044 0 1.934-.052 2.683M7.808 2.853c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C5.752 5.562 5.75 6.564 5.75 8v8c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h2c1.435 0 2.437-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191V8c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.754-.101-1.756-.103-3.191-.103h-2c-1.435 0-2.437.002-3.192.103m5.942 7.597V14a2.75 2.75 0 1 1-1.5-2.45v-2.8A.75.75 0 0 1 13 8c.414 0 .734.364.968.706A1.25 1.25 0 0 0 15 9.25a.75.75 0 0 1 0 1.5c-.45 0-.875-.108-1.25-.3M11 12.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarMusicNoteSliderOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNotesBoldIcon],svg[solar-music-notes-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.75 12.508l8.5-3.4v5.653a3.25 3.25 0 1 0 1.5 2.74V7.945c0-1.143 0-2.101-.08-2.865a8 8 0 0 0-.04-.315c-.078-.522-.214-1.008-.479-1.415a2.2 2.2 0 0 0-.62-.63l-.007-.005c-.708-.47-1.503-.437-2.322-.228c-.792.202-1.774.613-2.978 1.117l-2.094.876c-.565.236-1.043.437-1.418.644c-.4.22-.743.48-1.001.868s-.366.805-.415 1.259c-.046.426-.046.945-.046 1.557v7.952a3.25 3.25 0 1 0 1.5 2.74zM7.75 2a.75.75 0 0 0-1.5 0v5.76a3.25 3.25 0 1 0 1.5 2.74V5.005c.699.504 1.53.745 2.25.745a.75.75 0 0 0 0-1.5a2.44 2.44 0 0 1-1.488-.552c-.434-.357-.762-.9-.762-1.698"></svg:path>`,
})
export class SolarMusicNotesBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNotesBoldDuotoneIcon],svg[solar-music-notes-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.75 12.508l8.5-3.4v5.653a3.25 3.25 0 1 0 1.5 2.74V7.945c0-1.143 0-2.101-.08-2.865a8 8 0 0 0-.04-.315c-.078-.522-.214-1.008-.479-1.415a2.2 2.2 0 0 0-.62-.63l-.007-.005c-.708-.47-1.503-.437-2.322-.228c-.792.202-1.774.613-2.978 1.117l-2.094.876c-.565.236-1.043.437-1.418.644c-.4.22-.743.48-1.001.868s-.366.805-.415 1.259c-.046.426-.046.945-.046 1.557v7.952a3.25 3.25 0 1 0 1.5 2.74z"></svg:path><svg:path fill="currentColor" d="M7.75 2a.75.75 0 0 0-1.5 0v5.76a3.25 3.25 0 1 0 1.5 2.74V5.005c.699.504 1.53.745 2.25.745a.75.75 0 0 0 0-1.5a2.44 2.44 0 0 1-1.488-.552c-.434-.357-.762-.9-.762-1.698" opacity=".5"></svg:path>`,
})
export class SolarMusicNotesBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNotesBrokenIcon],svg[solar-music-notes-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M12 19.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm10-2a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m22 8l-10 4"></svg:path><svg:path fill="currentColor" d="m14.456 5.158l.29.692zm2-.837l-.29-.692zm4.652-.98l-.416.624zM21.25 12a.75.75 0 0 0 1.5 0zm-8.5 7V8.847h-1.5V19zm1.995-13.15l2-.837l-.579-1.384l-2 .837zm8.005 2.16c0-1.333.002-2.42-.12-3.24c-.123-.837-.4-1.583-1.106-2.054l-.832 1.249c.185.123.355.353.455 1.024c.101.686.103 1.638.103 3.022zm-6.005-2.997c1.276-.534 2.156-.9 2.828-1.072c.657-.167.935-.099 1.12.024l.83-1.249c-.707-.47-1.502-.437-2.32-.228c-.805.205-1.806.626-3.037 1.141zM12.75 8.848c0-.662.001-1.098.037-1.434c.035-.317.095-.474.172-.59l-1.248-.83c-.258.387-.366.805-.415 1.258c-.047.436-.046.967-.046 1.596zm1.416-4.382c-.58.243-1.07.447-1.454.659c-.4.22-.743.48-1.001.868l1.248.831c.077-.115.199-.232.478-.386c.296-.163.698-.333 1.308-.588zM22.75 12V8.01h-1.5V12z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 11V2"></svg:path><svg:circle cx="4.5" cy="10.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 5c-1.243 0-3-.929-3-3"></svg:path></svg:g>`,
})
export class SolarMusicNotesBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNotesLineDuotoneIcon],svg[solar-music-notes-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M12 19.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm10-2a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m22 8l-10 4"></svg:path><svg:path fill="currentColor" d="m14.456 5.158l.29.692zm2-.837l-.29-.692zm4.652-.98l-.416.624zM12.75 19V8.847h-1.5V19zm10-1.847V8.011h-1.5v9.143zM14.745 5.85l2-.837l-.579-1.384l-2 .837zm8.005 2.16c0-1.333.002-2.42-.12-3.24c-.123-.837-.4-1.583-1.106-2.054l-.832 1.249c.185.123.355.353.455 1.024c.101.686.103 1.638.103 3.022zm-6.005-2.997c1.276-.534 2.156-.9 2.828-1.072c.657-.167.935-.099 1.12.024l.83-1.249c-.707-.47-1.502-.437-2.32-.228c-.805.205-1.806.626-3.037 1.141zM12.75 8.848c0-.662.001-1.098.037-1.434c.035-.317.095-.474.172-.59l-1.248-.83c-.258.387-.366.805-.415 1.258c-.047.436-.046.967-.046 1.596zm1.416-4.382c-.58.243-1.07.447-1.454.659c-.4.22-.743.48-1.001.868l1.248.831c.077-.115.199-.232.478-.386c.296-.163.698-.333 1.308-.588z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 11V2c0 2.071 1.757 3 3 3m-3 5.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMusicNotesLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNotesLinearIcon],svg[solar-music-notes-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M12 19.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm10-2a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m22 8l-10 4"></svg:path><svg:path fill="currentColor" d="m14.456 5.158l.29.692zm2-.837l-.29-.692zm4.652-.98l-.416.624zM12.75 19V8.847h-1.5V19zm10-1.847V8.011h-1.5v9.143zM14.745 5.85l2-.837l-.579-1.384l-2 .837zm8.005 2.16c0-1.333.002-2.42-.12-3.24c-.123-.837-.4-1.583-1.106-2.054l-.832 1.249c.185.123.355.353.455 1.024c.101.686.103 1.638.103 3.022zm-6.005-2.997c1.276-.534 2.156-.9 2.828-1.072c.657-.167.935-.099 1.12.024l.83-1.249c-.707-.47-1.502-.437-2.32-.228c-.805.205-1.806.626-3.037 1.141zM12.75 8.848c0-.662.001-1.098.037-1.434c.035-.317.095-.474.172-.59l-1.248-.83c-.258.387-.366.805-.415 1.258c-.047.436-.046.967-.046 1.596zm1.416-4.382c-.58.243-1.07.447-1.454.659c-.4.22-.743.48-1.001.868l1.248.831c.077-.115.199-.232.478-.386c.296-.163.698-.333 1.308-.588z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 11V2"></svg:path><svg:circle cx="4.5" cy="10.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 5c-1.243 0-3-.929-3-3"></svg:path></svg:g>`,
})
export class SolarMusicNotesLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNotesOutlineIcon],svg[solar-music-notes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.512 3.698A2.44 2.44 0 0 0 10 4.25a.75.75 0 0 1 0 1.5c-.72 0-1.551-.24-2.25-.745V11c0 .16-.05.307-.135.429A3.252 3.252 0 0 1 1.25 10.5a3.25 3.25 0 0 1 5-2.74V2h1.5c0 .798.328 1.34.762 1.698M6.25 10.5a1.75 1.75 0 1 0-3.5 0a1.75 1.75 0 0 0 3.5 0m13.323-6.559c-.672.171-1.552.537-2.828 1.071l-2 .838c-.61.255-1.012.424-1.308.588c-.28.154-.4.27-.478.386s-.137.272-.171.59c-.037.336-.038.772-.038 1.434v2.044l8.5-3.4c-.002-1.108-.015-1.907-.103-2.503c-.1-.672-.27-.901-.454-1.024c-.185-.123-.463-.191-1.12-.024m3.177 4.042v-.035c0-1.306 0-2.37-.12-3.179c-.123-.836-.4-1.582-1.106-2.053c-.708-.47-1.503-.437-2.322-.228c-.792.201-1.774.612-2.978 1.116l-2.094.877c-.565.236-1.043.436-1.418.644c-.4.22-.743.48-1.001.868s-.366.805-.415 1.259c-.046.426-.046.944-.046 1.556v7.953A3.25 3.25 0 1 0 12.712 19h.038v-6.493l8.5-3.4v5.653a3.25 3.25 0 1 0 1.482 2.393h.018zM19.5 15.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m-10 2a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarMusicNotesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMutedBoldIcon],svg[solar-muted-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.47 8.47a.75.75 0 0 1 1.06 0L17 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L18.06 12l2.47 2.47a.75.75 0 0 1-1.06 1.06L17 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L15.94 12l-2.47-2.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.681 8.164c-.621.788-.64 1.71-.678 3.552a14 14 0 0 0 0 .569c.038 1.842.057 2.763.678 3.551c.113.144.28.315.42.431c.763.636 1.771.636 3.788.636c.72 0 1.081 0 1.425.093q.107.029.211.066c.336.121.637.33 1.238.746c2.374 1.645 3.56 2.467 4.557 2.11a2.1 2.1 0 0 0 .541-.29c.786-.58.91-1.863 1.024-4.331l-1.294 1.294a2.25 2.25 0 1 1-3.182-3.182L13.818 12l-1.409-1.409a2.25 2.25 0 1 1 3.182-3.182l1.294 1.294c-.115-2.468-.238-3.751-1.024-4.331a2.1 2.1 0 0 0-.54-.29c-.997-.357-2.184.465-4.558 2.11c-.601.416-.902.625-1.238.746a3 3 0 0 1-.211.067c-.344.092-.704.092-1.425.092c-2.017 0-3.025 0-3.789.636c-.14.116-.306.287-.419.43"></svg:path>`,
})
export class SolarMutedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMutedBoldDuotoneIcon],svg[solar-muted-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 16c-1.886 0-2.828 0-3.414-.586S13 13.886 13 12s0-2.828.586-3.414S15.114 8 17 8s2.828 0 3.414.586S21 10.114 21 12s0 2.828-.586 3.414S18.886 16 17 16m-1.306-6.25a.667.667 0 0 0-.943.944L16.057 12l-1.306 1.306a.667.667 0 0 0 .943.943L17 12.943l1.306 1.306a.667.667 0 0 0 .943-.943L17.943 12l1.306-1.306a.667.667 0 0 0-.943-.943L17 11.057z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.003 11.716c.038-1.843.057-2.764.678-3.552c.113-.144.28-.315.42-.431c.763-.636 1.771-.636 3.788-.636c.72 0 1.081 0 1.425-.092a3 3 0 0 0 .211-.067c.336-.121.637-.33 1.238-.746c2.374-1.645 3.56-2.467 4.557-2.11c.191.069.376.168.541.29c.708.522.878 1.614.989 3.628c-1.786 0-2.694.016-3.264.586C13 9.172 13 10.114 13 12s0 2.828.586 3.414c.57.57 1.478.586 3.264.586c-.111 2.014-.281 3.106-.989 3.628a2.2 2.2 0 0 1-.54.29c-.997.357-2.184-.465-4.558-2.11c-.601-.416-.902-.625-1.238-.746a3 3 0 0 0-.211-.067c-.344-.092-.704-.092-1.425-.092c-2.017 0-3.025 0-3.789-.636a3 3 0 0 1-.419-.43c-.621-.79-.64-1.71-.678-3.552a14 14 0 0 1 0-.57" opacity=".5"></svg:path>`,
})
export class SolarMutedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMutedBrokenIcon],svg[solar-muted-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M1.959 8.577a3.2 3.2 0 0 1 1.381-1.3C3.94 7 4.626 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.399 12.632 3.56 13.7 3.925c.205.07.403.17.58.295c.923.648.993 2.157 1.133 5.174A68 68 0 0 1 15.5 12c0 .532-.035 1.488-.087 2.605c-.14 3.018-.21 4.526-1.133 5.175a2.3 2.3 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151L8.6 17.78c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.2 3.2 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395q-.017-.27-.026-.528M22 10l-4 4m0-4l4 4"></svg:path>`,
})
export class SolarMutedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMutedLineDuotoneIcon],svg[solar-muted-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M1.535 10.971c.073-1.208.11-1.813.424-2.394a3.2 3.2 0 0 1 1.38-1.3C3.94 7 4.627 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.399 12.632 3.56 13.7 3.925c.205.07.403.17.58.295c.922.648.993 2.157 1.133 5.174A68 68 0 0 1 15.5 12c0 .532-.035 1.488-.087 2.605c-.14 3.018-.21 4.526-1.133 5.175a2.3 2.3 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151L8.6 17.78c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.2 3.2 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395A17 17 0 0 1 1.5 12c0-.323.013-.671.035-1.029Z"></svg:path><svg:path stroke-linecap="round" d="m22 10l-4 4m0-4l4 4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMutedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMutedLinearIcon],svg[solar-muted-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.659 6c-.14-.798-.37-1.315-.792-1.628a2.1 2.1 0 0 0-.538-.29c-.992-.357-2.172.465-4.533 2.11l-.204.14c-.397.277-.595.415-.809.515a2.7 2.7 0 0 1-.66.21c-.231.04-.469.04-.944.04c-1.276 0-1.914 0-2.47.272c-.509.249-1.017.754-1.283 1.275c-.291.57-.325 1.162-.394 2.348c-.02.35-.032.692-.032 1.008s.012.658.032 1.008c.069 1.186.103 1.778.394 2.348c.266.521.774 1.026 1.282 1.275c.557.272 1.195.272 2.47.272c.476 0 .714 0 .944.04q.343.062.661.21c.214.1.412.238.81.514l.203.142c2.36 1.644 3.542 2.466 4.533 2.109c.19-.069.374-.168.538-.29c.422-.313.652-.83.792-1.628M20 9l-6 6m0-6l6 6"></svg:path>`,
})
export class SolarMutedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMutedOutlineIcon],svg[solar-muted-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.224 6.807c1.2-.835 2.036-1.415 2.694-1.753s.96-.336 1.156-.266c.12.044.24.107.346.186c.187.139.37.417.5 1.156a.75.75 0 0 0 1.478-.26c-.15-.856-.427-1.613-1.084-2.1a2.9 2.9 0 0 0-.731-.393c-.795-.286-1.579-.053-2.35.342c-.759.39-1.678 1.03-2.818 1.823l-.251.176c-.418.29-.556.384-.698.45a2 2 0 0 1-.475.15c-.15.027-.311.03-.812.03h-.16c-1.12-.001-1.925-.002-2.64.348c-.66.322-1.284.947-1.621 1.607c-.364.712-.406 1.455-.467 2.518l-.007.128c-.021.36-.034.717-.034 1.051c0 .335.013.691.034 1.052l.007.128c.06 1.062.103 1.805.467 2.518c.337.66.962 1.285 1.621 1.607c.715.35 1.52.349 2.64.348h.16c.5 0 .662.003.812.03q.246.043.475.15c.142.066.28.159.698.45l.251.175c1.14.794 2.06 1.434 2.819 1.823c.77.396 1.554.629 2.349.343a2.9 2.9 0 0 0 .73-.393c.658-.488.934-1.245 1.085-2.1a.75.75 0 1 0-1.478-.26c-.13.74-.313 1.017-.5 1.155a1.4 1.4 0 0 1-.346.186c-.196.071-.498.072-1.156-.265c-.658-.338-1.495-.918-2.694-1.753l-.252-.176c-.35-.244-.599-.417-.872-.544a3.4 3.4 0 0 0-.846-.268c-.297-.053-.598-.053-1.016-.053h-.06c-1.348 0-1.776-.018-2.14-.196c-.358-.174-.75-.56-.944-.941c-.204-.4-.241-.811-.313-2.05A17 17 0 0 1 4.75 12c0-.298.011-.624.031-.965c.072-1.239.109-1.65.313-2.05c.194-.381.586-.767.944-.941c.364-.178.792-.196 2.14-.196h.06c.418 0 .72 0 1.016-.053q.44-.079.846-.268c.273-.127.522-.3.872-.544z"></svg:path><svg:path fill="currentColor" d="M14.53 8.47a.75.75 0 0 0-1.06 1.06L15.94 12l-2.47 2.47a.75.75 0 0 0 1.06 1.06L17 13.062l2.47 2.47a.75.75 0 0 0 1.06-1.061L18.06 12l2.47-2.47a.75.75 0 1 0-1.06-1.06L17 10.94z"></svg:path>`,
})
export class SolarMutedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookBoldIcon],svg[solar-notebook-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.75 2.013V22H15c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2H9zm2 4.487a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75M3 7.25c.008-2.336.081-3.574.879-4.371c.675-.675 1.666-.832 3.371-.868v19.978c-1.705-.036-2.696-.193-3.371-.868c-.798-.797-.871-2.035-.878-4.371H4a.75.75 0 0 0 0-1.5H3v-2.5h1a.75.75 0 0 0 0-1.5H3v-2.5h1a.75.75 0 0 0 0-1.5zm0 0H2a.75.75 0 0 0 0 1.5h1zm0 5.5H2a.75.75 0 0 1 0-1.5h1zm0 2.5H2a.75.75 0 0 0 0 1.5h1z" clip-rule="evenodd"></svg:path>`,
})
export class SolarNotebookBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookBoldDuotoneIcon],svg[solar-notebook-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8c0-2.828 0-4.243.879-5.121C4.757 2 6.172 2 9 2h6c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v8c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.879C3 20.243 3 18.828 3 16z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.75 2.012v20h-1.5v-20zM1.25 8A.75.75 0 0 1 2 7.25h2a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 8m0 4a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10.75 6.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class SolarNotebookBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookBookmarkBoldIcon],svg[solar-notebook-bookmark-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.25 4.48v3.057c0 .111 0 .27.021.406a.94.94 0 0 0 .444.683a.96.96 0 0 0 .783.072c.13-.04.272-.108.378-.159L17 8.005l1.124.534c.106.05.248.119.378.16a.96.96 0 0 0 .783-.073a.94.94 0 0 0 .444-.683c.022-.136.021-.295.021-.406V3.031q.17-.008.332-.013C21.154 2.98 22 3.86 22 4.933v11.21c0 1.112-.906 2.01-2.015 2.08c-.97.06-2.108.179-2.985.41c-1.082.286-2.373.904-3.372 1.436q-.422.224-.878.323V5.174a3.6 3.6 0 0 0 .924-.371q.277-.162.576-.323m5.478 8.338a.75.75 0 0 1-.546.91l-4 1a.75.75 0 1 1-.364-1.456l4-1a.75.75 0 0 1 .91.546M11.25 5.214a3.4 3.4 0 0 1-.968-.339C9.296 4.354 8.05 3.765 7 3.487c-.887-.233-2.041-.352-3.018-.412C2.886 3.008 2 3.9 2 4.998v11.146c0 1.11.906 2.01 2.015 2.079c.97.06 2.108.179 2.985.41c1.081.286 2.373.904 3.372 1.436q.422.224.878.324zM4.273 8.818a.75.75 0 0 1 .91-.546l4 1a.75.75 0 1 1-.365 1.456l-4-1a.75.75 0 0 1-.545-.91m.91 3.454a.75.75 0 1 0-.365 1.456l4 1a.75.75 0 0 0 .364-1.456z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18.25 3.151c-.62.073-1.23.18-1.75.336a8 8 0 0 0-.75.27v3.182l.75-.356l.008-.005a1.1 1.1 0 0 1 .492-.13q.072 0 .138.01c.175.029.315.1.354.12l.009.005l.75.356V3.15"></svg:path>`,
})
export class SolarNotebookBookmarkBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookBookmarkBoldDuotoneIcon],svg[solar-notebook-bookmark-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.25 4.48v3.057c0 .111 0 .27.02.406a.94.94 0 0 0 .445.683a.96.96 0 0 0 .783.072c.13-.04.272-.108.378-.159L17 8.005l1.124.534c.106.05.248.119.378.16a.96.96 0 0 0 .783-.073a.94.94 0 0 0 .444-.683c.021-.136.021-.295.021-.406V3.031q.17-.008.332-.013C21.154 2.98 22 3.86 22 4.933v11.21c0 1.112-.906 2.01-2.015 2.08c-.97.06-2.108.179-2.985.41c-1.082.286-1.99 1.068-3.373 1.436c-.626.167-1.324.257-1.627.323V5.174c.32-.079 1.382-.203 1.674-.371q.277-.162.576-.323m5.478 8.338a.75.75 0 0 1-.546.91l-4 1a.75.75 0 0 1-.364-1.456l4-1a.75.75 0 0 1 .91.546" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18.25 3.151c-.62.073-1.23.18-1.75.336a8 8 0 0 0-.75.27v3.182l.75-.356l.008-.005a1.1 1.1 0 0 1 .492-.13q.071 0 .138.01c.175.029.315.1.354.12l.009.005l.749.356z"></svg:path><svg:path fill="currentColor" d="M12 5.214c-.334-.064-1.057-.161-1.718-.339C8.938 4.515 8.05 3.765 7 3.487c-.887-.234-2.041-.352-3.018-.412C2.886 3.007 2 3.9 2 4.998v11.146c0 1.11.906 2.01 2.015 2.079c.97.06 2.108.179 2.985.41c.486.129 1.216.431 1.873.726c1.005.451 2.052.797 3.127 1.034z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M4.273 12.818a.75.75 0 0 1 .91-.545l4 1a.75.75 0 1 1-.365 1.455l-4-1a.75.75 0 0 1-.545-.91m.909-4.545a.75.75 0 1 0-.364 1.455l4 1a.75.75 0 0 0 .364-1.455z"></svg:path>`,
})
export class SolarNotebookBookmarkBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookBookmarkBrokenIcon],svg[solar-notebook-bookmark-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M12 5.854V21"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m5 9l4 1m-4 3l4 1m10-1l-4 1m4-8.5v4.01c0 .276 0 .414-.095.47s-.224-.007-.484-.13l-1.242-.59c-.088-.042-.132-.062-.179-.062s-.091.02-.179.062l-1.242.59c-.26.123-.39.185-.484.13C15 9.923 15 9.785 15 9.51V6.95"></svg:path><svg:path fill="currentColor" d="m20.082 3.018l.026.75zm-3.582.47l-.215-.72v.001zm-2.826 1.315l-.376-.65zM3.982 3.075l-.046.748zM7 3.487l.191-.725zm3.282 1.388l-.35.663zm3.346 15.194l.352.662zM17 18.633l-.191-.725zm2.985-.41l.047.748zm-9.613 1.846l-.352.662zM7 18.633l.191-.725zm-2.985-.41l-.047.748zm18.735-7.685a.75.75 0 0 0-1.5 0zM21.25 7a.75.75 0 0 0 1.5 0zm-20 3.57a.75.75 0 0 0 1.5 0zM2.75 14a.75.75 0 0 0-1.5 0zM20.056 2.268c-1.139.04-2.626.158-3.771.501l.43 1.437c.95-.284 2.274-.4 3.393-.439zm-3.771.501c-.995.298-2.114.88-2.987 1.385l.752 1.298c.85-.492 1.845-1 2.665-1.246zM3.936 3.823c.966.06 2.06.175 2.873.39l.382-1.45c-.96-.254-2.176-.376-3.163-.437zm2.873.39c.962.254 2.146.809 3.123 1.325l.7-1.326c-.995-.526-2.304-1.15-3.44-1.45zM13.98 20.73c.991-.528 2.219-1.11 3.211-1.373l-.382-1.45c-1.17.309-2.526.962-3.534 1.5zm3.211-1.373c.803-.211 1.882-.327 2.841-.387l-.094-1.497c-.98.062-2.179.183-3.13.434zm-6.466.05c-1.008-.538-2.363-1.191-3.534-1.5l-.382 1.45c.992.262 2.22.845 3.21 1.373zm-3.534-1.5c-.95-.25-2.15-.372-3.13-.434l-.093 1.497c.959.06 2.038.176 2.84.387zm14.059-1.764c0 .685-.568 1.284-1.312 1.33l.094 1.497c1.474-.092 2.718-1.291 2.718-2.827zm1.5-11.21c0-1.464-1.165-2.719-2.694-2.666l.052 1.5c.615-.022 1.142.484 1.142 1.165zm-21.5 11.21c0 1.536 1.244 2.735 2.718 2.827l.094-1.497c-.744-.046-1.312-.645-1.312-1.33zm12.025 3.263a2.72 2.72 0 0 1-2.55 0l-.705 1.324a4.22 4.22 0 0 0 3.96 0zm.023-15.253a2.77 2.77 0 0 1-2.665.058l-.701 1.326a4.27 4.27 0 0 0 4.118-.086zM2.75 4.998c0-.697.552-1.213 1.186-1.175l.092-1.497C2.47 2.231 1.25 3.5 1.25 4.998zm20 11.146v-5.606h-1.5v5.606zm0-9.144V4.933h-1.5V7zm-20 3.57V4.999h-1.5v5.573zm0 5.574V14h-1.5v2.144z"></svg:path></svg:g>`,
})
export class SolarNotebookBookmarkBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookBookmarkLineDuotoneIcon],svg[solar-notebook-bookmark-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m20.082 3.018l.026.75zm-3.582.47l-.215-.719zm-2.826 1.315l-.376-.65zM3.982 3.075l-.046.749zM7 3.488l.191-.726zm3.282 1.388l-.35.663zm3.346 15.193l.352.662zM17 18.634l-.191-.726zm2.985-.411l.047.749zm-9.613 1.846l-.352.662zM7 18.634l.191-.726zm-2.985-.411l-.047.749zm-1.265-2.08V4.999h-1.5v11.146zm20 0V4.934h-1.5v11.21zM20.056 2.269c-1.139.04-2.626.158-3.771.501l.43 1.437c.95-.284 2.274-.4 3.393-.439zm-3.771.501c-.995.298-2.114.88-2.987 1.385l.752 1.298c.85-.492 1.845-1 2.665-1.246zM3.936 3.824c.966.059 2.06.174 2.873.389l.382-1.45c-.96-.254-2.176-.376-3.163-.437zm2.873.389c.962.254 2.146.81 3.123 1.326l.7-1.326c-.995-.527-2.304-1.15-3.44-1.45zM13.98 20.73c.991-.528 2.219-1.11 3.211-1.372l-.382-1.45c-1.17.308-2.526.961-3.534 1.499zm3.211-1.372c.803-.212 1.882-.328 2.841-.388l-.094-1.497c-.98.062-2.179.183-3.13.434zm-6.466.048c-1.008-.537-2.363-1.19-3.534-1.499l-.382 1.45c.992.263 2.22.845 3.21 1.373zm-3.534-1.499c-.95-.25-2.15-.372-3.13-.434l-.093 1.497c.959.06 2.038.176 2.84.388zm14.059-1.764c0 .686-.568 1.284-1.312 1.33l.094 1.497c1.474-.092 2.718-1.291 2.718-2.827zm1.5-11.21c0-1.464-1.165-2.719-2.694-2.666l.052 1.5c.615-.022 1.142.484 1.142 1.165zm-21.5 11.21c0 1.536 1.244 2.735 2.718 2.828l.094-1.498c-.744-.046-1.312-.645-1.312-1.33zm12.025 3.264a2.72 2.72 0 0 1-2.55 0l-.705 1.323a4.22 4.22 0 0 0 3.96 0zm.023-15.254a2.77 2.77 0 0 1-2.665.059l-.701 1.326a4.27 4.27 0 0 0 4.118-.087zM2.75 4.998c0-.697.552-1.213 1.186-1.174l.092-1.498C2.47 2.231 1.25 3.5 1.25 4.998z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M12 5.854V21" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m5 9l4 1m-4 3l4 1m10-1l-4 1" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 5.5v4.01c0 .276 0 .414-.095.47s-.224-.007-.484-.13l-1.242-.59c-.088-.042-.132-.062-.179-.062s-.091.02-.179.062l-1.242.59c-.26.123-.39.185-.484.13C15 9.923 15 9.785 15 9.51V6.95"></svg:path></svg:g>`,
})
export class SolarNotebookBookmarkLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookBookmarkLinearIcon],svg[solar-notebook-bookmark-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m20.082 3.018l.026.75zm-3.582.47l-.215-.719zm-2.826 1.315l-.376-.65zM3.982 3.075l-.046.749zM7 3.488l.191-.726zm3.282 1.388l-.35.663zm3.346 15.193l.352.662zM17 18.634l-.191-.726zm2.985-.411l.047.749zm-9.613 1.846l-.352.662zM7 18.634l.191-.726zm-2.985-.411l-.047.749zm-1.265-2.08V4.999h-1.5v11.146zm20 0V4.934h-1.5v11.21zM20.056 2.269c-1.139.04-2.626.158-3.771.501l.43 1.437c.95-.284 2.274-.4 3.393-.439zm-3.771.501c-.995.298-2.114.88-2.987 1.385l.752 1.298c.85-.492 1.845-1 2.665-1.246zM3.936 3.824c.966.059 2.06.174 2.873.389l.382-1.45c-.96-.254-2.176-.376-3.163-.437zm2.873.389c.962.254 2.146.81 3.123 1.326l.7-1.326c-.995-.527-2.304-1.15-3.44-1.45zM13.98 20.73c.991-.528 2.219-1.11 3.211-1.372l-.382-1.45c-1.17.308-2.526.961-3.534 1.499zm3.211-1.372c.803-.212 1.882-.328 2.841-.388l-.094-1.497c-.98.062-2.179.183-3.13.434zm-6.466.048c-1.008-.537-2.363-1.19-3.534-1.499l-.382 1.45c.992.263 2.22.845 3.21 1.373zm-3.534-1.499c-.95-.25-2.15-.372-3.13-.434l-.093 1.497c.959.06 2.038.176 2.84.388zm14.059-1.764c0 .686-.568 1.284-1.312 1.33l.094 1.497c1.474-.092 2.718-1.291 2.718-2.827zm1.5-11.21c0-1.464-1.165-2.719-2.694-2.666l.052 1.5c.615-.022 1.142.484 1.142 1.165zm-21.5 11.21c0 1.536 1.244 2.735 2.718 2.828l.094-1.498c-.744-.046-1.312-.645-1.312-1.33zm12.025 3.264a2.72 2.72 0 0 1-2.55 0l-.705 1.323a4.22 4.22 0 0 0 3.96 0zm.023-15.254a2.77 2.77 0 0 1-2.665.059l-.701 1.326a4.27 4.27 0 0 0 4.118-.087zM2.75 4.998c0-.697.552-1.213 1.186-1.174l.092-1.498C2.47 2.231 1.25 3.5 1.25 4.998z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M12 5.854V21"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m5 9l4 1m-4 3l4 1m10-1l-4 1m4-8.5v4.01c0 .276 0 .414-.095.47s-.224-.007-.484-.13l-1.242-.59c-.088-.042-.132-.062-.179-.062s-.091.02-.179.062l-1.242.59c-.26.123-.39.185-.484.13C15 9.923 15 9.785 15 9.51V6.95"></svg:path></svg:g>`,
})
export class SolarNotebookBookmarkLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookBookmarkOutlineIcon],svg[solar-notebook-bookmark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.728 12.818a.75.75 0 0 0-.91-.546l-4 1a.75.75 0 0 0 .364 1.456l4-1a.75.75 0 0 0 .546-.91M19.75 5.5a.75.75 0 0 0-1.5 0v3.439l-.75-.356l-.008-.005a1.1 1.1 0 0 0-.492-.13a1.1 1.1 0 0 0-.492.13l-.009.005l-.749.356V6.95a.75.75 0 0 0-1.5 0v2.587c0 .111 0 .27.02.406a.94.94 0 0 0 .445.683a.96.96 0 0 0 .783.072c.13-.04.272-.108.378-.159L17 10.005l1.124.534c.106.05.248.119.378.16a.96.96 0 0 0 .783-.073a.94.94 0 0 0 .444-.683c.021-.136.021-.295.021-.406zM4.272 8.818a.75.75 0 0 1 .91-.546l4 1a.75.75 0 1 1-.364 1.456l-4-1a.75.75 0 0 1-.546-.91m.91 3.454a.75.75 0 0 0-.364 1.456l4 1a.75.75 0 1 0 .364-1.456z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22.75 4.933c0-1.463-1.165-2.718-2.694-2.665c-1.139.04-2.626.158-3.771.501c-.995.298-2.114.88-2.987 1.385a2.77 2.77 0 0 1-2.665.058c-.996-.526-2.305-1.15-3.442-1.45c-.96-.253-2.176-.375-3.163-.436C2.47 2.231 1.25 3.5 1.25 4.998v11.146c0 1.536 1.244 2.735 2.718 2.827c.959.06 2.038.176 2.84.388c.993.261 2.22.844 3.212 1.372a4.22 4.22 0 0 0 3.96 0c.991-.528 2.219-1.11 3.211-1.372c.803-.212 1.882-.328 2.841-.388c1.474-.092 2.718-1.291 2.718-2.827zm-2.642-1.166c.615-.021 1.142.485 1.142 1.166v11.21c0 .686-.568 1.285-1.312 1.331c-.98.062-2.179.183-3.13.434c-1.17.31-2.525.962-3.533 1.5q-.253.135-.525.211V5.942c.452-.09.892-.254 1.3-.49c.85-.492 1.845-1 2.665-1.246c.95-.284 2.274-.4 3.393-.439M11.25 5.975a4.2 4.2 0 0 1-1.318-.436c-.977-.517-2.161-1.072-3.123-1.326c-.813-.215-1.907-.33-2.873-.39c-.634-.038-1.186.478-1.186 1.175v11.146c0 .685.568 1.284 1.312 1.33c.98.062 2.179.183 3.13.434c1.17.31 2.525.962 3.533 1.5q.253.135.525.211z" clip-rule="evenodd"></svg:path>`,
})
export class SolarNotebookBookmarkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookBrokenIcon],svg[solar-notebook-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21 16c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.879C3 20.243 3 18.828 3 16V8c0-2.828 0-4.243.879-5.121C4.757 2 6.172 2 9 2h6c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v4M8 2v4m0 16V10m-6 2h2m-2 4h2M2 8h2m7.5-1.5h5m-5 3.5h5"></svg:path>`,
})
export class SolarNotebookBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookLineDuotoneIcon],svg[solar-notebook-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 8c0-2.828 0-4.243.879-5.121C4.757 2 6.172 2 9 2h6c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v8c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.879C3 20.243 3 18.828 3 16z"></svg:path><svg:path stroke-linecap="round" d="M8 2.5V22M2 12h2m-2 4h2M2 8h2" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M11.5 6.5h5m-5 3.5h5"></svg:path></svg:g>`,
})
export class SolarNotebookLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookLinearIcon],svg[solar-notebook-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 8c0-2.828 0-4.243.879-5.121C4.757 2 6.172 2 9 2h6c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v8c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.879C3 20.243 3 18.828 3 16z"></svg:path><svg:path stroke-linecap="round" d="M8 2.5V22M2 12h2m-2 4h2M2 8h2m7.5-1.5h5m-5 3.5h5"></svg:path></svg:g>`,
})
export class SolarNotebookLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookMinimalisticBoldIcon],svg[solar-notebook-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16.144V4.998c0-1.098.886-1.99 1.982-1.923c.977.06 2.131.179 3.018.412c1.05.277 2.296.867 3.282 1.388c.307.163.634.275.968.339v15.179a3.4 3.4 0 0 1-.878-.324c-1-.532-2.29-1.15-3.372-1.436c-.877-.231-2.016-.35-2.985-.41C2.906 18.153 2 17.255 2 16.143m10.75 4.25a3.4 3.4 0 0 0 .878-.324c1-.532 2.29-1.15 3.372-1.436c.877-.231 2.016-.35 2.985-.41c1.109-.07 2.015-.968 2.015-2.08V4.934c0-1.072-.846-1.953-1.918-1.915c-1.129.04-2.535.156-3.582.47c-.908.271-1.965.816-2.826 1.315a3.5 3.5 0 0 1-.924.37z"></svg:path>`,
})
export class SolarNotebookMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookMinimalisticBoldDuotoneIcon],svg[solar-notebook-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 16.144V4.998c0-1.098.886-1.99 1.982-1.923c.977.06 2.131.179 3.018.413c1.05.276 2.296.866 3.282 1.388A3.5 3.5 0 0 0 12 5.275v15.2a3.46 3.46 0 0 1-1.628-.406c-1-.532-2.29-1.15-3.372-1.435c-.877-.232-2.016-.35-2.985-.411C2.906 18.153 2 17.255 2 16.143" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M22 16.144V4.934c0-1.073-.846-1.953-1.918-1.916c-1.129.04-2.535.156-3.582.47c-.908.271-1.965.816-2.826 1.315A3.5 3.5 0 0 1 12 5.275v15.2c.56 0 1.121-.136 1.628-.406c1-.532 2.29-1.15 3.372-1.435c.877-.232 2.016-.35 2.985-.411c1.109-.07 2.015-.968 2.015-2.08"></svg:path>`,
})
export class SolarNotebookMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookMinimalisticBrokenIcon],svg[solar-notebook-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m20.082 3.018l.026.75zm-3.582.47l-.215-.719zm-2.826 1.315l-.376-.65zM3.982 3.075l-.046.749zM7 3.488l.191-.726zm3.282 1.388l-.35.663zm3.346 15.193l.352.662zM17 18.634l-.191-.726zm2.985-.411l.047.749zm-9.613 1.846l-.352.662zM7 18.634l.191-.726zm-2.985-.411l-.047.749zm18.735-7.684a.75.75 0 0 0-1.5 0zM21.25 7a.75.75 0 0 0 1.5 0zm-20 3.57a.75.75 0 0 0 1.5 0zM2.75 14a.75.75 0 0 0-1.5 0zM20.056 2.268c-1.139.04-2.626.158-3.771.501l.43 1.437c.95-.284 2.274-.4 3.393-.439zm-3.771.501c-.995.298-2.114.88-2.987 1.385l.752 1.298c.85-.492 1.845-1 2.665-1.246zM3.936 3.824c.966.059 2.06.174 2.873.389l.382-1.45c-.96-.254-2.176-.376-3.163-.437zm2.873.389c.962.254 2.146.81 3.123 1.326l.7-1.326c-.995-.527-2.304-1.15-3.44-1.45zM13.98 20.73c.991-.528 2.219-1.11 3.211-1.372l-.382-1.45c-1.17.308-2.526.961-3.534 1.499zm3.211-1.372c.803-.212 1.882-.328 2.841-.388l-.094-1.497c-.98.062-2.179.183-3.13.434zm-6.466.048c-1.008-.537-2.363-1.19-3.534-1.499l-.382 1.45c.992.263 2.22.845 3.21 1.373zm-3.534-1.499c-.95-.25-2.15-.372-3.13-.434l-.093 1.497c.959.06 2.038.176 2.84.388zm14.059-1.764c0 .686-.568 1.284-1.312 1.33l.094 1.497c1.474-.092 2.718-1.291 2.718-2.827zm1.5-11.21c0-1.464-1.165-2.719-2.694-2.666l.052 1.5c.615-.022 1.142.484 1.142 1.165zm-21.5 11.21c0 1.536 1.244 2.735 2.718 2.828l.094-1.498c-.744-.046-1.312-.645-1.312-1.33zm12.025 3.264a2.72 2.72 0 0 1-2.55 0l-.705 1.323a4.22 4.22 0 0 0 3.96 0zm.023-15.254a2.77 2.77 0 0 1-2.665.059l-.701 1.326a4.27 4.27 0 0 0 4.118-.087zM2.75 4.998c0-.697.552-1.213 1.186-1.174l.092-1.498C2.47 2.231 1.25 3.5 1.25 4.998zm20 11.146v-5.605h-1.5v5.605zm0-9.144V4.933h-1.5V7zm-20 3.57V4.999h-1.5v5.573zm0 5.574V14h-1.5v2.144z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 5.5v15"></svg:path></svg:g>`,
})
export class SolarNotebookMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookMinimalisticLineDuotoneIcon],svg[solar-notebook-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m20.082 3.018l.026.75zm-3.582.47l-.215-.719zm-2.826 1.315l-.376-.65zM3.982 3.075l-.046.749zM7 3.488l.191-.726zm3.282 1.388l-.35.663zm3.346 15.193l.352.662zM17 18.634l-.191-.726zm2.985-.411l.047.749zm-9.613 1.846l-.352.662zM7 18.634l.191-.726zm-2.985-.411l-.047.749zm-1.265-2.08V4.999h-1.5v11.146zm20 0V4.934h-1.5v11.21zM20.056 2.269c-1.139.04-2.626.158-3.771.501l.43 1.437c.95-.284 2.274-.4 3.393-.439zm-3.771.501c-.995.298-2.114.88-2.987 1.385l.752 1.298c.85-.492 1.845-1 2.665-1.246zM3.936 3.824c.966.059 2.06.174 2.873.389l.382-1.45c-.96-.254-2.176-.376-3.163-.437zm2.873.389c.962.254 2.146.81 3.123 1.326l.7-1.326c-.995-.527-2.304-1.15-3.44-1.45zM13.98 20.73c.991-.528 2.219-1.11 3.211-1.372l-.382-1.45c-1.17.308-2.526.961-3.534 1.499zm3.211-1.372c.803-.212 1.882-.328 2.841-.388l-.094-1.497c-.98.062-2.179.183-3.13.434zm-6.466.048c-1.008-.537-2.363-1.19-3.534-1.499l-.382 1.45c.992.263 2.22.845 3.21 1.373zm-3.534-1.499c-.95-.25-2.15-.372-3.13-.434l-.093 1.497c.959.06 2.038.176 2.84.388zm14.059-1.764c0 .686-.568 1.284-1.312 1.33l.094 1.497c1.474-.092 2.718-1.291 2.718-2.827zm1.5-11.21c0-1.464-1.165-2.719-2.694-2.666l.052 1.5c.615-.022 1.142.484 1.142 1.165zm-21.5 11.21c0 1.536 1.244 2.735 2.718 2.828l.094-1.498c-.744-.046-1.312-.645-1.312-1.33zm12.025 3.264a2.72 2.72 0 0 1-2.55 0l-.705 1.323a4.22 4.22 0 0 0 3.96 0zm.023-15.254a2.77 2.77 0 0 1-2.665.059l-.701 1.326a4.27 4.27 0 0 0 4.118-.087zM2.75 4.998c0-.697.552-1.213 1.186-1.174l.092-1.498C2.47 2.231 1.25 3.5 1.25 4.998z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M12 5.5v15" opacity=".5"></svg:path></svg:g>`,
})
export class SolarNotebookMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookMinimalisticLinearIcon],svg[solar-notebook-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m20.082 3.018l.026.75zm-3.582.47l-.215-.719zm-2.826 1.315l-.376-.65zM3.982 3.075l-.046.749zM7 3.488l.191-.726zm3.282 1.388l-.35.663zm3.346 15.193l.352.662zM17 18.634l-.191-.726zm2.985-.411l.047.749zm-9.613 1.846l-.352.662zM7 18.634l.191-.726zm-2.985-.411l-.047.749zm-1.265-2.08V4.999h-1.5v11.146zm20 0V4.934h-1.5v11.21zM20.056 2.269c-1.139.04-2.626.158-3.771.501l.43 1.437c.95-.284 2.274-.4 3.393-.439zm-3.771.501c-.995.298-2.114.88-2.987 1.385l.752 1.298c.85-.492 1.845-1 2.665-1.246zM3.936 3.824c.966.059 2.06.174 2.873.389l.382-1.45c-.96-.254-2.176-.376-3.163-.437zm2.873.389c.962.254 2.146.81 3.123 1.326l.7-1.326c-.995-.527-2.304-1.15-3.44-1.45zM13.98 20.73c.991-.528 2.219-1.11 3.211-1.372l-.382-1.45c-1.17.308-2.526.961-3.534 1.499zm3.211-1.372c.803-.212 1.882-.328 2.841-.388l-.094-1.497c-.98.062-2.179.183-3.13.434zm-6.466.048c-1.008-.537-2.363-1.19-3.534-1.499l-.382 1.45c.992.263 2.22.845 3.21 1.373zm-3.534-1.499c-.95-.25-2.15-.372-3.13-.434l-.093 1.497c.959.06 2.038.176 2.84.388zm14.059-1.764c0 .686-.568 1.284-1.312 1.33l.094 1.497c1.474-.092 2.718-1.291 2.718-2.827zm1.5-11.21c0-1.464-1.165-2.719-2.694-2.666l.052 1.5c.615-.022 1.142.484 1.142 1.165zm-21.5 11.21c0 1.536 1.244 2.735 2.718 2.828l.094-1.498c-.744-.046-1.312-.645-1.312-1.33zm12.025 3.264a2.72 2.72 0 0 1-2.55 0l-.705 1.323a4.22 4.22 0 0 0 3.96 0zm.023-15.254a2.77 2.77 0 0 1-2.665.059l-.701 1.326a4.27 4.27 0 0 0 4.118-.087zM2.75 4.998c0-.697.552-1.213 1.186-1.174l.092-1.498C2.47 2.231 1.25 3.5 1.25 4.998z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M12 5.5v15"></svg:path></svg:g>`,
})
export class SolarNotebookMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookMinimalisticOutlineIcon],svg[solar-notebook-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.75 4.933c0-1.463-1.165-2.718-2.694-2.665c-1.139.04-2.626.158-3.771.501c-.995.298-2.114.88-2.987 1.385a2.77 2.77 0 0 1-2.665.058c-.996-.526-2.305-1.15-3.442-1.45c-.96-.253-2.176-.375-3.163-.436C2.47 2.231 1.25 3.5 1.25 4.998v11.146c0 1.536 1.244 2.735 2.718 2.827c.959.06 2.038.176 2.84.388c.993.261 2.22.844 3.212 1.372a4.22 4.22 0 0 0 3.96 0c.991-.528 2.219-1.11 3.211-1.372c.803-.212 1.882-.328 2.841-.388c1.474-.092 2.718-1.291 2.718-2.827zm-2.642-1.166c.615-.021 1.142.485 1.142 1.166v11.21c0 .686-.568 1.285-1.312 1.331c-.98.062-2.179.183-3.13.434c-1.17.31-2.525.962-3.533 1.5q-.253.135-.525.211V5.942c.452-.09.892-.254 1.3-.49c.85-.492 1.845-1 2.665-1.246c.95-.284 2.274-.4 3.393-.439M11.25 5.975a4.2 4.2 0 0 1-1.318-.436c-.977-.517-2.161-1.072-3.123-1.326c-.813-.215-1.907-.33-2.873-.39c-.634-.038-1.186.478-1.186 1.175v11.146c0 .685.568 1.284 1.312 1.33c.98.062 2.179.183 3.13.434c1.17.31 2.525.962 3.533 1.5q.253.135.525.211z" clip-rule="evenodd"></svg:path>`,
})
export class SolarNotebookMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookOutlineIcon],svg[solar-notebook-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.945 1.25h6.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v8.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-6.11l-.899-.001a1 1 0 0 1-.1 0c-.918-.007-1.693-.029-2.338-.115c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.097-.715-.113-1.59-.116-2.642H2a.75.75 0 0 1 0-1.5h.25v-2.5H2a.75.75 0 0 1 0-1.5h.25v-2.5H2a.75.75 0 0 1 0-1.5h.25c.004-1.052.02-1.927.117-2.642c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M3.75 8.75H4a.75.75 0 0 0 0-1.5h-.25c.004-1.046.02-1.826.103-2.442c.099-.734.28-1.122.556-1.399c.277-.277.665-.457 1.4-.556c.4-.054.872-.08 1.441-.092V21.24a13 13 0 0 1-1.442-.092c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.083-.615-.099-1.395-.102-2.441H4a.75.75 0 0 0 0-1.5h-.25v-2.5H4a.75.75 0 0 0 0-1.5h-.25zm5 12.5H15c1.435 0 2.436-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191V8c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103H8.75zm2-14.75a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarNotebookOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookSquareBoldIcon],svg[solar-notebook-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 2.172C2 3.343 2 5.229 2 9v4c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172S22 16.771 22 13V9c0-3.771 0-5.657-1.172-6.828S17.771 1 14 1h-4C6.229 1 4.343 1 3.172 2.172m9.335 13.55l-.007.004V7.283l.022-.013c.553-.32 1.447-.796 2.178-1c.54-.149 1.24-.218 1.857-.248c.805-.04 1.443.623 1.443 1.43v5.459c0 .833-.68 1.504-1.51 1.566c-.506.038-1.052.101-1.49.208c-.837.205-1.883.716-2.493 1.037M6 7.496v5.415c0 .833.68 1.504 1.51 1.566c.506.038 1.052.101 1.49.208c.837.205 1.883.716 2.493 1.037l.007.004V7.311l-.035-.018C10.85 6.971 9.824 6.473 9 6.271c-.444-.109-1-.173-1.513-.21C6.665 6 6 6.673 6 7.496" clip-rule="evenodd"></svg:path>`,
})
export class SolarNotebookSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookSquareBoldDuotoneIcon],svg[solar-notebook-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9c0-3.771 0-5.657 1.172-6.828S6.229 1 10 1h4c3.771 0 5.657 0 6.828 1.172S22 5.229 22 9v4c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6 12.91V7.497c0-.823.665-1.495 1.487-1.435c.513.037 1.069.101 1.513.21c.824.201 1.851.7 2.465 1.022l.035.018v8.415l-.007-.004c-.61-.321-1.656-.832-2.493-1.037c-.438-.107-.984-.17-1.49-.208c-.83-.062-1.51-.733-1.51-1.566m6.5 2.814l.007-.004c.61-.321 1.656-.832 2.493-1.037c.438-.107.984-.17 1.49-.208c.83-.062 1.51-.733 1.51-1.566V7.45c0-.806-.638-1.469-1.443-1.43c-.616.031-1.317.1-1.857.25c-.731.203-1.625.68-2.178 1l-.022.012z"></svg:path>`,
})
export class SolarNotebookSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookSquareBrokenIcon],svg[solar-notebook-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m16.557 7.022l-.037-.75zM14.7 7.27l-.2-.723zm-2.178 1l-.376-.65zM7.487 7.06l-.055.748zM9 7.27l-.178.728zm2.465 1.022l-.349.664zm1.042 8.43l.35.663zM15 15.684l-.178-.728zm1.49-.208l.056.748zm-4.997 1.245l-.35.664zM9 15.685l.178-.728zm-1.49-.208l-.056.748zm-.76-1.566V8.496h-1.5v5.415zm12 0V8.45h-1.5v5.46zm-2.23-7.638c-.63.03-1.397.102-2.02.275l.4 1.446c.458-.127 1.09-.194 1.693-.223zm-2.02.275c-.832.23-1.798.752-2.354 1.073l.752 1.299c.55-.32 1.372-.752 2.002-.926zm-7.068 1.26c.5.037 1.007.098 1.39.191l.356-1.457c-.505-.123-1.11-.19-1.636-.23zM8.822 8c.726.178 1.682.637 2.294.958l.697-1.328c-.615-.323-1.713-.862-2.635-1.087zm4.035 9.387c.61-.321 1.583-.792 2.321-.972l-.356-1.457c-.935.228-2.054.78-2.664 1.102zm2.321-.972c.377-.092.875-.152 1.368-.19l-.112-1.495c-.52.039-1.114.106-1.612.228zm-3.336-.355c-.61-.322-1.729-.874-2.664-1.102l-.356 1.457c.738.18 1.711.65 2.321.972zm-2.664-1.102c-.498-.122-1.093-.19-1.612-.228l-.112 1.496c.493.037.99.097 1.368.189zm8.072-1.046c0 .405-.34.783-.816.818l.112 1.496c1.186-.088 2.204-1.053 2.204-2.314zm1.5-5.46c0-1.194-.958-2.24-2.23-2.178l.073 1.498c.338-.017.657.263.657.68zm-13.5 5.46c0 1.26 1.018 2.226 2.204 2.314l.112-1.496c-.476-.035-.816-.413-.816-.818zm6.908 2.148a.34.34 0 0 1-.316 0l-.699 1.327a1.84 1.84 0 0 0 1.714 0zm-.012-8.438a.35.35 0 0 1-.333.008l-.697 1.328a1.85 1.85 0 0 0 1.782-.037zm-5.396.875c0-.426.333-.713.682-.687l.11-1.496c-1.294-.095-2.292.962-2.292 2.183z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M12 8.585V17"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarNotebookSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookSquareLineDuotoneIcon],svg[solar-notebook-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m16.557 6.022l-.037-.75zM14.7 6.27l-.2-.723zm-2.178 1l-.376-.65zM7.487 6.06l-.055.748zM9 6.271l-.178.728zm2.465 1.022l-.349.664zm1.042 8.43l.35.663zM15 14.684l-.178-.728zm1.49-.208l.056.748zm-4.997 1.245l-.35.664zM9 14.685l.178-.728zm-1.49-.208l-.056.748zm-.76-1.566V7.497h-1.5v5.414zm12 0V7.45h-1.5v5.46zm-2.23-7.638c-.63.03-1.397.102-2.02.275l.4 1.446c.458-.127 1.09-.193 1.693-.223zm-2.02.275c-.832.23-1.798.752-2.354 1.073l.752 1.299c.55-.32 1.372-.751 2.002-.926zM7.432 6.81c.5.037 1.007.097 1.39.19l.356-1.457c-.505-.123-1.11-.19-1.636-.229zm1.39.19c.726.178 1.682.637 2.294.958l.697-1.328c-.615-.322-1.713-.861-2.635-1.087zm4.035 9.387c.61-.321 1.583-.792 2.321-.972l-.356-1.457c-.935.228-2.054.78-2.664 1.102zm2.321-.972c.377-.092.875-.152 1.368-.189l-.112-1.496c-.52.039-1.114.106-1.612.228zm-3.336-.355c-.61-.322-1.729-.874-2.664-1.102l-.356 1.457c.738.18 1.711.65 2.321.972zm-2.664-1.102c-.498-.122-1.093-.19-1.612-.228l-.112 1.496c.493.037.99.097 1.368.189zm8.072-1.046c0 .405-.34.783-.816.818l.112 1.496c1.186-.088 2.204-1.053 2.204-2.314zm1.5-5.46c0-1.194-.958-2.24-2.23-2.178l.073 1.498c.338-.017.657.263.657.68zm-13.5 5.46c0 1.26 1.018 2.226 2.204 2.314l.112-1.496c-.476-.035-.816-.413-.816-.818zm6.908 2.148a.34.34 0 0 1-.316 0l-.699 1.327a1.84 1.84 0 0 0 1.714 0zm-.012-8.438a.35.35 0 0 1-.333.008l-.697 1.328a1.85 1.85 0 0 0 1.782-.037zm-5.396.876c0-.427.333-.714.682-.688l.11-1.496c-1.294-.095-2.292.962-2.292 2.184z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M12 7.585V16"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 9c0-3.771 0-5.657 1.172-6.828S6.229 1 10 1h4c3.771 0 5.657 0 6.828 1.172S22 5.229 22 9v4c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarNotebookSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookSquareLinearIcon],svg[solar-notebook-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m16.557 6.022l-.037-.75zM14.7 6.27l-.2-.723zm-2.178 1l-.376-.65zM7.487 6.06l-.055.748zM9 6.271l-.178.728zm2.465 1.022l-.349.664zm1.042 8.43l.35.663zM15 14.684l-.178-.728zm1.49-.208l.056.748zm-4.997 1.245l-.35.664zM9 14.685l.178-.728zm-1.49-.208l-.056.748zm-.76-1.566V7.497h-1.5v5.414zm12 0V7.45h-1.5v5.46zm-2.23-7.638c-.63.03-1.397.102-2.02.275l.4 1.446c.458-.127 1.09-.193 1.693-.223zm-2.02.275c-.832.23-1.798.752-2.354 1.073l.752 1.299c.55-.32 1.372-.751 2.002-.926zM7.432 6.81c.5.037 1.007.097 1.39.19l.356-1.457c-.505-.123-1.11-.19-1.636-.229zm1.39.19c.726.178 1.682.637 2.294.958l.697-1.328c-.615-.322-1.713-.861-2.635-1.087zm4.035 9.387c.61-.321 1.583-.792 2.321-.972l-.356-1.457c-.935.228-2.054.78-2.664 1.102zm2.321-.972c.377-.092.875-.152 1.368-.189l-.112-1.496c-.52.039-1.114.106-1.612.228zm-3.336-.355c-.61-.322-1.729-.874-2.664-1.102l-.356 1.457c.738.18 1.711.65 2.321.972zm-2.664-1.102c-.498-.122-1.093-.19-1.612-.228l-.112 1.496c.493.037.99.097 1.368.189zm8.072-1.046c0 .405-.34.783-.816.818l.112 1.496c1.186-.088 2.204-1.053 2.204-2.314zm1.5-5.46c0-1.194-.958-2.24-2.23-2.178l.073 1.498c.338-.017.657.263.657.68zm-13.5 5.46c0 1.26 1.018 2.226 2.204 2.314l.112-1.496c-.476-.035-.816-.413-.816-.818zm6.908 2.148a.34.34 0 0 1-.316 0l-.699 1.327a1.84 1.84 0 0 0 1.714 0zm-.012-8.438a.35.35 0 0 1-.333.008l-.697 1.328a1.85 1.85 0 0 0 1.782-.037zm-5.396.876c0-.427.333-.714.682-.688l.11-1.496c-1.294-.095-2.292.962-2.292 2.184z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M12 7.585V16M2 9c0-3.771 0-5.657 1.172-6.828S6.229 1 10 1h4c3.771 0 5.657 0 6.828 1.172S22 5.229 22 9v4c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13z"></svg:path></svg:g>`,
})
export class SolarNotebookSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookSquareOutlineIcon],svg[solar-notebook-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.52 5.273c1.272-.063 2.23.984 2.23 2.179v5.459c0 1.26-1.018 2.226-2.204 2.314c-.493.037-.99.097-1.368.189c-.738.18-1.711.65-2.321.972a1.84 1.84 0 0 1-1.714 0c-.61-.321-1.583-.792-2.321-.972c-.377-.092-.875-.152-1.368-.19c-1.186-.088-2.204-1.052-2.204-2.313V7.496c0-1.22.998-2.278 2.292-2.183c.525.038 1.13.106 1.636.23c.922.224 2.02.763 2.635 1.086c.103.054.23.052.333-.008c.556-.321 1.521-.842 2.354-1.073c.623-.173 1.39-.244 2.02-.275m.73 2.179c0-.418-.319-.698-.657-.681c-.602.03-1.235.096-1.693.223c-.63.174-1.451.607-2.002.926a2 2 0 0 1-.148.076v6.763c.61-.296 1.39-.636 2.072-.802c.498-.122 1.093-.19 1.612-.228c.476-.035.816-.413.816-.818zm-6.134.505q.066.035.134.064v6.738c-.61-.296-1.39-.636-2.072-.802c-.498-.122-1.093-.19-1.612-.228c-.476-.035-.816-.413-.816-.818V7.496c0-.426.333-.713.682-.687c.5.036 1.007.097 1.39.19c.726.178 1.682.637 2.294.958"></svg:path><svg:path d="M9.944.25C8.106.25 6.65.25 5.51.403c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433v4.112c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h4.112c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433V8.945c0-1.838 0-3.294-.153-4.433c-.158-1.172-.49-2.121-1.238-2.87S19.66.561 18.489.403C17.349.25 15.894.25 14.056.25zM3.702 2.702c.423-.423 1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.138 1.028.14 2.382.14 4.289v4c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008s-1.003.677-2.009.812c-1.027.138-2.382.14-4.289.14h-4c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.138-1.027-.14-2.382-.14-4.289V9c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008"></svg:path></svg:g>`,
})
export class SolarNotebookSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotesBoldIcon],svg[solar-notes-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.755 14.716l.517 1.932c.604 2.255.907 3.383 1.592 4.114a4 4 0 0 0 2.01 1.16c.976.228 2.104-.074 4.36-.678c2.254-.604 3.382-.906 4.113-1.591q.091-.086.176-.176a9 9 0 0 1-1.014-.15c-.696-.138-1.523-.36-2.501-.622l-.107-.029l-.025-.006c-1.064-.286-1.953-.524-2.663-.78c-.747-.27-1.425-.603-2.002-1.143a5.5 5.5 0 0 1-1.596-2.765c-.18-.769-.128-1.523.012-2.304c.134-.749.374-1.647.662-2.722l.535-1.994l.018-.07c-1.92.517-2.931.823-3.605 1.454a4 4 0 0 0-1.161 2.012c-.228.975.074 2.103.679 4.358"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m20.83 10.715l-.518 1.932c-.605 2.255-.907 3.383-1.592 4.114a4 4 0 0 1-2.01 1.161q-.145.034-.295.052c-.915.113-2.032-.186-4.064-.73c-2.255-.605-3.383-.907-4.114-1.592a4 4 0 0 1-1.161-2.011c-.228-.976.074-2.103.679-4.358l.517-1.932l.244-.905c.455-1.666.761-2.583 1.348-3.21a4 4 0 0 1 2.01-1.16c.976-.228 2.104.074 4.36.679c2.254.604 3.382.906 4.113 1.59a4 4 0 0 1 1.161 2.012c.228.976-.075 2.103-.679 4.358m-9.778-.91a.75.75 0 0 1 .919-.53l4.83 1.295a.75.75 0 1 1-.389 1.448l-4.83-1.294a.75.75 0 0 1-.53-.918m-.776 2.898a.75.75 0 0 1 .918-.53l2.898.777a.75.75 0 1 1-.388 1.448l-2.898-.776a.75.75 0 0 1-.53-.919" clip-rule="evenodd"></svg:path>`,
})
export class SolarNotesBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotesBoldDuotoneIcon],svg[solar-notes-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m20.83 10.715l-.518 1.932c-.605 2.255-.907 3.383-1.592 4.114a4 4 0 0 1-2.01 1.161q-.145.034-.295.052c-.915.113-2.032-.186-4.064-.73c-2.255-.605-3.383-.907-4.114-1.592a4 4 0 0 1-1.161-2.011c-.228-.976.074-2.103.679-4.358l.517-1.932l.244-.905c.455-1.666.761-2.583 1.348-3.21a4 4 0 0 1 2.01-1.16c.976-.228 2.104.074 4.36.679c2.254.604 3.382.906 4.113 1.59a4 4 0 0 1 1.161 2.012c.228.976-.075 2.103-.679 4.358m-9.778-.91a.75.75 0 0 1 .919-.53l4.83 1.295a.75.75 0 1 1-.389 1.448l-4.83-1.294a.75.75 0 0 1-.53-.918m-.776 2.898a.75.75 0 0 1 .918-.53l2.898.777a.75.75 0 1 1-.388 1.448l-2.898-.776a.75.75 0 0 1-.53-.919" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.415 17.975a4 4 0 0 1-1.068 1.677c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592q.638-.172 1.165-.309l-.244.906l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73" opacity=".5"></svg:path>`,
})
export class SolarNotesBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotesBrokenIcon],svg[solar-notes-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m11.777 10l4.83 1.294M11 12.898l2.898.776m6.414-1.027c-.605 2.255-.907 3.383-1.592 4.114a4 4 0 0 1-2.01 1.161q-.145.034-.295.052c-.915.113-2.032-.186-4.064-.73c-2.255-.605-3.383-.907-4.114-1.592a4 4 0 0 1-1.161-2.011c-.228-.976.074-2.103.679-4.358l.517-1.932l.244-.905c.455-1.666.761-2.583 1.348-3.21a4 4 0 0 1 2.01-1.16c.976-.228 2.104.074 4.36.679c2.254.604 3.382.906 4.113 1.59a4 4 0 0 1 1.161 2.012c.161.69.057 1.456-.231 2.643"></svg:path><svg:path stroke-linejoin="round" d="M3.272 16.647c.604 2.255.907 3.383 1.592 4.114a4 4 0 0 0 2.01 1.161c.976.227 2.104-.075 4.36-.679c2.254-.604 3.382-.906 4.113-1.591a4 4 0 0 0 1.068-1.678M8.516 6.445q-.527.137-1.165.31c-2.255.604-3.383.906-4.114 1.59a4 4 0 0 0-1.161 2.012c-.161.69-.057 1.456.231 2.643"></svg:path></svg:g>`,
})
export class SolarNotesBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotesLineDuotoneIcon],svg[solar-notes-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m20.312 12.647l.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 0 0-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591c-2.255-.605-3.383-.907-4.358-.68a4 4 0 0 0-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73q.15-.019.294-.052a4 4 0 0 0 2.011-1.16c.685-.732.987-1.86 1.592-4.115Z"></svg:path><svg:path d="M16.415 17.974a4 4 0 0 1-1.068 1.678c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592q.638-.172 1.165-.309" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m11.777 10l4.83 1.294"></svg:path><svg:path stroke-linecap="round" d="m11 12.898l2.898.776" opacity=".5"></svg:path></svg:g>`,
})
export class SolarNotesLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotesLinearIcon],svg[solar-notes-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m20.312 12.647l.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 0 0-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591c-2.255-.605-3.383-.907-4.358-.68a4 4 0 0 0-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73q.15-.019.294-.052a4 4 0 0 0 2.011-1.16c.685-.732.987-1.86 1.592-4.115Z"></svg:path><svg:path d="M16.415 17.974a4 4 0 0 1-1.068 1.678c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592q.638-.172 1.165-.309"></svg:path><svg:path stroke-linecap="round" d="m11.777 10l4.83 1.294M11 12.898l2.898.776"></svg:path></svg:g>`,
})
export class SolarNotesLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotesMinimalisticBoldIcon],svg[solar-notes-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.062 12.647l.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 0 0-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591c-2.255-.605-3.383-.907-4.358-.68a4 4 0 0 0-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73q.15-.019.294-.052a4 4 0 0 0 2.011-1.16c.685-.732.987-1.86 1.592-4.115"></svg:path><svg:path fill="currentColor" d="m2.505 14.715l.517 1.932c.604 2.255.907 3.383 1.592 4.114a4 4 0 0 0 2.01 1.16c.976.228 2.104-.074 4.36-.678c2.254-.604 3.382-.906 4.113-1.591q.091-.086.176-.176a9 9 0 0 1-1.014-.15c-.696-.138-1.523-.36-2.501-.622l-.107-.029l-.025-.006c-1.064-.285-1.953-.524-2.663-.78c-.747-.27-1.425-.603-2.002-1.143a5.5 5.5 0 0 1-1.596-2.765c-.18-.769-.128-1.522.012-2.304c.134-.749.374-1.646.662-2.722l.535-1.994l.018-.07c-1.92.517-2.931.823-3.605 1.454a4 4 0 0 0-1.161 2.012c-.228.975.074 2.103.679 4.358"></svg:path>`,
})
export class SolarNotesMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotesMinimalisticBoldDuotoneIcon],svg[solar-notes-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.312 12.647l.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 0 0-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591c-2.255-.605-3.383-.907-4.358-.68a4 4 0 0 0-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73q.15-.019.294-.052a4 4 0 0 0 2.011-1.16c.685-.732.987-1.86 1.592-4.115"></svg:path><svg:path fill="currentColor" d="M16.415 17.975a4 4 0 0 1-1.068 1.677c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592q.638-.172 1.165-.309l-.244.906l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73" opacity=".5"></svg:path>`,
})
export class SolarNotesMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotesMinimalisticBrokenIcon],svg[solar-notes-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20.312 12.647c-.605 2.255-.907 3.383-1.592 4.114a4 4 0 0 1-2.01 1.161q-.145.034-.295.052c-.915.113-2.032-.186-4.064-.73c-2.255-.605-3.383-.907-4.114-1.592a4 4 0 0 1-1.161-2.011c-.228-.976.074-2.103.679-4.358l.517-1.932l.244-.905c.455-1.666.761-2.583 1.348-3.21a4 4 0 0 1 2.01-1.16c.976-.228 2.104.074 4.36.679c2.254.604 3.382.906 4.113 1.59a4 4 0 0 1 1.161 2.012c.161.69.057 1.456-.231 2.643"></svg:path><svg:path stroke-linejoin="round" d="M3.272 16.647c.604 2.255.907 3.383 1.592 4.114a4 4 0 0 0 2.01 1.161c.976.227 2.104-.075 4.36-.679c2.254-.604 3.382-.906 4.113-1.591a4 4 0 0 0 1.068-1.678M8.516 6.445q-.527.137-1.165.31c-2.255.604-3.383.906-4.114 1.59a4 4 0 0 0-1.161 2.012c-.161.69-.057 1.456.231 2.643"></svg:path></svg:g>`,
})
export class SolarNotesMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotesMinimalisticLineDuotoneIcon],svg[solar-notes-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m20.312 12.647l.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 0 0-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591c-2.255-.605-3.383-.907-4.358-.68a4 4 0 0 0-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73q.15-.019.294-.052a4 4 0 0 0 2.011-1.16c.685-.732.987-1.86 1.592-4.115Z"></svg:path><svg:path d="M16.415 17.974a4 4 0 0 1-1.068 1.678c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592q.638-.172 1.165-.309" opacity=".5"></svg:path></svg:g>`,
})
export class SolarNotesMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotesMinimalisticLinearIcon],svg[solar-notes-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m20.312 12.647l.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 0 0-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591c-2.255-.605-3.383-.907-4.358-.68a4 4 0 0 0-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73q.15-.019.294-.052a4 4 0 0 0 2.011-1.16c.685-.732.987-1.86 1.592-4.115Z"></svg:path><svg:path d="M16.415 17.974a4 4 0 0 1-1.068 1.678c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592q.638-.172 1.165-.309"></svg:path></svg:g>`,
})
export class SolarNotesMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotesMinimalisticOutlineIcon],svg[solar-notes-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.394 2.021l.066.018c1.1.295 1.971.528 2.656.776c.701.253 1.273.542 1.744.983a4.75 4.75 0 0 1 1.378 2.389c.147.628.112 1.268-.02 2.001c-.127.718-.36 1.589-.655 2.688l-.536 1.999c-.294 1.099-.528 1.97-.775 2.656c-.254.7-.543 1.272-.984 1.743a4.75 4.75 0 0 1-2.302 1.358a4.75 4.75 0 0 1-1.106 1.567c-.471.441-1.043.73-1.744.984c-.685.248-1.556.481-2.655.776l-.067.018c-1.1.294-1.97.527-2.688.656c-.733.131-1.373.166-2.002.02a4.75 4.75 0 0 1-2.388-1.38c-.44-.47-.73-1.042-.984-1.743c-.247-.685-.48-1.556-.775-2.656l-.536-1.998c-.294-1.1-.528-1.97-.656-2.688c-.131-.733-.166-1.373-.02-2.002a4.75 4.75 0 0 1 1.38-2.388c.47-.44 1.042-.73 1.743-.984c.685-.247 1.556-.48 2.655-.775l.034-.01l.751-.2c.392-1.399.736-2.388 1.408-3.105a4.75 4.75 0 0 1 2.388-1.379c.629-.146 1.268-.111 2.002.02c.717.128 1.588.362 2.688.656M7.455 7.503c-1.093.293-1.876.505-2.478.722c-.61.22-.967.424-1.227.668a3.25 3.25 0 0 0-.944 1.634c-.08.348-.079.76.036 1.397c.115.647.332 1.457.637 2.597l.518 1.932c.305 1.14.523 1.95.746 2.567c.22.61.424.968.668 1.228a3.25 3.25 0 0 0 1.634.944c.347.08.76.078 1.397-.036c.647-.115 1.457-.332 2.597-.637c1.14-.306 1.95-.523 2.568-.747c.609-.22.967-.424 1.227-.667q.207-.195.376-.419a10 10 0 0 1-.554-.095c-.672-.134-1.48-.35-2.475-.617l-.058-.015c-1.099-.295-1.97-.528-2.655-.776c-.701-.253-1.273-.542-1.744-.983a4.75 4.75 0 0 1-1.379-2.389c-.146-.628-.111-1.268.02-2.001c.128-.718.362-1.589.656-2.688zm5.987-4.661c-.638-.115-1.05-.117-1.397-.036a3.25 3.25 0 0 0-1.634.944c-.436.465-.705 1.185-1.171 2.893l-.243.902l-.518 1.932c-.305 1.14-.522 1.95-.637 2.597c-.115.637-.117 1.05-.036 1.397a3.25 3.25 0 0 0 .944 1.634c.26.244.618.447 1.227.668c.618.223 1.428.44 2.568.746c1.025.275 1.785.478 2.403.6c.615.123 1.033.153 1.375.111q.112-.015.216-.038a3.25 3.25 0 0 0 1.634-.944c.244-.26.448-.618.668-1.227c.223-.618.44-1.428.746-2.568l.518-1.932c.305-1.14.522-1.95.637-2.597c.114-.637.117-1.05.036-1.397a3.25 3.25 0 0 0-.944-1.634c-.26-.244-.618-.447-1.227-.668c-.619-.223-1.428-.44-2.568-.746c-1.14-.305-1.95-.522-2.597-.637" clip-rule="evenodd"></svg:path>`,
})
export class SolarNotesMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotesOutlineIcon],svg[solar-notes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.394 2.021l.066.018c1.1.295 1.971.528 2.656.776c.701.253 1.273.542 1.744.983a4.75 4.75 0 0 1 1.378 2.389c.147.628.112 1.268-.02 2.001c-.127.718-.36 1.589-.655 2.688l-.536 1.999c-.294 1.099-.528 1.97-.775 2.656c-.254.7-.543 1.272-.984 1.743a4.75 4.75 0 0 1-2.302 1.358a4.75 4.75 0 0 1-1.106 1.567c-.471.441-1.043.73-1.744.984c-.685.248-1.556.481-2.655.776l-.067.018c-1.1.294-1.97.527-2.688.656c-.733.131-1.373.166-2.002.02a4.75 4.75 0 0 1-2.388-1.38c-.44-.47-.73-1.042-.984-1.743c-.247-.685-.48-1.556-.775-2.656l-.536-1.998c-.294-1.1-.528-1.97-.656-2.688c-.131-.733-.166-1.373-.02-2.002a4.75 4.75 0 0 1 1.38-2.388c.47-.44 1.042-.73 1.743-.984c.685-.247 1.556-.48 2.655-.775l.034-.01l.751-.2c.392-1.399.736-2.388 1.408-3.105a4.75 4.75 0 0 1 2.388-1.379c.629-.146 1.268-.111 2.002.02c.717.128 1.588.362 2.688.656M7.455 7.503c-1.093.293-1.876.505-2.478.722c-.61.22-.967.424-1.227.668a3.25 3.25 0 0 0-.944 1.634c-.08.348-.079.76.036 1.397c.115.647.332 1.457.637 2.597l.518 1.932c.305 1.14.523 1.95.746 2.567c.22.61.424.968.668 1.228a3.25 3.25 0 0 0 1.634.944c.347.08.76.078 1.397-.036c.647-.115 1.457-.332 2.597-.637c1.14-.306 1.95-.523 2.568-.747c.609-.22.967-.424 1.227-.667q.207-.195.376-.419a10 10 0 0 1-.554-.095c-.672-.134-1.48-.35-2.475-.617l-.058-.015c-1.099-.295-1.97-.528-2.655-.776c-.701-.253-1.273-.542-1.744-.983a4.75 4.75 0 0 1-1.379-2.389c-.146-.628-.111-1.268.02-2.001c.128-.718.362-1.589.656-2.688zm5.987-4.661c-.638-.115-1.05-.117-1.397-.036a3.25 3.25 0 0 0-1.634.944c-.436.465-.705 1.185-1.171 2.893l-.243.902l-.518 1.932c-.305 1.14-.522 1.95-.637 2.597c-.115.637-.117 1.05-.036 1.397a3.25 3.25 0 0 0 .944 1.634c.26.244.618.447 1.227.668c.618.223 1.428.44 2.568.746c1.025.275 1.785.478 2.403.6c.615.123 1.033.153 1.375.111q.112-.015.216-.038a3.25 3.25 0 0 0 1.634-.944c.244-.26.448-.618.668-1.227c.223-.618.44-1.428.746-2.568l.518-1.932c.305-1.14.522-1.95.637-2.597c.114-.637.117-1.05.036-1.397a3.25 3.25 0 0 0-.944-1.634c-.26-.244-.618-.447-1.227-.668c-.619-.223-1.428-.44-2.568-.746c-1.14-.305-1.95-.522-2.597-.637m-2.39 6.964a.75.75 0 0 1 .919-.53l4.83 1.294a.75.75 0 0 1-.389 1.448l-4.83-1.294a.75.75 0 0 1-.53-.918m-.777 2.898a.75.75 0 0 1 .92-.53l2.897.776a.75.75 0 0 1-.388 1.449l-2.898-.777a.75.75 0 0 1-.53-.918" clip-rule="evenodd"></svg:path>`,
})
export class SolarNotesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationLinesRemoveBoldIcon],svg[solar-notification-lines-remove-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h.258c-.405.567-.578 1.205-.662 1.831c-.096.714-.096 1.595-.096 2.577v.184c0 .982 0 1.863.096 2.577c.104.779.348 1.578 1.002 2.233c.655.654 1.454.898 2.233 1.002c.714.096 1.595.096 2.577.096h.184c.982 0 1.863 0 2.577-.096c.626-.084 1.264-.257 1.831-.662V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m-5.75-8a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"></svg:path><svg:path d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m-2.53-7.03a.75.75 0 0 1 1.06 0l1.47 1.47l1.47-1.47a.75.75 0 1 1 1.06 1.06L18.56 6.5l1.47 1.47a.75.75 0 0 1-1.06 1.06L17.5 7.56l-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47l-1.47-1.47a.75.75 0 0 1 0-1.06"></svg:path></svg:g>`,
})
export class SolarNotificationLinesRemoveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationLinesRemoveBoldDuotoneIcon],svg[solar-notification-lines-remove-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m-2.53-7.03a.75.75 0 0 1 1.06 0l1.47 1.47l1.47-1.47a.75.75 0 1 1 1.06 1.06L18.56 6.5l1.47 1.47a.75.75 0 0 1-1.06 1.06L17.5 7.56l-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47l-1.47-1.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M20.536 20.536C22 19.07 22 16.714 22 12c0-1.358 0-2.52-.035-3.522c-.058.884-.213 1.452-.624 1.863c-.659.659-1.72.659-3.841.659s-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841c.411-.411.979-.566 1.863-.624C14.52 2 13.358 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465" opacity=".5"></svg:path>`,
})
export class SolarNotificationLinesRemoveBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationLinesRemoveBrokenIcon],svg[solar-notification-lines-remove-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 14h9m-9 3.5h6M22 2l-5 5m0-5l5 5M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12v-1.5M13.5 2H12C7.286 2 4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536"></svg:path>`,
})
export class SolarNotificationLinesRemoveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationLinesRemoveLineDuotoneIcon],svg[solar-notification-lines-remove-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5" opacity=".5"></svg:path><svg:path d="M7 14h9m-9 3.5h6M22 2l-5 5m0-5l5 5"></svg:path></svg:g>`,
})
export class SolarNotificationLinesRemoveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationLinesRemoveLinearIcon],svg[solar-notification-lines-remove-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5M7 14h9m-9 3.5h6M22 2l-5 5m0-5l5 5"></svg:path>`,
})
export class SolarNotificationLinesRemoveLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationLinesRemoveOutlineIcon],svg[solar-notification-lines-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.53 1.47a.75.75 0 1 0-1.06 1.06l1.97 1.97l-1.97 1.97a.75.75 0 1 0 1.06 1.06l1.97-1.97l1.97 1.97a.75.75 0 0 0 1.06-1.06L20.56 4.5l1.97-1.97a.75.75 0 0 0-1.06-1.06L19.5 3.44z"></svg:path><svg:path fill="currentColor" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529V10.5a.75.75 0 0 0-1.5 0V12c0 2.378-.002 4.087-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62c.57-.569 1.34-.896 2.619-1.068c1.3-.174 3.008-.176 5.386-.176h1.5a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" d="M7 13.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5zm-.75 4.25a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class SolarNotificationLinesRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationRemoveBoldIcon],svg[solar-notification-remove-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m-2.53-7.03a.75.75 0 0 1 1.06 0l1.47 1.47l1.47-1.47a.75.75 0 1 1 1.06 1.06L18.56 6.5l1.47 1.47a.75.75 0 0 1-1.06 1.06L17.5 7.56l-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47l-1.47-1.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h.258c-.405.567-.578 1.205-.662 1.831c-.096.714-.096 1.595-.096 2.577v.184c0 .982 0 1.863.096 2.577c.104.779.348 1.578 1.002 2.233c.655.654 1.454.898 2.233 1.002c.714.096 1.595.096 2.577.096h.184c.982 0 1.863 0 2.577-.096c.626-.084 1.264-.257 1.831-.662V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22"></svg:path>`,
})
export class SolarNotificationRemoveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationRemoveBoldDuotoneIcon],svg[solar-notification-remove-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m-2.53-7.03a.75.75 0 0 1 1.06 0l1.47 1.47l1.47-1.47a.75.75 0 1 1 1.06 1.06L18.56 6.5l1.47 1.47a.75.75 0 0 1-1.06 1.06L17.5 7.56l-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47l-1.47-1.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M20.536 20.536C22 19.07 22 16.714 22 12c0-1.358 0-2.52-.035-3.522c-.058.884-.213 1.452-.624 1.863c-.659.659-1.72.659-3.841.659s-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841c.411-.411.979-.566 1.863-.624C14.52 2 13.358 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465" opacity=".5"></svg:path>`,
})
export class SolarNotificationRemoveBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationRemoveBrokenIcon],svg[solar-notification-remove-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m22 2l-5 5m0-5l5 5M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12v-1.5M13.5 2H12C7.286 2 4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536"></svg:path>`,
})
export class SolarNotificationRemoveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationRemoveLineDuotoneIcon],svg[solar-notification-remove-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5" opacity=".5"></svg:path><svg:path d="m22 2l-5 5m0-5l5 5"></svg:path></svg:g>`,
})
export class SolarNotificationRemoveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationRemoveLinearIcon],svg[solar-notification-remove-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5M22 2l-5 5m0-5l5 5"></svg:path>`,
})
export class SolarNotificationRemoveLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationRemoveOutlineIcon],svg[solar-notification-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.53 1.47a.75.75 0 1 0-1.06 1.06l1.97 1.97l-1.97 1.97a.75.75 0 1 0 1.06 1.06l1.97-1.97l1.97 1.97a.75.75 0 0 0 1.06-1.06L20.56 4.5l1.97-1.97a.75.75 0 0 0-1.06-1.06L19.5 3.44z"></svg:path><svg:path fill="currentColor" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529V10.5a.75.75 0 0 0-1.5 0V12c0 2.378-.002 4.087-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62c.57-.569 1.34-.896 2.619-1.068c1.3-.174 3.008-.176 5.386-.176h1.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarNotificationRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationUnreadBoldIcon],svg[solar-notification-unread-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c1.399 0 2.59 0 3.612.038a4.5 4.5 0 0 0 6.35 6.35C22 9.41 22 10.601 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22"></svg:path><svg:path fill="currentColor" d="M22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path>`,
})
export class SolarNotificationUnreadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationUnreadBoldDuotoneIcon],svg[solar-notification-unread-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path>`,
})
export class SolarNotificationUnreadBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationUnreadBrokenIcon],svg[solar-notification-unread-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12v-1.5M13.5 2H12C7.286 2 4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle></svg:g>`,
})
export class SolarNotificationUnreadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationUnreadLineDuotoneIcon],svg[solar-notification-unread-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5" opacity=".5"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle></svg:g>`,
})
export class SolarNotificationUnreadLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationUnreadLinearIcon],svg[solar-notification-unread-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle></svg:g>`,
})
export class SolarNotificationUnreadLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationUnreadLinesBoldIcon],svg[solar-notification-unread-lines-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.25 14a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-1.399 0-2.59-.038-3.612a4.5 4.5 0 0 1-6.35-6.35C14.59 2 13.399 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535M6.25 17.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarNotificationUnreadLinesBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationUnreadLinesBoldDuotoneIcon],svg[solar-notification-unread-lines-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7 16.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm0-3.5a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5zM22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path>`,
})
export class SolarNotificationUnreadLinesBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationUnreadLinesBrokenIcon],svg[solar-notification-unread-lines-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="19" cy="5" r="3"></svg:circle><svg:path stroke-linecap="round" d="M7 14h9m-9 3.5h6M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12v-1.5M13.5 2H12C7.286 2 4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536"></svg:path></svg:g>`,
})
export class SolarNotificationUnreadLinesBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationUnreadLinesLineDuotoneIcon],svg[solar-notification-unread-lines-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5" opacity=".5"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle><svg:path stroke-linecap="round" d="M7 14h9m-9 3.5h6"></svg:path></svg:g>`,
})
export class SolarNotificationUnreadLinesLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationUnreadLinesLinearIcon],svg[solar-notification-unread-lines-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle><svg:path stroke-linecap="round" d="M7 14h9m-9 3.5h6"></svg:path></svg:g>`,
})
export class SolarNotificationUnreadLinesLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationUnreadLinesOutlineIcon],svg[solar-notification-unread-lines-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529V10.5a.75.75 0 0 0-1.5 0V12c0 2.378-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62c.57-.569 1.34-.896 2.619-1.068c1.3-.174 3.008-.176 5.386-.176h1.5a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 1.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M16.75 5a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.25 14a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75M7 16.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarNotificationUnreadLinesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationUnreadOutlineIcon],svg[solar-notification-unread-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529V10.5a.75.75 0 0 0-1.5 0V12c0 2.378-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62c.57-.569 1.34-.896 2.619-1.068c1.3-.174 3.008-.176 5.386-.176h1.5a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 1.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M16.75 5a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarNotificationUnreadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarObjectScanBoldIcon],svg[solar-object-scan-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 13.25a.75.75 0 0 1 .75.75v.056c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289a.75.75 0 0 1 .75-.75m-20 0a.75.75 0 0 1 .75.75c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V14a.75.75 0 0 1 .75-.75m7.944-12H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 4.705 2.89 5.71c-.138 1.029-.14 2.383-.14 4.29a.75.75 0 0 1-1.5 0v-.056c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m8.346 1.64c-1.028-.138-2.383-.14-4.29-.14a.75.75 0 0 1 0-1.5h.056c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433V10a.75.75 0 0 1-1.5 0c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.025 13.109C6.775 12.746 8.443 11.5 12 11.5s5.224 1.246 5.975 1.609l.012.006a1.6 1.6 0 0 1 .263.151c.132.097.229.21.308.337c.194.31.192.604.191.777v.172c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.725 1.65c-.456.456-1.022.642-1.65.726c-.595.08-1.344.08-2.243.08H9.948c-.898 0-1.647 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.641-1.022-.726-1.65c-.08-.594-.08-1.344-.08-2.242v-.172c0-.174-.003-.468.192-.777c.079-.126.176-.24.308-.337a1.7 1.7 0 0 1 .275-.157" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.295 4.83c-.595-.08-1.345-.08-2.243-.08H9.948c-.898 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.08.595-.08 1.345-.08 2.243v.286q-.29.187-.496.345a6 6 0 0 0-.497.426l-.01.01l-.004.004l-.001.002l-.002.001a.92.92 0 0 0-.026 1.212a.722.722 0 0 0 1.09.034l.008-.009l.055-.05a4 4 0 0 1 .263-.216a7 7 0 0 1 1.172-.708C7.879 10.26 9.58 9.715 12 9.715s4.12.545 5.198 1.07c.54.262.927.522 1.172.708a4 4 0 0 1 .318.266l.008.009a.722.722 0 0 0 1.09-.034a.92.92 0 0 0-.026-1.212l-.047-.047l-.1-.094a6 6 0 0 0-.367-.302a8 8 0 0 0-.496-.345v-.286c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726"></svg:path>`,
})
export class SolarObjectScanBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarObjectScanBoldDuotoneIcon],svg[solar-object-scan-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 1.25H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 4.705 2.89 5.71c-.138 1.029-.14 2.383-.14 4.29a.75.75 0 0 1-1.5 0v-.056c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m8.345 1.64c-1.027-.138-2.382-.14-4.289-.14a.75.75 0 0 1 0-1.5h.056c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433V10a.75.75 0 0 1-1.5 0c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812M2 13.25a.75.75 0 0 1 .75.75c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V14a.75.75 0 0 1 .75-.75m20 0a.75.75 0 0 1 .75.75v.056c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10 5.5h4c1.886 0 2.828 0 3.414.586c.55.55.584 1.414.586 3.078V14.5c0 1.886 0 2.828-.586 3.414S15.886 18.5 14 18.5h-4c-1.886 0-2.828 0-3.414-.586S6 16.386 6 14.5V9.164c.002-1.664.036-2.528.586-3.078C7.172 5.5 8.114 5.5 10 5.5" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18.37 9.3q-.178-.067-.37-.136c-1.833-.778-6.8-1.868-12 0q-.192.067-.37.136a10 10 0 0 0-1.553.744a6 6 0 0 0-.54.365l-.01.009l-.004.003l-.002.002H3.52a.75.75 0 0 0 .957 1.156l.01-.008l.063-.047q.09-.066.298-.193A8.5 8.5 0 0 1 6.17 10.7c1.214-.467 3.123-.95 5.831-.95s4.617.483 5.83.95a8.5 8.5 0 0 1 1.322.63a5 5 0 0 1 .36.24l.011.009a.75.75 0 0 0 .957-1.155L20 11c.48-.576.479-.577.479-.577l-.002-.002l-.004-.003l-.01-.009a3 3 0 0 0-.141-.105a6 6 0 0 0-.399-.26A10 10 0 0 0 18.37 9.3"></svg:path>`,
})
export class SolarObjectScanBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarObjectScanBrokenIcon],svg[solar-object-scan-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 14v1m-8 7c3.771 0 5.657 0 6.828-1.172c.654-.653.943-1.528 1.07-2.828M10 22c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14m0-4V9m8-7C6.229 2 4.343 2 3.172 3.172C2.518 3.825 2.229 4.7 2.102 6M14 2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10M4 11.5s2.4-2 8-2s8 2 8 2"></svg:path><svg:path fill="currentColor" d="M5.25 10a.75.75 0 0 0 1.5 0zm12.164-3.914l-.53.53zM10 6.25h4v-1.5h-4zM6.75 10v-.5h-1.5v.5zm10.5-.5v.5h1.5v-.5zM14 6.25c.964 0 1.612.002 2.095.067c.461.062.659.169.789.3l1.06-1.062c-.455-.455-1.022-.64-1.65-.725c-.606-.082-1.372-.08-2.294-.08zm4.75 3.25c0-.922.002-1.688-.08-2.294c-.084-.628-.27-1.195-.726-1.65l-1.06 1.06c.13.13.237.328.3.79c.064.482.066 1.13.066 2.094zM10 4.75c-.922 0-1.688-.002-2.294.08c-.628.084-1.195.27-1.65.725l1.06 1.061c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066zM6.75 9.5c0-.964.002-1.612.067-2.095c.062-.461.169-.659.3-.789l-1.062-1.06c-.455.455-.64 1.022-.725 1.65c-.082.606-.08 1.372-.08 2.294z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 18.5c1.886 0 2.828 0 3.414-.586S18 16.386 18 14.5V14m-8 4.5c-1.886 0-2.828 0-3.414-.586S6 16.386 6 14.5V14"></svg:path></svg:g>`,
})
export class SolarObjectScanBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarObjectScanLineDuotoneIcon],svg[solar-object-scan-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22m-4 0c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14m8-12C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10m12-8c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 11.5s2.4-2 8-2s8 2 8 2"></svg:path><svg:path fill="currentColor" d="M5.25 10a.75.75 0 0 0 1.5 0zm12.164-3.914l-.53.53zM10 6.25h4v-1.5h-4zM6.75 10v-.5h-1.5v.5zm10.5-.5v.5h1.5v-.5zM14 6.25c.964 0 1.612.002 2.095.067c.461.062.659.169.789.3l1.06-1.062c-.455-.455-1.022-.64-1.65-.725c-.606-.082-1.372-.08-2.294-.08zm4.75 3.25c0-.922.002-1.688-.08-2.294c-.084-.628-.27-1.195-.726-1.65l-1.06 1.06c.13.13.237.328.3.79c.064.482.066 1.13.066 2.094zM10 4.75c-.922 0-1.688-.002-2.294.08c-.628.084-1.195.27-1.65.725l1.06 1.061c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066zM6.75 9.5c0-.964.002-1.612.067-2.095c.062-.461.169-.659.3-.789l-1.062-1.06c-.455.455-.64 1.022-.725 1.65c-.082.606-.08 1.372-.08 2.294z" opacity=".7"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M18 10.5v4c0 1.886 0 2.828-.586 3.414S15.886 18.5 14 18.5h-4c-1.886 0-2.828 0-3.414-.586S6 16.386 6 14.5V10" opacity=".7"></svg:path></svg:g>`,
})
export class SolarObjectScanLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarObjectScanLinearIcon],svg[solar-object-scan-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22m-4 0c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14m8-12C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10m12-8c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10M4 11.5s2.4-2 8-2s8 2 8 2"></svg:path><svg:path fill="currentColor" d="M5.25 10a.75.75 0 0 0 1.5 0zm12.164-3.914l-.53.53zM10 6.25h4v-1.5h-4zM6.75 10v-.5h-1.5v.5zm10.5-.5v.5h1.5v-.5zM14 6.25c.964 0 1.612.002 2.095.067c.461.062.659.169.789.3l1.06-1.062c-.455-.455-1.022-.64-1.65-.725c-.606-.082-1.372-.08-2.294-.08zm4.75 3.25c0-.922.002-1.688-.08-2.294c-.084-.628-.27-1.195-.726-1.65l-1.06 1.06c.13.13.237.328.3.79c.064.482.066 1.13.066 2.094zM10 4.75c-.922 0-1.688-.002-2.294.08c-.628.084-1.195.27-1.65.725l1.06 1.061c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066zM6.75 9.5c0-.964.002-1.612.067-2.095c.062-.461.169-.659.3-.789l-1.062-1.06c-.455.455-.64 1.022-.725 1.65c-.082.606-.08 1.372-.08 2.294z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 14v.5c0 1.886 0 2.828.586 3.414S8.114 18.5 10 18.5h4c1.886 0 2.828 0 3.414-.586S18 16.386 18 14.5V14"></svg:path></svg:g>`,
})
export class SolarObjectScanLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarObjectScanOutlineIcon],svg[solar-object-scan-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 1.25H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 4.705 2.89 5.71c-.138 1.029-.14 2.383-.14 4.29a.75.75 0 0 1-1.5 0v-.056c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m8.345 1.64c-1.027-.138-2.382-.14-4.289-.14a.75.75 0 0 1 0-1.5h.056c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433V10a.75.75 0 0 1-1.5 0c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812M9.948 4.75h4.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v.506a10 10 0 0 1 1.173.59a6 6 0 0 1 .54.365l.01.01l.004.002l.002.002L20 11.5l.48-.576a.75.75 0 0 1-.957 1.155l-.01-.008l-.063-.047a5 5 0 0 0-.298-.193a8.5 8.5 0 0 0-1.321-.631c-1.214-.467-3.123-.95-5.831-.95s-4.617.483-5.83.95a8.5 8.5 0 0 0-1.322.63a5 5 0 0 0-.36.24l-.011.009a.75.75 0 0 1-.957-1.155L4 11.5l-.48-.576l.001-.001l.002-.002l.004-.003l.01-.008a3 3 0 0 1 .141-.106q.138-.1.399-.26a9.5 9.5 0 0 1 1.173-.59v-.506c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08M6.75 9.426C8.065 9.05 9.801 8.75 12 8.75s3.935.299 5.25.676c0-.923-.003-1.55-.067-2.02c-.062-.462-.169-.66-.3-.79s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-4c-.964 0-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.063.471-.066 1.098-.066 2.021M2 13.25a.75.75 0 0 1 .75.75c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V14a.75.75 0 0 1 .75-.75m4 0a.75.75 0 0 1 .75.75v.5c0 .964.002 1.612.067 2.095c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066h4c.964 0 1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095V14a.75.75 0 0 1 1.5 0v.552c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.344.08-2.242.08H9.948c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.344-.08-2.242V14a.75.75 0 0 1 .75-.75m16 0a.75.75 0 0 1 .75.75v.056c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarObjectScanOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOutgoingCallBoldIcon],svg[solar-outgoing-call-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 9l4-4m0 0v3m0-3h-3"></svg:path><svg:path fill="currentColor" d="m15.556 14.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336"></svg:path></svg:g>`,
})
export class SolarOutgoingCallBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOutgoingCallBoldDuotoneIcon],svg[solar-outgoing-call-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 9l4-4m0 0v3m0-3h-3"></svg:path><svg:path fill="currentColor" d="m15.556 14.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336" opacity=".5"></svg:path></svg:g>`,
})
export class SolarOutgoingCallBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOutgoingCallBrokenIcon],svg[solar-outgoing-call-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 9l4-4m0 0v3m0-3h-3"></svg:path><svg:path fill="currentColor" d="m15.1 15.027l.545.517zm.456-.48l-.544-.516zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.064-9.55a.75.75 0 1 0-1.498.081zm5.439 1.88l.544.517zm.287-.302l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zm-3.656-.818a.75.75 0 0 0 1.087 1.033zm6.345 9.964l.544-.517zm-.399 6.756a.75.75 0 1 0 .798-1.27zm4.449.246a.75.75 0 0 0-.307 1.469zm.532-4.514l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zM8.359 15.959c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zM9.19 8.805a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02zm1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .422-.25l.035-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.006-.005l.047-.042q.014-.008-.005.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zm9.471 16.26c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47zm-4.638 3.478c-.983-.618-2.03-1.454-3.103-2.583l-1.087 1.033c1.154 1.215 2.297 2.132 3.392 2.82zm6.14 1.675a8.3 8.3 0 0 1-2.489-.159l-.307 1.469a9.8 9.8 0 0 0 2.944.182z"></svg:path></svg:g>`,
})
export class SolarOutgoingCallBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOutgoingCallLineDuotoneIcon],svg[solar-outgoing-call-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 9l4-4m0 0v3m0-3h-3"></svg:path><svg:path fill="currentColor" d="m15.1 15.027l-.543-.516zm.456-.48l.544.517zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.813-9.51l-.749.041zm6.475 1.538l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zM5.26 3.609l.544.516zM3.691 5.26l-.543-.516zm7.372 7.795l.544-.517zm4.582 2.488l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zm-5.53-2.168L3.149 4.745l1.088 1.033l1.57-1.653zm4.474 5.713a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02s-.002 0-.545-.516m1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .421-.25l.036-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.005-.005l.01-.01l.037-.032q.015-.008-.004.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zM3.752 6.926c-.022-.4.152-.8.484-1.148L3.148 4.745c-.536.564-.943 1.347-.894 2.261zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarOutgoingCallLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOutgoingCallLinearIcon],svg[solar-outgoing-call-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 9l4-4m0 0v3m0-3h-3"></svg:path><svg:path fill="currentColor" d="m15.1 15.027l-.543-.516zm.456-.48l.544.517zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.813-9.51l-.749.041zm6.475 1.538l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zM5.26 3.609l.544.516zM3.691 5.26l-.543-.516zm7.372 7.795l.544-.517zm4.582 2.488l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zm-5.53-2.168L3.149 4.745l1.088 1.033l1.57-1.653zm4.474 5.713a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02s-.002 0-.545-.516m1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .421-.25l.036-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.005-.005l.01-.01l.037-.032q.015-.008-.004.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zM3.752 6.926c-.022-.4.152-.8.484-1.148L3.148 4.745c-.536.564-.943 1.347-.894 2.261zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47z"></svg:path></svg:g>`,
})
export class SolarOutgoingCallLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOutgoingCallOutlineIcon],svg[solar-outgoing-call-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.986 3.476c-1.014-1.433-3.042-1.675-4.268-.384l-1.57 1.652c-.536.565-.943 1.348-.894 2.262c.1 1.85.884 5.634 5.018 9.985c4.429 4.664 8.654 4.898 10.478 4.718c.747-.073 1.352-.472 1.795-.939l1.42-1.495c1.305-1.374.925-3.673-.707-4.613l-1.911-1.1c-1.099-.632-2.46-.451-3.335.469l-.408.43a.6.6 0 0 1-.294.007c-.402-.066-1.27-.421-2.703-1.929c-1.428-1.503-1.78-2.429-1.846-2.884c-.032-.22 0-.336.013-.372l.003-.006l.244-.258c.968-1.018 1.036-2.612.226-3.76zm-3.18.649c.522-.55 1.443-.507 1.955.217l1.26 1.784c.423.597.358 1.391-.087 1.86l-.287.302l.532.505a26 26 0 0 0-.533-.503l-.002.001l-.003.003l-.006.007l-.013.015a1 1 0 0 0-.104.14c-.052.081-.109.19-.157.324c-.098.275-.15.638-.084 1.092c.13.893.715 2.092 2.242 3.7c1.523 1.604 2.673 2.234 3.55 2.376c.451.073.816.015 1.092-.094a1.5 1.5 0 0 0 .422-.251l.035-.033l.014-.014l.007-.006l.003-.004l.001-.001s.002-.002-.526-.502l.528.5l.455-.479c.385-.406.986-.497 1.499-.202l1.91 1.1c.821.472.982 1.634.369 2.28l-1.42 1.495c-.28.294-.572.452-.855.48c-1.435.141-5.18.02-9.244-4.259c-3.876-4.08-4.526-7.523-4.607-9.032c-.022-.4.152-.8.484-1.149z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16 4.25a.75.75 0 0 0 0 1.5h1.19l-2.72 2.72a.75.75 0 1 0 1.06 1.06l2.72-2.72V8a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class SolarOutgoingCallOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOutgoingCallRoundedBoldIcon],svg[solar-outgoing-call-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 9l4-4m0 0v3m0-3h-3"></svg:path><svg:path fill="currentColor" d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38"></svg:path></svg:g>`,
})
export class SolarOutgoingCallRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOutgoingCallRoundedBoldDuotoneIcon],svg[solar-outgoing-call-rounded-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 9l4-4m0 0v3m0-3h-3"></svg:path><svg:path fill="currentColor" d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38" opacity=".5"></svg:path></svg:g>`,
})
export class SolarOutgoingCallRoundedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOutgoingCallRoundedBrokenIcon],svg[solar-outgoing-call-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 9l4-4m0 0v3m0-3h-3"></svg:path><svg:path d="M4.007 7.933c-.073 1.908.41 5.149 3.66 8.4a14 14 0 0 0 2.333 1.9M5.538 4.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53A9.8 9.8 0 0 1 13 19.611"></svg:path></svg:g>`,
})
export class SolarOutgoingCallRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOutgoingCallRoundedLineDuotoneIcon],svg[solar-outgoing-call-rounded-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 9l4-4m0 0v3m0-3h-3"></svg:path><svg:path d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarOutgoingCallRoundedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOutgoingCallRoundedLinearIcon],svg[solar-outgoing-call-rounded-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 9l4-4m0 0v3m0-3h-3"></svg:path><svg:path d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38Z"></svg:path></svg:g>`,
})
export class SolarOutgoingCallRoundedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOutgoingCallRoundedOutlineIcon],svg[solar-outgoing-call-rounded-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.693 4.95c-1.17-2.095-4.005-2.223-5.686-.543c-.898.899-1.697 2.093-1.75 3.498c-.079 2.08.459 5.536 3.88 8.958c3.422 3.421 6.877 3.959 8.958 3.88c1.405-.053 2.6-.852 3.498-1.75c1.68-1.68 1.552-4.516-.544-5.685l-1.163-.65c-1.368-.763-3.095-.438-4.227.68a.63.63 0 0 1-.337.104c-.256.012-.85-.079-1.767-.997c-.919-.918-1.01-1.511-.997-1.767a.63.63 0 0 1 .104-.337c1.118-1.132 1.443-2.859.68-4.227zm-4.625.518c1.106-1.106 2.716-.86 3.315.214l.649 1.163c.403.723.266 1.74-.448 2.452c-.07.07-.486.516-.524 1.307c-.04.81.324 1.792 1.434 2.902s2.09 1.474 2.901 1.434c.791-.038 1.237-.454 1.307-.524c.714-.713 1.73-.851 2.453-.448l1.163.65c1.074.598 1.32 2.208.214 3.314c-.775.775-1.63 1.28-2.494 1.312c-1.735.066-4.76-.363-7.84-3.442S4.69 9.697 4.756 7.962c.033-.863.537-1.72 1.312-2.494" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16 4.25a.75.75 0 0 0 0 1.5h1.19l-2.72 2.72a.75.75 0 0 0 1.06 1.06l2.72-2.72V8a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class SolarOutgoingCallRoundedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOvenMittsBoldIcon],svg[solar-oven-mitts-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.019 16.537l3.569 3.49C8.933 21.341 9.606 22 10.443 22c.514 0 .966-.248 1.55-.745c.358-.304.537-.457.545-.677s-.169-.393-.522-.74l-7.91-7.765c-.24-.236-.36-.354-.492-.387a.5.5 0 0 0-.266.007c-.13.04-.247.166-.479.418c-.58.63-.869 1.098-.869 1.634c0 .818.673 1.476 2.019 2.792m16.059-3.14a6.314 6.314 0 0 0 0-9.073c-2.562-2.505-6.716-2.505-9.278 0l-.466.455C9.914 3.152 8.668 1.98 7.214 2c-1.773.027-3.182 1.817-3.148 4l-.033 3.457c-.002.218-.003.327.036.421s.115.17.268.32l8.788 8.627c.33.324.495.486.7.486s.37-.161.7-.485z"></svg:path>`,
})
export class SolarOvenMittsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOvenMittsBoldDuotoneIcon],svg[solar-oven-mitts-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.298 20.026l6.78-6.63a6.315 6.315 0 0 0 0-9.072c-2.562-2.505-6.716-2.505-9.278 0l-.466.455C9.915 3.152 8.668 1.98 7.214 2c-1.773.027-3.182 1.817-3.147 4l-.033 3.34c-.007.757-.01 1.135-.144 1.47l-.004.011l9.307 9.308z"></svg:path><svg:path fill="currentColor" d="m4.019 16.537l3.569 3.49C8.933 21.341 9.606 22 10.443 22c.814 0 1.473-.624 2.75-1.872l-9.307-9.307c-.136.333-.432.654-1.017 1.29c-.58.63-.869 1.098-.869 1.634c0 .818.673 1.476 2.019 2.792" opacity=".5"></svg:path>`,
})
export class SolarOvenMittsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOvenMittsBrokenIcon],svg[solar-oven-mitts-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M9.133 17.025a.75.75 0 1 0 1.05-1.07zm3.364 1.192a.75.75 0 1 0-1.039 1.082zm-2.314-2.262l-5.639-5.536l-1.05 1.07l5.639 5.536zm3.634 3.53l-1.32-1.268l-1.039 1.082l1.32 1.268z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4.019 16.537C2.673 15.22 2 14.563 2 13.745c0-.536.29-1.004.87-1.634c.59-.643.886-.964 1.02-1.3c.133-.336.137-.714.144-1.47l.032-3.342C4.032 3.817 5.441 2.027 7.213 2c1.455-.022 2.702 1.152 3.121 2.78m9.744 8.616a6.314 6.314 0 0 0 0-9.072c-2.562-2.505-6.716-2.505-9.278 0l-.466.455m0 0l-.962.941M17.416 16l-.728.711l-3.39 3.315C11.952 21.342 11.278 22 10.443 22c-.837 0-1.51-.658-2.855-1.974L6.517 18.98"></svg:path></svg:g>`,
})
export class SolarOvenMittsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOvenMittsLineDuotoneIcon],svg[solar-oven-mitts-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10.334 4.78C9.914 3.151 8.668 1.977 7.214 2c-1.773.027-3.182 1.817-3.148 4l-.032 3.34c-.007.757-.01 1.135-.144 1.47c-.134.337-.43.659-1.02 1.301c-.58.63-.87 1.098-.87 1.634c0 .818.673 1.476 2.019 2.792l3.569 3.49C8.933 21.341 9.606 22 10.443 22c.836 0 1.509-.658 2.855-1.974l6.78-6.63a6.314 6.314 0 0 0 0-9.072c-2.562-2.505-6.716-2.505-9.278 0zm0 0l-.962.94"></svg:path><svg:path d="M13.297 20.026L4.02 10.954" opacity=".5"></svg:path></svg:g>`,
})
export class SolarOvenMittsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOvenMittsLinearIcon],svg[solar-oven-mitts-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10.334 4.78C9.914 3.151 8.668 1.977 7.214 2c-1.773.027-3.182 1.817-3.148 4l-.032 3.34c-.007.757-.01 1.135-.144 1.47c-.134.337-.43.659-1.02 1.301c-.58.63-.87 1.098-.87 1.634c0 .818.673 1.476 2.019 2.792l3.569 3.49C8.933 21.341 9.606 22 10.443 22c.836 0 1.509-.658 2.855-1.974l6.78-6.63a6.314 6.314 0 0 0 0-9.072c-2.562-2.505-6.716-2.505-9.278 0zm0 0l-.962.94"></svg:path><svg:path d="M13.297 20.026L4.02 10.954"></svg:path></svg:g>`,
})
export class SolarOvenMittsLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOvenMittsMinimalisticBoldIcon],svg[solar-oven-mitts-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.588 20.026l-3.57-3.49C2.674 15.222 2 14.564 2 13.747c0-.537.29-1.005.87-1.635c.59-.643.886-.964 1.02-1.3c.133-.336.137-.714.144-1.47L4.066 6c-.034-2.183 1.375-3.973 3.147-4c1.455-.022 2.702 1.152 3.121 2.78l.466-.456c2.562-2.505 6.716-2.505 9.278 0a6.314 6.314 0 0 1 0 9.072l-6.78 6.63C11.952 21.342 11.278 22 10.443 22c-.837 0-1.51-.658-2.855-1.974M5.98 12.872a.75.75 0 0 1 1.06-.012l4.283 4.187a.75.75 0 0 1-1.048 1.073l-4.283-4.187a.75.75 0 0 1-.012-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarOvenMittsMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOvenMittsMinimalisticBoldDuotoneIcon],svg[solar-oven-mitts-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.588 20.026l-3.57-3.49C2.674 15.222 2 14.564 2 13.747c0-.537.29-1.005.87-1.635c.59-.643.886-.964 1.02-1.3c.133-.336.137-.714.144-1.47L4.066 6c-.034-2.183 1.375-3.973 3.147-4c1.455-.022 2.702 1.152 3.121 2.78l.466-.456c2.562-2.505 6.716-2.505 9.278 0a6.314 6.314 0 0 1 0 9.072l-6.78 6.63C11.952 21.342 11.278 22 10.443 22c-.837 0-1.51-.658-2.855-1.974" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.04 12.86a.75.75 0 1 0-1.048 1.073l4.283 4.187a.75.75 0 0 0 1.048-1.073z"></svg:path>`,
})
export class SolarOvenMittsMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOvenMittsMinimalisticBrokenIcon],svg[solar-oven-mitts-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4.019 16.537C2.673 15.22 2 14.563 2 13.745c0-.536.29-1.004.87-1.634c.59-.643.886-.964 1.02-1.3c.133-.336.137-.714.144-1.47l.032-3.342C4.032 3.817 5.441 2.027 7.213 2c1.455-.022 2.702 1.152 3.121 2.78m9.744 8.616a6.314 6.314 0 0 0 0-9.072c-2.562-2.505-6.716-2.505-9.278 0l-.466.455m0 0l-.962.941M17.416 16l-.728.711l-3.39 3.315C11.952 21.342 11.278 22 10.443 22c-.837 0-1.51-.658-2.855-1.974L6.517 18.98m4.283-1.396l-4.283-4.187"></svg:path>`,
})
export class SolarOvenMittsMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOvenMittsMinimalisticLineDuotoneIcon],svg[solar-oven-mitts-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10.334 4.78C9.914 3.151 8.668 1.977 7.214 2c-1.773.027-3.182 1.817-3.148 4l-.032 3.34c-.007.757-.01 1.135-.144 1.47c-.134.337-.43.659-1.02 1.301c-.58.63-.87 1.098-.87 1.634c0 .818.673 1.476 2.019 2.792l3.569 3.49C8.933 21.341 9.606 22 10.443 22c.836 0 1.509-.658 2.855-1.974l6.78-6.63a6.314 6.314 0 0 0 0-9.072c-2.562-2.505-6.716-2.505-9.278 0zm0 0l-.962.94"></svg:path><svg:path d="m10.8 17.584l-4.283-4.187" opacity=".5"></svg:path></svg:g>`,
})
export class SolarOvenMittsMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOvenMittsMinimalisticLinearIcon],svg[solar-oven-mitts-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.334 4.78C9.914 3.151 8.668 1.977 7.214 2c-1.773.027-3.182 1.817-3.148 4l-.032 3.34c-.007.757-.01 1.135-.144 1.47c-.134.337-.43.659-1.02 1.301c-.58.63-.87 1.098-.87 1.634c0 .818.673 1.476 2.019 2.792l3.569 3.49C8.933 21.341 9.606 22 10.443 22c.836 0 1.509-.658 2.855-1.974l6.78-6.63a6.314 6.314 0 0 0 0-9.072c-2.562-2.505-6.716-2.505-9.278 0zm0 0l-.962.94M10.8 17.584l-4.283-4.187"></svg:path>`,
})
export class SolarOvenMittsMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOvenMittsMinimalisticOutlineIcon],svg[solar-oven-mitts-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.481 4.565c-.436-1.157-1.35-1.828-2.257-1.815c-1.219.019-2.438 1.316-2.408 3.237v.01l-.032 3.35v.115c-.006.644-.01 1.157-.197 1.626c-.108.27-.268.502-.454.73c-.179.222-.414.477-.696.784l-.016.017c-.564.613-.671.895-.671 1.126c0 .174.06.382.346.748c.298.382.759.835 1.447 1.508l3.569 3.489c.688.673 1.151 1.123 1.543 1.415c.373.279.594.345.788.345c.193 0 .414-.066.787-.345c.392-.292.855-.742 1.543-1.415l6.781-6.63a5.565 5.565 0 0 0 0-8c-2.27-2.22-5.96-2.22-8.23 0L9.896 6.257a.75.75 0 1 1-1.048-1.072zm1.145-1.098c-.691-1.304-1.927-2.24-3.424-2.217c-2.322.035-3.92 2.312-3.886 4.751l-.032 3.332c-.007.815-.021 1.025-.091 1.2a1.4 1.4 0 0 1-.224.34c-.147.181-.35.402-.652.73c-.595.647-1.067 1.3-1.067 2.142c0 .644.276 1.174.663 1.67c.368.472.903.995 1.544 1.622L7.1 20.599c.642.627 1.176 1.15 1.658 1.509c.508.38 1.042.642 1.685.642s1.176-.263 1.684-.642c.482-.36 1.017-.882 1.658-1.51l6.818-6.665a7.064 7.064 0 0 0 0-10.145c-2.74-2.679-7.108-2.786-9.978-.321M5.98 12.872a.75.75 0 0 1 1.06-.012l4.283 4.187a.75.75 0 1 1-1.049 1.073l-4.282-4.187a.75.75 0 0 1-.012-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarOvenMittsMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOvenMittsOutlineIcon],svg[solar-oven-mitts-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.481 4.565c-.436-1.157-1.35-1.828-2.257-1.815c-1.219.019-2.438 1.316-2.408 3.237v.01l-.032 3.35v.115c-.004.425-.008.793-.063 1.13l8.577 8.385l6.256-6.117a5.565 5.565 0 0 0 0-8c-2.27-2.22-5.96-2.22-8.23 0L9.896 6.257a.75.75 0 1 1-1.048-1.072zm1.145-1.098c-.691-1.304-1.927-2.24-3.424-2.217c-2.322.035-3.92 2.312-3.886 4.751l-.032 3.332c-.007.815-.021 1.025-.091 1.2a1.4 1.4 0 0 1-.224.34c-.147.181-.35.402-.652.73c-.595.647-1.067 1.3-1.067 2.142c0 .644.276 1.174.663 1.67c.368.472.903.995 1.544 1.622L7.1 20.599c.642.627 1.176 1.15 1.658 1.509c.508.38 1.042.642 1.685.642s1.176-.263 1.684-.642c.482-.36 1.017-.882 1.658-1.51l6.818-6.665a7.064 7.064 0 0 0 0-10.145c-2.74-2.679-7.108-2.786-9.978-.321m1.597 16.558l-8.226-8.043q-.236.271-.56.62l-.016.017c-.564.613-.671.895-.671 1.126c0 .174.06.382.346.748c.298.382.759.835 1.447 1.508l3.569 3.489c.688.673 1.151 1.123 1.543 1.415c.373.279.594.345.788.345c.193 0 .414-.066.787-.345c.277-.206.59-.492.993-.88" clip-rule="evenodd"></svg:path>`,
})
export class SolarOvenMittsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaintRollerBoldIcon],svg[solar-paint-roller-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C7.098 2 7.565 2 8.5 2h7c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C18 3.098 18 3.565 18 4.5s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C16.902 7 16.435 7 15.5 7h-7c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C6 5.902 6 5.435 6 4.5m-.998-.56a.748.748 0 0 0 0 1.121Q5 4.813 5 4.541V4.46q0-.273.002-.52M10 16v4c0 .943 0 1.414.293 1.707S11.057 22 12 22s1.414 0 1.707-.293S14 20.943 14 20v-4c0-.943 0-1.414-.293-1.707S12.943 14 12 14s-1.414 0-1.707.293S10 15.057 10 16"></svg:path><svg:path fill="currentColor" d="M18.994 5.25h.051c.455 0 .76 0 .997.016c.23.015.342.042.416.07c.323.128.578.383.706.706c.029.074.056.187.07.417c.016.236.016.541.016.996c0 .837-.01 1.067-.071 1.239a1.25 1.25 0 0 1-.592.687c-.161.086-.387.13-1.215.255l-4.123.618c-.773.116-1.421.213-1.934.358c-.543.152-1.023.38-1.398.816c-.384.445-.542.977-.61 1.578c.204-.006.42-.006.639-.006h.109c.265 0 .525 0 .766.011c.05-.32.127-.482.232-.604c.11-.127.278-.242.668-.351c.411-.116.966-.2 1.797-.325l4.196-.63c.65-.097 1.158-.172 1.577-.395a2.75 2.75 0 0 0 1.302-1.513c.158-.447.158-.96.157-1.617V7.43c0-.424 0-.779-.019-1.07a2.8 2.8 0 0 0-.172-.868a2.75 2.75 0 0 0-1.551-1.552a2.8 2.8 0 0 0-.869-.172a18 18 0 0 0-1.07-.019h-.075q.008.33.006.71v.08q.002.38-.006.71"></svg:path>`,
})
export class SolarPaintRollerBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaintRollerBoldDuotoneIcon],svg[solar-paint-roller-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C7.098 2 7.565 2 8.5 2h7c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C18 3.098 18 3.565 18 4.5s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C16.902 7 16.435 7 15.5 7h-7c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C6 5.902 6 5.435 6 4.5M10 16v4c0 .943 0 1.414.293 1.707S11.057 22 12 22s1.414 0 1.707-.293S14 20.943 14 20v-4c0-.943 0-1.414-.293-1.707S12.943 14 12 14s-1.414 0-1.707.293S10 15.057 10 16"></svg:path><svg:path fill="currentColor" d="M19.045 5.25c.455 0 .76 0 .996.016c.23.015.343.042.417.07c.323.128.578.383.705.706c.03.074.056.187.071.417c.016.236.016.541.016.996c0 .837-.01 1.067-.071 1.239a1.25 1.25 0 0 1-.592.687c-.161.086-.387.13-1.215.255l-4.123.618c-.773.116-1.421.213-1.934.358c-.543.152-1.024.38-1.399.816c-.58.674-.644 1.55-.661 2.56v.02C11.465 14 11.71 14 12 14c.295 0 .543 0 .755.009c.018-1.063.117-1.392.298-1.602c.11-.127.277-.242.668-.351c.411-.116.965-.2 1.797-.325l4.196-.63c.65-.097 1.158-.172 1.577-.395a2.75 2.75 0 0 0 1.302-1.513c.158-.447.158-.96.157-1.617V7.43c0-.424 0-.779-.019-1.07a2.8 2.8 0 0 0-.172-.868a2.75 2.75 0 0 0-1.551-1.552a2.8 2.8 0 0 0-.869-.172a18 18 0 0 0-1.07-.019H18v1.5z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.75 4.5a.75.75 0 0 1 .75-.75H6v1.5h-.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarPaintRollerBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaintRollerBrokenIcon],svg[solar-paint-roller-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.75 6.799l-.375.65zm-.549-.549l-.65.375zm11.598 0l.65.375zm-.549.549l.375.65zm0-4.598l.375-.65zm.549.549l.65-.375zM6.75 2.201l-.375-.65zm-.549.549l-.65-.375zm7.506 18.957l-.53-.53zm0-7.414l-.53.53zm-3.414 0l-.53-.53zm0 7.414l.53-.53zm5.225-9.976a.75.75 0 1 0-.223-1.484zm3.854-2.095a.75.75 0 1 0 .223 1.483zm2.489-3.869l.698-.274zM20.733 4.64l-.275.698zm.205 5.405l-.351-.663zm.948-1.1l.707.25zm-9.401 2.973l-.569-.49zM12.005 14v.75h.737l.013-.738zM5.5 3.75a.75.75 0 0 0 0 1.5zm4.5-1a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zm1.5 5h-7v1.5h7zm-7 0c-.481 0-.792 0-1.027-.022c-.225-.02-.307-.055-.348-.078l-.75 1.299c.307.177.633.243.962.273c.32.029.71.028 1.163.028zM5.25 4.5c0 .454 0 .844.028 1.163c.03.329.096.655.273.962l1.3-.75c-.024-.04-.059-.123-.079-.348A13 13 0 0 1 6.75 4.5zm1.875 1.65a.75.75 0 0 1-.275-.275l-1.299.75c.198.342.482.626.824.824zM17.25 4.5c0 .481 0 .792-.022 1.027c-.02.225-.055.307-.079.348l1.3.75c.177-.307.243-.633.273-.962c.029-.32.028-.71.028-1.163zM15.5 7.75c.454 0 .844 0 1.163-.028c.329-.03.655-.096.962-.273l-.75-1.3c-.04.024-.123.059-.348.079a13 13 0 0 1-1.027.022zm1.65-1.875a.75.75 0 0 1-.275.275l.75 1.299a2.25 2.25 0 0 0 .824-.824zM15.5 2.75c.481 0 .792 0 1.027.022c.225.02.307.055.348.078l.75-1.299c-.307-.177-.633-.243-.962-.273c-.32-.029-.71-.028-1.163-.028zm3.25 1.75c0-.454 0-.844-.028-1.163c-.03-.329-.096-.655-.273-.962l-1.3.75c.024.04.058.123.079.348c.021.235.022.546.022 1.027zm-1.875-1.65a.75.75 0 0 1 .274.275l1.3-.75a2.25 2.25 0 0 0-.824-.824zM8.5 1.25c-.454 0-.844 0-1.163.028c-.329.03-.655.096-.962.273l.75 1.3c.04-.024.123-.059.348-.079c.235-.021.546-.022 1.027-.022zM6.75 4.5c0-.481 0-.792.022-1.027c.02-.225.055-.307.078-.348l-1.299-.75c-.177.307-.243.633-.273.962c-.029.32-.028.71-.028 1.163zm-.375-2.949a2.25 2.25 0 0 0-.824.824l1.3.75a.75.75 0 0 1 .274-.275zM10.75 20v-4h-1.5v4zm2.5-4v4h1.5v-4zm0 4c0 .493-.002.787-.03.997a.7.7 0 0 1-.043.18l1.06 1.06c.31-.309.422-.684.47-1.04c.045-.334.043-.747.043-1.197zM12 22.75c.45 0 .863.002 1.197-.043c.356-.048.731-.16 1.04-.47l-1.06-1.06l-.003.001l-.01.005a.7.7 0 0 1-.167.037c-.21.028-.504.03-.997.03zm0-8c.493 0 .787.002.997.03a.7.7 0 0 1 .18.043l1.06-1.06c-.309-.31-.684-.422-1.04-.47c-.334-.045-.747-.043-1.197-.043zM14.75 16c0-.45.002-.863-.043-1.197c-.048-.356-.16-.731-.47-1.04l-1.06 1.06l.001.003l.005.01c.009.022.024.07.037.167c.028.21.03.504.03.997zm-4 0c0-.493.002-.787.03-.997a.7.7 0 0 1 .043-.18l-1.06-1.06c-.31.309-.422.684-.47 1.04c-.045.334-.043.747-.043 1.197zM12 13.25c-.45 0-.863-.002-1.197.043c-.356.048-.731.16-1.04.47l1.06 1.06l.003-.001l.01-.005a.7.7 0 0 1 .167-.037c.21-.028.504-.03.997-.03zM9.25 20c0 .45-.002.863.043 1.197c.048.356.16.731.47 1.04l1.06-1.06l-.001-.003l-.005-.01a.7.7 0 0 1-.037-.167c-.028-.21-.03-.504-.03-.997zM12 21.25c-.493 0-.787-.002-.997-.03a.7.7 0 0 1-.18-.043l-1.06 1.06c.309.31.684.422 1.04.47c.334.045.747.043 1.197.043zm7.045-17.5H18v1.5h1.045zm3.705 3.705c0-.435 0-.797-.019-1.094a2.8 2.8 0 0 0-.172-.868l-1.396.55c.03.073.056.186.071.416c.016.236.016.541.016.996zM19.045 5.25c.455 0 .76 0 .996.016c.23.015.343.042.417.07l.55-1.395a2.8 2.8 0 0 0-.87-.172c-.296-.02-.658-.019-1.093-.019zm3.514.243a2.75 2.75 0 0 0-1.552-1.552l-.55 1.396c.324.127.58.382.706.705zm-2.965 5.626c.71-.106 1.252-.177 1.696-.413l-.703-1.325c-.162.086-.387.13-1.215.255zm1.656-3.664c0 .837-.01 1.067-.071 1.239l1.414.5c.168-.475.157-1.022.157-1.739zm.04 3.251a2.75 2.75 0 0 0 1.303-1.513l-1.414-.5a1.25 1.25 0 0 1-.592.688zm-5.995-.459c-.793.12-1.457.218-1.98.365c-.543.152-1.024.38-1.399.816l1.137.979c.11-.127.277-.242.668-.351c.41-.116.965-.2 1.797-.325zm-2.54 3.765c.017-1.065.116-1.395.298-1.605l-1.137-.98c-.58.675-.644 1.552-.661 2.56zM12 14.75h.005v-1.5H12zm-6-11h-.5v1.5H6zm2.5-1H10v-1.5H8.5zm5.5 0h1.5v-1.5H14z"></svg:path>`,
})
export class SolarPaintRollerBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaintRollerLineDuotoneIcon],svg[solar-paint-roller-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.75 6.799l-.375.65zm-.549-.549l-.65.375zm11.598 0l.65.375zm-.549.549l.375.65zm0-4.598l.375-.65zm.549.549l.65-.375zM6.75 2.201l-.375-.65zm-.549.549l-.65-.375zm7.506 18.957l-.53-.53zm0-7.414l-.53.53zm-3.414 0l-.53-.53zm0 7.414l.53-.53zm1.712-6.957a.75.75 0 0 0 0-1.5zM8.5 2.75h7v-1.5h-7zm7 3.5h-7v1.5h7zm-7 0c-.481 0-.792 0-1.027-.022c-.225-.02-.307-.055-.348-.078l-.75 1.299c.307.177.633.243.962.273c.32.029.71.028 1.163.028zM5.25 4.5c0 .454 0 .844.028 1.163c.03.329.096.655.273.962l1.3-.75c-.024-.04-.059-.123-.079-.348A13 13 0 0 1 6.75 4.5zm1.875 1.65a.75.75 0 0 1-.275-.275l-1.299.75c.198.342.482.626.824.824zM17.25 4.5c0 .481 0 .792-.022 1.027c-.02.225-.055.307-.079.348l1.3.75c.177-.307.243-.633.273-.962c.029-.32.028-.71.028-1.163zM15.5 7.75c.454 0 .844 0 1.163-.028c.329-.03.655-.096.962-.273l-.75-1.3c-.04.024-.123.059-.348.079a13 13 0 0 1-1.027.022zm1.65-1.875a.75.75 0 0 1-.275.275l.75 1.299a2.25 2.25 0 0 0 .824-.824zM15.5 2.75c.481 0 .792 0 1.027.022c.225.02.307.055.348.078l.75-1.299c-.307-.177-.633-.243-.962-.273c-.32-.029-.71-.028-1.163-.028zm3.25 1.75c0-.454 0-.844-.028-1.163c-.03-.329-.096-.655-.273-.962l-1.3.75c.024.04.058.123.079.348c.021.235.022.546.022 1.027zm-1.875-1.65a.75.75 0 0 1 .274.275l1.3-.75a2.25 2.25 0 0 0-.824-.824zM8.5 1.25c-.454 0-.844 0-1.163.028c-.329.03-.655.096-.962.273l.75 1.3c.04-.024.123-.059.348-.079c.235-.021.546-.022 1.027-.022zM6.75 4.5c0-.481 0-.792.022-1.027c.02-.225.055-.307.078-.348l-1.299-.75c-.177.307-.243.633-.273.962c-.029.32-.028.71-.028 1.163zm-.375-2.949a2.25 2.25 0 0 0-.824.824l1.3.75a.75.75 0 0 1 .274-.275zM10.75 20v-4h-1.5v4zm2.5-4v4h1.5v-4zm0 4c0 .493-.002.787-.03.997a.7.7 0 0 1-.043.18l1.06 1.06c.31-.309.422-.684.47-1.04c.045-.334.043-.747.043-1.197zM12 22.75c.45 0 .863.002 1.197-.043c.356-.048.731-.16 1.04-.47l-1.06-1.06l-.003.001l-.01.005a.7.7 0 0 1-.167.037c-.21.028-.504.03-.997.03zm0-8c.493 0 .787.002.997.03a.7.7 0 0 1 .18.043l1.06-1.06c-.309-.31-.684-.422-1.04-.47c-.334-.045-.747-.043-1.197-.043zM14.75 16c0-.45.002-.863-.043-1.197c-.048-.356-.16-.731-.47-1.04l-1.06 1.06l.001.003l.005.01c.009.022.024.07.037.167c.028.21.03.504.03.997zm-4 0c0-.493.002-.787.03-.997a.7.7 0 0 1 .043-.18l-1.06-1.06c-.31.309-.422.684-.47 1.04c-.045.334-.043.747-.043 1.197zM12 13.25c-.45 0-.863-.002-1.197.043c-.356.048-.731.16-1.04.47l1.06 1.06l.003-.001l.01-.005a.7.7 0 0 1 .167-.037c.21-.028.504-.03.997-.03zM9.25 20c0 .45-.002.863.043 1.197c.048.356.16.731.47 1.04l1.06-1.06l-.001-.003l-.005-.01a.7.7 0 0 1-.037-.167c-.028-.21-.03-.504-.03-.997zM12 21.25c-.493 0-.787-.002-.997-.03a.7.7 0 0 1-.18-.043l-1.06 1.06c.309.31.684.422 1.04.47c.334.045.747.043 1.197.043zm0-6.5h.005v-1.5H12z"></svg:path><svg:path fill="currentColor" d="M5.5 3.75a.75.75 0 0 0 0 1.5zm.5 0h-.5v1.5H6zm9.407 7.239l-.111-.742zm4.076-.612l-.11-.741zm2.378-4.61l.698-.274zM20.733 4.64l-.275.698zm.206 5.405l-.352-.663zm.947-1.1l.707.25zm-9.401 2.973l-.569-.49zm-1.23 2.07a.75.75 0 1 0 1.5.025zm4.263-2.256l4.077-.612l-.223-1.483l-4.076.611zm3.527-7.981H18v1.5h1.045zm3.705 3.705c0-.435 0-.797-.019-1.094a2.8 2.8 0 0 0-.172-.868l-1.396.55c.03.073.056.186.071.416c.016.236.016.541.016.996zM19.045 5.25c.455 0 .76 0 .996.016c.23.015.343.042.417.07l.55-1.395a2.8 2.8 0 0 0-.869-.172c-.297-.02-.659-.019-1.094-.019zm3.514.243a2.75 2.75 0 0 0-1.551-1.552l-.55 1.396c.323.127.578.382.705.705zm-2.964 5.626c.708-.106 1.251-.177 1.696-.413l-.704-1.325c-.161.086-.387.13-1.215.255zm1.655-3.664c0 .837-.01 1.067-.071 1.239l1.414.5c.168-.475.157-1.022.157-1.739zm.04 3.251a2.75 2.75 0 0 0 1.303-1.513l-1.414-.5a1.25 1.25 0 0 1-.592.688zm-5.994-.459c-.794.12-1.458.218-1.981.365c-.543.152-1.024.38-1.399.816l1.137.979c.11-.127.277-.242.668-.351c.411-.116.965-.2 1.797-.325zm-2.541 3.765c.018-1.065.116-1.395.298-1.605l-1.137-.98c-.58.675-.644 1.552-.661 2.56z" opacity=".5"></svg:path>`,
})
export class SolarPaintRollerLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaintRollerLinearIcon],svg[solar-paint-roller-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.75 6.799l-.375.65zm-.549-.549l-.65.375zm11.598 0l.65.375zm-.549.549l.375.65zm0-4.598l.375-.65zm.549.549l.65-.375zM6.75 2.201l-.375-.65zm-.549.549l-.65-.375zm7.506 18.957l-.53-.53zm0-7.414l-.53.53zm-3.414 0l-.53-.53zm0 7.414l.53-.53zm5.114-10.718l-.112-.742zm4.076-.612l-.111-.741zm2.378-4.61l.698-.274zM20.733 4.64l-.275.698zm.205 5.405l-.351-.663zm.948-1.1l.707.25zm-9.401 2.973l-.569-.49zM12.005 14v.75h.737l.013-.738zM5.5 3.75a.75.75 0 0 0 0 1.5zm3-1h7v-1.5h-7zm7 3.5h-7v1.5h7zm-7 0c-.481 0-.792 0-1.027-.022c-.225-.02-.307-.055-.348-.078l-.75 1.299c.307.177.633.243.962.273c.32.029.71.028 1.163.028zM5.25 4.5c0 .454 0 .844.028 1.163c.03.329.096.655.273.962l1.3-.75c-.024-.04-.059-.123-.079-.348A13 13 0 0 1 6.75 4.5zm1.875 1.65a.75.75 0 0 1-.275-.275l-1.299.75c.198.342.482.626.824.824zM17.25 4.5c0 .481 0 .792-.022 1.027c-.02.225-.055.307-.079.348l1.3.75c.177-.307.243-.633.273-.962c.029-.32.028-.71.028-1.163zM15.5 7.75c.454 0 .844 0 1.163-.028c.329-.03.655-.096.962-.273l-.75-1.3c-.04.024-.123.059-.348.079a13 13 0 0 1-1.027.022zm1.65-1.875a.75.75 0 0 1-.275.275l.75 1.299a2.25 2.25 0 0 0 .824-.824zM15.5 2.75c.481 0 .792 0 1.027.022c.225.02.307.055.348.078l.75-1.299c-.307-.177-.633-.243-.962-.273c-.32-.029-.71-.028-1.163-.028zm3.25 1.75c0-.454 0-.844-.028-1.163c-.03-.329-.096-.655-.273-.962l-1.3.75c.024.04.058.123.079.348c.021.235.022.546.022 1.027zm-1.875-1.65a.75.75 0 0 1 .274.275l1.3-.75a2.25 2.25 0 0 0-.824-.824zM8.5 1.25c-.454 0-.844 0-1.163.028c-.329.03-.655.096-.962.273l.75 1.3c.04-.024.123-.059.348-.079c.235-.021.546-.022 1.027-.022zM6.75 4.5c0-.481 0-.792.022-1.027c.02-.225.055-.307.078-.348l-1.299-.75c-.177.307-.243.633-.273.962c-.029.32-.028.71-.028 1.163zm-.375-2.949a2.25 2.25 0 0 0-.824.824l1.3.75a.75.75 0 0 1 .274-.275zM10.75 20v-4h-1.5v4zm2.5-4v4h1.5v-4zm0 4c0 .493-.002.787-.03.997a.7.7 0 0 1-.043.18l1.06 1.06c.31-.309.422-.684.47-1.04c.045-.334.043-.747.043-1.197zM12 22.75c.45 0 .863.002 1.197-.043c.356-.048.731-.16 1.04-.47l-1.06-1.06l-.003.001l-.01.005a.7.7 0 0 1-.167.037c-.21.028-.504.03-.997.03zm0-8c.493 0 .787.002.997.03a.7.7 0 0 1 .18.043l1.06-1.06c-.309-.31-.684-.422-1.04-.47c-.334-.045-.747-.043-1.197-.043zM14.75 16c0-.45.002-.863-.043-1.197c-.048-.356-.16-.731-.47-1.04l-1.06 1.06l.001.003l.005.01c.009.022.024.07.037.167c.028.21.03.504.03.997zm-4 0c0-.493.002-.787.03-.997a.7.7 0 0 1 .043-.18l-1.06-1.06c-.31.309-.422.684-.47 1.04c-.045.334-.043.747-.043 1.197zM12 13.25c-.45 0-.863-.002-1.197.043c-.356.048-.731.16-1.04.47l1.06 1.06l.003-.001l.01-.005a.7.7 0 0 1 .167-.037c.21-.028.504-.03.997-.03zM9.25 20c0 .45-.002.863.043 1.197c.048.356.16.731.47 1.04l1.06-1.06l-.001-.003l-.005-.01a.7.7 0 0 1-.037-.167c-.028-.21-.03-.504-.03-.997zM12 21.25c-.493 0-.787-.002-.997-.03a.7.7 0 0 1-.18-.043l-1.06 1.06c.309.31.684.422 1.04.47c.334.045.747.043 1.197.043zm3.518-9.52l4.076-.61l-.222-1.484l-4.077.611zm3.527-7.98H18v1.5h1.045zm3.705 3.705c0-.435 0-.797-.019-1.094a2.8 2.8 0 0 0-.172-.868l-1.396.55c.03.073.056.186.071.416c.016.236.016.541.016.996zM19.045 5.25c.455 0 .76 0 .996.016c.23.015.343.042.417.07l.55-1.395a2.8 2.8 0 0 0-.87-.172c-.296-.02-.658-.019-1.093-.019zm3.514.243a2.75 2.75 0 0 0-1.552-1.552l-.55 1.396c.324.127.58.382.706.705zm-2.965 5.626c.71-.106 1.252-.177 1.696-.413l-.703-1.325c-.162.086-.387.13-1.215.255zm1.656-3.664c0 .837-.01 1.067-.071 1.239l1.414.5c.168-.475.157-1.022.157-1.739zm.04 3.251a2.75 2.75 0 0 0 1.303-1.513l-1.414-.5a1.25 1.25 0 0 1-.592.688zm-5.995-.459c-.793.12-1.457.218-1.98.365c-.543.152-1.024.38-1.399.816l1.137.979c.11-.127.277-.242.668-.351c.41-.116.965-.2 1.797-.325zm-2.54 3.765c.017-1.065.116-1.395.298-1.605l-1.137-.98c-.58.675-.644 1.552-.661 2.56zM12 14.75h.005v-1.5H12zm-6-11h-.5v1.5H6z"></svg:path>`,
})
export class SolarPaintRollerLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaintRollerOutlineIcon],svg[solar-paint-roller-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.468 1.25h7.064c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962q.016.19.022.413h.325c.424 0 .779 0 1.07.019c.303.02.59.062.868.172a2.75 2.75 0 0 1 1.552 1.552c.11.279.152.565.172.868c.019.291.019.646.019 1.07v.144c0 .659.001 1.171-.157 1.618a2.75 2.75 0 0 1-1.303 1.513c-.419.223-.926.298-1.576.395l-.12.018l-4.076.612c-.832.124-1.386.209-1.797.325c-.39.11-.559.224-.668.35c-.13.15-.217.36-.263.854q.22.009.407.033c.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v4.09c0 .433 0 .83-.043 1.152c-.048.356-.16.731-.47 1.04s-.684.422-1.04.47c-.323.043-.72.043-1.152.043h-.09c-.433 0-.83 0-1.152-.043c-.356-.048-.731-.16-1.04-.47s-.422-.684-.47-1.04c-.043-.323-.043-.72-.043-1.152v-4.09c0-.433 0-.83.043-1.152c.048-.356.16-.731.47-1.04s.684-.422 1.04-.47q.22-.028.48-.036c.053-.704.197-1.323.633-1.83c.375-.435.856-.663 1.399-.815c.512-.145 1.16-.242 1.934-.358l4.123-.618c.828-.124 1.053-.169 1.215-.255a1.25 1.25 0 0 0 .592-.687c.06-.172.071-.402.071-1.239c0-.455 0-.76-.016-.996a1.4 1.4 0 0 0-.07-.417a1.25 1.25 0 0 0-.706-.705c-.074-.03-.187-.056-.417-.071a17 17 0 0 0-.996-.016h-.3q-.007.222-.023.413c-.03.329-.096.655-.273.962a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H8.467c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962a7 7 0 0 1-.023-.454a.75.75 0 0 1 0-1.418q.005-.247.023-.454c.03-.329.096-.655.273-.962a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028m3.537 13.5H12c-.493 0-.787.002-.997.03a.7.7 0 0 0-.177.042l-.003.001l-.001.003l-.005.01a.7.7 0 0 0-.037.167c-.028.21-.03.504-.03.997v4c0 .493.002.787.03.997a.7.7 0 0 0 .042.177l.001.003l.003.001l.01.005c.022.009.07.024.167.037c.21.028.504.03.997.03s.787-.002.997-.03a.7.7 0 0 0 .167-.037l.008-.004h.002l.003-.002l.001-.003l.005-.01a.7.7 0 0 0 .037-.167c.028-.21.03-.504.03-.997v-4c0-.493-.002-.787-.03-.997a.7.7 0 0 0-.042-.177l-.001-.003l-.003-.001l-.005-.003l-.005-.002a.7.7 0 0 0-.167-.037c-.21-.028-.502-.03-.992-.03M7.473 2.772c-.225.02-.307.055-.348.078a.75.75 0 0 0-.275.275c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027s0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.275c.04.023.123.058.348.078c.235.021.546.022 1.027.022h7c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.078a.75.75 0 0 0 .274-.275c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027s0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.275c-.04-.023-.123-.058-.348-.078A13 13 0 0 0 15.5 2.75h-7c-.481 0-.792 0-1.027.022m3.35 12.051" clip-rule="evenodd"></svg:path>`,
})
export class SolarPaintRollerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaletteBoldIcon],svg[solar-palette-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 6v12c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C8.1 22 7.4 22 6 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 20.1 2 19.4 2 18V6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2s2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6M7 19.75a.75.75 0 0 0 0-1.5H5a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m19.06 10.614l-5.838 6.09c-.73.761-1.095 1.142-1.408 1.016c-.314-.126-.314-.653-.314-1.708V7.774a2.5 2.5 0 0 1 .73-1.76l1.054-1.055l.43-.33c1.004-.767 1.506-1.15 2.053-1.269a2.5 2.5 0 0 1 1.353.085c.528.184.979.628 1.88 1.514c1 1 1.5 1.5 1.685 2.072a2.5 2.5 0 0 1 .011 1.503c-.176.575-.663 1.077-1.636 2.08M12.79 22h5.11c1.4 0 2.1 0 2.634-.273a2.5 2.5 0 0 0 1.093-1.092c.272-.535.272-1.235.272-2.635s0-2.1-.272-2.635a2.5 2.5 0 0 0-1.093-1.092C20 14 19.3 14 17.9 14h-.22l-5.801 5.798a1.22 1.22 0 0 0-.378.883c0 .713.577 1.319 1.29 1.319"></svg:path>`,
})
export class SolarPaletteBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaletteBoldDuotoneIcon],svg[solar-palette-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 19a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75"></svg:path><svg:path fill="currentColor" d="M10 18V6c0-1.4 0-2.1-.272-2.635a2.5 2.5 0 0 0-1.093-1.093C8.1 2 7.4 2 6 2s-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C2 3.9 2 4.6 2 6v12c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.9 22 4.6 22 6 22s2.1 0 2.635-.273a2.5 2.5 0 0 0 1.093-1.092C10 20.1 10 19.4 10 18" opacity=".4"></svg:path><svg:path fill="currentColor" d="M10 8.243V18c0 .919 0 1.536-.077 2.003l3.299-3.299l5.838-6.09c.973-1.003 1.46-1.505 1.636-2.08a2.5 2.5 0 0 0-.011-1.503C20.5 6.458 20 5.958 19 4.959c-.9-.886-1.352-1.33-1.88-1.514a2.5 2.5 0 0 0-1.353-.085c-.547.118-1.049.502-2.053 1.27L13 5.243zm-1.997 13.68H8v.003z" opacity=".7"></svg:path><svg:path fill="currentColor" d="M15.814 14H17.9c1.4 0 2.1 0 2.635.273a2.5 2.5 0 0 1 1.093 1.092C21.9 15.9 21.9 16.6 21.9 18s0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C20 22 19.3 22 17.9 22H6c.917 0 1.534 0 2-.077v.003l.003-.003c.245-.04.448-.102.632-.195a2.5 2.5 0 0 0 1.093-1.093c.093-.184.155-.387.195-.632l3.299-3.299z"></svg:path>`,
})
export class SolarPaletteBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaletteBrokenIcon],svg[solar-palette-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 8V6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2s2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6v12c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C8.1 22 7.4 22 6 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 20.1 2 19.4 2 18v-6m5 7H5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="m13.314 4.929l-2.142 2.142c-.578.578-.867.867-1.02 1.235C10 8.673 10 9.082 10 9.9v9.656l8.97-8.97c.99-.99 1.486-1.485 1.671-2.056a2.5 2.5 0 0 0 0-1.545c-.185-.57-.68-1.066-1.67-2.056s-1.486-1.485-2.056-1.67a2.5 2.5 0 0 0-1.545 0c-.571.185-1.066.68-2.056 1.67Z"></svg:path><svg:path fill="currentColor" d="M18 22v-.75zm0-8v.75zm4 4h-.75zm-.273 2.635l-.668-.34zm-1.092 1.092l-.34-.668zm1.092-6.362l-.668.34zm-1.092-1.092l-.34.668zM13 22.75a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zm-1.5-6.5H18v-1.5h-2.5zM21.25 18c0 .712 0 1.202-.032 1.58c-.03.371-.085.57-.159.715l1.337.68c.199-.39.28-.809.317-1.272c.038-.454.037-1.015.037-1.703zM18 22.75c.688 0 1.249 0 1.703-.037c.463-.037.882-.118 1.273-.317l-.681-1.337c-.145.074-.344.13-.714.16c-.38.03-.869.031-1.581.031zm3.06-2.456a1.75 1.75 0 0 1-.765.765l.68 1.337a3.25 3.25 0 0 0 1.42-1.42zM22.75 18c0-.688 0-1.249-.037-1.703c-.037-.463-.118-.882-.317-1.273l-1.337.682c.074.144.13.343.16.713c.03.38.031.869.031 1.581zM18 14.75c.712 0 1.202 0 1.58.032c.371.03.57.085.715.159l.68-1.337c-.39-.199-.809-.28-1.272-.317c-.454-.038-1.015-.037-1.703-.037zm4.396.274a3.25 3.25 0 0 0-1.42-1.42l-.681 1.337c.329.167.596.435.764.765zM13 21.25H6v1.5h7zm5 0h-1v1.5h1z"></svg:path></svg:g>`,
})
export class SolarPaletteBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaletteLineDuotoneIcon],svg[solar-palette-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2s2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6v12c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C8.1 22 7.4 22 6 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 20.1 2 19.4 2 18z"></svg:path><svg:path stroke-linecap="round" d="M7 19H5" opacity=".5"></svg:path><svg:path d="m13.314 4.929l-2.142 2.142c-.578.578-.867.867-1.02 1.235C10 8.673 10 9.082 10 9.9v9.656l8.97-8.97c.99-.99 1.486-1.485 1.671-2.056a2.5 2.5 0 0 0 0-1.545c-.185-.57-.68-1.066-1.67-2.056s-1.486-1.485-2.056-1.67a2.5 2.5 0 0 0-1.545 0c-.571.185-1.066.68-2.056 1.67Z"></svg:path><svg:path d="M6 22h12c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 20.1 22 19.4 22 18s0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.092C20.1 14 19.4 14 18 14h-2.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPaletteLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaletteLinearIcon],svg[solar-palette-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2s2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6v12c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C8.1 22 7.4 22 6 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 20.1 2 19.4 2 18z"></svg:path><svg:path stroke-linecap="round" d="M7 19H5"></svg:path><svg:path d="m13.314 4.929l-2.142 2.142c-.578.578-.867.867-1.02 1.235C10 8.673 10 9.082 10 9.9v9.656l8.97-8.97c.99-.99 1.486-1.485 1.671-2.056a2.5 2.5 0 0 0 0-1.545c-.185-.57-.68-1.066-1.67-2.056s-1.486-1.485-2.056-1.67a2.5 2.5 0 0 0-1.545 0c-.571.185-1.066.68-2.056 1.67Z"></svg:path><svg:path d="M6 22h12c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 20.1 22 19.4 22 18s0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.092C20.1 14 19.4 14 18 14h-2.5"></svg:path></svg:g>`,
})
export class SolarPaletteLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaletteOutlineIcon],svg[solar-palette-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.969 1.25h.062c.674 0 1.225 0 1.672.037c.463.037.882.118 1.272.317a3.25 3.25 0 0 1 1.42 1.42c.2.391.28.81.318 1.273c.037.447.037.998.037 1.672v.463l2.056-2.056c.476-.476.865-.865 1.207-1.156c.355-.3.708-.54 1.125-.675a3.25 3.25 0 0 1 2.008 0c.418.136.77.374 1.125.675c.342.29.732.68 1.208 1.156l.044.045c.476.476.866.865 1.156 1.208c.301.354.54.707.675 1.124a3.25 3.25 0 0 1 0 2.009c-.135.417-.374.77-.675 1.124c-.29.342-.68.732-1.156 1.208l-2.156 2.156h.664c.674 0 1.225 0 1.672.037c.463.037.882.118 1.273.317a3.25 3.25 0 0 1 1.42 1.42c.199.391.28.81.317 1.273c.037.447.037.998.037 1.672v.062c0 .674 0 1.225-.037 1.672c-.037.463-.118.882-.317 1.273a3.25 3.25 0 0 1-1.42 1.42c-.391.199-.81.28-1.273.317c-.447.037-.998.037-1.672.037H5.97c-.674 0-1.225 0-1.672-.037c-.463-.037-.882-.118-1.272-.317a3.25 3.25 0 0 1-1.42-1.42c-.2-.391-.28-.81-.318-1.273c-.037-.447-.037-.998-.037-1.672V5.97c0-.674 0-1.224.037-1.672c.037-.463.118-.882.317-1.272a3.25 3.25 0 0 1 1.42-1.42c.391-.2.81-.28 1.273-.318c.448-.037.998-.037 1.672-.037m4.27 20H18c.712 0 1.202 0 1.58-.032c.371-.03.57-.085.715-.159a1.75 1.75 0 0 0 .764-.765c.074-.144.13-.343.16-.713c.03-.38.031-.869.031-1.581s0-1.202-.032-1.58c-.03-.371-.085-.57-.159-.715a1.75 1.75 0 0 0-.765-.764c-.144-.074-.343-.13-.713-.16c-.38-.03-.869-.031-1.581-.031h-2.133l-5.176 5.176a3.1 3.1 0 0 1-.295 1.05a3 3 0 0 1-.157.274m.511-3.504l7.69-7.69c.504-.504.85-.85 1.096-1.14c.24-.284.342-.464.392-.618a1.75 1.75 0 0 0 0-1.081c-.05-.154-.152-.334-.392-.617c-.247-.29-.592-.637-1.096-1.14c-.504-.504-.85-.85-1.14-1.096c-.283-.24-.463-.342-.617-.392a1.75 1.75 0 0 0-1.082 0c-.153.05-.333.151-.617.392c-.29.246-.636.592-1.14 1.095l-2.142 2.142c-.621.622-.775.794-.857.992c-.081.196-.095.426-.095 1.294zm-1.5.295c0 .69-.001 1.168-.032 1.54c-.03.37-.085.57-.159.713a1.75 1.75 0 0 1-.765.765c-.144.074-.343.13-.713.16c-.38.03-.869.031-1.581.031s-1.202 0-1.58-.032c-.371-.03-.57-.085-.714-.159a1.75 1.75 0 0 1-.765-.765c-.074-.144-.13-.343-.16-.713c-.03-.38-.031-.869-.031-1.581V6c0-.712 0-1.202.032-1.58c.03-.371.085-.57.159-.714a1.75 1.75 0 0 1 .765-.765c.144-.074.343-.13.713-.16c.38-.03.869-.031 1.581-.031s1.202 0 1.58.032c.371.03.57.085.714.159c.33.168.597.435.765.765c.074.144.13.343.16.713c.03.38.031.869.031 1.581v12.041m-5 .959a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarPaletteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaletteRoundBoldIcon],svg[solar-palette-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.9 22a4 4 0 1 0 0-8h-.22l-5.802 5.798a1.22 1.22 0 0 0-.378.883c0 .713.577 1.319 1.29 1.319zM13.284 4.959l-1.055 1.055a2.5 2.5 0 0 0-.729 1.76v8.238c0 1.055 0 1.582.313 1.708c.314.126.679-.255 1.409-1.016l5.838-6.09a4.042 4.042 0 0 0-5.776-5.655"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 6v12a4 4 0 0 1-8 0V6a4 4 0 1 1 8 0M6 19a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarPaletteRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaletteRoundBoldDuotoneIcon],svg[solar-palette-round-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" d="M10 6v12a4 4 0 0 1-8 0V6a4 4 0 1 1 8 0" opacity=".4"></svg:path><svg:path fill="currentColor" d="m9.248 20.336l3.974-3.975l5.838-6.09a4.042 4.042 0 0 0-5.776-5.655L10 7.9V18c0 .872-.279 1.679-.752 2.336" opacity=".7"></svg:path><svg:path fill="currentColor" d="m13.222 16.362l-3.974 3.974A4 4 0 0 1 6 22h11.9a4 4 0 1 0 0-8h-2.414z"></svg:path>`,
})
export class SolarPaletteRoundBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaletteRoundBrokenIcon],svg[solar-palette-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 8V6a4 4 0 1 1 8 0v12a4 4 0 0 1-8 0v-6"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="m10 8.243l3.314-3.314a4 4 0 1 1 5.657 5.657L9.306 20.25"></svg:path><svg:path fill="currentColor" d="M18 22v-.75zm0-8v.75zm4 4h-.75zm-9 4.75a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zm-1.5-6.5H18v-1.5h-2.5zM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18zm1.5 0A4.75 4.75 0 0 0 18 13.25v1.5A3.25 3.25 0 0 1 21.25 18zM13 21.25H6v1.5h7zm5 0h-1v1.5h1z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M7 18a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></svg:path></svg:g>`,
})
export class SolarPaletteRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaletteRoundLineDuotoneIcon],svg[solar-palette-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 6a4 4 0 1 1 8 0v12a4 4 0 0 1-8 0z"></svg:path><svg:path d="m10 8.243l3.314-3.314a4 4 0 1 1 5.657 5.657L9.306 20.25"></svg:path><svg:path d="M6 22h12a4 4 0 0 0 0-8h-2.5M7 18a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPaletteRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaletteRoundLinearIcon],svg[solar-palette-round-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 6a4 4 0 1 1 8 0v12a4 4 0 0 1-8 0z"></svg:path><svg:path d="m10 8.243l3.313-3.314a4 4 0 0 1 5.657 5.657L9.306 20.25"></svg:path><svg:path d="M6 22h12a4 4 0 0 0 0-8h-2.5M7 18a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></svg:path></svg:g>`,
})
export class SolarPaletteRoundLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaletteRoundOutlineIcon],svg[solar-palette-round-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 6a4.75 4.75 0 0 1 9.5 0v.432l2.033-2.033a4.75 4.75 0 1 1 6.718 6.717l-2.134 2.134H18a4.75 4.75 0 1 1 0 9.5H6A4.75 4.75 0 0 1 1.25 18zm8.214 15.25H18a3.25 3.25 0 0 0 0-6.5h-2.133l-5.978 5.978a5 5 0 0 1-.425.522m1.286-3.504l7.69-7.69a3.25 3.25 0 1 0-4.596-4.597L10.75 8.553zM6 2.75A3.25 3.25 0 0 0 2.75 6v12a3.25 3.25 0 0 0 6.5 0V6A3.25 3.25 0 0 0 6 2.75m0 15a.25.25 0 1 0 0 .5a.25.25 0 0 0 0-.5M4.25 18a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarPaletteRoundOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPallete2BoldIcon],svg[solar-pallete-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.847 21.934C5.867 21.362 2 17.133 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.157-3.283 4.733-6.086 4.37c-1.618-.209-3.075-.397-3.652.518c-.395.626.032 1.406.555 1.929a1.673 1.673 0 0 1 0 2.366c-.523.523-1.235.836-1.97.751M11.085 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M6.5 13a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m11 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-3-4.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></svg:path>`,
})
export class SolarPallete2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPallete2BoldDuotoneIcon],svg[solar-pallete-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.847 21.934C5.867 21.362 2 17.133 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.157-3.283 4.733-6.086 4.37c-1.618-.209-3.075-.397-3.652.518c-.395.626.032 1.406.555 1.929a1.673 1.673 0 0 1 0 2.366c-.523.523-1.235.836-1.97.751" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.085 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M6.5 13a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m11 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-3-4.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class SolarPallete2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPallete2BrokenIcon],svg[solar-pallete-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M7 3.341A9.93 9.93 0 0 1 12 2c5.523 0 10 4.489 10 10.026c0 8.152-8.161 2.393-9.738 4.9c-.395.628.032 1.41.555 1.935a1.68 1.68 0 0 1 0 2.372c-.523.525-1.235.838-1.97.753C5.867 21.413 2 17.172 2 12.026A10 10 0 0 1 3.345 7"></svg:path><svg:circle cx="17.5" cy="11.5" r="1.5"></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5"></svg:circle><svg:path d="M11.085 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0ZM16 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path></svg:g>`,
})
export class SolarPallete2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPallete2LineDuotoneIcon],svg[solar-pallete-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12.026c0 5.146 3.867 9.387 8.847 9.96c.735.085 1.447-.228 1.97-.753a1.68 1.68 0 0 0 0-2.372c-.523-.525-.95-1.307-.555-1.934c1.576-2.508 9.738 3.251 9.738-4.9C22 6.488 17.523 2 12 2S2 6.489 2 12.026Z"></svg:path><svg:circle cx="17.5" cy="11.5" r="1.5" opacity=".5"></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5" opacity=".5"></svg:circle><svg:path d="M11 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPallete2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPallete2LinearIcon],svg[solar-pallete-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12.026c0 5.146 3.867 9.387 8.847 9.96c.735.085 1.447-.228 1.97-.753a1.68 1.68 0 0 0 0-2.372c-.523-.525-.95-1.307-.555-1.934c1.576-2.508 9.738 3.251 9.738-4.9C22 6.488 17.523 2 12 2S2 6.489 2 12.026Z"></svg:path><svg:circle cx="17.5" cy="11.5" r=".75"></svg:circle><svg:circle cx="6.5" cy="11.5" r=".75"></svg:circle><svg:path d="M10.335 7a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm4.915 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Z"></svg:path></svg:g>`,
})
export class SolarPallete2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPallete2OutlineIcon],svg[solar-pallete-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75c-5.107 0-9.25 4.151-9.25 9.276c0 4.762 3.579 8.685 8.183 9.215c.462.053.957-.14 1.353-.537a.93.93 0 0 0 0-1.314c-.312-.312-.625-.73-.796-1.203c-.175-.485-.219-1.094.137-1.66c.323-.513.807-.788 1.315-.922c.49-.128 1.031-.136 1.552-.104a23 23 0 0 1 1.638.179c.557.072 1.1.139 1.626.164c1.074.051 1.902-.084 2.467-.546c.542-.443 1.025-1.341 1.025-3.272c0-5.125-4.143-9.276-9.25-9.276M1.25 12.026C1.25 6.076 6.061 1.25 12 1.25s10.75 4.826 10.75 10.776c0 2.145-.537 3.584-1.575 4.433c-1.014.829-2.326.939-3.489.883a22 22 0 0 1-1.862-.19c-.52-.067-.99-.128-1.42-.154c-.467-.028-.821-.01-1.08.058c-.24.063-.356.157-.427.27c-.039.062-.066.158.004.351c.074.206.236.442.447.654a2.43 2.43 0 0 1 0 3.432c-.65.652-1.58 1.084-2.587.968c-5.355-.616-9.511-5.175-9.511-10.705M9.585 6.25a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M7.335 7a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0m7.165-.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M12.25 7a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0M6.5 10.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0m13.25-.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarPallete2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPanoramaBoldIcon],svg[solar-panorama-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.21 12.84c0 .778-.625 1.409-1.396 1.409s-1.395-.631-1.395-1.41s.624-1.409 1.395-1.409c.77 0 1.395.631 1.395 1.41"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.448 3.073c-1.06-.332-2.03.514-2.03 1.547v3.626c-1.296.252-2.804.397-4.418.397s-3.122-.145-4.419-.397V4.62c0-1.033-.97-1.879-2.028-1.547c-.982.307-1.831.697-2.45 1.17C2.495 4.705 2 5.338 2 6.13v11.95q.002.323.104.614q.091.262.244.493c.324.491.841.894 1.44 1.223c.609.334 1.351.62 2.185.852C7.64 21.727 9.737 22 12 22c1.9 0 3.682-.192 5.189-.529c1.493-.333 2.773-.82 3.63-1.445c.208-.152.405-.322.576-.511c.36-.398.605-.877.605-1.436V6.13c0-.792-.494-1.425-1.103-1.889c-.619-.472-1.468-.862-2.45-1.169m2.157 5.154l-.081.052c-.823.516-1.952.93-3.254 1.227c-1.524.347-3.335.547-5.27.547s-3.745-.2-5.27-.547c-1.302-.297-2.431-.71-3.254-1.227l-.08-.052v9.162l2.83-2.675l1.276-1.08a2.39 2.39 0 0 1 3.192.105l3.09 2.985a.786.786 0 0 0 .975.078l.215-.145a2.91 2.91 0 0 1 3.532.207l1.9 1.653c.157-.188.199-.337.199-.438z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPanoramaBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPanoramaBoldDuotoneIcon],svg[solar-panorama-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.448 3.073c-1.06-.332-2.03.514-2.03 1.547v3.626c-1.296.252-2.804.397-4.418.397s-3.122-.145-4.419-.397V4.62c0-1.033-.97-1.879-2.028-1.547c-.982.307-1.831.697-2.45 1.17C2.495 4.705 2 5.338 2 6.13v11.95q.002.323.104.614q.091.262.244.493c.324.491.841.894 1.44 1.223c.609.334 1.351.62 2.185.852C7.64 21.727 9.737 22 12 22c1.9 0 3.682-.192 5.189-.529c1.493-.333 2.773-.82 3.63-1.445c.208-.152.405-.322.576-.511c.36-.398.605-.877.605-1.436V6.13c0-.792-.494-1.425-1.103-1.889c-.619-.472-1.468-.862-2.45-1.169m2.157 5.154l-.081.052c-.823.516-1.952.93-3.254 1.227c-1.524.347-3.335.547-5.27.547s-3.745-.2-5.27-.547c-1.302-.297-2.431-.71-3.254-1.227l-.08-.052v9.162l2.83-2.675l1.276-1.08a2.39 2.39 0 0 1 3.192.105l3.09 2.985a.786.786 0 0 0 .975.078l.215-.145a2.91 2.91 0 0 1 3.532.207l1.9 1.653c.157-.188.199-.337.199-.438z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.21 12.84c0 .778-.625 1.41-1.396 1.41s-1.395-.632-1.395-1.41s.625-1.41 1.395-1.41s1.396.632 1.396 1.41" opacity=".5"></svg:path>`,
})
export class SolarPanoramaBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPanoramaBrokenIcon],svg[solar-panorama-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 5.86c0-.795-.79-1.526-2.117-2.107c-1.175-.515-2.383.467-2.383 1.749v3.217M22 5.86c0 1.196-1.789 2.248-4.5 2.86M22 5.86V9M2 5.86c0-.794.79-1.525 2.117-2.106C5.292 3.238 6.5 4.22 6.5 5.502v3.217M2 5.86v12.717C2 20.467 6.477 22 12 22s10-1.533 10-3.424V13M2 5.86c0 1.195 1.789 2.247 4.5 2.86m0 0c1.578.356 3.468.563 5.5.563s3.922-.207 5.5-.564"></svg:path><svg:path d="M19.5 13a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke-linecap="round" d="m21 20l-2.496-2.149a2.405 2.405 0 0 0-2.889-.166l-.23.155a1.6 1.6 0 0 1-1.986-.164l-3.32-3.177a1.84 1.84 0 0 0-2.433-.078L6.29 15.557L2.5 19.104"></svg:path></svg:g>`,
})
export class SolarPanoramaBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPanoramaLineDuotoneIcon],svg[solar-panorama-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 5.86c0-.795-.79-1.526-2.117-2.107c-1.175-.515-2.383.467-2.383 1.749v3.217M22 5.86v12.717C22 20.467 17.523 22 12 22S2 20.467 2 18.576V5.86m20 0c0 1.195-1.789 2.247-4.5 2.86M2 5.86c0-.795.79-1.526 2.117-2.107C5.292 3.238 6.5 4.22 6.5 5.502v3.217M2 5.86c0 1.196 1.789 2.248 4.5 2.86m0 0c1.578.357 3.468.564 5.5.564s3.922-.207 5.5-.564"></svg:path><svg:path d="M19.5 13a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m21 20l-2.496-2.149a2.405 2.405 0 0 0-2.889-.166l-.23.155a1.6 1.6 0 0 1-1.986-.164l-3.32-3.177a1.84 1.84 0 0 0-2.433-.078L6.29 15.557L2.5 19.104" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPanoramaLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPanoramaLinearIcon],svg[solar-panorama-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 5.86c0-.795-.79-1.526-2.117-2.107c-1.175-.515-2.383.467-2.383 1.749v3.217M22 5.86v12.717C22 20.467 17.523 22 12 22S2 20.467 2 18.576V5.86m20 0c0 1.195-1.789 2.247-4.5 2.86M2 5.86c0-.795.79-1.526 2.117-2.107C5.292 3.238 6.5 4.22 6.5 5.502v3.217M2 5.86c0 1.196 1.789 2.248 4.5 2.86m0 0c1.578.357 3.468.564 5.5.564s3.922-.207 5.5-.564"></svg:path><svg:path d="M19.5 13a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke-linecap="round" d="m21 20l-2.496-2.149a2.405 2.405 0 0 0-2.889-.166l-.23.155a1.6 1.6 0 0 1-1.986-.164l-3.32-3.177a1.84 1.84 0 0 0-2.433-.078L6.29 15.557L2.5 19.104"></svg:path></svg:g>`,
})
export class SolarPanoramaLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPanoramaOutlineIcon],svg[solar-panorama-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.797 3.357a2.34 2.34 0 0 1 2.387-.291c.71.311 1.328.683 1.779 1.124c.453.442.787 1.005.787 1.67v12.716c0 .793-.47 1.436-1.064 1.916c-.6.486-1.422.89-2.372 1.215c-1.907.653-4.493 1.043-7.314 1.043s-5.407-.39-7.314-1.043c-.95-.325-1.772-.73-2.372-1.215c-.594-.48-1.064-1.123-1.064-1.916V5.86c0-.665.334-1.228.787-1.67c.451-.44 1.069-.813 1.78-1.124a2.34 2.34 0 0 1 2.386.29A2.7 2.7 0 0 1 7.25 5.503V8.11c1.394.268 3.015.424 4.75.424s3.356-.156 4.75-.424V5.502c0-.877.413-1.663 1.047-2.145m.453 4.396c.884-.256 1.601-.558 2.12-.881c.723-.45.88-.816.88-1.012c0-.13-.061-.33-.335-.597c-.276-.27-.717-.553-1.333-.823a.84.84 0 0 0-.877.11a1.2 1.2 0 0 0-.455.952zm3 .337l-.087.055c-.884.55-2.098.99-3.498 1.306c-1.639.37-3.585.583-5.665.583S7.974 9.82 6.335 9.45c-1.4-.316-2.614-.756-3.498-1.306L2.75 8.09v9.753l3.043-2.848l1.372-1.149a2.59 2.59 0 0 1 3.432.111l3.32 3.177a.85.85 0 0 0 1.049.084l.23-.155a3.155 3.155 0 0 1 3.798.22l2.043 1.76c.17-.202.213-.36.213-.467zm-1.495 11.828l-1.74-1.498a1.655 1.655 0 0 0-1.981-.112l-.231.155a2.35 2.35 0 0 1-2.922-.245L9.56 15.04a1.09 1.09 0 0 0-1.432-.044l-1.34 1.121l-3.475 3.252c.413.319 1.037.636 1.859.918c1.712.586 4.126.962 6.828.962s5.116-.376 6.828-.962q.517-.177.927-.37M2.75 5.86c0 .196.157.562.88 1.012c.519.323 1.236.625 2.12.881v-2.25c0-.406-.191-.751-.455-.952a.84.84 0 0 0-.877-.111c-.616.27-1.057.554-1.333.823c-.274.267-.335.467-.335.597M18 12.25a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarPanoramaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperBinBoldIcon],svg[solar-paper-bin-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.21 3.042c-.463.539-.623 1.227-.603 2.208h18.787c.02-.981-.14-1.67-.604-2.208C19.892 2 18.272 2 15.033 2H8.967C5.727 2 4.108 2 3.21 3.042M3.034 8.89a85 85 0 0 1-.304-2.14h.96L4.94 8L3.165 9.773zm.566 3.77l.349 2.33l.99-.99zm.625 4.175l.009.055q.111.753.21 1.36H6.69L7.94 17L6 15.06zm7.085 1.415h1.38L13.94 17L12 15.06L10.06 17zm6 0h2.246q.099-.607.21-1.36l.009-.055L18 15.061L16.06 17zm2.742-3.26l.35-2.33L19.06 14zm.782-5.217l.133-.883c.121-.81.227-1.518.304-2.14h-.96L19.06 8zM15.69 6.75h-1.38L13.06 8L15 9.94L16.94 8zm-6 0H8.31L7.06 8L9 9.94L10.94 8zm-4.932 13c.196.686.451 1.165.868 1.523C6.47 22 7.702 22 10.167 22h3.666c2.465 0 3.697 0 4.541-.727c.417-.358.672-.837.868-1.523zM4.06 11L6 9.06L7.94 11L6 12.94zm3 3L9 12.06L10.94 14L9 15.94zM15 15.94L13.06 14L15 12.06L16.94 14zm-3-3L13.94 11L12 9.06L10.06 11zm6 0L16.06 11L18 9.06L19.94 11z"></svg:path>`,
})
export class SolarPaperBinBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperBinBoldDuotoneIcon],svg[solar-paper-bin-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.034 8.89c-.48-3.204-.72-4.805.177-5.848C4.109 2 5.728 2 8.968 2h6.066c3.239 0 4.859 0 5.756 1.042s.658 2.644.177 5.848l-1.2 8c-.366 2.438-.548 3.656-1.392 4.383S16.298 22 13.834 22h-3.666c-2.465 0-3.698 0-4.541-.727S4.6 19.328 4.234 16.89z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m3.517 12.115l-.29-1.933l1.845-2.05L3.689 6.75h-.96a15 15 0 0 1-.123-1.5h18.788c-.01.437-.054.933-.124 1.5h-.96l-1.382 1.382l1.845 2.05l-.29 1.933l-1.6 1.707l1.168 1.169l-.276 1.845l-1.92-1.92l-1.876 2.003l1.332 1.331h2.245c-.098.59-.195 1.083-.314 1.5H4.758a14 14 0 0 1-.314-1.5h2.245l1.332-1.331l-1.877-2.002l-1.919 1.918l-.276-1.844l1.168-1.17zm2.56-5.099L5.81 6.75h.506zm1.062 1.062L8.334 6.75h1.355L10.94 8L9 9.94zm4.86-1.139l-.189-.189h.38zM13.06 8l1.25-1.25h1.356l1.195 1.328L15 9.94zm4.863-.984l-.24-.266h.506zM16.061 11l1.805-1.805l1.616 1.795l-1.66 1.77zM15 12.06l1.795 1.795l-1.877 2.002L13.06 14zm-3 3l1.892 1.892l-1.217 1.298h-1.35l-1.217-1.298zm3.19 3.19h-.459l.222-.236zm-6.143-.236l.222.236H8.81zM10.939 14l-1.857 1.857l-1.877-2.001L9 12.06zm-3-3l-1.76 1.76l-1.66-1.77l1.615-1.795zM12 12.94L10.06 11L12 9.06L13.94 11z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPaperBinBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperBinBrokenIcon],svg[solar-paper-bin-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M18 2.052c1.368.09 2.223.332 2.79.99c.897 1.043.657 2.644.176 5.848l-1.2 8c-.365 2.438-.548 3.656-1.392 4.383S16.298 22 13.833 22h-3.666c-2.465 0-3.697 0-4.541-.727s-1.027-1.945-1.393-4.383l-1.2-8c-.48-3.204-.72-4.805.177-5.848C4.108 2 5.728 2 8.967 2H14m7 4H3m16 13H5"></svg:path><svg:path stroke-linejoin="round" d="m8 6l-4.5 5l7.5 8m3-13L4 16M20 6L7 19m6 0l7.5-8L16 6m-6 0l10 10M4 6l13 13"></svg:path></svg:g>`,
})
export class SolarPaperBinBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperBinLineDuotoneIcon],svg[solar-paper-bin-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.033 8.89c-.48-3.204-.72-4.805.177-5.848C4.108 2 5.728 2 8.967 2h6.066c3.24 0 4.859 0 5.757 1.042s.657 2.644.176 5.848l-1.2 8c-.365 2.438-.548 3.656-1.392 4.383S16.298 22 13.833 22h-3.666c-2.465 0-3.697 0-4.541-.727s-1.027-1.945-1.393-4.383z"></svg:path><svg:path stroke-linecap="round" d="M21 6H3"></svg:path><svg:path stroke-linejoin="round" d="m8 6l-4.5 5l7.5 8m3-13L4 16M20 6L7 19m6 0l7.5-8L16 6m-6 0l10 10M4 6l13 13" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M19 19H5"></svg:path></svg:g>`,
})
export class SolarPaperBinLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperBinLinearIcon],svg[solar-paper-bin-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.034 8.89c-.48-3.204-.721-4.805.176-5.848C4.108 2 5.728 2 8.967 2h6.066c3.24 0 4.86 0 5.757 1.042s.657 2.644.177 5.848l-1.2 8c-.366 2.438-.549 3.656-1.393 4.383S16.298 22 13.833 22h-3.666c-2.465 0-3.697 0-4.541-.727s-1.027-1.945-1.392-4.383z"></svg:path><svg:path stroke-linejoin="round" d="m8 6l-4.5 5l7.5 8m3-13L4 16M20 6L7 19m6 0l7.5-8L16 6m-6 0l10 10M4 6l13 13"></svg:path><svg:path stroke-linecap="round" d="M21 6H3m16 13H5"></svg:path></svg:g>`,
})
export class SolarPaperBinLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperBinOutlineIcon],svg[solar-paper-bin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.092 1.25H8.908c-1.57 0-2.828 0-3.802.138c-1.008.142-1.846.448-2.464 1.165s-.795 1.591-.787 2.61c.009.983.195 2.228.428 3.78L3.5 17.05c.177 1.177.32 2.13.53 2.875c.218.777.531 1.42 1.108 1.916c.576.496 1.258.71 2.058.811c.769.097 1.732.097 2.922.097h3.766c1.19 0 2.154 0 2.922-.097c.8-.1 1.483-.315 2.059-.811s.89-1.14 1.108-1.916c.21-.745.352-1.698.529-2.875l1.216-8.108c.233-1.552.42-2.797.428-3.78c.009-1.019-.17-1.893-.787-2.61s-1.456-1.023-2.463-1.165c-.975-.138-2.233-.138-3.803-.138M3.78 3.532c.28-.325.7-.54 1.537-.66c.857-.12 2.009-.122 3.651-.122h6.066c1.643 0 2.794.002 3.652.123c.836.118 1.257.334 1.537.659s.43.773.423 1.617l-.002.101H3.357l-.002-.1c-.007-.845.144-1.293.424-1.618m1.41 3.218H3.485c.052.409.117.861.191 1.366l.074.073zM4.05 10.61l.619 4.124l1.707-1.797zm1.107 7.35l.048.29h.194zm1.838 1.79h11.463c-.159.479-.34.754-.573.955c-.268.23-.624.38-1.267.46c-.664.084-1.533.085-2.785.085h-3.666c-1.252 0-2.12-.001-2.785-.085c-.643-.08-.999-.23-1.267-.46c-.232-.2-.414-.476-.572-.955zm8.718-1.5h2.476l-1.287-1.288zm3.288-1.31l.024-.161l.379-2.527l-1.484 1.607zm.855-5.702l.369-2.46c.095-.631.178-1.19.245-1.688L18.16 9.4zM18.689 6.75h-2.976l1.429 1.548zm-6.436 0H8.811l1.765 1.765zm-.563 11.5H9.31l1.19-1.19zm-4.28-6.401L4.81 9.25L7 7.06l2.543 2.543zm1.06 1.06l2.134-2.245l2.086 2.086l-2.19 2.19zM11.56 16l2.19-2.19l2.09 2.09l-2.101 2.278zm3.25-3.25l2.048 2.048L18.98 12.5l-1.881-2.038zm-1.06-1.06l2.33-2.33l-2.088-2.263l-2.355 2.48zm-6.313 2.308L9.439 16l-2.161 2.162l-1.774-2.13z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPaperBinOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclip2BoldIcon],svg[solar-paperclip-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.244 1.955c1.7-.94 3.79-.94 5.49 0c.63.348 1.218.91 2.173 1.825l.093.09l.098.093c.95.91 1.54 1.475 1.906 2.081a5.14 5.14 0 0 1 0 5.337c-.366.607-.955 1.17-1.906 2.08l-.098.095l-7.457 7.14c-.53.506-.96.92-1.34 1.226c-.393.316-.78.561-1.235.692a3.5 3.5 0 0 1-1.937 0c-.454-.13-.841-.376-1.234-.692c-.38-.307-.811-.72-1.34-1.226l-.048-.046c-.529-.507-.96-.92-1.28-1.283c-.33-.376-.592-.753-.733-1.201a3.2 3.2 0 0 1 0-1.907c.14-.448.402-.825.733-1.2c.32-.364.751-.777 1.28-1.284l7.35-7.038l.079-.075c.369-.354.68-.654 1.041-.82a2.4 2.4 0 0 1 2.007 0c.36.166.672.466 1.041.82l.079.075l.08.078c.367.35.683.651.86 1.003a2.21 2.21 0 0 1 0 1.994a2.3 2.3 0 0 1-.391.538c-.142.152-.323.326-.535.529l-7.394 7.08a.75.75 0 0 1-1.038-1.083l7.38-7.067c.23-.22.38-.364.488-.48a1 1 0 0 0 .15-.191a.71.71 0 0 0 0-.646c-.044-.088-.143-.198-.638-.671c-.492-.471-.61-.57-.71-.617a.9.9 0 0 0-.75 0c-.101.047-.22.146-.711.617L5.47 14.836c-.558.535-.943.904-1.215 1.213c-.267.304-.376.496-.428.66a1.7 1.7 0 0 0 0 1.008c.052.163.16.355.428.659c.272.31.657.678 1.215 1.213c.56.535.945.904 1.269 1.165c.316.255.523.365.707.418c.361.104.747.104 1.108 0c.184-.053.391-.163.707-.418c.324-.261.71-.63 1.269-1.165l7.433-7.117c1.08-1.034 1.507-1.453 1.756-1.866a3.65 3.65 0 0 0 0-3.787c-.249-.413-.676-.832-1.756-1.866c-1.079-1.032-1.518-1.444-1.954-1.685a4.2 4.2 0 0 0-4.039 0c-.437.24-.876.653-1.954 1.685l-5.99 5.735A.75.75 0 0 1 2.99 9.605L8.98 3.87l.093-.09c.955-.914 1.543-1.477 2.172-1.825" clip-rule="evenodd"></svg:path>`,
})
export class SolarPaperclip2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclip2BoldDuotoneIcon],svg[solar-paperclip-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.244 1.955c1.7-.94 3.79-.94 5.49 0c.63.348 1.218.91 2.172 1.825l.094.09a.75.75 0 1 1-1.037 1.083c-1.079-1.032-1.518-1.444-1.954-1.685a4.2 4.2 0 0 0-4.04 0c-.436.24-.875.653-1.953 1.685l-5.99 5.735A.75.75 0 0 1 2.99 9.605L8.98 3.87l.093-.09c.955-.914 1.543-1.477 2.172-1.825m3.701 4.805a.75.75 0 0 1 1.06-.023l.081.078c.367.35.683.651.86 1.003a2.21 2.21 0 0 1 0 1.994c-.177.352-.493.653-.86 1.004l-.08.077l-7.38 7.066a.75.75 0 0 1-1.038-1.083l7.38-7.067c.495-.473.594-.583.638-.671a.71.71 0 0 0 0-.646c-.044-.088-.143-.198-.638-.671a.75.75 0 0 1-.023-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.963 4.954c1.08 1.034 1.507 1.452 1.756 1.865a3.65 3.65 0 0 1 0 3.788c-.249.413-.676.831-1.756 1.866L10.53 19.59c-.56.535-.945.903-1.269 1.164c-.316.255-.523.365-.707.418a2 2 0 0 1-1.108 0c-.184-.053-.391-.163-.707-.418c-.324-.261-.71-.63-1.269-1.164c-.558-.535-.943-.904-1.215-1.214c-.267-.303-.376-.495-.428-.659a1.7 1.7 0 0 1 0-1.009c.052-.163.16-.355.428-.658c.272-.31.657-.679 1.215-1.214l7.327-7.015c.492-.471.61-.57.71-.616a.9.9 0 0 1 .75 0c.101.046.22.145.711.616a.75.75 0 0 1 1.02-1.1l-.06-.058c-.37-.355-.682-.654-1.042-.82a2.4 2.4 0 0 0-2.007 0c-.36.166-.672.465-1.041.82l-7.429 7.113c-.529.506-.96.92-1.28 1.283c-.33.376-.592.752-.733 1.2a3.2 3.2 0 0 0 0 1.907c.14.449.402.825.733 1.2c.32.365.751.778 1.28 1.284l.048.046c.529.507.96.92 1.34 1.226c.393.317.78.561 1.234.692a3.5 3.5 0 0 0 1.937 0c.455-.13.842-.375 1.235-.692c.38-.306.81-.72 1.34-1.226l7.555-7.234c.95-.91 1.54-1.474 1.906-2.08a5.14 5.14 0 0 0 0-5.337c-.366-.607-.955-1.171-1.906-2.081l-.08-.077a.75.75 0 0 1-1.055 1.067" opacity=".5"></svg:path>`,
})
export class SolarPaperclip2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclip2BrokenIcon],svg[solar-paperclip-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18.482 13.014c1.044-1 1.566-1.5 1.88-2.02a4.4 4.4 0 0 0 0-4.562c-.314-.52-.836-1.02-1.88-2.02s-1.567-1.5-2.11-1.8a4.95 4.95 0 0 0-4.765 0c-.543.3-1.065.8-2.11 1.8m-1.39 13.005l7.38-7.066c.448-.429.672-.643.789-.876c.21-.417.21-.903 0-1.32c-.117-.233-.341-.447-.79-.876c-.447-.43-.671-.644-.915-.756c-.435-.2-.942-.2-1.378 0c-.243.112-.467.327-.915.756l-7.326 7.015c-1.099 1.052-1.648 1.578-1.84 2.19c-.15.475-.15.982 0 1.457c.192.612.741 1.138 1.84 2.19S6.6 21.71 7.239 21.893a2.76 2.76 0 0 0 1.522 0c.639-.184 1.188-.71 2.287-1.762l3.717-3.558M3.508 10.146L6.503 7.28"></svg:path>`,
})
export class SolarPaperclip2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclip2LineDuotoneIcon],svg[solar-paperclip-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m8.107 17.417l7.38-7.066c.448-.429.672-.643.789-.876c.21-.417.21-.903 0-1.32c-.117-.233-.341-.447-.79-.876M3.509 10.146l5.99-5.735c1.044-1 1.566-1.5 2.109-1.8a4.95 4.95 0 0 1 4.765 0c.543.3 1.065.8 2.11 1.8"></svg:path><svg:path fill="currentColor" d="m18.482 13.014l-.52-.541zm-7.434 7.118l-.518-.542zm-6.096-5.838l-.519-.541zm7.326-7.014l-.519-.542zm2.294-.756l-.314.681zm-1.379 0l-.314-.681zM4.952 20.132l-.519.541zm-1.84-2.19l.715-.224zm0-1.458l-.716-.224zm5.65 5.41l.206.72zm-1.523 0l.207-.721zM19 3.87a.75.75 0 1 0-1.037 1.084zm1.362 2.562l.642-.387zm0 4.562l.642.388zm-2.4 1.479L10.53 19.59l1.037 1.084L19 13.556zM5.47 14.836l7.327-7.015l-1.038-1.083l-7.326 7.015zm10.536-8.098c-.405-.387-.735-.717-1.12-.895l-.628 1.362c.1.046.218.145.71.616zm-3.21 1.083c.493-.47.61-.57.711-.616l-.628-1.362c-.385.178-.715.508-1.12.895zm2.09-1.978a2.4 2.4 0 0 0-2.007 0l.628 1.362a.9.9 0 0 1 .75 0zM5.47 19.59c-.558-.535-.943-.904-1.215-1.214c-.267-.303-.376-.495-.428-.658l-1.43.448c.14.449.401.826.732 1.201c.324.37.764.79 1.304 1.306zm-1.037-5.837c-.54.517-.98.937-1.304 1.306c-.33.376-.592.752-.733 1.2l1.431.45c.052-.163.16-.356.428-.66c.272-.309.657-.678 1.215-1.213zm-.606 3.965a1.7 1.7 0 0 1 0-1.01l-1.43-.448a3.2 3.2 0 0 0 0 1.906zm6.703 1.872c-.56.535-.945.903-1.269 1.165c-.316.254-.523.365-.707.418l.414 1.441c.455-.13.842-.375 1.235-.692c.385-.31.824-.731 1.364-1.248zm-6.097 1.084c.54.517.979.937 1.364 1.248c.393.317.78.562 1.234.692l.415-1.441c-.184-.053-.391-.164-.707-.418c-.324-.262-.71-.63-1.269-1.165zm4.121.499a2 2 0 0 1-1.108 0l-.415 1.441a3.5 3.5 0 0 0 1.937 0zm9.409-16.22c1.08 1.035 1.507 1.453 1.756 1.867l1.285-.775c-.378-.627-.995-1.209-2.004-2.175zM19 13.557c1.009-.966 1.626-1.547 2.004-2.174l-1.285-.775c-.249.413-.676.832-1.756 1.866zm.72-6.736a3.65 3.65 0 0 1 0 3.787l1.284.775a5.14 5.14 0 0 0 0-5.337z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPaperclip2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclip2LinearIcon],svg[solar-paperclip-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m8.107 17.417l7.38-7.066c.448-.429.672-.643.789-.876c.21-.417.21-.903 0-1.32c-.117-.233-.341-.447-.79-.876c-.447-.43-.671-.644-.915-.756c-.435-.2-.942-.2-1.378 0c-.243.112-.467.327-.915.756l-7.326 7.015c-1.099 1.052-1.648 1.578-1.84 2.19c-.15.475-.15.982 0 1.457c.192.612.741 1.138 1.84 2.19S6.6 21.71 7.239 21.893a2.76 2.76 0 0 0 1.522 0c.639-.184 1.188-.71 2.287-1.762l7.434-7.117c1.044-1 1.566-1.5 1.88-2.02a4.4 4.4 0 0 0 0-4.562c-.314-.52-.836-1.02-1.88-2.02s-1.567-1.5-2.11-1.8a4.95 4.95 0 0 0-4.765 0c-.543.3-1.065.8-2.11 1.8l-5.99 5.734"></svg:path>`,
})
export class SolarPaperclip2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclip2OutlineIcon],svg[solar-paperclip-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.244 1.955c1.7-.94 3.79-.94 5.49 0c.63.348 1.218.91 2.173 1.825l.093.09l.098.093c.95.91 1.54 1.475 1.906 2.081a5.14 5.14 0 0 1 0 5.337c-.366.607-.955 1.17-1.906 2.08l-.098.095l-7.457 7.14c-.53.506-.96.92-1.34 1.226c-.393.316-.78.561-1.235.692a3.5 3.5 0 0 1-1.937 0c-.454-.13-.841-.376-1.234-.692c-.38-.307-.811-.72-1.34-1.226l-.048-.046c-.529-.507-.96-.92-1.28-1.283c-.33-.376-.592-.753-.733-1.201a3.2 3.2 0 0 1 0-1.907c.14-.448.402-.825.733-1.2c.32-.364.751-.777 1.28-1.284l7.35-7.038l.079-.075c.369-.354.68-.654 1.041-.82a2.4 2.4 0 0 1 2.007 0c.36.166.672.466 1.041.82l.079.075l.08.078c.367.35.683.651.86 1.003a2.21 2.21 0 0 1 0 1.994a2.3 2.3 0 0 1-.391.538c-.142.152-.323.326-.535.529l-7.394 7.08a.75.75 0 0 1-1.038-1.083l7.38-7.067c.23-.22.38-.364.488-.48a1 1 0 0 0 .15-.191a.71.71 0 0 0 0-.646c-.044-.088-.143-.198-.638-.671c-.492-.471-.61-.57-.71-.617a.9.9 0 0 0-.75 0c-.101.047-.22.146-.711.617L5.47 14.836c-.558.535-.943.904-1.215 1.213c-.267.304-.376.496-.428.66a1.7 1.7 0 0 0 0 1.008c.052.163.16.355.428.659c.272.31.657.678 1.215 1.213c.56.535.945.904 1.269 1.165c.316.255.523.365.707.418c.361.104.747.104 1.108 0c.184-.053.391-.163.707-.418c.324-.261.71-.63 1.269-1.165l7.433-7.117c1.08-1.034 1.507-1.453 1.756-1.866a3.65 3.65 0 0 0 0-3.787c-.249-.413-.676-.832-1.756-1.866c-1.079-1.032-1.518-1.444-1.954-1.685a4.2 4.2 0 0 0-4.039 0c-.437.24-.876.653-1.954 1.685l-5.99 5.735A.75.75 0 0 1 2.99 9.605L8.98 3.87l.093-.09c.955-.914 1.543-1.477 2.172-1.825" clip-rule="evenodd"></svg:path>`,
})
export class SolarPaperclip2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipBoldIcon],svg[solar-paperclip-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.886 3.363c2.942-2.817 7.7-2.817 10.643 0c2.961 2.834 2.961 7.444 0 10.279l-7.948 7.608c-2.09 2-5.466 2-7.556 0a5.03 5.03 0 0 1 0-7.324l7.834-7.498a3.253 3.253 0 0 1 4.468 0a3 3 0 0 1 0 4.367l-7.89 7.554a.75.75 0 1 1-1.038-1.084l7.89-7.553a1.503 1.503 0 0 0 0-2.2a1.753 1.753 0 0 0-2.393 0L5.062 15.01a3.53 3.53 0 0 0 0 5.156c1.51 1.445 3.972 1.445 5.482 0l7.948-7.608c2.344-2.244 2.344-5.868 0-8.112c-2.363-2.261-6.206-2.261-8.57 0l-6.403 6.13A.75.75 0 0 1 2.48 9.493z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPaperclipBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipBoldDuotoneIcon],svg[solar-paperclip-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.886 3.363c2.942-2.817 7.7-2.817 10.643 0a.75.75 0 0 1-1.037 1.083c-2.363-2.261-6.206-2.261-8.57 0l-6.403 6.13A.75.75 0 0 1 2.48 9.493zm6.38 3.088a.75.75 0 0 1 1.061-.023a3 3 0 0 1 0 4.367l-7.89 7.554a.75.75 0 1 1-1.038-1.084l7.89-7.553a1.503 1.503 0 0 0 0-2.2a.75.75 0 0 1-.022-1.061" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18.491 4.446c2.345 2.244 2.345 5.868 0 8.112l-7.948 7.608c-1.51 1.445-3.971 1.445-5.481 0a3.53 3.53 0 0 1 0-5.156l7.834-7.499a1.753 1.753 0 0 1 2.393 0a.75.75 0 0 1 1.022-1.099a3.253 3.253 0 0 0-4.453.015l-7.833 7.499a5.03 5.03 0 0 0 0 7.323c2.09 2 5.466 2 7.556 0l7.948-7.608c2.956-2.83 2.96-7.428.015-10.264a.75.75 0 0 1-1.053 1.069" opacity=".5"></svg:path>`,
})
export class SolarPaperclipBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipBrokenIcon],svg[solar-paperclip-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.01 13.1c2.653-2.54 2.653-6.656 0-9.196s-6.953-2.539-9.606 0M7.918 17.807l7.89-7.553a2.253 2.253 0 0 0 0-3.284a2.503 2.503 0 0 0-3.43 0l-7.834 7.498a4.28 4.28 0 0 0 0 6.24c1.8 1.723 4.718 1.723 6.518 0l3.974-3.804M3 10.034L6.202 6.97"></svg:path>`,
})
export class SolarPaperclipBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipLineDuotoneIcon],svg[solar-paperclip-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m7.918 17.807l7.89-7.553a2.253 2.253 0 0 0 0-3.284M3 10.035l6.404-6.13c2.653-2.54 6.954-2.54 9.607 0"></svg:path><svg:path fill="currentColor" d="m19.01 13.1l.52.541zm-7.948 7.608l-.518-.542zm-6.518-6.24l.519.542zm7.834-7.499l-.519-.541zm7.151-3.607a.75.75 0 1 0-1.037 1.084zm-1.037 9.196l-7.948 7.608l1.037 1.083l7.948-7.608zM5.062 15.01l7.834-7.499l-1.037-1.083l-7.834 7.498zm11.265-8.582a3.253 3.253 0 0 0-4.468 0l1.037 1.083a1.753 1.753 0 0 1 2.394 0zM5.062 20.166a3.53 3.53 0 0 1 0-5.156l-1.037-1.084a5.03 5.03 0 0 0 0 7.323zm5.482 0c-1.51 1.445-3.971 1.445-5.482 0l-1.037 1.083c2.09 2.001 5.466 2.001 7.556 0zm7.948-15.72c2.344 2.244 2.344 5.868 0 8.112l1.037 1.083c2.961-2.834 2.961-7.444 0-10.278z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPaperclipLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipLinearIcon],svg[solar-paperclip-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m7.918 17.807l7.89-7.553a2.253 2.253 0 0 0 0-3.284a2.503 2.503 0 0 0-3.43 0l-7.834 7.498a4.28 4.28 0 0 0 0 6.24c1.8 1.723 4.718 1.723 6.518 0l7.949-7.608c2.652-2.54 2.652-6.656 0-9.196s-6.954-2.539-9.607 0L3 10.034"></svg:path>`,
})
export class SolarPaperclipLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipOutlineIcon],svg[solar-paperclip-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.886 3.363c2.942-2.817 7.7-2.817 10.643 0c2.961 2.834 2.961 7.444 0 10.279l-7.948 7.608c-2.09 2-5.466 2-7.556 0a5.03 5.03 0 0 1 0-7.324l7.834-7.498a3.253 3.253 0 0 1 4.468 0a3 3 0 0 1 0 4.367l-7.89 7.554a.75.75 0 1 1-1.038-1.084l7.89-7.553a1.503 1.503 0 0 0 0-2.2a1.753 1.753 0 0 0-2.393 0L5.062 15.01a3.53 3.53 0 0 0 0 5.156c1.51 1.445 3.972 1.445 5.482 0l7.948-7.608c2.344-2.244 2.344-5.868 0-8.112c-2.363-2.261-6.206-2.261-8.57 0l-6.403 6.13A.75.75 0 0 1 2.48 9.493z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPaperclipOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipRounded2BoldIcon],svg[solar-paperclip-rounded-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2M8.964 6.863c2.238-2.15 5.856-2.15 8.094 0a5.41 5.41 0 0 1 0 7.858l-2.204 2.118a3.317 3.317 0 0 1-4.567 0a3.08 3.08 0 0 1 0-4.47l1.764-1.694a.75.75 0 1 1 1.039 1.081l-1.764 1.695a1.58 1.58 0 0 0 0 2.306a1.82 1.82 0 0 0 2.488 0l2.205-2.117a3.91 3.91 0 0 0 0-5.696c-1.658-1.592-4.358-1.592-6.016 0l-2.205 2.118a3.327 3.327 0 0 0 0 4.848a.75.75 0 0 1-1.039 1.082a4.827 4.827 0 0 1 0-7.012z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPaperclipRounded2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipRounded2BoldDuotoneIcon],svg[solar-paperclip-rounded-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 3.464C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.964 6.863c2.238-2.15 5.856-2.15 8.094 0a5.41 5.41 0 0 1 0 7.858l-2.204 2.118a3.317 3.317 0 0 1-4.567 0a3.08 3.08 0 0 1 0-4.47l1.764-1.694a.75.75 0 1 1 1.039 1.081l-1.764 1.695a1.58 1.58 0 0 0 0 2.306a1.82 1.82 0 0 0 2.488 0l2.205-2.117a3.91 3.91 0 0 0 0-5.696c-1.658-1.592-4.358-1.592-6.016 0l-2.205 2.118a3.327 3.327 0 0 0 0 4.848a.75.75 0 0 1-1.039 1.082a4.827 4.827 0 0 1 0-7.012z"></svg:path>`,
})
export class SolarPaperclipRounded2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipRounded2BrokenIcon],svg[solar-paperclip-rounded-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.565 16.13a8.25 8.25 0 0 0 0-11.706c-3.248-3.232-8.512-3.232-11.76 0m8.085 15.364a4.17 4.17 0 0 1-5.88 0a4.125 4.125 0 0 1 0-5.853l2.94-2.926M4.131 8.082a7.22 7.22 0 0 0 0 10.243"></svg:path>`,
})
export class SolarPaperclipRounded2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipRounded2LineDuotoneIcon],svg[solar-paperclip-rounded-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12.95 11.009l-2.94 2.926a4.125 4.125 0 0 0 0 5.853a4.17 4.17 0 0 0 5.88 0l3.675-3.658a8.25 8.25 0 0 0 0-11.706c-3.248-3.232-8.512-3.232-11.76 0L4.132 8.082a7.22 7.22 0 0 0 0 10.243"></svg:path>`,
})
export class SolarPaperclipRounded2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipRounded2LinearIcon],svg[solar-paperclip-rounded-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12.95 11.009l-2.94 2.926a4.125 4.125 0 0 0 0 5.853a4.17 4.17 0 0 0 5.88 0l3.675-3.658a8.25 8.25 0 0 0 0-11.706c-3.248-3.232-8.512-3.232-11.76 0L4.132 8.082a7.22 7.22 0 0 0 0 10.243"></svg:path>`,
})
export class SolarPaperclipRounded2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipRounded2OutlineIcon],svg[solar-paperclip-rounded-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.277 3.893c3.54-3.524 9.277-3.524 12.817 0a9 9 0 0 1 0 12.768l-3.675 3.658a4.92 4.92 0 0 1-6.938 0a4.875 4.875 0 0 1 0-6.915l2.94-2.927a.75.75 0 1 1 1.058 1.063l-2.94 2.927a3.375 3.375 0 0 0 0 4.79a3.42 3.42 0 0 0 4.822 0l3.674-3.659a7.5 7.5 0 0 0 0-10.642c-2.954-2.941-7.746-2.941-10.7 0L4.66 8.614a6.47 6.47 0 0 0 0 9.18a.75.75 0 0 1-1.058 1.062a7.97 7.97 0 0 1 0-11.305z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPaperclipRounded2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipRoundedBoldIcon],svg[solar-paperclip-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2m-.889 3.673a4.07 4.07 0 0 1 3.614 0c.565.28 1.072.774 1.829 1.511l.1.098l.104.1c.754.735 1.263 1.23 1.553 1.783a3.84 3.84 0 0 1 0 3.565c-.29.554-.799 1.049-1.553 1.783l-.104.1l-2.203 2.146l-.034.033c-.18.175-.32.311-.461.417a2.74 2.74 0 0 1-3.27 0a5 5 0 0 1-.46-.417l-.035-.033l-.034-.034c-.18-.175-.32-.311-.429-.45a2.606 2.606 0 0 1 0-3.236c.11-.139.25-.275.429-.45l.034-.034l1.699-1.653a.75.75 0 0 1 1.046 1.075l-1.698 1.653c-.23.225-.292.287-.332.337a1.106 1.106 0 0 0 0 1.38c.04.05.101.113.332.337c.23.224.295.284.347.323a1.24 1.24 0 0 0 1.473 0c.052-.039.117-.1.347-.323l2.203-2.145c.897-.874 1.21-1.191 1.374-1.504a2.34 2.34 0 0 0 0-2.174c-.164-.313-.477-.63-1.374-1.504c-.895-.872-1.224-1.179-1.55-1.34a2.57 2.57 0 0 0-2.28 0c-.326.161-.655.468-1.55 1.34L7.99 10.535c-.503.49-.681.668-.797.83a2.34 2.34 0 0 0 0 2.74c.116.162.294.34.797.83a.75.75 0 1 1-1.046 1.075l-.058-.056c-.424-.413-.709-.69-.913-.975a3.84 3.84 0 0 1 0-4.487c.204-.285.489-.562.913-.975l.058-.056l2.238-2.179l.1-.098c.757-.737 1.264-1.231 1.83-1.511" clip-rule="evenodd"></svg:path>`,
})
export class SolarPaperclipRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipRoundedBoldDuotoneIcon],svg[solar-paperclip-rounded-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 3.464C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.111 5.673a4.07 4.07 0 0 1 3.614 0c.565.28 1.072.774 1.829 1.511l.1.098l.104.1c.754.735 1.263 1.23 1.553 1.783a3.84 3.84 0 0 1 0 3.565c-.29.554-.799 1.049-1.553 1.783l-.104.1l-2.203 2.146l-.034.033c-.18.175-.32.311-.461.417a2.74 2.74 0 0 1-3.27 0a5 5 0 0 1-.46-.417l-.035-.033l-.034-.034c-.18-.175-.32-.311-.429-.45a2.606 2.606 0 0 1 0-3.236c.11-.139.25-.275.429-.45l.034-.034l1.699-1.653a.75.75 0 0 1 1.046 1.075l-1.698 1.653c-.23.225-.292.287-.332.337a1.106 1.106 0 0 0 0 1.38c.04.05.101.113.332.337c.23.224.295.284.347.323a1.24 1.24 0 0 0 1.473 0c.052-.039.117-.1.347-.323l2.203-2.145c.897-.874 1.21-1.191 1.374-1.504a2.34 2.34 0 0 0 0-2.174c-.164-.313-.477-.63-1.374-1.504c-.895-.872-1.224-1.179-1.55-1.34a2.57 2.57 0 0 0-2.28 0c-.326.161-.655.468-1.55 1.34L7.99 10.535c-.503.49-.681.668-.797.83a2.34 2.34 0 0 0 0 2.74c.116.162.294.34.797.83a.75.75 0 1 1-1.046 1.075l-.058-.056c-.424-.413-.709-.69-.913-.975a3.84 3.84 0 0 1 0-4.487c.204-.285.489-.562.913-.975l.058-.056l2.238-2.179l.1-.098c.757-.737 1.264-1.231 1.83-1.511"></svg:path>`,
})
export class SolarPaperclipRoundedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipRoundedBrokenIcon],svg[solar-paperclip-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18.885 15.95c1.424-1.437 2.136-2.156 2.525-2.926a5.5 5.5 0 0 0 0-4.956c-.389-.77-1.1-1.489-2.525-2.925c-1.424-1.437-2.136-2.156-2.899-2.548a5.37 5.37 0 0 0-4.912 0c-.763.392-1.475 1.11-2.9 2.548m7.04 14.512c-.356.358-.534.538-.703.668a3.22 3.22 0 0 1-3.951 0c-.17-.13-.347-.31-.702-.668s-.533-.538-.663-.708a3.3 3.3 0 0 1 0-3.988c.13-.17.308-.35.663-.708l2.83-2.856m-8.243-2.49c-.8.808-1.2 1.211-1.473 1.608a5.5 5.5 0 0 0 0 6.242c.274.396.673.8 1.473 1.607"></svg:path>`,
})
export class SolarPaperclipRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipRoundedLineDuotoneIcon],svg[solar-paperclip-rounded-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12.689 11.395l-2.831 2.856c-.355.359-.533.538-.663.708a3.3 3.3 0 0 0 0 3.988c.13.17.308.35.663.708s.533.538.702.668a3.22 3.22 0 0 0 3.951 0c.17-.13.347-.31.702-.668l3.672-3.705c1.424-1.437 2.136-2.156 2.525-2.926a5.5 5.5 0 0 0 0-4.956c-.389-.77-1.1-1.489-2.525-2.925c-1.424-1.437-2.136-2.156-2.899-2.548a5.37 5.37 0 0 0-4.912 0c-.763.392-1.475 1.11-2.9 2.548L4.446 8.906c-.8.807-1.2 1.21-1.473 1.607a5.5 5.5 0 0 0 0 6.242c.274.396.673.8 1.473 1.607"></svg:path>`,
})
export class SolarPaperclipRoundedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipRoundedLinearIcon],svg[solar-paperclip-rounded-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12.689 11.395l-2.831 2.856c-.355.359-.533.538-.663.708a3.3 3.3 0 0 0 0 3.988c.13.17.308.35.663.708s.533.538.702.668a3.22 3.22 0 0 0 3.951 0c.17-.13.347-.31.702-.668l3.672-3.705c1.424-1.437 2.136-2.156 2.525-2.926a5.5 5.5 0 0 0 0-4.956c-.389-.77-1.1-1.489-2.525-2.925c-1.424-1.437-2.136-2.156-2.899-2.548a5.37 5.37 0 0 0-4.912 0c-.763.392-1.475 1.11-2.9 2.548L4.446 8.906c-.8.807-1.2 1.21-1.473 1.607a5.5 5.5 0 0 0 0 6.242c.274.396.673.8 1.473 1.607"></svg:path>`,
})
export class SolarPaperclipRoundedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipRoundedOutlineIcon],svg[solar-paperclip-rounded-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.731 1.928a6.12 6.12 0 0 1 5.598 0c.87.447 1.66 1.245 2.972 2.569l.117.118l.116.116c1.313 1.325 2.103 2.122 2.546 2.999a6.25 6.25 0 0 1 0 5.632c-.443.877-1.233 1.674-2.546 2.999l-.116.116l-3.714 3.748c-.315.318-.525.53-.733.691a3.97 3.97 0 0 1-4.87 0c-.209-.161-.419-.373-.734-.69l-.084-.085c-.315-.318-.525-.53-.685-.74a4.05 4.05 0 0 1 0-4.896c.16-.21.37-.421.685-.74l.042-.042l2.83-2.856a.75.75 0 0 1 1.066 1.056l-2.83 2.856c-.373.376-.506.513-.599.634a2.55 2.55 0 0 0 0 3.08c.093.121.226.259.599.634c.372.375.508.51.628.603a2.47 2.47 0 0 0 3.033 0c.12-.093.256-.228.629-.603l3.672-3.705c1.464-1.478 2.066-2.098 2.388-2.736a4.75 4.75 0 0 0 0-4.28c-.322-.638-.924-1.258-2.388-2.735c-1.466-1.479-2.08-2.085-2.71-2.41a4.62 4.62 0 0 0-4.226 0c-.63.325-1.244.931-2.71 2.41l-3.73 3.763c-.822.83-1.162 1.177-1.388 1.505a4.75 4.75 0 0 0 0 5.39c.226.328.566.675 1.389 1.505a.75.75 0 1 1-1.066 1.056l-.065-.066c-.737-.744-1.18-1.191-1.493-1.643a6.25 6.25 0 0 1 0-7.095c.313-.451.756-.898 1.493-1.643l.065-.065l3.73-3.763l.117-.118C9.07 3.173 9.86 2.375 10.73 1.927" clip-rule="evenodd"></svg:path>`,
})
export class SolarPaperclipRoundedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarParagraphSpacingBoldIcon],svg[solar-paragraph-spacing-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 3A.75.75 0 0 1 4 2.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 3m0 18a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m9.28-16.03a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72v9.38l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.31l1.72 1.72a.75.75 0 1 0 1.06-1.06z"></svg:path>`,
})
export class SolarParagraphSpacingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarParagraphSpacingBoldDuotoneIcon],svg[solar-paragraph-spacing-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 3A.75.75 0 0 1 4 2.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 3m0 18a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.53 4.97a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72v9.38l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.31l1.72 1.72a.75.75 0 1 0 1.06-1.06z"></svg:path>`,
})
export class SolarParagraphSpacingBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarParagraphSpacingBrokenIcon],svg[solar-paragraph-spacing-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 21h9m7 0h-3M4 3h16m-8 2.5l3 3m-3-3l-3 3m3-3v13m0 0l3-3m-3 3l-3-3"></svg:path>`,
})
export class SolarParagraphSpacingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarParagraphSpacingLineDuotoneIcon],svg[solar-paragraph-spacing-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 21h16M4 3h16" opacity=".5"></svg:path><svg:path d="m12 5.5l3 3m-3-3l-3 3m3-3v13m0 0l3-3m-3 3l-3-3"></svg:path></svg:g>`,
})
export class SolarParagraphSpacingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarParagraphSpacingLinearIcon],svg[solar-paragraph-spacing-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 21h16M4 3h16m-8 2.5l3 3m-3-3l-3 3m3-3v13m0 0l3-3m-3 3l-3-3"></svg:path>`,
})
export class SolarParagraphSpacingLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarParagraphSpacingOutlineIcon],svg[solar-paragraph-spacing-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 3A.75.75 0 0 1 4 2.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 3m0 18a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m9.28-16.03a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72v9.38l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.31l1.72 1.72a.75.75 0 1 0 1.06-1.06z"></svg:path>`,
})
export class SolarParagraphSpacingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPassportBoldIcon],svg[solar-passport-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5a1 1 0 0 0-.591-.913c.144-.113.318-.19.51-.218l10.798-1.543A2 2 0 0 1 18 4.306v.82A4 4 0 0 0 17 5zm4.75 8a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18 6.17c1.165.413 2 1.524 2 2.83v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a1 1 0 0 0 1 1h12c.35 0 .687.06 1 .17m-6 3.08a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5m-2 9a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPassportBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPassportBoldDuotoneIcon],svg[solar-passport-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 13a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4 18.694v-14a1 1 0 0 0 1 1h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3M8.25 13a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m1 6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18 4v1.865c-.313-.11-.65-.17-1-.17H5a1 1 0 0 1-1-1v-.072c0-.533.392-.985.92-1.06L15.717 2.02A2 2 0 0 1 18 4" opacity=".5"></svg:path>`,
})
export class SolarPassportBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPassportBrokenIcon],svg[solar-passport-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 6v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5M4 6V5m0 1h13a3 3 0 0 1 3 3v1"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 13a3 3 0 1 1 3 3"></svg:path><svg:path fill="currentColor" d="M18 6v.75h.75V6zm-2.283-3.674l-.106-.742zM4.92 3.87l-.106-.743zm.15 2.88H18v-1.5H5.071zM18.75 6V4.306h-1.5V6zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07zM4.814 3.126A1.82 1.82 0 0 0 3.25 4.93h1.5a.32.32 0 0 1 .276-.318zm13.936 1.18a2.75 2.75 0 0 0-3.139-2.722l.212 1.485a1.25 1.25 0 0 1 1.427 1.237zM5.071 5.25a.32.32 0 0 1-.321-.321h-1.5A1.82 1.82 0 0 0 5.071 6.75z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 19h4"></svg:path></svg:g>`,
})
export class SolarPassportBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPassportLineDuotoneIcon],svg[solar-passport-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M4 6v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm0 0V5"></svg:path><svg:circle cx="12" cy="13" r="3" stroke="currentColor" stroke-width="1.5" opacity=".5"></svg:circle><svg:path fill="currentColor" d="M18 6v.75h.75V6zm-2.283-3.674l-.106-.742zM4.92 3.87l-.106-.743zm.15 2.88H18v-1.5H5.071zM18.75 6V4.306h-1.5V6zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07zM4.814 3.126A1.82 1.82 0 0 0 3.25 4.93h1.5a.32.32 0 0 1 .276-.318zm13.936 1.18a2.75 2.75 0 0 0-3.139-2.722l.212 1.485a1.25 1.25 0 0 1 1.427 1.237zM5.071 5.25a.32.32 0 0 1-.321-.321h-1.5A1.82 1.82 0 0 0 5.071 6.75z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 19h4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPassportLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPassportLinearIcon],svg[solar-passport-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M4 6v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm0 0V5"></svg:path><svg:circle cx="12" cy="13" r="3" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path fill="currentColor" d="M18 6v.75h.75V6zm-2.283-3.674l-.106-.742zM4.92 3.87l-.106-.743zm.15 2.88H18v-1.5H5.071zM18.75 6V4.306h-1.5V6zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07zM4.814 3.126A1.82 1.82 0 0 0 3.25 4.93h1.5a.32.32 0 0 1 .276-.318zm13.936 1.18a2.75 2.75 0 0 0-3.139-2.722l.212 1.485a1.25 1.25 0 0 1 1.427 1.237zM5.071 5.25a.32.32 0 0 1-.321-.321h-1.5A1.82 1.82 0 0 0 5.071 6.75z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 19h4"></svg:path></svg:g>`,
})
export class SolarPassportLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPassportMinimalisticBoldIcon],svg[solar-passport-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5a1 1 0 0 0-.591-.913c.144-.113.318-.19.51-.218l10.798-1.543A2 2 0 0 1 18 4.306v.82A4 4 0 0 0 17 5zm4.75 9a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18 6.17c1.165.413 2 1.524 2 2.83v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a1 1 0 0 0 1 1h12c.35 0 .687.06 1 .17m-6 4.08a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarPassportMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPassportMinimalisticBoldDuotoneIcon],svg[solar-passport-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4 4.694v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3H5a1 1 0 0 1-1-1m8 4.556a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18 4v1.865c-.313-.11-.65-.17-1-.17H5a1 1 0 0 1-1-1v-.072c0-.533.392-.985.92-1.06L15.717 2.02A2 2 0 0 1 18 4" opacity=".5"></svg:path>`,
})
export class SolarPassportMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPassportMinimalisticBrokenIcon],svg[solar-passport-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 17a3 3 0 1 0-3-3"></svg:path><svg:path fill="currentColor" d="M18 6v.75h.75V6zm-2.283-3.674l-.106-.742zM4.92 3.87l-.106-.743zm.15 2.88H18v-1.5H5.071zM18.75 6V4.306h-1.5V6zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07zM4.814 3.126A1.82 1.82 0 0 0 3.25 4.93h1.5a.32.32 0 0 1 .276-.318zm13.936 1.18a2.75 2.75 0 0 0-3.139-2.722l.212 1.485a1.25 1.25 0 0 1 1.427 1.237zM5.071 5.25a.32.32 0 0 1-.321-.321h-1.5A1.82 1.82 0 0 0 5.071 6.75z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 6v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5M4 6V5m0 1h13a3 3 0 0 1 3 3v1"></svg:path></svg:g>`,
})
export class SolarPassportMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPassportMinimalisticLineDuotoneIcon],svg[solar-passport-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 6v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm0 0V5"></svg:path><svg:circle cx="12" cy="14" r="3" stroke="currentColor" stroke-width="1.5" opacity=".5"></svg:circle><svg:path fill="currentColor" d="M18 6v.75h.75V6zm-2.283-3.674l-.106-.742zM4.92 3.87l-.106-.743zm.15 2.88H18v-1.5H5.071zM18.75 6V4.306h-1.5V6zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07zM4.814 3.126A1.82 1.82 0 0 0 3.25 4.93h1.5a.32.32 0 0 1 .276-.318zm13.936 1.18a2.75 2.75 0 0 0-3.139-2.722l.212 1.485a1.25 1.25 0 0 1 1.427 1.237zM5.071 5.25a.32.32 0 0 1-.321-.321h-1.5A1.82 1.82 0 0 0 5.071 6.75z"></svg:path></svg:g>`,
})
export class SolarPassportMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPassportMinimalisticLinearIcon],svg[solar-passport-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M4 6v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm0 0V5"></svg:path><svg:circle cx="12" cy="14" r="3" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path fill="currentColor" d="M18 6v.75h.75V6zm-2.283-3.674l-.106-.742zM4.92 3.87l-.106-.743zm.15 2.88H18v-1.5H5.071zM18.75 6V4.306h-1.5V6zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07zM4.814 3.126A1.82 1.82 0 0 0 3.25 4.93h1.5a.32.32 0 0 1 .276-.318zm13.936 1.18a2.75 2.75 0 0 0-3.139-2.722l.212 1.485a1.25 1.25 0 0 1 1.427 1.237zM5.071 5.25a.32.32 0 0 1-.321-.321h-1.5A1.82 1.82 0 0 0 5.071 6.75z"></svg:path></svg:g>`,
})
export class SolarPassportMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPassportMinimalisticOutlineIcon],svg[solar-passport-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.25 14a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0M12 11.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"></svg:path><svg:path d="M18.75 4.306a2.75 2.75 0 0 0-3.139-2.722L4.814 3.126A1.82 1.82 0 0 0 3.25 5v14A3.75 3.75 0 0 0 7 22.75h10A3.75 3.75 0 0 0 20.75 19V9a3.75 3.75 0 0 0-2-3.317zM5.062 6.75H17.01A2.25 2.25 0 0 1 19.25 9v10A2.25 2.25 0 0 1 17 21.25H7A2.25 2.25 0 0 1 4.75 19V6.75zm11.95-1.5h.238v-.944a1.25 1.25 0 0 0-1.427-1.237L5.026 4.61a.321.321 0 0 0 .041.639z"></svg:path></svg:g>`,
})
export class SolarPassportMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPassportOutlineIcon],svg[solar-passport-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 9.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M9.75 13a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10 18.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.611 1.584a2.75 2.75 0 0 1 3.139 2.722v1.377a3.75 3.75 0 0 1 2 3.317v10A3.75 3.75 0 0 1 17 22.75H7A3.75 3.75 0 0 1 3.25 19V5h.001l-.001-.071c0-.906.666-1.675 1.564-1.803zM5.071 6.75H4.75V19A2.25 2.25 0 0 0 7 21.25h10A2.25 2.25 0 0 0 19.25 19V9a2.25 2.25 0 0 0-2.24-2.25zm12.179-1.5H5.067a.321.321 0 0 1-.041-.639L15.823 3.07a1.25 1.25 0 0 1 1.427 1.237z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPassportOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordBoldIcon],svg[solar-password-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172M12.75 10a.75.75 0 0 0-1.5 0v.701l-.607-.35a.75.75 0 0 0-.75 1.298l.607.35l-.607.351a.75.75 0 1 0 .75 1.3l.607-.351V14a.75.75 0 0 0 1.5 0v-.7l.607.35a.75.75 0 0 0 .75-1.3L13.5 12l.607-.35a.75.75 0 0 0-.75-1.3l-.607.35zm-6.017-.75a.75.75 0 0 1 .75.75v.7l.606-.35a.75.75 0 0 1 .75 1.3l-.607.35l.607.35a.75.75 0 1 1-.75 1.3l-.606-.35v.7a.75.75 0 0 1-1.5 0v-.701l-.608.35a.75.75 0 0 1-.75-1.298L5.232 12l-.607-.35a.75.75 0 1 1 .75-1.3l.608.351V10a.75.75 0 0 1 .75-.75m11.285.75a.75.75 0 0 0-1.5 0v.701l-.607-.35a.75.75 0 0 0-.75 1.298l.607.35l-.608.351a.75.75 0 0 0 .75 1.3l.608-.351V14a.75.75 0 0 0 1.5 0v-.7l.607.35a.75.75 0 0 0 .75-1.3l-.607-.35l.607-.35a.75.75 0 0 0-.75-1.3l-.607.35z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPasswordBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordBoldDuotoneIcon],svg[solar-password-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 10a.75.75 0 0 0-1.5 0v.701l-.607-.35a.75.75 0 1 0-.75 1.298l.607.35l-.607.351a.75.75 0 1 0 .75 1.3l.607-.351V14a.75.75 0 1 0 1.5 0v-.7l.607.35a.75.75 0 0 0 .75-1.3L13.5 12l.607-.35a.75.75 0 0 0-.75-1.3l-.607.35zm-6.017-.75a.75.75 0 0 1 .75.75v.7l.606-.35a.75.75 0 0 1 .75 1.3l-.607.35l.607.35a.75.75 0 1 1-.75 1.3l-.606-.35v.7a.75.75 0 0 1-1.5 0v-.701l-.608.35a.75.75 0 0 1-.75-1.298L5.232 12l-.607-.35a.75.75 0 1 1 .75-1.3l.608.351V10a.75.75 0 0 1 .75-.75m11.285.75a.75.75 0 0 0-1.5 0v.701l-.607-.35a.75.75 0 1 0-.75 1.298l.607.35l-.607.351a.75.75 0 0 0 .75 1.3l.607-.351V14a.75.75 0 0 0 1.5 0v-.7l.607.35a.75.75 0 0 0 .75-1.3l-.607-.35l.607-.35a.75.75 0 1 0-.75-1.3l-.607.35z"></svg:path>`,
})
export class SolarPasswordBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordBrokenIcon],svg[solar-password-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 10v4m-1.732-3l3.464 2m0-2l-3.465 2m-3.535-3v4M5 11l3.464 2m0-2L5 13m12.268-3v4m-1.732-3L19 13m0-2l-3.465 2M22 12c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828"></svg:path>`,
})
export class SolarPasswordBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordLineDuotoneIcon],svg[solar-password-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 10v4m-1.732-3l3.464 2m0-2l-3.465 2m-3.535-3v4M5 11l3.464 2m0-2L5 13m12.268-3v4m-1.732-3L19 13m0-2l-3.465 2"></svg:path></svg:g>`,
})
export class SolarPasswordLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordLinearIcon],svg[solar-password-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M12 10v4m-1.732-3l3.464 2m0-2l-3.464 2m-3.535-3v4M5 11l3.464 2m0-2L5 13m12.268-3v4m-1.732-3L19 13m0-2l-3.465 2"></svg:path></svg:g>`,
})
export class SolarPasswordLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordMinimalisticBoldIcon],svg[solar-password-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172M8 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarPasswordMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordMinimalisticBoldDuotoneIcon],svg[solar-password-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class SolarPasswordMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordMinimalisticBrokenIcon],svg[solar-password-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828"></svg:path><svg:path fill="currentColor" d="M9 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarPasswordMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordMinimalisticInputBoldIcon],svg[solar-password-minimalistic-input-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.75 2a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0v-2.006c2.636-.027 4.104-.191 5.078-1.166C22 17.657 22 15.771 22 12s0-5.657-1.172-6.828c-.974-.975-2.442-1.139-5.078-1.166z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 18.828C4.343 20 6.229 20 10 20h3V4h-3C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828M13 12a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarPasswordMinimalisticInputBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordMinimalisticInputBoldDuotoneIcon],svg[solar-password-minimalistic-input-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.172 18.828C4.343 20 6.229 20 10 20l5.75-.006c2.636-.027 4.104-.191 5.078-1.166C22 17.658 22 15.771 22 12s0-5.657-1.172-6.828c-.974-.975-2.454-1.144-5.09-1.172H10C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13 12a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15 1.25a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarPasswordMinimalisticInputBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordMinimalisticInputBrokenIcon],svg[solar-password-minimalistic-input-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M9 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 2v20m7-10c0 3.771 0 5.657-1.172 6.828C19.765 19.892 18.114 19.99 15 20M12 4h-2C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h2m3-16c3.114.01 4.765.108 5.828 1.172c.654.653.943 1.528 1.07 2.828"></svg:path></svg:g>`,
})
export class SolarPasswordMinimalisticInputBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordMinimalisticInputLineDuotoneIcon],svg[solar-password-minimalistic-input-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3.172 18.828C4.343 20 6.229 20 10 20h5c3.114-.01 4.765-.108 5.828-1.172C22 17.657 22 15.771 22 12s0-5.657-1.172-6.828C19.765 4.108 18.114 4.01 15 4h-5C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828Z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 2v20"></svg:path></svg:g>`,
})
export class SolarPasswordMinimalisticInputLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordMinimalisticInputLinearIcon],svg[solar-password-minimalistic-input-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 4h-2C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h2m3-16c3.114.01 4.765.108 5.828 1.172C22 6.343 22 8.229 22 12s0 5.657-1.172 6.828C19.765 19.892 18.114 19.99 15 20"></svg:path><svg:path fill="currentColor" d="M9 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 2v20"></svg:path></svg:g>`,
})
export class SolarPasswordMinimalisticInputLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordMinimalisticInputOutlineIcon],svg[solar-password-minimalistic-input-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.75 2a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0v-1.256c1.21-.012 2.22-.053 3.059-.196c1.028-.174 1.872-.511 2.55-1.19c.748-.748 1.08-1.697 1.238-2.869c.153-1.14.153-2.595.153-4.433v-.112c0-1.838 0-3.294-.153-4.433c-.158-1.172-.49-2.121-1.238-2.87c-.678-.678-1.522-1.015-2.55-1.19c-.839-.142-1.85-.183-3.059-.195zm0 2.756v14.488c1.186-.012 2.09-.052 2.808-.174c.842-.143 1.355-.387 1.74-.772c.423-.423.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289s-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008c-.385-.385-.898-.629-1.74-.772c-.719-.122-1.622-.162-2.808-.174" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9.944 3.25c-1.838 0-3.294 0-4.433.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433v.112c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153H12a.75.75 0 0 0 0-1.5h-2c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.138-1.028-.14-2.382-.14-4.289s.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h2a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" d="M8 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SolarPasswordMinimalisticInputOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordMinimalisticLineDuotoneIcon],svg[solar-password-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarPasswordMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordMinimalisticLinearIcon],svg[solar-password-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path fill="currentColor" d="M9 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarPasswordMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordMinimalisticOutlineIcon],svg[solar-password-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 3.25c-1.838 0-3.294 0-4.433.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433v.112c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h4.112c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433v-.112c0-1.838 0-3.294-.153-4.433c-.158-1.172-.49-2.121-1.238-2.87c-.749-.748-1.698-1.08-2.87-1.238c-1.14-.153-2.595-.153-4.433-.153zM3.702 5.702c.423-.423 1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.138 1.028.14 2.382.14 4.289s-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008s-1.003.677-2.009.812c-1.027.138-2.382.14-4.289.14h-4c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.138-1.028-.14-2.382-.14-4.289s.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008" clip-rule="evenodd"></svg:path>`,
})
export class SolarPasswordMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordOutlineIcon],svg[solar-password-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 10a.75.75 0 0 0-1.5 0v.701l-.607-.35a.75.75 0 0 0-.75 1.298l.607.35l-.607.351a.75.75 0 1 0 .75 1.3l.607-.351V14a.75.75 0 0 0 1.5 0v-.7l.607.35a.75.75 0 0 0 .75-1.3L13.5 12l.607-.35a.75.75 0 0 0-.75-1.3l-.607.35zm-6.017-.75a.75.75 0 0 1 .75.75v.7l.606-.35a.75.75 0 0 1 .75 1.3l-.607.35l.607.35a.75.75 0 1 1-.75 1.3l-.606-.35v.7a.75.75 0 0 1-1.5 0v-.701l-.608.35a.75.75 0 0 1-.75-1.298L5.232 12l-.607-.35a.75.75 0 1 1 .75-1.3l.608.351V10a.75.75 0 0 1 .75-.75m11.285.75a.75.75 0 0 0-1.5 0v.701l-.607-.35a.75.75 0 0 0-.75 1.298l.607.35l-.608.351a.75.75 0 0 0 .75 1.3l.608-.351V14a.75.75 0 0 0 1.5 0v-.7l.607.35a.75.75 0 0 0 .75-1.3l-.607-.35l.607-.35a.75.75 0 0 0-.75-1.3l-.607.35z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 3.25c-1.838 0-3.294 0-4.433.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433v.112c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h4.112c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433v-.112c0-1.838 0-3.294-.153-4.433c-.158-1.172-.49-2.121-1.238-2.87c-.749-.748-1.698-1.08-2.87-1.238c-1.14-.153-2.595-.153-4.433-.153zM3.702 5.702c.423-.423 1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.138 1.028.14 2.382.14 4.289s-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008s-1.003.677-2.009.812c-1.027.138-2.382.14-4.289.14h-4c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.138-1.028-.14-2.382-.14-4.289s.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008" clip-rule="evenodd"></svg:path>`,
})
export class SolarPasswordOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPauseBoldIcon],svg[solar-pause-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2s2.828 0 3.414.586S10 4.114 10 6v12c0 1.886 0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18zm12 0c0-1.886 0-2.828.586-3.414S16.114 2 18 2s2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z"></svg:path>`,
})
export class SolarPauseBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPauseBoldDuotoneIcon],svg[solar-pause-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2s2.828 0 3.414.586S10 4.114 10 6v12c0 1.886 0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18z"></svg:path><svg:path fill="currentColor" d="M14 6c0-1.886 0-2.828.586-3.414S16.114 2 18 2s2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z" opacity=".5"></svg:path>`,
})
export class SolarPauseBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPauseBrokenIcon],svg[solar-pause-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 18c0 1.886 0 2.828.586 3.414S4.114 22 6 22s2.828 0 3.414-.586S10 19.886 10 18V6c0-1.886 0-2.828-.586-3.414S7.886 2 6 2s-2.828 0-3.414.586S2 4.114 2 6v8m20-8c0-1.886 0-2.828-.586-3.414S19.886 2 18 2s-2.828 0-3.414.586S14 4.114 14 6v12c0 1.886 0 2.828.586 3.414S16.114 22 18 22s2.828 0 3.414-.586S22 19.886 22 18v-8"></svg:path>`,
})
export class SolarPauseBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPauseCircleBoldIcon],svg[solar-pause-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M8.076 8.617C8 8.801 8 9.034 8 9.5v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C10.199 8 9.966 8 9.5 8s-.699 0-.883.076a1 1 0 0 0-.54.541m5 0C13 8.801 13 9.034 13 9.5v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C15.199 8 14.966 8 14.5 8s-.699 0-.883.076a1 1 0 0 0-.54.541" clip-rule="evenodd"></svg:path>`,
})
export class SolarPauseCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPauseCircleBoldDuotoneIcon],svg[solar-pause-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.076 8.617C8 8.801 8 9.034 8 9.5v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C10.199 8 9.966 8 9.5 8s-.699 0-.883.076a1 1 0 0 0-.54.541m4.999 0C13 8.801 13 9.034 13 9.5v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C15.199 8 14.966 8 14.5 8s-.699 0-.883.076a1 1 0 0 0-.54.541"></svg:path>`,
})
export class SolarPauseCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPauseCircleBrokenIcon],svg[solar-pause-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8 9.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C8.801 8 9.034 8 9.5 8s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C10.199 16 9.966 16 9.5 16s-.699 0-.883-.076a1 1 0 0 1-.54-.541C8 15.199 8 14.966 8 14.5zm5 0c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C13.801 8 14.034 8 14.5 8s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 15.199 13 14.966 13 14.5z"></svg:path><svg:path stroke-linecap="round" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarPauseCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPauseCircleLineDuotoneIcon],svg[solar-pause-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path d="M8 9.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C8.801 8 9.034 8 9.5 8s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C10.199 16 9.966 16 9.5 16s-.699 0-.883-.076a1 1 0 0 1-.54-.541C8 15.199 8 14.966 8 14.5zm5 0c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C13.801 8 14.034 8 14.5 8s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 15.199 13 14.966 13 14.5z"></svg:path></svg:g>`,
})
export class SolarPauseCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPauseCircleLinearIcon],svg[solar-pause-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M8 9.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C8.801 8 9.034 8 9.5 8s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C10.199 16 9.966 16 9.5 16s-.699 0-.883-.076a1 1 0 0 1-.54-.541C8 15.199 8 14.966 8 14.5zm5 0c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C13.801 8 14.034 8 14.5 8s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 15.199 13 14.966 13 14.5z"></svg:path></svg:g>`,
})
export class SolarPauseCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPauseCircleOutlineIcon],svg[solar-pause-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m8.228-4.75h.044c.214 0 .41 0 .576.011c.178.012.373.04.572.122c.428.178.77.519.947.947c.082.199.11.394.122.572c.011.165.011.362.011.576v5.044c0 .214 0 .41-.011.576c-.012.178-.04.373-.122.572a1.75 1.75 0 0 1-.947.947c-.199.082-.394.11-.572.122c-.165.011-.362.011-.576.011h-.044c-.214 0-.41 0-.576-.011a1.8 1.8 0 0 1-.572-.122a1.75 1.75 0 0 1-.947-.947a1.8 1.8 0 0 1-.122-.572c-.011-.165-.011-.362-.011-.576V9.478c0-.214 0-.41.011-.576c.012-.178.04-.373.122-.572a1.75 1.75 0 0 1 .947-.947c.199-.082.394-.11.572-.122c.165-.011.362-.011.576-.011m-.577 1.52a.25.25 0 0 0-.13.131a1 1 0 0 0-.013.103a8 8 0 0 0-.008.496v5c0 .243 0 .388.008.496c.004.067.01.095.012.103a.25.25 0 0 0 .131.13a1 1 0 0 0 .103.013c.108.008.253.008.496.008s.388 0 .496-.008a1 1 0 0 0 .103-.012a.25.25 0 0 0 .13-.131a1 1 0 0 0 .013-.103c.008-.108.008-.253.008-.496v-5c0-.243 0-.388-.008-.496a1 1 0 0 0-.012-.103a.25.25 0 0 0-.131-.13a1 1 0 0 0-.103-.013A8 8 0 0 0 9.5 8.75c-.243 0-.388 0-.496.008a1 1 0 0 0-.103.012m5.577-1.52h.044c.214 0 .41 0 .576.011c.178.012.373.04.572.122c.429.178.77.519.947.947c.082.199.11.394.122.572c.011.165.011.362.011.576v5.044c0 .214 0 .41-.011.576c-.012.178-.04.373-.122.572a1.75 1.75 0 0 1-.947.947c-.199.082-.394.11-.572.122c-.165.011-.362.011-.576.011h-.044c-.214 0-.41 0-.576-.011a1.8 1.8 0 0 1-.572-.122a1.75 1.75 0 0 1-.947-.947a1.8 1.8 0 0 1-.122-.572c-.011-.165-.011-.362-.011-.576V9.478c0-.214 0-.41.011-.576c.012-.178.04-.373.122-.572a1.75 1.75 0 0 1 .947-.947c.199-.082.394-.11.572-.122c.165-.011.362-.011.576-.011m-.577 1.52a.25.25 0 0 0-.13.131a1 1 0 0 0-.013.103a8 8 0 0 0-.008.496v5c0 .243 0 .388.008.496c.004.067.01.095.012.103a.25.25 0 0 0 .131.13a1 1 0 0 0 .103.013c.108.008.253.008.496.008s.388 0 .496-.008a1 1 0 0 0 .103-.012a.25.25 0 0 0 .13-.131a1 1 0 0 0 .013-.103c.008-.108.008-.253.008-.496v-5c0-.243 0-.388-.008-.496a1 1 0 0 0-.012-.103a.25.25 0 0 0-.131-.13a1 1 0 0 0-.103-.013a8 8 0 0 0-.496-.008c-.243 0-.388 0-.496.008a1 1 0 0 0-.103.012" clip-rule="evenodd"></svg:path>`,
})
export class SolarPauseCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPauseLineDuotoneIcon],svg[solar-pause-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2s2.828 0 3.414.586S10 4.114 10 6v12c0 1.886 0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18z"></svg:path><svg:path d="M14 6c0-1.886 0-2.828.586-3.414S16.114 2 18 2s2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPauseLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPauseLinearIcon],svg[solar-pause-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2s2.828 0 3.414.586S10 4.114 10 6v12c0 1.886 0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18zm12 0c0-1.886 0-2.828.586-3.414S16.114 2 18 2s2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z"></svg:path>`,
})
export class SolarPauseLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPauseOutlineIcon],svg[solar-pause-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.948 1.25h.104c.898 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v12.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.725 1.65c-.456.456-1.023.642-1.65.726c-.595.08-1.345.08-2.243.08h-.104c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.343-.08-2.242V5.948c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08M3.905 2.817c-.461.062-.659.169-.789.3s-.237.327-.3.788C2.753 4.388 2.75 5.036 2.75 6v12c0 .964.002 1.612.067 2.095c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066s1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095V6c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3C7.612 2.753 6.964 2.75 6 2.75s-1.612.002-2.095.067M17.948 1.25h.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v12.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.343.08-2.242.08h-.104c-.899 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.343-.08-2.242V5.948c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.726-1.65c.455-.456 1.022-.642 1.65-.726c.594-.08 1.343-.08 2.242-.08m-2.043 1.567c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.064.483-.066 1.131-.066 2.095v12c0 .964.002 1.612.066 2.095c.063.461.17.659.3.789s.328.237.79.3c.482.064 1.13.066 2.094.066s1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095V6c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066s-1.612.002-2.095.067" clip-rule="evenodd"></svg:path>`,
})
export class SolarPauseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPawBoldIcon],svg[solar-paw-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.57 15.376c1.586-3.228 2.38-4.842 3.52-5.227a2.85 2.85 0 0 1 1.82 0c1.14.385 1.934 1.999 3.52 5.227l.878 1.79c.41.833.614 1.25.663 1.534c.201 1.179-.67 2.265-1.846 2.3c-.283.008-.725-.113-1.61-.356a17 17 0 0 0-1.01-.259a7.6 7.6 0 0 0-3.01 0c-.252.051-.505.12-1.01.26c-.885.242-1.327.363-1.61.355c-1.175-.035-2.047-1.121-1.846-2.3c.048-.284.253-.7.663-1.535zM6.145 5.527c.412 1.631 1.576 2.717 2.6 2.426c1.025-.292 1.522-1.85 1.11-3.48c-.412-1.631-1.576-2.717-2.6-2.426c-1.025.292-1.522 1.85-1.11 3.48m11.71 0c-.412 1.631-1.576 2.717-2.6 2.426c-1.025-.292-1.522-1.85-1.11-3.48c.412-1.631 1.576-2.717 2.6-2.426c1.025.292 1.522 1.85 1.11 3.48m-15.653 6.77c.45 1.205 1.508 1.937 2.363 1.635s1.183-1.524.733-2.73c-.45-1.204-1.508-1.936-2.363-1.634s-1.183 1.524-.733 2.73m19.596-.001c-.45 1.205-1.508 1.937-2.363 1.635s-1.183-1.524-.733-2.73c.45-1.204 1.508-1.936 2.363-1.634s1.183 1.524.733 2.73"></svg:path>`,
})
export class SolarPawBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPawBoldDuotoneIcon],svg[solar-paw-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.145 5.527c.412 1.631 1.576 2.717 2.6 2.426c1.025-.292 1.522-1.85 1.11-3.48c-.412-1.631-1.576-2.717-2.6-2.426c-1.025.292-1.522 1.85-1.11 3.48m11.71 0c-.412 1.631-1.576 2.717-2.6 2.426c-1.025-.292-1.522-1.85-1.11-3.48c.412-1.631 1.576-2.717 2.6-2.426c1.025.292 1.522 1.85 1.11 3.48m-15.653 6.77c.45 1.205 1.508 1.937 2.363 1.635s1.183-1.524.733-2.73c-.45-1.204-1.508-1.936-2.363-1.634s-1.183 1.524-.733 2.73m19.596-.001c-.45 1.205-1.508 1.937-2.363 1.635s-1.183-1.524-.733-2.73c.45-1.204 1.508-1.936 2.363-1.634s1.183 1.524.733 2.73"></svg:path><svg:path fill="currentColor" d="M7.57 15.376c1.586-3.228 2.38-4.842 3.52-5.227a2.85 2.85 0 0 1 1.82 0c1.14.385 1.934 1.999 3.52 5.227l.878 1.79c.41.833.614 1.25.663 1.534c.201 1.179-.67 2.265-1.846 2.3c-.283.008-.725-.113-1.61-.356a17 17 0 0 0-1.01-.259a7.6 7.6 0 0 0-3.01 0c-.252.051-.505.12-1.01.26c-.885.242-1.327.363-1.61.355c-1.175-.035-2.047-1.121-1.846-2.3c.048-.284.253-.7.663-1.535z" opacity=".5"></svg:path>`,
})
export class SolarPawBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPawBrokenIcon],svg[solar-paw-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M17.971 18.7c.201 1.179-.67 2.265-1.846 2.3c-.283.008-.725-.113-1.61-.356a17 17 0 0 0-1.01-.259a7.6 7.6 0 0 0-3.01 0c-.252.051-.505.12-1.01.26c-.885.242-1.327.363-1.61.355c-1.175-.035-2.047-1.121-1.846-2.3c.048-.284.253-.7.663-1.535l.879-1.789c1.585-3.228 2.378-4.842 3.52-5.227a2.85 2.85 0 0 1 1.819 0c1.14.385 1.934 1.999 3.52 5.227"></svg:path><svg:path d="M6.145 5.527c.412 1.631 1.576 2.717 2.6 2.426c1.025-.292 1.522-1.85 1.11-3.48c-.412-1.631-1.576-2.717-2.6-2.426c-1.025.292-1.522 1.85-1.11 3.48Zm11.71 0c-.412 1.631-1.576 2.717-2.6 2.426c-1.025-.292-1.522-1.85-1.11-3.48c.412-1.631 1.576-2.717 2.6-2.426c1.025.292 1.522 1.85 1.11 3.48Zm-15.653 6.77c.45 1.205 1.508 1.937 2.363 1.635s1.183-1.524.733-2.73c-.45-1.204-1.508-1.936-2.363-1.634s-1.183 1.524-.733 2.73Zm19.596 0c-.45 1.205-1.508 1.937-2.363 1.635s-1.183-1.524-.733-2.73c.45-1.204 1.508-1.936 2.363-1.634s1.183 1.524.733 2.73Z"></svg:path></svg:g>`,
})
export class SolarPawBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPawLineDuotoneIcon],svg[solar-paw-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7.57 15.376c1.586-3.228 2.38-4.842 3.52-5.227a2.85 2.85 0 0 1 1.82 0c1.14.385 1.934 1.999 3.52 5.227l.878 1.79c.41.833.614 1.25.663 1.534c.201 1.179-.67 2.265-1.846 2.3c-.283.008-.725-.113-1.61-.356a17 17 0 0 0-1.01-.259a7.6 7.6 0 0 0-3.01 0c-.252.051-.505.12-1.01.26c-.885.242-1.327.363-1.61.355c-1.175-.035-2.047-1.121-1.846-2.3c.048-.284.253-.7.663-1.535z"></svg:path><svg:path d="M6.145 5.527c.412 1.631 1.576 2.717 2.6 2.426c1.025-.292 1.522-1.85 1.11-3.48c-.412-1.631-1.576-2.717-2.6-2.426c-1.025.292-1.522 1.85-1.11 3.48Zm11.71 0c-.412 1.631-1.576 2.717-2.6 2.426c-1.025-.292-1.522-1.85-1.11-3.48c.412-1.631 1.576-2.717 2.6-2.426c1.025.292 1.522 1.85 1.11 3.48Zm-15.653 6.77c.45 1.205 1.508 1.937 2.363 1.635s1.183-1.524.733-2.73c-.45-1.204-1.508-1.936-2.363-1.634s-1.183 1.524-.733 2.73Zm19.596 0c-.45 1.205-1.508 1.937-2.363 1.635s-1.183-1.524-.733-2.73c.45-1.204 1.508-1.936 2.363-1.634s1.183 1.524.733 2.73Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPawLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPawLinearIcon],svg[solar-paw-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M7.57 15.376c1.586-3.228 2.38-4.842 3.52-5.227a2.85 2.85 0 0 1 1.82 0c1.14.385 1.934 1.999 3.52 5.227l.878 1.79c.41.833.614 1.25.663 1.534c.201 1.179-.67 2.265-1.846 2.3c-.283.008-.725-.113-1.61-.356a17 17 0 0 0-1.01-.259a7.6 7.6 0 0 0-3.01 0c-.252.051-.505.12-1.01.26c-.885.242-1.327.363-1.61.355c-1.175-.035-2.047-1.121-1.846-2.3c.048-.284.253-.7.663-1.535zM6.145 5.527c.412 1.631 1.576 2.717 2.6 2.426c1.025-.292 1.522-1.85 1.11-3.48c-.412-1.631-1.576-2.717-2.6-2.426c-1.025.292-1.522 1.85-1.11 3.48Zm11.71 0c-.412 1.631-1.576 2.717-2.6 2.426c-1.025-.292-1.522-1.85-1.11-3.48c.412-1.631 1.576-2.717 2.6-2.426c1.025.292 1.522 1.85 1.11 3.48Zm-15.653 6.77c.45 1.205 1.508 1.937 2.363 1.635s1.183-1.524.733-2.73c-.45-1.204-1.508-1.936-2.363-1.634s-1.183 1.524-.733 2.73Zm19.596 0c-.45 1.205-1.508 1.937-2.363 1.635s-1.183-1.524-.733-2.73c.45-1.204 1.508-1.936 2.363-1.634s1.183 1.524.733 2.73Z"></svg:path>`,
})
export class SolarPawLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPawOutlineIcon],svg[solar-paw-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.296 1.99c.593.553 1.051 1.368 1.286 2.299c.236.932.22 1.873-.028 2.654c-.245.767-.762 1.492-1.603 1.731c-.851.242-1.66-.117-2.247-.665c-.593-.553-1.051-1.367-1.286-2.298c-.236-.932-.22-1.873.028-2.654c.245-.768.762-1.492 1.603-1.731c.851-.242 1.66.117 2.247.665M8.273 3.089c-.354-.33-.64-.369-.814-.32c-.183.053-.427.253-.584.745c-.152.479-.18 1.132-.003 1.83c.177.7.506 1.244.855 1.57c.354.33.64.368.814.318c.183-.052.427-.252.584-.744c.152-.479.18-1.132.003-1.83c-.177-.7-.506-1.244-.855-1.57m2.577 6.351a3.6 3.6 0 0 1 2.3 0c.827.279 1.429.972 1.987 1.857c.56.89 1.17 2.129 1.944 3.707l.907 1.846c.2.405.358.728.472.985c.113.253.21.5.25.74c.276 1.613-.917 3.127-2.563 3.175a3 3 0 0 1-.77-.103a30 30 0 0 1-1.044-.274l-.016-.004a15 15 0 0 0-.961-.248a6.8 6.8 0 0 0-2.712 0a15 15 0 0 0-.961.248l-.016.004c-.429.117-.772.212-1.043.274a3 3 0 0 1-.771.103c-1.646-.048-2.839-1.562-2.563-3.175c.04-.24.138-.487.25-.74c.114-.257.273-.58.472-.985l.907-1.846c.775-1.578 1.383-2.818 1.944-3.707c.558-.885 1.16-1.578 1.988-1.857m1.82 1.421a2.1 2.1 0 0 0-1.34 0c-.313.105-.678.412-1.198 1.236c-.513.814-1.087 1.98-1.888 3.61l-.879 1.79c-.207.422-.353.72-.455.948a2 2 0 0 0-.142.383c-.127.744.424 1.402 1.128 1.423c.04.001.14-.007.388-.065a30 30 0 0 0 1.002-.264l.03-.008c.477-.131.753-.207 1.03-.263a8.3 8.3 0 0 1 3.307 0c.278.056.554.132 1.032.263l.029.008c.448.123.763.209 1.002.264c.247.058.349.066.388.065c.704-.02 1.255-.68 1.128-1.424a2 2 0 0 0-.142-.382a31 31 0 0 0-.455-.948l-.879-1.79c-.8-1.63-1.375-2.796-1.888-3.61c-.52-.824-.885-1.13-1.198-1.236m.747-6.571c.235-.931.693-1.746 1.286-2.298c.587-.548 1.396-.907 2.247-.665c.841.239 1.358.963 1.603 1.731c.249.78.264 1.722.028 2.654c-.235.931-.693 1.745-1.286 2.298c-.587.548-1.396.907-2.247.665c-.841-.24-1.358-.964-1.603-1.731c-.248-.781-.264-1.722-.028-2.654m3.123-1.52c-.174-.05-.46-.012-.814.319c-.348.325-.678.869-.855 1.568s-.15 1.352.004 1.831c.156.492.4.692.584.744c.173.05.459.012.813-.319c.349-.325.678-.869.855-1.568s.15-1.352-.003-1.831c-.157-.492-.401-.692-.584-.744M4.695 9.203c-.563-.39-1.292-.596-2.01-.342c-.721.255-1.152.876-1.33 1.538c-.179.664-.128 1.43.144 2.16c.273.73.739 1.345 1.306 1.738c.563.39 1.292.595 2.01.342c.721-.255 1.152-.876 1.33-1.538c.179-.664.129-1.43-.144-2.16s-.739-1.345-1.306-1.738m-.853 1.234c.288.2.576.553.754 1.028c.177.475.188.922.1 1.246c-.087.326-.247.466-.381.514c-.138.049-.365.04-.657-.162c-.288-.2-.576-.554-.754-1.028c-.177-.475-.188-.922-.1-1.246c.087-.326.247-.466.381-.514c.138-.049.365-.04.657.162M21.315 8.86c-.718-.253-1.447-.046-2.01.343c-.567.393-1.033 1.007-1.306 1.738c-.272.73-.322 1.496-.144 2.16c.178.662.609 1.283 1.33 1.538c.718.254 1.447.047 2.01-.342c.567-.393 1.033-1.007 1.306-1.738c.273-.73.323-1.496.144-2.16c-.178-.662-.609-1.283-1.33-1.538m-1.91 2.605c.177-.475.465-.828.753-1.028c.292-.202.52-.21.657-.162c.134.047.294.188.382.514c.087.324.076.77-.101 1.246c-.178.474-.466.828-.754 1.028c-.292.202-.519.21-.657.162c-.134-.047-.294-.188-.382-.514c-.087-.324-.076-.77.101-1.246" clip-rule="evenodd"></svg:path>`,
})
export class SolarPawOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPen2BoldIcon],svg[solar-pen-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.25 22a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m11.52 14.929l5.917-5.917a8.2 8.2 0 0 1-2.661-1.787a8.2 8.2 0 0 1-1.788-2.662L7.07 10.48c-.462.462-.693.692-.891.947a5.2 5.2 0 0 0-.599.969c-.139.291-.242.601-.449 1.22l-1.088 3.267a.848.848 0 0 0 1.073 1.073l3.266-1.088c.62-.207.93-.31 1.221-.45q.518-.246.969-.598c.255-.199.485-.43.947-.891m7.56-7.559a3.146 3.146 0 0 0-4.45-4.449l-.71.71l.031.09c.26.749.751 1.732 1.674 2.655A7 7 0 0 0 18.37 8.08z"></svg:path>`,
})
export class SolarPen2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPen2BoldDuotoneIcon],svg[solar-pen-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.25 22a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.08 7.372a3.147 3.147 0 0 0-4.45-4.45l-.71.71l.031.089c.26.75.751 1.733 1.675 2.656a7 7 0 0 0 2.745 1.705z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m13.951 3.6l-.03.03l.03.09c.26.75.75 1.732 1.674 2.656A7 7 0 0 0 18.37 8.08l-6.85 6.85c-.462.462-.693.693-.948.891q-.452.352-.969.6c-.291.138-.601.241-1.22.448l-3.268 1.09a.849.849 0 0 1-1.073-1.074l1.089-3.268c.206-.62.31-.93.448-1.22q.247-.518.6-.97c.198-.254.429-.485.89-.947z"></svg:path>`,
})
export class SolarPen2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPen2BrokenIcon],svg[solar-pen-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 22h4m12 0h-8m1.888-18.337l.742-.742a3.146 3.146 0 1 1 4.449 4.45l-.742.74m-4.449-4.448s.093 1.576 1.483 2.966s2.966 1.483 2.966 1.483m-4.449-4.45L7.071 10.48c-.462.462-.693.692-.891.947a5.2 5.2 0 0 0-.599.969c-.139.291-.242.601-.449 1.22l-.875 2.626m14.08-8.13L14.93 11.52m-3.41 3.41c-.462.462-.692.692-.947.891q-.451.352-.969.599c-.291.139-.601.242-1.22.448l-2.626.876m0 0l-.641.213a.848.848 0 0 1-1.073-1.073l.213-.641m1.501 1.5l-1.5-1.5"></svg:path>`,
})
export class SolarPen2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPen2LineDuotoneIcon],svg[solar-pen-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M4 22h16" opacity=".5"></svg:path><svg:path d="m14.63 2.921l-.742.742l-6.817 6.817c-.462.462-.693.692-.891.947a5.2 5.2 0 0 0-.599.969c-.139.291-.242.601-.449 1.22l-.875 2.626l-.213.641a.848.848 0 0 0 1.073 1.073l.641-.213l2.625-.875c.62-.207.93-.31 1.221-.45q.518-.246.969-.598c.255-.199.485-.43.947-.891l6.817-6.817l.742-.742a3.146 3.146 0 0 0-4.45-4.449Z"></svg:path><svg:path d="M13.888 3.664S13.98 5.24 15.37 6.63s2.966 1.483 2.966 1.483m-12.579 9.63l-1.5-1.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPen2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPen2LinearIcon],svg[solar-pen-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M4 22h16"></svg:path><svg:path d="m13.888 3.663l.742-.742a3.146 3.146 0 1 1 4.449 4.45l-.742.74m-4.449-4.448s.093 1.576 1.483 2.966s2.966 1.483 2.966 1.483m-4.449-4.45L7.071 10.48c-.462.462-.693.692-.891.947a5.2 5.2 0 0 0-.599.969c-.139.291-.242.601-.449 1.22l-.875 2.626m14.08-8.13l-6.817 6.817c-.462.462-.692.692-.947.891q-.451.352-.969.599c-.291.139-.601.242-1.22.448l-2.626.876m0 0l-.641.213a.848.848 0 0 1-1.073-1.073l.213-.641m1.501 1.5l-1.5-1.5"></svg:path></svg:g>`,
})
export class SolarPen2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPen2OutlineIcon],svg[solar-pen-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.1 2.391a3.896 3.896 0 0 1 5.509 5.51l-7.594 7.594c-.428.428-.69.69-.98.917a6 6 0 0 1-1.108.684c-.334.159-.685.276-1.259.467l-2.672.891l-.642.214a1.598 1.598 0 0 1-2.022-2.022l1.105-3.314c.191-.574.308-.925.467-1.259a6 6 0 0 1 .685-1.107c.227-.291.488-.553.916-.98zM5.96 16.885l-.844-.846l.728-2.185c.212-.636.3-.895.414-1.135q.212-.443.513-.83c.164-.21.356-.404.83-.879l5.891-5.89a6.05 6.05 0 0 0 1.349 2.04a6.05 6.05 0 0 0 2.04 1.348l-5.891 5.89c-.475.475-.668.667-.878.83q-.388.302-.83.514c-.24.114-.5.202-1.136.414zm12.116-9.573a4 4 0 0 1-.455-.129a4.5 4.5 0 0 1-1.72-1.084a4.54 4.54 0 0 1-1.084-1.72a4 4 0 0 1-.13-.455l.473-.472a2.396 2.396 0 0 1 3.388 3.388zM3.25 22a.75.75 0 0 1 .75-.75h16v1.5H4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarPen2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenBoldIcon],svg[solar-pen-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z"></svg:path>`,
})
export class SolarPenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenBoldDuotoneIcon],svg[solar-pen-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.849 8.713a3.932 3.932 0 0 0-5.562-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.093 3.32a8.75 8.75 0 0 0 3.43 2.13z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m14.439 4l-.039.038l.038.112a8.75 8.75 0 0 0 2.093 3.32a8.75 8.75 0 0 0 3.43 2.13l-8.56 8.56c-.578.577-.867.866-1.185 1.114a6.6 6.6 0 0 1-1.211.748c-.364.174-.751.303-1.526.561l-4.083 1.361a1.06 1.06 0 0 1-1.342-1.341l1.362-4.084c.258-.774.387-1.161.56-1.525q.309-.646.749-1.212c.248-.318.537-.606 1.114-1.183z"></svg:path>`,
})
export class SolarPenBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenBrokenIcon],svg[solar-pen-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14.36 4.079l.927-.927a3.932 3.932 0 0 1 5.561 5.561l-.927.927m-5.56-5.561s.115 1.97 1.853 3.707C17.952 9.524 19.92 9.64 19.92 9.64m-5.56-5.561L12 6.439m7.921 3.2l-5.26 5.262L11.56 18l-.16.161c-.578.577-.867.866-1.185 1.114a6.6 6.6 0 0 1-1.211.749c-.364.173-.751.302-1.526.56l-3.281 1.094m0 0l-.802.268a1.06 1.06 0 0 1-1.342-1.342l.268-.802m1.876 1.876l-1.876-1.876m0 0l1.094-3.281c.258-.775.387-1.162.56-1.526q.309-.647.749-1.211c.248-.318.537-.607 1.114-1.184L8.5 9.939"></svg:path>`,
})
export class SolarPenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenLineDuotoneIcon],svg[solar-pen-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m15.287 3.152l-.927.927l-8.521 8.52c-.577.578-.866.867-1.114 1.185a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.094 3.281l-.268.802a1.06 1.06 0 0 0 1.342 1.342l.802-.268l3.281-1.094c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114l8.521-8.521l.927-.927a3.932 3.932 0 0 0-5.561-5.561Z"></svg:path><svg:path d="M14.36 4.078s.116 1.97 1.854 3.708s3.707 1.853 3.707 1.853M4.198 21.678l-1.876-1.876" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenLinearIcon],svg[solar-pen-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="m14.36 4.079l.927-.927a3.932 3.932 0 0 1 5.561 5.561l-.927.927m-5.56-5.561s.115 1.97 1.853 3.707C17.952 9.524 19.92 9.64 19.92 9.64m-5.56-5.561l-8.522 8.52c-.577.578-.866.867-1.114 1.185a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.094 3.281m17.6-10.162L11.4 18.16c-.577.577-.866.866-1.184 1.114a6.6 6.6 0 0 1-1.211.749c-.364.173-.751.302-1.526.56l-3.281 1.094m0 0l-.802.268a1.06 1.06 0 0 1-1.342-1.342l.268-.802m1.876 1.876l-1.876-1.876"></svg:path>`,
})
export class SolarPenLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenNewRoundBoldIcon],svg[solar-pen-new-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.194 2.806a2.753 2.753 0 0 1 0 3.893l-.496.496a5 5 0 0 1-.533-.151a5.2 5.2 0 0 1-1.968-1.241a5.2 5.2 0 0 1-1.241-1.968a5 5 0 0 1-.15-.533l.495-.496a2.753 2.753 0 0 1 3.893 0M14.58 13.313c-.404.404-.606.606-.829.78a4.6 4.6 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-2.858.953a.742.742 0 0 1-.939-.94l.953-2.857c.18-.542.27-.813.392-1.068q.217-.453.524-.848c.174-.223.376-.425.78-.83l4.916-4.915a6.7 6.7 0 0 0 1.533 2.36a6.7 6.7 0 0 0 2.36 1.533z"></svg:path><svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10a10 10 0 0 0-.591-3.395l-5.823 5.823c-.351.352-.615.616-.912.847a6 6 0 0 1-1.125.696c-.34.162-.694.28-1.166.437l-2.932.977a2.242 2.242 0 0 1-2.836-2.836l.977-2.932c.157-.472.275-.826.437-1.166q.287-.6.696-1.125c.231-.297.495-.56.847-.912l5.823-5.823A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10"></svg:path>`,
})
export class SolarPenNewRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenNewRoundBoldDuotoneIcon],svg[solar-pen-new-round-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="10" fill="currentColor" opacity=".5"></svg:circle><svg:path fill="currentColor" d="M13.926 14.302c.245-.191.467-.413.912-.858l5.54-5.54c.134-.134.073-.365-.106-.427a6.1 6.1 0 0 1-2.3-1.449a6.1 6.1 0 0 1-1.45-2.3c-.061-.18-.292-.24-.426-.106l-5.54 5.54c-.445.444-.667.667-.858.912a5 5 0 0 0-.577.932c-.133.28-.233.579-.431 1.175l-.257.77l-.409 1.226l-.382 1.148a.817.817 0 0 0 1.032 1.033l1.15-.383l1.224-.408l.77-.257c.597-.199.895-.298 1.175-.432q.498-.237.933-.576m8.187-8.132a3.028 3.028 0 0 0-4.282-4.283l-.179.178a.73.73 0 0 0-.206.651c.027.15.077.37.168.633a4.9 4.9 0 0 0 1.174 1.863a4.9 4.9 0 0 0 1.862 1.174c.263.09.483.141.633.168c.24.043.48-.035.652-.207z"></svg:path>`,
})
export class SolarPenNewRoundBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenNewRoundBrokenIcon],svg[solar-pen-new-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m16.652 3.455l.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649m-3.892-3.893s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298m-3.893-3.893L10.687 9.42c-.404.404-.606.606-.78.829q-.308.395-.524.848c-.121.255-.211.526-.392 1.068L8.412 13.9m12.133-6.552l-2.983 2.982m-2.982 2.983c-.404.404-.606.606-.829.78a4.6 4.6 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579m0 0l-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122m1.688 1.688L8.412 13.9"></svg:path><svg:path fill="currentColor" d="M22.75 12a.75.75 0 0 0-1.5 0zM12 2.75a.75.75 0 0 0 0-1.5zM7.376 20.013a.75.75 0 1 0-.752 1.298zm-4.687-2.638a.75.75 0 1 0 1.298-.75zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 1.25C6.063 1.25 1.25 6.063 1.25 12h1.5A9.25 9.25 0 0 1 12 2.75zM6.624 21.311A10.7 10.7 0 0 0 12 22.75v-1.5a9.2 9.2 0 0 1-4.624-1.237zM1.25 12a10.7 10.7 0 0 0 1.439 5.375l1.298-.75A9.2 9.2 0 0 1 2.75 12z"></svg:path></svg:g>`,
})
export class SolarPenNewRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenNewRoundLineDuotoneIcon],svg[solar-pen-new-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16.652 3.455s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298M10.1 15.588L8.413 13.9" opacity=".5"></svg:path><svg:path d="m16.652 3.455l.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649l-5.964 5.965c-.404.404-.606.606-.829.78a4.6 4.6 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579l-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122l.579-1.735c.18-.542.27-.813.392-1.068q.217-.453.524-.848c.174-.223.376-.425.78-.83z"></svg:path><svg:path stroke-linecap="round" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPenNewRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenNewRoundLinearIcon],svg[solar-pen-new-round-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m16.652 3.455l.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649m-3.892-3.893s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298m-3.893-3.893L10.687 9.42c-.404.404-.606.606-.78.829q-.308.395-.524.848c-.121.255-.211.526-.392 1.068L8.412 13.9m12.133-6.552l-5.965 5.965c-.404.404-.606.606-.829.78a4.6 4.6 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579m0 0l-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122m1.688 1.688L8.412 13.9"></svg:path><svg:path stroke-linecap="round" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2"></svg:path></svg:g>`,
})
export class SolarPenNewRoundLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenNewRoundOutlineIcon],svg[solar-pen-new-round-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25a.75.75 0 0 1 0 1.5A9.25 9.25 0 1 0 21.25 12a.75.75 0 0 1 1.5 0c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12m15.52-9.724a3.503 3.503 0 0 1 4.954 4.953l-6.648 6.649c-.371.37-.604.604-.863.806a5.3 5.3 0 0 1-.987.61c-.297.141-.61.245-1.107.411l-2.905.968a1.492 1.492 0 0 1-1.887-1.887l.968-2.905c.166-.498.27-.81.411-1.107q.252-.526.61-.987c.202-.26.435-.492.806-.863zm3.893 1.06a2.003 2.003 0 0 0-2.832 0l-.376.377q.032.145.098.338c.143.413.415.957.927 1.469a3.9 3.9 0 0 0 1.807 1.025l.376-.376a2.003 2.003 0 0 0 0-2.832m-1.558 4.391a5.4 5.4 0 0 1-1.686-1.146a5.4 5.4 0 0 1-1.146-1.686L11.218 9.95c-.417.417-.58.582-.72.76a4 4 0 0 0-.437.71c-.098.203-.172.423-.359.982l-.431 1.295l1.032 1.033l1.295-.432c.56-.187.779-.261.983-.358q.378-.18.71-.439c.177-.139.342-.302.759-.718z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPenNewRoundOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenNewSquareBoldIcon],svg[solar-pen-new-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.194 2.806a2.753 2.753 0 0 1 0 3.893l-.496.496a5 5 0 0 1-.533-.151a5.2 5.2 0 0 1-1.968-1.241a5.2 5.2 0 0 1-1.241-1.968a5 5 0 0 1-.15-.533l.495-.496a2.753 2.753 0 0 1 3.893 0M14.58 13.313c-.404.404-.606.606-.829.78a4.6 4.6 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-2.858.953a.742.742 0 0 1-.939-.94l.953-2.857c.18-.542.27-.813.392-1.068q.217-.453.524-.848c.174-.223.376-.425.78-.83l4.916-4.915a6.7 6.7 0 0 0 1.533 2.36a6.7 6.7 0 0 0 2.36 1.533z"></svg:path><svg:path fill="currentColor" d="M20.536 20.536C22 19.07 22 16.714 22 12c0-1.548 0-2.842-.052-3.934l-6.362 6.362c-.351.352-.615.616-.912.847a6 6 0 0 1-1.125.696c-.34.162-.694.28-1.166.437l-2.932.977a2.242 2.242 0 0 1-2.836-2.836l.977-2.932c.157-.472.275-.826.437-1.166q.287-.6.696-1.125c.231-.297.495-.56.847-.912l6.362-6.362C14.842 2 13.548 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465"></svg:path>`,
})
export class SolarPenNewSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenNewSquareBoldDuotoneIcon],svg[solar-pen-new-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12c0-5.185 0-7.778 1.61-9.39C4.223 1 6.816 1 12 1s7.778 0 9.39 1.61C23 4.223 23 6.816 23 12s0 7.778-1.61 9.39C19.777 23 17.184 23 12 23s-7.778 0-9.39-1.61C1 19.777 1 17.184 1 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.926 14.302c.245-.191.467-.413.912-.858l5.54-5.54c.134-.134.073-.365-.106-.427a6.1 6.1 0 0 1-2.3-1.449a6.1 6.1 0 0 1-1.45-2.3c-.061-.18-.292-.24-.426-.106l-5.54 5.54c-.445.444-.667.667-.858.912a5 5 0 0 0-.577.932c-.133.28-.233.579-.431 1.175l-.257.77l-.409 1.226l-.382 1.148a.817.817 0 0 0 1.032 1.033l1.15-.383l1.224-.408l.77-.257c.597-.199.895-.298 1.175-.432q.498-.237.933-.576m8.187-8.132a3.028 3.028 0 0 0-4.282-4.283l-.179.178a.73.73 0 0 0-.206.651c.027.15.077.37.168.633a4.9 4.9 0 0 0 1.174 1.863a4.9 4.9 0 0 0 1.862 1.174c.263.09.483.141.633.168c.24.043.48-.035.652-.207z"></svg:path>`,
})
export class SolarPenNewSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenNewSquareBrokenIcon],svg[solar-pen-new-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12v-1.5M13.5 2H12C7.286 2 4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536"></svg:path><svg:path d="m16.652 3.455l.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649m-3.892-3.893s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298m-3.893-3.893L10.687 9.42c-.404.404-.606.606-.78.829q-.308.395-.524.848c-.121.255-.211.526-.392 1.068L8.412 13.9m12.133-6.552l-2.983 2.982m-2.982 2.983c-.404.404-.606.606-.829.78a4.6 4.6 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579m0 0l-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122m1.688 1.688L8.412 13.9"></svg:path></svg:g>`,
})
export class SolarPenNewSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenNewSquareLineDuotoneIcon],svg[solar-pen-new-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5" opacity=".5"></svg:path><svg:path d="m17.3 2.806l-.648.65l-5.965 5.964c-.404.404-.606.606-.78.829q-.308.395-.524.848c-.121.255-.211.526-.392 1.068L8.412 13.9l-.374 1.123a.742.742 0 0 0 .94.939l1.122-.374l1.735-.579c.542-.18.813-.27 1.068-.392q.453-.217.848-.524c.223-.174.425-.376.83-.78l5.964-5.965l.649-.649A2.753 2.753 0 0 0 17.3 2.806Z"></svg:path><svg:path d="M16.652 3.455s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298M10.1 15.588L8.413 13.9" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPenNewSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenNewSquareLinearIcon],svg[solar-pen-new-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5"></svg:path><svg:path d="m16.652 3.455l.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649m-3.892-3.893s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298m-3.893-3.893L10.687 9.42c-.404.404-.606.606-.78.829q-.308.395-.524.848c-.121.255-.211.526-.392 1.068L8.412 13.9m12.133-6.552l-5.965 5.965c-.404.404-.606.606-.829.78a4.6 4.6 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579m0 0l-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122m1.688 1.688L8.412 13.9"></svg:path></svg:g>`,
})
export class SolarPenNewSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenNewSquareOutlineIcon],svg[solar-pen-new-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25H13.5a.75.75 0 0 1 0 1.5H12c-2.378 0-4.086.002-5.386.176c-1.279.172-2.05.5-2.62 1.069c-.569.57-.896 1.34-1.068 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386v-1.5a.75.75 0 0 1 1.5 0v1.557c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m4.827 1.026a3.503 3.503 0 0 1 4.954 4.953l-6.648 6.649c-.371.37-.604.604-.863.806a5.3 5.3 0 0 1-.987.61c-.297.141-.61.245-1.107.411l-2.905.968a1.492 1.492 0 0 1-1.887-1.887l.968-2.905c.166-.498.27-.81.411-1.107q.252-.526.61-.987c.202-.26.435-.492.806-.863zm3.893 1.06a2.003 2.003 0 0 0-2.832 0l-.376.377q.032.145.098.338c.143.413.415.957.927 1.469a3.9 3.9 0 0 0 1.807 1.025l.376-.376a2.003 2.003 0 0 0 0-2.832m-1.558 4.391a5.4 5.4 0 0 1-1.686-1.146a5.4 5.4 0 0 1-1.146-1.686L11.218 9.95c-.417.417-.58.582-.72.76a4 4 0 0 0-.437.71c-.098.203-.172.423-.359.982l-.431 1.295l1.032 1.033l1.295-.432c.56-.187.779-.261.983-.358q.378-.18.71-.439c.177-.139.342-.302.759-.718z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPenNewSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenOutlineIcon],svg[solar-pen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.757 2.621a4.682 4.682 0 0 1 6.622 6.622l-9.486 9.486c-.542.542-.86.86-1.216 1.137q-.628.492-1.35.835c-.406.193-.834.336-1.56.578l-3.332 1.11l-.802.268a1.81 1.81 0 0 1-2.29-2.29l1.378-4.133c.242-.727.385-1.155.578-1.562q.344-.72.835-1.35c.276-.354.595-.673 1.137-1.215zM4.4 20.821l2.841-.948c.791-.264 1.127-.377 1.44-.526q.572-.274 1.073-.663c.273-.214.525-.463 1.115-1.053l7.57-7.57a7.36 7.36 0 0 1-2.757-1.744A7.36 7.36 0 0 1 13.94 5.56l-7.57 7.57c-.59.589-.84.84-1.053 1.114q-.39.5-.663 1.073c-.149.313-.262.649-.526 1.44L3.18 19.6zM15.155 4.343c.035.175.092.413.189.69a5.86 5.86 0 0 0 1.4 2.222a5.86 5.86 0 0 0 2.221 1.4c.278.097.516.154.691.189l.662-.662a3.182 3.182 0 0 0-4.5-4.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPeopleNearbyBoldIcon],svg[solar-people-nearby-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.25 4a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m8.223 11.574l-2.175-.725a1.532 1.532 0 0 1 .805-2.952l1.898.407l.21.044a15 15 0 0 0 6.288-.044l1.897-.407a1.532 1.532 0 0 1 .806 2.952l-2.175.725c-.263.088-.394.132-.493.193a1 1 0 0 0-.466.986c.016.115.066.244.165.503l1.247 3.242a1.473 1.473 0 0 1-2.654 1.26L12 15l-1.576 2.757a1.473 1.473 0 0 1-2.654-1.26l1.247-3.241c.1-.259.149-.388.165-.503a1 1 0 0 0-.466-.986c-.099-.061-.23-.105-.493-.193"></svg:path><svg:path fill="currentColor" d="M12 22c5.523 0 10-2.015 10-4.5c0-1.722-2.15-3.218-5.306-3.975l.936 2.434c.749 1.948-.688 4.04-2.775 4.04a2.97 2.97 0 0 1-2.581-1.497l-.274-.48l-.274.48A2.97 2.97 0 0 1 9.147 20c-2.087 0-3.525-2.093-2.776-4.041l.936-2.434C4.149 14.282 2 15.778 2 17.5C2 19.985 6.477 22 12 22"></svg:path>`,
})
export class SolarPeopleNearbyBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPeopleNearbyBoldDuotoneIcon],svg[solar-people-nearby-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.717 20.362C21.143 19.585 22 18.587 22 17.5c0-1.152-.963-2.204-2.546-3C17.623 13.58 14.962 13 12 13s-5.623.58-7.454 1.5C2.963 15.296 2 16.348 2 17.5s.963 2.204 2.546 3C6.377 21.42 9.038 22 12 22c3.107 0 5.882-.637 7.717-1.638" opacity=".6"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.25 4a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m8.223 11.574l-2.175-.725a1.532 1.532 0 0 1 .805-2.952l1.898.407l.21.044a15 15 0 0 0 6.288-.044l1.897-.407a1.532 1.532 0 0 1 .806 2.952l-2.175.725c-.263.088-.394.132-.493.193a1 1 0 0 0-.466.986c.016.115.066.244.165.503l1.247 3.242a1.473 1.473 0 0 1-2.654 1.26L12 15l-1.576 2.757a1.473 1.473 0 0 1-2.654-1.26l1.247-3.241c.1-.259.149-.388.165-.503a1 1 0 0 0-.466-.986c-.099-.061-.23-.105-.493-.193"></svg:path>`,
})
export class SolarPeopleNearbyBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPeopleNearbyBrokenIcon],svg[solar-people-nearby-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M14 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path><svg:path fill="currentColor" d="m6.048 10.849l.237-.712zm2.175.725l-.237.712zm.794 1.682l-.7-.27zM7.77 16.498l.7.269zm10.182-5.649l-.237-.712zm-2.175.725l.237.712zm-.794 1.682l.7-.27zm1.247 3.242l-.7.269zm-5.806 1.26l.651.372zM12 15l.651-.372a.75.75 0 0 0-1.302 0zm5.147-7.103l-.158-.733zm-1.898.407l.157.733zm-6.498 0l.157-.734zm-1.898-.407l-.157.733zm6.723 9.86l-.651.372zm1.462-9.409l-.152-.734zm-6.076 0l-.152.735zm6.322 3.419l.394.638zm-.466.986l.743-.102zm-6.102-.986l-.394.638zm.466.986l.743.102zm1.163-3.43a.75.75 0 0 0 .158-1.493zm3.152-1.493a.75.75 0 0 0 .158 1.492zm-7.686 3.73l2.175.726l.474-1.423l-2.175-.726zm2.506 1.427L7.07 16.228l1.4.539l1.247-3.242zm9.398-2.85l-2.175.726l.474 1.423l2.175-.726zm-3.432 3.388l1.247 3.242l1.4-.539l-1.247-3.241zm-3.208 4.605l1.576-2.758l-1.302-.744l-1.576 2.757zM16.99 7.164l-1.897.406l.314 1.467l1.898-.407zm-8.08.406l-1.9-.406l-.314 1.466l1.898.407zm2.44 7.802l1.576 2.758l1.302-.745l-1.576-2.757zm3.743-7.802l-.206.044l.304 1.469l.216-.046zM8.594 9.037l.216.046l.304-1.47l-.206-.043zm.551 10.213c.798 0 1.535-.428 1.93-1.12l-1.302-.745a.72.72 0 0 1-.628.365zm6.385-2.483a.723.723 0 0 1-.675.983v1.5a2.223 2.223 0 0 0 2.075-3.022zm.01-5.904c-.222.074-.458.147-.65.265l.788 1.277c-.01.005-.002-.001.056-.023c.061-.023.143-.05.28-.096zm.143 2.124a8 8 0 0 1-.104-.277c-.02-.059-.02-.069-.018-.059l-1.486.204c.03.223.124.452.208.67zm-.793-1.859a1.75 1.75 0 0 0-.815 1.727l1.486-.204a.25.25 0 0 1 .117-.246zm3.36-1.733a.78.78 0 0 1-.535.742l.474 1.423a2.28 2.28 0 0 0 1.561-2.165zM7.07 16.228a2.223 2.223 0 0 0 2.075 3.022v-1.5a.723.723 0 0 1-.675-.983zm.916-3.942c.137.045.219.073.28.096c.058.022.065.028.056.023l.788-1.277c-.192-.118-.428-.191-.65-.265zm1.73 1.24c.085-.22.178-.448.209-.671l-1.486-.204c.001-.01.001 0-.018.059a8 8 0 0 1-.104.277zm-1.394-1.121a.25.25 0 0 1 .117.246l1.486.204a1.75 1.75 0 0 0-.815-1.727zM4.25 9.395c0 .983.629 1.855 1.56 2.165l.475-1.423a.78.78 0 0 1-.535-.742zm1.5 0c0-.498.46-.87.946-.765l.315-1.466A2.282 2.282 0 0 0 4.25 9.395zm7.175 8.735a2.22 2.22 0 0 0 1.93 1.12v-1.5c-.26 0-.5-.14-.628-.365zm6.825-8.735a2.282 2.282 0 0 0-2.76-2.231l.314 1.466a.782.782 0 0 1 .946.765zM10.503 7.83q-.7-.074-1.39-.216L8.81 9.083q.762.158 1.535.24zm4.384-.216q-.69.142-1.39.216l.158 1.492a16 16 0 0 0 1.535-.24z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.454 15c1.583.796 2.546 1.848 2.546 3c0 .748-.406 1.454-1.124 2.075M4.546 15C2.963 15.796 2 16.848 2 18c0 2.485 4.477 4.5 10 4.5c1.821 0 3.53-.22 5-.602"></svg:path></svg:g>`,
})
export class SolarPeopleNearbyBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPeopleNearbyLineDuotoneIcon],svg[solar-people-nearby-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M14 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path><svg:path fill="currentColor" d="m6.048 10.849l.237-.712zm2.175.725l-.237.712zm.794 1.682l-.7-.27zM7.77 16.498l.7.269zm10.182-5.649l-.237-.712zm-2.175.725l.237.712zm-.794 1.682l.7-.27zm1.247 3.242l-.7.269zm-5.806 1.26l.651.372zM12 15l.651-.372a.75.75 0 0 0-1.302 0zm5.147-7.103l-.158-.733zm-1.898.407l.157.733zm-6.498 0l.157-.734zm-1.898-.407l-.157.733zm6.723 9.86l-.651.372zm1.462-9.409l-.152-.734zm-6.076 0l-.152.735zm6.322 3.419l.394.638zm-.466.986l.743-.102zm-6.102-.986l-.394.638zm.466.986l.743.102zM5.81 11.56l2.175.726l.474-1.423l-2.175-.726zm2.506 1.427L7.07 16.228l1.4.539l1.247-3.242zm9.398-2.85l-2.175.726l.474 1.423l2.175-.726zm-3.432 3.388l1.247 3.242l1.4-.539l-1.247-3.241zm-3.208 4.605l1.576-2.758l-1.302-.744l-1.576 2.757zM16.99 7.164l-1.897.406l.314 1.467l1.898-.407zm-8.08.406l-1.9-.406l-.314 1.466l1.898.407zm2.44 7.802l1.576 2.758l1.302-.745l-1.576-2.757zm3.743-7.802l-.206.044l.304 1.469l.216-.046zM8.594 9.037l.216.046l.304-1.47l-.206-.043zm6.293-1.423a14.25 14.25 0 0 1-5.773 0L8.81 9.083a15.75 15.75 0 0 0 6.38 0zM9.145 19.25c.798 0 1.535-.428 1.93-1.12l-1.302-.745a.72.72 0 0 1-.628.365zm6.385-2.483a.723.723 0 0 1-.675.983v1.5a2.223 2.223 0 0 0 2.075-3.022zm.01-5.904c-.222.074-.458.147-.65.265l.788 1.277c-.01.005-.002-.001.056-.023c.061-.023.143-.05.28-.096zm.143 2.124a8 8 0 0 1-.104-.277c-.02-.059-.02-.069-.018-.059l-1.486.204c.03.223.124.452.208.67zm-.793-1.859a1.75 1.75 0 0 0-.815 1.727l1.486-.204a.25.25 0 0 1 .117-.246zm3.36-1.733a.78.78 0 0 1-.535.742l.474 1.423a2.28 2.28 0 0 0 1.561-2.165zM7.07 16.228a2.223 2.223 0 0 0 2.075 3.022v-1.5a.723.723 0 0 1-.675-.983zm.916-3.942c.137.045.219.073.28.096c.058.022.065.028.056.023l.788-1.277c-.192-.118-.428-.191-.65-.265zm1.73 1.24c.085-.22.178-.448.209-.671l-1.486-.204c.001-.01.001 0-.018.059a8 8 0 0 1-.104.277zm-1.394-1.121a.25.25 0 0 1 .117.246l1.486.204a1.75 1.75 0 0 0-.815-1.727zM4.25 9.395c0 .983.629 1.855 1.56 2.165l.475-1.423a.78.78 0 0 1-.535-.742zm1.5 0c0-.498.46-.87.946-.765l.315-1.466A2.282 2.282 0 0 0 4.25 9.395zm7.175 8.735a2.22 2.22 0 0 0 1.93 1.12v-1.5c-.26 0-.5-.14-.628-.365zm6.825-8.735a2.282 2.282 0 0 0-2.76-2.231l.314 1.466a.782.782 0 0 1 .946.765z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.454 14.5c1.583.796 2.546 1.848 2.546 3c0 2.485-4.477 4.5-10 4.5S2 19.985 2 17.5c0-1.152.963-2.204 2.546-3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPeopleNearbyLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPeopleNearbyLinearIcon],svg[solar-people-nearby-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M14 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path><svg:path fill="currentColor" d="m6.048 10.849l.237-.712zm2.175.725l-.237.712zm.794 1.682l-.7-.27zM7.77 16.498l.7.269zm10.182-5.649l-.237-.712zm-2.175.725l.237.712zm-.794 1.682l.7-.27zm1.247 3.242l-.7.269zm-5.806 1.26l.651.372zM12 15l.651-.372a.75.75 0 0 0-1.302 0zm5.147-7.103l-.158-.733zm-1.898.407l.157.733zm-6.498 0l.157-.734zm-1.898-.407l-.157.733zm6.723 9.86l-.651.372zm1.462-9.409l-.152-.734zm-6.076 0l-.152.735zm6.322 3.419l.394.638zm-.466.986l.743-.102zm-6.102-.986l-.394.638zm.466.986l.743.102zM5.81 11.56l2.175.726l.474-1.423l-2.175-.726zm2.506 1.427L7.07 16.228l1.4.539l1.247-3.242zm9.398-2.85l-2.175.726l.474 1.423l2.175-.726zm-3.432 3.388l1.247 3.242l1.4-.539l-1.247-3.241zm-3.208 4.605l1.576-2.758l-1.302-.744l-1.576 2.757zM16.99 7.164l-1.897.406l.314 1.467l1.898-.407zm-8.08.406l-1.9-.406l-.314 1.466l1.898.407zm2.44 7.802l1.576 2.758l1.302-.745l-1.576-2.757zm3.743-7.802l-.206.044l.304 1.469l.216-.046zM8.594 9.037l.216.046l.304-1.47l-.206-.043zm6.293-1.423a14.25 14.25 0 0 1-5.773 0L8.81 9.083a15.75 15.75 0 0 0 6.38 0zM9.145 19.25c.798 0 1.535-.428 1.93-1.12l-1.302-.745a.72.72 0 0 1-.628.365zm6.385-2.483a.723.723 0 0 1-.675.983v1.5a2.223 2.223 0 0 0 2.075-3.022zm.01-5.904c-.222.074-.458.147-.65.265l.788 1.277c-.01.005-.002-.001.056-.023c.061-.023.143-.05.28-.096zm.143 2.124a8 8 0 0 1-.104-.277c-.02-.059-.02-.069-.018-.059l-1.486.204c.03.223.124.452.208.67zm-.793-1.859a1.75 1.75 0 0 0-.815 1.727l1.486-.204a.25.25 0 0 1 .117-.246zm3.36-1.733a.78.78 0 0 1-.535.742l.474 1.423a2.28 2.28 0 0 0 1.561-2.165zM7.07 16.228a2.223 2.223 0 0 0 2.075 3.022v-1.5a.723.723 0 0 1-.675-.983zm.916-3.942c.137.045.219.073.28.096c.058.022.065.028.056.023l.788-1.277c-.192-.118-.428-.191-.65-.265zm1.73 1.24c.085-.22.178-.448.209-.671l-1.486-.204c.001-.01.001 0-.018.059a8 8 0 0 1-.104.277zm-1.394-1.121a.25.25 0 0 1 .117.246l1.486.204a1.75 1.75 0 0 0-.815-1.727zM4.25 9.395c0 .983.629 1.855 1.56 2.165l.475-1.423a.78.78 0 0 1-.535-.742zm1.5 0c0-.498.46-.87.946-.765l.315-1.466A2.282 2.282 0 0 0 4.25 9.395zm7.175 8.735a2.22 2.22 0 0 0 1.93 1.12v-1.5c-.26 0-.5-.14-.628-.365zm6.825-8.735a2.282 2.282 0 0 0-2.76-2.231l.314 1.466a.782.782 0 0 1 .946.765z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.454 14.5c1.583.796 2.546 1.848 2.546 3c0 2.485-4.477 4.5-10 4.5S2 19.985 2 17.5c0-1.152.963-2.204 2.546-3"></svg:path></svg:g>`,
})
export class SolarPeopleNearbyLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPeopleNearbyOutlineIcon],svg[solar-people-nearby-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M9.25 4a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0m7.74 3.164a2.282 2.282 0 0 1 1.2 4.397l-2.176.725a8 8 0 0 0-.338.12a.25.25 0 0 0-.115.243l.018.06c.021.062.052.143.104.278l1.247 3.242a2.223 2.223 0 0 1-4.005 1.9L12 16.513l-.925 1.618A2.223 2.223 0 0 1 7.07 16.23l1.247-3.242a9 9 0 0 0 .104-.277l.018-.06a.25.25 0 0 0-.115-.244l-.058-.024a8 8 0 0 0-.28-.096L5.81 11.56a2.282 2.282 0 0 1 1.2-4.397l1.897.406l.206.044a14.25 14.25 0 0 0 5.772 0c.05-.01.1-.02.206-.044zm1.26 2.232c0-.499-.46-.87-.946-.765l-1.9.407l-.214.045a15.75 15.75 0 0 1-6.593-.045l-1.9-.407a.782.782 0 0 0-.412 1.507l2.175.725l.055.018c.205.068.42.139.595.248c.59.363.909 1.04.815 1.726c-.028.205-.11.415-.187.617l-.021.053l-1.247 3.242a.723.723 0 0 0 1.303.619l1.576-2.758a.75.75 0 0 1 1.302 0l1.576 2.758a.723.723 0 0 0 1.303-.619l-1.247-3.242l-.02-.053c-.079-.202-.16-.412-.188-.617a1.75 1.75 0 0 1 .815-1.726c.176-.11.39-.18.595-.248l.055-.018l2.175-.725a.78.78 0 0 0 .535-.742M5.216 14.163a.75.75 0 0 1-.333 1.007c-1.52.765-2.133 1.625-2.133 2.33c0 .764.724 1.705 2.487 2.498C6.929 20.76 9.32 21.25 12 21.25s5.071-.49 6.763-1.252c1.763-.793 2.487-1.734 2.487-2.498c0-.705-.612-1.565-2.133-2.33a.75.75 0 1 1 .674-1.34c1.646.828 2.959 2.07 2.959 3.67c0 1.722-1.515 3.03-3.371 3.866c-1.927.867-4.537 1.384-7.379 1.384s-5.452-.517-7.379-1.384C2.765 20.53 1.25 19.222 1.25 17.5c0-1.6 1.313-2.842 2.96-3.67a.75.75 0 0 1 1.006.333" clip-rule="evenodd"></svg:path>`,
})
export class SolarPeopleNearbyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPerfumeBoldIcon],svg[solar-perfume-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.4 12.15C3.45 9.16 6.455 7 10 7c3.957 0 7.243 2.691 7.886 6.226c-.655-.276-1.505-.505-2.365-.648c-1.735-.288-3.06.312-4.195.83l-.011.005c-1.154.527-2.111.964-3.37.822c-1.003-.113-1.906-.43-2.754-.806c-.384-.17-.749-.348-1.11-.525l-.121-.059a19 19 0 0 0-1.179-.54z"></svg:path><svg:path fill="currentColor" d="M2.053 13.628a7 7 0 0 0-.053.867c0 1.915.766 3.662 2.028 4.987c.45.473.675.709 1.618 1.114C6.59 21 7.24 21 8.542 21h2.916c1.302 0 1.952 0 2.896-.404c.943-.405 1.168-.641 1.619-1.114c1.158-1.217 1.898-2.79 2.012-4.52l-.349-.194c-.471-.262-1.354-.543-2.361-.71c-1.239-.206-2.184.193-3.326.715l-.11.05c-1.094.5-2.386 1.092-4.062.903c-1.215-.137-2.275-.519-3.194-.926c-.41-.182-.8-.372-1.16-.548l-.12-.059a18 18 0 0 0-1.084-.498zM12.56 2.44c.354.353.423.88.437 1.81h1.323a5.75 5.75 0 0 1 2.571.607l.836.418c.681-.549 1.8-.587 2.773-.025c1.196.69 1.718 2.025 1.165 2.982c-.552.956-1.97 1.172-3.165.482c-.844-.488-1.353-1.297-1.384-2.067l-.896-.448a4.25 4.25 0 0 0-1.9-.449H13v.734A9.5 9.5 0 0 0 10 6c-1.05 0-2.06.17-3 .484V5.75h.107c.097.001.21.002.306 0c.139-.005.327-.018.516-.076c.202-.063.437-.188.608-.435c.166-.238.213-.505.213-.739s-.047-.501-.213-.74a1.14 1.14 0 0 0-.609-.434a2 2 0 0 0-.516-.075a8 8 0 0 0-.304-.001H7.07c.059-.354.168-.61.368-.81C7.88 2 8.586 2 10 2s2.121 0 2.56.44"></svg:path>`,
})
export class SolarPerfumeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPerfumeBoldDuotoneIcon],svg[solar-perfume-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 5.75h.107c.097.001.21.002.306 0c.139-.005.327-.018.516-.076c.202-.063.437-.188.608-.435c.166-.238.213-.505.213-.739s-.047-.501-.213-.74a1.14 1.14 0 0 0-.609-.434a2 2 0 0 0-.516-.075a8 8 0 0 0-.412 0z" clip-rule="evenodd" opacity=".4"></svg:path><svg:g fill="currentColor" opacity=".5"><svg:path d="M2.147 13.059A7 7 0 0 0 2 14.495c0 1.915.766 3.662 2.028 4.987c.45.473.675.709 1.618 1.114C6.59 21 7.24 21 8.542 21h2.916c1.302 0 1.952 0 2.896-.404c.943-.405 1.168-.641 1.619-1.114C17.233 18.157 18 16.41 18 14.495q0-.199-.01-.395c-.598-.316-1.6-.612-2.676-.784c-3.07-.491-4.688 1.988-7.78 1.653c-2.215-.24-3.936-1.318-5.387-1.91"></svg:path><svg:path d="M7.534 14.969c3.092.335 4.71-2.144 7.78-1.653c1.075.172 2.078.468 2.675.784C17.77 10.144 14.277 7 10 7c-3.894 0-7.138 2.606-7.853 6.059c1.45.592 3.172 1.67 5.387 1.91"></svg:path></svg:g><svg:path fill="currentColor" d="M13 7.545V5c0-1.414 0-2.121-.44-2.56C12.122 2 11.415 2 10 2s-2.121 0-2.56.44c-.201.2-.31.456-.37.81h.038c.096-.001.209-.002.304.001c.14.004.328.017.516.075c.203.063.438.188.61.435c.165.238.212.505.212.739s-.047.501-.213.74a1.14 1.14 0 0 1-.608.434a2 2 0 0 1-.516.075c-.096.003-.21.002-.306.002H7v1.794A8.5 8.5 0 0 1 10 7c1.06 0 2.074.193 3 .545M2.147 13.059A7 7 0 0 0 2 14.495c0 1.915.766 3.662 2.028 4.987c.45.473.675.709 1.618 1.114C6.59 21 7.24 21 8.542 21h2.916c1.302 0 1.952 0 2.896-.404c.943-.405 1.168-.641 1.619-1.114C17.233 18.157 18 16.41 18 14.495q0-.199-.01-.395c-.598-.316-1.6-.612-2.676-.784c-3.07-.491-4.688 1.988-7.78 1.653c-2.215-.24-3.936-1.318-5.387-1.91m18.401-7.681c1.253.647 1.8 1.897 1.221 2.792c-.579.896-2.064 1.098-3.317.452s-1.8-1.897-1.221-2.792c.579-.896 2.064-1.098 3.317-.452"></svg:path><svg:path fill="currentColor" d="M13 5.75h1.32c.66 0 1.31.154 1.9.449l.78.39a1.45 1.45 0 0 1 .23-.76c.14-.215.331-.39.56-.523l-.899-.449a5.75 5.75 0 0 0-2.571-.607H13z" opacity=".5"></svg:path>`,
})
export class SolarPerfumeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPerfumeBrokenIcon],svg[solar-perfume-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 5.422V5c0-1.414 0-2.121.44-2.56C7.878 2 8.585 2 10 2s2.121 0 2.56.44C13 2.878 13 3.585 13 5v2H7V5.5M13 7H7"></svg:path><svg:path d="M7 5c.552 0 1 .052 1-.5S7.552 4 7 4"></svg:path><svg:path stroke-linecap="round" d="M2.161 16A7 7 0 0 1 2 14.495C2 10.355 5.582 7 10 7s8 3.356 8 7.495c0 1.915-.766 3.662-2.027 4.987c-.45.473-.676.709-1.62 1.114C13.41 21 12.76 21 11.459 21H8.542c-1.302 0-1.952 0-2.896-.404a7 7 0 0 1-.646-.31"></svg:path><svg:path stroke-linecap="round" d="M2.5 13c1.435.58 3.143 1.73 5.36 1.98c2.49.28 3.995-1.396 6.14-1.685"></svg:path><svg:path d="M13.5 5h.82a5 5 0 0 1 2.236.528L17.5 6"></svg:path><svg:path d="M20.5 5.25c1.196.69 1.717 2.025 1.165 2.982c-.552.956-1.97 1.172-3.165.482s-1.717-2.026-1.165-2.982s1.97-1.173 3.165-.482Z"></svg:path></svg:g>`,
})
export class SolarPerfumeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPerfumeLineDuotoneIcon],svg[solar-perfume-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 5.422V5c0-1.414 0-2.121.44-2.56C7.878 2 8.585 2 10 2s2.121 0 2.56.44C13 2.878 13 3.585 13 5v2H7V5.5M13 7H7"></svg:path><svg:path d="M7 5c.552 0 1 .052 1-.5S7.552 4 7 4" opacity=".5"></svg:path><svg:path d="M10 7c-4.418 0-8 3.356-8 7.495c0 1.915.766 3.662 2.028 4.987c.45.473.675.709 1.618 1.114C6.59 21 7.24 21 8.542 21h2.916c1.302 0 1.952 0 2.896-.404c.943-.405 1.168-.641 1.619-1.114C17.233 18.157 18 16.41 18 14.495C18 10.355 14.418 7 10 7Z"></svg:path><svg:path stroke-linecap="round" d="M2.5 13c1.435.58 3.143 1.73 5.36 1.98c2.996.338 4.564-2.156 7.538-1.662c1.048.174 2.025.474 2.602.794" opacity=".5"></svg:path><svg:path d="M13.5 5h.82a5 5 0 0 1 2.236.528L17.5 6" opacity=".5"></svg:path><svg:path d="M20.5 5.25c1.196.69 1.717 2.025 1.165 2.982c-.552.956-1.97 1.172-3.165.482s-1.717-2.026-1.165-2.982s1.97-1.173 3.165-.482Z"></svg:path></svg:g>`,
})
export class SolarPerfumeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPerfumeLinearIcon],svg[solar-perfume-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 5.422V5c0-1.414 0-2.121.44-2.56C7.878 2 8.585 2 10 2s2.121 0 2.56.44C13 2.878 13 3.585 13 5v2H7V5.5M13 7H7"></svg:path><svg:path d="M7 5c.552 0 1 .052 1-.5S7.552 4 7 4m3 3c-4.418 0-8 3.356-8 7.495c0 1.915.766 3.662 2.028 4.987c.45.473.675.709 1.618 1.114C6.59 21 7.24 21 8.542 21h2.916c1.302 0 1.952 0 2.896-.404c.943-.405 1.168-.641 1.619-1.114C17.233 18.157 18 16.41 18 14.495C18 10.355 14.418 7 10 7Z"></svg:path><svg:path stroke-linecap="round" d="M2.5 13c1.435.58 3.143 1.73 5.36 1.98c2.996.338 4.564-2.156 7.538-1.662c1.048.174 2.025.474 2.602.794"></svg:path><svg:path d="M13.5 5h.82a5 5 0 0 1 2.236.528L17.5 6"></svg:path><svg:path d="M20.5 5.25c1.196.69 1.717 2.025 1.165 2.982c-.552.956-1.97 1.172-3.165.482s-1.717-2.026-1.165-2.982s1.97-1.173 3.165-.482Z"></svg:path></svg:g>`,
})
export class SolarPerfumeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPerfumeOutlineIcon],svg[solar-perfume-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.95 1.25h.1c.664 0 1.237 0 1.696.062c.492.066.963.215 1.345.597s.531.854.597 1.345c.04.289.054.623.059.996h.573a5.75 5.75 0 0 1 2.571.607l.118.06c.944-1.02 2.614-1.04 3.866-.317c1.412.815 2.273 2.564 1.44 4.007s-2.778 1.571-4.19.756c-1.12-.647-1.895-1.882-1.749-3.086l-.156-.078a4.25 4.25 0 0 0-1.9-.449h-.57V7l-.001.044c2.777 1.243 4.768 3.826 4.982 6.9q.03.127.014.26q.005.144.005.291c0 2.121-.85 4.05-2.234 5.504l-.018.018a5 5 0 0 1-.707.652c-.294.216-.644.402-1.142.616c-1.085.465-1.874.465-3.132.465H8.483c-1.258 0-2.047 0-3.132-.465c-.498-.214-.848-.4-1.142-.616a5 5 0 0 1-.707-.652L3.484 20C2.1 18.545 1.25 16.616 1.25 14.495c0-3.315 2.06-6.134 5.001-7.45L6.25 7V5.5l.001-.04l-.001-.038V4.95c0-.665 0-1.238.062-1.697c.066-.491.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062m7.103 11.68c-.755-2.942-3.59-5.177-7.045-5.18h-.016c-3.26.003-5.968 1.992-6.897 4.688c.286.126.576.266.865.407l.12.059c.362.177.727.355 1.11.524c.849.376 1.752.694 2.755.807c1.259.142 2.216-.295 3.37-.822l.011-.005c1.134-.518 2.46-1.118 4.195-.83c.529.088 1.054.208 1.532.352M2.774 13.94q.252.117.528.253l.121.06c.36.175.75.365 1.16.547c.919.407 1.979.789 3.194.926c1.676.188 2.968-.403 4.063-.904l.109-.05c1.142-.52 2.087-.92 3.326-.715c.775.13 1.477.326 1.974.529c-.023 1.673-.702 3.204-1.82 4.379c-.231.242-.356.371-.524.494c-.166.122-.401.256-.847.447c-.785.337-1.29.344-2.6.344H8.542c-1.31 0-1.815-.007-2.6-.344c-.446-.19-.68-.325-.847-.447c-.168-.123-.293-.252-.524-.494c-1.138-1.196-1.821-2.761-1.821-4.47q0-.28.024-.555m9.476-7.69h-4.5v-.533q.089-.016.179-.043c.202-.063.437-.188.608-.435c.166-.238.213-.505.213-.739s-.047-.501-.213-.74a1.14 1.14 0 0 0-.609-.434a1 1 0 0 0-.104-.027c.043-.206.099-.283.146-.33c.057-.056.159-.127.484-.17c.347-.047.818-.049 1.546-.049s1.2.002 1.546.048c.325.044.427.115.484.172s.128.159.172.484c.046.347.048.818.048 1.546zm6.625 1.814c-.98-.565-1.162-1.487-.89-1.957c.27-.47 1.16-.773 2.14-.208s1.162 1.488.89 1.958c-.27.47-1.16.773-2.14.207" clip-rule="evenodd"></svg:path>`,
})
export class SolarPerfumeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneBoldIcon],svg[solar-phone-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"></svg:path>`,
})
export class SolarPhoneBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneBoldDuotoneIcon],svg[solar-phone-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.1 13.359l.456-.453c.63-.626 1.611-.755 2.417-.317l1.91 1.039c1.227.667 1.498 2.302.539 3.255l-1.42 1.412c-.362.36-.81.622-1.326.67c-1.192.111-3.645.051-6.539-1.643zm-5.91-5.876l.287-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.065 1.14.453 3.22 2.149 5.776z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.063 11.497c-2.946-2.929-1.88-4.008-1.873-4.015l-4.039 4.04c.667 1.004 1.535 2.081 2.664 3.204c1.14 1.134 2.26 1.975 3.322 2.596L16.1 13.36s-1.082 1.076-4.037-1.862" opacity=".6"></svg:path>`,
})
export class SolarPhoneBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneBrokenIcon],svg[solar-phone-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.1 15.027l.545.517zm.456-.48l-.544-.516zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.064-9.55a.75.75 0 1 0-1.498.081zm5.439 1.88l.544.517zm.287-.302l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zm-3.656-.818a.75.75 0 0 0 1.087 1.033zm6.345 9.964l.544-.517zm-.399 6.756a.75.75 0 1 0 .798-1.27zm4.449.246a.75.75 0 0 0-.307 1.469zm.532-4.514l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zM8.359 15.959c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zM9.19 8.805a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02zm1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .422-.25l.035-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.006-.005l.047-.042q.014-.008-.005.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zm9.471 16.26c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47zm-4.638 3.478c-.983-.618-2.03-1.454-3.103-2.583l-1.087 1.033c1.154 1.215 2.297 2.132 3.392 2.82zm6.14 1.675a8.3 8.3 0 0 1-2.489-.159l-.307 1.469a9.8 9.8 0 0 0 2.944.182z"></svg:path>`,
})
export class SolarPhoneBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneCallingBoldIcon],svg[solar-phone-calling-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.556 14.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336M13.26 1.88a.75.75 0 0 1 .861-.62c.025.005.107.02.15.03q.129.027.352.09c.297.087.712.23 1.21.458c.996.457 2.321 1.256 3.697 2.631c1.376 1.376 2.175 2.702 2.632 3.698c.228.498.37.912.457 1.21a6 6 0 0 1 .113.454l.005.031a.765.765 0 0 1-.617.878a.75.75 0 0 1-.86-.617a3 3 0 0 0-.081-.327a7.4 7.4 0 0 0-.38-1.004c-.39-.85-1.092-2.024-2.33-3.262s-2.411-1.939-3.262-2.329a7.4 7.4 0 0 0-1.003-.38a6 6 0 0 0-.318-.08a.76.76 0 0 1-.626-.861"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.486 5.33a.75.75 0 0 1 .927-.516l-.206.721l.206-.72h.003l.003.001l.008.002l.02.006l.056.02q.067.023.177.07c.146.062.345.158.59.303c.489.29 1.157.77 1.942 1.556c.785.785 1.266 1.453 1.556 1.942c.145.245.241.444.303.59a3 3 0 0 1 .09.233l.005.02l.003.008v.003l.001.001s0 .002-.72.208l.72-.206a.75.75 0 0 1-1.439.422l-.003-.01l-.035-.088a4 4 0 0 0-.216-.417c-.223-.376-.626-.946-1.326-1.646s-1.269-1.102-1.646-1.325a4 4 0 0 0-.504-.25l-.01-.004a.75.75 0 0 1-.505-.925" clip-rule="evenodd"></svg:path>`,
})
export class SolarPhoneCallingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneCallingBoldDuotoneIcon],svg[solar-phone-calling-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.556 14.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.26 1.88a.75.75 0 0 1 .861-.62c.025.005.107.02.15.03q.129.027.352.09c.297.087.712.23 1.21.458c.996.457 2.321 1.256 3.697 2.631c1.376 1.376 2.175 2.702 2.632 3.698c.228.498.37.912.457 1.21a6 6 0 0 1 .113.454l.005.031a.765.765 0 0 1-.617.878a.75.75 0 0 1-.86-.617a3 3 0 0 0-.081-.327a7.4 7.4 0 0 0-.38-1.004c-.39-.85-1.092-2.024-2.33-3.262s-2.411-1.939-3.262-2.329a7.4 7.4 0 0 0-1.003-.38a6 6 0 0 0-.318-.08a.76.76 0 0 1-.626-.861"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.486 5.33a.75.75 0 0 1 .927-.516l-.206.721l.206-.72h.003l.003.001l.008.002l.02.006l.056.02q.067.023.177.07c.146.062.345.158.59.303c.489.29 1.157.77 1.942 1.556c.785.785 1.266 1.453 1.556 1.942c.145.245.241.444.303.59a3 3 0 0 1 .09.233l.005.02l.003.008v.003l.001.001s0 .002-.72.208l.72-.206a.75.75 0 0 1-1.439.422l-.003-.01l-.035-.088a4 4 0 0 0-.216-.417c-.223-.376-.626-.946-1.326-1.646s-1.269-1.102-1.646-1.325a4 4 0 0 0-.504-.25l-.01-.004a.75.75 0 0 1-.505-.925" clip-rule="evenodd"></svg:path>`,
})
export class SolarPhoneCallingBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneCallingBrokenIcon],svg[solar-phone-calling-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13.5 2s2.334.212 5.303 3.182c2.97 2.97 3.182 5.303 3.182 5.303m-7.778-4.949s.99.282 2.475 1.767s1.768 2.475 1.768 2.475"></svg:path><svg:path fill="currentColor" d="m15.1 15.027l.545.517zm.456-.48l-.544-.516zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.064-9.55a.75.75 0 1 0-1.498.081zm5.439 1.88l.544.517zm.287-.302l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zm-3.656-.818a.75.75 0 0 0 1.087 1.033zm6.345 9.964l.544-.517zm-.399 6.756a.75.75 0 1 0 .798-1.27zm4.449.246a.75.75 0 0 0-.307 1.469zm.532-4.514l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zM8.359 15.959c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zM9.19 8.805a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02zm1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .422-.25l.035-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.006-.005l.047-.042q.014-.008-.005.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zm9.471 16.26c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47zm-4.638 3.478c-.983-.618-2.03-1.454-3.103-2.583l-1.087 1.033c1.154 1.215 2.297 2.132 3.392 2.82zm6.14 1.675a8.3 8.3 0 0 1-2.489-.159l-.307 1.469a9.8 9.8 0 0 0 2.944.182z"></svg:path></svg:g>`,
})
export class SolarPhoneCallingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneCallingLineDuotoneIcon],svg[solar-phone-calling-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13.5 2s2.334.212 5.303 3.182c2.97 2.97 3.182 5.303 3.182 5.303m-7.778-4.949s.99.282 2.475 1.767s1.768 2.475 1.768 2.475"></svg:path><svg:path fill="currentColor" d="m15.1 15.027l-.543-.516zm.456-.48l.544.517zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.813-9.51l-.749.041zm6.475 1.538l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zM5.26 3.609l.544.516zM3.691 5.26l-.543-.516zm7.372 7.795l.544-.517zm4.582 2.488l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zm-5.53-2.168L3.149 4.745l1.088 1.033l1.57-1.653zm4.474 5.713a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02s-.002 0-.545-.516m1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .421-.25l.036-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.005-.005l.01-.01l.037-.032q.015-.008-.004.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zM3.752 6.926c-.022-.4.152-.8.484-1.148L3.148 4.745c-.536.564-.943 1.347-.894 2.261zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPhoneCallingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneCallingLinearIcon],svg[solar-phone-calling-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13.5 2s2.334.212 5.303 3.182c2.97 2.97 3.182 5.303 3.182 5.303m-7.778-4.949s.99.282 2.475 1.767s1.768 2.475 1.768 2.475"></svg:path><svg:path fill="currentColor" d="m15.1 15.027l-.543-.516zm.456-.48l.544.517zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.813-9.51l-.749.041zm6.475 1.538l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zM5.26 3.609l.544.516zM3.691 5.26l-.543-.516zm7.372 7.795l.544-.517zm4.582 2.488l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zm-5.53-2.168L3.149 4.745l1.088 1.033l1.57-1.653zm4.474 5.713a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02s-.002 0-.545-.516m1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .421-.25l.036-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.005-.005l.01-.01l.037-.032q.015-.008-.004.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zM3.752 6.926c-.022-.4.152-.8.484-1.148L3.148 4.745c-.536.564-.943 1.347-.894 2.261zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47z"></svg:path></svg:g>`,
})
export class SolarPhoneCallingLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneCallingOutlineIcon],svg[solar-phone-calling-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.718 3.092c1.226-1.291 3.254-1.05 4.268.384l1.26 1.784c.811 1.147.743 2.74-.225 3.76l-.245.257l-.002.006c-.013.036-.045.152-.013.372c.067.455.418 1.381 1.846 2.884c1.432 1.508 2.3 1.863 2.703 1.929a.6.6 0 0 0 .294-.007l.408-.43c.874-.92 2.236-1.101 3.335-.469l1.91 1.1c1.633.94 2.013 3.239.708 4.613l-1.42 1.495c-.443.467-1.048.866-1.795.94c-1.824.18-6.049-.055-10.478-4.719c-4.134-4.351-4.919-8.136-5.018-9.985l.666-.036l-.666.036c-.049-.914.358-1.697.894-2.262zm3.043 1.25c-.512-.724-1.433-.768-1.956-.217l-1.57 1.652c-.33.35-.505.75-.483 1.149c.08 1.51.731 4.952 4.607 9.032c4.064 4.28 7.809 4.4 9.244 4.259c.283-.028.575-.186.854-.48l1.42-1.495c.614-.646.453-1.808-.368-2.28l-1.91-1.1c-.513-.295-1.114-.204-1.499.202l-.456.48l-.527-.501c.527.5.527.501.526.502l-.001.001l-.003.004l-.007.006l-.014.014a1 1 0 0 1-.136.112c-.08.056-.186.119-.321.172c-.276.109-.64.167-1.091.094c-.878-.142-2.028-.773-3.55-2.376c-1.528-1.608-2.113-2.807-2.243-3.7c-.067-.454-.014-.817.084-1.092a1.6 1.6 0 0 1 .23-.427l.03-.037l.014-.015l.006-.007l.003-.003l.002-.001s0-.002.533.503l-.532-.505l.287-.302c.445-.469.51-1.263.088-1.86z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.26 1.88a.75.75 0 0 1 .861-.62c.025.005.107.02.15.03q.129.027.352.09c.297.087.712.23 1.21.458c.996.457 2.321 1.256 3.697 2.631c1.376 1.376 2.175 2.702 2.632 3.698c.228.498.37.912.457 1.21a6 6 0 0 1 .113.454l.005.031a.765.765 0 0 1-.617.878a.75.75 0 0 1-.86-.617a3 3 0 0 0-.081-.327a7.4 7.4 0 0 0-.38-1.004c-.39-.85-1.092-2.024-2.33-3.262s-2.411-1.939-3.262-2.329a7.4 7.4 0 0 0-1.003-.38a6 6 0 0 0-.318-.08a.76.76 0 0 1-.626-.861"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.486 5.33a.75.75 0 0 1 .927-.516l-.206.721l.207-.72h.002l.004.001l.007.002l.02.007q.023.006.057.019q.067.023.177.07c.145.062.344.158.589.303c.49.29 1.157.77 1.942 1.556c.785.785 1.267 1.453 1.556 1.942c.145.245.241.444.304.59a3 3 0 0 1 .089.233l.006.02l.002.008l.001.003v.002l-.72.207l.721-.206a.75.75 0 0 1-1.44.422l-.003-.01l-.035-.088a4 4 0 0 0-.216-.417c-.223-.376-.625-.946-1.325-1.646s-1.27-1.102-1.646-1.325a4 4 0 0 0-.504-.25l-.01-.004a.75.75 0 0 1-.506-.925" clip-rule="evenodd"></svg:path>`,
})
export class SolarPhoneCallingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneCallingRoundedBoldIcon],svg[solar-phone-calling-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38M13.26 1.88a.75.75 0 0 1 .861-.62c.025.005.107.02.15.03q.129.027.352.09c.297.087.712.23 1.21.458c.996.457 2.321 1.256 3.697 2.631c1.376 1.376 2.175 2.702 2.632 3.698c.228.498.37.912.457 1.21a6 6 0 0 1 .113.454l.005.031a.765.765 0 0 1-.617.878a.75.75 0 0 1-.86-.617a3 3 0 0 0-.081-.327a7.4 7.4 0 0 0-.38-1.004c-.39-.85-1.092-2.024-2.33-3.262s-2.411-1.939-3.262-2.329a7.4 7.4 0 0 0-1.003-.38a6 6 0 0 0-.318-.08a.76.76 0 0 1-.626-.861"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.486 5.33a.75.75 0 0 1 .927-.516l-.206.721l.206-.72h.003l.003.001l.008.002l.02.006l.056.02q.067.023.177.07c.146.062.345.158.59.303c.489.29 1.157.77 1.942 1.556c.785.785 1.266 1.453 1.556 1.942c.145.245.241.444.303.59a3 3 0 0 1 .09.233l.005.02l.003.008v.003l.001.001s0 .002-.72.208l.72-.206a.75.75 0 0 1-1.439.422l-.003-.01l-.035-.088a4 4 0 0 0-.216-.417c-.223-.376-.626-.946-1.326-1.646s-1.269-1.102-1.646-1.325a4 4 0 0 0-.504-.25l-.01-.004a.75.75 0 0 1-.505-.925" clip-rule="evenodd"></svg:path>`,
})
export class SolarPhoneCallingRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneCallingRoundedBoldDuotoneIcon],svg[solar-phone-calling-rounded-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.26 1.88a.75.75 0 0 1 .861-.62c.025.005.107.02.15.03q.129.027.352.09c.297.087.712.23 1.21.458c.996.457 2.321 1.256 3.697 2.631c1.376 1.376 2.175 2.702 2.632 3.698c.228.498.37.912.457 1.21a6 6 0 0 1 .113.454l.005.031a.765.765 0 0 1-.617.878a.75.75 0 0 1-.86-.617a3 3 0 0 0-.081-.327a7.4 7.4 0 0 0-.38-1.004c-.39-.85-1.092-2.024-2.33-3.262s-2.411-1.939-3.262-2.329a7.4 7.4 0 0 0-1.003-.38a6 6 0 0 0-.318-.08a.76.76 0 0 1-.626-.861"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.486 5.33a.75.75 0 0 1 .927-.516l-.206.721l.206-.72h.003l.003.001l.008.002l.02.006l.056.02q.067.023.177.07c.146.062.345.158.59.303c.489.29 1.157.77 1.942 1.556c.785.785 1.266 1.453 1.556 1.942c.145.245.241.444.303.59a3 3 0 0 1 .09.233l.005.02l.003.008v.003l.001.001s0 .002-.72.208l.72-.206a.75.75 0 0 1-1.439.422l-.003-.01l-.035-.088a4 4 0 0 0-.216-.417c-.223-.376-.626-.946-1.326-1.646s-1.269-1.102-1.646-1.325a4 4 0 0 0-.504-.25l-.01-.004a.75.75 0 0 1-.505-.925" clip-rule="evenodd"></svg:path>`,
})
export class SolarPhoneCallingRoundedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneCallingRoundedBrokenIcon],svg[solar-phone-calling-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 2s2.2.2 5 3s3 5 3 5m-7.793-4.464s.99.282 2.475 1.767s1.768 2.475 1.768 2.475M4.007 7.933c-.073 1.908.41 5.149 3.66 8.4a14 14 0 0 0 2.333 1.9M5.538 4.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53A9.8 9.8 0 0 1 13 19.611"></svg:path>`,
})
export class SolarPhoneCallingRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneCallingRoundedLineDuotoneIcon],svg[solar-phone-calling-rounded-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14 2s2.2.2 5 3s3 5 3 5m-7.793-4.464s.99.282 2.475 1.767s1.768 2.475 1.768 2.475"></svg:path><svg:path d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPhoneCallingRoundedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneCallingRoundedLinearIcon],svg[solar-phone-calling-rounded-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 2s2.2.2 5 3s3 5 3 5m-7.793-4.464s.99.282 2.475 1.767s1.768 2.475 1.768 2.475m-8.412-4.462l.649 1.163c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38Z"></svg:path>`,
})
export class SolarPhoneCallingRoundedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneCallingRoundedOutlineIcon],svg[solar-phone-calling-rounded-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.26 1.88a.75.75 0 0 1 .861-.62c.026.005.107.02.15.03q.129.028.352.091c.297.087.712.23 1.21.457c.996.457 2.321 1.256 3.697 2.632s2.175 2.701 2.632 3.698c.228.497.37.912.457 1.209a6 6 0 0 1 .113.455l.005.03a.765.765 0 0 1-.617.879a.75.75 0 0 1-.86-.617l-.014-.068a4 4 0 0 0-.067-.26a7.4 7.4 0 0 0-.38-1.003c-.39-.85-1.091-2.025-2.33-3.262c-1.237-1.238-2.411-1.94-3.262-2.33a7.4 7.4 0 0 0-1.003-.38a6 6 0 0 0-.318-.08a.76.76 0 0 1-.626-.86"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.486 5.33a.75.75 0 0 1 .927-.515l-.206.72l.206-.72h.003l.003.002l.008.002l.02.006q.023.007.056.02q.068.022.177.069c.146.062.345.159.59.303c.49.29 1.157.771 1.942 1.556s1.266 1.453 1.556 1.943c.145.244.241.443.304.59a3 3 0 0 1 .088.233l.007.02l.002.007v.003l.001.002l-.72.207l.72-.206a.75.75 0 0 1-1.439.423l-.003-.011l-.035-.088a4 4 0 0 0-.216-.416c-.223-.377-.625-.946-1.325-1.646s-1.27-1.103-1.646-1.326a4 4 0 0 0-.504-.25l-.011-.004a.75.75 0 0 1-.505-.924m-8.479-.923c1.68-1.68 4.516-1.552 5.686.544l.649 1.163c.763 1.369.438 3.096-.68 4.228a.63.63 0 0 0-.104.336c-.013.256.078.849.997 1.767c.918.918 1.51 1.01 1.767.997a.63.63 0 0 0 .337-.103c1.131-1.119 2.859-1.444 4.227-.68l1.163.649c2.096 1.17 2.224 4.005.544 5.685c-.899.898-2.093 1.697-3.498 1.75c-2.08.079-5.536-.458-8.958-3.88c-3.421-3.422-3.959-6.877-3.88-8.958c.053-1.404.852-2.6 1.75-3.498m4.376 1.275c-.6-1.073-2.21-1.32-3.315-.214c-.775.775-1.28 1.63-1.312 2.494c-.066 1.735.363 4.76 3.442 7.84s6.105 3.508 7.84 3.442c.863-.032 1.72-.537 2.494-1.312c1.106-1.106.86-2.715-.214-3.314l-1.163-.65c-.723-.403-1.74-.265-2.453.448c-.07.07-.516.486-1.307.524c-.81.04-1.791-.324-2.9-1.434c-1.111-1.11-1.475-2.091-1.435-2.902c.038-.791.455-1.237.524-1.306c.714-.714.851-1.73.448-2.453z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPhoneCallingRoundedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneLineDuotoneIcon],svg[solar-phone-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m16.1 13.359l.456-.453c.63-.626 1.611-.755 2.417-.317l1.91 1.039c1.227.667 1.498 2.302.539 3.255l-1.42 1.412c-.362.36-.81.622-1.326.67M4.003 5.745c-.035-.62.255-1.178.689-1.61l1.57-1.56c.874-.87 2.348-.735 3.111.284l1.261 1.684c.617.824.55 1.952-.157 2.654l-.286.286"></svg:path><svg:path d="M18.676 18.965c-1.63.152-5.614-.016-9.86-4.238c-4.005-3.982-4.723-7.395-4.813-8.981" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M16.1 13.359s-1.082 1.076-4.037-1.862s-1.872-4.015-1.872-4.015" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPhoneLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneLinearIcon],svg[solar-phone-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.1 13.359l-.528-.532zm.456-.453l.529.532zm2.417-.317l-.358.66zm1.91 1.039l-.358.659zm.539 3.255l.529.532zm-1.42 1.412l-.53-.531zm-1.326.67l.07.747zm-9.86-4.238l.528-.532zM4.002 5.746l-.749.042zm6.474 1.451l.53.532zm.157-2.654l.6-.449zM9.374 2.86l-.601.45zM6.26 2.575l.53.532zm-1.57 1.56l-.528-.531zm7.372 7.362l.529-.532zm4.567 2.394l.455-.453l-1.058-1.064l-.455.453zm1.985-.643l1.91 1.039l.716-1.318l-1.91-1.038zm2.278 3.103l-1.42 1.413l1.057 1.063l1.42-1.412zm-2.286 1.867c-1.45.136-5.201.015-9.263-4.023l-1.057 1.063c4.432 4.407 8.65 4.623 10.459 4.454zm-9.263-4.023c-3.871-3.85-4.512-7.087-4.592-8.492l-1.498.085c.1 1.768.895 5.356 5.033 9.47zm1.376-6.18l.286-.286L9.95 6.666l-.287.285zm.515-3.921L9.974 2.41l-1.201.899l1.26 1.684zM5.733 2.043l-1.57 1.56l1.058 1.064l1.57-1.56zm4.458 5.44c-.53-.532-.53-.532-.53-.53h-.002l-.003.004a1 1 0 0 0-.127.157c-.054.08-.113.185-.163.318a2.1 2.1 0 0 0-.088 1.071c.134.865.73 2.008 2.256 3.526l1.058-1.064c-1.429-1.42-1.769-2.284-1.832-2.692c-.03-.194.001-.29.01-.312q.009-.02 0-.006a.3.3 0 0 1-.03.039l-.01.01l-.01.009zm1.343 4.546c1.527 1.518 2.676 2.11 3.542 2.242c.443.068.8.014 1.071-.087a1.5 1.5 0 0 0 .42-.236l.05-.045l.007-.006l.003-.003l.001-.002s.002-.001-.527-.533c-.53-.532-.528-.533-.528-.533l.002-.002l.002-.002l.006-.005l.01-.01l.038-.03q.014-.009-.007.002c-.025.009-.123.04-.32.01c-.414-.064-1.284-.404-2.712-1.824zm-1.56-9.62C8.954 1.049 6.95.834 5.733 2.044L6.79 3.107c.532-.529 1.476-.475 1.983.202zM4.752 5.704c-.02-.346.139-.708.469-1.036L4.163 3.604c-.537.534-.96 1.29-.909 2.184zm14.72 12.06c-.274.274-.57.428-.865.455l.139 1.494c.735-.069 1.336-.44 1.784-.885zM11.006 7.73c.985-.979 1.058-2.527.229-3.635l-1.201.899c.403.539.343 1.246-.085 1.673zm9.52 6.558c.817.444.944 1.49.367 2.064l1.058 1.064c1.34-1.333.927-3.557-.71-4.446zm-3.441-.849c.384-.382 1.002-.476 1.53-.19l.716-1.317c-1.084-.59-2.428-.427-3.304.443z"></svg:path>`,
})
export class SolarPhoneLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneOutlineIcon],svg[solar-phone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.733 2.043c1.217-1.21 3.221-.995 4.24.367l1.262 1.684c.83 1.108.756 2.656-.229 3.635l-.238.238a.65.65 0 0 0-.008.306c.063.408.404 1.272 1.832 2.692s2.298 1.76 2.712 1.824a.7.7 0 0 0 .315-.009l.408-.406c.876-.87 2.22-1.033 3.304-.444l1.91 1.04c1.637.888 2.05 3.112.71 4.445l-1.421 1.412c-.448.445-1.05.816-1.784.885c-1.81.169-6.027-.047-10.46-4.454c-4.137-4.114-4.931-7.702-5.032-9.47l.749-.042l-.749.042c-.05-.894.372-1.65.91-2.184zm3.04 1.266c-.507-.677-1.451-.731-1.983-.202l-1.57 1.56c-.33.328-.488.69-.468 1.036c.08 1.405.72 4.642 4.592 8.492c4.062 4.038 7.813 4.159 9.263 4.023c.296-.027.59-.181.865-.454l1.42-1.413c.578-.574.451-1.62-.367-2.064l-1.91-1.039c-.528-.286-1.146-.192-1.53.19l-.455.453l-.53-.532c.53.532.529.533.528.533l-.001.002l-.003.003l-.007.006l-.015.014a1 1 0 0 1-.136.106c-.08.053-.186.112-.319.161c-.27.101-.628.155-1.07.087c-.867-.133-2.016-.724-3.543-2.242c-1.526-1.518-2.122-2.66-2.256-3.526c-.069-.442-.014-.8.088-1.07a1.5 1.5 0 0 1 .238-.42l.032-.035l.014-.015l.006-.006l.003-.003l.002-.002l.53.53l-.53-.531l.288-.285c.428-.427.488-1.134.085-1.673z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPhoneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneRoundedBoldIcon],svg[solar-phone-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38"></svg:path>`,
})
export class SolarPhoneRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneRoundedBoldDuotoneIcon],svg[solar-phone-rounded-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.687 6.48l-.65-1.164c-.884-1.585-3.106-1.772-4.5-.379c-.836.837-1.487 1.863-1.53 2.996c-.056 1.47.217 3.728 1.83 6.173l4.278-4.278c.922-.923 1.157-2.3.572-3.349m3.485 7.405l-4.278 4.279c2.445 1.612 4.704 1.885 6.173 1.83c1.133-.043 2.159-.695 2.996-1.532c1.393-1.393 1.206-3.615-.38-4.5l-1.162-.649c-1.05-.585-2.426-.35-3.349.572" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.025 12.976c-2.03-2.029-.91-3.148-.91-3.148l-4.279 4.278c.482.731 1.084 1.479 1.832 2.227s1.495 1.349 2.226 1.83l4.278-4.277s-1.119 1.119-3.148-.91" opacity=".5"></svg:path>`,
})
export class SolarPhoneRoundedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneRoundedBrokenIcon],svg[solar-phone-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4.007 7.933c-.073 1.908.41 5.149 3.66 8.4a14 14 0 0 0 2.333 1.9M5.538 4.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53A9.8 9.8 0 0 1 13 19.611"></svg:path>`,
})
export class SolarPhoneRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneRoundedLineDuotoneIcon],svg[solar-phone-rounded-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5.007 6.933C5.05 5.8 5.7 4.774 6.537 3.937c1.394-1.393 3.616-1.206 4.5.38l.65 1.162c.585 1.05.35 2.426-.572 3.349m5.952 10.165c1.133-.042 2.159-.694 2.996-1.53c1.393-1.394 1.206-3.616-.38-4.5l-1.162-.65c-1.05-.585-2.426-.35-3.349.572"></svg:path><svg:path d="M5.007 6.933c-.073 1.908.41 5.149 3.66 8.4c3.251 3.25 6.492 3.733 8.4 3.66m-1.895-6.108s-1.119 1.12-3.148-.91c-2.028-2.028-.91-3.147-.91-3.147" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPhoneRoundedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneRoundedLinearIcon],svg[solar-phone-rounded-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38Z"></svg:path>`,
})
export class SolarPhoneRoundedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneRoundedOutlineIcon],svg[solar-phone-rounded-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.007 3.407c1.68-1.68 4.516-1.552 5.686.544l.649 1.163c.763 1.368.438 3.095-.68 4.227a.63.63 0 0 0-.104.337c-.013.256.078.849.997 1.767c.918.918 1.51 1.01 1.767.997a.63.63 0 0 0 .337-.104c1.131-1.118 2.859-1.443 4.227-.68l1.163.65c2.096 1.17 2.224 4.004.544 5.685c-.899.898-2.093 1.697-3.498 1.75c-2.08.079-5.536-.459-8.958-3.88c-3.421-3.422-3.959-6.877-3.88-8.958c.053-1.405.852-2.6 1.75-3.498m4.376 1.275c-.6-1.074-2.21-1.32-3.315-.214c-.775.775-1.28 1.63-1.312 2.493c-.066 1.736.363 4.762 3.442 7.84c3.08 3.08 6.105 3.509 7.84 3.443c.863-.033 1.72-.537 2.494-1.312c1.106-1.106.86-2.716-.214-3.315l-1.163-.649c-.723-.403-1.74-.266-2.453.448c-.07.07-.516.486-1.307.524c-.81.04-1.791-.324-2.9-1.434c-1.111-1.11-1.475-2.091-1.435-2.902c.038-.791.455-1.237.524-1.307c.714-.713.851-1.729.448-2.452z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPhoneRoundedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChart2BoldIcon],svg[solar-pie-chart-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.222 4.601a9.5 9.5 0 0 1 1.395-.771c1.372-.615 2.058-.922 2.97-.33c.913.59.913 1.56.913 3.5v1.5c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586H17c1.94 0 2.91 0 3.5.912c.592.913.285 1.599-.33 2.97a9.5 9.5 0 0 1-10.523 5.435A9.5 9.5 0 0 1 6.222 4.601"></svg:path><svg:path fill="currentColor" d="M21.446 7.069a8.03 8.03 0 0 0-4.515-4.515C15.389 1.947 14 3.344 14 5v4a1 1 0 0 0 1 1h4c1.657 0 3.053-1.39 2.446-2.931"></svg:path>`,
})
export class SolarPieChart2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChart2BoldDuotoneIcon],svg[solar-pie-chart-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.222 4.601a9.5 9.5 0 0 1 1.395-.771c1.372-.615 2.058-.922 2.97-.33c.913.59.913 1.56.913 3.5v1.5c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586H17c1.94 0 2.91 0 3.5.912c.592.913.285 1.599-.33 2.97a9.5 9.5 0 0 1-10.523 5.435A9.5 9.5 0 0 1 6.222 4.601" opacity=".5"></svg:path><svg:path fill="currentColor" d="M21.446 7.069a8.03 8.03 0 0 0-4.515-4.515C15.389 1.947 14 3.344 14 5v4a1 1 0 0 0 1 1h4c1.657 0 3.053-1.39 2.446-2.931"></svg:path>`,
})
export class SolarPieChart2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChart2BrokenIcon],svg[solar-pie-chart-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21.446 7.069a8.03 8.03 0 0 0-4.515-4.515C15.389 1.947 14 3.344 14 5v4a1 1 0 0 0 1 1h4c1.657 0 3.053-1.39 2.446-2.931Z"></svg:path><svg:path stroke-linecap="round" d="M6.222 4.601a9.5 9.5 0 0 1 1.395-.771c1.372-.615 2.058-.922 2.97-.33c.913.59.913 1.56.913 3.5v1.5c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586H17c1.94 0 2.91 0 3.5.912c.592.913.285 1.599-.33 2.97a9.5 9.5 0 0 1-10.523 5.435A9.5 9.5 0 0 1 2.723 8.865"></svg:path></svg:g>`,
})
export class SolarPieChart2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChart2LineDuotoneIcon],svg[solar-pie-chart-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6.222 4.601a9.5 9.5 0 0 1 1.395-.771c1.372-.615 2.058-.922 2.97-.33c.913.59.913 1.56.913 3.5v1.5c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586H17c1.94 0 2.91 0 3.5.912c.592.913.285 1.599-.33 2.97a9.5 9.5 0 0 1-10.523 5.435A9.5 9.5 0 0 1 6.222 4.601Z" opacity=".5"></svg:path><svg:path d="M21.446 7.069a8.03 8.03 0 0 0-4.515-4.515C15.389 1.947 14 3.344 14 5v4a1 1 0 0 0 1 1h4c1.657 0 3.053-1.39 2.446-2.931Z"></svg:path></svg:g>`,
})
export class SolarPieChart2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChart2LinearIcon],svg[solar-pie-chart-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6.222 4.601a9.5 9.5 0 0 1 1.395-.771c1.372-.615 2.058-.922 2.97-.33c.913.59.913 1.56.913 3.5v1.5c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586H17c1.94 0 2.91 0 3.5.912c.592.913.285 1.599-.33 2.97a9.5 9.5 0 0 1-10.523 5.435A9.5 9.5 0 0 1 6.222 4.601Z"></svg:path><svg:path d="M21.446 7.069a8.03 8.03 0 0 0-4.515-4.515C15.389 1.947 14 3.344 14 5v4a1 1 0 0 0 1 1h4c1.657 0 3.053-1.39 2.446-2.931Z"></svg:path></svg:g>`,
})
export class SolarPieChart2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChart2OutlineIcon],svg[solar-pie-chart-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.206 1.856c-1.063-.419-2.09-.135-2.817.512c-.71.63-1.139 1.602-1.139 2.632v4c0 .967.784 1.75 1.75 1.75h4c1.03 0 2.002-.43 2.633-1.139c.646-.727.93-1.754.51-2.817a8.78 8.78 0 0 0-4.937-4.938M14.75 9V5c0-.627.265-1.182.636-1.512c.353-.314.791-.425 1.27-.236a7.28 7.28 0 0 1 4.092 4.092c.189.479.078.917-.236 1.27c-.33.371-.885.636-1.512.636h-4a.25.25 0 0 1-.25-.25"></svg:path><svg:path d="M10.995 2.87c-.61-.396-1.2-.51-1.85-.396c-.55.096-1.14.36-1.767.641l-.067.03A10.25 10.25 0 1 0 20.855 16.69l.03-.068c.281-.627.545-1.217.641-1.768c.113-.648 0-1.239-.396-1.85c-.426-.657-1.01-.979-1.724-1.125c-.634-.13-1.426-.13-2.334-.129H15.5c-.964 0-1.612-.002-2.095-.066c-.461-.063-.659-.17-.789-.3s-.237-.328-.3-.79c-.064-.482-.066-1.13-.066-2.094V6.928c0-.908 0-1.7-.13-2.334c-.145-.714-.467-1.298-1.125-1.724M7.924 4.514c.719-.322 1.136-.503 1.48-.563c.265-.046.474-.018.776.178c.254.165.389.361.471.765c.095.467.099 1.104.099 2.106v1.552c0 .898 0 1.648.08 2.242c.084.628.27 1.195.726 1.65c.455.456 1.022.642 1.65.726c.594.08 1.344.08 2.242.08H17c1.002 0 1.639.004 2.106.099c.404.082.6.217.765.471c.196.302.224.511.178.777c-.06.343-.241.76-.563 1.48a8.76 8.76 0 0 1-4.638 4.507a8.75 8.75 0 0 1-6.924-16.07"></svg:path></svg:g>`,
})
export class SolarPieChart2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChart3BoldIcon],svg[solar-pie-chart-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.444 3.685a10 10 0 0 1 1.662-.896c1.403-.593 2.104-.89 3-.296C12 3.086 12 4.057 12 6v2c0 1.886 0 2.828.586 3.414S14.114 12 16 12h2c1.942 0 2.914 0 3.507.895s.297 1.596-.296 3a10 10 0 0 1-11.162 5.913A10 10 0 0 1 6.444 3.685"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.774 2.128a.75.75 0 0 1 .913-.54a10.77 10.77 0 0 1 7.725 7.725a.75.75 0 0 1-1.453.374a9.27 9.27 0 0 0-6.646-6.646a.75.75 0 0 1-.54-.913" clip-rule="evenodd"></svg:path>`,
})
export class SolarPieChart3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChart3BoldDuotoneIcon],svg[solar-pie-chart-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.444 3.685a10 10 0 0 1 1.662-.896c1.403-.593 2.104-.89 3-.296C12 3.086 12 4.057 12 6v2c0 1.886 0 2.828.586 3.414S14.114 12 16 12h2c1.942 0 2.914 0 3.507.895s.297 1.596-.296 3a10 10 0 0 1-11.162 5.913A10 10 0 0 1 6.444 3.685"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.774 2.128a.75.75 0 0 1 .913-.54a10.77 10.77 0 0 1 7.725 7.725a.75.75 0 0 1-1.453.374a9.27 9.27 0 0 0-6.646-6.646a.75.75 0 0 1-.54-.913" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarPieChart3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChart3BrokenIcon],svg[solar-pie-chart-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.444 3.685a10 10 0 0 1 1.662-.896c1.403-.593 2.104-.89 3-.296C12 3.086 12 4.057 12 6v2c0 1.886 0 2.828.586 3.414S14.114 12 16 12h2c1.942 0 2.914 0 3.507.895s.297 1.596-.296 3a10 10 0 0 1-11.162 5.913A10 10 0 0 1 3.34 7M14.5 2.315A10.02 10.02 0 0 1 21.685 9.5"></svg:path>`,
})
export class SolarPieChart3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChart3LineDuotoneIcon],svg[solar-pie-chart-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6.444 3.685a10 10 0 0 1 1.662-.896c1.403-.593 2.104-.89 3-.296C12 3.086 12 4.057 12 6v2c0 1.886 0 2.828.586 3.414S14.114 12 16 12h2c1.942 0 2.914 0 3.507.895s.297 1.596-.296 3a10 10 0 0 1-11.162 5.913A10 10 0 0 1 6.444 3.685Z"></svg:path><svg:path stroke-linecap="round" d="M14.5 2.315A10.02 10.02 0 0 1 21.685 9.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPieChart3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChart3LinearIcon],svg[solar-pie-chart-3-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6.444 3.685a10 10 0 0 1 1.662-.896c1.403-.593 2.104-.89 3-.296C12 3.086 12 4.057 12 6v2c0 1.886 0 2.828.586 3.414S14.114 12 16 12h2c1.942 0 2.914 0 3.507.895s.297 1.596-.296 3a10 10 0 0 1-11.162 5.913A10 10 0 0 1 6.444 3.685Z"></svg:path><svg:path stroke-linecap="round" d="M14.5 2.315A10.02 10.02 0 0 1 21.685 9.5"></svg:path></svg:g>`,
})
export class SolarPieChart3LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChart3OutlineIcon],svg[solar-pie-chart-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.52 1.868c-.604-.4-1.194-.516-1.843-.412c-.553.089-1.153.342-1.796.614l-.067.029A10.75 10.75 0 1 0 21.9 16.186l.029-.067c.272-.643.526-1.242.614-1.796c.104-.65-.012-1.239-.412-1.842c-.43-.649-1.015-.963-1.726-1.104c-.633-.127-1.425-.127-2.335-.127H16c-.964 0-1.612-.002-2.095-.066c-.461-.062-.659-.17-.789-.3s-.237-.328-.3-.79c-.064-.482-.066-1.13-.066-2.094V5.93c0-.91 0-1.702-.126-2.335c-.142-.711-.456-1.296-1.104-1.726M8.398 3.48c.734-.31 1.164-.487 1.517-.543c.276-.044.485-.012.776.181c.246.164.38.36.462.77c.094.47.097 1.11.097 2.112v2.052c0 .899 0 1.648.08 2.243c.084.627.27 1.194.726 1.65s1.022.64 1.65.725c.594.08 1.344.08 2.242.08H18c1.002 0 1.643.004 2.113.097c.409.082.606.216.769.462c.193.292.225.5.181.777c-.056.352-.233.782-.543 1.516a9.25 9.25 0 0 1-10.325 5.47A9.25 9.25 0 0 1 8.398 3.48" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.687 1.589a.75.75 0 1 0-.374 1.452a9.27 9.27 0 0 1 6.646 6.646a.75.75 0 1 0 1.452-.374a10.77 10.77 0 0 0-7.724-7.724"></svg:path>`,
})
export class SolarPieChart3OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChartBoldIcon],svg[solar-pie-chart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.163 3.775a.75.75 0 0 1-.49.94A8.465 8.465 0 0 0 2.75 12.79a8.46 8.46 0 0 0 8.46 8.461a8.465 8.465 0 0 0 8.075-5.922a.75.75 0 1 1 1.43.45c-1.268 4.04-5.043 6.972-9.504 6.972c-5.501 0-9.961-4.46-9.961-9.96c0-4.462 2.932-8.236 6.973-9.506a.75.75 0 0 1 .94.491" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.913 9.947a11.35 11.35 0 0 0-7.86-7.86C12.409 1.628 11 3.054 11 4.76v6.694c0 .853.692 1.545 1.545 1.545h6.694c1.707 0 3.133-1.41 2.674-3.053"></svg:path>`,
})
export class SolarPieChartBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChartBoldDuotoneIcon],svg[solar-pie-chart-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.163 3.775a.75.75 0 0 1-.49.94A8.465 8.465 0 0 0 2.75 12.79a8.46 8.46 0 0 0 8.46 8.461a8.465 8.465 0 0 0 8.075-5.922a.75.75 0 1 1 1.43.45c-1.268 4.04-5.043 6.972-9.504 6.972c-5.501 0-9.961-4.46-9.961-9.96c0-4.462 2.932-8.236 6.973-9.506a.75.75 0 0 1 .94.491" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M21.913 9.947a11.35 11.35 0 0 0-7.86-7.86C12.409 1.628 11 3.054 11 4.76v6.694c0 .853.692 1.545 1.545 1.545h6.694c1.707 0 3.133-1.41 2.674-3.053"></svg:path>`,
})
export class SolarPieChartBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChartBrokenIcon],svg[solar-pie-chart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 15.552A9.215 9.215 0 0 1 11.21 22a9.21 9.21 0 0 1-8.78-12m6.018-6A9.2 9.2 0 0 0 5 5.987"></svg:path><svg:path d="M21.913 9.947a11.35 11.35 0 0 0-7.86-7.86C12.409 1.628 11 3.054 11 4.76v6.694c0 .853.692 1.545 1.545 1.545h6.694c1.707 0 3.133-1.41 2.674-3.053Z"></svg:path></svg:g>`,
})
export class SolarPieChartBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChartLineDuotoneIcon],svg[solar-pie-chart-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 15.552A9.215 9.215 0 0 1 11.21 22A9.21 9.21 0 0 1 2 12.79A9.215 9.215 0 0 1 8.448 4" opacity=".5"></svg:path><svg:path d="M21.913 9.947a11.35 11.35 0 0 0-7.86-7.86C12.409 1.628 11 3.054 11 4.76v6.694c0 .853.692 1.545 1.545 1.545h6.694c1.707 0 3.133-1.41 2.674-3.053Z"></svg:path></svg:g>`,
})
export class SolarPieChartLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChartLinearIcon],svg[solar-pie-chart-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 15.552A9.215 9.215 0 0 1 11.21 22A9.21 9.21 0 0 1 2 12.79A9.215 9.215 0 0 1 8.448 4"></svg:path><svg:path d="M21.913 9.947a11.35 11.35 0 0 0-7.86-7.86C12.409 1.628 11 3.054 11 4.76v6.694c0 .853.692 1.545 1.545 1.545h6.694c1.707 0 3.133-1.41 2.674-3.053Z"></svg:path></svg:g>`,
})
export class SolarPieChartLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChartOutlineIcon],svg[solar-pie-chart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.254 1.365c-1.096-.306-2.122.024-2.851.695c-.719.66-1.153 1.646-1.153 2.7v6.695a2.295 2.295 0 0 0 2.295 2.295h6.694c1.055 0 2.042-.434 2.701-1.153c.67-.729 1.001-1.755.695-2.851a12.1 12.1 0 0 0-8.38-8.381M11.75 4.76c0-.652.27-1.232.668-1.597c.386-.355.886-.508 1.433-.355c3.55.991 6.349 3.79 7.34 7.34c.153.548 0 1.048-.355 1.434c-.365.397-.945.667-1.597.667h-6.694a.795.795 0 0 1-.795-.795z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.672 4.716a.75.75 0 0 0-.45-1.432C4.183 4.554 1.25 8.328 1.25 12.79c0 5.501 4.46 9.961 9.96 9.961a9.96 9.96 0 0 0 9.505-6.973a.75.75 0 1 0-1.43-.45a8.465 8.465 0 0 1-8.074 5.923a8.46 8.46 0 0 1-8.461-8.46a8.465 8.465 0 0 1 5.922-8.074"></svg:path>`,
})
export class SolarPieChartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPillBoldIcon],svg[solar-pill-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.99 3.99a6.796 6.796 0 0 0 0 9.612l2.564 2.563l.495-.095h.001l.014-.003l.074-.018q.103-.024.315-.091c.282-.09.697-.243 1.21-.49c1.024-.493 2.438-1.364 3.939-2.866c1.501-1.501 2.372-2.915 2.866-3.939c.247-.512.4-.928.49-1.21a5 5 0 0 0 .109-.389l.003-.014l.095-.496l-2.563-2.563a6.796 6.796 0 0 0-9.611 0m13.428 3.816l-.032.103c-.11.343-.288.824-.568 1.404c-.56 1.162-1.525 2.718-3.156 4.349s-3.187 2.597-4.349 3.157a11 11 0 0 1-1.507.599l2.591 2.59a6.796 6.796 0 1 0 9.611-9.61z"></svg:path>`,
})
export class SolarPillBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPillBoldDuotoneIcon],svg[solar-pill-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.99 13.602a6.796 6.796 0 0 1 9.612-9.611l6.407 6.407a6.796 6.796 0 1 1-9.61 9.611z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m7.807 17.419l-1.253-1.254l.495-.095h.001l.014-.004q.022-.004.073-.017q.105-.024.316-.091c.281-.09.697-.243 1.21-.49c1.024-.493 2.437-1.364 3.939-2.866c1.5-1.501 2.372-2.915 2.866-3.94c.247-.512.4-.927.49-1.209a5 5 0 0 0 .108-.389l.003-.014l.096-.496l1.253 1.253l-.032.103a11 11 0 0 1-.567 1.404c-.56 1.162-1.525 2.717-3.157 4.349c-1.631 1.631-3.187 2.597-4.348 3.156a11 11 0 0 1-1.507.6"></svg:path>`,
})
export class SolarPillBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPillBrokenIcon],svg[solar-pill-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2.6 6a6.796 6.796 0 0 1 11.002-2.01l6.407 6.408A6.77 6.77 0 0 1 21.894 14M2.107 10a6.77 6.77 0 0 0 1.884 3.602l6.407 6.407A6.796 6.796 0 0 0 21.4 18"></svg:path><svg:path d="M16.806 7.194s-.541 2.806-3.674 5.939s-5.938 3.673-5.938 3.673"></svg:path></svg:g>`,
})
export class SolarPillBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPillLineDuotoneIcon],svg[solar-pill-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.99 13.602a6.796 6.796 0 0 1 9.612-9.611l6.407 6.407a6.796 6.796 0 1 1-9.61 9.611z"></svg:path><svg:path d="M16.806 7.194s-.541 2.806-3.674 5.939s-5.938 3.673-5.938 3.673" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPillLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPillLinearIcon],svg[solar-pill-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.99 13.602a6.796 6.796 0 0 1 9.612-9.611l6.407 6.407a6.796 6.796 0 1 1-9.61 9.611z"></svg:path><svg:path d="M16.806 7.194s-.541 2.806-3.674 5.939s-5.938 3.673-5.938 3.673"></svg:path></svg:g>`,
})
export class SolarPillLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPillOutlineIcon],svg[solar-pill-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.132 3.46A7.546 7.546 0 1 0 3.46 14.132l6.408 6.408A7.546 7.546 0 0 0 20.54 9.868zM4.521 4.52a6.046 6.046 0 0 1 8.55 0l2.898 2.898l-.011.035c-.09.282-.243.698-.49 1.21c-.494 1.024-1.365 2.438-2.866 3.94c-1.501 1.5-2.915 2.372-3.94 2.865c-.512.247-.927.4-1.209.49l-.035.01l-2.897-2.896a6.046 6.046 0 0 1 0-8.551M8.59 17.14l2.338 2.34a6.046 6.046 0 0 0 8.551-8.552L17.14 8.59q-.132.328-.32.724c-.56 1.162-1.526 2.718-3.158 4.349c-1.63 1.631-3.186 2.597-4.348 3.157q-.396.189-.724.32" clip-rule="evenodd"></svg:path>`,
})
export class SolarPillOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPills2BoldIcon],svg[solar-pills-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.026 9.965a5 5 0 0 0-6.992-6.992zm-1.061 1.061a5 5 0 0 1-6.991-6.992zm10.979 5.224a5 5 0 0 0-9.887 0zm0 1.5h-9.888a5 5 0 0 0 9.888 0"></svg:path>`,
})
export class SolarPills2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPills2BoldDuotoneIcon],svg[solar-pills-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.465 20.536a5 5 0 1 0 7.07-7.071a5 5 0 0 0-7.07 7.07M3 7a5 5 0 1 0 10 0A5 5 0 0 0 3 7" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.056 17.75h9.888a5 5 0 0 0 0-1.5h-9.888a5 5 0 0 0 0 1.5M3.974 4.035l6.991 6.991a5 5 0 0 0 1.06-1.06l-6.99-6.992a5 5 0 0 0-1.061 1.06"></svg:path>`,
})
export class SolarPills2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPills2BrokenIcon],svg[solar-pills-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11.536 10.536a5 5 0 0 0-7.071-7.071m7.07 7.07a5 5 0 0 1-7.071-7.071m7.072 7.072L4.464 3.464M12 17c0 1.28.488 2.56 1.464 3.535A4.98 4.98 0 0 0 17 22m-5-5a5 5 0 1 1 10 0m-10 0h10m0 0c0 1.28-.488 2.56-1.465 3.535"></svg:path>`,
})
export class SolarPills2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPills2LineDuotoneIcon],svg[solar-pills-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M11.536 10.536a5 5 0 0 0-7.071-7.071m7.07 7.07a5 5 0 0 1-7.071-7.071m7.072 7.072L4.464 3.464"></svg:path><svg:path d="M22 17a5 5 0 1 0-10 0m10 0a5 5 0 0 1-10 0m10 0H12" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPills2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPills2LinearIcon],svg[solar-pills-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11.536 10.536a5 5 0 0 0-7.071-7.071m7.07 7.07a5 5 0 0 1-7.071-7.071m7.072 7.072L4.464 3.464M22 17a5 5 0 1 0-10 0m10 0a5 5 0 0 1-10 0m10 0H12"></svg:path>`,
})
export class SolarPills2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPills2OutlineIcon],svg[solar-pills-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1.25a5.73 5.73 0 0 0-4.066 1.684A5.75 5.75 0 1 0 8 1.25m3.489 8.178L5.572 3.511a4.25 4.25 0 0 1 5.917 5.917M4.51 4.572l5.917 5.917A4.25 4.25 0 0 1 4.51 4.572m16.556 8.362a5.75 5.75 0 1 0-8.132 8.132a5.75 5.75 0 0 0 8.132-8.132m-7.071 1.06a4.25 4.25 0 0 1 7.189 2.256h-8.368a4.23 4.23 0 0 1 1.179-2.255m-1.179 3.756h8.368a4.25 4.25 0 0 1-8.368 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarPills2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPills3BoldIcon],svg[solar-pills-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.682 12.682a4.5 4.5 0 0 1-7.62-2.432h8.875a4.5 4.5 0 0 1-1.255 2.432m1.255-3.932H2.063a4.5 4.5 0 0 1 8.875 0m3.819-1.629A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242m6.148 4.973a3.74 3.74 0 0 1 0 5.286l-1.027 1.027v-.003l-.732-.14l-.028-.008a2 2 0 0 1-.143-.04a4.5 4.5 0 0 1-.583-.237c-.5-.24-1.2-.671-1.95-1.421s-1.181-1.451-1.422-1.951a5 5 0 0 1-.236-.583a2 2 0 0 1-.048-.17l-.141-.733h-.003l1.027-1.027a3.74 3.74 0 0 1 5.286 0m-7.579 2.293l.03.094c.06.193.16.459.313.777c.307.637.832 1.48 1.712 2.36s1.723 1.405 2.36 1.712a6 6 0 0 0 .871.343l-1.231 1.231a3.738 3.738 0 0 1-5.286-5.286z"></svg:path>`,
})
export class SolarPills3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPills3BoldDuotoneIcon],svg[solar-pills-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.757 7.121A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242m6.148 10.259a3.738 3.738 0 0 0-5.286-5.286l-3.524 3.524a3.738 3.738 0 0 0 5.286 5.286z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.878 18.408v-.003l-.732-.14l-.028-.008a2 2 0 0 1-.143-.04a4.5 4.5 0 0 1-.583-.237c-.5-.24-1.2-.671-1.95-1.421s-1.18-1.451-1.422-1.951a5 5 0 0 1-.236-.583a3 3 0 0 1-.048-.17l-.141-.733h-.003l-1.266 1.266l.03.094c.06.193.16.459.313.777c.307.637.832 1.48 1.712 2.36s1.723 1.405 2.36 1.712a6 6 0 0 0 .871.343zM9.727 12.682a4.61 4.61 0 0 1-6.454 0A4.46 4.46 0 0 1 2 10.25h9a4.46 4.46 0 0 1-1.273 2.432M11 8.75H2a4.46 4.46 0 0 1 1.273-2.432a4.61 4.61 0 0 1 6.454 0A4.46 4.46 0 0 1 11 8.75"></svg:path>`,
})
export class SolarPills3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPills3BrokenIcon],svg[solar-pills-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M11 9.472A4.5 4.5 0 0 0 9.682 6.29A4.48 4.48 0 0 0 7 5m4 4.472a4.5 4.5 0 0 1-9 0m9 0H2m0 0A4.5 4.5 0 0 1 3.318 6.29m11.439.831A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242Zm2.624 13.784l3.524-3.524a3.738 3.738 0 0 0-5.286-5.286l-3.524 3.524A3.738 3.738 0 0 0 14 21.927"></svg:path><svg:path d="M14 14s.281 1.46 1.911 3.09S19 19 19 19"></svg:path></svg:g>`,
})
export class SolarPills3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPills3LineDuotoneIcon],svg[solar-pills-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M11 9.5a4.5 4.5 0 1 0-9 0m9 0a4.5 4.5 0 0 1-9 0m9 0H2"></svg:path><svg:path stroke-linecap="round" d="M14.757 7.121A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242Z" opacity=".5"></svg:path><svg:path d="M20.905 17.381a3.738 3.738 0 0 0-5.286-5.286l-3.524 3.524a3.738 3.738 0 0 0 5.286 5.286z"></svg:path><svg:path d="M14 14s.281 1.46 1.911 3.09S19 19 19 19" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPills3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPills3LinearIcon],svg[solar-pills-3-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M11 9.5a4.5 4.5 0 1 0-9 0m9 0a4.5 4.5 0 0 1-9 0m9 0H2m12.757-2.379A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242Z"></svg:path><svg:path d="M20.905 17.381a3.738 3.738 0 0 0-5.286-5.286l-3.524 3.524a3.738 3.738 0 0 0 5.286 5.286z"></svg:path><svg:path d="M14 14s.281 1.46 1.911 3.09S19 19 19 19"></svg:path></svg:g>`,
})
export class SolarPills3LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPills3OutlineIcon],svg[solar-pills-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.53 2.348a3.75 3.75 0 1 0-5.303 5.304a3.75 3.75 0 0 0 5.303-5.304M15.288 3.41a2.25 2.25 0 1 1 3.182 3.182a2.25 2.25 0 0 1-3.182-3.182m-5.076 2.377a5.25 5.25 0 1 0-7.424 7.425a5.25 5.25 0 0 0 7.424-7.425M3.848 6.848a3.75 3.75 0 0 1 6.327 1.902h-7.35a3.73 3.73 0 0 1 1.023-1.902M2.825 10.25h7.35a3.75 3.75 0 0 1-7.35 0m18.611 1.314a4.49 4.49 0 0 0-6.347 0l-3.524 3.524a4.488 4.488 0 1 0 6.346 6.347l3.524-3.524a4.49 4.49 0 0 0 0-6.347m-5.287 1.06a2.988 2.988 0 1 1 4.226 4.227L19 18.224l-.026-.008a4.5 4.5 0 0 1-.583-.236c-.5-.241-1.2-.672-1.95-1.421c-.75-.75-1.181-1.452-1.422-1.951a4.5 4.5 0 0 1-.236-.583L14.775 14zm-2.53 2.53l.05.105c.307.637.832 1.48 1.712 2.36s1.723 1.405 2.36 1.712l.104.05l-.994.994a2.988 2.988 0 1 1-4.226-4.226z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPills3OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPillsBoldIcon],svg[solar-pills-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.592 11.282a5.437 5.437 0 1 1 7.69-7.69l1.922 1.923l-.096.495l-.001.009l-.013.054a4 4 0 0 1-.07.244a7 7 0 0 1-.385.948c-.388.806-1.076 1.923-2.264 3.11c-1.188 1.189-2.304 1.876-3.11 2.265c-.403.194-.73.313-.948.383a4 4 0 0 1-.298.084l-.009.002l-.495.095zM13.53 4.47a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m18.452 6.774l.003-.008l1.953 1.952a5.437 5.437 0 1 1-7.69 7.69l-1.952-1.953l.007-.003a9 9 0 0 0 1.143-.461c.943-.455 2.202-1.236 3.52-2.554c1.318-1.319 2.1-2.577 2.554-3.52c.227-.471.373-.863.462-1.143M5.286 10.648a6 6 0 1 0 8.067 8.067a7 7 0 0 1-1.695-1.247l-5.126-5.126a7 7 0 0 1-1.246-1.694"></svg:path>`,
})
export class SolarPillsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPillsBoldDuotoneIcon],svg[solar-pills-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.01 13.109l-.495.095l-1.923-1.923a5.437 5.437 0 1 1 7.69-7.689l1.922 1.923l-.096.495l-.001.009l-.013.054a4 4 0 0 1-.07.244c-.07.22-.19.545-.385.948c-.388.806-1.076 1.923-2.264 3.11c-1.188 1.189-2.304 1.876-3.11 2.265c-.403.194-.73.314-.948.383a4 4 0 0 1-.298.084zm3.52-8.64a.75.75 0 1 0-1.06 1.061l1.5 1.5a.75.75 0 1 0 1.06-1.06z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m20.408 8.718l-1.953-1.952l-.003.008c-.09.28-.235.672-.462 1.143c-.454.943-1.236 2.201-2.554 3.52s-2.577 2.1-3.52 2.554a9 9 0 0 1-1.143.461l-.007.003l1.953 1.952a5.437 5.437 0 1 0 7.688-7.689"></svg:path><svg:path fill="currentColor" d="M6.717 10.138c.234.409.526.794.875 1.144l5.127 5.126c.349.35.734.641 1.143.876a6 6 0 0 1-1.62 2.959a6 6 0 1 1-5.526-10.105" opacity=".5"></svg:path>`,
})
export class SolarPillsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPillsBrokenIcon],svg[solar-pills-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17.845 6.155s-.433 2.245-2.94 4.751c-2.505 2.506-4.75 2.938-4.75 2.938m11.628-2.806a5.4 5.4 0 0 0-1.376-2.32l-5.126-5.126a5.437 5.437 0 1 0-7.689 7.69l5.127 5.125A5.437 5.437 0 0 0 21.425 15M14.5 6.5L13 5"></svg:path><svg:path fill="currentColor" d="M6.888 10.868a.75.75 0 1 0-.316-1.466zm-1.075 9.907a.75.75 0 1 0-.626 1.363zm-3.95-1.962a.75.75 0 1 0 1.363-.626zM2.75 16a5.25 5.25 0 0 1 4.138-5.132l-.316-1.466A6.75 6.75 0 0 0 1.25 16zm10.389 1.08A5.25 5.25 0 0 1 8 21.25v1.5a6.75 6.75 0 0 0 6.607-5.364zM8 21.25c-.782 0-1.522-.17-2.187-.476l-.626 1.364c.857.393 1.81.612 2.813.612zm-4.774-3.063A5.2 5.2 0 0 1 2.75 16h-1.5c0 1.003.219 1.956.612 2.813z"></svg:path></svg:g>`,
})
export class SolarPillsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPillsLineDuotoneIcon],svg[solar-pills-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17.845 6.155s-.433 2.245-2.94 4.751c-2.505 2.506-4.75 2.938-4.75 2.938m10.253 2.563a5.437 5.437 0 0 1-7.69 0l-5.126-5.126a5.437 5.437 0 1 1 7.69-7.689l5.125 5.126a5.437 5.437 0 0 1 0 7.69Z"></svg:path><svg:path stroke-linecap="round" d="M14.5 6.5L13 5" opacity=".5"></svg:path><svg:path d="M6.73 10.135a6 6 0 1 0 7.143 7.098" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPillsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPillsLinearIcon],svg[solar-pills-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17.845 6.155s-.433 2.245-2.94 4.751c-2.505 2.506-4.75 2.938-4.75 2.938m10.253 2.563a5.437 5.437 0 0 1-7.69 0l-5.126-5.126a5.437 5.437 0 1 1 7.69-7.689l5.125 5.126a5.437 5.437 0 0 1 0 7.69Z"></svg:path><svg:path stroke-linecap="round" d="M14.5 6.5L13 5"></svg:path><svg:path d="M6.73 10.135a6 6 0 1 0 7.143 7.098"></svg:path></svg:g>`,
})
export class SolarPillsLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPillsOutlineIcon],svg[solar-pills-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.47 4.47a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.062 3.062a6.187 6.187 0 0 1 8.75 0l5.126 5.126a6.187 6.187 0 0 1-6.603 10.148A6.752 6.752 0 0 1 1.25 16a6.75 6.75 0 0 1 4.414-6.335a6.19 6.19 0 0 1 1.398-6.603m7.69 1.06a4.687 4.687 0 1 0-6.63 6.63l2.254 2.252c.216-.072.52-.187.89-.364c.805-.389 1.921-1.076 3.11-2.264s1.875-2.305 2.263-3.11a8 8 0 0 0 .365-.89zm3.412 3.414q-.077.18-.173.38c-.455.944-1.237 2.202-2.555 3.52s-2.577 2.1-3.52 2.555q-.2.096-.38.174l1.713 1.712a4.687 4.687 0 1 0 6.628-6.628zM6.381 11.004a5.25 5.25 0 1 0 6.615 6.615a6 6 0 0 1-.808-.681l-5.126-5.126a6 6 0 0 1-.681-.808" clip-rule="evenodd"></svg:path>`,
})
export class SolarPillsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinBoldIcon],svg[solar-pin-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.184 7.805l-2.965-2.967c-2.027-2.03-3.04-3.043-4.129-2.803s-1.581 1.587-2.568 4.28l-.668 1.823c-.263.718-.395 1.077-.632 1.355a2 2 0 0 1-.36.332c-.296.213-.664.314-1.4.517c-1.66.458-2.491.687-2.804 1.23a1.53 1.53 0 0 0-.204.773c.004.627.613 1.236 1.83 2.455L6.7 16.216l-4.476 4.48a.764.764 0 0 0 1.08 1.08l4.475-4.48l1.466 1.468c1.226 1.226 1.839 1.84 2.47 1.84c.265 0 .526-.068.757-.2c.548-.313.778-1.149 1.239-2.822c.202-.735.303-1.102.515-1.399q.14-.194.322-.352c.275-.238.632-.372 1.345-.64l1.844-.693c2.664-1 3.996-1.501 4.23-2.586c.235-1.086-.77-2.093-2.783-4.107"></svg:path>`,
})
export class SolarPinBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinBoldDuotoneIcon],svg[solar-pin-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.219 4.838l2.964 2.967c2.012 2.014 3.018 3.021 2.784 4.107c-.235 1.085-1.567 1.585-4.23 2.586l-1.845.693c-.713.268-1.07.402-1.345.64q-.181.158-.322.352c-.212.297-.313.664-.515 1.4c-.46 1.672-.69 2.508-1.239 2.821c-.23.132-.492.2-.758.2c-.63 0-1.243-.614-2.469-1.84l-1.466-1.468l-1.079-1.08L5.285 14.8c-1.218-1.219-1.827-1.828-1.83-2.455a1.53 1.53 0 0 1 .203-.773c.313-.543 1.143-.772 2.803-1.23c.737-.203 1.105-.304 1.402-.517q.199-.144.36-.332c.236-.278.368-.637.63-1.355l.669-1.823c.987-2.693 1.48-4.04 2.568-4.28s2.102.774 4.129 2.803" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="m3.302 21.776l4.476-4.48l-1.079-1.08l-4.476 4.48a.764.764 0 0 0 1.08 1.08"></svg:path>`,
})
export class SolarPinBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinBrokenIcon],svg[solar-pin-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.99 4.95l.53-.53zM8.737 19.43l-.53.53zm-4.116-4.12l.53-.53zm12.945-.315l-.264-.702zm-1.917.72l.264.703zM8.332 8.383l-.704-.258zm.695-1.896l.704.258zm-3.182 4.188l.2.723zm1.457-.539l-.438-.609zm.374-.345l.57.487zm6.575 6.59l.491.568zm-.87 1.821l-.723-.199zm.536-1.454l-.61-.438zM2.719 12.755l-.75.005zm.212-.803l-.65-.374zm8.374 9.391l.001-.75zm.788-.208l-.371-.652zm9.872-8.83l.733.158zM11.697 2.036l.162.732zm10.658 8.594a.75.75 0 1 0-1.305.74zm-4.349-2.6a.75.75 0 0 0 1.061-1.06zM9.269 18.9l-4.117-4.12l-1.06 1.06l4.116 4.12zm8.034-4.607l-1.917.72l.528 1.405l1.917-.72zM9.036 8.64l.695-1.896l-1.408-.516l-.695 1.896zm-2.992 2.756c.712-.196 1.253-.334 1.696-.652l-.876-1.218c-.173.125-.398.198-1.218.424zm1.584-3.272c-.293.8-.385 1.018-.523 1.18l1.142.973c.353-.415.535-.944.79-1.637zm.112 2.62q.281-.203.507-.467l-1.142-.973a1.4 1.4 0 0 1-.241.222zm7.646 4.268c-.689.26-1.214.445-1.626.801l.982 1.135c.16-.14.377-.233 1.172-.531zM14.104 18.4c.225-.819.298-1.043.422-1.216l-1.218-.875c-.318.443-.455.983-.65 1.693zm-.344-2.586q-.256.22-.452.495l1.218.875q.095-.132.216-.236zm-8.608-1.036c-.646-.647-1.084-1.087-1.368-1.444c-.286-.359-.315-.514-.315-.583l-1.5.009c.003.582.292 1.07.641 1.508c.35.44.861.95 1.481 1.57zm.494-4.828c-.845.234-1.542.424-2.063.634c-.52.208-1.012.49-1.302.994l1.3.748c.034-.06.136-.18.56-.35s1.022-.337 1.903-.58zm-2.177 2.8a.84.84 0 0 1 .111-.424l-1.3-.748a2.34 2.34 0 0 0-.311 1.182zm4.739 7.21c.624.624 1.137 1.139 1.579 1.49c.44.352.931.642 1.517.643l.002-1.5c-.069 0-.224-.029-.585-.316c-.36-.286-.802-.727-1.452-1.378zm4.45-1.958c-.245.888-.412 1.49-.583 1.917c-.172.428-.293.53-.353.564l.743 1.303c.51-.29.792-.786 1.002-1.309c.21-.524.402-1.225.637-2.077zm-1.354 4.091c.407 0 .807-.105 1.161-.307l-.743-1.303a.84.84 0 0 1-.416.11zm6.527-6.397c1.361-.511 2.463-.923 3.246-1.358c.795-.44 1.431-.996 1.621-1.875l-1.466-.317c-.054.25-.232.52-.883.88c-.663.369-1.638.737-3.046 1.266zM16.52 4.42c-1.036-1.037-1.872-1.876-2.595-2.414c-.734-.544-1.508-.897-2.39-.702l.324 1.464c.25-.055.569-.005 1.172.443c.612.455 1.357 1.197 2.428 2.27zM9.731 6.744c.522-1.423.885-2.41 1.25-3.08c.36-.66.628-.84.878-.896l-.323-1.464c-.882.194-1.435.84-1.872 1.642c-.431.792-.837 1.906-1.341 3.282zm11.32 4.626c.2.355.224.58.181.776l1.466.317c.142-.657-.018-1.26-.343-1.833zm-5.592-5.89l2.547 2.55l1.061-1.06l-2.547-2.55z"></svg:path><svg:path fill="currentColor" d="M1.47 21.47a.75.75 0 0 0 1.06 1.06zm5.714-3.598a.75.75 0 0 0-1.061-1.06zM2.53 22.53l4.653-4.658l-1.061-1.06l-4.654 4.658z"></svg:path>`,
})
export class SolarPinBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinCircleBoldIcon],svg[solar-pin-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-7.89-3.581l1.482 1.484c1.006 1.006 1.509 1.51 1.392 2.053c-.118.543-.784.793-2.116 1.293l-.922.346c-.356.134-.535.201-.672.32q-.091.08-.161.177c-.106.148-.157.332-.258.7c-.23.836-.345 1.254-.62 1.41a.76.76 0 0 1-.378.1c-.315 0-.622-.307-1.234-.92l-.473-.473l-1.619 1.62a.75.75 0 0 1-1.062-1.059l1.62-1.622l-.446-.448c-.61-.61-.914-.914-.916-1.228c0-.135.035-.269.102-.386c.157-.271.572-.386 1.402-.615c.368-.101.552-.152.7-.259a1 1 0 0 0 .18-.166c.119-.138.185-.318.316-.677l.334-.911c.494-1.347.74-2.02 1.285-2.14s1.05.386 2.064 1.4" clip-rule="evenodd"></svg:path>`,
})
export class SolarPinCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinCircleBoldDuotoneIcon],svg[solar-pin-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="m15.592 9.903l-1.483-1.484c-1.013-1.015-1.52-1.522-2.064-1.402s-.79.794-1.284 2.14l-.334.912c-.132.36-.197.539-.316.677a1 1 0 0 1-.18.166c-.148.107-.332.158-.7.26c-.83.228-1.246.342-1.402.614a.77.77 0 0 0-.102.386c.002.314.306.618.915 1.228l.447.448l-1.62 1.622a.75.75 0 0 0 1.062 1.06l1.618-1.621l.473.473c.613.613.92.92 1.235.92a.76.76 0 0 0 .379-.1c.274-.156.389-.574.619-1.41c.1-.368.152-.552.258-.7q.07-.098.16-.176c.138-.12.316-.187.673-.32l.922-.347c1.332-.5 1.998-.75 2.115-1.293s-.385-1.046-1.391-2.053"></svg:path>`,
})
export class SolarPinCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinCircleBrokenIcon],svg[solar-pin-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m14.495 7.975l.53-.53zm1.54 1.543l-.53.53zm-5.166 5.696l-.53.53zm-2.058-2.06l.53-.53zm6.473-.157l-.264-.702zm-.96.36l.265.702zm-3.658-3.666l-.704-.258zm.347-.948l.704.258zm-1.59 2.094l.199.723zm.728-.27l-.438-.608zm.187-.172l.57.487zm3.288 3.295l.49.567zm-.436.91l-.723-.198zm.269-.727l-.61-.437zm-5.6-1.995l-.75.004zm.106-.402l-.65-.374zm4.188 4.696v-.75zm.394-.105l-.372-.651zm-.198-9.549l.161.732zm-5.38 9.452a.75.75 0 0 0 1.062 1.06zm3.388-1.269a.75.75 0 1 0-1.061-1.06zm3.607-6.196l1.541 1.543l1.061-1.06l-1.54-1.543zm-2.564 6.18l-2.06-2.062l-1.06 1.06l2.058 2.06zm3.62-2.39l-.959.36l.528 1.404l.958-.36zM11.37 9.95l.348-.95l-1.409-.516l-.347.948zm-1.748 1.61c.328-.09.678-.175.967-.383L9.713 9.96c-.02.014-.052.034-.49.155zm.34-2.126c-.156.426-.18.458-.195.476l1.142.973c.23-.271.344-.613.461-.933zm.627 1.743q.177-.128.32-.294L9.767 9.91a.3.3 0 0 1-.054.05zm3.472 1.48c-.318.119-.658.235-.927.467l.982 1.134c.018-.015.05-.038.473-.198zm-.148 2.143c.12-.436.141-.47.155-.489l-1.219-.874c-.207.289-.292.638-.382.966zm-.779-1.676a1.8 1.8 0 0 0-.285.313l1.219.874a.3.3 0 0 1 .049-.053zm-3.793-.499c-.33-.33-.53-.533-.656-.69c-.127-.16-.076-.154-.076-.061l-1.5.01c.003.419.212.746.403.985c.19.24.465.512.768.816zm-.118-2.51c-.413.114-.786.215-1.071.33c-.284.113-.627.294-.837.658l1.3.748c-.047.081-.093.062.096-.014c.187-.075.461-.152.91-.276zm-.614 1.759q0-.012.006-.023l-1.3-.748a1.55 1.55 0 0 0-.206.78zm1.73 3.872c.305.305.579.581.82.774c.24.191.57.402.992.403l.003-1.5c.094 0 .1.05-.06-.077c-.159-.126-.362-.328-.694-.66zm2.128-1.343c-.124.452-.202.729-.277.918c-.077.19-.097.143-.015.096l.743 1.303c.367-.21.55-.555.664-.84c.115-.287.217-.663.331-1.08zm-.316 2.52c.27 0 .534-.07.767-.203l-.743-1.303a.04.04 0 0 1-.021.006zm3.354-6.874c.54.54.884.888 1.09 1.165c.097.131.135.21.149.252l.006.026v.003l1.466.317c.128-.596-.121-1.093-.416-1.491c-.287-.388-.728-.826-1.234-1.332zm.042 3.651c.67-.251 1.252-.468 1.674-.702c.433-.24.866-.59.995-1.186l-1.466-.317l-.001.003l-.017.02a1 1 0 0 1-.24.168c-.3.168-.757.341-1.472.61zm-.522-6.254c-.509-.51-.95-.954-1.34-1.243c-.399-.297-.899-.548-1.498-.416l.323 1.464h.008l.02.006a1 1 0 0 1 .254.15c.278.207.628.554 1.172 1.1zm-3.308 1.556c.266-.723.437-1.185.603-1.49a1 1 0 0 1 .183-.257l.005-.003h.002l-.323-1.465c-.599.132-.947.57-1.185 1.008c-.231.426-.445 1.014-.693 1.691zm-3.686 8.03l2.326-2.33l-1.061-1.06l-2.327 2.329z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarPinCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinCircleLineDuotoneIcon],svg[solar-pin-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" opacity=".5"></svg:circle><svg:path fill="currentColor" d="m14.495 7.975l.53-.53zm1.54 1.543l-.53.53zm-5.166 5.696l-.53.53zm-2.058-2.06l.53-.53zm6.473-.157l-.264-.702zm-.96.36l.265.702zm-3.658-3.666l-.704-.258zm.347-.948l.704.258zm-1.59 2.094l.199.723zm.728-.27l-.438-.608zm.187-.172l.57.487zm3.288 3.295l.49.567zm-.436.91l-.723-.198zm.269-.727l-.61-.437zm-5.6-1.995l-.75.004zm.106-.402l-.65-.374zm4.188 4.696v-.75zm.394-.105l-.372-.651zm-.198-9.549l.161.732zm-5.38 9.452a.75.75 0 0 0 1.062 1.06zm3.388-1.269a.75.75 0 1 0-1.061-1.06zm3.607-6.196l1.541 1.543l1.061-1.06l-1.54-1.543zm-2.564 6.18l-2.06-2.062l-1.06 1.06l2.058 2.06zm3.62-2.39l-.959.36l.528 1.404l.958-.36zM11.37 9.95l.348-.95l-1.409-.516l-.347.948zm-1.748 1.61c.328-.09.678-.175.967-.383L9.713 9.96c-.02.014-.052.034-.49.155zm.34-2.126c-.156.426-.18.458-.195.476l1.142.973c.23-.271.344-.613.461-.933zm.627 1.743q.177-.128.32-.294L9.767 9.91a.3.3 0 0 1-.054.05zm3.472 1.48c-.318.119-.658.235-.927.467l.982 1.134c.018-.015.05-.038.473-.198zm-.148 2.143c.12-.436.141-.47.155-.489l-1.219-.874c-.207.289-.292.638-.382.966zm-.779-1.676a1.8 1.8 0 0 0-.285.313l1.219.874a.3.3 0 0 1 .049-.053zm-3.793-.499c-.33-.33-.53-.533-.656-.69c-.127-.16-.076-.154-.076-.061l-1.5.01c.003.419.212.746.403.985c.19.24.465.512.768.816zm-.118-2.51c-.413.114-.786.215-1.071.33c-.284.113-.627.294-.837.658l1.3.748c-.047.081-.093.062.096-.014c.187-.075.461-.152.91-.276zm-.614 1.759q0-.012.006-.023l-1.3-.748a1.55 1.55 0 0 0-.206.78zm1.73 3.872c.305.305.579.581.82.774c.24.191.57.402.992.403l.003-1.5c.094 0 .1.05-.06-.077c-.159-.126-.362-.328-.694-.66zm2.128-1.343c-.124.452-.202.729-.277.918c-.077.19-.097.143-.015.096l.743 1.303c.367-.21.55-.555.664-.84c.115-.287.217-.663.331-1.08zm-.316 2.52c.27 0 .534-.07.767-.203l-.743-1.303a.04.04 0 0 1-.021.006zm3.354-6.874c.54.54.884.888 1.09 1.165c.097.131.135.21.149.252l.006.026v.003l1.466.317c.128-.596-.121-1.093-.416-1.491c-.287-.388-.728-.826-1.234-1.332zm.042 3.651c.67-.251 1.252-.468 1.674-.702c.433-.24.866-.59.995-1.186l-1.466-.317l-.001.003l-.017.02a1 1 0 0 1-.24.168c-.3.168-.757.341-1.472.61zm-.522-6.254c-.509-.51-.95-.954-1.34-1.243c-.399-.297-.899-.548-1.498-.416l.323 1.464h.008l.02.006a1 1 0 0 1 .254.15c.278.207.628.554 1.172 1.1zm-3.308 1.556c.266-.723.437-1.185.603-1.49a1 1 0 0 1 .183-.257l.005-.003h.002l-.323-1.465c-.599.132-.947.57-1.185 1.008c-.231.426-.445 1.014-.693 1.691zm-3.686 8.03l2.326-2.33l-1.061-1.06l-2.327 2.329z"></svg:path></svg:g>`,
})
export class SolarPinCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinCircleLinearIcon],svg[solar-pin-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path fill="currentColor" d="m14.495 7.975l.53-.53zm1.54 1.543l-.53.53zm-5.166 5.696l-.53.53zm-2.058-2.06l.53-.53zm6.473-.157l-.264-.702zm-.96.36l.265.702zm-3.658-3.666l-.704-.258zm.347-.948l.704.258zm-1.59 2.094l.199.723zm.728-.27l-.438-.608zm.187-.172l.57.487zm3.288 3.295l.49.567zm-.436.91l-.723-.198zm.269-.727l-.61-.437zm-5.6-1.995l-.75.004zm.106-.402l-.65-.374zm4.188 4.696v-.75zm.394-.105l-.372-.651zm-.198-9.549l.161.732zm-5.38 9.452a.75.75 0 0 0 1.062 1.06zm3.388-1.269a.75.75 0 1 0-1.061-1.06zm3.607-6.196l1.541 1.543l1.061-1.06l-1.54-1.543zm-2.564 6.18l-2.06-2.062l-1.06 1.06l2.058 2.06zm3.62-2.39l-.959.36l.528 1.404l.958-.36zM11.37 9.95l.348-.95l-1.409-.516l-.347.948zm-1.748 1.61c.328-.09.678-.175.967-.383L9.713 9.96c-.02.014-.052.034-.49.155zm.34-2.126c-.156.426-.18.458-.195.476l1.142.973c.23-.271.344-.613.461-.933zm.627 1.743q.177-.128.32-.294L9.767 9.91a.3.3 0 0 1-.054.05zm3.472 1.48c-.318.119-.658.235-.927.467l.982 1.134c.018-.015.05-.038.473-.198zm-.148 2.143c.12-.436.141-.47.155-.489l-1.219-.874c-.207.289-.292.638-.382.966zm-.779-1.676a1.8 1.8 0 0 0-.285.313l1.219.874a.3.3 0 0 1 .049-.053zm-3.793-.499c-.33-.33-.53-.533-.656-.69c-.127-.16-.076-.154-.076-.061l-1.5.01c.003.419.212.746.403.985c.19.24.465.512.768.816zm-.118-2.51c-.413.114-.786.215-1.071.33c-.284.113-.627.294-.837.658l1.3.748c-.047.081-.093.062.096-.014c.187-.075.461-.152.91-.276zm-.614 1.759q0-.012.006-.023l-1.3-.748a1.55 1.55 0 0 0-.206.78zm1.73 3.872c.305.305.579.581.82.774c.24.191.57.402.992.403l.003-1.5c.094 0 .1.05-.06-.077c-.159-.126-.362-.328-.694-.66zm2.128-1.343c-.124.452-.202.729-.277.918c-.077.19-.097.143-.015.096l.743 1.303c.367-.21.55-.555.664-.84c.115-.287.217-.663.331-1.08zm-.316 2.52c.27 0 .534-.07.767-.203l-.743-1.303a.04.04 0 0 1-.021.006zm3.354-6.874c.54.54.884.888 1.09 1.165c.097.131.135.21.149.252l.006.026v.003l1.466.317c.128-.596-.121-1.093-.416-1.491c-.287-.388-.728-.826-1.234-1.332zm.042 3.651c.67-.251 1.252-.468 1.674-.702c.433-.24.866-.59.995-1.186l-1.466-.317l-.001.003l-.017.02a1 1 0 0 1-.24.168c-.3.168-.757.341-1.472.61zm-.522-6.254c-.509-.51-.95-.954-1.34-1.243c-.399-.297-.899-.548-1.498-.416l.323 1.464h.008l.02.006a1 1 0 0 1 .254.15c.278.207.628.554 1.172 1.1zm-3.308 1.556c.266-.723.437-1.185.603-1.49a1 1 0 0 1 .183-.257l.005-.003h.002l-.323-1.465c-.599.132-.947.57-1.185 1.008c-.231.426-.445 1.014-.693 1.691zm-3.686 8.03l2.326-2.33l-1.061-1.06l-2.327 2.329z"></svg:path></svg:g>`,
})
export class SolarPinCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinCircleOutlineIcon],svg[solar-pin-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12"></svg:path><svg:path d="m14.985 7.405l1.622 1.623c.488.489.913.914 1.193 1.291c.295.399.544.896.416 1.492c-.13.596-.562.946-.995 1.186c-.41.228-.974.44-1.62.682l-1.012.38c-.424.16-.455.183-.473.198a.3.3 0 0 0-.048.053c-.014.02-.034.053-.155.49l-.01.038c-.11.402-.21.763-.321 1.04c-.115.285-.297.631-.664.84a1.54 1.54 0 0 1-.766.204c-.423-.001-.752-.212-.992-.403c-.234-.187-.499-.452-.793-.746l-.54-.54L8.03 17.03a.75.75 0 0 1-1.062-1.06l1.798-1.8l-.515-.514a11 11 0 0 1-.74-.789c-.19-.239-.4-.566-.403-.985c-.001-.274.07-.543.206-.78c.21-.364.553-.545.837-.658c.276-.111.634-.21 1.032-.32l.04-.01c.437-.121.47-.141.489-.155a.3.3 0 0 0 .054-.05c.015-.018.039-.05.195-.476l.347-.948l.02-.054c.24-.654.448-1.222.673-1.637c.238-.437.586-.876 1.185-1.008c.599-.133 1.1.12 1.499.416c.379.281.807.71 1.299 1.203m-2.473-.155h-.004l-.005.004l-.015.014a1 1 0 0 0-.168.243c-.166.305-.337.767-.603 1.49l-.347.948l-.026.072c-.109.3-.222.61-.435.86q-.143.167-.32.295c-.267.192-.586.28-.893.363l-.074.02c-.45.125-.724.202-.911.277q-.046.018-.075.032q.018.027.05.065c.125.158.326.361.655.69l2.059 2.061c.332.332.535.535.694.661q.037.03.064.048q.014-.029.032-.073c.075-.19.153-.466.277-.918l.02-.075c.084-.306.17-.624.362-.891a1.8 1.8 0 0 1 .285-.313c.249-.215.558-.33.855-.44l.072-.028l.959-.36c.715-.269 1.171-.442 1.473-.61a1 1 0 0 0 .24-.168l.016-.02v-.003l.001-.002q.002 0-.006-.027a1 1 0 0 0-.15-.252c-.205-.277-.548-.624-1.089-1.165l-1.54-1.543c-.545-.545-.895-.892-1.173-1.099a1 1 0 0 0-.274-.155z"></svg:path></svg:g>`,
})
export class SolarPinCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinLineDuotoneIcon],svg[solar-pin-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.99 4.95l.53-.53zm3.082 3.086l-.53.53zM8.738 19.429l-.53.53zm-4.116-4.12l.53-.53zm12.945-.315l-.264-.702zm-1.917.72l.264.703zM8.332 8.383l-.704-.258zm.695-1.896l.704.258zm-3.182 4.188l.2.723zm1.457-.539l-.438-.609zm.374-.345l.57.487zm6.575 6.59l.491.568zm-.87 1.821l-.723-.199zm.536-1.454l-.61-.438zM2.719 12.755l-.75.005zm.212-.803l-.65-.374zm8.374 9.391l.001-.75zm.788-.208l-.371-.652zm-.396-19.099l.162.732zM15.46 5.48l3.082 3.086l1.061-1.06L16.52 4.42zM9.269 18.9l-4.117-4.12l-1.06 1.06l4.116 4.12zm8.034-4.607l-1.917.72l.528 1.405l1.917-.72zM9.036 8.64l.695-1.896l-1.408-.516l-.695 1.896zm-2.992 2.756c.712-.196 1.253-.334 1.696-.652l-.876-1.218c-.173.125-.398.198-1.218.424zm1.584-3.272c-.293.8-.385 1.018-.523 1.18l1.142.973c.353-.415.535-.944.79-1.637zm.112 2.62q.281-.203.507-.467l-1.142-.973a1.4 1.4 0 0 1-.241.222zm7.646 4.268c-.689.26-1.214.445-1.626.801l.982 1.135c.16-.14.377-.233 1.172-.531zM14.104 18.4c.225-.819.298-1.043.422-1.216l-1.218-.875c-.318.443-.455.983-.65 1.693zm-.344-2.586q-.256.22-.452.495l1.218.875q.095-.132.216-.236zm-8.608-1.036c-.646-.647-1.084-1.087-1.368-1.444c-.286-.359-.315-.514-.315-.583l-1.5.009c.003.582.292 1.07.641 1.508c.35.44.861.95 1.481 1.57zm.494-4.828c-.845.234-1.542.424-2.063.634c-.52.208-1.012.49-1.302.994l1.3.748c.034-.06.136-.18.56-.35s1.022-.337 1.903-.58zm-2.177 2.8a.84.84 0 0 1 .111-.424l-1.3-.748a2.34 2.34 0 0 0-.311 1.182zm4.739 7.21c.624.624 1.137 1.139 1.579 1.49c.44.352.931.642 1.517.643l.002-1.5c-.069 0-.224-.029-.585-.316c-.36-.286-.802-.727-1.452-1.378zm4.45-1.958c-.245.888-.412 1.49-.583 1.917c-.172.428-.293.53-.353.564l.743 1.303c.51-.29.792-.786 1.002-1.309c.21-.524.402-1.225.637-2.077zm-1.354 4.091c.407 0 .807-.105 1.161-.307l-.743-1.303a.84.84 0 0 1-.416.11zm7.237-13.527c1.064 1.064 1.8 1.803 2.25 2.413c.444.598.495.917.441 1.167l1.466.317c.19-.878-.16-1.647-.701-2.377c-.533-.72-1.366-1.551-2.395-2.58zm-.71 7.13c1.361-.511 2.463-.923 3.246-1.358c.795-.44 1.431-.996 1.621-1.875l-1.466-.317c-.054.25-.232.52-.883.88c-.663.369-1.638.737-3.046 1.266zM16.52 4.42c-1.036-1.037-1.872-1.876-2.595-2.414c-.734-.544-1.508-.897-2.39-.702l.324 1.464c.25-.055.569-.005 1.172.443c.612.455 1.357 1.197 2.428 2.27zM9.731 6.744c.522-1.423.885-2.41 1.25-3.08c.36-.66.628-.84.878-.896l-.323-1.464c-.882.194-1.435.84-1.872 1.642c-.431.792-.837 1.906-1.341 3.282z"></svg:path><svg:path fill="currentColor" d="M1.47 21.47a.75.75 0 0 0 1.06 1.06zm5.714-3.598a.75.75 0 0 0-1.061-1.06zM2.53 22.53l4.653-4.658l-1.061-1.06l-4.654 4.658z" opacity=".5"></svg:path>`,
})
export class SolarPinLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinLinearIcon],svg[solar-pin-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.99 4.95l.53-.53zm3.082 3.086l-.531.53zM8.738 19.429l-.53.53zm-4.116-4.12l.53-.53zm12.945-.315l-.264-.702zm-1.917.72l.264.703zM8.332 8.383l-.704-.258zm.695-1.896l.704.258zm-3.182 4.188l.2.723zm1.457-.539l-.439-.609zm.374-.345l.57.487zm6.575 6.59l.491.568zm-.87 1.821l-.724-.199zm.536-1.454l-.61-.438zM2.718 12.755l-.75.005zm.212-.803l-.65-.374zm8.375 9.391l.001-.75zm.788-.208l-.371-.652zm-.396-19.099l.162.732zM1.47 21.47a.75.75 0 0 0 1.062 1.06zm5.715-3.598a.75.75 0 0 0-1.061-1.06zM15.459 5.48l3.082 3.086l1.061-1.06L16.52 4.42zM9.269 18.9l-4.117-4.12l-1.06 1.06l4.116 4.12zm8.034-4.607l-1.917.72l.528 1.405l1.917-.72zM9.036 8.64l.695-1.896l-1.409-.516l-.694 1.896zm-2.992 2.756c.712-.196 1.253-.334 1.696-.652l-.877-1.218c-.172.125-.397.198-1.217.424zm1.584-3.272c-.293.8-.385 1.018-.523 1.18l1.142.973c.353-.415.535-.944.79-1.637zm.112 2.62q.281-.203.507-.467l-1.142-.973a1.4 1.4 0 0 1-.242.222zm7.646 4.268c-.689.26-1.214.445-1.626.801l.982 1.135c.16-.14.377-.233 1.172-.531zM14.104 18.4c.225-.819.298-1.043.422-1.216l-1.219-.875c-.317.443-.454.983-.65 1.693zm-.344-2.586q-.256.22-.453.495l1.22.875q.093-.132.215-.236zm-8.608-1.036c-.646-.647-1.084-1.087-1.368-1.444c-.286-.359-.315-.514-.316-.583l-1.5.009c.004.582.293 1.07.642 1.508c.35.44.861.95 1.481 1.57zm.494-4.828c-.846.234-1.542.424-2.063.634c-.52.208-1.012.49-1.302.994l1.3.748c.034-.06.136-.18.56-.35s1.022-.337 1.903-.58zm-2.178 2.8a.84.84 0 0 1 .112-.424l-1.3-.748a2.34 2.34 0 0 0-.312 1.182zm4.74 7.21c.624.624 1.137 1.139 1.578 1.49c.441.352.932.642 1.518.643l.002-1.5c-.07 0-.225-.029-.585-.316c-.36-.286-.802-.727-1.452-1.378zm4.45-1.958c-.245.888-.412 1.49-.583 1.917c-.172.428-.293.53-.353.564l.743 1.303c.509-.29.792-.786 1.002-1.309c.21-.524.402-1.225.637-2.077zm-1.354 4.091c.407 0 .807-.105 1.161-.307l-.743-1.303a.84.84 0 0 1-.416.11zm7.237-13.527c1.064 1.064 1.8 1.803 2.25 2.413c.444.598.495.917.441 1.167l1.466.317c.19-.878-.16-1.647-.701-2.377c-.534-.72-1.366-1.551-2.395-2.58zm-.71 7.13c1.361-.511 2.463-.923 3.246-1.358c.795-.44 1.431-.996 1.621-1.875l-1.466-.317c-.054.25-.232.52-.883.88c-.663.369-1.638.737-3.046 1.266zM16.52 4.42c-1.036-1.037-1.872-1.876-2.595-2.414c-.734-.544-1.508-.897-2.39-.702l.324 1.464c.25-.055.569-.005 1.171.443c.613.455 1.358 1.197 2.429 2.27zM9.73 6.744c.522-1.423.886-2.41 1.251-3.08c.36-.66.628-.84.878-.896l-.323-1.464c-.882.194-1.435.84-1.872 1.642c-.431.792-.837 1.906-1.342 3.282zM2.53 22.53l4.654-4.658l-1.061-1.06l-4.654 4.658z"></svg:path>`,
})
export class SolarPinLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinListBoldIcon],svg[solar-pin-list-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 8.377a.74.74 0 0 1-.744.731h-4.962a.74.74 0 0 1-.745-.731c0-.404.334-.732.745-.732h4.962c.41 0 .744.328.744.732m0 4.389a.74.74 0 0 1-.744.731h-3.97a.74.74 0 0 1-.744-.731c0-.404.333-.732.744-.732h3.97c.41 0 .744.328.744.732" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m12.587 8.238l.364.357c1.518 1.492 2.278 2.239 2.277 3.047c0 .265-.055.526-.161.769c-.325.743-1.323 1.133-3.318 1.914l-.145.056c-.565.221-.848.332-1.076.51a2 2 0 0 0-.44.48c-.157.24-.24.529-.407 1.104c-.258.893-.386 1.34-.661 1.537a1 1 0 0 1-.71.181c-.338-.04-.672-.369-1.34-1.025l-1.026-1.01l-2.673 2.628a.754.754 0 0 1-1.053 0a.723.723 0 0 1 0-1.035l2.663-2.637l-1.017-1c-.667-.655-1.001-.983-1.043-1.316a.96.96 0 0 1 .184-.697c.202-.27.656-.397 1.564-.65c.586-.163.879-.245 1.124-.399q.28-.176.488-.433c.181-.224.294-.502.519-1.058l.057-.142c.794-1.96 1.191-2.941 1.948-3.26c.247-.105.513-.159.781-.159c.824 0 1.583.745 3.101 2.238"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 17.155a.74.74 0 0 1-.744.731h-8.932a.74.74 0 0 1-.744-.731c0-.404.333-.732.744-.732h8.932c.41 0 .744.328.744.732" clip-rule="evenodd"></svg:path>`,
})
export class SolarPinListBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinListBoldDuotoneIcon],svg[solar-pin-list-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.951 8.595l-.364-.357C11.07 6.746 10.31 5.999 9.488 6c-.27 0-.535.054-.782.158c-.756.32-1.153 1.3-1.948 3.261l-.057.142c-.225.556-.338.834-.518 1.058c-.138.17-.303.317-.489.433c-.245.154-.538.236-1.124.4c-.908.252-1.362.38-1.563.65a.96.96 0 0 0-.185.696c.042.333.376.66 1.043 1.317l1.017 1l1.045 1.026l.018.018l1.027 1.009c.668.656 1.001.984 1.34 1.025c.251.031.505-.034.709-.18c.275-.199.404-.645.661-1.538c.167-.575.25-.863.406-1.104q.18-.276.441-.48c.228-.178.511-.289 1.077-.51l.144-.056c1.995-.78 2.993-1.17 3.318-1.914c.106-.243.16-.504.161-.768c0-.81-.758-1.556-2.277-3.048" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m3.27 18.786l2.674-2.627l-.018-.018l-1.045-1.027l-2.663 2.637a.723.723 0 0 0 0 1.035a.753.753 0 0 0 1.053 0" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 8.377a.74.74 0 0 1-.744.731h-4.962a.74.74 0 0 1-.744-.731c0-.404.333-.731.744-.731h4.962c.411 0 .744.327.744.731m0 4.389a.74.74 0 0 1-.744.731h-3.97a.74.74 0 0 1-.744-.731c0-.404.333-.732.744-.732h3.97c.411 0 .744.328.744.732m0 4.389a.74.74 0 0 1-.744.731h-8.932a.74.74 0 0 1-.744-.731c0-.404.333-.732.744-.732h8.932c.411 0 .744.328.744.732" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarPinListBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinListBrokenIcon],svg[solar-pin-list-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13.632 8.224c1.53 1.53 2.295 2.295 2.294 3.124a2 2 0 0 1-.162.788c-.328.762-1.333 1.162-3.344 1.963l-.145.057c-.57.227-.855.34-1.085.523a2 2 0 0 0-.444.492c-.158.247-.242.542-.41 1.132c-.259.915-.389 1.373-.666 1.576a1 1 0 0 1-.714.186c-.341-.042-.678-.379-1.35-1.051l-3.13-3.13c-.673-.674-1.01-1.01-1.052-1.35a1 1 0 0 1 .186-.715c.203-.277.66-.407 1.576-.667c.59-.167.885-.251 1.132-.409q.284-.181.492-.444c.182-.23.296-.515.523-1.085l.057-.145c.8-2.01 1.2-3.016 1.963-3.344a2 2 0 0 1 .788-.162c.362 0 .712.145 1.118.437M3.347 18.142l2.694-2.694M22 8h-5m5 4.5h-4m4 4.5h-1m-8 0h4"></svg:path>`,
})
export class SolarPinListBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinListLineDuotoneIcon],svg[solar-pin-list-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m13.632 8.224l-.367-.367c-1.53-1.53-2.295-2.295-3.124-2.294a2 2 0 0 0-.788.162C8.59 6.053 8.19 7.058 7.39 9.07l-.057.145c-.227.57-.34.855-.523 1.085a2 2 0 0 1-.492.444c-.247.158-.542.242-1.132.41c-.916.259-1.373.389-1.576.666a1 1 0 0 0-.186.714c.042.341.379.678 1.051 1.35l3.13 3.13c.673.673 1.01 1.01 1.35 1.052a1 1 0 0 0 .715-.186c.277-.203.407-.66.667-1.576c.167-.59.251-.885.409-1.132q.181-.284.444-.492c.23-.182.515-.296 1.085-.523l.145-.058c2.01-.8 3.016-1.2 3.344-1.962a2 2 0 0 0 .162-.788c0-.83-.764-1.594-2.294-3.124Z"></svg:path><svg:path stroke-linecap="round" d="m3.347 18.142l2.694-2.694M22 8h-5m5 4.5h-4m4 4.5h-9" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPinListLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinListLinearIcon],svg[solar-pin-list-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m13.632 8.224l-.367-.367c-1.53-1.53-2.295-2.295-3.124-2.294a2 2 0 0 0-.788.162c-.762.328-1.162 1.333-1.962 3.344l-.058.145c-.227.57-.34.855-.523 1.085a2 2 0 0 1-.492.444c-.247.158-.542.242-1.132.41c-.915.259-1.373.389-1.576.666a1 1 0 0 0-.186.714c.043.341.379.678 1.052 1.35l3.13 3.13c.673.673 1.009 1.01 1.35 1.052a1 1 0 0 0 .715-.186c.277-.203.406-.66.666-1.576c.168-.59.251-.885.41-1.132a2 2 0 0 1 .443-.492c.23-.182.515-.296 1.085-.523l.146-.058c2.01-.8 3.015-1.2 3.343-1.962a2 2 0 0 0 .162-.788c0-.83-.764-1.594-2.294-3.124Z"></svg:path><svg:path stroke-linecap="round" d="m3.347 18.142l2.694-2.694M22 8h-5m5 4.5h-4m4 4.5h-9"></svg:path></svg:g>`,
})
export class SolarPinListLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinListOutlineIcon],svg[solar-pin-list-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.75 8a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75m0 4.5a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75m-8.99-5.208l.437.436c.735.736 1.335 1.336 1.745 1.857c.42.534.734 1.098.734 1.764c0 .373-.076.741-.223 1.083c-.263.612-.775 1.006-1.372 1.33c-.583.317-1.371.63-2.338 1.015l-.19.076c-.613.244-.774.316-.897.414a1.3 1.3 0 0 0-.278.307c-.085.133-.14.3-.32.934l-.01.035c-.121.428-.227.8-.34 1.089c-.115.293-.281.622-.594.852a1.75 1.75 0 0 1-1.251.325c-.386-.048-.691-.254-.935-.454a13 13 0 0 1-.827-.786l-1.06-1.06l-2.164 2.163a.75.75 0 0 1-1.06-1.06l2.163-2.164l-1.06-1.06a13 13 0 0 1-.786-.828c-.2-.243-.406-.548-.454-.934a1.75 1.75 0 0 1 .325-1.25c.23-.314.559-.48.852-.595c.288-.113.661-.22 1.09-.34l.034-.01c.634-.18.8-.236.934-.32a1.3 1.3 0 0 0 .307-.278c.098-.123.17-.284.414-.896l.076-.192c.384-.966.698-1.754 1.015-2.337c.324-.597.718-1.109 1.33-1.372a2.75 2.75 0 0 1 1.083-.223c.666 0 1.23.314 1.764.734c.521.41 1.121 1.01 1.857 1.745m-5.624 9.191L6.58 14.927l-.008-.01l-.009-.008l-1.556-1.556c-.348-.348-.569-.57-.714-.746a1 1 0 0 1-.125-.179a.25.25 0 0 1 .04-.155a1 1 0 0 1 .197-.096c.212-.083.514-.17.986-.303l.088-.025c.504-.143.901-.255 1.243-.474a2.8 2.8 0 0 0 .677-.61c.252-.318.404-.702.598-1.189l.091-.23c.407-1.023.689-1.727.958-2.222c.266-.49.454-.645.604-.71a1.3 1.3 0 0 1 .492-.101c.164 0 .397.068.835.413c.443.348.98.883 1.759 1.662l.366.366c.779.779 1.314 1.316 1.662 1.758c.345.439.413.672.413.836c0 .169-.035.337-.102.492c-.064.15-.219.338-.709.604c-.495.269-1.199.55-2.222.958l-.23.091c-.488.194-.87.346-1.189.598a2.8 2.8 0 0 0-.61.677c-.219.342-.331.739-.474 1.243l-.025.088c-.134.472-.22.774-.303.986a1 1 0 0 1-.096.197a.25.25 0 0 1-.155.04a1 1 0 0 1-.18-.125a12 12 0 0 1-.745-.714" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M22 17.75a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0 0 1.5z"></svg:path>`,
})
export class SolarPinListOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinOutlineIcon],svg[solar-pin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.475 4.375l3.172 3.176c1.008 1.008 1.824 1.825 2.35 2.535c.541.73.891 1.5.701 2.377c-.19.879-.826 1.434-1.62 1.875c-.773.429-1.854.835-3.187 1.336l-1.977.743c-.795.298-1.011.391-1.172.53q-.12.106-.216.237c-.124.173-.197.397-.422 1.216l-.013.045c-.228.831-.417 1.517-.624 2.032c-.21.523-.493 1.018-1.002 1.309a2.34 2.34 0 0 1-1.16.307c-.587 0-1.078-.292-1.519-.642c-.434-.346-.936-.85-1.545-1.46l-1.588-1.588l-4.122 4.127a.75.75 0 0 1-1.062-1.06l4.124-4.128l-1.535-1.537C3.453 15.2 2.954 14.7 2.61 14.268c-.349-.438-.638-.926-.642-1.508a2.34 2.34 0 0 1 .313-1.182c.29-.505.782-.786 1.302-.995c.512-.205 1.193-.393 2.018-.62l.045-.013c.82-.226 1.045-.3 1.217-.424q.135-.097.242-.222c.138-.163.23-.38.523-1.18l.716-1.956c.495-1.349.895-2.442 1.32-3.222c.437-.803.99-1.448 1.872-1.642c.882-.195 1.655.158 2.389.702c.712.53 1.535 1.353 2.55 2.369M13.03 3.21c-.602-.448-.921-.498-1.171-.443s-.519.235-.878.895c-.365.67-.729 1.658-1.25 3.081L9.036 8.64l-.04.108c-.233.64-.414 1.136-.75 1.529q-.224.264-.506.467c-.42.302-.927.441-1.585.622l-.11.03c-.882.243-1.48.41-1.903.58c-.425.17-.527.29-.562.35a.84.84 0 0 0-.112.424c0 .07.03.225.316.584c.284.357.722.797 1.368 1.444l4.117 4.12c.65.652 1.093 1.093 1.452 1.38c.36.286.516.315.585.315a.83.83 0 0 0 .416-.11c.06-.034.181-.136.353-.564s.338-1.03.582-1.917l.03-.11c.18-.657.32-1.164.62-1.583q.197-.274.453-.496c.39-.337.882-.522 1.519-.76l.107-.04l1.917-.72c1.408-.53 2.383-.898 3.046-1.266c.651-.361.829-.63.883-.88c.054-.251.003-.57-.44-1.168c-.452-.61-1.187-1.349-2.251-2.413L15.459 5.48c-1.071-1.072-1.816-1.814-2.429-2.27" clip-rule="evenodd"></svg:path>`,
})
export class SolarPinOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPip2BoldIcon],svg[solar-pip-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.955 5.061C2 6.375 2 8.251 2 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C5.375 21 7.251 21 11 21h2c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C22 17.625 22 15.749 22 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C18.625 3 16.749 3 13 3h-2c-3.75 0-5.625 0-6.939.955A5 5 0 0 0 2.955 5.06m8.219 7.38C11 12.868 11 13.412 11 14.5s0 1.63.174 2.06a2.3 2.3 0 0 0 1.237 1.262c.42.178.953.178 2.018.178h1.142c1.065 0 1.598 0 2.018-.178a2.3 2.3 0 0 0 1.237-1.262c.174-.43.174-.973.174-2.06s0-1.63-.174-2.06a2.3 2.3 0 0 0-1.237-1.262C17.169 11 16.636 11 15.571 11H14.43c-1.065 0-1.598 0-2.018.178a2.3 2.3 0 0 0-1.237 1.262" clip-rule="evenodd"></svg:path>`,
})
export class SolarPip2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPip2BoldDuotoneIcon],svg[solar-pip-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.955 5.061C2 6.375 2 8.251 2 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C5.375 21 7.251 21 11 21h2c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C22 17.625 22 15.749 22 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C18.625 3 16.749 3 13 3h-2c-3.75 0-5.625 0-6.939.955A5 5 0 0 0 2.955 5.06" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11 14.5c0-1.087 0-1.63.174-2.06a2.3 2.3 0 0 1 1.237-1.262c.42-.178.953-.178 2.018-.178h1.142c1.065 0 1.598 0 2.018.178a2.3 2.3 0 0 1 1.237 1.262c.174.43.174.973.174 2.06s0 1.63-.174 2.06a2.3 2.3 0 0 1-1.237 1.262c-.42.178-.953.178-2.018.178H14.43c-1.065 0-1.598 0-2.018-.178a2.3 2.3 0 0 1-1.237-1.262C11 16.13 11 15.587 11 14.5"></svg:path>`,
})
export class SolarPip2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPip2BrokenIcon],svg[solar-pip-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 11v1c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C5.375 21 7.251 21 11 21h2c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C22 17.625 22 15.749 22 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C18.625 3 16.749 3 13 3h-2c-3.75 0-5.625 0-6.939.955A5 5 0 0 0 2.955 5.06c-.383.528-.613 1.146-.75 1.939"></svg:path><svg:path d="M11 14c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C12.602 11 13.068 11 14 11h1c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C18 12.602 18 13.068 18 14s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C16.398 17 15.932 17 15 17h-1c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C11 15.398 11 14.932 11 14Z"></svg:path></svg:g>`,
})
export class SolarPip2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPip2LineDuotoneIcon],svg[solar-pip-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.75 0-5.625.955-6.939A5 5 0 0 1 4.06 3.955C5.375 3 7.251 3 11 3h2c3.75 0 5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C22 6.375 22 8.251 22 12s0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C18.625 21 16.749 21 13 21h-2c-3.75 0-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C2 17.625 2 15.749 2 12Z" opacity=".5"></svg:path><svg:path d="M11 14c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C12.602 11 13.068 11 14 11h1c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C18 12.602 18 13.068 18 14s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C16.398 17 15.932 17 15 17h-1c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C11 15.398 11 14.932 11 14Z"></svg:path></svg:g>`,
})
export class SolarPip2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPip2LinearIcon],svg[solar-pip-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.75 0-5.625.955-6.939A5 5 0 0 1 4.06 3.955C5.375 3 7.251 3 11 3h2c3.75 0 5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C22 6.375 22 8.251 22 12s0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C18.625 21 16.749 21 13 21h-2c-3.75 0-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C2 17.625 2 15.749 2 12Z"></svg:path><svg:path d="M11 14c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C12.602 11 13.068 11 14 11h1c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C18 12.602 18 13.068 18 14s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C16.398 17 15.932 17 15 17h-1c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C11 15.398 11 14.932 11 14Z"></svg:path></svg:g>`,
})
export class SolarPip2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPip2OutlineIcon],svg[solar-pip-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.955 2.25h2.09c1.837 0 3.276 0 4.419.124c1.165.126 2.11.388 2.916.974a5.8 5.8 0 0 1 1.272 1.272c.586.807.848 1.75.974 2.916c.124 1.143.124 2.582.124 4.419v.09c0 1.837 0 3.276-.124 4.419c-.126 1.165-.388 2.11-.974 2.916a5.8 5.8 0 0 1-1.272 1.272c-.807.586-1.75.848-2.916.974c-1.143.124-2.582.124-4.419.124h-2.09c-1.837 0-3.276 0-4.419-.124c-1.165-.126-2.11-.388-2.916-.974a5.8 5.8 0 0 1-1.272-1.272c-.586-.807-.848-1.75-.974-2.916c-.124-1.143-.124-2.582-.124-4.419v-.09c0-1.837 0-3.276.124-4.419c.126-1.165.388-2.11.974-2.916A5.8 5.8 0 0 1 3.62 3.348c.807-.586 1.75-.848 2.916-.974c1.143-.124 2.582-.124 4.419-.124M6.698 3.865c-1.038.112-1.688.328-2.196.697a4.3 4.3 0 0 0-.94.94c-.37.508-.585 1.158-.697 2.196C2.751 8.75 2.75 10.108 2.75 12s.001 3.25.115 4.302c.112 1.038.328 1.688.697 2.196c.262.36.58.678.94.94c.508.37 1.158.585 2.196.697c1.052.114 2.41.115 4.302.115h2c1.892 0 3.25-.001 4.302-.115c1.038-.113 1.688-.328 2.196-.697c.36-.262.678-.58.94-.94c.37-.508.585-1.158.697-2.196c.114-1.052.115-2.41.115-4.302s-.001-3.25-.115-4.302c-.113-1.038-.328-1.688-.697-2.196a4.3 4.3 0 0 0-.94-.94c-.508-.37-1.158-.585-2.196-.697c-1.052-.114-2.41-.115-4.302-.115h-2c-1.892 0-3.25.001-4.302.115m7.277 6.385h1.05c.445 0 .816 0 1.12.02c.317.022.617.069.907.19a2.75 2.75 0 0 1 1.489 1.488c.12.29.167.59.188.907c.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.8 2.8 0 0 1-.19.907a2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188c-.304.021-.675.021-1.12.021h-1.05c-.445 0-.816 0-1.12-.02a2.8 2.8 0 0 1-.907-.19a2.75 2.75 0 0 1-1.489-1.488c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12c.022-.318.069-.617.19-.907a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188c.304-.021.675-.021 1.12-.021m-1.018 1.517c-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677c-.032.077-.061.194-.078.435c-.017.247-.017.567-.017 1.043s0 .796.017 1.043c.017.241.046.358.078.435c.127.307.37.55.677.677c.077.032.194.061.435.078c.247.017.567.017 1.043.017h1c.476 0 .796 0 1.043-.017c.241-.017.358-.046.435-.078c.307-.127.55-.37.677-.677c.032-.077.061-.194.078-.435c.017-.247.017-.567.017-1.043s0-.796-.017-1.043c-.017-.241-.046-.358-.078-.435a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078A17 17 0 0 0 15 11.75h-1c-.476 0-.796 0-1.043.017" clip-rule="evenodd"></svg:path>`,
})
export class SolarPip2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPipBoldIcon],svg[solar-pip-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17c0-1.886 0-2.828.586-3.414S15.114 13 17 13h1c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21h-1c-1.886 0-2.828 0-3.414-.586S13 18.886 13 17"></svg:path><svg:path fill="currentColor" d="M14 3h-4C6.229 3 4.343 3 3.172 4.172S2 7.229 2 11v2c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883v-2c0-2.828 0-4.243.879-5.121c.878-.879 2.293-.879 5.121-.879H20c.949 0 1.423 0 1.717-.297c.293-.298.287-.766.275-1.703c-.034-2.634-.215-4.38-1.164-5.328C19.657 3 17.771 3 14 3"></svg:path>`,
})
export class SolarPipBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPipBoldDuotoneIcon],svg[solar-pip-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17c0-1.886 0-2.828.586-3.414S15.114 13 17 13h1c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21h-1c-1.886 0-2.828 0-3.414-.586S13 18.886 13 17"></svg:path><svg:path fill="currentColor" d="M13.996 21h-4l-1.115-.001c-3.04-.012-4.663-.12-5.713-1.17a3 3 0 0 1-.19-.214c-.843-1.021-.96-2.558-.975-5.235A21 21 0 0 1 2 13.887V11c0-3.771 0-5.657 1.17-6.828C4.344 3 6.23 3 10.002 3h4c3.77 0 5.656 0 6.828 1.172q.1.1.19.213c.842 1.021.959 2.558.975 5.235q.003.273.002.493V13c0 3.771 0 5.657-1.171 6.828S17.767 21 13.996 21" opacity=".5"></svg:path>`,
})
export class SolarPipBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPipBrokenIcon],svg[solar-pip-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M11 21h-1c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13v-2m20 0c0-3.771 0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172C2.518 4.825 2.229 5.7 2.102 7"></svg:path><svg:path d="M13 17c0-1.886 0-2.828.586-3.414S15.114 13 17 13h1c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21h-1c-1.886 0-2.828 0-3.414-.586S13 18.886 13 17Z"></svg:path></svg:g>`,
})
export class SolarPipBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPipLineDuotoneIcon],svg[solar-pip-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 17v-6c0-3.771 0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172S2 7.229 2 11v2c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21h8" opacity=".5"></svg:path><svg:path d="M13 17c0-1.886 0-2.828.586-3.414S15.114 13 17 13h1c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21h-1c-1.886 0-2.828 0-3.414-.586S13 18.886 13 17Z"></svg:path></svg:g>`,
})
export class SolarPipLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPipLinearIcon],svg[solar-pip-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M11 21h-1c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13v-2c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11"></svg:path><svg:path d="M13 17c0-1.886 0-2.828.586-3.414S15.114 13 17 13h1c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21h-1c-1.886 0-2.828 0-3.414-.586S13 18.886 13 17Z"></svg:path></svg:g>`,
})
export class SolarPipLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPipOutlineIcon],svg[solar-pip-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 2.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433V11a.75.75 0 0 1-1.5 0c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 5.705 2.89 6.71c-.138 1.029-.14 2.383-.14 4.29v2c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h1a.75.75 0 0 1 0 1.5H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m7.004 10h1.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.343.08 2.242v.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.343.08-2.242.08h-1.104c-.899 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.343-.08-2.242v-.104c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.726-1.65c.455-.456 1.022-.642 1.65-.726c.594-.08 1.343-.08 2.242-.08m-2.043 1.566c-.461.063-.659.17-.789.3s-.237.328-.3.79c-.064.482-.066 1.13-.066 2.094s.002 1.612.066 2.095c.063.461.17.659.3.789s.328.237.79.3c.482.064 1.13.066 2.094.066h1c.964 0 1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095s-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-1c-.964 0-1.612.002-2.095.066" clip-rule="evenodd"></svg:path>`,
})
export class SolarPipOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPipetteBoldIcon],svg[solar-pipette-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.241 5.753l8.006 8.006a1.544 1.544 0 0 0 2.183-2.184l-1.091-1.091l1.455-1.456a4.117 4.117 0 1 0-5.822-5.822L13.516 4.66l-1.091-1.09a1.544 1.544 0 1 0-2.184 2.183m.031 2.152L4.71 13.47c-.456.456-.684.684-.829.957a2 2 0 0 0-.203.58c-.058.304-.022.624.049 1.265l.053.476c.02.175.029.262.031.346a2.06 2.06 0 0 1-.488 1.392c-.054.064-.117.126-.241.25l-.629.63a1.544 1.544 0 0 0 2.184 2.183l.628-.629c.125-.124.187-.187.25-.24c.389-.33.885-.504 1.393-.49c.084.003.171.013.346.032l.476.053c.64.071.961.107 1.265.05a2 2 0 0 0 .58-.204c.273-.145.501-.373.957-.829l1.439-1.439L10.116 16a.75.75 0 1 1 1.06-1.06l1.854 1.853l.94-.94L12.116 14a.75.75 0 0 1 1.06-1.06l1.854 1.853l1.065-1.064z"></svg:path>`,
})
export class SolarPipetteBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPipetteBoldDuotoneIcon],svg[solar-pipette-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.241 5.753l1.092 1.092l5.822 5.822l1.092 1.092a1.544 1.544 0 0 0 2.183-2.184l-1.091-1.091l1.455-1.456a4.117 4.117 0 1 0-5.822-5.822L13.516 4.66l-1.091-1.09a1.544 1.544 0 1 0-2.184 2.183"></svg:path><svg:path fill="currentColor" d="M4.709 13.469c-.456.456-.684.684-.829.957a2 2 0 0 0-.203.58c-.058.304-.022.624.049 1.265l.053.476c.02.175.029.262.031.346a2.06 2.06 0 0 1-.488 1.392a5 5 0 0 1-.241.25l-.629.63a1.544 1.544 0 1 0 2.184 2.183l.628-.629c.125-.124.187-.187.25-.24c.389-.33.885-.504 1.393-.49c.084.003.171.013.346.032l.476.053c.64.071.961.107 1.265.05q.305-.06.58-.204c.273-.145.501-.373.957-.829l1.439-1.439l1.06-1.06l.94-.94l1.06-1.06l2.125-2.125l-5.822-5.822z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m12.116 14l1.854 1.852l1.06-1.06l-1.853-1.854A.75.75 0 1 0 12.117 14m-2.001 2l1.854 1.852l1.06-1.06l-1.853-1.854A.75.75 0 1 0 10.117 16"></svg:path>`,
})
export class SolarPipetteBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPipetteBrokenIcon],svg[solar-pipette-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.531 19.291l-.53-.53zm.802-12.446l.53-.53zm-1.092-1.092l-.53.53zm2.184-2.183l.53-.53zm1.091 1.091l-.53.53a.75.75 0 0 0 1.06 0zm1.456-1.455l-.53-.53zm4.367 7.278l-.53-.53a.75.75 0 0 0 0 1.06zm1.091 1.091l-.53.53zm-17.978 7.79l.53.53zm.629-.63l-.53-.53zm1.555 2.813l.53.53zm.628-.629l-.53-.53zM3.78 16.747l-.746.082zm-.053-.476l.745-.082zm3.527 3.95l-.083.746zm.476.053l.082-.745zm-2.214.404L6 21.25zm1.392-.488l.022-.75zM3.88 14.426l-.663-.351zm-.203.58l-.737-.14zm-.355 3.48L2.75 18zm.488-1.393l.75-.022zm5.764 3.027l.351.662zm-.58.203l.14.737zm4.183-7.385A.75.75 0 0 0 12.117 14zm-1.207 4.915a.75.75 0 1 0 1.06-1.061zm-.793-2.915A.75.75 0 0 0 10.117 16zm-2.558-6.44a.75.75 0 0 0 1.06 1.06zM6.71 12.53a.75.75 0 1 0-1.062-1.06zm14.415-7.327a.75.75 0 1 0 1.444-.406zm.98 3.338a.75.75 0 0 0-1.3-.748zm-10.24-2.227l-1.092-1.091l-1.061 1.06l1.092 1.092zm6.913 6.914l-1.091-1.091l-1.061 1.06l1.092 1.092zM11.894 4.1l1.092 1.092l1.06-1.06l-1.091-1.093zm2.153 1.092l1.455-1.456l-1.06-1.06l-1.456 1.455zm6.217 3.306l-1.456 1.455l1.06 1.061l1.457-1.456zm-9.461-1.123l5.822 5.822l1.06-1.06l-5.822-5.823zm-7.82 12.52l.628-.629l-1.06-1.06l-.63.628zm2.183 2.183l.629-.629l-1.061-1.06l-.629.628zm-.642-5.414l-.053-.476l-1.49.166l.052.476zm2.646 4.303l.476.053l.165-1.491l-.475-.053zm-1.375.482c.133-.133.17-.17.205-.2l-.97-1.143c-.093.08-.18.167-.296.283zm1.541-1.973c-.162-.018-.285-.032-.407-.036l-.044 1.5c.046 0 .098.006.285.027zM6 21.25c.247-.21.562-.32.885-.31l.044-1.5a2.8 2.8 0 0 0-1.9.666zm-4.078.828a2.294 2.294 0 0 0 3.244 0l-1.06-1.06a.794.794 0 0 1-1.123 0zm2.257-9.14c-.424.424-.752.74-.962 1.137l1.326.702c.08-.15.207-.289.696-.778zm.292 3.25c-.076-.687-.09-.875-.058-1.042l-1.473-.28c-.084.44-.026.893.04 1.488zm-1.254-2.113a2.8 2.8 0 0 0-.277.792l1.473.279q.037-.194.13-.369zM15.502 3.736a3.367 3.367 0 0 1 4.762 0l1.06-1.06a4.867 4.867 0 0 0-6.882 0zm4.398 9.492a.794.794 0 0 1-1.123 0l-1.06 1.061a2.294 2.294 0 0 0 3.244 0zM3.61 19.266c.116-.116.204-.203.283-.295L2.75 18c-.03.035-.066.072-.2.205zm-.578-2.436c.021.187.026.239.028.285l1.499-.044c-.004-.122-.018-.245-.036-.407zm.86 2.14c.45-.529.687-1.205.667-1.899l-1.5.044c.01.323-.1.638-.31.885zM10.773 4.1a.794.794 0 0 1 1.122 0l1.061-1.06a2.294 2.294 0 0 0-3.244 0zm-7.79 16.917a.794.794 0 0 1 0-1.122l-1.06-1.06a2.294 2.294 0 0 0 0 3.243zm7.79-15.794a.794.794 0 0 1 0-1.123L9.71 3.04a2.294 2.294 0 0 0 0 3.243zm10.189 9.066a2.294 2.294 0 0 0 0-3.244l-1.061 1.06c.31.31.31.813 0 1.123zM10 18.761c-.489.489-.628.617-.778.696l.702 1.325c.396-.21.713-.537 1.136-.96zM7.646 21.02c.595.066 1.047.124 1.487.04l-.279-1.473c-.167.031-.355.018-1.043-.058zm1.577-1.563a1.3 1.3 0 0 1-.369.13l.28 1.473a2.8 2.8 0 0 0 .791-.277zm9.585-8.443l1.092 1.092l1.06-1.061l-1.091-1.092zm-7.746 8.807l3.968-3.968l-1.06-1.061L10 18.761zm3.968-3.968l2.656-2.656l-1.061-1.06l-2.655 2.655zm0-1.061l-1.853-1.854L12.117 14l1.853 1.854zm-2 2l-1.853-1.854L10.117 16l1.853 1.854zM9.68 9.558l2.183-2.183l-1.06-1.06l-2.184 2.183zM5.24 14l1.468-1.469l-1.06-1.06l-1.47 1.468zM20.263 3.736c.424.424.71.93.86 1.467l1.444-.406a4.85 4.85 0 0 0-1.244-2.121zm.54 4.057a3.4 3.4 0 0 1-.54.705l1.06 1.06c.31-.31.571-.652.78-1.017z"></svg:path>`,
})
export class SolarPipetteBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPipetteLineDuotoneIcon],svg[solar-pipette-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m10.531 19.291l-.53-.53zm.802-12.446l.53-.53zm-1.092-1.092l-.53.53zm2.184-2.183l.53-.53zm1.091 1.091l-.53.53a.75.75 0 0 0 1.06 0zm1.456-1.455l-.53-.53zm4.367 7.278l-.53-.53a.75.75 0 0 0 0 1.06zm1.091 1.091l-.53.53zM4.71 13.47l-.53-.53zm-2.257 5.896l.53.53zm.629-.63l-.53-.53zm1.555 2.813l.53.53zm.628-.629l-.53-.53zM3.78 16.747l-.746.082zm-.053-.476l.745-.082zm3.527 3.95l-.083.746zm.476.053l.082-.745zm-2.214.404L6 21.25zm1.392-.488l.022-.75zM3.88 14.426l-.663-.351zm-.203.58l-.737-.14zm-.355 3.48L2.75 18zm.488-1.393l.75-.022zm5.764 3.027l.351.662zm-.58.203l.14.737zm5.506-5l-.53-.531zm-2.637-9.009l-1.091-1.091l-1.061 1.06l1.092 1.092zm6.914 6.914l-1.091-1.091l-1.061 1.06l1.092 1.092zM11.894 4.1l1.092 1.092l1.06-1.06l-1.091-1.093zm2.153 1.092l1.455-1.456l-1.06-1.06l-1.456 1.455zm6.217 3.306l-1.456 1.455l1.06 1.061l1.457-1.456zm-9.461-1.123l5.822 5.822l1.06-1.06l-5.822-5.823zM5.239 14l6.624-6.624l-1.06-1.06l-6.624 6.623zm-2.256 5.896l.628-.629l-1.06-1.06l-.63.628zm2.183 2.183l.629-.629l-1.061-1.06l-.629.628zm-.642-5.414l-.053-.476l-1.49.166l.052.476zm2.646 4.303l.476.053l.165-1.491l-.475-.053zm-1.375.482c.133-.133.17-.17.205-.2l-.97-1.143c-.093.08-.18.167-.296.283zm1.541-1.973c-.162-.018-.285-.032-.407-.036l-.044 1.5c.046 0 .098.006.285.027zM6 21.25c.247-.21.562-.32.885-.31l.044-1.5a2.8 2.8 0 0 0-1.9.666zm-4.078.828a2.294 2.294 0 0 0 3.244 0l-1.06-1.06a.794.794 0 0 1-1.123 0zm2.257-9.14c-.424.424-.752.74-.962 1.137l1.326.702c.08-.15.207-.289.696-.778zm.292 3.25c-.076-.687-.09-.875-.058-1.042l-1.473-.28c-.084.44-.026.893.04 1.488zm-1.254-2.113a2.8 2.8 0 0 0-.277.792l1.473.279q.037-.194.13-.369zM20.264 3.736a3.367 3.367 0 0 1 0 4.762l1.06 1.06a4.865 4.865 0 0 0 0-6.882zm-4.762 0a3.367 3.367 0 0 1 4.762 0l1.06-1.06a4.867 4.867 0 0 0-6.882 0zm4.398 9.492a.794.794 0 0 1-1.123 0l-1.06 1.061a2.294 2.294 0 0 0 3.244 0zM3.61 19.266c.116-.116.204-.203.283-.295L2.75 18c-.03.035-.066.072-.2.205zm-.578-2.436c.021.187.026.239.028.285l1.499-.044c-.004-.122-.018-.245-.036-.407zm.86 2.14c.45-.529.687-1.205.667-1.899l-1.5.044c.01.323-.1.638-.31.885zM10.773 4.1a.794.794 0 0 1 1.122 0l1.061-1.06a2.294 2.294 0 0 0-3.244 0zm-7.79 16.917a.794.794 0 0 1 0-1.122l-1.06-1.06a2.294 2.294 0 0 0 0 3.243zm7.79-15.794a.794.794 0 0 1 0-1.123L9.71 3.04a2.294 2.294 0 0 0 0 3.243zm10.189 9.066a2.294 2.294 0 0 0 0-3.244l-1.061 1.06c.31.31.31.813 0 1.123zM10 18.761c-.489.489-.628.617-.778.696l.702 1.325c.396-.21.713-.537 1.136-.96zM7.646 21.02c.595.066 1.047.124 1.487.04l-.279-1.473c-.167.031-.355.018-1.043-.058zm1.577-1.563a1.3 1.3 0 0 1-.369.13l.28 1.473a2.8 2.8 0 0 0 .791-.277zm9.585-8.443l1.092 1.092l1.06-1.061l-1.091-1.092zm-7.746 8.807l3.968-3.968l-1.06-1.061L10 18.761zm3.968-3.968l2.656-2.656l-1.061-1.06l-2.655 2.655z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14.5 15.322l-1.854-1.853m-.146 3.853l-1.854-1.853" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPipetteLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPipetteLinearIcon],svg[solar-pipette-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.531 19.291l-.53-.53zm.802-12.446l.53-.53zm-1.092-1.092l-.53.53zm2.184-2.183l.53-.53zm1.091 1.091l-.53.53a.75.75 0 0 0 1.06 0zm1.456-1.455l-.53-.53zm4.367 7.278l-.53-.53a.75.75 0 0 0 0 1.06zm1.091 1.091l-.53.53zM4.71 13.47l-.53-.53zm-2.257 5.896l.53.53zm.629-.63l-.53-.53zm1.555 2.813l.53.53zm.628-.629l-.53-.53zM3.78 16.747l-.746.082zm-.053-.476l.745-.082zm3.527 3.95l-.083.746zm.476.053l.082-.745zm-2.214.404L6 21.25zm1.392-.488l.022-.75zM3.88 14.426l-.663-.351zm-.203.58l-.737-.14zm-.355 3.48L2.75 18zm.488-1.393l.75-.022zm5.764 3.027l.351.662zm-.58.203l.14.737zm4.183-7.385A.75.75 0 0 0 12.117 14zm-1.207 4.915a.75.75 0 1 0 1.06-1.061zm-.793-2.915A.75.75 0 0 0 10.117 16zm.686-8.624l-1.091-1.091l-1.061 1.06l1.092 1.092zm6.914 6.914l-1.091-1.091l-1.061 1.06l1.092 1.092zM11.894 4.1l1.092 1.092l1.06-1.06l-1.091-1.093zm2.153 1.092l1.455-1.456l-1.06-1.06l-1.456 1.455zm6.217 3.306l-1.456 1.455l1.06 1.061l1.457-1.456zm-9.461-1.123l5.822 5.822l1.06-1.06l-5.822-5.823zM5.239 14l6.624-6.624l-1.06-1.06l-6.624 6.623zm-2.256 5.896l.628-.629l-1.06-1.06l-.63.628zm2.183 2.183l.629-.629l-1.061-1.06l-.629.628zm-.642-5.414l-.053-.476l-1.49.166l.052.476zm2.646 4.303l.476.053l.165-1.491l-.475-.053zm-1.375.482c.133-.133.17-.17.205-.2l-.97-1.143c-.093.08-.18.167-.296.283zm1.541-1.973c-.162-.018-.285-.032-.407-.036l-.044 1.5c.046 0 .098.006.285.027zM6 21.25c.247-.21.562-.32.885-.31l.044-1.5a2.8 2.8 0 0 0-1.9.666zm-4.078.828a2.294 2.294 0 0 0 3.244 0l-1.06-1.06a.794.794 0 0 1-1.123 0zm2.257-9.14c-.424.424-.752.74-.962 1.137l1.326.702c.08-.15.207-.289.696-.778zm.292 3.25c-.076-.687-.09-.875-.058-1.042l-1.473-.28c-.084.44-.026.893.04 1.488zm-1.254-2.113a2.8 2.8 0 0 0-.277.792l1.473.279q.037-.194.13-.369zM20.264 3.736a3.367 3.367 0 0 1 0 4.762l1.06 1.06a4.865 4.865 0 0 0 0-6.882zm-4.762 0a3.367 3.367 0 0 1 4.762 0l1.06-1.06a4.867 4.867 0 0 0-6.882 0zm4.398 9.492a.794.794 0 0 1-1.123 0l-1.06 1.061a2.294 2.294 0 0 0 3.244 0zM3.61 19.266c.116-.116.204-.203.283-.295L2.75 18c-.03.035-.066.072-.2.205zm-.578-2.436c.021.187.026.239.028.285l1.499-.044c-.004-.122-.018-.245-.036-.407zm.86 2.14c.45-.529.687-1.205.667-1.899l-1.5.044c.01.323-.1.638-.31.885zM10.773 4.1a.794.794 0 0 1 1.122 0l1.061-1.06a2.294 2.294 0 0 0-3.244 0zm-7.79 16.917a.794.794 0 0 1 0-1.122l-1.06-1.06a2.294 2.294 0 0 0 0 3.243zm7.79-15.794a.794.794 0 0 1 0-1.123L9.71 3.04a2.294 2.294 0 0 0 0 3.243zm10.189 9.066a2.294 2.294 0 0 0 0-3.244l-1.061 1.06c.31.31.31.813 0 1.123zM10 18.761c-.489.489-.628.617-.778.696l.702 1.325c.396-.21.713-.537 1.136-.96zM7.646 21.02c.595.066 1.047.124 1.487.04l-.279-1.473c-.167.031-.355.018-1.043-.058zm1.577-1.563a1.3 1.3 0 0 1-.369.13l.28 1.473a2.8 2.8 0 0 0 .791-.277zm9.585-8.443l1.092 1.092l1.06-1.061l-1.091-1.092zm-7.746 8.807l3.968-3.968l-1.06-1.061L10 18.761zm3.968-3.968l2.656-2.656l-1.061-1.06l-2.655 2.655zm0-1.061l-1.853-1.854L12.117 14l1.853 1.854zm-2 2l-1.853-1.854L10.117 16l1.853 1.854z"></svg:path>`,
})
export class SolarPipetteLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPipetteOutlineIcon],svg[solar-pipette-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.264 3.736a3.367 3.367 0 0 0-4.762 0l-1.455 1.456a.75.75 0 0 1-1.061 0L11.894 4.1a.794.794 0 1 0-1.122 1.123l8.005 8.005a.794.794 0 0 0 1.123-1.122l-1.092-1.092a.75.75 0 0 1 0-1.06l1.456-1.456a3.367 3.367 0 0 0 0-4.762m-5.822-1.06a4.867 4.867 0 1 1 6.883 6.882l-.926.926l.562.561a2.294 2.294 0 0 1-3.244 3.244l-.562-.561l-6.094 6.093l-.066.067c-.39.391-.695.696-1.07.894a2.8 2.8 0 0 1-.792.278c-.416.08-.844.032-1.393-.03l-.094-.01l-.476-.053a4 4 0 0 0-.285-.027a1.3 1.3 0 0 0-.885.31c-.035.03-.072.066-.205.2l-.63.628a2.294 2.294 0 1 1-3.243-3.244l.629-.629c.133-.133.17-.17.2-.205c.208-.247.319-.562.31-.885a4 4 0 0 0-.028-.285l-.053-.476l-.01-.094c-.061-.549-.11-.977-.03-1.394a2.8 2.8 0 0 1 .277-.791c.2-.375.504-.68.895-1.07l.067-.067l6.093-6.093l-.561-.562a2.294 2.294 0 1 1 3.244-3.244l.561.562zm-3.109 5.23l-6.094 6.093c-.489.489-.617.628-.696.778q-.093.175-.13.369c-.031.167-.018.355.058 1.043l.056.5c.017.15.03.267.033.382c.02.694-.217 1.37-.666 1.9c-.075.087-.158.17-.265.277l-.018.018l-.628.629a.794.794 0 1 0 1.122 1.122l.647-.646c.107-.107.19-.19.277-.265a2.8 2.8 0 0 1 1.9-.666c.115.003.231.016.382.033l.5.056c.688.076.876.09 1.043.058a1.3 1.3 0 0 0 .369-.13c.15-.08.289-.207.778-.696l1.438-1.439L10.116 16a.75.75 0 0 1 1.06-1.06l1.324 1.323l.94-.94L12.115 14a.75.75 0 0 1 1.06-1.06l1.324 1.323l1.595-1.595z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPipetteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaaylistMinimalisticBoldIcon],svg[solar-plaaylist-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.125 10.685c1.642.948 2.463 1.422 2.723 2.05c.203.49.203 1.04 0 1.53c-.26.628-1.081 1.102-2.723 2.05s-2.463 1.422-3.136 1.333a2 2 0 0 1-1.326-.765c-.413-.539-.413-1.487-.413-3.383s0-2.844.413-3.383a2 2 0 0 1 1.326-.765c.673-.089 1.494.385 3.136 1.333"></svg:path>`,
})
export class SolarPlaaylistMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaaylistMinimalisticBoldDuotoneIcon],svg[solar-plaaylist-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.125 10.685c1.642.948 2.463 1.422 2.723 2.05a2 2 0 0 1 0 1.53c-.26.627-1.081 1.101-2.723 2.05c-1.642.947-2.463 1.421-3.136 1.333a2 2 0 0 1-1.326-.766c-.413-.538-.413-1.486-.413-3.382s0-2.844.413-3.383a2 2 0 0 1 1.326-.765c.673-.089 1.494.385 3.136 1.333"></svg:path>`,
})
export class SolarPlaaylistMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaaylistMinimalisticBrokenIcon],svg[solar-plaaylist-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10 16H3m7-5H3"></svg:path><svg:path d="M19.125 10.685c1.642.948 2.463 1.422 2.723 2.05a2 2 0 0 1 0 1.53c-.26.627-1.081 1.101-2.723 2.05c-1.642.947-2.463 1.421-3.136 1.333a2 2 0 0 1-1.326-.766c-.413-.538-.413-1.486-.413-3.382s0-2.844.413-3.383a2 2 0 0 1 1.326-.765c.673-.089 1.494.385 3.136 1.333Z"></svg:path><svg:path stroke-linecap="round" d="M20 6H9.5M3 6h2.25"></svg:path></svg:g>`,
})
export class SolarPlaaylistMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaaylistMinimalisticLineDuotoneIcon],svg[solar-plaaylist-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 6H3m7 10H3m7-5H3" opacity=".5"></svg:path><svg:path d="M19.125 10.685c1.642.948 2.463 1.422 2.723 2.05a2 2 0 0 1 0 1.53c-.26.627-1.081 1.101-2.723 2.05c-1.642.947-2.463 1.421-3.136 1.333a2 2 0 0 1-1.326-.766c-.413-.538-.413-1.486-.413-3.382s0-2.844.413-3.383a2 2 0 0 1 1.326-.765c.673-.089 1.494.385 3.136 1.333Z"></svg:path></svg:g>`,
})
export class SolarPlaaylistMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaaylistMinimalisticLinearIcon],svg[solar-plaaylist-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 6H3m7 10H3m7-5H3"></svg:path><svg:path d="M19.125 10.685c1.642.948 2.463 1.422 2.723 2.05a2 2 0 0 1 0 1.53c-.26.627-1.081 1.101-2.723 2.05c-1.642.947-2.463 1.421-3.136 1.333a2 2 0 0 1-1.326-.766c-.413-.538-.413-1.486-.413-3.382s0-2.844.413-3.383a2 2 0 0 1 1.326-.765c.673-.089 1.494.385 3.136 1.333Z"></svg:path></svg:g>`,
})
export class SolarPlaaylistMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaaylistMinimalisticOutlineIcon],svg[solar-plaaylist-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m17.216 4.016l.068.04c.792.457 1.434.827 1.906 1.163c.476.34.888.716 1.1 1.229a2.75 2.75 0 0 1 0 2.104c-.212.513-.624.89-1.1 1.229c-.473.336-1.114.706-1.906 1.163l-.068.04c-.792.457-1.433.827-1.96 1.068c-.532.243-1.065.412-1.615.34a2.75 2.75 0 0 1-1.823-1.053c-.338-.44-.457-.986-.513-1.567c-.055-.578-.055-1.318-.055-2.232v-.08c0-.914 0-1.655.055-2.232c.056-.581.175-1.127.513-1.567a2.75 2.75 0 0 1 1.823-1.053c.55-.072 1.083.097 1.614.34c.528.24 1.169.61 1.96 1.068m-2.584.296c-.458-.209-.672-.233-.795-.216a1.25 1.25 0 0 0-.829.478c-.075.098-.162.296-.21.797c-.047.497-.048 1.166-.048 2.129s0 1.632.048 2.13c.048.5.135.698.21.796c.202.263.5.435.829.478c.123.017.337-.007.795-.216c.454-.208 1.034-.541 1.868-1.023s1.413-.817 1.82-1.106c.41-.292.537-.466.585-.58a1.25 1.25 0 0 0 0-.957c-.048-.115-.175-.289-.585-.58c-.407-.29-.986-.625-1.82-1.107s-1.414-.815-1.868-1.023M2.25 11a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlaaylistMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlain2BoldIcon],svg[solar-plain-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.498 18.485l3.13-9.391c.791-2.373 1.331-3.994 1.37-5.115c.013-.377-.414-.503-.68-.236l-14.46 14.46c-.233.233-.177.626.14.716q.047.013.095.024c.5.123 1.153.034 2.46-.143l.07-.01c.369-.05.553-.075.73-.064c.32.02.63.124.898.303c.147.098.279.23.541.492l.252.252c1.51 1.51 2.265 2.265 3.066 2.226c.22-.011.438-.062.64-.151c.734-.324 1.072-1.337 1.747-3.363M14.906 3.372l-9.331 3.11c-2.082.694-3.123 1.041-3.439 1.804q-.112.271-.133.564c-.059.824.717 1.6 2.269 3.151l.283.283c.254.255.382.382.478.524c.19.28.297.606.31.944c.008.171-.019.35-.072.705c-.196 1.304-.294 1.956-.179 2.458l.013.052c.081.325.48.387.717.15L20.257 2.683c.267-.267.141-.694-.236-.68c-1.121.038-2.742.578-5.115 1.369"></svg:path>`,
})
export class SolarPlain2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlain2BoldDuotoneIcon],svg[solar-plain-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.796 18.204L21.512 2.488c-.988-.989-2.86-.364-6.606.884l-9.331 3.11c-2.082.694-3.123 1.041-3.439 1.804q-.112.271-.133.564c-.059.824.717 1.6 2.269 3.151l.283.283c.254.254.382.382.478.523c.19.28.297.607.31.945c.008.171-.019.35-.072.705c-.196 1.304-.294 1.956-.179 2.458c.114.495.362.938.704 1.289" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m17.498 18.486l3.13-9.392c1.25-3.745 1.873-5.617.885-6.606L5.797 18.204c.348.356.794.617 1.296.74c.5.122 1.153.033 2.46-.144l.071-.01c.369-.05.553-.075.73-.064c.32.02.63.124.898.303c.147.099.278.23.541.493l.251.251c1.51 1.51 2.266 2.265 3.067 2.226c.22-.01.438-.062.64-.151c.734-.323 1.072-1.336 1.747-3.362" opacity=".5"></svg:path>`,
})
export class SolarPlain2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlain2BrokenIcon],svg[solar-plain-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20.628 9.094c1.248-3.745 1.873-5.618.884-6.606c-.988-.989-2.86-.364-6.606.884L10.24 4.927M5.575 6.482c-2.082.694-3.123 1.041-3.439 1.804q-.112.271-.133.564c-.059.824.717 1.6 2.269 3.151l.283.283c.254.254.382.382.478.523c.19.28.297.607.31.945c.008.171-.019.35-.072.705c-.196 1.304-.294 1.956-.179 2.458c.23 1 1.004 1.785 2 2.028c.5.123 1.154.034 2.46-.143l.072-.01c.368-.05.552-.075.729-.064c.32.019.63.124.898.303c.147.098.279.23.541.492l.252.252c1.51 1.51 2.265 2.265 3.066 2.226c.22-.011.438-.062.64-.152c.734-.323 1.072-1.336 1.747-3.362l1.566-4.696M6 18l3.75-3.75M21 3l-8.5 8.5"></svg:path>`,
})
export class SolarPlain2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlain2LineDuotoneIcon],svg[solar-plain-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m17.498 18.485l3.13-9.391c1.248-3.745 1.873-5.618.884-6.606c-.988-.989-2.86-.364-6.606.884l-9.331 3.11c-2.082.694-3.123 1.041-3.439 1.804q-.112.271-.133.564c-.059.824.717 1.6 2.269 3.151l.283.283c.254.254.382.382.478.523c.19.28.297.607.31.945c.008.171-.019.35-.072.705c-.196 1.304-.294 1.956-.179 2.458c.23 1 1.004 1.785 2 2.028c.5.123 1.154.034 2.46-.143l.072-.01c.368-.05.552-.075.729-.064c.32.019.63.124.898.303c.147.098.279.23.541.492l.252.252c1.51 1.51 2.265 2.265 3.066 2.226c.22-.011.438-.062.64-.152c.734-.323 1.072-1.336 1.747-3.362Z"></svg:path><svg:path stroke-linecap="round" d="M6 18L21 3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPlain2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlain2LinearIcon],svg[solar-plain-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m17.498 18.485l3.13-9.391c1.248-3.745 1.873-5.618.884-6.606c-.988-.989-2.86-.364-6.606.884l-9.331 3.11c-2.082.694-3.123 1.041-3.439 1.804q-.112.271-.133.564c-.059.824.717 1.6 2.269 3.151l.283.283c.254.254.382.382.478.523c.19.28.297.607.31.945c.008.171-.019.35-.072.705c-.196 1.304-.294 1.956-.179 2.458c.23 1 1.004 1.785 2 2.028c.5.123 1.154.034 2.46-.143l.072-.01c.368-.05.552-.075.729-.064c.32.019.63.124.898.303c.147.098.279.23.541.492l.252.252c1.51 1.51 2.265 2.265 3.066 2.226c.22-.011.438-.062.64-.152c.734-.323 1.072-1.336 1.747-3.362Z"></svg:path><svg:path stroke-linecap="round" d="M6 18L21 3"></svg:path></svg:g>`,
})
export class SolarPlain2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlain2OutlineIcon],svg[solar-plain-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.374 2.83c-.992.176-2.334.62-4.23 1.253l-9.332 3.11c-1.06.354-1.787.598-2.294.841c-.503.242-.637.414-.689.539a1 1 0 0 0-.078.33c-.01.134.033.348.375.79c.345.444.886.987 1.676 1.777l.283.283l.04.04c.216.216.391.39.528.593c.269.395.421.858.44 1.336c.01.244-.027.489-.072.79l-.009.056a28 28 0 0 0-.2 1.485c-.032.359-.02.556.011.693q.034.146.088.282L20.189 2.75c-.214-.004-.48.02-.815.08m2.669-.873c.765.766.804 1.81.604 2.931c-.198 1.114-.68 2.56-1.286 4.378l-3.168 9.504c-.324.972-.59 1.768-.87 2.357c-.287.602-.656 1.136-1.27 1.407a2.6 2.6 0 0 1-.906.213c-.671.033-1.24-.28-1.765-.69c-.515-.4-1.108-.994-1.832-1.718l-.288-.288c-.284-.284-.357-.352-.428-.4a1.06 1.06 0 0 0-.526-.177c-.087-.005-.185.005-.583.059l-.096.013c-.633.086-1.141.155-1.553.185c-.42.032-.799.03-1.162-.06a3.46 3.46 0 0 1-2.553-2.589c-.083-.364-.08-.743-.043-1.162c.036-.411.113-.919.207-1.55l.004-.024c.058-.385.069-.481.066-.565a1.06 1.06 0 0 0-.183-.553c-.047-.069-.112-.139-.388-.414l-.32-.32c-.744-.744-1.353-1.354-1.763-1.882c-.42-.54-.735-1.127-.686-1.816a2.6 2.6 0 0 1 .188-.797c.265-.639.809-1.021 1.426-1.317c.602-.29 1.42-.562 2.419-.895l9.445-3.148c1.818-.606 3.264-1.089 4.378-1.287c1.122-.2 2.166-.16 2.932.605M21.25 3.81L6.953 18.107q.153.066.318.107c.137.034.334.048.693.022c.361-.027.825-.09 1.487-.18l.072-.01l.058-.008c.311-.042.565-.076.817-.061a2.56 2.56 0 0 1 1.27.428c.21.14.391.322.613.544l.042.042l.251.25c.77.77 1.298 1.297 1.73 1.634c.43.335.64.38.77.374q.195-.01.374-.088c.12-.053.286-.187.52-.68c.237-.494.474-1.201.818-2.233l3.13-9.392c.633-1.897 1.078-3.238 1.255-4.23c.06-.336.083-.602.08-.816" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlain2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
