import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBatteryChargeBrokenIcon],svg[solar-battery-charge-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20 10c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11.5 9L9 12h3.5L10 15"></svg:path><svg:path stroke-linecap="round" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"></svg:path></svg:g>`,
})
export class SolarBatteryChargeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryChargeLineDuotoneIcon],svg[solar-battery-charge-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path d="M20 10c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14z" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11.5 9L9 12h3.5L10 15"></svg:path></svg:g>`,
})
export class SolarBatteryChargeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryChargeLinearIcon],svg[solar-battery-charge-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Zm18-2c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11.5 9L9 12h3.5L10 15"></svg:path></svg:g>`,
})
export class SolarBatteryChargeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryChargeMinimalisticBoldIcon],svg[solar-battery-charge-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12m9.98-3.576a.75.75 0 0 1 .096 1.056l-1.475 1.77H12.5a.75.75 0 0 1 .576 1.23l-2.5 3a.75.75 0 0 1-1.152-.96l1.475-1.77H9a.75.75 0 0 1-.576-1.23l2.5-3a.75.75 0 0 1 1.056-.096" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0z"></svg:path>`,
})
export class SolarBatteryChargeMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryChargeMinimalisticBoldDuotoneIcon],svg[solar-battery-charge-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172S19.5 15.771 19.5 12s0-5.657-1.172-6.828S15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172" opacity=".5"></svg:path><svg:path fill="currentColor" d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0zm-9.174-4.52a.75.75 0 0 0-1.152-.96l-2.5 3A.75.75 0 0 0 9 12.75h1.899l-1.475 1.77a.75.75 0 0 0 1.152.96l2.5-3a.75.75 0 0 0-.576-1.23h-1.899z"></svg:path>`,
})
export class SolarBatteryChargeMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryChargeMinimalisticBrokenIcon],svg[solar-battery-charge-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 14v-4"></svg:path><svg:path stroke-linejoin="round" d="M11.5 9L9 12h3.5L10 15"></svg:path><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"></svg:path></svg:g>`,
})
export class SolarBatteryChargeMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryChargeMinimalisticLineDuotoneIcon],svg[solar-battery-charge-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M22 14v-4"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11.5 9L9 12h3.5L10 15"></svg:path></svg:g>`,
})
export class SolarBatteryChargeMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryChargeMinimalisticLinearIcon],svg[solar-battery-charge-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M22 14v-4"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11.5 9L9 12h3.5L10 15"></svg:path></svg:g>`,
})
export class SolarBatteryChargeMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryChargeMinimalisticOutlineIcon],svg[solar-battery-charge-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.076 9.48a.75.75 0 0 0-1.152-.96l-2.5 3A.75.75 0 0 0 9 12.75h1.899l-1.475 1.77a.75.75 0 1 0 1.152.96l2.5-3a.75.75 0 0 0-.576-1.23h-1.899z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 3.25h1.612c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.945c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M5.71 4.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289s.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289s-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14H10c-1.907 0-3.261.002-4.29.14" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M22 14.75a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75"></svg:path>`,
})
export class SolarBatteryChargeMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryChargeOutlineIcon],svg[solar-battery-charge-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.076 9.48a.75.75 0 0 0-1.152-.96l-2.5 3A.75.75 0 0 0 9 12.75h1.899l-1.475 1.77a.75.75 0 1 0 1.152.96l2.5-3a.75.75 0 0 0-.576-1.23h-1.899z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 3.25h1.612c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.069.513.107 1.091.128 1.74c.362 0 .695.005.972.042c.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v.09c0 .433 0 .83-.043 1.152c-.048.356-.16.731-.47 1.04s-.684.422-1.04.47c-.277.037-.61.042-.972.043c-.021.648-.06 1.226-.128 1.739c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.945c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M5.71 4.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289s.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289s-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14H10c-1.907 0-3.261.002-4.29.14m15.039 5.87v2.48q.141-.006.247-.02a.7.7 0 0 0 .177-.042l.003-.001l.001-.003l.005-.01a.7.7 0 0 0 .037-.167c.028-.21.03-.504.03-.997s-.002-.787-.03-.997a.7.7 0 0 0-.042-.177l-.001-.003l-.003-.001l-.01-.005a.7.7 0 0 0-.167-.037a3 3 0 0 0-.247-.02" clip-rule="evenodd"></svg:path>`,
})
export class SolarBatteryChargeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryFullBoldIcon],svg[solar-battery-full-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172c.944.943 1.127 2.348 1.163 4.828H20c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14h-.509c-.036 2.48-.22 3.885-1.163 4.828C17.157 20 15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12m4.636-3.656a.75.75 0 0 1 1.02.292L7 9l.656-.363l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.202.631c.142.551.274 1.364.274 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002l-.001.001L7 15l.656.364a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01m4.52.292a.75.75 0 0 0-1.317.719l.005.01l.038.087c.035.087.087.235.142.447c.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L10.5 15l.656.363l.001-.002l.002-.003l.004-.007l.01-.018l.026-.053q.03-.064.075-.175c.06-.147.132-.356.203-.631c.14-.551.273-1.364.273-2.474s-.132-1.923-.274-2.474a5 5 0 0 0-.202-.631a3 3 0 0 0-.102-.228l-.01-.018l-.003-.007zM10.5 9c.65-.361.655-.365.656-.364zm3.136-.656a.75.75 0 0 1 1.02.292L14 9l.656-.363l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.203.631c.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002l-.001.001l-.654-.363c.648.36.653.364.654.363a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01" clip-rule="evenodd"></svg:path>`,
})
export class SolarBatteryFullBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryFullBoldDuotoneIcon],svg[solar-battery-full-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172S19.5 15.771 19.5 12s0-5.657-1.172-6.828S15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.491 14c.009-.6.009-1.264.009-2c0-.735 0-1.4-.009-2H20c.942 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.942 14 20 14zM6.636 8.345a.75.75 0 0 1 1.02.29L7 9l.656-.363l.001.002l.002.003l.004.007l.01.018l.026.053q.03.064.076.175c.058.147.131.356.202.631c.14.551.273 1.364.273 2.474s-.132 1.923-.273 2.474a5 5 0 0 1-.202.631a3 3 0 0 1-.103.228l-.01.018l-.003.008l-.002.003v.001l-.001.001a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.1s-.118-1.678-.226-2.102a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01m4.52.291a.75.75 0 0 0-1.317.72l.005.01q.01.02.038.086c.035.087.087.235.142.447c.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L10.5 15l.656.363l.001-.001l.002-.003l.004-.008l.01-.018l.026-.053q.03-.064.076-.175a5 5 0 0 0 .202-.631c.14-.551.273-1.364.273-2.474s-.132-1.923-.273-2.474a5 5 0 0 0-.202-.631a3 3 0 0 0-.103-.228l-.01-.018l-.003-.007l-.002-.003zm2.48-.291a.75.75 0 0 1 1.02.29L14 9l.656-.363l.001.002l.002.003l.004.007l.01.018l.026.053q.03.064.076.175a5 5 0 0 1 .202.631c.14.551.273 1.364.273 2.474s-.132 1.923-.273 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.103.228l-.01.018l-.003.008l-.002.003v.001l-.001.001a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.1s-.118-1.678-.226-2.102a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01"></svg:path>`,
})
export class SolarBatteryFullBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryFullBrokenIcon],svg[solar-battery-full-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M7 9s.5.9.5 3s-.5 3-.5 3m3.5-6s.5.9.5 3s-.5 3-.5 3M14 9s.5.9.5 3s-.5 3-.5 3"></svg:path><svg:path d="M20 10c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14z"></svg:path><svg:path stroke-linecap="round" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"></svg:path></svg:g>`,
})
export class SolarBatteryFullBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryFullLineDuotoneIcon],svg[solar-battery-full-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M7 9s.5.9.5 3s-.5 3-.5 3"></svg:path><svg:path stroke-linecap="round" d="M10.5 9s.5.9.5 3s-.5 3-.5 3" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M14 9s.5.9.5 3s-.5 3-.5 3"></svg:path><svg:path d="M20 10c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBatteryFullLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryFullLinearIcon],svg[solar-battery-full-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M7 9s.5.9.5 3s-.5 3-.5 3m3.5-6s.5.9.5 3s-.5 3-.5 3M14 9s.5.9.5 3s-.5 3-.5 3"></svg:path><svg:path d="M20 10c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14z"></svg:path></svg:g>`,
})
export class SolarBatteryFullLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryFullMinimalisticBoldIcon],svg[solar-battery-full-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12m4.636-3.656a.75.75 0 0 1 1.02.292L7 9l.656-.363l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.202.631c.142.551.274 1.364.274 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002l-.001.001L7 15l.656.364a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01m4.52.292a.75.75 0 0 0-1.317.719l.005.01l.038.087c.035.087.087.235.142.447c.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L10.5 15l.656.363l.001-.002l.002-.003l.004-.007l.01-.018l.026-.053q.03-.064.075-.175c.06-.147.132-.356.203-.631c.14-.551.273-1.364.273-2.474s-.132-1.923-.274-2.474a5 5 0 0 0-.202-.631a3 3 0 0 0-.102-.228l-.01-.018l-.003-.007zM10.5 9c.65-.361.655-.365.656-.364zm3.136-.656a.75.75 0 0 1 1.02.292L14 9l.656-.363l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.203.631c.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002l-.001.001l-.654-.363c.648.36.653.364.654.363a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0z"></svg:path>`,
})
export class SolarBatteryFullMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryFullMinimalisticBoldDuotoneIcon],svg[solar-battery-full-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172S19.5 15.771 19.5 12s0-5.657-1.172-6.828S15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172" opacity=".5"></svg:path><svg:path fill="currentColor" d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0zM6.636 8.345a.75.75 0 0 1 1.02.29L7 9l.656-.363l.001.002l.002.003l.004.007l.01.018l.026.053q.03.064.076.175c.058.147.131.356.202.631c.14.551.273 1.364.273 2.474s-.132 1.923-.273 2.474a5 5 0 0 1-.202.631a3 3 0 0 1-.103.228l-.01.018l-.003.008l-.002.003v.001l-.001.001a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.1s-.118-1.678-.226-2.102a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01m4.52.291a.75.75 0 0 0-1.317.72l.005.01q.01.02.038.086c.035.087.087.235.142.447c.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L10.5 15l.656.363l.001-.001l.002-.003l.004-.008l.01-.018l.026-.053q.03-.064.076-.175a5 5 0 0 0 .202-.631c.14-.551.273-1.364.273-2.474s-.132-1.923-.273-2.474a5 5 0 0 0-.202-.631a3 3 0 0 0-.103-.228l-.01-.018l-.003-.007l-.002-.003zm2.48-.291a.75.75 0 0 1 1.02.29L14 9l.656-.363l.001.002l.002.003l.004.007l.01.018l.026.053q.03.064.076.175a5 5 0 0 1 .202.631c.14.551.273 1.364.273 2.474s-.132 1.923-.273 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.103.228l-.01.018l-.003.008l-.002.003v.001l-.001.001a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.1s-.118-1.678-.226-2.102a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01"></svg:path>`,
})
export class SolarBatteryFullMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryFullMinimalisticBrokenIcon],svg[solar-battery-full-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828M22 14v-4"></svg:path><svg:path d="M7 9s.5.9.5 3s-.5 3-.5 3m3.5-6s.5.9.5 3s-.5 3-.5 3M14 9s.5.9.5 3s-.5 3-.5 3"></svg:path></svg:g>`,
})
export class SolarBatteryFullMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryFullMinimalisticLineDuotoneIcon],svg[solar-battery-full-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M22 14v-4M7 9s.5.9.5 3s-.5 3-.5 3m3.5-6s.5.9.5 3s-.5 3-.5 3M14 9s.5.9.5 3s-.5 3-.5 3"></svg:path></svg:g>`,
})
export class SolarBatteryFullMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryFullMinimalisticLinearIcon],svg[solar-battery-full-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M22 14v-4M7 9s.5.9.5 3s-.5 3-.5 3m3.5-6s.5.9.5 3s-.5 3-.5 3M14 9s.5.9.5 3s-.5 3-.5 3"></svg:path></svg:g>`,
})
export class SolarBatteryFullMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryFullMinimalisticOutlineIcon],svg[solar-battery-full-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.656 8.636a.75.75 0 0 0-1.317.719l.005.01l.038.087c.035.087.087.235.142.447c.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L7 15c.656.364.655.365.656.364v-.001l.001-.002l.002-.003l.004-.007l.01-.018l.026-.053q.03-.064.075-.175c.06-.147.132-.356.202-.631c.142-.551.274-1.364.274-2.474s-.132-1.923-.274-2.474a5 5 0 0 0-.202-.631a3 3 0 0 0-.102-.228l-.01-.018l-.003-.007l-.002-.004c0-.001-.001-.002-.657.362zm2.48-.292a.75.75 0 0 1 1.02.292L10.5 9c.656-.364.655-.365.656-.364v.001l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.203.631c.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002s-.001.001-.657-.363l.656.364a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01m4.52.291a.75.75 0 0 0-1.317.719l.005.01l.038.087c.035.087.087.235.142.447c.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L14 15c.656.364.655.365.656.364v-.001l.001-.002l.002-.003l.004-.007l.01-.018l.026-.053q.03-.064.075-.175c.06-.147.132-.356.203-.631c.14-.551.273-1.364.273-2.474s-.132-1.923-.274-2.474a5 5 0 0 0-.202-.631a3 3 0 0 0-.102-.228l-.01-.018l-.003-.007l-.002-.004c0-.001-.001-.002-.657.362z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 3.25h1.612c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.945c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M5.71 4.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289s.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289s-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14H10c-1.907 0-3.261.002-4.29.14" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M22 14.75a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75"></svg:path>`,
})
export class SolarBatteryFullMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryFullOutlineIcon],svg[solar-battery-full-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.636 8.344a.75.75 0 0 1 1.02.292L7 9c.656-.364.655-.365.656-.364v.001l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.202.631c.142.551.274 1.364.274 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002S7.655 15.364 7 15l.656.364a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01m4.52.291a.75.75 0 0 0-1.317.719l.005.01l.038.087c.035.087.087.235.142.447c.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L10.5 15c.656.364.655.365.656.364v-.001l.001-.002l.002-.003l.004-.007l.01-.018l.026-.053q.03-.064.075-.175c.06-.147.132-.356.203-.631c.14-.551.273-1.364.273-2.474s-.132-1.923-.274-2.474a5 5 0 0 0-.202-.631a3 3 0 0 0-.102-.228l-.01-.018l-.003-.007l-.002-.004c0-.001-.001-.002-.657.362zm2.48-.292a.75.75 0 0 1 1.02.292L14 9c.656-.364.655-.365.656-.364v.001l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.203.631c.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002s-.001.001-.657-.363l.656.364a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 3.25h1.612c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.069.513.107 1.091.128 1.74c.362 0 .695.005.972.042c.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v.09c0 .433 0 .83-.043 1.152c-.048.356-.16.731-.47 1.04s-.684.422-1.04.47c-.277.037-.61.042-.972.043c-.021.648-.06 1.226-.128 1.739c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.945c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M5.71 4.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289s.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289s-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14H10c-1.907 0-3.261.002-4.29.14m15.039 8.35v-2.48q.141.006.247.02a.7.7 0 0 1 .177.042l.003.001l.001.003l.005.01c.009.022.024.07.037.167c.028.21.03.504.03.997s-.002.787-.03.997a.7.7 0 0 1-.042.177l-.001.003l-.003.001l-.01.005a.7.7 0 0 1-.167.037q-.105.014-.247.02" clip-rule="evenodd"></svg:path>`,
})
export class SolarBatteryFullOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryHalfBoldIcon],svg[solar-battery-half-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172c.944-.943 1.127-2.348 1.163-4.828H20c.943 0 1.414 0 1.707-.293S22 12.943 22 12s0-1.414-.293-1.707S20.943 10 20 10h-.509c-.036-2.48-.22-3.885-1.163-4.828C17.157 4 15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172m4.484 3.464a.75.75 0 0 0-1.317.719l.005.01l.038.087c.035.087.087.235.142.447c.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L7 15l.656.363l.001-.002l.002-.003l.004-.007l.01-.018l.026-.053q.03-.064.075-.175c.06-.147.132-.356.202-.631c.142-.551.274-1.364.274-2.474s-.132-1.923-.274-2.474a5 5 0 0 0-.202-.631a3 3 0 0 0-.102-.228l-.01-.018l-.003-.007l-.002-.004zM7 9c.65-.361.655-.365.656-.364zm3.136-.656a.75.75 0 0 1 1.02.292L10.5 9l.656-.363l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.203.631c.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002l-.001.001l-.654-.363c.648.36.653.364.654.363a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01" clip-rule="evenodd"></svg:path>`,
})
export class SolarBatteryHalfBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryHalfBoldDuotoneIcon],svg[solar-battery-half-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172S19.5 15.771 19.5 12s0-5.657-1.172-6.828S15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.491 14c.009-.6.009-1.264.009-2c0-.735 0-1.4-.009-2H20c.942 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.942 14 20 14zM6.636 8.345a.75.75 0 0 1 1.02.29L7 9l.656-.363l.001.002l.002.003l.004.007l.01.018l.026.053q.03.064.076.175c.058.147.131.356.202.631c.14.551.273 1.364.273 2.474s-.132 1.923-.273 2.474a5 5 0 0 1-.202.631a3 3 0 0 1-.103.228l-.01.018l-.003.008l-.002.003v.001l-.001.001a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.1s-.118-1.678-.226-2.102a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01m4.52.291a.75.75 0 0 0-1.317.72l.005.01q.01.02.038.086c.035.087.087.235.142.447c.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L10.5 15l.656.363l.001-.001l.002-.003l.004-.008l.01-.018l.026-.053q.03-.064.076-.175a5 5 0 0 0 .202-.631c.14-.551.273-1.364.273-2.474s-.132-1.923-.273-2.474a5 5 0 0 0-.202-.631a3 3 0 0 0-.103-.228l-.01-.018l-.003-.007l-.002-.003z"></svg:path>`,
})
export class SolarBatteryHalfBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryHalfBrokenIcon],svg[solar-battery-half-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M7 9s.5.9.5 3s-.5 3-.5 3m3.5-6s.5.9.5 3s-.5 3-.5 3"></svg:path><svg:path d="M20 10c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14z"></svg:path><svg:path stroke-linecap="round" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"></svg:path></svg:g>`,
})
export class SolarBatteryHalfBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryHalfLineDuotoneIcon],svg[solar-battery-half-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M7 9s.5.9.5 3s-.5 3-.5 3"></svg:path><svg:path stroke-linecap="round" d="M10.5 9s.5.9.5 3s-.5 3-.5 3" opacity=".5"></svg:path><svg:path d="M20 10c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBatteryHalfLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryHalfLinearIcon],svg[solar-battery-half-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M7 9s.5.9.5 3s-.5 3-.5 3m3.5-6s.5.9.5 3s-.5 3-.5 3"></svg:path><svg:path d="M20 10c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14z"></svg:path></svg:g>`,
})
export class SolarBatteryHalfLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryHalfMinimalisticBoldIcon],svg[solar-battery-half-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172S19.5 15.771 19.5 12s0-5.657-1.172-6.828S15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172m4.484 3.464a.75.75 0 0 0-1.317.719l.005.01l.038.087c.035.087.087.235.142.447c.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L7 15l.656.363l.001-.002l.002-.003l.004-.007l.01-.018l.026-.053q.03-.064.075-.175c.06-.147.132-.356.202-.631c.142-.551.274-1.364.274-2.474s-.132-1.923-.274-2.474a5 5 0 0 0-.202-.631a3 3 0 0 0-.102-.228l-.01-.018l-.003-.007l-.002-.004zM7 9c.65-.361.655-.365.656-.364zm3.136-.656a.75.75 0 0 1 1.02.292L10.5 9l.656-.363l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.203.631c.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002l-.001.001l-.654-.363c.648.36.653.364.654.363a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0z"></svg:path>`,
})
export class SolarBatteryHalfMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryHalfMinimalisticBoldDuotoneIcon],svg[solar-battery-half-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172S19.5 15.771 19.5 12s0-5.657-1.172-6.828S15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172" opacity=".5"></svg:path><svg:path fill="currentColor" d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0zM6.636 8.345a.75.75 0 0 1 1.02.29L7 9l.656-.363l.001.002l.002.003l.004.007l.01.018l.026.053q.03.064.076.175c.058.147.131.356.202.631c.14.551.273 1.364.273 2.474s-.132 1.923-.273 2.474a5 5 0 0 1-.202.631a3 3 0 0 1-.103.228l-.01.018l-.003.008l-.002.003v.001l-.001.001a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.1s-.118-1.678-.226-2.102a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01m4.52.291a.75.75 0 0 0-1.317.72l.005.01q.01.02.038.086c.035.087.087.235.142.447c.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L10.5 15l.656.363l.001-.001l.002-.003l.004-.008l.01-.018l.026-.053q.03-.064.076-.175a5 5 0 0 0 .202-.631c.14-.551.273-1.364.273-2.474s-.132-1.923-.273-2.474a5 5 0 0 0-.202-.631a3 3 0 0 0-.103-.228l-.01-.018l-.003-.007l-.002-.003z"></svg:path>`,
})
export class SolarBatteryHalfMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryHalfMinimalisticBrokenIcon],svg[solar-battery-half-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M7 9s.5.9.5 3s-.5 3-.5 3m3.5-6s.5.9.5 3s-.5 3-.5 3M22 14v-4"></svg:path><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"></svg:path></svg:g>`,
})
export class SolarBatteryHalfMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryHalfMinimalisticLineDuotoneIcon],svg[solar-battery-half-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M7 9s.5.9.5 3s-.5 3-.5 3m3.5-6s.5.9.5 3s-.5 3-.5 3M22 14v-4"></svg:path></svg:g>`,
})
export class SolarBatteryHalfMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryHalfMinimalisticLinearIcon],svg[solar-battery-half-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M7 9s.5.9.5 3s-.5 3-.5 3m3.5-6s.5.9.5 3s-.5 3-.5 3M22 14v-4"></svg:path></svg:g>`,
})
export class SolarBatteryHalfMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryHalfMinimalisticOutlineIcon],svg[solar-battery-half-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.656 8.636a.75.75 0 0 0-1.317.719l.005.01l.038.087c.035.087.087.235.142.447c.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L7 15c.656.364.655.365.656.364v-.001l.001-.002l.002-.003l.004-.007l.01-.018l.026-.053q.03-.064.075-.175c.06-.147.132-.356.202-.631c.142-.551.274-1.364.274-2.474s-.132-1.923-.274-2.474a5 5 0 0 0-.202-.631a3 3 0 0 0-.102-.228l-.01-.018l-.003-.007l-.002-.004c0-.001-.001-.002-.657.362zm2.48-.292a.75.75 0 0 1 1.02.292L10.5 9c.656-.364.655-.365.656-.364v.001l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.203.631c.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002s-.001.001-.657-.363l.656.364a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.556 3.25H9.944c-1.838 0-3.294 0-4.433.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433v.112c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h1.612c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433v-.112c0-1.838 0-3.294-.153-4.433c-.158-1.172-.49-2.121-1.238-2.87c-.749-.748-1.698-1.08-2.87-1.238c-1.14-.153-2.595-.153-4.433-.153M3.702 5.702c.423-.423 1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h1.5c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.138 1.028.14 2.382.14 4.289s-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008s-1.003.677-2.009.812c-1.027.138-2.382.14-4.289.14H10c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.138-1.028-.14-2.382-.14-4.289s.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0z"></svg:path>`,
})
export class SolarBatteryHalfMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryHalfOutlineIcon],svg[solar-battery-half-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.656 8.636a.75.75 0 0 0-1.317.719l.005.01l.038.087c.035.087.087.235.142.447c.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L7 15c.656.364.655.365.656.364v-.001l.001-.002l.002-.003l.004-.007l.01-.018l.026-.053q.03-.064.075-.175c.06-.147.132-.356.203-.631c.14-.551.273-1.364.273-2.474s-.132-1.923-.273-2.474a5 5 0 0 0-.203-.631a3 3 0 0 0-.102-.228l-.01-.018l-.003-.007l-.002-.004c0-.001-.001-.002-.657.362zm2.48-.292a.75.75 0 0 1 1.02.292L10.5 9l.656-.364v.001l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.203.631c.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002s-.001.001-.657-.363l.656.364a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.556 3.25H9.944c-1.838 0-3.294 0-4.433.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433v.112c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h1.612c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.069-.513.107-1.091.128-1.74c.362 0 .695-.005.972-.042c.356-.048.731-.16 1.04-.47s.422-.684.47-1.04c.043-.323.043-.72.043-1.152v-.09c0-.433 0-.83-.043-1.152c-.048-.356-.16-.731-.47-1.04s-.684-.422-1.04-.47a8 8 0 0 0-.972-.043a18 18 0 0 0-.128-1.739c-.158-1.172-.49-2.121-1.238-2.87c-.749-.748-1.698-1.08-2.87-1.238c-1.14-.153-2.595-.153-4.433-.153M3.702 5.702c.423-.423 1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h1.5c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.138 1.028.14 2.382.14 4.289s-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008s-1.003.677-2.009.812c-1.027.138-2.382.14-4.289.14H10c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.138-1.028-.14-2.382-.14-4.289s.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008M20.75 13.24v-2.482q.141.007.247.02a.7.7 0 0 1 .177.043l.003.001l.001.003l.005.01c.009.022.024.07.037.167c.028.21.03.504.03.997s-.002.787-.03.997a.7.7 0 0 1-.042.177l-.001.003l-.003.001l-.01.005a.7.7 0 0 1-.167.037q-.105.014-.247.02" clip-rule="evenodd"></svg:path>`,
})
export class SolarBatteryHalfOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryLowBoldIcon],svg[solar-battery-low-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172c.944-.943 1.127-2.348 1.163-4.828H20c.943 0 1.414 0 1.707-.293S22 12.943 22 12s0-1.414-.293-1.707S20.943 10 20 10h-.509c-.036-2.48-.22-3.885-1.163-4.828C17.157 4 15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172m3.464 3.172a.75.75 0 0 1 1.02.292L7 9l.656-.363l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.202.631c.142.551.274 1.364.274 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002l-.001.001a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01" clip-rule="evenodd"></svg:path>`,
})
export class SolarBatteryLowBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryLowBoldDuotoneIcon],svg[solar-battery-low-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172S19.5 15.771 19.5 12s0-5.657-1.172-6.828S15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.491 14c.009-.6.009-1.264.009-2c0-.735 0-1.4-.009-2H20c.942 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.942 14 20 14zM6.636 8.345a.75.75 0 0 1 1.02.29L7 9l.656-.363l.001.002l.002.003l.004.007l.01.018l.026.053q.03.064.076.175c.058.147.131.356.202.631c.14.551.273 1.364.273 2.474s-.132 1.923-.273 2.474a5 5 0 0 1-.202.631a3 3 0 0 1-.103.228l-.01.018l-.003.008l-.002.003v.001l-.001.001a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.1s-.118-1.678-.226-2.102a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01"></svg:path>`,
})
export class SolarBatteryLowBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryLowBrokenIcon],svg[solar-battery-low-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M7 9s.5.9.5 3s-.5 3-.5 3"></svg:path><svg:path d="M20 10c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14z"></svg:path><svg:path stroke-linecap="round" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"></svg:path></svg:g>`,
})
export class SolarBatteryLowBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryLowLineDuotoneIcon],svg[solar-battery-low-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M7 9s.5.9.5 3s-.5 3-.5 3" opacity=".5"></svg:path><svg:path d="M20 10c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBatteryLowLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryLowLinearIcon],svg[solar-battery-low-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M7 9s.5.9.5 3s-.5 3-.5 3"></svg:path><svg:path d="M20 10c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14z"></svg:path></svg:g>`,
})
export class SolarBatteryLowLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryLowMinimalisticBoldIcon],svg[solar-battery-low-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12m4.636-3.656a.75.75 0 0 1 1.02.292L7 9l.656-.363l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.202.631c.142.551.274 1.364.274 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002l-.001.001L7 15l.656.364a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0z"></svg:path>`,
})
export class SolarBatteryLowMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryLowMinimalisticBoldDuotoneIcon],svg[solar-battery-low-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172S19.5 15.771 19.5 12s0-5.657-1.172-6.828S15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172" opacity=".5"></svg:path><svg:path fill="currentColor" d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0zM6.636 8.345a.75.75 0 0 1 1.02.29L7 9l.656-.363l.001.002l.002.003l.004.007l.01.018l.026.053q.03.064.076.175c.058.147.131.356.202.631c.14.551.273 1.364.273 2.474s-.132 1.923-.273 2.474a5 5 0 0 1-.202.631a3 3 0 0 1-.103.228l-.01.018l-.003.008l-.002.003v.001l-.001.001a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.1s-.118-1.678-.226-2.102a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01"></svg:path>`,
})
export class SolarBatteryLowMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryLowMinimalisticBrokenIcon],svg[solar-battery-low-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M7 9s.5.9.5 3s-.5 3-.5 3m15-1v-4"></svg:path><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"></svg:path></svg:g>`,
})
export class SolarBatteryLowMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryLowMinimalisticLineDuotoneIcon],svg[solar-battery-low-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M7 9s.5.9.5 3s-.5 3-.5 3m15-1v-4"></svg:path></svg:g>`,
})
export class SolarBatteryLowMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryLowMinimalisticLinearIcon],svg[solar-battery-low-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M7 9s.5.9.5 3s-.5 3-.5 3m15-1v-4"></svg:path></svg:g>`,
})
export class SolarBatteryLowMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryLowMinimalisticOutlineIcon],svg[solar-battery-low-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.636 8.344a.75.75 0 0 1 1.02.292L7 9c.656-.364.655-.365.656-.364v.001l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.202.631c.142.551.274 1.364.274 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002S7.655 15.364 7 15l.656.364a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 3.25h1.612c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.945c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M5.71 4.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289s.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289s-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14H10c-1.907 0-3.261.002-4.29.14" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0z"></svg:path>`,
})
export class SolarBatteryLowMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryLowOutlineIcon],svg[solar-battery-low-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.636 8.344a.75.75 0 0 1 1.02.292L7 9c.656-.364.655-.365.656-.364v.001l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.203.631c.14.551.273 1.364.273 2.474s-.132 1.923-.273 2.474a5 5 0 0 1-.203.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002S7.655 15.364 7 15l.656.364a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 3.25h1.612c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.069.513.107 1.091.128 1.74c.362 0 .695.005.972.042c.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v.09c0 .433 0 .83-.043 1.152c-.048.356-.16.731-.47 1.04s-.684.422-1.04.47c-.277.037-.61.042-.972.043c-.021.648-.06 1.226-.128 1.739c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.945c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M5.71 4.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289s.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289s-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14H10c-1.907 0-3.261.002-4.29.14m15.039 8.35v-2.48q.141.006.247.02a.7.7 0 0 1 .177.042l.003.001l.001.003l.005.01c.009.022.024.07.037.167c.028.21.03.504.03.997s-.002.787-.03.997a.7.7 0 0 1-.042.177l-.001.003l-.003.001l-.01.005a.7.7 0 0 1-.167.037q-.105.014-.247.02" clip-rule="evenodd"></svg:path>`,
})
export class SolarBatteryLowOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedBoldIcon],svg[solar-bed-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 10.5V7.25H9.5c-.964 0-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.064.483-.066 1.131-.066 2.095zm6.5 0c0-.964-.002-1.612-.067-2.095c-.061-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-1.75v3.25z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13 4h-2C7.229 4 5.343 4 4.172 5.172c-1.023 1.022-1.153 2.588-1.17 5.477v1.618a2 2 0 0 0-.85.968C2 13.602 2 14.068 2 15s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083c.252.104.55.137 1.015.147V20a.75.75 0 0 0 1.5 0v-2h12.5v2a.75.75 0 0 0 1.5 0v-2.005c.464-.01.763-.043 1.015-.147a2 2 0 0 0 1.083-1.083C22 16.398 22 15.932 22 15s0-1.398-.152-1.765a2 2 0 0 0-.85-.968v-1.618c-.017-2.889-.147-4.455-1.17-5.477C18.658 4 16.772 4 13 4m6.25 8v-1.552c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.725-1.65c-.456-.456-1.023-.642-1.65-.726c-.595-.08-1.345-.08-2.243-.08H9.448c-.898 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.08.595-.08 1.345-.08 2.243V12z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedBoldDuotoneIcon],svg[solar-bed-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.002 12.267a2 2 0 0 0-.85.968C2 13.602 2 14.068 2 15s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083c.252.104.55.137 1.015.147V20a.75.75 0 0 0 1.5 0v-2h12.5v2a.75.75 0 0 0 1.5 0v-2.005c.464-.01.763-.043 1.015-.147a2 2 0 0 0 1.083-1.083C22 16.398 22 15.932 22 15s0-1.398-.152-1.765a2 2 0 0 0-.85-.968L19.25 12H4.75z"></svg:path><svg:path fill="currentColor" d="M10.998 4h2c3.77 0 5.656 0 6.828 1.172c1.023 1.022 1.153 2.588 1.17 5.477v1.617L19.25 12H4.75l-1.748.267H3V10.65c.017-2.889.147-4.455 1.17-5.477C5.34 4 7.225 4 10.997 4" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19 10.5c0-1.186-.002-1.983-.081-2.578c-.076-.568-.206-.811-.365-.971c-.158-.16-.399-.293-.96-.37c-.589-.079-1.377-.081-2.55-.081h-2.131v4zm-7.913 0v-4h-2.13c-1.174 0-1.962.002-2.55.082c-.562.076-.803.208-.961.369c-.159.16-.29.403-.365.971C5.001 8.517 5 9.314 5 10.5z"></svg:path>`,
})
export class SolarBedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedBrokenIcon],svg[solar-bed-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 20v-1.5M5 20v-1.5"></svg:path><svg:path d="M2 15c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 12 4.068 12 5 12h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 13.602 22 14.068 22 15s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 18 19.932 18 19 18H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 16.398 2 15.932 2 15Zm19-3c0-3.771 0-5.657-1.172-6.828S16.771 4 13 4h-2C7.229 4 5.343 4 4.172 5.172S3 8.229 3 12"></svg:path><svg:path d="M18.5 12v-1.5c0-1.886 0-2.828-.586-3.414S16.386 6.5 14.5 6.5h-5c-1.886 0-2.828 0-3.414.586S5.5 8.614 5.5 10.5V12M12 7v5"></svg:path></svg:g>`,
})
export class SolarBedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedLineDuotoneIcon],svg[solar-bed-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 20v-1.5M5 20v-1.5" opacity=".4"></svg:path><svg:path d="M2 15c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 12 4.068 12 5 12h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 13.602 22 14.068 22 15s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 18 19.932 18 19 18H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 16.398 2 15.932 2 15Zm19-3c0-3.771 0-5.657-1.172-6.828S16.771 4 13 4h-2C7.229 4 5.343 4 4.172 5.172S3 8.229 3 12"></svg:path><svg:path d="M18.5 12v-1.5c0-1.886 0-2.828-.586-3.414S16.386 6.5 14.5 6.5h-5c-1.886 0-2.828 0-3.414.586S5.5 8.614 5.5 10.5V12M12 7v5" opacity=".4"></svg:path></svg:g>`,
})
export class SolarBedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedLinearIcon],svg[solar-bed-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 20v-1.5M5 20v-1.5"></svg:path><svg:path d="M2 15c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 12 4.068 12 5 12h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 13.602 22 14.068 22 15s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 18 19.932 18 19 18H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 16.398 2 15.932 2 15Zm19-3c0-3.771 0-5.657-1.172-6.828S16.771 4 13 4h-2C7.229 4 5.343 4 4.172 5.172S3 8.229 3 12"></svg:path><svg:path d="M18.5 12v-1.5c0-1.886 0-2.828-.586-3.414S16.386 6.5 14.5 6.5h-5c-1.886 0-2.828 0-3.414.586S5.5 8.614 5.5 10.5V12M12 7v5"></svg:path></svg:g>`,
})
export class SolarBedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedOutlineIcon],svg[solar-bed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.944 3.25h2.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.151 1.126.153 2.56.153 4.368c.344.283.617.65.79 1.069c.121.29.168.59.19.907c.02.304.02.675.02 1.12v.05c0 .445 0 .816-.02 1.12a2.8 2.8 0 0 1-.19.907a2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188a8 8 0 0 1-.395.017V20a.75.75 0 0 1-1.5 0v-1.25H5.75V20a.75.75 0 0 1-1.5 0v-1.255a8 8 0 0 1-.395-.016a2.8 2.8 0 0 1-.907-.188a2.75 2.75 0 0 1-1.489-1.489c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12c.022-.318.07-.617.19-.907a2.75 2.75 0 0 1 .79-1.07c0-1.806.002-3.241.153-4.367c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M3.75 11.279l.105-.008c.251-.017.549-.02.895-.02v-.803c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08h5.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v.802a14 14 0 0 1 1 .029c-.003-1.535-.02-2.675-.14-3.568c-.135-1.006-.389-1.586-.812-2.01c-.423-.422-1.003-.676-2.009-.811c-1.027-.138-2.382-.14-4.289-.14h-2c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S4.025 6.705 3.89 7.71c-.12.893-.137 2.033-.14 3.568m14-.029v-.75c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-1.75v4zm-6.5 0v-4H9.5c-.964 0-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.064.483-.066 1.131-.066 2.095v.75zm-7.293 1.517c-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677c-.032.077-.061.194-.078.435c-.017.247-.017.567-.017 1.043s0 .796.017 1.043c.017.241.046.358.078.435c.127.307.37.55.677.677c.077.032.194.061.435.078c.247.017.567.017 1.043.017h14c.476 0 .796 0 1.043-.017c.241-.017.358-.046.435-.078c.307-.127.55-.37.677-.677c.032-.077.061-.194.078-.435c.017-.247.017-.567.017-1.043s0-.796-.017-1.043c-.017-.241-.046-.358-.078-.435a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078A17 17 0 0 0 19 12.75H5c-.476 0-.796 0-1.043.017" clip-rule="evenodd"></svg:path>`,
})
export class SolarBedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable2BoldIcon],svg[solar-bedside-table-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.974 7.25H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172c.844.843 1.08 2.057 1.146 4.078M2 10q0-.663.002-1.25h19.996Q22 9.337 22 10v2q0 .662-.002 1.25H2.002Q1.999 12.662 2 12zm19.974 4.75H2.026c.066 2.021.302 3.235 1.146 4.078a3.1 3.1 0 0 0 1.078.697V22a.75.75 0 0 0 1.5 0v-2.129C6.82 20 8.194 20 10 20h4c1.806 0 3.18 0 4.25-.129V22a.75.75 0 0 0 1.5 0v-2.475a3.1 3.1 0 0 0 1.078-.697c.844-.843 1.08-2.057 1.146-4.078M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarBedsideTable2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable2BoldDuotoneIcon],svg[solar-bedside-table-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 18.828c-.844-.843-1.08-2.057-1.146-4.078L2 14h19.974v.75c-.066 2.021-.302 3.235-1.145 4.078a3.1 3.1 0 0 1-1.079.697V22a.75.75 0 0 1-1.5 0v-2.129C17.18 20 15.807 20 14 20h-4c-1.806 0-3.18 0-4.25-.129V22a.75.75 0 0 1-1.5 0v-2.475a3.1 3.1 0 0 1-1.078-.697M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.172 3.172c-.844.843-1.08 2.057-1.146 4.078L2 8h20l-.026-.75c-.066-2.021-.302-3.235-1.145-4.078C19.657 2 17.77 2 14 2h-4C6.23 2 4.343 2 3.172 3.172"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 10c0-.442.002-1.608.004-2H22c.002.392 0 1.558 0 2v2c0 .442 0 1.608-.002 2H2.002C2 13.608 2 12.442 2 12z" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarBedsideTable2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable2BrokenIcon],svg[solar-bedside-table-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 22v-1.5M5 22v-1.5"></svg:path><svg:path fill="currentColor" d="M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12v-2c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2M2 14h12m8 0h-4M2 8h20"></svg:path></svg:g>`,
})
export class SolarBedsideTable2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable2LineDuotoneIcon],svg[solar-bedside-table-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 22v-1.5M5 22v-1.5" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 14h20M2 8h20" opacity=".4"></svg:path></svg:g>`,
})
export class SolarBedsideTable2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable2LinearIcon],svg[solar-bedside-table-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 22v-1.5M5 22v-1.5"></svg:path><svg:path fill="currentColor" d="M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 14h20M2 8h20"></svg:path></svg:g>`,
})
export class SolarBedsideTable2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable2OutlineIcon],svg[solar-bedside-table-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 1.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.09.673.127 1.456.142 2.363a.8.8 0 0 1 .004.23q.009.848.007 1.84v2.112q.002.992-.007 1.84a.8.8 0 0 1-.003.23c-.016.907-.053 1.69-.143 2.363c-.158 1.172-.49 2.121-1.238 2.87c-.464.464-1.005.768-1.629.97q.02.082.02.171V22a.75.75 0 0 1-1.5 0v-1.374c-1.102.124-2.482.124-4.194.124H9.944c-1.712 0-3.092 0-4.194-.124V22a.75.75 0 0 1-1.5 0v-1.5q0-.09.02-.172c-.624-.201-1.165-.505-1.629-.97c-.748-.748-1.08-1.697-1.238-2.869c-.09-.673-.127-1.456-.143-2.363a.8.8 0 0 1-.003-.23q-.009-.848-.007-1.84V9.944q-.002-.992.007-1.84a.8.8 0 0 1 .003-.23c.016-.907.053-1.69.143-2.363c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m-7.192 7.5Q2.75 9.332 2.75 10v2q0 .668.002 1.25h18.496q.002-.582.002-1.25v-2q0-.668-.002-1.25zm18.472-1.5H2.776c.02-.587.054-1.094.114-1.54c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.06.445.094.952.114 1.539m0 7.5H2.776c.02.587.054 1.094.114 1.54c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.06-.445.094-.952.114-1.539" clip-rule="evenodd"></svg:path>`,
})
export class SolarBedsideTable2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable3BoldIcon],svg[solar-bedside-table-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v.25H2zm6.25-3.5A.75.75 0 0 1 9 5.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M2 11.75h20V12c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697V22a.75.75 0 0 1-1.5 0v-2.129C17.18 20 15.806 20 14 20h-4c-1.806 0-3.18 0-4.25-.129V22a.75.75 0 0 1-1.5 0v-2.475a3.1 3.1 0 0 1-1.078-.697C2 17.657 2 15.771 2 12zm6.25 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBedsideTable3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable3BoldDuotoneIcon],svg[solar-bedside-table-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 11h20v1c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697V22a.75.75 0 0 1-1.5 0v-2.129C17.18 20 15.806 20 14 20h-4c-1.806 0-3.18 0-4.25-.129V22a.75.75 0 0 1-1.5 0v-2.475a3.1 3.1 0 0 1-1.078-.697C2 17.657 2 15.771 2 12zm6.25 4.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.172 3.172C2 4.343 2 6.229 2 10v1h20v-1c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 5.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarBedsideTable3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable3BrokenIcon],svg[solar-bedside-table-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 22v-1.5M5 22v-1.5M14 2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12v-2c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2M9 15.5h6m-6-9h6M2 11h12m8 0h-4"></svg:path>`,
})
export class SolarBedsideTable3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable3LineDuotoneIcon],svg[solar-bedside-table-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 22v-1.5M5 22v-1.5" opacity=".5"></svg:path><svg:path d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12z"></svg:path><svg:path stroke-linecap="round" d="M9 15.5h6m-6-9h6"></svg:path><svg:path stroke-linecap="round" d="M2 11h20" opacity=".4"></svg:path></svg:g>`,
})
export class SolarBedsideTable3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable3LinearIcon],svg[solar-bedside-table-3-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 22v-1.5M5 22v-1.5"></svg:path><svg:path d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12z"></svg:path><svg:path stroke-linecap="round" d="M9 15.5h6m-6-9h6M2 11h20"></svg:path></svg:g>`,
})
export class SolarBedsideTable3LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable3OutlineIcon],svg[solar-bedside-table-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 1.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.464.464-1.005.768-1.629.97q.02.082.02.171V22a.75.75 0 0 1-1.5 0v-1.374c-1.102.124-2.482.124-4.194.124H9.944c-1.712 0-3.092 0-4.194-.124V22a.75.75 0 0 1-1.5 0v-1.5q0-.09.02-.172c-.624-.201-1.165-.505-1.629-.97c-.748-.748-1.08-1.697-1.238-2.869c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M2.75 11.75V12c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289v-.25zm18.5-1.5H2.75V10c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.138 1.028.14 2.382.14 4.289zm-13-3.75A.75.75 0 0 1 9 5.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m0 9a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBedsideTable3OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable4BoldIcon],svg[solar-bedside-table-4-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 9.75q0-.663.002-1.25h9.248v11.25H10c-1.806 0-3.18 0-4.25-.129v2.129a.75.75 0 0 1-1.5 0v-2.475a3.1 3.1 0 0 1-1.078-.697C2 17.407 2 15.521 2 11.75zM9 11a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 9 11" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.974 7H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 1.75 6.229 1.75 10 1.75h4c3.771 0 5.657 0 6.828 1.172c.844.843 1.08 2.057 1.146 4.078"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 8.5h9.248Q22 9.087 22 9.75v2c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697v2.475a.75.75 0 0 1-1.5 0v-2.129c-1.07.129-2.444.129-4.25.129h-1.25zM15 11a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 15 11" clip-rule="evenodd"></svg:path>`,
})
export class SolarBedsideTable4BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable4BoldDuotoneIcon],svg[solar-bedside-table-4-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9.75c0-.442 0-1.358.002-1.75h9.237v11.75H10c-1.806 0-3.18 0-4.25-.129v2.129a.75.75 0 0 1-1.5 0v-2.475a3.1 3.1 0 0 1-1.078-.697C2 17.407 2 15.521 2 11.75zM22 8c.002.392 0 1.308 0 1.75v2c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697v2.475a.75.75 0 0 1-1.5 0v-2.129c-1.07.129-2.705.129-4.511.129h-1V8z" opacity=".6"></svg:path><svg:path fill="currentColor" d="M15.75 11.75a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zm-6 0a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" d="M3.171 2.922C2.328 3.765 2.091 4.979 2.025 7v1h9.225v11.749h1.5V8h9.224V7c-.066-2.021-.302-3.235-1.146-4.078C19.657 1.75 17.771 1.75 14 1.75h-4c-3.772 0-5.657 0-6.829 1.172"></svg:path>`,
})
export class SolarBedsideTable4BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable4BrokenIcon],svg[solar-bedside-table-4-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 22v-1.5M5 22v-1.5m7-.5V8m3 4v3m-6-3v3m3-13h-2C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10v2c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12v-2c0-3.771 0-5.657-1.172-6.828c-.943-.944-2.348-1.127-4.828-1.163M2 8h3m17 0H9"></svg:path>`,
})
export class SolarBedsideTable4BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable4LineDuotoneIcon],svg[solar-bedside-table-4-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 22v-1.5M5 22v-1.5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M15 12v3m-6-3v3"></svg:path><svg:path d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12z"></svg:path><svg:path stroke-linecap="round" d="M12 20V8M2 8h20" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBedsideTable4LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable4LinearIcon],svg[solar-bedside-table-4-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 22v-1.5M5 22v-1.5m7-.5V8m3 4v3m-6-3v3"></svg:path><svg:path d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12z"></svg:path><svg:path stroke-linecap="round" d="M2 8h20"></svg:path></svg:g>`,
})
export class SolarBedsideTable4LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable4OutlineIcon],svg[solar-bedside-table-4-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 1.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.09.673.127 1.456.142 2.363a.8.8 0 0 1 .004.23q.009.848.007 1.84v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.464.464-1.005.768-1.629.97q.02.082.02.171V22a.75.75 0 0 1-1.5 0v-1.374c-1.102.124-2.482.124-4.194.124H9.944c-1.712 0-3.092 0-4.194-.124V22a.75.75 0 0 1-1.5 0v-1.5q0-.09.02-.172c-.624-.201-1.165-.505-1.629-.97c-.748-.748-1.08-1.697-1.238-2.869c-.153-1.14-.153-2.595-.153-4.433V9.944q-.002-.992.007-1.84a.8.8 0 0 1 .003-.23c.016-.907.053-1.69.143-2.363c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m-7.192 7.5Q2.75 9.332 2.75 10v2c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h1.25V8.75zm.024-1.5c.02-.587.054-1.094.114-1.54c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.06.445.094.952.114 1.539zm9.974 1.5v10.5H14c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289v-2q0-.668-.002-1.25zM9 11.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75m6 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBedsideTable4OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTableBoldIcon],svg[solar-bedside-table-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.974 7.25H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172c.844.843 1.08 2.057 1.146 4.078M13 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M2 10q0-.663.002-1.25h19.996Q22 9.337 22 10v2q0 .662-.002 1.25H2.002Q1.999 12.662 2 12zm10 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m9.974 2.75H2.026c.066 2.021.302 3.235 1.146 4.078a3.1 3.1 0 0 0 1.078.697V22a.75.75 0 0 0 1.5 0v-2.129C6.82 20 8.194 20 10 20h4c1.806 0 3.18 0 4.25-.129V22a.75.75 0 0 0 1.5 0v-2.475a3.1 3.1 0 0 0 1.078-.697c.844-.843 1.08-2.057 1.146-4.078M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarBedsideTableBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTableBoldDuotoneIcon],svg[solar-bedside-table-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 10c0-.442.002-1.608.004-2H22c.002.392 0 1.558 0 2v2c0 .442 0 1.608-.002 2H2.002C2 13.608 2 12.442 2 12z" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.026 7.25c.066-2.021.302-3.235 1.146-4.078C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.829 1.172c.843.843 1.08 2.057 1.145 4.078L22 8H2zM12 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-9.974 8.75c.066 2.021.302 3.235 1.146 4.078a3.1 3.1 0 0 0 1.078.697V22a.75.75 0 0 0 1.5 0v-2.129C6.82 20 8.194 20 10 20h4c1.806 0 3.18 0 4.25-.129V22a.75.75 0 1 0 1.5 0v-2.475a3.1 3.1 0 0 0 1.079-.697c.843-.843 1.08-2.057 1.145-4.078V14H2zM12 18a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarBedsideTableBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTableBrokenIcon],svg[solar-bedside-table-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 22v-1.5M5 22v-1.5"></svg:path><svg:path fill="currentColor" d="M13 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 14h12m8 0h-4M2 8h20m-8-6c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12v-2c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2"></svg:path></svg:g>`,
})
export class SolarBedsideTableBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTableLineDuotoneIcon],svg[solar-bedside-table-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 22v-1.5M5 22v-1.5" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 14h20M2 8h20" opacity=".4"></svg:path></svg:g>`,
})
export class SolarBedsideTableLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTableLinearIcon],svg[solar-bedside-table-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 22v-1.5M5 22v-1.5"></svg:path><svg:path fill="currentColor" d="M13 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 14h20M2 8h20"></svg:path></svg:g>`,
})
export class SolarBedsideTableLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTableOutlineIcon],svg[solar-bedside-table-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 1.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.09.673.127 1.456.142 2.363a.8.8 0 0 1 .004.23q.009.848.007 1.84v2.112q.002.992-.007 1.84a.8.8 0 0 1-.003.23c-.016.907-.053 1.69-.143 2.363c-.158 1.172-.49 2.121-1.238 2.87c-.464.464-1.005.768-1.629.97q.02.082.02.171V22a.75.75 0 0 1-1.5 0v-1.374c-1.102.124-2.482.124-4.194.124H9.944c-1.712 0-3.092 0-4.194-.124V22a.75.75 0 0 1-1.5 0v-1.5q0-.09.02-.172c-.624-.201-1.165-.505-1.629-.97c-.748-.748-1.08-1.697-1.238-2.869c-.09-.673-.127-1.456-.143-2.363a.8.8 0 0 1-.003-.23q-.009-.848-.007-1.84V9.944q-.002-.992.007-1.84a.8.8 0 0 1 .003-.23c.016-.907.053-1.69.143-2.363c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m-7.192 7.5Q2.75 9.332 2.75 10v2q0 .668.002 1.25h18.496q.002-.582.002-1.25v-2q0-.668-.002-1.25zm18.472-1.5H2.776c.02-.587.054-1.094.114-1.54c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.06.445.094.952.114 1.539m0 7.5H2.776c.02.587.054 1.094.114 1.54c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.06-.445.094-.952.114-1.539" clip-rule="evenodd"></svg:path>`,
})
export class SolarBedsideTableOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellBingBoldIcon],svg[solar-bell-bing-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758a27.2 27.2 0 0 1-7.296 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.75 9.704V9c0-3.866-3.023-7-6.75-7S5.25 5.134 5.25 9v.704c0 .845-.24 1.671-.692 2.374L3.45 13.801c-1.011 1.574-.239 3.713 1.52 4.21a25.8 25.8 0 0 0 14.06 0c1.759-.497 2.531-2.636 1.52-4.21l-1.108-1.723a4.4 4.4 0 0 1-.693-2.374M12 5.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBellBingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellBingBoldDuotoneIcon],svg[solar-bell-bing-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 6a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zM7.243 18.545a5.002 5.002 0 0 0 9.513 0c-3.145.59-6.367.59-9.513 0"></svg:path>`,
})
export class SolarBellBingBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellBingBrokenIcon],svg[solar-bell-bing-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 6v4m-4.5 9c.655 1.748 2.422 3 4.5 3q.367 0 .72-.05M16.5 19a4.5 4.5 0 0 1-1.302 1.84M9.107 2.674A6.5 6.5 0 0 1 12 2c3.727 0 6.75 3.136 6.75 7.005v.705a4.4 4.4 0 0 0 .692 2.375l1.108 1.724c1.011 1.575.239 3.716-1.52 4.214a25.8 25.8 0 0 1-14.06 0c-1.759-.498-2.531-2.639-1.52-4.213l1.108-1.725A4.4 4.4 0 0 0 5.25 9.71v-.705c0-1.074.233-2.092.65-3.002"></svg:path>`,
})
export class SolarBellBingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellBingLineDuotoneIcon],svg[solar-bell-bing-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18.75 9.71v-.705C18.75 5.136 15.726 2 12 2S5.25 5.136 5.25 9.005v.705a4.4 4.4 0 0 1-.692 2.375L3.45 13.81c-1.011 1.575-.239 3.716 1.52 4.214a25.8 25.8 0 0 0 14.06 0c1.759-.498 2.531-2.639 1.52-4.213l-1.108-1.725a4.4 4.4 0 0 1-.693-2.375Z"></svg:path><svg:path stroke-linecap="round" d="M7.5 19c.655 1.748 2.422 3 4.5 3s3.845-1.252 4.5-3M12 6v4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBellBingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellBingLinearIcon],svg[solar-bell-bing-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18.75 9.71v-.705C18.75 5.136 15.726 2 12 2S5.25 5.136 5.25 9.005v.705a4.4 4.4 0 0 1-.692 2.375L3.45 13.81c-1.011 1.575-.239 3.716 1.52 4.214a25.8 25.8 0 0 0 14.06 0c1.759-.498 2.531-2.639 1.52-4.213l-1.108-1.725a4.4 4.4 0 0 1-.693-2.375Z"></svg:path><svg:path stroke-linecap="round" d="M7.5 19c.655 1.748 2.422 3 4.5 3s3.845-1.252 4.5-3M12 6v4"></svg:path></svg:g>`,
})
export class SolarBellBingLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellBingOutlineIcon],svg[solar-bell-bing-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 6a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 9a7.75 7.75 0 1 1 15.5 0v.704c0 .697.206 1.378.593 1.958l1.148 1.723c1.334 2 .316 4.718-2.003 5.35q-1.133.309-2.284.523l-.002.005c-.769 2.052-2.824 3.487-5.202 3.487s-4.433-1.435-5.202-3.487l-.002-.005a29 29 0 0 1-2.284-.523c-2.319-.632-3.337-3.35-2.003-5.35l1.148-1.723a3.53 3.53 0 0 0 .593-1.958zm4.373 10.537a28.5 28.5 0 0 0 6.753 0c-.71 1.021-1.947 1.713-3.376 1.713s-2.666-.692-3.377-1.713M12 2.75A6.25 6.25 0 0 0 5.75 9v.704a5.03 5.03 0 0 1-.845 2.79l-1.148 1.723a2.02 2.02 0 0 0 1.15 3.071a26.96 26.96 0 0 0 14.187 0a2.02 2.02 0 0 0 1.15-3.07l-1.15-1.724a5.03 5.03 0 0 1-.844-2.79V9A6.25 6.25 0 0 0 12 2.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBellBingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellBoldIcon],svg[solar-bell-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758a27.2 27.2 0 0 1-7.296 0M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7"></svg:path>`,
})
export class SolarBellBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellBoldDuotoneIcon],svg[solar-bell-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.243 18.545a5.002 5.002 0 0 0 9.513 0c-3.145.59-6.367.59-9.513 0"></svg:path>`,
})
export class SolarBellBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellBrokenIcon],svg[solar-bell-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.107 2.674A6.5 6.5 0 0 1 12 2c3.727 0 6.75 3.136 6.75 7.005v.705a4.4 4.4 0 0 0 .692 2.375l1.108 1.724c1.011 1.575.239 3.716-1.52 4.214a25.8 25.8 0 0 1-14.06 0c-1.759-.498-2.531-2.639-1.52-4.213l1.108-1.725A4.4 4.4 0 0 0 5.25 9.71v-.705c0-1.074.233-2.092.65-3.002M7.5 19c.655 1.748 2.422 3 4.5 3q.367 0 .72-.05M16.5 19a4.5 4.5 0 0 1-1.302 1.84"></svg:path>`,
})
export class SolarBellBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellLineDuotoneIcon],svg[solar-bell-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18.75 9.71v-.705C18.75 5.136 15.726 2 12 2S5.25 5.136 5.25 9.005v.705a4.4 4.4 0 0 1-.692 2.375L3.45 13.81c-1.011 1.575-.239 3.716 1.52 4.214a25.8 25.8 0 0 0 14.06 0c1.759-.498 2.531-2.639 1.52-4.213l-1.108-1.725a4.4 4.4 0 0 1-.693-2.375Z"></svg:path><svg:path stroke-linecap="round" d="M7.5 19c.655 1.748 2.422 3 4.5 3s3.845-1.252 4.5-3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBellLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellLinearIcon],svg[solar-bell-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18.75 9.71v-.705C18.75 5.136 15.726 2 12 2S5.25 5.136 5.25 9.005v.705a4.4 4.4 0 0 1-.692 2.375L3.45 13.81c-1.011 1.575-.239 3.716 1.52 4.214a25.8 25.8 0 0 0 14.06 0c1.759-.498 2.531-2.639 1.52-4.213l-1.108-1.725a4.4 4.4 0 0 1-.693-2.375Z"></svg:path><svg:path stroke-linecap="round" d="M7.5 19c.655 1.748 2.422 3 4.5 3s3.845-1.252 4.5-3"></svg:path></svg:g>`,
})
export class SolarBellLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellOffBoldIcon],svg[solar-bell-off-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758a27.2 27.2 0 0 1-7.296 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7m-8.678.75A.737.737 0 0 1 9.349 9c0-.414.323-.75.723-.75h3.856c.293 0 .556.183.668.463a.77.77 0 0 1-.156.817l-2.622 2.72h2.11c.4 0 .723.336.723.75s-.323.75-.723.75h-3.856a.72.72 0 0 1-.668-.463a.77.77 0 0 1 .156-.817l2.623-2.72z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBellOffBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellOffBoldDuotoneIcon],svg[solar-bell-off-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.243 18.545a5.002 5.002 0 0 0 9.513 0c-3.145.59-6.367.59-9.513 0M9.349 9c0 .414.323.75.723.75h2.11L9.56 12.47a.77.77 0 0 0-.156.817c.112.28.375.463.668.463h3.856c.4 0 .723-.336.723-.75a.737.737 0 0 0-.723-.75h-2.11l2.622-2.72a.77.77 0 0 0 .157-.817a.72.72 0 0 0-.669-.463h-3.856c-.4 0-.723.336-.723.75"></svg:path>`,
})
export class SolarBellOffBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellOffBrokenIcon],svg[solar-bell-off-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M10 9h4l-4 4h4"></svg:path><svg:path d="M7.5 19c.655 1.748 2.422 3 4.5 3q.367 0 .72-.05M16.5 19a4.5 4.5 0 0 1-1.302 1.84M9.107 2.674A6.5 6.5 0 0 1 12 2c3.727 0 6.75 3.136 6.75 7.005v.705a4.4 4.4 0 0 0 .692 2.375l1.108 1.724c1.011 1.575.239 3.716-1.52 4.214a25.8 25.8 0 0 1-14.06 0c-1.759-.498-2.531-2.639-1.52-4.213l1.108-1.725A4.4 4.4 0 0 0 5.25 9.71v-.705c0-1.074.233-2.092.65-3.002"></svg:path></svg:g>`,
})
export class SolarBellOffBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellOffLineDuotoneIcon],svg[solar-bell-off-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18.75 9.71v-.705C18.75 5.136 15.726 2 12 2S5.25 5.136 5.25 9.005v.705a4.4 4.4 0 0 1-.692 2.375L3.45 13.81c-1.011 1.575-.239 3.716 1.52 4.214a25.8 25.8 0 0 0 14.06 0c1.759-.498 2.531-2.639 1.52-4.213l-1.108-1.725a4.4 4.4 0 0 1-.693-2.375Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 9h4l-4 4h4" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M7.5 19c.655 1.748 2.422 3 4.5 3s3.845-1.252 4.5-3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBellOffLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellOffLinearIcon],svg[solar-bell-off-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18.75 9.71v-.705C18.75 5.136 15.726 2 12 2S5.25 5.136 5.25 9.005v.705a4.4 4.4 0 0 1-.692 2.375L3.45 13.81c-1.011 1.575-.239 3.716 1.52 4.214a25.8 25.8 0 0 0 14.06 0c1.759-.498 2.531-2.639 1.52-4.213l-1.108-1.725a4.4 4.4 0 0 1-.693-2.375Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 9h4l-4 4h4"></svg:path><svg:path stroke-linecap="round" d="M7.5 19c.655 1.748 2.422 3 4.5 3s3.845-1.252 4.5-3"></svg:path></svg:g>`,
})
export class SolarBellOffLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellOffOutlineIcon],svg[solar-bell-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9.75a.75.75 0 1 1 0-1.5h4a.75.75 0 0 1 .53 1.28l-2.72 2.72H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.53-1.28l2.72-2.72z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 9a7.75 7.75 0 1 1 15.5 0v.704c0 .697.206 1.378.593 1.958l1.148 1.723c1.334 2 .316 4.718-2.003 5.35q-1.133.309-2.284.523l-.002.005c-.769 2.052-2.824 3.487-5.202 3.487s-4.433-1.435-5.202-3.487l-.002-.005a29 29 0 0 1-2.284-.523c-2.319-.632-3.337-3.35-2.003-5.35l1.148-1.723a3.53 3.53 0 0 0 .593-1.958zm4.373 10.537c.711 1.021 1.948 1.713 3.377 1.713s2.665-.692 3.376-1.713a28.5 28.5 0 0 1-6.753 0M12 2.75A6.25 6.25 0 0 0 5.75 9v.704a5.03 5.03 0 0 1-.845 2.79l-1.148 1.723a2.02 2.02 0 0 0 1.15 3.071a26.96 26.96 0 0 0 14.187 0a2.02 2.02 0 0 0 1.15-3.07l-1.15-1.724a5.03 5.03 0 0 1-.844-2.79V9A6.25 6.25 0 0 0 12 2.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBellOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellOutlineIcon],svg[solar-bell-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25A7.75 7.75 0 0 0 4.25 9v.704a3.53 3.53 0 0 1-.593 1.958L2.51 13.385c-1.334 2-.316 4.718 2.003 5.35q1.133.309 2.284.523l.002.005C7.567 21.315 9.622 22.75 12 22.75s4.433-1.435 5.202-3.487l.002-.005a29 29 0 0 0 2.284-.523c2.319-.632 3.337-3.35 2.003-5.35l-1.148-1.723a3.53 3.53 0 0 1-.593-1.958V9A7.75 7.75 0 0 0 12 1.25m3.376 18.287a28.5 28.5 0 0 1-6.753 0c.711 1.021 1.948 1.713 3.377 1.713s2.665-.692 3.376-1.713M5.75 9a6.25 6.25 0 1 1 12.5 0v.704c0 .993.294 1.964.845 2.79l1.148 1.723a2.02 2.02 0 0 1-1.15 3.071a26.96 26.96 0 0 1-14.187 0a2.02 2.02 0 0 1-1.15-3.07l1.15-1.724a5.03 5.03 0 0 0 .844-2.79z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBellOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBenzeneRingBoldIcon],svg[solar-benzene-ring-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.98 4.88C10.965 4.292 11.458 4 12 4s1.035.293 2.02.88l2.96 1.758c.705.42 1.158.689 1.458.985l3.126-2.233a.75.75 0 1 1 .872 1.22l-3.454 2.467c.018.314.018.692.018 1.164v3.518c0 1.172 0 1.758-.27 2.241c-.271.483-.765.776-1.75 1.362l-2.96 1.759c-.985.586-1.479.879-2.02.879s-1.034-.293-2.02-.88l-2.96-1.758c-.635-.378-1.066-.634-1.364-.898l-3.24 2.16a.75.75 0 1 1-.832-1.248l3.445-2.297C5 14.737 5 14.314 5 13.76v-3.52c0-.554 0-.977.029-1.32L1.584 6.623a.75.75 0 0 1 .832-1.248l3.24 2.16c.298-.264.729-.52 1.365-.898zm6.664 9.236a.75.75 0 0 1-.26 1.028l-4 2.384a.75.75 0 1 1-.768-1.288l4-2.384a.75.75 0 0 1 1.028.26" clip-rule="evenodd"></svg:path>`,
})
export class SolarBenzeneRingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBenzeneRingBoldDuotoneIcon],svg[solar-benzene-ring-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 4c-.541 0-1.034.293-2.02.88L7.02 6.637c-.985.586-1.479.88-1.75 1.362S5 9.069 5 10.241v3.518c0 1.172 0 1.758.27 2.241c.271.483.765.776 1.75 1.362l2.96 1.759c.986.586 1.479.879 2.02.879s1.034-.293 2.02-.88l2.96-1.758c.985-.586 1.479-.88 1.75-1.362s.27-1.069.27-2.241V10.24c0-1.17 0-1.757-.27-2.24c-.271-.483-.765-.776-1.75-1.362l-2.96-1.759C13.036 4.293 12.542 4 12 4m4.384 11.144a.75.75 0 0 0-.768-1.288l-4 2.384a.75.75 0 0 0 .768 1.288z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18.971 8.92c-.032-.382-.099-.665-.242-.92a1.8 1.8 0 0 0-.384-.464l3.24-2.16a.75.75 0 1 1 .831 1.248zM5.029 15.08c.032.382.099.665.242.92c.096.172.22.32.385.464l-3.24 2.16a.75.75 0 1 1-.832-1.248zm.627-7.544A1.8 1.8 0 0 0 5.27 8c-.143.255-.21.538-.242.92L1.584 6.624a.75.75 0 0 1 .832-1.248z" opacity=".5"></svg:path>`,
})
export class SolarBenzeneRingBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBenzeneRingBrokenIcon],svg[solar-benzene-ring-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M7.02 6.638c-.985.586-1.479.88-1.75 1.362S5 9.069 5 10.241v3.518c0 1.172 0 1.758.27 2.241c.271.483.765.776 1.75 1.362l2.96 1.759c.986.586 1.479.879 2.02.879s1.034-.293 2.02-.88l2.96-1.758c.985-.586 1.479-.88 1.75-1.362c.25-.448.269-.986.27-2M9.98 4.88C10.965 4.292 11.458 4 12 4s1.034.293 2.02.88l2.96 1.758c.985.586 1.479.88 1.75 1.362c.25.448.269.986.27 2"></svg:path><svg:path stroke-linejoin="round" d="M5 8L2 6m17 2l3-2M5 16l-3 2"></svg:path><svg:path d="m12 16.884l4-2.384"></svg:path></svg:g>`,
})
export class SolarBenzeneRingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBenzeneRingLineDuotoneIcon],svg[solar-benzene-ring-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9.98 4.88C10.965 4.292 11.458 4 12 4s1.034.293 2.02.88l2.96 1.758c.985.586 1.479.88 1.75 1.362s.27 1.069.27 2.241v3.518c0 1.172 0 1.758-.27 2.241c-.271.483-.765.776-1.75 1.362l-2.96 1.759c-.985.586-1.479.879-2.02.879s-1.034-.293-2.02-.88l-2.96-1.758c-.985-.586-1.479-.88-1.75-1.362S5 14.931 5 13.759V10.24C5 9.07 5 8.483 5.27 8c.271-.483.765-.776 1.75-1.362z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 8L2 6m17 2l3-2M5 16l-3 2" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m12 16.884l4-2.384" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBenzeneRingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBenzeneRingLinearIcon],svg[solar-benzene-ring-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9.98 4.88C10.965 4.292 11.458 4 12 4s1.034.293 2.02.88l2.96 1.758c.985.586 1.479.88 1.75 1.362s.27 1.069.27 2.241v3.518c0 1.172 0 1.758-.27 2.241c-.271.483-.765.776-1.75 1.362l-2.96 1.759c-.985.586-1.479.879-2.02.879s-1.034-.293-2.02-.88l-2.96-1.758c-.985-.586-1.479-.88-1.75-1.362S5 14.931 5 13.759V10.24C5 9.07 5 8.483 5.27 8c.271-.483.765-.776 1.75-1.362z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 8L2 6m17 2l3-2M5 16l-3 2"></svg:path><svg:path stroke-linecap="round" d="m12 16.884l4-2.384"></svg:path></svg:g>`,
})
export class SolarBenzeneRingLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBenzeneRingOutlineIcon],svg[solar-benzene-ring-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.384 15.144a.75.75 0 1 0-.768-1.288l-4 2.384a.75.75 0 0 0 .768 1.288z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.84 3.54c.37-.173.741-.29 1.16-.29s.79.117 1.16.29c.35.163.746.399 1.213.676l3.02 1.795c.467.278.864.514 1.175.743q.226.165.417.355l2.6-1.733a.75.75 0 1 1 .831 1.248l-2.748 1.832q.03.164.045.335c.037.389.037.86.037 1.416v3.586c0 .557 0 1.027-.037 1.416c-.04.413-.125.793-.33 1.158c-.204.366-.484.634-.815.879c-.31.229-.708.465-1.175.743l-3.02 1.795c-.466.277-.864.513-1.212.676c-.371.173-.742.29-1.16.29c-.42 0-.79-.117-1.162-.29c-.348-.163-.745-.399-1.212-.676l-3.02-1.795c-.467-.278-.864-.514-1.175-.743q-.226-.165-.417-.355l-2.599 1.733a.75.75 0 1 1-.832-1.248l2.748-1.832q-.03-.164-.045-.335c-.037-.389-.037-.86-.037-1.416v-3.586c0-.557 0-1.027.037-1.416q.016-.171.045-.335L1.584 6.624a.75.75 0 0 1 .832-1.248l2.6 1.733q.19-.19.416-.355c.31-.229.708-.465 1.175-.743l3.02-1.795c.467-.277.864-.513 1.212-.676m.633 1.36c-.272.127-.605.323-1.11.624L7.404 7.283c-.506.3-.838.499-1.081.678c-.23.17-.332.289-.398.406s-.116.273-.144.567c-.03.31-.03.707-.03 1.307v3.518c0 .6 0 .998.03 1.307c.028.294.078.449.144.567s.168.236.398.406c.243.18.575.378 1.081.678l2.959 1.759c.505.3.838.497 1.11.625c.258.12.405.149.527.149c.123 0 .27-.03.527-.15c.272-.127.605-.323 1.11-.624l2.96-1.759c.505-.3.837-.499 1.08-.678c.23-.17.332-.289.398-.406c.067-.118.117-.273.145-.567c.03-.31.03-.707.03-1.307V10.24c0-.6 0-.998-.03-1.307c-.028-.294-.078-.449-.145-.567s-.168-.236-.398-.406c-.243-.18-.575-.378-1.08-.678l-2.96-1.759c-.505-.3-.838-.497-1.11-.624c-.258-.12-.404-.15-.527-.15c-.122 0-.27.03-.527.15" clip-rule="evenodd"></svg:path>`,
})
export class SolarBenzeneRingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBicyclingBoldIcon],svg[solar-bicycling-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m12.161 7.115l.613.609c.909.903 1.225 1.2 1.605 1.356s.814.17 2.095.17H18.5a.75.75 0 0 1 0 1.5h-2.168c-1.083 0-1.836 0-2.525-.283c-.689-.284-1.222-.815-1.99-1.58l-.1-.1l-.578-.573c-.409-.406-.66-.653-.86-.803a.8.8 0 0 0-.185-.11l-.01.006a.8.8 0 0 0-.152.135c-.17.185-.373.472-.701.946l-1.227 1.767c-.334.482-.537.777-.652 1.007a.8.8 0 0 0-.076.204l.007.008a.8.8 0 0 0 .165.125c.218.135.546.28 1.083.515l1.516.66c.648.284 1.194.522 1.614.768c.447.262.825.572 1.078 1.035c.253.464.311.949.29 1.466c-.019.487-.113 1.076-.224 1.774l-.064.401a.75.75 0 1 1-1.482-.236l.058-.359c.12-.752.198-1.252.214-1.64c.014-.367-.033-.549-.108-.686c-.075-.136-.202-.275-.52-.46c-.334-.197-.797-.4-1.496-.705l-1.476-.644l-.046-.02c-.476-.208-.905-.395-1.226-.593c-.348-.215-.69-.515-.827-1c-.138-.486-.004-.92.18-1.286c.168-.336.435-.72.731-1.148l.029-.041l1.227-1.768l.028-.04c.29-.42.553-.798.806-1.07c.275-.296.63-.57 1.125-.615s.893.16 1.217.402c.297.222.624.546.986.906M6 15.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M2.25 18a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0M18 15.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M14.25 18a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarBicyclingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBicyclingBoldDuotoneIcon],svg[solar-bicycling-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m12.161 7.115l.613.609c.91.903 1.226 1.2 1.606 1.356s.813.17 2.095.17H18.5a.75.75 0 0 1 0 1.5h-2.167c-1.083 0-1.836 0-2.525-.283c-.69-.284-1.223-.815-1.99-1.58l-.102-.1l-.577-.573c-.409-.406-.66-.653-.86-.803a.8.8 0 0 0-.185-.11l-.01.006a.8.8 0 0 0-.152.135c-.17.185-.372.472-.7.946l-1.228 1.767c-.334.482-.537.777-.652 1.007a.8.8 0 0 0-.076.204l.007.008a.8.8 0 0 0 .165.125c.218.135.546.28 1.083.515l1.516.66c.648.284 1.194.522 1.615.768c.446.262.824.572 1.077 1.035c.254.464.311.949.29 1.466c-.019.487-.113 1.076-.224 1.774l-.064.401a.75.75 0 1 1-1.481-.236l.057-.359c.12-.752.198-1.252.214-1.64c.015-.367-.033-.549-.108-.686c-.075-.136-.202-.275-.52-.46c-.334-.197-.797-.4-1.496-.705l-1.475-.644l-.047-.02c-.476-.208-.905-.395-1.226-.593c-.348-.215-.69-.515-.827-1c-.137-.486-.004-.92.18-1.286c.168-.336.435-.72.732-1.148l.028-.041L8 7.532l.028-.04c.291-.42.554-.798.806-1.07c.275-.296.63-.57 1.125-.615s.893.16 1.217.402c.298.222.624.546.986.906" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18 14.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m-12-1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarBicyclingBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBicyclingBrokenIcon],svg[solar-bicycling-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="15" cy="4" r="2"></svg:circle><svg:circle cx="6" cy="18" r="3"></svg:circle><svg:circle cx="18" cy="18" r="3"></svg:circle><svg:path stroke-linecap="round" d="M18.5 10h-2.026c-1.22 0-1.831 0-2.38-.227c-.55-.227-.983-.657-1.85-1.518l-.576-.574c-.785-.78-1.178-1.17-1.642-1.127c-.465.042-.78.497-1.411 1.406M12 18l.057-.359c.235-1.47.352-2.204.024-2.804s-1.01-.898-2.374-1.493L8.23 12.7c-1.032-.45-1.549-.675-1.678-1.13c-.05-.18-.031-.36.05-.57"></svg:path></svg:g>`,
})
export class SolarBicyclingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBicyclingLineDuotoneIcon],svg[solar-bicycling-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="15" cy="4" r="2"></svg:circle><svg:circle cx="6" cy="18" r="3" opacity=".4"></svg:circle><svg:circle cx="18" cy="18" r="3" opacity=".4"></svg:circle><svg:path stroke-linecap="round" d="M18.5 10h-2.026c-1.22 0-1.831 0-2.38-.227c-.55-.227-.983-.657-1.85-1.518l-.576-.574c-.785-.78-1.178-1.17-1.642-1.127c-.465.042-.78.497-1.411 1.406L7.388 9.727c-.642.925-.963 1.388-.835 1.843c.13.455.646.68 1.678 1.13l1.476.644c1.364.595 2.046.893 2.374 1.493s.21 1.335-.024 2.804L12 18"></svg:path></svg:g>`,
})
export class SolarBicyclingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBicyclingLinearIcon],svg[solar-bicycling-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="15" cy="4" r="2"></svg:circle><svg:circle cx="6" cy="18" r="3"></svg:circle><svg:circle cx="18" cy="18" r="3"></svg:circle><svg:path stroke-linecap="round" d="M18.5 10h-2.026c-1.22 0-1.831 0-2.38-.227c-.55-.227-.983-.657-1.85-1.518l-.576-.574c-.785-.78-1.178-1.17-1.642-1.127c-.465.042-.78.497-1.411 1.406L7.388 9.727c-.642.925-.963 1.388-.835 1.843c.13.455.646.68 1.678 1.13l1.476.644c1.364.595 2.046.893 2.374 1.493s.21 1.335-.024 2.804L12 18"></svg:path></svg:g>`,
})
export class SolarBicyclingLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBicyclingOutlineIcon],svg[solar-bicycling-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 2.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M12.25 4a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0m-.089 3.115l.035.035l.578.574c.909.903 1.225 1.2 1.605 1.356s.814.17 2.095.17H18.5a.75.75 0 0 1 0 1.5h-2.168c-1.083 0-1.836 0-2.525-.283c-.689-.284-1.222-.815-1.99-1.58l-.1-.1l-.578-.573c-.409-.406-.66-.653-.86-.803a.8.8 0 0 0-.185-.11l-.01.006a.8.8 0 0 0-.152.135c-.17.185-.373.472-.701.946l-1.227 1.767c-.334.482-.537.777-.652 1.007a.8.8 0 0 0-.076.204l.007.008a.8.8 0 0 0 .165.125c.218.135.546.28 1.083.515l1.516.66c.648.284 1.194.522 1.614.768c.447.262.825.572 1.078 1.035c.253.464.311.949.29 1.466c-.019.487-.113 1.076-.224 1.774l-.064.401a.75.75 0 1 1-1.482-.236l.058-.359c.12-.752.198-1.252.214-1.64c.014-.367-.033-.549-.108-.686c-.075-.136-.202-.275-.52-.46c-.334-.197-.797-.4-1.496-.705l-1.522-.664c-.476-.208-.905-.395-1.226-.593c-.348-.215-.69-.515-.827-1c-.138-.486-.004-.92.18-1.286c.168-.336.435-.72.731-1.148l.029-.041l1.227-1.768l.028-.04c.29-.42.553-.798.806-1.07c.275-.296.63-.57 1.125-.615s.893.16 1.217.402c.297.222.624.546.986.906M6 15.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M2.25 18a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0M18 15.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M14.25 18a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarBicyclingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBicyclingRoundBoldIcon],svg[solar-bicycling-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.919 8.506a1.888 1.888 0 1 0-1.93 3.207l3.09 1.349a2.64 2.64 0 0 1 1.37 3.46l-.76 1.773a.75.75 0 0 1-1.378-.59l.76-1.775a1.14 1.14 0 0 0-.592-1.494l-3.09-1.348a3.388 3.388 0 1 1 3.464-5.756l2.159 1.719a.9.9 0 0 0 .57.199H18.5a.75.75 0 0 1 0 1.5h-3.918a2.42 2.42 0 0 1-1.505-.526zM6 15.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M2.25 18a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0M18 15.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M14.25 18a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarBicyclingRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBicyclingRoundBoldDuotoneIcon],svg[solar-bicycling-round-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.919 8.506a1.888 1.888 0 1 0-1.93 3.207l3.09 1.349a2.64 2.64 0 0 1 1.37 3.46l-.76 1.773a.75.75 0 0 1-1.379-.59l.76-1.775a1.14 1.14 0 0 0-.591-1.494l-3.09-1.348a3.388 3.388 0 1 1 3.464-5.756l2.158 1.719a.92.92 0 0 0 .571.199H18.5a.75.75 0 0 1 0 1.5h-3.918a2.4 2.4 0 0 1-1.505-.526z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18 14.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m-12-1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarBicyclingRoundBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBicyclingRoundBrokenIcon],svg[solar-bicycling-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="14" cy="4" r="2"></svg:circle><svg:circle cx="6" cy="18" r="3"></svg:circle><svg:circle cx="18" cy="18" r="3"></svg:circle><svg:path stroke-linecap="round" d="M18.5 10h-3.918c-.377 0-.743-.128-1.038-.363L11.386 7.92a2.638 2.638 0 1 0-2.698 4.48M12 18l.76-1.774a1.89 1.89 0 0 0-.981-2.477"></svg:path></svg:g>`,
})
export class SolarBicyclingRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBicyclingRoundLineDuotoneIcon],svg[solar-bicycling-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="14" cy="4" r="2"></svg:circle><svg:circle cx="6" cy="18" r="3" opacity=".5"></svg:circle><svg:circle cx="18" cy="18" r="3" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="M18.5 10h-3.918c-.377 0-.743-.128-1.038-.363L11.386 7.92a2.638 2.638 0 1 0-2.698 4.48l3.091 1.349a1.89 1.89 0 0 1 .981 2.477L12 18"></svg:path></svg:g>`,
})
export class SolarBicyclingRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBicyclingRoundLinearIcon],svg[solar-bicycling-round-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="14" cy="4" r="2"></svg:circle><svg:circle cx="6" cy="18" r="3"></svg:circle><svg:circle cx="18" cy="18" r="3"></svg:circle><svg:path stroke-linecap="round" d="M18.5 10h-3.918c-.377 0-.742-.128-1.037-.363L11.386 7.92A2.638 2.638 0 1 0 8.69 12.4l3.09 1.349a1.89 1.89 0 0 1 .982 2.477L12 18"></svg:path></svg:g>`,
})
export class SolarBicyclingRoundLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBicyclingRoundOutlineIcon],svg[solar-bicycling-round-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 2.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M11.25 4a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0m-.331 4.506a1.888 1.888 0 1 0-1.93 3.207l3.09 1.349a2.64 2.64 0 0 1 1.37 3.46l-.76 1.773a.75.75 0 0 1-1.378-.59l.76-1.775a1.14 1.14 0 0 0-.592-1.494l-3.09-1.348a3.388 3.388 0 1 1 3.464-5.756l2.159 1.719a.9.9 0 0 0 .57.199H18.5a.75.75 0 0 1 0 1.5h-3.918a2.42 2.42 0 0 1-1.505-.526zM6 15.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M2.25 18a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0M18 15.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M14.25 18a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarBicyclingRoundOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillBoldIcon],svg[solar-bill-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.25a.75.75 0 0 0 0 1.5h2v9.527c0 1.34 0 2.01.268 2.601s.772 1.032 1.781 1.915l2 1.75c1.883 1.647 2.824 2.47 3.951 2.47s2.069-.823 3.951-2.47l2-1.75c1.008-.883 1.513-1.324 1.78-1.915c.269-.59.269-1.26.269-2.6V2.75h2a.75.75 0 0 0 0-1.5zm6.5 11a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zM7.75 8a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7A.75.75 0 0 1 7.75 8" clip-rule="evenodd"></svg:path>`,
})
export class SolarBillBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillBoldDuotoneIcon],svg[solar-bill-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 3A.75.75 0 0 1 2 2.25h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 3" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4 3.75v9.527c0 1.34 0 2.01.268 2.601s.772 1.032 1.781 1.915l2 1.75c1.883 1.647 2.824 2.47 3.951 2.47s2.069-.823 3.951-2.47l2-1.75c1.008-.883 1.513-1.324 1.78-1.915c.269-.59.269-1.26.269-2.6V3.75z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.75 14a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0-5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7A.75.75 0 0 1 7.75 9" clip-rule="evenodd"></svg:path>`,
})
export class SolarBillBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillBrokenIcon],svg[solar-bill-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 2h20M8.049 18.53C9.932 20.178 10.873 21 12 21s2.069-.823 3.951-2.47l2-1.748c1.008-.882 1.513-1.322 1.78-1.913c.269-.59.269-1.26.269-2.599V9.702M20 6V2H4v10.27c0 1.34 0 2.009.268 2.6c.175.385.451.707.903 1.13M8.5 13h7m-7-5h7"></svg:path>`,
})
export class SolarBillBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillCheckBoldIcon],svg[solar-bill-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.245 2h9.51c1.159 0 1.738 0 2.206.163a3.05 3.05 0 0 1 1.881 1.936C21 4.581 21 5.177 21 6.37v14.004c0 .858-.985 1.314-1.608.744a.946.946 0 0 0-1.284 0l-.483.442a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0l-.483-.442a.946.946 0 0 0-1.284 0c-.623.57-1.608.114-1.608-.744V6.37c0-1.193 0-1.79.158-2.27c.3-.913.995-1.629 1.881-1.937C5.507 2 6.086 2 7.245 2m7.815 6.5a.75.75 0 0 0-1.12-1l-3.011 3.374l-.87-.974a.75.75 0 0 0-1.118 1l1.428 1.6a.75.75 0 0 0 1.119 0zM7.5 14.75a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBillCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillCheckBoldDuotoneIcon],svg[solar-bill-check-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.245 2h9.51c1.159 0 1.738 0 2.206.163a3.05 3.05 0 0 1 1.881 1.936C21 4.581 21 5.177 21 6.37v14.004c0 .858-.985 1.314-1.608.744a.946.946 0 0 0-1.284 0l-.483.442a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0l-.483-.442a.946.946 0 0 0-1.284 0c-.623.57-1.608.114-1.608-.744V6.37c0-1.193 0-1.79.158-2.27c.3-.913.995-1.629 1.881-1.937C5.507 2 6.086 2 7.245 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15.06 8.5a.75.75 0 0 0-1.12-1l-3.011 3.374l-.87-.974a.75.75 0 0 0-1.118 1l1.428 1.6a.75.75 0 0 0 1.119 0zM7.5 14.75a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarBillCheckBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillCheckBrokenIcon],svg[solar-bill-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21 7v-.63c0-1.193 0-1.79-.158-2.27a3.05 3.05 0 0 0-1.881-1.937C18.493 2 17.914 2 16.755 2h-9.51c-1.159 0-1.738 0-2.206.163a3.05 3.05 0 0 0-1.881 1.936C3 4.581 3 5.177 3 6.37V15m18-4v9.374c0 .858-.985 1.314-1.608.744a.946.946 0 0 0-1.284 0l-.483.442a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0l-.483-.442a.946.946 0 0 0-1.284 0c-.623.57-1.608.114-1.608-.744V19"></svg:path><svg:path stroke-linejoin="round" d="m9.5 10.4l1.429 1.6L14.5 8"></svg:path><svg:path d="M7.5 15.5H9m7.5 0H12"></svg:path></svg:g>`,
})
export class SolarBillCheckBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillCheckLineDuotoneIcon],svg[solar-bill-check-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16.755 2h-9.51c-1.159 0-1.738 0-2.206.163a3.05 3.05 0 0 0-1.881 1.936C3 4.581 3 5.177 3 6.37v14.004c0 .858.985 1.314 1.608.744a.946.946 0 0 1 1.284 0l.483.442a1.657 1.657 0 0 0 2.25 0a1.657 1.657 0 0 1 2.25 0a1.657 1.657 0 0 0 2.25 0a1.657 1.657 0 0 1 2.25 0a1.657 1.657 0 0 0 2.25 0l.483-.442a.946.946 0 0 1 1.284 0c.623.57 1.608.114 1.608-.744V6.37c0-1.193 0-1.79-.158-2.27a3.05 3.05 0 0 0-1.881-1.937C18.493 2 17.914 2 16.755 2Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9.5 10.4l1.429 1.6L14.5 8"></svg:path><svg:path stroke-linecap="round" d="M7.5 15.5h9"></svg:path></svg:g>`,
})
export class SolarBillCheckLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillCheckLinearIcon],svg[solar-bill-check-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16.755 2h-9.51c-1.159 0-1.738 0-2.206.163a3.05 3.05 0 0 0-1.881 1.936C3 4.581 3 5.177 3 6.37v14.004c0 .858.985 1.314 1.608.744a.946.946 0 0 1 1.284 0l.483.442a1.657 1.657 0 0 0 2.25 0a1.657 1.657 0 0 1 2.25 0a1.657 1.657 0 0 0 2.25 0a1.657 1.657 0 0 1 2.25 0a1.657 1.657 0 0 0 2.25 0l.483-.442a.946.946 0 0 1 1.284 0c.623.57 1.608.114 1.608-.744V6.37c0-1.193 0-1.79-.158-2.27a3.05 3.05 0 0 0-1.881-1.937C18.493 2 17.914 2 16.755 2Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9.5 10.4l1.429 1.6L14.5 8"></svg:path><svg:path stroke-linecap="round" d="M7.5 15.5h9"></svg:path></svg:g>`,
})
export class SolarBillCheckLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillCheckOutlineIcon],svg[solar-bill-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.099 1.25H16.9c1.017 0 1.717 0 2.306.204a3.8 3.8 0 0 1 2.348 2.412l-.713.234l.713-.234c.196.597.195 1.307.195 2.36v14.148c0 1.466-1.727 2.338-2.864 1.297a.196.196 0 0 0-.271 0l-.484.442c-.928.85-2.334.85-3.262 0a.907.907 0 0 0-1.238 0c-.928.85-2.334.85-3.262 0a.907.907 0 0 0-1.238 0c-.928.85-2.334.85-3.262 0l-.483-.442a.196.196 0 0 0-.272 0c-1.137 1.04-2.864.169-2.864-1.297V6.227c0-1.054 0-1.764.195-2.361a3.8 3.8 0 0 1 2.348-2.412c.59-.205 1.289-.204 2.306-.204m.146 1.5c-1.221 0-1.642.01-1.96.121A2.3 2.3 0 0 0 3.87 4.334c-.111.338-.12.784-.12 2.036v14.004c0 .12.059.192.134.227a.2.2 0 0 0 .11.018a.2.2 0 0 0 .107-.055a1.695 1.695 0 0 1 2.296 0l.483.442a.907.907 0 0 0 1.238 0a2.407 2.407 0 0 1 3.262 0a.907.907 0 0 0 1.238 0a2.407 2.407 0 0 1 3.262 0a.907.907 0 0 0 1.238 0l.483-.442a1.695 1.695 0 0 1 2.296 0c.043.04.08.052.108.055a.2.2 0 0 0 .109-.018c.075-.035.135-.108.135-.227V6.37c0-1.252-.01-1.698-.12-2.037a2.3 2.3 0 0 0-1.416-1.462c-.317-.11-.738-.12-1.959-.12zM15 7.44a.75.75 0 0 1 .06 1.06l-3.572 4a.75.75 0 0 1-1.119 0l-1.428-1.6a.75.75 0 0 1 1.118-1l.87.974l3.012-3.373A.75.75 0 0 1 15 7.44M6.75 15.5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBillCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillCrossBoldIcon],svg[solar-bill-cross-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.333 2h11.334c.31 0 .464 0 .595.012c1.45.133 2.6 1.34 2.727 2.861c.011.137.011.3.011.624V20.26c0 .872-1.059 1.243-1.558.544a.84.84 0 0 0-1.384 0l-.433.606a1.367 1.367 0 0 1-2.25 0a1.367 1.367 0 0 0-2.25 0a1.367 1.367 0 0 1-2.25 0a1.367 1.367 0 0 0-2.25 0a1.367 1.367 0 0 1-2.25 0l-.433-.605a.84.84 0 0 0-1.384 0c-.5.698-1.558.327-1.558-.545V5.497c0-.324 0-.487.011-.624c.127-1.521 1.277-2.728 2.728-2.861C5.869 2 6.024 2 6.333 2m4.197 5.47a.75.75 0 1 0-1.06 1.06L10.94 10l-1.47 1.47a.75.75 0 1 0 1.06 1.06L12 11.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L13.06 10l1.47-1.47a.75.75 0 0 0-1.06-1.06L12 8.94zM7.5 14.75a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBillCrossBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillCrossBoldDuotoneIcon],svg[solar-bill-cross-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.333 2h11.334c.31 0 .464 0 .595.012c1.45.133 2.6 1.34 2.727 2.861c.011.137.011.3.011.624V20.26c0 .872-1.059 1.243-1.558.544a.84.84 0 0 0-1.384 0l-.433.606a1.367 1.367 0 0 1-2.25 0a1.367 1.367 0 0 0-2.25 0a1.367 1.367 0 0 1-2.25 0a1.367 1.367 0 0 0-2.25 0a1.367 1.367 0 0 1-2.25 0l-.433-.605a.84.84 0 0 0-1.384 0c-.5.698-1.558.327-1.558-.545V5.497c0-.324 0-.487.011-.624c.127-1.521 1.277-2.728 2.728-2.861C5.869 2 6.024 2 6.333 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.53 7.47a.75.75 0 1 0-1.06 1.06L10.94 10l-1.47 1.47a.75.75 0 1 0 1.06 1.06L12 11.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L13.06 10l1.47-1.47a.75.75 0 0 0-1.06-1.06L12 8.94zM7.5 14.75a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarBillCrossBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillCrossBrokenIcon],svg[solar-bill-cross-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14 8l-4 4m0-4l4 4m-6.5 3.5H9m7.5 0H12M21 7v-.63c0-1.193 0-1.79-.158-2.27a3.05 3.05 0 0 0-1.881-1.937C18.493 2 17.914 2 16.755 2h-9.51c-1.159 0-1.738 0-2.206.163a3.05 3.05 0 0 0-1.881 1.936C3 4.581 3 5.177 3 6.37V15m18-4v9.374c0 .858-.985 1.314-1.608.744a.946.946 0 0 0-1.284 0l-.483.442a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0l-.483-.442a.946.946 0 0 0-1.284 0c-.623.57-1.608.114-1.608-.744V19"></svg:path>`,
})
export class SolarBillCrossBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillCrossLineDuotoneIcon],svg[solar-bill-cross-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17.667 2H6.333c-.31 0-.464 0-.594.012c-1.45.133-2.6 1.34-2.728 2.861C3 5.01 3 5.173 3 5.497V20.26c0 .872 1.059 1.243 1.558.544a.84.84 0 0 1 1.384 0l.433.606a1.367 1.367 0 0 0 2.25 0a1.367 1.367 0 0 1 2.25 0a1.367 1.367 0 0 0 2.25 0a1.367 1.367 0 0 1 2.25 0a1.367 1.367 0 0 0 2.25 0l.433-.605a.84.84 0 0 1 1.384 0c.5.698 1.558.327 1.558-.545V5.497c0-.324 0-.487-.011-.624c-.127-1.521-1.277-2.728-2.727-2.861C18.13 2 17.976 2 17.667 2Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M7.5 15.5h9M14 8l-4 4m0-4l4 4"></svg:path></svg:g>`,
})
export class SolarBillCrossLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillCrossLinearIcon],svg[solar-bill-cross-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17.667 2H6.333c-.31 0-.464 0-.594.012c-1.45.133-2.6 1.34-2.728 2.861C3 5.01 3 5.173 3 5.497V20.26c0 .872 1.059 1.243 1.558.544a.84.84 0 0 1 1.384 0l.433.606a1.367 1.367 0 0 0 2.25 0a1.367 1.367 0 0 1 2.25 0a1.367 1.367 0 0 0 2.25 0a1.367 1.367 0 0 1 2.25 0a1.367 1.367 0 0 0 2.25 0l.433-.605a.84.84 0 0 1 1.384 0c.5.698 1.558.327 1.558-.545V5.497c0-.324 0-.487-.011-.624c-.127-1.521-1.277-2.728-2.727-2.861C18.13 2 17.976 2 17.667 2Z"></svg:path><svg:path stroke-linecap="round" d="M7.5 15.5h9M14 8l-4 4m0-4l4 4"></svg:path></svg:g>`,
})
export class SolarBillCrossLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillCrossOutlineIcon],svg[solar-bill-cross-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.294 1.25h11.412c.272 0 .459 0 .624.015c1.838.169 3.251 1.688 3.406 3.546c.014.168.014.36.014.648v14.8c0 .773-.482 1.356-1.094 1.57a1.58 1.58 0 0 1-1.824-.588a.1.1 0 0 0-.043-.04a.1.1 0 0 0-.078 0a.1.1 0 0 0-.043.04l-.433.605a2.117 2.117 0 0 1-3.47 0a.618.618 0 0 0-1.03 0a2.117 2.117 0 0 1-3.47 0a.618.618 0 0 0-1.03 0a2.117 2.117 0 0 1-3.47 0l-.433-.605a.1.1 0 0 0-.043-.04a.1.1 0 0 0-.078 0a.1.1 0 0 0-.043.04a1.58 1.58 0 0 1-1.824.588a1.64 1.64 0 0 1-1.094-1.57V5.46c0-.288 0-.48.014-.648c.155-1.858 1.568-3.377 3.406-3.546c.165-.015.352-.015.624-.015m.04 1.5c-.327 0-.44 0-.527.009c-1.062.097-1.95.991-2.048 2.177a8 8 0 0 0-.009.561V20.26c0 .06.017.092.029.109q.022.031.06.044a.1.1 0 0 0 .053.004c.005-.001.026-.008.056-.049a1.59 1.59 0 0 1 2.604 0l.433.606a.618.618 0 0 0 1.03 0a2.117 2.117 0 0 1 3.47 0a.618.618 0 0 0 1.03 0a2.117 2.117 0 0 1 3.47 0a.618.618 0 0 0 1.03 0l.433-.606a1.59 1.59 0 0 1 2.604 0c.03.042.05.048.056.049c.01.003.028.005.053-.004a.13.13 0 0 0 .06-.044a.2.2 0 0 0 .029-.11V5.498c0-.34 0-.464-.009-.561c-.099-1.186-.986-2.08-2.048-2.177a7 7 0 0 0-.526-.009zM9.47 7.47a.75.75 0 0 1 1.06 0L12 8.94l1.47-1.47a.75.75 0 0 1 1.06 1.06L13.06 10l1.47 1.47a.75.75 0 1 1-1.06 1.06L12 11.06l-1.47 1.47a.75.75 0 0 1-1.06-1.06L10.94 10L9.47 8.53a.75.75 0 0 1 0-1.06M6.75 15.5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBillCrossOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillLineDuotoneIcon],svg[solar-bill-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 2h20"></svg:path><svg:path d="M4 2h16v10.277c0 1.34 0 2.01-.268 2.601s-.773 1.032-1.781 1.915l-2 1.75c-1.883 1.647-2.824 2.47-3.951 2.47s-2.068-.823-3.951-2.47l-2-1.75c-1.009-.883-1.513-1.324-1.78-1.915C4 14.288 4 13.618 4 12.278z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M8.5 13h7m-7-5h7"></svg:path></svg:g>`,
})
export class SolarBillLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillLinearIcon],svg[solar-bill-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 2h20"></svg:path><svg:path d="M4 2h16v10.27c0 1.34 0 2.009-.268 2.6c-.268.59-.773 1.03-1.781 1.912l-2 1.749C14.068 20.177 13.127 21 12 21s-2.068-.823-3.951-2.47l-2-1.748C5.04 15.9 4.536 15.46 4.269 14.87C4 14.28 4 13.61 4 12.27z"></svg:path><svg:path stroke-linecap="round" d="M8.5 13h7m-7-5h7"></svg:path></svg:g>`,
})
export class SolarBillLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillListBoldIcon],svg[solar-bill-list-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.245 2h9.51c1.159 0 1.738 0 2.206.163a3.05 3.05 0 0 1 1.881 1.936C21 4.581 21 5.177 21 6.37v14.004c0 .858-.985 1.314-1.608.744a.946.946 0 0 0-1.284 0l-.483.442a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0l-.483-.442a.946.946 0 0 0-1.284 0c-.623.57-1.608.114-1.608-.744V6.37c0-1.193 0-1.79.158-2.27c.3-.913.995-1.629 1.881-1.937C5.507 2 6.086 2 7.245 2M7 6.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 10.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 13.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBillListBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillListBoldDuotoneIcon],svg[solar-bill-list-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.245 2h9.51c1.159 0 1.738 0 2.206.163a3.05 3.05 0 0 1 1.881 1.936C21 4.581 21 5.177 21 6.37v14.004c0 .858-.985 1.314-1.608.744a.946.946 0 0 0-1.284 0l-.483.442a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0l-.483-.442a.946.946 0 0 0-1.284 0c-.623.57-1.608.114-1.608-.744V6.37c0-1.193 0-1.79.158-2.27c.3-.913.995-1.629 1.881-1.937C5.507 2 6.086 2 7.245 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7 6.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 10.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 13.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarBillListBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillListBrokenIcon],svg[solar-bill-list-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.5 11H17M7 11h.5M7 7.5h.5m-.5 7h.5m9.5 0h-1m-5.5 0h3m3.5-7h-3m-3.5 0h1M21 7v-.63c0-1.193 0-1.79-.158-2.27a3.05 3.05 0 0 0-1.881-1.937C18.493 2 17.914 2 16.755 2h-9.51c-1.159 0-1.738 0-2.206.163a3.05 3.05 0 0 0-1.881 1.936C3 4.581 3 5.177 3 6.37V15m18-4v9.374c0 .858-.985 1.314-1.608.744a.946.946 0 0 0-1.284 0l-.483.442a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0l-.483-.442a.946.946 0 0 0-1.284 0c-.623.57-1.608.114-1.608-.744V19"></svg:path>`,
})
export class SolarBillListBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillListLineDuotoneIcon],svg[solar-bill-list-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16.755 2h-9.51c-1.159 0-1.738 0-2.206.163a3.05 3.05 0 0 0-1.881 1.936C3 4.581 3 5.177 3 6.37v14.004c0 .858.985 1.314 1.608.744a.946.946 0 0 1 1.284 0l.483.442a1.657 1.657 0 0 0 2.25 0a1.657 1.657 0 0 1 2.25 0a1.657 1.657 0 0 0 2.25 0a1.657 1.657 0 0 1 2.25 0a1.657 1.657 0 0 0 2.25 0l.483-.442a.946.946 0 0 1 1.284 0c.623.57 1.608.114 1.608-.744V6.37c0-1.193 0-1.79-.158-2.27a3.05 3.05 0 0 0-1.881-1.937C18.493 2 17.914 2 16.755 2Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M10.5 11H17M7 11h.5M7 7.5h.5m-.5 7h.5m3-7H17m-6.5 7H17"></svg:path></svg:g>`,
})
export class SolarBillListLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillListLinearIcon],svg[solar-bill-list-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16.755 2h-9.51c-1.159 0-1.738 0-2.206.163a3.05 3.05 0 0 0-1.881 1.936C3 4.581 3 5.177 3 6.37v14.004c0 .858.985 1.314 1.608.744a.946.946 0 0 1 1.284 0l.483.442a1.657 1.657 0 0 0 2.25 0a1.657 1.657 0 0 1 2.25 0a1.657 1.657 0 0 0 2.25 0a1.657 1.657 0 0 1 2.25 0a1.657 1.657 0 0 0 2.25 0l.483-.442a.946.946 0 0 1 1.284 0c.623.57 1.608.114 1.608-.744V6.37c0-1.193 0-1.79-.158-2.27a3.05 3.05 0 0 0-1.881-1.937C18.493 2 17.914 2 16.755 2Z"></svg:path><svg:path stroke-linecap="round" d="M10.5 11H17M7 11h.5M7 7.5h.5m-.5 7h.5m3-7H17m-6.5 7H17"></svg:path></svg:g>`,
})
export class SolarBillListLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillListOutlineIcon],svg[solar-bill-list-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.099 1.25H16.9c1.017 0 1.717 0 2.306.204a3.8 3.8 0 0 1 2.348 2.412l-.713.234l.713-.234c.196.597.195 1.307.195 2.36v14.148c0 1.466-1.727 2.338-2.864 1.297a.196.196 0 0 0-.271 0l-.484.442c-.928.85-2.334.85-3.262 0a.907.907 0 0 0-1.238 0c-.928.85-2.334.85-3.262 0a.907.907 0 0 0-1.238 0c-.928.85-2.334.85-3.262 0l-.483-.442a.196.196 0 0 0-.272 0c-1.137 1.04-2.864.169-2.864-1.297V6.227c0-1.054 0-1.764.195-2.361a3.8 3.8 0 0 1 2.348-2.412c.59-.205 1.289-.204 2.306-.204m.146 1.5c-1.221 0-1.642.01-1.96.121A2.3 2.3 0 0 0 3.87 4.334c-.111.338-.12.784-.12 2.036v14.004c0 .12.059.192.134.227a.2.2 0 0 0 .11.018a.2.2 0 0 0 .107-.055a1.695 1.695 0 0 1 2.296 0l.483.442a.907.907 0 0 0 1.238 0a2.407 2.407 0 0 1 3.262 0a.907.907 0 0 0 1.238 0a2.407 2.407 0 0 1 3.262 0a.907.907 0 0 0 1.238 0l.483-.442a1.695 1.695 0 0 1 2.296 0c.043.04.08.052.108.055a.2.2 0 0 0 .109-.018c.075-.035.135-.108.135-.227V6.37c0-1.252-.01-1.698-.12-2.037a2.3 2.3 0 0 0-1.416-1.462c-.317-.11-.738-.12-1.959-.12zM6.25 7.5A.75.75 0 0 1 7 6.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75M6.25 11a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75m-3.5 3.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBillListOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillOutlineIcon],svg[solar-bill-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 2A.75.75 0 0 1 2 1.25h20a.75.75 0 0 1 0 1.5h-1.25v9.676c0 1.187.001 2.013-.335 2.753c-.337.74-.958 1.284-1.852 2.065l-.118.103l-2.038 1.782c-.91.795-1.645 1.438-2.296 1.876c-.678.456-1.341.745-2.111.745s-1.433-.289-2.111-.745c-.651-.438-1.387-1.081-2.296-1.876l-2.038-1.782l-.118-.103c-.894-.781-1.516-1.324-1.852-2.065s-.336-1.566-.335-2.753V2.75H2A.75.75 0 0 1 1.25 2m3.5.75v9.52c0 1.407.016 1.88.201 2.289c.185.408.532.732 1.592 1.659l2 1.748c.956.836 1.62 1.416 2.184 1.794c.545.367.915.49 1.273.49s.728-.122 1.274-.49c.563-.378 1.227-.958 2.183-1.794l2-1.748c1.06-.927 1.407-1.25 1.592-1.659c.185-.408.201-.882.201-2.289V2.75zm3 5.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7A.75.75 0 0 1 7.75 8m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBillOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHole2BoldIcon],svg[solar-black-hole-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.165 3.384a.75.75 0 0 0 1.218.876q.266-.371.623-.73a.75.75 0 0 0-1.06-1.06q-.442.442-.78.914m-.338 5.26a.75.75 0 0 1-.834-.656a6.6 6.6 0 0 1 .144-2.411a.75.75 0 0 1 1.455.366a5.1 5.1 0 0 0-.11 1.868a.75.75 0 0 1-.655.833m1.007 3.63a.75.75 0 0 0 1.18-.925a8 8 0 0 1-1.012-1.683a.75.75 0 1 0-1.373.605c.317.721.73 1.397 1.205 2.003m9.277-.676a.75.75 0 0 1 1.053.128a9.4 9.4 0 0 1 1.205 2.003a.75.75 0 1 1-1.373.605a8 8 0 0 0-1.012-1.683a.75.75 0 0 1 .127-1.053m2.894 4.414a.75.75 0 0 0-1.49.177a5.1 5.1 0 0 1-.109 1.868a.75.75 0 1 0 1.455.367a6.6 6.6 0 0 0 .144-2.412m-1.342 3.557a.75.75 0 0 1 .17 1.047q-.338.473-.78.914a.75.75 0 1 1-1.06-1.06a6 6 0 0 0 .623-.73a.75.75 0 0 1 1.047-.171M11.598 7.888a.75.75 0 0 1 .128-1.053a9.4 9.4 0 0 1 2.003-1.205a.75.75 0 0 1 .605 1.373c-.601.264-1.17.61-1.683 1.012a.75.75 0 0 1-1.053-.127m4.414-2.894a.75.75 0 0 0 .177 1.49a5.1 5.1 0 0 1 1.868.109a.75.75 0 0 0 .367-1.455a6.6 6.6 0 0 0-2.412-.144m3.557 1.342a.75.75 0 0 1 1.047-.17q.473.338.914.78a.75.75 0 1 1-1.06 1.06a6 6 0 0 0-.73-.623a.75.75 0 0 1-.171-1.047m-7.167 9.776a.75.75 0 0 1-.128 1.053a9.4 9.4 0 0 1-2.003 1.205a.75.75 0 1 1-.605-1.373a8 8 0 0 0 1.683-1.012a.75.75 0 0 1 1.053.127m-4.414 2.894a.75.75 0 0 0-.177-1.49a5.1 5.1 0 0 1-1.868-.109a.75.75 0 1 0-.366 1.455c.806.203 1.62.238 2.411.144m-3.557-1.342a.75.75 0 0 1-1.047.17a7.4 7.4 0 0 1-.914-.78a.75.75 0 1 1 1.06-1.06q.359.357.73.623a.75.75 0 0 1 .171 1.047m6.225-2.634a.75.75 0 0 0 .641-.113a3 3 0 0 0 1.283.027a.75.75 0 0 0 1.342.553c.507-.671.897-1.404 1.108-2.152a.75.75 0 0 0-.113-.642a3 3 0 0 0 .027-1.283a.75.75 0 0 0 .553-1.342c-.671-.507-1.404-.897-2.152-1.108a.75.75 0 0 0-.642.113a3 3 0 0 0-1.283-.027a.75.75 0 0 0-1.342-.553c-.507.671-.897 1.404-1.108 2.153a.75.75 0 0 0 .113.641a3 3 0 0 0-.027 1.283a.75.75 0 0 0-.553 1.342c.671.507 1.404.897 2.153 1.108"></svg:path>`,
})
export class SolarBlackHole2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHole2BoldDuotoneIcon],svg[solar-black-hole-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.165 3.384a.75.75 0 0 0 1.218.876q.266-.371.623-.73a.75.75 0 1 0-1.06-1.06q-.442.442-.78.914m-.338 5.26a.75.75 0 0 1-.834-.656a6.6 6.6 0 0 1 .144-2.411a.75.75 0 0 1 1.455.366a5.1 5.1 0 0 0-.11 1.868a.75.75 0 0 1-.655.833m1.007 3.63a.75.75 0 0 0 1.18-.925a8 8 0 0 1-1.012-1.683a.75.75 0 1 0-1.373.605c.317.721.73 1.397 1.205 2.003m4.462 2.643a.75.75 0 0 1-.642.113c-.748-.211-1.481-.601-2.152-1.108a.75.75 0 0 1 .553-1.342a3.02 3.02 0 0 1 .348-2.084a.75.75 0 0 1 .208-.664a3.5 3.5 0 0 1 1.126-.764a.75.75 0 0 1 .597.006a3 3 0 0 1 1.368.009a.75.75 0 0 1 .642-.113c.748.211 1.481.601 2.153 1.108a.75.75 0 0 1-.554 1.342a3.02 3.02 0 0 1-.348 2.084a.75.75 0 0 1-.208.664a3.5 3.5 0 0 1-1.126.764a.75.75 0 0 1-.597-.006a3 3 0 0 1-1.368-.009m4.815-3.319a.75.75 0 0 1 1.053.128a9.4 9.4 0 0 1 1.205 2.003a.75.75 0 0 1-1.373.605a8 8 0 0 0-1.012-1.683a.75.75 0 0 1 .127-1.053m2.894 4.414a.75.75 0 1 0-1.49.177a5.1 5.1 0 0 1-.109 1.868a.75.75 0 1 0 1.455.367a6.6 6.6 0 0 0 .144-2.412m-1.342 3.557a.75.75 0 0 1 .17 1.047a7.4 7.4 0 0 1-.78.914a.75.75 0 1 1-1.06-1.06q.357-.36.623-.73a.75.75 0 0 1 1.047-.171"></svg:path><svg:path fill="currentColor" d="M9.832 14.388a.75.75 0 1 0 1.061-1.06a2 2 0 0 1-.443-.648a.75.75 0 1 0-1.382.582c.173.41.427.789.764 1.126m-.862-3.732a.75.75 0 0 0 1.444.407c.15-.536.444-1.104.861-1.657a.75.75 0 0 0-1.197-.903c-.507.671-.897 1.404-1.108 2.153m2.756-3.821a.75.75 0 0 0 .925 1.18a8 8 0 0 1 1.683-1.012a.75.75 0 0 0-.605-1.373a9.4 9.4 0 0 0-2.003 1.205m4.286-1.841a.75.75 0 0 0 .177 1.49a5.1 5.1 0 0 1 1.868.109a.75.75 0 0 0 .367-1.455a6.6 6.6 0 0 0-2.412-.144m4.604 1.171a.75.75 0 1 0-.876 1.218q.37.266.73.623a.75.75 0 0 0 1.06-1.06a7.4 7.4 0 0 0-.914-.78m-6.448 3.446a.75.75 0 1 0-1.061 1.06c.205.205.348.423.443.648a.75.75 0 1 0 1.382-.582a3.5 3.5 0 0 0-.764-1.126m.862 3.733a.75.75 0 0 0-1.444-.408c-.151.536-.444 1.104-.861 1.657a.75.75 0 0 0 1.197.904c.507-.672.897-1.405 1.108-2.153m-2.756 3.82a.75.75 0 0 0-.925-1.18a8 8 0 0 1-1.683 1.012a.75.75 0 1 0 .605 1.373a9.4 9.4 0 0 0 2.003-1.205m-4.286 1.841a.75.75 0 1 0-.177-1.49a5.1 5.1 0 0 1-1.868-.109a.75.75 0 1 0-.366 1.455c.806.203 1.62.238 2.411.144m-4.604-1.171a.75.75 0 1 0 .876-1.218a6 6 0 0 1-.73-.623a.75.75 0 0 0-1.06 1.06q.442.442.914.78" opacity=".5"></svg:path>`,
})
export class SolarBlackHole2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHole2BrokenIcon],svg[solar-black-hole-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M10.142 10.363C13.688 6.817 21.914 15.61 16.524 21"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M13.858 13.637C10.312 17.183 2.086 8.39 7.476 3"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M10.363 13.858C6.817 10.312 15.61 2.086 21 7.476"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M13.637 10.142C17.183 13.688 8.39 21.914 3 16.524"></svg:path></svg:g>`,
})
export class SolarBlackHole2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHole2LineDuotoneIcon],svg[solar-black-hole-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M10.142 10.363C13.688 6.817 21.914 15.61 16.524 21" opacity=".5"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M13.858 13.637C10.312 17.183 2.086 8.39 7.476 3" opacity=".5"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M10.363 13.858C6.817 10.312 15.61 2.086 21 7.476" opacity=".5"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M13.637 10.142C17.183 13.688 8.39 21.914 3 16.524" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBlackHole2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHole2LinearIcon],svg[solar-black-hole-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M10.142 10.363C13.688 6.817 21.914 15.61 16.524 21"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M13.858 13.637C10.312 17.183 2.086 8.39 7.476 3"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M10.363 13.858C6.817 10.312 15.61 2.086 21 7.476"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M13.637 10.142C17.183 13.688 8.39 21.914 3 16.524"></svg:path></svg:g>`,
})
export class SolarBlackHole2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHole2OutlineIcon],svg[solar-black-hole-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.006 2.47a.75.75 0 0 1 0 1.06a6 6 0 0 0-.623.73a.75.75 0 0 1-1.218-.876q.34-.473.78-.914a.75.75 0 0 1 1.061 0m10.051 4.123a5.1 5.1 0 0 0-1.868-.11a.75.75 0 1 1-.178-1.489a6.6 6.6 0 0 1 2.412.144a.75.75 0 0 1-.366 1.455M6.05 5.033a.75.75 0 0 1 .544.91a5.1 5.1 0 0 0-.11 1.868a.75.75 0 1 1-1.489.177a6.6 6.6 0 0 1 .144-2.411a.75.75 0 0 1 .91-.545m8.669.981a.75.75 0 0 1-.384.989c-.601.264-1.17.61-1.683 1.013a.75.75 0 0 1-.925-1.18a9.4 9.4 0 0 1 2.003-1.206a.75.75 0 0 1 .989.384m4.85.322a.75.75 0 0 1 1.047-.17q.474.338.915.78a.75.75 0 1 1-1.06 1.06a6 6 0 0 0-.73-.623a.75.75 0 0 1-.171-1.047M11.41 9.113a.75.75 0 0 0-1.332-.61c-.507.671-.897 1.404-1.108 2.153a.75.75 0 0 0 .326.84a2.8 2.8 0 0 0-.018.9a.8.8 0 0 0-.165.194a.75.75 0 0 0-.61 1.332c.671.507 1.404.897 2.153 1.108a.75.75 0 0 0 .84-.326a2.8 2.8 0 0 0 .9.018a.8.8 0 0 0 .194.165a.75.75 0 0 0 1.332.61c.507-.671.897-1.404 1.108-2.153a.75.75 0 0 0-.326-.841a2.8 2.8 0 0 0 .018-.898a.8.8 0 0 0 .165-.195a.75.75 0 0 0 .61-1.332c-.671-.507-1.404-.897-2.153-1.108a.75.75 0 0 0-.841.326a2.8 2.8 0 0 0-.898-.018a.8.8 0 0 0-.195-.165m1.786 1.653a.75.75 0 0 1-.718.079a1.24 1.24 0 0 0-.956 0a.75.75 0 0 1-.715-.077l-.04.036a.75.75 0 0 1 .078.718a1.24 1.24 0 0 0 0 .956a.75.75 0 0 1-.077.715l.036.04a.75.75 0 0 1 .718-.078a1.24 1.24 0 0 0 .956 0a.75.75 0 0 1 .715.077l.04-.036a.75.75 0 0 1-.078-.718a1.24 1.24 0 0 0 0-.956a.75.75 0 0 1 .077-.715zM6.014 9.282a.75.75 0 0 1 .989.384c.264.601.61 1.17 1.013 1.683a.75.75 0 1 1-1.18.925a9.4 9.4 0 0 1-1.206-2.003a.75.75 0 0 1 .384-.989m10.098 2.316a.75.75 0 0 1 1.053.128a9.4 9.4 0 0 1 1.205 2.003a.75.75 0 1 1-1.373.605a8 8 0 0 0-1.013-1.683a.75.75 0 0 1 .128-1.053m2.06 3.757a.75.75 0 0 1 .834.656a6.6 6.6 0 0 1-.144 2.412a.75.75 0 0 1-1.455-.366a5.1 5.1 0 0 0 .11-1.868a.75.75 0 0 1 .655-.834m-15.702.639a.75.75 0 0 1 1.06 0q.359.357.73.623a.75.75 0 0 1-.876 1.218a7.4 7.4 0 0 1-.914-.78a.75.75 0 0 1 0-1.061m9.932.118a.75.75 0 0 1-.128 1.053a9.4 9.4 0 0 1-2.003 1.205a.75.75 0 1 1-.605-1.373a8 8 0 0 0 1.683-1.013a.75.75 0 0 1 1.053.128m-7.37 1.84a.75.75 0 0 1 .91-.545a5.1 5.1 0 0 0 1.869.11a.75.75 0 1 1 .177 1.489a6.6 6.6 0 0 1-2.411-.144a.75.75 0 0 1-.545-.91m12.631 1.617a.75.75 0 0 1 .172 1.047q-.34.473-.78.914a.75.75 0 1 1-1.061-1.06q.357-.36.623-.73a.75.75 0 0 1 1.046-.171" clip-rule="evenodd"></svg:path>`,
})
export class SolarBlackHole2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHole3BoldIcon],svg[solar-black-hole-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.928 12.453c.406.836 1.016 1.541 1.825 1.942c-.793.183-1.71.22-2.648.087C5.315 14.087 2.75 12.284 2.75 9a.75.75 0 0 0-1.5 0c0 4.316 3.436 6.513 6.645 6.968c1.612.228 3.27.042 4.558-.584c.868-.422 1.596-1.065 1.988-1.921c.142.741.162 1.578.041 2.432c-.395 2.79-2.198 5.355-5.482 5.355a.75.75 0 0 0 0 1.5c4.316 0 6.513-3.436 6.968-6.645c.228-1.612.042-3.27-.584-4.558c-.346-.712-.84-1.33-1.48-1.745a7.7 7.7 0 0 1 1.99.027c2.792.396 5.356 2.198 5.356 5.483a.75.75 0 0 0 1.5 0c0-4.316-3.436-6.513-6.645-6.968c-1.612-.228-3.27-.043-4.558.584c-.692.336-1.294.812-1.709 1.425a7.6 7.6 0 0 1-.009-2.248c.396-2.79 2.198-5.355 5.483-5.355a.75.75 0 0 0 0-1.5c-4.316 0-6.513 3.436-6.968 6.645c-.228 1.612-.043 3.27.584 4.558"></svg:path>`,
})
export class SolarBlackHole3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHole3BoldDuotoneIcon],svg[solar-black-hole-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.104 12.784a5 5 0 0 1-.176-.331c-.627-1.288-.812-2.946-.584-4.558c.455-3.21 2.652-6.645 6.968-6.645a.75.75 0 0 1 0 1.5c-3.285 0-5.087 2.564-5.483 5.355a7.7 7.7 0 0 0-.04 1.868A3 3 0 0 1 12 9c.966 0 1.826.457 2.374 1.166c.417.38.754.855 1.01 1.381c.626 1.288.812 2.946.584 4.558c-.455 3.21-2.652 6.645-6.968 6.645a.75.75 0 0 1 0-1.5c3.284 0 5.087-2.564 5.482-5.355a7.6 7.6 0 0 0-.002-2.206a3.001 3.001 0 0 1-5.376-.905" clip-rule="evenodd"></svg:path><svg:g fill="currentColor" opacity=".5"><svg:path d="M13.25 12c0 .887-.51 1.576-1.453 2.035c-.962.467-2.304.644-3.692.447C5.315 14.087 2.75 12.284 2.75 9a.75.75 0 0 0-1.5 0c0 4.316 3.436 6.513 6.645 6.968c1.612.228 3.27.042 4.558-.584c1.307-.636 2.297-1.771 2.297-3.384a.75.75 0 0 0-1.5 0"></svg:path><svg:path d="M10.75 12.312c0-.888.51-1.577 1.453-2.035c.962-.468 2.304-.644 3.692-.448c2.79.396 5.355 2.198 5.355 5.483a.75.75 0 0 0 1.5 0c0-4.316-3.436-6.513-6.645-6.968c-1.612-.228-3.27-.043-4.558.584c-1.307.635-2.297 1.77-2.297 3.383a.75.75 0 0 0 1.5 0"></svg:path></svg:g>`,
})
export class SolarBlackHole3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHole3BrokenIcon],svg[solar-black-hole-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-linecap="round" d="M12 10c5 0 4.6 12-3 12"></svg:path><svg:path stroke-linecap="round" d="M12.312 14c-5 0-4.6-12 3-12"></svg:path><svg:path stroke-linecap="round" d="M10 12.312c0-2.78 3.707-3.89 7-3.024m5 6.024c0-1.97-.806-3.456-2-4.49M14 12c0 2.779-3.707 3.89-7 3.024M2 9c0 1.68.586 3.008 1.5 4.004"></svg:path></svg:g>`,
})
export class SolarBlackHole3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHole3LineDuotoneIcon],svg[solar-black-hole-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-linecap="round" d="M12 10c5 0 4.6 12-3 12" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12.312 14c-5 0-4.6-12 3-12" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M10 12.312c0-5 12-4.6 12 3" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M14 12c0 5-12 4.6-12-3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBlackHole3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHole3LinearIcon],svg[solar-black-hole-3-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-linecap="round" d="M12 10c5 0 4.6 12-3 12"></svg:path><svg:path stroke-linecap="round" d="M12.312 14c-5 0-4.6-12 3-12"></svg:path><svg:path stroke-linecap="round" d="M10 12.312c0-5 12-4.6 12 3"></svg:path><svg:path stroke-linecap="round" d="M14 12c0 5-12 4.6-12-3"></svg:path></svg:g>`,
})
export class SolarBlackHole3LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHole3OutlineIcon],svg[solar-black-hole-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.013 13.901a4.5 4.5 0 0 1-1.085-1.448c-.627-1.288-.812-2.946-.584-4.558c.455-3.21 2.652-6.645 6.968-6.645a.75.75 0 0 1 0 1.5c-3.285 0-5.087 2.564-5.483 5.355a7.6 7.6 0 0 0 .002 2.204q.124-.158.268-.296a4.5 4.5 0 0 1 1.448-1.085c1.288-.627 2.946-.812 4.558-.584c3.21.455 6.645 2.652 6.645 6.968a.75.75 0 0 1-1.5 0c0-3.285-2.564-5.087-5.355-5.483a7.7 7.7 0 0 0-1.991-.027c.64.415 1.134 1.033 1.48 1.745c.626 1.288.812 2.946.584 4.558c-.455 3.21-2.652 6.645-6.968 6.645a.75.75 0 0 1 0-1.5c3.284 0 5.087-2.564 5.482-5.355a7.5 7.5 0 0 0-.041-2.432c-.392.856-1.12 1.499-1.988 1.92c-1.288.627-2.946.813-4.558.585C4.685 15.513 1.25 13.316 1.25 9a.75.75 0 0 1 1.5 0c0 3.284 2.564 5.087 5.355 5.482a7.4 7.4 0 0 0 2.573-.07a2.8 2.8 0 0 1-.665-.51m2.12-.658a1.95 1.95 0 0 1-1.08-.426a1.25 1.25 0 0 1-.296-.684q.051-.608.426-1.08a1.25 1.25 0 1 1 .95 2.19" clip-rule="evenodd"></svg:path>`,
})
export class SolarBlackHole3OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHoleBoldIcon],svg[solar-black-hole-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.676 11.946a.75.75 0 0 0 1.18-.925a8 8 0 0 1-1.01-1.677a.75.75 0 1 0-1.372.604c.316.72.728 1.394 1.202 1.998M4.84 7.672a.75.75 0 0 0 1.489-.178a5.1 5.1 0 0 1 .109-1.862a.75.75 0 1 0-1.455-.366a6.6 6.6 0 0 0-.144 2.406M6.007 3.08a.75.75 0 0 0 1.218.875q.265-.37.621-.727a.75.75 0 0 0-1.06-1.061a7.4 7.4 0 0 0-.779.912m11.629 8.975a.75.75 0 0 0-1.18.925c.4.511.745 1.079 1.009 1.677a.75.75 0 1 0 1.373-.604a9.4 9.4 0 0 0-1.202-1.998m1.836 4.274a.75.75 0 0 0-1.49.178a5.1 5.1 0 0 1-.108 1.862a.75.75 0 1 0 1.454.366a6.6 6.6 0 0 0 .144-2.406m-1.168 4.592a.75.75 0 0 0-1.218-.875a6 6 0 0 1-.62.727a.75.75 0 0 0 1.06 1.061q.44-.44.778-.912M12.082 7.573a.75.75 0 0 1 .127-1.053a9.4 9.4 0 0 1 1.998-1.202a.75.75 0 0 1 .605 1.373a8 8 0 0 0-1.678 1.01a.75.75 0 0 1-1.053-.128m3.747-2.056a.75.75 0 0 1 .656-.833a6.6 6.6 0 0 1 2.405.143a.75.75 0 0 1-.366 1.455a5.1 5.1 0 0 0-1.862-.109a.75.75 0 0 1-.833-.656m4.202.506a.75.75 0 0 1 1.046-.171q.472.339.912.778a.75.75 0 1 1-1.06 1.06a6 6 0 0 0-.728-.62a.75.75 0 0 1-.17-1.047M12.103 17.48a.75.75 0 1 0-.926-1.18c-.51.4-1.078.746-1.677 1.01a.75.75 0 0 0 .604 1.372a9.4 9.4 0 0 0 1.999-1.202m-4.275 1.836a.75.75 0 0 0-.178-1.49a5.1 5.1 0 0 1-1.862-.108a.75.75 0 0 0-.366 1.455a6.6 6.6 0 0 0 2.406.143m-4.592-1.168a.75.75 0 0 0 .875-1.218a6 6 0 0 1-.727-.62a.75.75 0 1 0-1.06 1.06q.44.44.912.778"></svg:path><svg:path fill="currentColor" d="M13.746 15.817a.75.75 0 0 1-1.347-.407c-1.28.605-2.914.783-4.504.558C4.685 15.513 1.25 13.316 1.25 9a.75.75 0 0 1 1.5 0c0 3.284 2.564 5.087 5.355 5.482a7.7 7.7 0 0 0 1.872.04a7 7 0 0 1-1.638-.932a.75.75 0 0 1 .492-1.348c-.548-1.255-.703-2.821-.487-4.347c.455-3.21 2.652-6.645 6.968-6.645a.75.75 0 0 1 0 1.5c-3.285 0-5.087 2.564-5.483 5.355a8 8 0 0 0-.073 1.423c.212-.465.487-.918.81-1.345a.75.75 0 0 1 1.336.587c1.23-.499 2.735-.634 4.203-.426c3.21.455 6.645 2.652 6.645 6.968a.75.75 0 0 1-1.5 0c0-3.285-2.564-5.087-5.355-5.483a8 8 0 0 0-.959-.078q.537.28 1.037.659a.75.75 0 0 1-.492 1.348c.548 1.255.703 2.821.487 4.347c-.455 3.21-2.652 6.645-6.968 6.645a.75.75 0 0 1 0-1.5c3.284 0 5.087-2.564 5.482-5.355a8 8 0 0 0 .073-1.423a7.2 7.2 0 0 1-.809 1.345"></svg:path>`,
})
export class SolarBlackHoleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHoleBoldDuotoneIcon],svg[solar-black-hole-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.735 14.654a.75.75 0 0 1-.23-1.44c.224-.094.441-.237.645-.44a.75.75 0 0 1 .996-.058a.75.75 0 0 1 .705.954c-.21.746-.6 1.477-1.105 2.147a.75.75 0 0 1-1.197-.903q.098-.13.186-.26m-2.248.041a.75.75 0 0 0 .953-.707a.75.75 0 0 0-.058-.994a2 2 0 0 1-.442-.646a.75.75 0 0 0-1.438.23a7 7 0 0 1-.26-.186a.75.75 0 0 0-.903 1.198c.67.505 1.4.894 2.148 1.105m-3.811-2.749a.75.75 0 0 0 1.18-.925a8 8 0 0 1-1.01-1.677a.75.75 0 1 0-1.372.604c.317.72.728 1.394 1.202 1.998M4.84 7.672a.75.75 0 0 0 1.49-.178a5.1 5.1 0 0 1 .108-1.862a.75.75 0 0 0-1.454-.366a6.6 6.6 0 0 0-.144 2.406M6.008 3.08a.75.75 0 1 0 1.218.875q.265-.37.62-.727a.75.75 0 0 0-1.06-1.061a7.4 7.4 0 0 0-.778.912m5.755 6.007a7 7 0 0 0-.187.26a.75.75 0 0 1 .23 1.439a2 2 0 0 0-.645.441a.75.75 0 0 1-.995.058a.752.752 0 0 1-.706-.954c.211-.746.6-1.477 1.105-2.147a.75.75 0 0 1 1.198.903m2.062.219a.75.75 0 0 0-.954.707a.75.75 0 0 0 .059.994c.204.204.347.421.441.645a.75.75 0 0 0 1.439-.23q.13.09.26.187a.75.75 0 0 0 .902-1.198c-.67-.505-1.4-.894-2.147-1.105m3.81 2.749a.75.75 0 1 0-1.18.925c.4.511.746 1.079 1.01 1.677a.75.75 0 0 0 1.372-.604a9.4 9.4 0 0 0-1.202-1.998m1.837 4.274a.75.75 0 1 0-1.49.178a5.1 5.1 0 0 1-.109 1.862a.75.75 0 0 0 1.455.366a6.6 6.6 0 0 0 .143-2.406m-1.167 4.592a.75.75 0 0 0-1.218-.875a6 6 0 0 1-.621.727a.75.75 0 0 0 1.06 1.06q.44-.439.779-.911M12.082 7.573a.75.75 0 0 1 .127-1.053a9.4 9.4 0 0 1 1.998-1.202a.75.75 0 0 1 .604 1.373a8 8 0 0 0-1.677 1.01a.75.75 0 0 1-1.053-.128m3.747-2.056a.75.75 0 0 1 .656-.833a6.6 6.6 0 0 1 2.405.143a.75.75 0 1 1-.366 1.455a5.1 5.1 0 0 0-1.862-.109a.75.75 0 0 1-.834-.656m4.203.506a.75.75 0 0 1 1.046-.171q.472.339.912.778a.75.75 0 1 1-1.06 1.06a6 6 0 0 0-.728-.62a.75.75 0 0 1-.17-1.047M12.103 17.48a.75.75 0 0 0-.926-1.18A8 8 0 0 1 9.5 17.31a.75.75 0 1 0 .604 1.372a9.4 9.4 0 0 0 1.999-1.202m-4.275 1.836a.75.75 0 1 0-.178-1.49a5.1 5.1 0 0 1-1.862-.108a.75.75 0 1 0-.366 1.454a6.6 6.6 0 0 0 2.406.144m-4.592-1.168a.75.75 0 1 0 .875-1.218a6 6 0 0 1-.727-.62a.75.75 0 0 0-1.06 1.06q.439.44.912.778" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.928 12.453c.406.836 1.016 1.541 1.825 1.942c-.793.183-1.71.22-2.648.087C5.315 14.087 2.75 12.284 2.75 9a.75.75 0 0 0-1.5 0c0 4.316 3.436 6.513 6.645 6.968c1.612.228 3.27.042 4.558-.584c.868-.422 1.596-1.065 1.988-1.921c.142.741.162 1.578.041 2.432c-.395 2.79-2.198 5.355-5.482 5.355a.75.75 0 0 0 0 1.5c4.316 0 6.513-3.436 6.968-6.645c.228-1.612.042-3.27-.584-4.558c-.346-.712-.84-1.33-1.48-1.745a7.7 7.7 0 0 1 1.99.027c2.792.396 5.356 2.198 5.356 5.483a.75.75 0 0 0 1.5 0c0-4.316-3.436-6.513-6.645-6.968c-1.612-.228-3.27-.043-4.558.584c-.692.336-1.294.812-1.709 1.425a7.6 7.6 0 0 1-.009-2.248c.396-2.79 2.198-5.355 5.483-5.355a.75.75 0 0 0 0-1.5c-4.316 0-6.513 3.436-6.968 6.645c-.228 1.612-.043 3.27.584 4.558"></svg:path>`,
})
export class SolarBlackHoleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHoleBrokenIcon],svg[solar-black-hole-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-linecap="round" d="M12 10c5 0 4.6 12-3 12"></svg:path><svg:path stroke-linecap="round" d="M12.312 14c-5 0-4.6-12 3-12"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M10.631 10.696c3.536-3.535 11.738 5.233 6.364 10.607"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M13.68 13.304C10.145 16.84 1.942 8.07 7.316 2.697"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M10.852 13.524C7.316 9.99 16.084 1.786 21.458 7.16"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M13.46 10.476c3.535 3.535-5.233 11.738-10.607 6.364"></svg:path><svg:path stroke-linecap="round" d="M10 12.312c0-5 12-4.6 12 3"></svg:path><svg:path stroke-linecap="round" d="M14 12c0 5-12 4.6-12-3"></svg:path></svg:g>`,
})
export class SolarBlackHoleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHoleLineDuotoneIcon],svg[solar-black-hole-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-linecap="round" d="M12 10c5 0 4.6 12-3 12"></svg:path><svg:path stroke-linecap="round" d="M12.312 14c-5 0-4.6-12 3-12"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M10.631 10.696c3.536-3.535 11.738 5.233 6.364 10.607" opacity=".5"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M13.68 13.304C10.145 16.84 1.942 8.07 7.316 2.697" opacity=".5"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M10.852 13.524C7.316 9.99 16.084 1.786 21.458 7.16" opacity=".5"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M13.46 10.476c3.535 3.535-5.233 11.738-10.607 6.364" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M10 12.312c0-5 12-4.6 12 3"></svg:path><svg:path stroke-linecap="round" d="M14 12c0 5-12 4.6-12-3"></svg:path></svg:g>`,
})
export class SolarBlackHoleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHoleLinearIcon],svg[solar-black-hole-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-linecap="round" d="M12 10c5 0 4.6 12-3 12"></svg:path><svg:path stroke-linecap="round" d="M12.312 14c-5 0-4.6-12 3-12"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M10.632 10.696c3.535-3.535 11.737 5.233 6.364 10.607"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M13.68 13.304C10.144 16.84 1.942 8.07 7.316 2.697"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M10.851 13.524C7.316 9.99 16.084 1.786 21.458 7.16"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M13.46 10.476c3.536 3.535-5.232 11.738-10.606 6.364"></svg:path><svg:path stroke-linecap="round" d="M10 12.312c0-5 12-4.6 12 3"></svg:path><svg:path stroke-linecap="round" d="M14 12c0 5-12 4.6-12-3"></svg:path></svg:g>`,
})
export class SolarBlackHoleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHoleOutlineIcon],svg[solar-black-hole-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="2" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M7.847 2.167a.75.75 0 0 1 0 1.06a6 6 0 0 0-.621.728a.75.75 0 0 1-1.218-.876q.339-.472.778-.912a.75.75 0 0 1 1.06 0m10.676 4.115a5.1 5.1 0 0 0-1.861-.109a.75.75 0 1 1-.178-1.49a6.6 6.6 0 0 1 2.406.144a.75.75 0 1 1-.367 1.455m-12.63-1.56a.75.75 0 0 1 .545.91a5.1 5.1 0 0 0-.109 1.862a.75.75 0 1 1-1.49.178a6.6 6.6 0 0 1 .144-2.406a.75.75 0 0 1 .91-.544m9.303.98a.75.75 0 0 1-.384.989A8 8 0 0 0 13.135 7.7a.75.75 0 0 1-.926-1.18a9.4 9.4 0 0 1 1.999-1.202a.75.75 0 0 1 .988.384m4.834.32a.75.75 0 0 1 1.046-.17q.473.337.913.778a.75.75 0 1 1-1.061 1.06a6 6 0 0 0-.727-.62a.75.75 0 0 1-.171-1.047m-8.414 2.014a.75.75 0 0 1 .147 1.05a7 7 0 0 0-.186.26a.75.75 0 0 1 .23 1.439a2 2 0 0 0-.645.441a.75.75 0 0 1-.996.058a.75.75 0 0 1-.705-.954c.21-.747.6-1.478 1.105-2.147a.75.75 0 0 1 1.05-.147m-5.758.923a.75.75 0 0 1 .989.385a8 8 0 0 0 1.01 1.677a.75.75 0 0 1-1.181.925a9.4 9.4 0 0 1-1.202-1.998a.75.75 0 0 1 .384-.989m7.042.864a.75.75 0 0 1 .925-.518c.747.21 1.478.6 2.148 1.105a.75.75 0 0 1-.903 1.197a6 6 0 0 0-.26-.186a.75.75 0 0 1-1.439.23a2 2 0 0 0-.441-.645a.75.75 0 0 1-.059-.995a.8.8 0 0 1 .029-.188m3.683 2.103a.75.75 0 0 1 1.053.127a9.4 9.4 0 0 1 1.202 1.999a.75.75 0 0 1-1.373.604a8 8 0 0 0-1.01-1.677a.75.75 0 0 1 .128-1.053m-6.625.023a.75.75 0 0 1 .983.4c.094.224.237.44.441.645a.75.75 0 0 1 .058.995a.748.748 0 0 1-.953.706c-.747-.211-1.478-.6-2.148-1.105a.75.75 0 0 1 .903-1.198q.13.098.26.186a.75.75 0 0 1 .456-.63m4.188.767a.75.75 0 0 0-.996.058a2 2 0 0 1-.645.44a.75.75 0 0 0 .23 1.44a6 6 0 0 1-.186.26a.75.75 0 0 0 1.197.903c.505-.67.894-1.4 1.105-2.148a.75.75 0 0 0-.705-.953m4.493 2.956a.75.75 0 0 1 .833.656c.094.79.059 1.601-.144 2.406a.75.75 0 0 1-1.454-.367c.154-.61.183-1.237.109-1.861a.75.75 0 0 1 .656-.834m-16.316.637a.75.75 0 0 1 1.06 0q.359.356.728.621a.75.75 0 1 1-.875 1.218a7.4 7.4 0 0 1-.913-.778a.75.75 0 0 1 0-1.06m9.907.118a.75.75 0 0 1-.128 1.053a9.4 9.4 0 0 1-1.998 1.202a.75.75 0 0 1-.604-1.373a8 8 0 0 0 1.677-1.01a.75.75 0 0 1 1.053.128m-7.352 1.835a.75.75 0 0 1 .91-.544a5.1 5.1 0 0 0 1.862.109a.75.75 0 0 1 .178 1.49a6.6 6.6 0 0 1-2.406-.145a.75.75 0 0 1-.544-.91m13.255 1.612a.75.75 0 0 1 .171 1.046q-.339.473-.778.913a.75.75 0 0 1-1.06-1.061a6 6 0 0 0 .62-.727a.75.75 0 0 1 1.047-.171" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.726 12.499c.42.491.952.751 1.585.751c.151 0 .292.044.41.121A1.98 1.98 0 0 0 13.25 12a.75.75 0 0 1 .268-.575A2 2 0 0 0 12 10.75a.75.75 0 0 1-.392-.11c-.56.432-.858.994-.858 1.672a.8.8 0 0 1-.024.187m-.888-2.146a7.6 7.6 0 0 1-.009-2.248c.396-2.79 2.198-5.355 5.483-5.355a.75.75 0 0 0 0-1.5c-4.316 0-6.513 3.436-6.968 6.645c-.228 1.612-.043 3.27.584 4.558c.406.836 1.016 1.541 1.825 1.942c-.793.183-1.71.22-2.648.087C5.315 14.087 2.75 12.284 2.75 9a.75.75 0 0 0-1.5 0c0 4.316 3.436 6.513 6.645 6.968c1.612.228 3.27.042 4.558-.584c.868-.422 1.596-1.065 1.988-1.921c.142.741.162 1.578.041 2.432c-.395 2.79-2.198 5.355-5.482 5.355a.75.75 0 0 0 0 1.5c4.316 0 6.513-3.436 6.968-6.645c.228-1.612.042-3.27-.584-4.558c-.346-.712-.84-1.33-1.48-1.745a7.7 7.7 0 0 1 1.99.027c2.792.396 5.356 2.198 5.356 5.483a.75.75 0 0 0 1.5 0c0-4.316-3.436-6.513-6.645-6.968c-1.612-.228-3.27-.043-4.558.584c-.692.336-1.294.812-1.709 1.425" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class SolarBlackHoleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothBoldIcon],svg[solar-bluetooth-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.743 15.158l-4.441-3.154l.006-.004l-.007-.005l4.442-3.154c.54-.383 1.012-.718 1.341-1.033c.351-.336.666-.765.666-1.35s-.315-1.014-.666-1.349c-.33-.315-.801-.65-1.341-1.034L14.91 2.774c-.73-.518-1.346-.956-1.857-1.216c-.52-.266-1.155-.465-1.79-.14c-.637.325-.844.959-.93 1.535c-.083.566-.083 1.319-.083 2.21v5.397L6.43 7.886a.75.75 0 1 0-.86 1.228L9.692 12L5.57 14.886a.75.75 0 0 0 .86 1.229l3.82-2.674v5.396c0 .89 0 1.643.084 2.209c.085.577.292 1.21.93 1.536c.634.325 1.27.125 1.79-.14c.51-.261 1.126-.698 1.856-1.216l1.832-1.302c.54-.384 1.013-.719 1.342-1.034c.351-.335.666-.764.666-1.35c0-.584-.315-1.013-.666-1.348c-.33-.316-.801-.65-1.341-1.034"></svg:path>`,
})
export class SolarBluetoothBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothBoldDuotoneIcon],svg[solar-bluetooth-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.302 12.004l4.44 3.154c.54.383 1.013.718 1.342 1.034c.351.335.666.764.666 1.349s-.315 1.014-.666 1.35c-.33.314-.801.65-1.341 1.033l-1.833 1.302c-.73.518-1.346.955-1.857 1.216c-.52.265-1.155.465-1.79.14c-.637-.326-.844-.96-.93-1.536c-.083-.566-.083-1.319-.083-2.21V5.164c0-.891 0-1.644.084-2.21c.085-.576.292-1.21.929-1.535c.635-.325 1.27-.126 1.79.14c.511.26 1.127.698 1.857 1.216l1.833 1.301c.54.384 1.012.719 1.341 1.034c.351.335.666.764.666 1.35c0 .584-.315 1.013-.666 1.349c-.33.315-.801.65-1.341 1.033L12.3 11.995l.007.005z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10.25 10.56L6.43 7.886a.75.75 0 1 0-.86 1.228L9.692 12L5.57 14.886a.75.75 0 0 0 .86 1.229l3.82-2.674z" opacity=".5"></svg:path>`,
})
export class SolarBluetoothBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothBrokenIcon],svg[solar-bluetooth-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.263 4.655C17.421 5.477 18 5.888 18 6.46c0 .57-.579.981-1.737 1.803L11 12V5.225c0-1.887 0-2.83.605-3.14c.362-.185.784-.062 1.395.3"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="m16.263 19.345l-1.738 1.234c-1.544 1.096-2.316 1.645-2.92 1.335C11 21.605 11 20.662 11 18.775V12l5.263 3.738C17.421 16.56 18 16.97 18 17.54s-.579.982-1.737 1.804Z"></svg:path><svg:path fill="currentColor" d="M5.57 14.886a.75.75 0 1 0 .86 1.228zm.86 1.228l5-3.5l-.86-1.228l-5 3.5z"></svg:path><svg:path fill="currentColor" d="M5.57 9.114a.75.75 0 0 1 .86-1.228zm.86-1.228l5 3.5l-.86 1.228l-5-3.5z"></svg:path></svg:g>`,
})
export class SolarBluetoothBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothCircleBoldIcon],svg[solar-bluetooth-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.75 16.376v-2.874l2 1.504c.135.102.243.184.333.255l.026.021l-.026.02c-.09.073-.198.154-.334.256l-1.454 1.094c-.227.171-.4.3-.539.397c-.005-.17-.006-.387-.006-.673m-.34.881h.004zm.388.193l-.001-.003zm-.048-9.827v2.874l2-1.504c.135-.102.243-.183.333-.255l.026-.02l-.026-.021a17 17 0 0 0-.334-.256l-1.454-1.094c-.227-.17-.4-.3-.539-.397c-.005.17-.006.387-.006.673m.047-1.07l.001-.004v.001z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.155-15.883c-.345-.26-.668-.502-.945-.653c-.283-.155-.75-.343-1.245-.095c-.493.248-.623.734-.67 1.053c-.045.312-.045.717-.045 1.15v2.827L8.48 8.924a.75.75 0 0 0-.96 1.152L9.828 12L7.52 13.924a.75.75 0 1 0 .96 1.152l1.77-1.475v2.827c0 .432 0 .837.046 1.15c.046.319.176.805.67 1.052c.494.248.96.06 1.244-.094c.277-.151.6-.394.945-.654l1.53-1.151c.237-.178.475-.357.648-.531c.194-.196.417-.494.417-.918c0-.423-.223-.722-.417-.918a6 6 0 0 0-.648-.53L12.248 12l2.437-1.834c.237-.178.475-.357.648-.53c.194-.197.417-.495.417-.919c0-.423-.223-.722-.417-.917a6 6 0 0 0-.648-.531z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBluetoothCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothCircleBoldDuotoneIcon],svg[solar-bluetooth-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="m11.414 17.256l-.004.001zm.383.191l.001.004zm0-10.894l.001-.004v.001z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.21 5.464c.277.15.6.394.945.653l1.53 1.152c.237.177.475.357.648.53c.194.196.417.495.417.918s-.223.722-.417.918a6 6 0 0 1-.648.531L12.248 12l2.437 1.834c.237.177.475.356.648.53c.194.196.417.495.417.918s-.223.722-.417.918a6 6 0 0 1-.648.53l-1.53 1.152c-.345.26-.668.503-.945.654c-.283.154-.75.342-1.245.094c-.493-.247-.623-.733-.67-1.052c-.045-.313-.045-.718-.045-1.15V13.6l-1.77 1.475a.75.75 0 1 1-.96-1.152L9.828 12L7.52 10.076a.75.75 0 1 1 .96-1.152l1.77 1.475V7.572c0-.433 0-.838.046-1.15c.046-.32.176-.805.67-1.053s.96-.06 1.244.095m-.46 10.912v-2.874l2 1.504c.135.102.243.184.333.255l.026.021l-.026.02c-.09.073-.198.154-.334.256l-1.454 1.094c-.227.171-.4.3-.539.397c-.005-.17-.006-.387-.006-.673m-.336.88l-.004.001zm.383.19l.001.005zm-.047-9.823v2.874l2-1.504c.135-.102.243-.183.333-.255l.026-.02l-.026-.021a17 17 0 0 0-.334-.256l-1.454-1.094c-.227-.17-.4-.3-.539-.397c-.005.17-.006.387-.006.673m.047-1.07l.001-.004v.001z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBluetoothCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothCircleBrokenIcon],svg[solar-bluetooth-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M14.2 9.593L11 12V7.623c0-.954 0-1.432.302-1.583c.301-.151.682.135 1.444.708L14.2 7.842c.533.401.8.602.8.876c0 .273-.267.474-.8.875Zm0 6.565l-1.454 1.094c-.762.573-1.143.86-1.444.708C11 17.809 11 17.331 11 16.377V12l3.2 2.407c.533.401.8.602.8.875c0 .274-.267.475-.8.876Z"></svg:path><svg:path fill="currentColor" d="M8.48 8.924a.75.75 0 1 0-.96 1.152zm3 2.5l-3-2.5l-.96 1.152l3 2.5z"></svg:path><svg:path fill="currentColor" d="M8.48 15.076a.75.75 0 0 1-.96-1.152zm3-2.5l-3 2.5l-.96-1.152l3-2.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarBluetoothCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothCircleLineDuotoneIcon],svg[solar-bluetooth-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m11 12l3.2-2.407c.533-.401.8-.602.8-.875c0-.274-.267-.475-.8-.876l-1.454-1.094c-.762-.573-1.143-.86-1.444-.708C11 6.191 11 6.669 11 7.623zm0 0v4.377c0 .954 0 1.432.302 1.583c.301.151.682-.135 1.444-.708l1.454-1.094c.533-.402.8-.602.8-.876c0-.273-.267-.474-.8-.875zm0 0L8 9.5m3 2.5l-3 2.5" opacity=".5"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class SolarBluetoothCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothCircleLinearIcon],svg[solar-bluetooth-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M14.2 9.593L11 12V7.623c0-.954 0-1.432.302-1.583c.301-.151.682.135 1.444.708L14.2 7.842c.533.401.8.602.8.876c0 .273-.267.474-.8.875Zm0 6.565l-1.454 1.094c-.762.573-1.143.86-1.444.708C11 17.809 11 17.331 11 16.377V12l3.2 2.407c.533.401.8.602.8.875c0 .274-.267.475-.8.876Z"></svg:path><svg:path fill="currentColor" d="M8.48 8.924a.75.75 0 1 0-.96 1.152zm3 2.5l-3-2.5l-.96 1.152l3 2.5z"></svg:path><svg:path fill="currentColor" d="M8.48 15.076a.75.75 0 0 1-.96-1.152zm3-2.5l-3 2.5l-.96-1.152l3-2.5z"></svg:path><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></svg:circle></svg:g>`,
})
export class SolarBluetoothCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothCircleOutlineIcon],svg[solar-bluetooth-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m11.905-5.882l.041.03l1.455 1.095l.034.026c.237.178.475.357.648.53c.194.197.417.495.417.919c0 .423-.223.721-.417.917a6 6 0 0 1-.648.531l-.034.026L12.248 12l2.403 1.808l.034.026c.237.177.475.357.648.53c.194.196.417.495.417.918s-.223.722-.417.918a6 6 0 0 1-.648.531l-.034.026l-1.455 1.094l-.041.031c-.345.26-.668.503-.945.654c-.283.154-.75.342-1.245.094c-.493-.247-.623-.733-.67-1.052c-.045-.312-.045-.717-.045-1.15v-2.827l-1.77 1.475a.75.75 0 0 1-.96-1.152L9.828 12L7.52 10.076a.75.75 0 0 1 .96-1.152l1.77 1.475V7.572c0-.433 0-.838.046-1.15c.046-.32.176-.805.67-1.052c.494-.248.96-.06 1.244.094c.277.151.6.394.945.654m-1.405 7.385v2.874c0 .286 0 .503.006.673c.138-.097.312-.227.539-.398l1.454-1.094a17 17 0 0 0 .36-.276l-.026-.02c-.09-.072-.198-.153-.334-.255zm-.34 3.755l.004-.002zm.387.189l.001.004zm-.047-6.95V7.623c0-.286 0-.503.006-.673c.138.097.312.227.539.397l1.454 1.095a16 16 0 0 1 .36.276a9 9 0 0 1-.36.276zm.048-3.948l-.001.004zm-.384.195" clip-rule="evenodd"></svg:path>`,
})
export class SolarBluetoothCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothLineDuotoneIcon],svg[solar-bluetooth-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16.263 8.262L11 12V5.225c0-1.887 0-2.83.605-3.14c.604-.309 1.376.24 2.92 1.336l1.738 1.234C17.421 5.477 18 5.888 18 6.46c0 .57-.579.981-1.737 1.803Zm0 11.083l-1.738 1.234c-1.544 1.096-2.316 1.645-2.92 1.335C11 21.605 11 20.662 11 18.775V12l5.263 3.738C17.421 16.56 18 16.97 18 17.54s-.579.982-1.737 1.804Z"></svg:path><svg:path stroke-linecap="round" d="m6 15.5l5-3.5l-5-3.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBluetoothLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothLinearIcon],svg[solar-bluetooth-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M16.263 8.262L11 12V5.225c0-1.887 0-2.83.605-3.14c.604-.309 1.376.24 2.92 1.336l1.738 1.234C17.421 5.477 18 5.888 18 6.46c0 .57-.579.981-1.737 1.803Zm0 11.083l-1.738 1.234c-1.544 1.096-2.316 1.645-2.92 1.335C11 21.605 11 20.662 11 18.775V12l5.263 3.738C17.421 16.56 18 16.97 18 17.54s-.579.982-1.737 1.804Z"></svg:path><svg:path fill="currentColor" d="M5.57 14.886a.75.75 0 1 0 .86 1.228zm.86 1.228l5-3.5l-.86-1.228l-5 3.5z"></svg:path><svg:path fill="currentColor" d="M5.57 9.114a.75.75 0 0 1 .86-1.228zm.86-1.228l5 3.5l-.86 1.228l-5-3.5z"></svg:path></svg:g>`,
})
export class SolarBluetoothLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothOutlineIcon],svg[solar-bluetooth-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m14.91 2.774l1.833 1.301c.54.384 1.012.719 1.341 1.034c.351.335.666.764.666 1.35c0 .584-.315 1.013-.666 1.349c-.33.315-.801.65-1.341 1.033L12.295 12l4.448 3.158c.54.383 1.012.718 1.341 1.034c.351.335.666.764.666 1.349s-.315 1.014-.666 1.35c-.33.314-.801.65-1.341 1.033l-1.833 1.302c-.73.518-1.345.955-1.856 1.216c-.52.265-1.156.465-1.79.14c-.638-.326-.845-.96-.93-1.536c-.084-.566-.084-1.319-.084-2.21V13.44l-3.82 2.674a.75.75 0 1 1-.86-1.229L9.692 12L5.57 9.114a.75.75 0 1 1 .86-1.229l3.82 2.674V5.163c0-.891 0-1.644.084-2.21c.085-.576.292-1.21.93-1.535c.634-.325 1.27-.126 1.79.14c.51.26 1.126.698 1.856 1.216m-3.16 10.678v5.323c0 .969.002 1.609.068 2.051c.031.214.071.327.1.383q.021.034.023.034l.005.003l.007.003q.002.002.044-.002c.064-.009.181-.043.375-.142c.4-.204.926-.575 1.72-1.138l1.737-1.234c.599-.425.978-.697 1.218-.927a1 1 0 0 0 .187-.22c.016-.029.016-.039.016-.044v-.002c0-.006 0-.016-.016-.044a1 1 0 0 0-.187-.22c-.24-.23-.62-.502-1.218-.927zm0-2.905V5.224c0-.969.002-1.609.068-2.05c.031-.215.071-.327.1-.384a.2.2 0 0 1 .023-.034l.005-.003l.007-.003a.2.2 0 0 1 .044.002c.064.01.181.043.375.142c.4.204.926.575 1.72 1.138l1.737 1.234c.599.425.978.697 1.218.927a1 1 0 0 1 .187.22c.016.029.016.039.016.044v.002c0 .006 0 .016-.016.045a1 1 0 0 1-.187.22c-.24.23-.62.501-1.218.926z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBluetoothOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothSquareBoldIcon],svg[solar-bluetooth-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.75 16v-2.5l1.733 1.3l.264.2q-.109.084-.264.2l-1.333 1q-.238.179-.397.295A29 29 0 0 1 11.75 16m.04.96v-.003zM11.75 8v2.5l1.733-1.3c.105-.078.19-.143.264-.2q-.109-.084-.264-.2l-1.333-1q-.238-.178-.397-.294c-.003.133-.003.295-.003.494"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M13.01 6.57c-.314-.236-.614-.46-.872-.6c-.264-.144-.716-.329-1.197-.088c-.481.24-.605.713-.649 1.01c-.042.29-.042.665-.042 1.058v2.449L8.48 8.924a.75.75 0 1 0-.96 1.152L9.828 12L7.52 13.924a.75.75 0 0 0 .96 1.152l1.77-1.475v2.45c0 .392 0 .766.043 1.057c.043.298.167.77.648 1.01s.933.056 1.197-.087c.258-.14.558-.365.872-.6l1.407-1.056c.215-.161.437-.327.598-.49c.183-.184.402-.473.402-.885s-.219-.7-.402-.885a6 6 0 0 0-.598-.49L12.25 12l2.167-1.625c.215-.161.437-.327.598-.49c.183-.184.402-.473.402-.885s-.219-.7-.402-.885a6 6 0 0 0-.598-.49z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBluetoothSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothSquareBoldDuotoneIcon],svg[solar-bluetooth-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" opacity=".5"></svg:path><svg:path fill="currentColor" d="m12.448 16.774l-.001-.003z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.788 6.196c.253.135.547.351.854.578L15.02 7.79c.211.155.428.315.587.471c.179.177.393.455.393.852s-.214.674-.393.852a6 6 0 0 1-.587.471L12.898 12l2.122 1.564c.211.155.428.315.587.471c.179.178.393.455.393.852s-.214.675-.393.852a6 6 0 0 1-.587.471l-1.378 1.016c-.307.227-.6.443-.854.578c-.258.138-.701.316-1.172.084c-.472-.232-.593-.686-.636-.972c-.041-.28-.041-.64-.041-1.018V13.54l-1.734 1.42a.744.744 0 0 1-1.035-.093a.713.713 0 0 1 .094-1.017L10.526 12l-2.262-1.851a.713.713 0 0 1-.094-1.017a.744.744 0 0 1 1.035-.092l1.734 1.419V8.102c0-.378 0-.738.041-1.018c.043-.286.164-.74.636-.972c.471-.231.914-.054 1.172.084m-.38 9.654v-2.406l1.698 1.25q.153.112.259.193l-.259.193l-1.306.962c-.156.115-.283.208-.39.283a27 27 0 0 1-.002-.475m.04.924l-.001-.003zm-.04-8.624v2.406l1.698-1.25q.153-.112.259-.193l-.259-.193l-1.306-.962a28 28 0 0 0-.39-.283a27 27 0 0 0-.002.475" clip-rule="evenodd"></svg:path>`,
})
export class SolarBluetoothSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothSquareBrokenIcon],svg[solar-bluetooth-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13.933 9.8L11 12V8c0-.872 0-1.309.276-1.447c.277-.138.626.124 1.324.647l1.333 1c.49.367.734.55.734.8s-.245.434-.734.8Zm0 6l-1.333 1c-.698.524-1.047.785-1.324.647C11 17.31 11 16.873 11 16v-4l2.933 2.2c.49.367.734.55.734.8s-.245.433-.734.8Z"></svg:path><svg:path fill="currentColor" d="M8.48 8.924a.75.75 0 1 0-.96 1.152zm3 2.5l-3-2.5l-.96 1.152l3 2.5z"></svg:path><svg:path fill="currentColor" d="M8.48 15.076a.75.75 0 0 1-.96-1.152zm3-2.5l-3 2.5l-.96-1.152l3-2.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarBluetoothSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothSquareLineDuotoneIcon],svg[solar-bluetooth-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="m11 12l2.933-2.2c.49-.366.734-.55.734-.8s-.245-.433-.734-.8l-1.333-1c-.698-.523-1.047-.785-1.324-.647C11 6.691 11 7.128 11 8zm0 0v4c0 .873 0 1.31.276 1.448c.277.138.626-.124 1.324-.648l1.333-1c.49-.366.734-.55.734-.8s-.245-.433-.734-.8zm0 0L8 9.5m3 2.5l-3 2.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBluetoothSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothSquareLinearIcon],svg[solar-bluetooth-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13.933 9.8L11 12V8c0-.872 0-1.309.276-1.447c.277-.138.626.124 1.324.647l1.333 1c.49.367.734.55.734.8s-.245.434-.734.8Zm0 6l-1.333 1c-.698.524-1.047.785-1.324.647C11 17.31 11 16.873 11 16v-4l2.933 2.2c.49.367.734.55.734.8s-.245.433-.734.8Z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path fill="currentColor" d="M8.48 8.924a.75.75 0 1 0-.96 1.152zm3 2.5l-3-2.5l-.96 1.152l3 2.5z"></svg:path><svg:path fill="currentColor" d="M8.48 15.076a.75.75 0 0 1-.96-1.152zm3-2.5l-3 2.5l-.96-1.152l3-2.5z"></svg:path></svg:g>`,
})
export class SolarBluetoothSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothSquareOutlineIcon],svg[solar-bluetooth-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176M13.01 6.57l.04.03l1.333 1l.034.025c.215.161.437.328.598.49c.183.184.402.473.402.885s-.219.701-.402.885a6 6 0 0 1-.598.49l-.034.025L12.25 12l2.133 1.6l.034.025c.215.161.437.328.598.49c.183.184.402.473.402.885s-.219.701-.402.885a6 6 0 0 1-.598.49l-.034.025l-1.333 1l-.04.03c-.314.236-.614.46-.872.6c-.264.144-.716.329-1.197.088c-.481-.24-.605-.712-.649-1.01c-.042-.29-.042-.665-.042-1.058v-2.449l-1.77 1.475a.75.75 0 0 1-.96-1.152L9.828 12L7.52 10.076a.75.75 0 0 1 .96-1.152l1.77 1.475V7.95c0-.393 0-.767.043-1.058c.043-.297.167-.77.648-1.01s.933-.056 1.197.087c.258.14.558.365.872.6m-1.26 6.93V16c0 .2 0 .361.003.494c.108-.078.237-.174.397-.294l1.333-1c.105-.078.19-.143.264-.2q-.109-.084-.264-.2zm0-3V8c0-.2 0-.361.003-.494c.108.077.237.174.397.294l1.333 1c.105.078.19.143.264.2q-.109.084-.264.2z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBluetoothSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothWaveBoldIcon],svg[solar-bluetooth-wave-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.51 12.004l4.099 2.934c.498.356.934.668 1.238.961c.324.312.614.711.614 1.255s-.29.944-.614 1.256c-.304.293-.74.604-1.239.961l-1.691 1.21c-.674.483-1.242.89-1.714 1.132c-.48.247-1.066.433-1.652.13c-.588-.303-.78-.892-.858-1.428c-.078-.526-.078-1.227-.078-2.055v-5.02L4.09 15.828a.69.69 0 0 1-.964-.172a.7.7 0 0 1 .17-.972L7.101 12L3.295 9.316a.7.7 0 0 1-.17-.971a.69.69 0 0 1 .964-.172l3.526 2.488V5.64c0-.83 0-1.53.078-2.056c.079-.536.27-1.125.858-1.428c.586-.303 1.172-.117 1.652.13c.472.242 1.04.65 1.714 1.131l1.691 1.21c.5.358.935.67 1.239.962c.324.313.614.712.614 1.256s-.29.943-.614 1.255c-.304.293-.74.605-1.239.961l-4.1 2.934l.007.004zm8.474-7.02a.69.69 0 0 1 .979.024l.001.001l.001.002l.004.003l.008.01a2 2 0 0 1 .1.117q.095.114.244.33c.196.288.448.712.697 1.284C20.518 7.9 21 9.623 21 12s-.482 4.1-.982 5.246a8 8 0 0 1-.697 1.284a5 5 0 0 1-.344.448l-.008.009l-.004.003l-.001.002l-.479-.458l.478.459a.69.69 0 0 1-.979.024a.7.7 0 0 1-.027-.983l.006-.007l.042-.05a4 4 0 0 0 .174-.236c.15-.221.36-.57.572-1.056c.423-.971.864-2.504.864-4.685s-.44-3.713-.864-4.684a6.5 6.5 0 0 0-.572-1.056a4 4 0 0 0-.215-.286l-.007-.007a.7.7 0 0 1 .027-.983"></svg:path><svg:path fill="currentColor" d="M16.306 7.656a.69.69 0 0 1 .929.312v.001l.001.002l.003.006l.01.02a7 7 0 0 1 .147.328c.093.218.215.527.338.897c.242.732.497 1.743.497 2.779s-.255 2.046-.497 2.778a12 12 0 0 1-.485 1.225l-.01.02l-.003.006v.002l-.001.001a.69.69 0 0 1-.93.312a.7.7 0 0 1-.309-.935l.001-.002l.006-.012a5 5 0 0 0 .12-.27c.08-.188.189-.46.297-.788c.22-.663.426-1.513.426-2.337s-.206-1.675-.426-2.338a10 10 0 0 0-.417-1.058l-.006-.012v-.001a.7.7 0 0 1 .309-.936"></svg:path>`,
})
export class SolarBluetoothWaveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothWaveBoldDuotoneIcon],svg[solar-bluetooth-wave-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.51 12.004l4.099 2.934c.498.356.934.668 1.238.961c.324.312.614.711.614 1.255s-.29.944-.614 1.256c-.304.293-.74.604-1.239.961l-1.691 1.21c-.674.483-1.242.89-1.714 1.132c-.48.247-1.066.433-1.652.13c-.588-.303-.78-.892-.858-1.428c-.078-.526-.078-1.227-.078-2.055v-5.02L4.09 15.828a.69.69 0 0 1-.964-.172a.7.7 0 0 1 .17-.972L7.101 12L3.295 9.316a.7.7 0 0 1-.17-.971a.69.69 0 0 1 .964-.172l3.526 2.488V5.64c0-.83 0-1.53.078-2.056c.079-.536.27-1.125.858-1.428c.586-.303 1.172-.117 1.652.13c.472.242 1.04.65 1.714 1.131l1.691 1.21c.5.358.935.67 1.239.962c.324.313.614.712.614 1.256s-.29.943-.614 1.255c-.304.293-.74.605-1.239.961l-4.1 2.934l.007.004z"></svg:path><svg:path fill="currentColor" d="M17.984 4.983a.69.69 0 0 1 .979.025l.002.002l.003.004l.009.009a2 2 0 0 1 .1.117c.062.077.146.187.244.33c.196.288.448.713.697 1.284C20.518 7.9 21 9.623 21 12s-.482 4.1-.982 5.246c-.25.57-.501.995-.697 1.283a5 5 0 0 1-.344.448l-.009.01l-.003.003l-.001.001s-.001.001-.48-.457l.479.458a.69.69 0 0 1-.98.024a.7.7 0 0 1-.026-.982l.006-.008l.041-.049q.061-.071.175-.237c.15-.22.36-.57.572-1.056c.423-.97.864-2.503.864-4.684s-.44-3.713-.864-4.684a6.5 6.5 0 0 0-.572-1.056a4 4 0 0 0-.216-.286l-.006-.008a.7.7 0 0 1 .027-.983" opacity=".4"></svg:path><svg:path fill="currentColor" d="M16.306 7.656a.69.69 0 0 1 .928.312l.001.001l.001.002l.003.006l.01.02l.033.071q.043.092.114.257c.092.218.215.527.338.897c.242.732.497 1.743.497 2.779s-.255 2.046-.497 2.778a12 12 0 0 1-.485 1.225l-.01.02l-.003.006v.002l-.001.001a.69.69 0 0 1-.93.312a.7.7 0 0 1-.31-.935l.002-.002l.006-.012a5 5 0 0 0 .12-.27c.08-.188.189-.46.297-.788c.22-.663.426-1.513.426-2.337s-.207-1.675-.426-2.338a10 10 0 0 0-.418-1.058l-.005-.012l-.001-.001a.7.7 0 0 1 .31-.936" opacity=".7"></svg:path>`,
})
export class SolarBluetoothWaveBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothWaveBrokenIcon],svg[solar-bluetooth-wave-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13.263 4.655C14.421 5.477 15 5.888 15 6.46c0 .57-.579.981-1.737 1.803L8 12V5.225c0-1.887 0-2.83.605-3.14c.362-.185.783-.062 1.395.3"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="m13.263 19.345l-1.738 1.234c-1.544 1.096-2.316 1.645-2.92 1.335C8 21.605 8 20.662 8 18.775V12l5.263 3.738C14.421 16.56 15 16.97 15 17.54s-.579.982-1.737 1.804Z"></svg:path><svg:path fill="currentColor" d="M2.57 14.886a.75.75 0 1 0 .86 1.228zm.86 1.228l5-3.5l-.86-1.228l-5 3.5z"></svg:path><svg:path fill="currentColor" d="M2.57 9.114a.75.75 0 0 1 .86-1.228zm.86-1.228l5 3.5l-.86 1.228l-5-3.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 5s2 2.1 2 7c0 .728-.044 1.394-.12 2M19 19s.304-.32.675-1M17 8s1 1.9 1 4s-1 4-1 4"></svg:path></svg:g>`,
})
export class SolarBluetoothWaveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothWaveLineDuotoneIcon],svg[solar-bluetooth-wave-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M13.263 8.262L8 12V5.225c0-1.887 0-2.83.605-3.14c.604-.309 1.376.24 2.92 1.336l1.738 1.234C14.421 5.477 15 5.888 15 6.46c0 .57-.579.981-1.737 1.803Zm0 11.083l-1.738 1.234c-1.544 1.096-2.316 1.645-2.92 1.335C8 21.605 8 20.662 8 18.775V12l5.263 3.738C14.421 16.56 15 16.97 15 17.54s-.579.982-1.737 1.804Z"></svg:path><svg:path stroke-linecap="round" d="M3 15.5L8 12L3 8.5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M19 5s2 2.1 2 7s-2 7-2 7" opacity=".7"></svg:path><svg:path stroke-linecap="round" d="M17 8s1 1.9 1 4s-1 4-1 4" opacity=".4"></svg:path></svg:g>`,
})
export class SolarBluetoothWaveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothWaveLinearIcon],svg[solar-bluetooth-wave-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13.263 8.262L8 12V5.225c0-1.887 0-2.83.605-3.14c.604-.309 1.376.24 2.92 1.336l1.738 1.234C14.421 5.477 15 5.888 15 6.46c0 .57-.579.981-1.737 1.803Zm0 11.083l-1.738 1.234c-1.544 1.096-2.316 1.645-2.92 1.335C8 21.605 8 20.662 8 18.775V12l5.263 3.738C14.421 16.56 15 16.97 15 17.54s-.579.982-1.737 1.804Z"></svg:path><svg:path fill="currentColor" d="M2.57 14.886a.75.75 0 1 0 .86 1.228zm.86 1.228l5-3.5l-.86-1.228l-5 3.5z"></svg:path><svg:path fill="currentColor" d="M2.57 9.114a.75.75 0 0 1 .86-1.228zm.86-1.228l5 3.5l-.86 1.228l-5-3.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 5s2 2.1 2 7s-2 7-2 7M17 8s1 1.9 1 4s-1 4-1 4"></svg:path></svg:g>`,
})
export class SolarBluetoothWaveLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothWaveOutlineIcon],svg[solar-bluetooth-wave-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m11.91 2.774l1.833 1.301c.54.384 1.012.719 1.341 1.034c.351.335.666.764.666 1.35c0 .584-.315 1.013-.666 1.349c-.33.315-.801.65-1.341 1.033L9.295 12l4.448 3.158c.54.383 1.012.718 1.341 1.034c.351.335.666.764.666 1.349s-.315 1.014-.666 1.35c-.33.314-.801.65-1.341 1.033l-1.833 1.302c-.73.518-1.345.955-1.856 1.216c-.52.265-1.156.465-1.79.14c-.638-.326-.845-.96-.93-1.536c-.084-.566-.084-1.319-.084-2.21V13.44l-3.82 2.674a.75.75 0 1 1-.86-1.229L6.692 12L2.57 9.114a.75.75 0 1 1 .86-1.229l3.82 2.674V5.163c0-.891 0-1.644.084-2.21c.085-.576.292-1.21.93-1.535c.634-.325 1.27-.126 1.79.14c.51.26 1.126.698 1.856 1.216M8.75 13.452v5.323c0 .969.002 1.609.068 2.051c.031.214.071.327.1.383q.022.035.023.034l.005.003l.007.003q.002.002.044-.002c.064-.009.181-.043.375-.142c.4-.204.926-.575 1.72-1.138l1.737-1.234c.599-.425.978-.697 1.218-.927a1 1 0 0 0 .187-.22c.016-.029.016-.039.016-.044v-.002c0-.006 0-.016-.016-.044a1 1 0 0 0-.187-.22c-.24-.23-.62-.502-1.218-.927zm0-2.905V5.224c0-.969.002-1.609.068-2.05c.031-.215.071-.327.1-.384a.2.2 0 0 1 .023-.034l.005-.003l.007-.003a.2.2 0 0 1 .044.002c.064.01.181.043.375.142c.4.204.926.575 1.72 1.138l1.737 1.234c.599.425.978.697 1.218.927a1 1 0 0 1 .187.22c.016.029.016.039.016.044v.002c0 .006 0 .016-.016.045a1 1 0 0 1-.187.22c-.24.23-.62.501-1.218.926zm9.733-6.09a.75.75 0 0 1 1.06.025l-.518.494l.518-.494l.001.002l.002.001l.003.004l.01.01l.025.029q.032.035.083.097c.067.083.158.2.264.355c.212.31.486.766.756 1.38c.54 1.232 1.063 3.084 1.063 5.64s-.522 4.408-1.063 5.639a8.5 8.5 0 0 1-.756 1.38a5 5 0 0 1-.373.482l-.009.01l-.003.003l-.002.002l-.52-.493l.52.494a.75.75 0 0 1-1.09-1.03l.002-.003h-.001l-.002.002l.008-.008l.044-.053a4 4 0 0 0 .189-.254c.163-.238.39-.613.62-1.136c.458-1.043.936-2.69.936-5.035s-.478-3.992-.936-5.036a7 7 0 0 0-.62-1.136a4 4 0 0 0-.233-.307l-.007-.008l.001.002m.028-1.059a.75.75 0 0 0-.03 1.057zm-1.832 2.88a.75.75 0 0 1 1.013.314L17 8l.664-.35v.002l.002.002l.003.007l.011.021a7 7 0 0 1 .162.343c.101.228.235.552.368.946c.265.782.54 1.867.54 3.029c0 1.16-.275 2.247-.54 3.028a11 11 0 0 1-.493 1.215l-.037.074l-.01.022l-.004.006l-.001.002l-.001.002l-.664-.35l.664.35a.75.75 0 0 1-1.328-.698m0 0l.007-.013l.026-.053q.037-.074.102-.22a10 10 0 0 0 .319-.819c.235-.693.46-1.608.46-2.546c0-.94-.225-1.853-.46-2.547a10 10 0 0 0-.447-1.092l-.006-.011v-.001a.75.75 0 0 1 .314-1.013" clip-rule="evenodd"></svg:path>`,
})
export class SolarBluetoothWaveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyBoldIcon],svg[solar-body-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.062 22h-.124c-.76 0-1.139 0-1.469-.15c-.33-.149-.567-.428-1.041-.986l-2.382-2.803c-.465-.547-.697-.82-.818-1.145c-.12-.324-.12-.675-.12-1.376v-5.263c0-.685 0-1.027-.148-1.328c-.147-.301-.423-.524-.975-.97l-.208-.167C3.595 6.858 3.004 6.38 3 5.69s.52-1.124 1.568-1.99q.24-.2.468-.364c.573-.41 1.402-.863 1.986-1.166a1.58 1.58 0 0 1 1.394-.016l.264.124q.106.05.171.142c1.498 2.116 4.8 2.116 6.298 0a.44.44 0 0 1 .171-.142l.264-.124a1.58 1.58 0 0 1 1.394.016c.584.303 1.413.756 1.986 1.166q.23.166.468.363C20.48 4.566 21.004 5 21 5.69s-.596 1.168-1.777 2.122l-.208.167c-.552.446-.828.669-.975.97s-.147.643-.147 1.328v5.263c0 .701 0 1.052-.121 1.376c-.12.324-.353.598-.818 1.145l-2.382 2.803c-.474.558-.711.837-1.041.987c-.33.149-.71.149-1.469.149"></svg:path>`,
})
export class SolarBodyBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyBoldDuotoneIcon],svg[solar-body-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.046 18.061l2.382 2.803l6.156-18.71l-.264.124a.44.44 0 0 0-.171.142c-1.498 2.116-4.8 2.116-6.298 0a.44.44 0 0 0-.171-.142l-.264-.124a1.58 1.58 0 0 0-1.394.016c-.584.303-1.413.756-1.986 1.166a9 9 0 0 0-.468.363C3.52 4.566 2.996 5 3 5.69s.595 1.168 1.777 2.122l.208.167c.552.446.828.669.975.97s.147.643.147 1.328v5.263c0 .701 0 1.052.121 1.376c.12.324.353.598.818 1.145" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.938 22h.124c.76 0 1.139 0 1.469-.15c.33-.149.567-.428 1.041-.986l2.382-2.803c.465-.547.697-.82.818-1.145c.12-.324.12-.675.12-1.376v-5.263c0-.685 0-1.027.148-1.328c.147-.301.423-.524.975-.97l.207-.167C20.405 6.858 20.996 6.38 21 5.69s-.52-1.124-1.568-1.99a9 9 0 0 0-.468-.364c-.573-.41-1.402-.863-1.986-1.166a1.58 1.58 0 0 0-1.394-.016l-6.156 18.71c.474.558.711.837 1.041.987c.33.149.71.149 1.469.149" opacity=".5"></svg:path>`,
})
export class SolarBodyBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyBrokenIcon],svg[solar-body-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17.893 14v1.54c0 .701 0 1.052-.121 1.376c-.12.324-.353.598-.818 1.145l-2.382 2.803c-.474.558-.711.837-1.041.987c-.33.149-.71.149-1.469.149h-.124c-.76 0-1.139 0-1.469-.15c-.33-.149-.567-.428-1.041-.986l-2.382-2.803c-.465-.547-.697-.82-.818-1.145c-.12-.324-.12-.675-.12-1.376v-5.263c0-.685 0-1.027-.148-1.328c-.147-.301-.423-.524-.975-.97l-.208-.167C3.595 6.858 3.004 6.38 3 5.69s.52-1.124 1.568-1.99q.24-.2.468-.364c.573-.41 1.402-.863 1.986-1.166a1.58 1.58 0 0 1 1.394-.016l.264.124q.106.05.171.142c1.498 2.116 4.8 2.116 6.298 0a.44.44 0 0 1 .171-.142l.264-.124a1.58 1.58 0 0 1 1.394.016c.584.303 1.413.756 1.986 1.166q.23.166.468.363C20.48 4.566 21.004 5 21 5.69s-.596 1.168-1.777 2.122l-.208.167c-.552.446-.828.669-.975.97c-.126.257-.144.545-.147 1.051"></svg:path>`,
})
export class SolarBodyBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyLineDuotoneIcon],svg[solar-body-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12.062 22h-.124c-.76 0-1.139 0-1.469-.15c-.33-.149-.567-.428-1.041-.986l-2.382-2.803c-.465-.547-.697-.82-.818-1.145c-.12-.324-.12-.675-.12-1.376v-5.263c0-.685 0-1.027-.148-1.328c-.147-.301-.423-.524-.975-.97l-.208-.167C3.595 6.858 3.004 6.38 3 5.69s.52-1.124 1.568-1.99q.24-.2.468-.364c.573-.41 1.402-.863 1.986-1.166a1.58 1.58 0 0 1 1.394-.016l.264.124q.106.05.171.142c1.498 2.116 4.8 2.116 6.298 0a.44.44 0 0 1 .171-.142l.264-.124a1.58 1.58 0 0 1 1.394.016c.584.303 1.413.756 1.986 1.166q.23.166.468.363C20.48 4.566 21.004 5 21 5.69s-.596 1.168-1.777 2.122l-.208.167c-.552.446-.828.669-.975.97s-.147.643-.147 1.328v5.263c0 .701 0 1.052-.121 1.376c-.12.324-.353.598-.818 1.145l-2.382 2.803c-.474.558-.711.837-1.041.987c-.33.149-.71.149-1.469.149Z"></svg:path>`,
})
export class SolarBodyLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyLinearIcon],svg[solar-body-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12.062 22h-.124c-.76 0-1.139 0-1.469-.15c-.33-.149-.567-.428-1.041-.986l-2.382-2.803c-.465-.547-.697-.82-.818-1.145c-.12-.324-.12-.675-.12-1.376v-5.263c0-.685 0-1.027-.148-1.328c-.147-.301-.423-.524-.975-.97l-.208-.167C3.595 6.858 3.004 6.38 3 5.69s.52-1.124 1.568-1.99q.24-.2.468-.364c.573-.41 1.402-.863 1.986-1.166a1.58 1.58 0 0 1 1.394-.016l.264.124q.106.05.171.142c1.498 2.116 4.8 2.116 6.298 0a.44.44 0 0 1 .171-.142l.264-.124a1.58 1.58 0 0 1 1.394.016c.584.303 1.413.756 1.986 1.166q.23.166.468.363C20.48 4.566 21.004 5 21 5.69s-.596 1.168-1.777 2.122l-.208.167c-.552.446-.828.669-.975.97s-.147.643-.147 1.328v5.263c0 .701 0 1.052-.121 1.376c-.12.324-.353.598-.818 1.145l-2.382 2.803c-.474.558-.711.837-1.041.987c-.33.149-.71.149-1.469.149Z"></svg:path>`,
})
export class SolarBodyLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyOutlineIcon],svg[solar-body-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.677 1.504a2.33 2.33 0 0 1 2.059-.029l.263.124c.183.086.344.218.464.388c1.2 1.693 3.875 1.693 5.074 0l.612.433l.04.028m-.04-.028l-.612-.433c.12-.17.28-.302.463-.388l.264-.124a2.33 2.33 0 0 1 2.059.03c.586.303 1.458.777 2.078 1.222q.255.184.509.394l.044.037c.486.402.921.762 1.225 1.113c.34.395.575.845.571 1.424c-.004.6-.278 1.062-.643 1.463c-.335.367-.816.755-1.37 1.202l-.25.203c-.61.491-.717.6-.773.715c-.054.109-.071.243-.071 1v5.367c0 .598 0 1.079-.168 1.533c-.168.45-.483.82-.88 1.287l-.07.082l-2.381 2.803l-.078.09c-.396.469-.739.873-1.226 1.094c-.481.218-1.018.217-1.654.216h-.372c-.636.001-1.173.002-1.654-.216c-.487-.22-.83-.625-1.227-1.093l-.077-.091l-2.381-2.803l-.07-.082c-.397-.467-.712-.837-.88-1.287c-.169-.454-.168-.935-.168-1.533v-5.368c0-.756-.017-.89-.07-1c-.057-.115-.165-.223-.773-.714l-.208-.168l-.043-.035c-.554-.446-1.035-.835-1.37-1.202c-.365-.4-.64-.863-.643-1.463c-.004-.579.23-1.029.571-1.424c.304-.351.739-.71 1.225-1.113l.044-.037c.169-.139.34-.273.509-.394c.62-.445 1.492-.92 2.078-1.223m1.42 1.328a.83.83 0 0 0-.73.004c-.582.302-1.37.733-1.894 1.11a8 8 0 0 0-.427.331c-.544.45-.878.73-1.089.974c-.182.211-.208.323-.207.435c0 .09.024.212.251.461c.249.272.637.589 1.247 1.081l.208.168l.095.076c.457.368.86.693 1.083 1.148c.225.46.224.973.223 1.54v5.38c0 .755.011.946.074 1.114c.064.172.187.333.687.922l2.381 2.802c.519.61.638.725.78.79c.147.066.33.082 1.159.082h.124c.828 0 1.012-.016 1.16-.083c.141-.064.26-.179.779-.789l2.381-2.802c.5-.59.623-.75.687-.922c.063-.168.074-.36.074-1.114v-5.38c-.001-.566-.002-1.078.223-1.54c.222-.454.626-.78 1.083-1.147l.095-.076l.207-.168c.61-.492 1-.809 1.248-1.08c.227-.25.25-.371.251-.462c0-.112-.025-.224-.207-.435c-.21-.244-.545-.523-1.09-.974a8 8 0 0 0-.426-.331c-.525-.377-1.312-.808-1.894-1.11a.83.83 0 0 0-.73-.004l-.192.09c-1.802 2.446-5.62 2.446-7.422 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBodyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyShapeBoldIcon],svg[solar-body-shape-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.836 17.462c-.443-1.046-1.022-1.999-1.536-2.844a43 43 0 0 1-.518-.868H4.218a43 43 0 0 1-.518.868c-.514.845-1.093 1.798-1.536 2.844A11.4 11.4 0 0 0 1.25 22a.75.75 0 0 0 1.5 0c0-1.49.29-2.695.709-3.744c5.394.147 7.46 2.871 7.83 3.981a.75.75 0 0 0 1.422 0c.37-1.11 2.436-3.834 7.83-3.98A9.9 9.9 0 0 1 21.25 22a.75.75 0 0 0 1.5 0c0-1.815-.38-3.28-.914-4.538M4.69 1.706a.75.75 0 1 0-1.38.589v.001l.004.009l.016.036l.06.148a32 32 0 0 1 .892 2.557c.493 1.633.968 3.694.968 5.526a4.9 4.9 0 0 1-.308 1.678h14.116a4.9 4.9 0 0 1-.308-1.678c0-1.832.475-3.893.968-5.526a32 32 0 0 1 .892-2.557l.06-.148l.015-.036l.004-.009v-.002a.75.75 0 1 0-1.38-.587S19.31 1.706 20 2l-.69-.293l-.002.004l-.005.012l-.018.043l-.067.163a34 34 0 0 0-.936 2.684c-.481 1.595-.977 3.678-1.028 5.637H6.746c-.05-1.96-.547-4.042-1.028-5.637a34 34 0 0 0-.936-2.684l-.067-.163l-.018-.043l-.005-.012l-.001-.003z"></svg:path>`,
})
export class SolarBodyShapeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyShapeBoldDuotoneIcon],svg[solar-body-shape-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.836 17.462c-.443-1.047-1.022-2-1.536-2.844c-.184-.304-.36-.593-.518-.868H4.218c-.158.275-.334.564-.518.867c-.514.846-1.093 1.798-1.536 2.845A11.4 11.4 0 0 0 1.25 22a.75.75 0 0 0 1.5 0c0-1.49.29-2.696.709-3.744c5.394.147 7.46 2.871 7.83 3.981a.75.75 0 0 0 1.422 0c.37-1.11 2.436-3.834 7.83-3.98A9.9 9.9 0 0 1 21.25 22a.75.75 0 0 0 1.5 0c0-1.816-.38-3.28-.914-4.538"></svg:path><svg:path fill="currentColor" d="M4.69 1.706a.75.75 0 1 0-1.38.589l.001.001l.004.009l.015.036l.06.148a32 32 0 0 1 .892 2.557c.493 1.633.968 3.694.968 5.526a4.9 4.9 0 0 1-.308 1.678h14.116a4.9 4.9 0 0 1-.308-1.678c0-1.832.476-3.893.968-5.526a32 32 0 0 1 .892-2.557l.06-.148l.016-.036l.003-.009l.001-.002a.75.75 0 1 0-1.38-.587L20 2l-.69-.293l-.002.004l-.005.012l-.018.043l-.067.163a34 34 0 0 0-.936 2.684c-.48 1.595-.977 3.678-1.028 5.637H6.746c-.05-1.96-.547-4.042-1.028-5.637a34 34 0 0 0-.936-2.684l-.067-.163l-.018-.043l-.005-.012l-.001-.003z" opacity=".5"></svg:path>`,
})
export class SolarBodyShapeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyShapeBrokenIcon],svg[solar-body-shape-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M20 2s-2 4.688-2 8.571c0 1.244.426 2.284 1 3.32c.66 1.193 1.517 2.38 2.146 3.863c.499 1.178.854 2.543.854 4.246M4 2s2 4.688 2 8.571c0 1.244-.426 2.284-1 3.32c-.66 1.193-1.517 2.38-2.146 3.863A10.6 10.6 0 0 0 2 22"></svg:path><svg:path d="M5.5 13H9m9 0h-5m-7-2h6m6 0h-2m-4 11c.5-1.5 3-4.5 9-4.5M12 22c-.5-1.5-3-4.5-9-4.5"></svg:path></svg:g>`,
})
export class SolarBodyShapeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyShapeLineDuotoneIcon],svg[solar-body-shape-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M20 2s-2 4.688-2 8.571c0 1.244.426 2.284 1 3.32c.66 1.193 1.517 2.38 2.146 3.863c.499 1.178.854 2.543.854 4.246M4 2s2 4.688 2 8.571c0 1.244-.426 2.284-1 3.32c-.66 1.193-1.517 2.38-2.146 3.863A10.6 10.6 0 0 0 2 22"></svg:path><svg:path d="M6 13h12M6 11h12" opacity=".5"></svg:path><svg:path d="M12 22c.5-1.5 3-4.5 9-4.5M12 22c-.5-1.5-3-4.5-9-4.5"></svg:path></svg:g>`,
})
export class SolarBodyShapeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyShapeLinearIcon],svg[solar-body-shape-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M20 2s-2 4.688-2 8.571c0 1.244.426 2.284 1 3.32c.66 1.193 1.517 2.38 2.146 3.863c.499 1.178.854 2.543.854 4.246M4 2s2 4.688 2 8.571c0 1.244-.426 2.284-1 3.32c-.66 1.193-1.517 2.38-2.146 3.863A10.6 10.6 0 0 0 2 22"></svg:path><svg:path d="M6 13h12M6 11h12m-6 11c.5-1.5 3-4.5 9-4.5M12 22c-.5-1.5-3-4.5-9-4.5"></svg:path></svg:g>`,
})
export class SolarBodyShapeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyShapeMinimalisticBoldIcon],svg[solar-body-shape-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.706 1.31a.75.75 0 0 1 .984.396v.002l.002.003l.005.012l.018.043l.067.163a34 34 0 0 1 .936 2.684c.507 1.682 1.032 3.908 1.032 5.959c0 .6-.087 1.156-.233 1.678h10.966a6.2 6.2 0 0 1-.233-1.678c0-2.051.525-4.277 1.032-5.959a34 34 0 0 1 .936-2.684l.067-.163l.018-.043l.005-.012l.001-.003v-.001a.75.75 0 0 1 1.38.587v.002l-.003.009l-.016.036l-.06.148a32 32 0 0 0-.892 2.557c-.493 1.633-.968 3.694-.968 5.526c0 1.059.358 1.967.906 2.956c.189.34.41.704.644 1.09c.514.845 1.093 1.798 1.536 2.844c.534 1.259.914 2.723.914 4.538a.75.75 0 0 1-1.5 0c0-1.49-.29-2.695-.709-3.744c-5.394.147-7.46 2.871-7.83 3.981a.75.75 0 0 1-1.422 0c-.37-1.11-2.436-3.834-7.83-3.98A9.9 9.9 0 0 0 2.75 22a.75.75 0 0 1-1.5 0c0-1.815.38-3.28.914-4.538c.443-1.046 1.022-1.999 1.536-2.844c.234-.386.456-.75.644-1.09c.548-.989.906-1.898.906-2.956c0-1.832-.475-3.893-.968-5.526A32 32 0 0 0 3.39 2.49l-.06-.148l-.016-.036l-.003-.009v-.001a.75.75 0 0 1 .395-.985"></svg:path>`,
})
export class SolarBodyShapeMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyShapeMinimalisticBoldDuotoneIcon],svg[solar-body-shape-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.706 1.31a.75.75 0 0 1 .984.396v.002l.002.003l.005.012l.018.043l.067.163a34 34 0 0 1 .936 2.684c.507 1.682 1.032 3.908 1.032 5.959c0 .6-.087 1.156-.233 1.678h10.966a6.2 6.2 0 0 1-.233-1.678c0-2.051.525-4.277 1.032-5.959a34 34 0 0 1 .936-2.684l.067-.163l.018-.043l.005-.012l.001-.003v-.001a.75.75 0 0 1 1.38.587v.002l-.003.009l-.016.036l-.06.148a32 32 0 0 0-.892 2.557c-.493 1.633-.968 3.694-.968 5.526c0 1.059.358 1.967.906 2.956c.189.34.41.704.644 1.09c.514.845 1.093 1.798 1.536 2.844c.534 1.259.914 2.723.914 4.538a.75.75 0 0 1-1.5 0c0-1.49-.29-2.695-.709-3.744c-5.394.147-7.46 2.871-7.83 3.981a.75.75 0 0 1-1.422 0c-.37-1.11-2.436-3.834-7.83-3.98A9.9 9.9 0 0 0 2.75 22a.75.75 0 0 1-1.5 0c0-1.815.38-3.28.914-4.538c.443-1.046 1.022-1.999 1.536-2.844c.234-.386.456-.75.644-1.09c.548-.989.906-1.898.906-2.956c0-1.832-.475-3.893-.968-5.526A32 32 0 0 0 3.39 2.49l-.06-.148l-.016-.036l-.003-.009v-.001a.75.75 0 0 1 .395-.985"></svg:path>`,
})
export class SolarBodyShapeMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyShapeMinimalisticBrokenIcon],svg[solar-body-shape-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M20 2s-2 4.688-2 8.571c0 1.244.426 2.284 1 3.32c.66 1.193 1.517 2.38 2.146 3.863c.499 1.178.854 2.543.854 4.246M4 2s2 4.688 2 8.571c0 1.244-.426 2.284-1 3.32c-.66 1.193-1.517 2.38-2.146 3.863A10.6 10.6 0 0 0 2 22"></svg:path><svg:path d="M6 13h5m7 0h-3m-3 9c.5-1.5 3-4.5 9-4.5M12 22c-.5-1.5-3-4.5-9-4.5"></svg:path></svg:g>`,
})
export class SolarBodyShapeMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyShapeMinimalisticLineDuotoneIcon],svg[solar-body-shape-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M20 2s-2 4.688-2 8.571c0 1.244.426 2.284 1 3.32c.66 1.193 1.517 2.38 2.146 3.863c.499 1.178.854 2.543.854 4.246M4 2s2 4.688 2 8.571c0 1.244-.426 2.284-1 3.32c-.66 1.193-1.517 2.38-2.146 3.863A10.6 10.6 0 0 0 2 22"></svg:path><svg:path d="M6 13h12" opacity=".5"></svg:path><svg:path d="M12 22c.5-1.5 3-4.5 9-4.5M12 22c-.5-1.5-3-4.5-9-4.5"></svg:path></svg:g>`,
})
export class SolarBodyShapeMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyShapeMinimalisticLinearIcon],svg[solar-body-shape-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M20 2s-2 4.688-2 8.571c0 1.244.426 2.284 1 3.32c.66 1.193 1.517 2.38 2.146 3.863c.499 1.178.854 2.543.854 4.246M4 2s2 4.688 2 8.571c0 1.244-.426 2.284-1 3.32c-.66 1.193-1.517 2.38-2.146 3.863A10.6 10.6 0 0 0 2 22"></svg:path><svg:path d="M6 13h12m-6 9c.5-1.5 3-4.5 9-4.5M12 22c-.5-1.5-3-4.5-9-4.5"></svg:path></svg:g>`,
})
export class SolarBodyShapeMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyShapeMinimalisticOutlineIcon],svg[solar-body-shape-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.706 1.31a.75.75 0 0 1 .984.396L4 2l.69-.294v.002l.002.003l.005.012l.018.043l.067.163a34 34 0 0 1 .936 2.684c.507 1.682 1.032 3.908 1.032 5.959c0 .6-.087 1.156-.233 1.678h10.966a6.2 6.2 0 0 1-.233-1.678c0-2.051.525-4.277 1.032-5.959a34 34 0 0 1 .936-2.684l.067-.163l.018-.043l.005-.012l.001-.003v-.001S19.31 1.706 20 2l-.69-.293a.75.75 0 0 1 1.38.587v.002l-.005.009l-.015.036l-.06.148a32 32 0 0 0-.892 2.557c-.493 1.633-.968 3.694-.968 5.526c0 1.059.358 1.967.906 2.956c.189.34.41.704.644 1.09c.514.845 1.093 1.798 1.536 2.844c.534 1.259.914 2.723.914 4.538a.75.75 0 0 1-1.5 0c0-1.49-.29-2.695-.709-3.744c-5.394.147-7.46 2.871-7.83 3.981a.75.75 0 0 1-1.422 0c-.37-1.11-2.436-3.834-7.83-3.98A9.9 9.9 0 0 0 2.75 22a.75.75 0 0 1-1.5 0c0-1.815.38-3.28.914-4.538c.443-1.046 1.022-1.999 1.536-2.844c.234-.386.456-.75.644-1.09c.548-.989.906-1.898.906-2.956c0-1.832-.475-3.893-.968-5.526A32 32 0 0 0 3.39 2.49l-.06-.148l-.016-.036l-.003-.009v-.001a.75.75 0 0 1 .395-.985m.455 15.478c4.21.279 6.67 2.054 7.839 3.65c1.17-1.596 3.628-3.371 7.839-3.65c-.24-.435-.491-.846-.744-1.261a35 35 0 0 1-.751-1.272a14 14 0 0 1-.269-.509L18 13.75H6l-.075-.004a14 14 0 0 1-.269.509c-.246.444-.5.86-.75 1.271c-.254.416-.505.827-.745 1.262" clip-rule="evenodd"></svg:path>`,
})
export class SolarBodyShapeMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyShapeOutlineIcon],svg[solar-body-shape-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.706 1.31a.75.75 0 0 1 .984.396L4 2l.69-.294v.002l.002.003l.005.012l.018.043l.067.163a34 34 0 0 1 .936 2.684c.481 1.595.977 3.678 1.028 5.637h10.508c.05-1.96.547-4.042 1.028-5.637a34 34 0 0 1 .936-2.684l.067-.163l.018-.043l.005-.012l.001-.003v-.001S19.31 1.706 20 2l-.69-.293a.75.75 0 0 1 1.38.587v.002l-.005.009l-.015.036l-.06.148a32 32 0 0 0-.892 2.557c-.493 1.633-.968 3.694-.968 5.526c0 1.059.358 1.967.906 2.956c.189.34.41.704.644 1.09c.514.845 1.093 1.798 1.536 2.844c.534 1.259.914 2.723.914 4.538a.75.75 0 0 1-1.5 0c0-1.49-.29-2.695-.709-3.744c-5.394.147-7.46 2.871-7.83 3.981a.75.75 0 0 1-1.422 0c-.37-1.11-2.436-3.834-7.83-3.98A9.9 9.9 0 0 0 2.75 22a.75.75 0 0 1-1.5 0c0-1.815.38-3.28.914-4.538c.443-1.046 1.022-1.999 1.536-2.844c.234-.386.456-.75.644-1.09c.548-.989.906-1.898.906-2.956c0-1.832-.475-3.893-.968-5.526A32 32 0 0 0 3.39 2.49l-.06-.148l-.016-.036l-.003-.009v-.001a.75.75 0 0 1 .395-.985m.455 15.478c4.21.279 6.67 2.054 7.839 3.65c1.17-1.596 3.628-3.371 7.839-3.65c-.24-.435-.491-.846-.744-1.261a35 35 0 0 1-.751-1.272a14 14 0 0 1-.269-.509L18 13.75H6l-.075-.004a14 14 0 0 1-.269.509c-.246.444-.5.86-.75 1.271c-.254.416-.505.827-.745 1.262m2.356-4.538h10.966a7 7 0 0 1-.119-.5H6.636q-.05.255-.118.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarBodyShapeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoltBoldIcon],svg[solar-bolt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.67 9.914l3.062-4.143c1.979-2.678 2.969-4.017 3.892-3.734s.923 1.925.923 5.21v.31c0 1.185 0 1.777.379 2.148l.02.02c.387.363 1.003.363 2.236.363c2.22 0 3.329 0 3.704.673l.018.034c.354.683-.289 1.553-1.574 3.29l-3.062 4.144c-1.98 2.678-2.969 4.017-3.892 3.734s-.923-1.925-.923-5.21v-.31c0-1.185 0-1.777-.379-2.148l-.02-.02c-.387-.363-1.003-.363-2.236-.363c-2.22 0-3.329 0-3.703-.673l-.019-.034c-.354-.683.289-1.552 1.574-3.29"></svg:path>`,
})
export class SolarBoltBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoltBoldDuotoneIcon],svg[solar-bolt-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.732 5.771L5.67 9.914c-1.285 1.739-1.928 2.608-1.574 3.291l.018.034c.375.673 1.485.673 3.704.673c1.233 0 1.85 0 2.236.363l.02.02l3.872-4.57l-.02-.02c-.379-.371-.379-.963-.379-2.148v-.31c0-3.285 0-4.927-.923-5.21s-1.913 1.056-3.892 3.734" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10.453 16.443v.31c0 3.284 0 4.927.923 5.21s1.913-1.056 3.893-3.734l3.062-4.143c1.284-1.739 1.927-2.608 1.573-3.291l-.018-.034c-.375-.673-1.485-.673-3.704-.673c-1.233 0-1.85 0-2.236-.363l-3.872 4.57c.379.371.379.963.379 2.148" opacity=".5"></svg:path>`,
})
export class SolarBoltBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoltBrokenIcon],svg[solar-bolt-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15.268 18.229c-1.98 2.678-2.969 4.017-3.892 3.734s-.923-1.925-.923-5.21v-.31c0-1.185 0-1.777-.379-2.148l-.02-.02c-.387-.363-1.003-.363-2.236-.363c-2.22 0-3.329 0-3.703-.673l-.019-.034c-.354-.683.289-1.552 1.574-3.29L8.732 5.77c1.979-2.678 2.969-4.017 3.892-3.734s.923 1.925.923 5.21v.31c0 1.185 0 1.777.379 2.148l.02.02c.387.363 1.003.363 2.236.363c2.22 0 3.329 0 3.704.673l.018.034c.354.683-.289 1.553-1.574 3.29"></svg:path>`,
})
export class SolarBoltBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoltCircleBoldIcon],svg[solar-bolt-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m-.773 6.569l-2.015 1.605c-.845.673-1.268 1.01-1.185 1.385l.004.019c.094.373.63.517 1.702.804c.595.16.893.24 1.033.465l.007.012c.135.229.058.515-.095 1.087l-.04.15c-.426 1.586-.638 2.379-.229 2.635s1.06-.262 2.363-1.3l2.015-1.604c.846-.674 1.268-1.01 1.186-1.386l-.004-.019c-.095-.373-.63-.517-1.702-.804c-.595-.16-.893-.24-1.033-.465l-.007-.012c-.135-.228-.058-.514.095-1.086l.04-.15c.425-1.586.638-2.38.229-2.636s-1.061.263-2.364 1.3" clip-rule="evenodd"></svg:path>`,
})
export class SolarBoltCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoltCircleBoldDuotoneIcon],svg[solar-bolt-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="m11.227 8.569l-2.015 1.605c-.845.673-1.268 1.01-1.185 1.385l.004.019c.094.373.63.517 1.702.804c.595.16.893.24 1.033.465l.007.012c.135.229.058.515-.095 1.087l-.04.15c-.426 1.586-.638 2.379-.229 2.635s1.06-.262 2.363-1.3l2.015-1.604c.846-.674 1.268-1.01 1.186-1.386l-.004-.019c-.095-.373-.63-.517-1.702-.804c-.595-.16-.893-.24-1.033-.465l-.007-.012c-.135-.228-.058-.514.095-1.086l.04-.15c.425-1.586.638-2.38.229-2.636s-1.061.263-2.364 1.3"></svg:path>`,
})
export class SolarBoltCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoltCircleBrokenIcon],svg[solar-bolt-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m9.213 10.174l2.015-1.605c1.302-1.037 1.953-1.556 2.363-1.3s.197 1.05-.228 2.636l-.04.15c-.154.572-.23.858-.096 1.086l.007.012c.14.226.438.306 1.033.465c1.072.287 1.608.43 1.702.804l.004.019c.083.376-.34.712-1.185 1.386l-2.015 1.604c-1.303 1.038-1.954 1.556-2.364 1.3s-.196-1.05.229-2.636l.04-.15c.153-.571.23-.857.095-1.086l-.007-.012c-.14-.225-.438-.305-1.033-.465c-1.072-.287-1.608-.43-1.702-.804l-.004-.019c-.083-.375.34-.712 1.186-1.385Z"></svg:path><svg:path stroke-linecap="round" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarBoltCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoltCircleLineDuotoneIcon],svg[solar-bolt-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m9.213 10.174l2.015-1.605c1.302-1.037 1.953-1.556 2.363-1.3s.197 1.05-.228 2.636l-.04.15c-.154.572-.23.858-.096 1.086l.007.012c.14.226.438.306 1.033.465c1.072.287 1.608.43 1.702.804l.004.019c.083.376-.34.712-1.185 1.386l-2.015 1.604c-1.303 1.038-1.954 1.556-2.364 1.3s-.196-1.05.229-2.636l.04-.15c.153-.571.23-.857.095-1.086l-.007-.012c-.14-.225-.438-.305-1.033-.465c-1.072-.287-1.608-.43-1.702-.804l-.004-.019c-.083-.375.34-.712 1.186-1.385Z"></svg:path><svg:path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBoltCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoltCircleLinearIcon],svg[solar-bolt-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m9.212 10.174l2.015-1.605c1.303-1.037 1.954-1.556 2.364-1.3s.196 1.05-.229 2.636l-.04.15c-.153.572-.23.858-.095 1.086l.007.012c.14.226.438.306 1.033.465c1.072.287 1.608.43 1.702.804l.004.019c.082.376-.34.712-1.186 1.386l-2.015 1.604c-1.302 1.038-1.953 1.556-2.363 1.3s-.197-1.05.228-2.636l.04-.15c.154-.571.23-.857.096-1.086l-.007-.012c-.14-.225-.438-.305-1.033-.465c-1.072-.287-1.608-.43-1.702-.804l-.004-.019c-.083-.375.34-.712 1.185-1.385Z"></svg:path><svg:path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z"></svg:path></svg:g>`,
})
export class SolarBoltCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoltCircleOutlineIcon],svg[solar-bolt-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.357 6.792c.37-.223 1.014-.545 1.632-.159c.632.396.599 1.128.544 1.55c-.061.48-.231 1.114-.431 1.86l-.055.206c-.04.145-.07.26-.094.36l-.028.127c.111.04.274.087.536.157l.05.014c.493.132.938.251 1.266.39c.326.138.77.39.914.921l.002.008l.002.008l.002.008l.002.008l.002.008l.001.008l.002.009l.002.008c.11.546-.183.969-.425 1.234c-.25.274-.619.572-1.026.896l-2.06 1.64c-.613.489-1.133.902-1.552 1.155c-.37.223-1.014.545-1.632.159c-.632-.396-.599-1.128-.544-1.55c.061-.48.231-1.114.431-1.86l.055-.206a15 15 0 0 0 .12-.475a4 4 0 0 0-.534-.17c-.519-.138-.983-.265-1.327-.416c-.328-.144-.765-.402-.907-.927l-.002-.008l-.002-.008l-.002-.008l-.002-.008l-.002-.008l-.002-.008l-.002-.008l-.001-.008c-.112-.554.191-.974.434-1.233c.239-.256.593-.538.979-.845l2.102-1.674c.613-.489 1.133-.903 1.552-1.155m-.662 2.364c.597-.476 1.014-.806 1.327-1.011c-.062.358-.194.855-.384 1.566l-.05.187a6 6 0 0 0-.165.735c-.033.26-.026.577.158.89l.004.006l.004.007c.186.3.457.459.695.56c.225.094.505.17.79.246c.454.122.763.206.981.284c-.158.15-.393.341-.735.614l-2.015 1.604c-.597.476-1.014.806-1.327 1.011c.062-.358.194-.856.384-1.566l.05-.187c.068-.253.137-.511.165-.735c.033-.26.026-.577-.158-.889l-.003.002c-.177-.273-.431-.435-.664-.544a5 5 0 0 0-.825-.278a13 13 0 0 1-.983-.29c.16-.148.394-.336.736-.608z"></svg:path><svg:path d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0"></svg:path></svg:g>`,
})
export class SolarBoltCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoltLineDuotoneIcon],svg[solar-bolt-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M13.926 9.705c-.379-.371-.379-.963-.379-2.148v-.31c0-3.285 0-4.927-.923-5.21s-1.913 1.056-3.892 3.734L5.67 9.914c-1.285 1.739-1.928 2.608-1.574 3.291l.018.034c.375.673 1.485.673 3.704.673c1.233 0 1.85 0 2.236.363"></svg:path><svg:path d="m13.926 9.706l.02.019c.387.364 1.003.364 2.236.364c2.22 0 3.329 0 3.703.672l.019.034c.354.684-.289 1.553-1.574 3.29l-3.062 4.144c-1.98 2.678-2.969 4.017-3.892 3.734c-.924-.283-.924-1.925-.923-5.21v-.31c0-1.184 0-1.777-.379-2.148l-.02-.02" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBoltLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoltLinearIcon],svg[solar-bolt-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="m5.67 9.914l3.062-4.143c1.979-2.678 2.969-4.017 3.892-3.734s.923 1.925.923 5.21v.31c0 1.185 0 1.777.379 2.148l.02.02c.387.363 1.003.363 2.236.363c2.22 0 3.329 0 3.704.673l.018.034c.354.683-.289 1.553-1.574 3.29l-3.062 4.144c-1.98 2.678-2.969 4.017-3.892 3.734s-.923-1.925-.923-5.21v-.31c0-1.185 0-1.777-.379-2.148l-.02-.02c-.387-.363-1.003-.363-2.236-.363c-2.22 0-3.329 0-3.703-.673l-.019-.034c-.354-.683.289-1.552 1.574-3.29Z"></svg:path>`,
})
export class SolarBoltLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoltOutlineIcon],svg[solar-bolt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.528 10.374c-.37-.642-1.05-.853-1.699-.944c-.653-.091-1.528-.091-2.586-.091h-.06c-.63 0-1.043-.007-1.343-.048c-.271-.038-.357-.094-.394-.127c-.027-.028-.075-.093-.108-.33c-.039-.28-.04-.663-.04-1.277v-.374c0-1.588 0-2.86-.123-3.766c-.114-.851-.387-1.807-1.331-2.097c-.928-.284-1.706.326-2.31.954c-.645.67-1.41 1.705-2.368 3.001L5.029 9.52c-.61.825-1.12 1.514-1.422 2.083c-.304.57-.525 1.248-.188 1.924v.002l.004.008l.004.007l.004.008l.005.008l.004.008l.004.008l.005.008l.004.007l.001.002c.368.637 1.044.86 1.699.96c.674.102 1.574.109 2.665.109c.637 0 1.042.001 1.34.04c.264.033.343.085.376.114c.03.032.083.105.12.35c.042.281.049.67.049 1.277v.375c0 1.587 0 2.86.122 3.766c.115.85.387 1.807 1.331 2.096c.928.284 1.706-.325 2.31-.954c.645-.67 1.41-1.704 2.368-3.001l3.1-4.193c.63-.854 1.15-1.567 1.455-2.16c.3-.58.509-1.262.175-1.932l-.002-.002l-.003-.008l-.004-.008l-.004-.007l-.004-.009l-.005-.008l-.004-.007l-.005-.008l-.004-.007zm-8.913-7.06c-.569.59-1.276 1.545-2.28 2.903L6.273 10.36c-.658.89-1.098 1.489-1.342 1.948c-.12.223-.164.364-.177.45c-.008.053-.003.076.003.092c.025.035.13.144.622.22c.538.082 1.311.092 2.439.092h.046c.577 0 1.08 0 1.484.051c.433.056.864.181 1.22.516l.006.006l.006.005c.35.344.492.77.557 1.203c.062.414.066.923.066 1.5v.31c0 1.667.001 2.836.108 3.63c.054.396.125.628.194.757c.051.097.081.104.09.106h.002c.01.004.048.017.161-.04c.142-.072.345-.226.628-.52c.568-.59 1.276-1.545 2.28-2.903l3.061-4.143c.654-.885 1.09-1.492 1.33-1.956c.204-.397.181-.531.168-.567c-.023-.033-.123-.134-.603-.202c-.537-.075-1.306-.076-2.44-.076c-.602 0-1.125-.004-1.548-.063c-.437-.06-.869-.192-1.222-.524l-.006-.006l-.005-.005c-.353-.347-.49-.772-.549-1.202c-.055-.394-.054-.883-.054-1.434v-.358c0-1.667-.002-2.836-.11-3.63c-.052-.395-.124-.627-.193-.757c-.051-.097-.08-.103-.089-.105h-.002l-.001-.001c-.01-.004-.047-.016-.161.04c-.142.072-.345.226-.628.52" clip-rule="evenodd"></svg:path>`,
})
export class SolarBoltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombBoldIcon],svg[solar-bomb-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m.981-12.147a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.56.56 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.56.56 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.56.56 0 0 0 .314-.315zm-1.964 6.69l.75-.75l-.3-.76l-.76-.3l-.75.75q.577.483 1.06 1.06"></svg:path>`,
})
export class SolarBombBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombBoldDuotoneIcon],svg[solar-bomb-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 22a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.56.56 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.56.56 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.56.56 0 0 0 .314-.315z"></svg:path><svg:path fill="currentColor" d="m16.477 6.462l-2.23 2.23q.582.478 1.06 1.061l2.23-2.23l-.21-.536a.56.56 0 0 0-.315-.314z" opacity=".7"></svg:path>`,
})
export class SolarBombBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombBrokenIcon],svg[solar-bomb-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M5.75 8.003a7.5 7.5 0 1 1-2.747 2.747M17 7l-2 2"></svg:path><svg:path d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.56.56 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.56.56 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.56.56 0 0 0 .314-.315z"></svg:path></svg:g>`,
})
export class SolarBombBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombEmojiBoldIcon],svg[solar-bomb-emoji-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.56.56 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.56.56 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.56.56 0 0 0 .314-.315z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17 14.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-5 2.25a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5zm2-4.25c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5M9 14c.552 0 1-.672 1-1.5S9.552 11 9 11s-1 .672-1 1.5s.448 1.5 1 1.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m16.767 8.294l-.75.75a8.6 8.6 0 0 0-1.06-1.061l.75-.75l.76.3z"></svg:path>`,
})
export class SolarBombEmojiBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombEmojiBoldDuotoneIcon],svg[solar-bomb-emoji-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 22a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.56.56 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.56.56 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.56.56 0 0 0 .314-.315z"></svg:path><svg:path fill="currentColor" d="m16.477 6.462l-2.23 2.231a7.6 7.6 0 0 1 1.06 1.06l2.23-2.23l-.21-.535a.56.56 0 0 0-.315-.315z" opacity=".7"></svg:path><svg:path fill="currentColor" d="M12 16.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5zm2-4.25c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5M9 14c.552 0 1-.672 1-1.5S9.552 11 9 11s-1 .672-1 1.5s.448 1.5 1 1.5"></svg:path>`,
})
export class SolarBombEmojiBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombEmojiBrokenIcon],svg[solar-bomb-emoji-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 16h2"></svg:path><svg:path fill="currentColor" d="M14 12.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5"></svg:path><svg:ellipse cx="9" cy="12.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m17 7l-2 2"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.56.56 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.56.56 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.56.56 0 0 0 .314-.315z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.75 8.003a7.5 7.5 0 1 1-2.747 2.747"></svg:path></svg:g>`,
})
export class SolarBombEmojiBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombEmojiLineDuotoneIcon],svg[solar-bomb-emoji-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="9.5" cy="14.5" r="7.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 16h2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14 12.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5" opacity=".5"></svg:path><svg:ellipse cx="9" cy="12.5" fill="currentColor" opacity=".5" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m17 7l-2 2" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.56.56 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.56.56 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.56.56 0 0 0 .314-.315z"></svg:path></svg:g>`,
})
export class SolarBombEmojiLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombEmojiLinearIcon],svg[solar-bomb-emoji-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="9.5" cy="14.5" r="7.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 16h2"></svg:path><svg:path fill="currentColor" d="M14 12.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5"></svg:path><svg:ellipse cx="9" cy="12.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m17 7l-2 2"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.56.56 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.56.56 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.56.56 0 0 0 .314-.315z"></svg:path></svg:g>`,
})
export class SolarBombEmojiLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombEmojiOutlineIcon],svg[solar-bomb-emoji-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5zm2-4.25c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5M9 14c.552 0 1-.672 1-1.5S9.552 11 9 11s-1 .672-1 1.5s.448 1.5 1 1.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19.717 2.078c-.436-1.104-1.998-1.104-2.434 0L16.66 3.66l-1.582.623c-1.104.436-1.104 1.998 0 2.434l.82.323l-1.119 1.12a8.25 8.25 0 1 0 1.06 1.06l1.12-1.119l.324.821c.436 1.104 1.998 1.104 2.434 0l.623-1.582l1.582-.623c1.104-.436 1.104-1.998 0-2.434L20.34 3.66zm-1.693 2.21l.476-1.206l.476 1.206c.133.337.4.603.736.736l1.206.476l-1.206.476c-.337.133-.603.4-.736.736L18.5 7.918l-.476-1.206a1.3 1.3 0 0 0-.736-.736L16.082 5.5l1.206-.476c.337-.133.603-.4.736-.736M2.75 14.5a6.75 6.75 0 1 1 13.5 0a6.75 6.75 0 0 1-13.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarBombEmojiOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombLineDuotoneIcon],svg[solar-bomb-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="9.5" cy="14.5" r="7.5"></svg:circle><svg:path stroke-linecap="round" d="m17 7l-2 2" opacity=".5"></svg:path><svg:path d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.56.56 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.56.56 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.56.56 0 0 0 .314-.315z"></svg:path></svg:g>`,
})
export class SolarBombLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombLinearIcon],svg[solar-bomb-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="9.5" cy="14.5" r="7.5"></svg:circle><svg:path stroke-linecap="round" d="m17 7l-2 2"></svg:path><svg:path d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.56.56 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.56.56 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.56.56 0 0 0 .314-.315z"></svg:path></svg:g>`,
})
export class SolarBombLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombMinimalisticBoldIcon],svg[solar-bomb-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.665 2.83a.75.75 0 0 1 1.006.335l.5 1a.75.75 0 1 1-1.342.67l-.5-1a.75.75 0 0 1 .336-1.006m3.165 4.336a.75.75 0 0 1 1.005-.336l1 .5a.75.75 0 1 1-.67 1.342l-1-.5a.75.75 0 0 1-.336-1.006M20.53 4.53a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06zM17 14.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m.53-6.97l-1.158 1.16a9 9 0 0 0-1.06-1.061L16.47 6.47a.75.75 0 1 1 1.06 1.06"></svg:path>`,
})
export class SolarBombMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombMinimalisticBoldDuotoneIcon],svg[solar-bomb-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.671 3.165a.75.75 0 0 0-1.342.67l.5 1a.75.75 0 0 0 1.342-.67zm3.165 3.665a.75.75 0 0 0-.671 1.341l1 .5a.75.75 0 0 0 .67-1.342zm.694-2.3a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06zm-5.223 5.224L17.53 7.53a.75.75 0 1 0-1.06-1.06l-2.223 2.223a7.6 7.6 0 0 1 1.06 1.06"></svg:path>`,
})
export class SolarBombMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombMinimalisticBrokenIcon],svg[solar-bomb-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m17 7l-2 2m4.5-1.5l1 .5M16 3.5l.5 1M19 5l1-1M5.75 8.003a7.5 7.5 0 1 1-2.747 2.747"></svg:path>`,
})
export class SolarBombMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombMinimalisticLineDuotoneIcon],svg[solar-bomb-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="9.5" cy="14.5" r="7.5"></svg:circle><svg:path stroke-linecap="round" d="m17 7l-2 2" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m19.5 7.5l1 .5M16 3.5l.5 1M19 5l1-1"></svg:path></svg:g>`,
})
export class SolarBombMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombMinimalisticLinearIcon],svg[solar-bomb-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="9.5" cy="14.5" r="7.5"></svg:circle><svg:path stroke-linecap="round" d="m17 7l-2 2m4.5-1.5l1 .5M16 3.5l.5 1M19 5l1-1"></svg:path></svg:g>`,
})
export class SolarBombMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombMinimalisticOutlineIcon],svg[solar-bomb-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.665 2.83a.75.75 0 0 1 1.006.335l.5 1a.75.75 0 1 1-1.342.67l-.5-1a.75.75 0 0 1 .336-1.006"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 14.5a8.25 8.25 0 0 1 13.53-6.34l1.69-1.69a.75.75 0 1 1 1.06 1.06l-1.69 1.69A8.25 8.25 0 1 1 1.25 14.5M9.5 7.75a6.75 6.75 0 1 0 0 13.5a6.75 6.75 0 0 0 0-13.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.835 6.83a.75.75 0 1 0-.67 1.341l1 .5a.75.75 0 1 0 .67-1.342zm.695-2.3a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06z"></svg:path>`,
})
export class SolarBombMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombOutlineIcon],svg[solar-bomb-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.717 2.078c-.436-1.104-1.998-1.104-2.434 0L16.66 3.66l-1.582.623c-1.104.436-1.104 1.998 0 2.434l.82.323l-1.119 1.12a8.25 8.25 0 1 0 1.06 1.06l1.12-1.119l.324.821c.436 1.104 1.998 1.104 2.434 0l.623-1.582l1.582-.623c1.104-.436 1.104-1.998 0-2.434L20.34 3.66zm-1.693 2.21l.476-1.206l.476 1.206c.133.337.4.603.736.736l1.206.476l-1.206.476c-.337.133-.603.4-.736.736L18.5 7.918l-.476-1.206a1.3 1.3 0 0 0-.736-.736L16.082 5.5l1.206-.476c.337-.133.603-.4.736-.736M9.5 7.75a6.75 6.75 0 1 0 0 13.5a6.75 6.75 0 0 0 0-13.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarBombOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneBoldIcon],svg[solar-bone-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.137 2.738c-.743.743-1.128 2.038-.848 3.052c.149.536.173 1.185-.22 1.579l-5.7 5.7c-.394.393-1.043.369-1.58.22c-1.013-.28-2.308.105-3.051.848A2.519 2.519 0 0 0 6.3 17.7a2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052c-.149-.536-.173-1.185.22-1.579l5.7-5.7c.394-.393 1.043-.369 1.58-.22c1.013.28 2.308-.105 3.051-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562"></svg:path>`,
})
export class SolarBoneBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneBoldDuotoneIcon],svg[solar-bone-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.29 5.79c-.28-1.014.104-2.309.847-3.052A2.519 2.519 0 0 1 17.7 6.3a2.519 2.519 0 0 1 3.562 3.563c-.743.743-2.038 1.128-3.052.848c-.536-.149-1.185-.173-1.579.22L13.07 7.37c.393-.394.369-1.043.22-1.58m-5.921 7.279c-.394.393-1.043.369-1.58.22c-1.013-.28-2.308.105-3.051.848A2.519 2.519 0 0 0 6.3 17.7a2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052c-.149-.536-.173-1.185.22-1.579z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m10.932 16.631l5.7-5.7l-3.563-3.562l-5.7 5.7z" opacity=".5"></svg:path>`,
})
export class SolarBoneBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneBrokenIcon],svg[solar-bone-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.356 15.206l-1.425 1.425c-.393.394-.369 1.043-.22 1.58c.28 1.013-.105 2.308-.848 3.051A2.519 2.519 0 0 1 6.3 17.7a2.519 2.519 0 0 1-3.562-3.563c.743-.743 2.038-1.128 3.052-.848c.536.149 1.185.173 1.579-.22l5.7-5.7c.393-.394.369-1.043.22-1.58c-.28-1.013.105-2.308.848-3.051A2.519 2.519 0 0 1 17.7 6.3a2.519 2.519 0 0 1 3.562 3.563c-.743.743-2.038 1.128-3.052.848c-.536-.149-1.185-.173-1.579.22l-1.425 1.425"></svg:path>`,
})
export class SolarBoneBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneBrokenBoldIcon],svg[solar-bone-broken-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.137 2.738c-.743.743-1.128 2.038-.848 3.052c.149.536.173 1.185-.22 1.579l-1.28 1.28a.14.14 0 0 0 .044.226a6.27 6.27 0 0 1 3.292 3.292a.14.14 0 0 0 .227.044l1.28-1.28c.393-.393 1.042-.369 1.578-.22c1.014.28 2.309-.105 3.052-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562M2.738 17.7a2.52 2.52 0 0 0 3.562 0a2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052c-.149-.536-.173-1.185.22-1.579l1.28-1.28a.14.14 0 0 0-.044-.226a6.27 6.27 0 0 1-3.292-3.292a.14.14 0 0 0-.227-.044l-1.28 1.28c-.393.393-1.042.369-1.578.22c-1.014-.28-2.309.105-3.052.848a2.52 2.52 0 0 0 0 3.563M8.25 5a.75.75 0 0 0 1.5 0V4a.75.75 0 0 0-1.5 0zm-1.376.813a.75.75 0 1 1-1.061 1.06L4.399 5.46a.75.75 0 1 1 1.06-1.06zm11.314 11.313a.75.75 0 0 0-1.061 1.061l1.414 1.414a.75.75 0 0 0 1.06-1.06zM15 18.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75M5 9.75a.75.75 0 0 0 0-1.5H4a.75.75 0 0 0 0 1.5zM18.25 15a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class SolarBoneBrokenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneBrokenBoldDuotoneIcon],svg[solar-bone-broken-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.137 2.738c-.743.743-1.128 2.038-.848 3.052c.149.536.173 1.185-.22 1.579l-1.28 1.28a.14.14 0 0 0 .044.226a6.27 6.27 0 0 1 3.292 3.292a.14.14 0 0 0 .227.044l1.28-1.28c.393-.393 1.042-.369 1.578-.22c1.014.28 2.309-.105 3.052-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562M2.738 17.7a2.52 2.52 0 0 0 3.562 0a2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052c-.149-.536-.173-1.185.22-1.579l1.28-1.28a.14.14 0 0 0-.044-.226a6.27 6.27 0 0 1-3.292-3.292a.14.14 0 0 0-.227-.044l-1.28 1.28c-.393.393-1.042.369-1.578.22c-1.014-.28-2.309.105-3.052.848a2.52 2.52 0 0 0 0 3.563"></svg:path><svg:path fill="currentColor" d="M8.25 5a.75.75 0 0 0 1.5 0V4a.75.75 0 0 0-1.5 0zm-1.376.813a.75.75 0 1 1-1.061 1.06L4.399 5.46a.75.75 0 1 1 1.06-1.06zm11.314 11.313a.75.75 0 0 0-1.061 1.061l1.414 1.414a.75.75 0 0 0 1.06-1.06zM15 18.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75M5 9.75a.75.75 0 0 0 0-1.5H4a.75.75 0 0 0 0 1.5zM18.25 15a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75" opacity=".5"></svg:path>`,
})
export class SolarBoneBrokenBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneBrokenBrokenIcon],svg[solar-bone-broken-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M13.29 5.79c.148.536.172 1.185-.221 1.579l-1.28 1.28a.14.14 0 0 0 .044.226a6.27 6.27 0 0 1 3.292 3.292a.14.14 0 0 0 .227.044l1.28-1.28c.393-.393 1.042-.369 1.578-.22c1.014.28 2.309-.105 3.052-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562M9.863 21.262A2.519 2.519 0 0 1 6.3 17.7a2.519 2.519 0 0 1-3.562-3.563c.743-.743 2.038-1.128 3.052-.848c.536.149 1.185.173 1.579-.22l1.28-1.28a.14.14 0 0 1 .226.044a6.27 6.27 0 0 0 3.292 3.292a.14.14 0 0 1 .044.227l-1.28 1.28c-.393.393-.369 1.042-.22 1.578"></svg:path><svg:path d="m17.657 17.657l1.414 1.414M6.343 6.343L4.93 4.93M15 19v1M5 9H4m15 6h1M9 5V4"></svg:path></svg:g>`,
})
export class SolarBoneBrokenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneBrokenLineDuotoneIcon],svg[solar-bone-broken-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14.137 2.738c-.743.743-1.128 2.038-.848 3.052c.149.536.173 1.185-.22 1.579l-1.28 1.28a.14.14 0 0 0 .044.226a6.27 6.27 0 0 1 3.292 3.292a.14.14 0 0 0 .227.044l1.28-1.28c.393-.393 1.042-.369 1.578-.22c1.014.28 2.309-.105 3.052-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562M2.738 17.7a2.52 2.52 0 0 0 3.562 0a2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052c-.149-.536-.173-1.185.22-1.579l1.28-1.28a.14.14 0 0 0-.044-.226a6.27 6.27 0 0 1-3.292-3.292a.14.14 0 0 0-.227-.044l-1.28 1.28c-.393.393-1.042.369-1.578.22c-1.014-.28-2.309.105-3.052.848a2.52 2.52 0 0 0 0 3.563"></svg:path><svg:path d="m17.657 17.657l1.414 1.414M6.343 6.343L4.93 4.93M15 19v1M5 9H4m15 6h1M9 5V4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBoneBrokenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneBrokenLinearIcon],svg[solar-bone-broken-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14.137 2.738c-.743.743-1.128 2.038-.848 3.052c.149.536.173 1.185-.22 1.579l-1.28 1.28a.14.14 0 0 0 .044.226a6.27 6.27 0 0 1 3.292 3.292a.14.14 0 0 0 .227.044l1.28-1.28c.393-.393 1.042-.369 1.578-.22c1.014.28 2.309-.105 3.052-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562M2.738 17.7a2.52 2.52 0 0 0 3.562 0a2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052c-.149-.536-.173-1.185.22-1.579l1.28-1.28a.14.14 0 0 0-.044-.226a6.27 6.27 0 0 1-3.292-3.292a.14.14 0 0 0-.227-.044l-1.28 1.28c-.393.393-1.042.369-1.578.22c-1.014-.28-2.309.105-3.052.848a2.52 2.52 0 0 0 0 3.563"></svg:path><svg:path d="m17.657 17.657l1.414 1.414M6.343 6.343L4.93 4.93M15 19v1M5 9H4m15 6h1M9 5V4"></svg:path></svg:g>`,
})
export class SolarBoneBrokenLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneBrokenOutlineIcon],svg[solar-bone-broken-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.173 4.827a3.27 3.27 0 0 0-5.566-2.62c-.919.92-1.398 2.489-1.04 3.783c.058.21.083.414.068.577c-.014.16-.06.234-.097.272l-1.28 1.279a.89.89 0 0 0 .28 1.446a5.52 5.52 0 0 1 2.898 2.899a.89.89 0 0 0 1.446.278l1.28-1.28c.037-.037.111-.082.271-.096c.163-.015.366.01.577.068c1.294.358 2.864-.121 3.782-1.04a3.269 3.269 0 0 0-2.619-5.566M17.17 3.268a1.77 1.77 0 0 0-2.502 0c-.568.568-.858 1.59-.656 2.322c.09.325.152.715.117 1.109c-.035.397-.174.844-.53 1.2l-.684.684a7 7 0 0 1 2.502 2.502l.684-.684c.356-.356.803-.495 1.2-.53a3.2 3.2 0 0 1 1.11.117c.732.202 1.753-.088 2.32-.656a1.77 1.77 0 0 0-2.5-2.501a.75.75 0 0 1-1.062-1.061a1.77 1.77 0 0 0 0-2.502" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.127 17.126a.75.75 0 0 1 1.06 0l1.415 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414a.75.75 0 0 1 0-1.06M6.874 5.813a.75.75 0 0 1-1.061 1.06L4.399 5.46a.75.75 0 1 1 1.06-1.06zM15 18.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75M5 9.75a.75.75 0 0 0 0-1.5H4a.75.75 0 0 0 0 1.5zM18.25 15a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-10-10a.75.75 0 0 0 1.5 0V4a.75.75 0 0 0-1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.463 14.436a5.52 5.52 0 0 1-2.899-2.899a.89.89 0 0 0-1.446-.278l-1.28 1.28c-.037.037-.111.082-.271.096a1.7 1.7 0 0 1-.577-.068c-1.294-.358-2.864.121-3.783 1.04a3.27 3.27 0 0 0 2.62 5.566a3.269 3.269 0 0 0 5.566 2.62c.919-.92 1.398-2.489 1.04-3.783a1.7 1.7 0 0 1-.068-.577c.014-.16.06-.234.097-.272l1.28-1.279a.89.89 0 0 0-.28-1.446m-3.88-1.52l-.68.68l-.004.003l-.023.022c-.352.34-.788.474-1.177.508a3.2 3.2 0 0 1-1.11-.117c-.732-.202-1.753.088-2.32.656a1.769 1.769 0 1 0 2.5 2.502a.8.8 0 0 1 .249-.165l.006-.003a.75.75 0 0 1 .807 1.228a1.769 1.769 0 1 0 2.501 2.502c.568-.568.858-1.59.656-2.322a3.2 3.2 0 0 1-.117-1.109c.035-.397.174-.844.53-1.2l.684-.684a7 7 0 0 1-2.502-2.502" clip-rule="evenodd"></svg:path>`,
})
export class SolarBoneBrokenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneCrackBoldIcon],svg[solar-bone-crack-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.29 5.79c-.28-1.014.104-2.309.847-3.052A2.519 2.519 0 0 1 17.7 6.3a2.519 2.519 0 0 1 3.562 3.563c-.743.743-2.038 1.128-3.052.848c-.536-.149-1.185-.173-1.579.22l-.842.843l-2.685.413v-.54a.75.75 0 0 0-.987-.712l-1.135.378V9.455L13.07 7.37c.393-.394.369-1.043.22-1.58m-3.808 5.165L7.37 13.07c-.394.393-1.043.369-1.58.22c-1.013-.28-2.308.105-3.051.848A2.519 2.519 0 0 0 6.3 17.7a2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052c-.149-.536-.173-1.185.22-1.579l3.064-3.064l-1.527.235a.75.75 0 0 1-.864-.741v-.374l-1.134.378a.75.75 0 0 1-.988-.711z"></svg:path>`,
})
export class SolarBoneCrackBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneCrackBoldDuotoneIcon],svg[solar-bone-crack-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.738 17.7a2.52 2.52 0 0 0 3.562 0a2.519 2.519 0 1 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052c-.149-.536-.173-1.186.22-1.579l4.452-4.452l-3.03.881v-1.414l-2.12.707l-.014-2.134l-2.85 2.85c-.394.393-1.043.369-1.58.22c-1.013-.28-2.308.105-3.051.848a2.52 2.52 0 0 0 0 3.563"></svg:path><svg:path fill="currentColor" d="M14.137 2.738c-.743.743-1.128 2.038-.848 3.052c.149.536.173 1.185-.22 1.579l-2.85 2.85l.013 2.135l2.121-.708v1.415l3.03-.882l1.248-1.248c.393-.393 1.043-.369 1.58-.22c1.013.28 2.308-.105 3.051-.848A2.519 2.519 0 1 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562" opacity=".5"></svg:path>`,
})
export class SolarBoneCrackBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneCrackBrokenIcon],svg[solar-bone-crack-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13.29 5.79c.148.536.172 1.185-.221 1.579l-5.7 5.7c-.394.393-1.043.369-1.58.22c-1.013-.28-2.308.105-3.051.848A2.519 2.519 0 0 0 6.3 17.7a2.519 2.519 0 0 0 3.563 3.562m4.274-18.524A2.519 2.519 0 0 1 17.7 6.3a2.519 2.519 0 0 1 3.562 3.563c-.743.743-2.038 1.128-3.052.848c-.536-.149-1.185-.173-1.579.22l-5.7 5.7c-.393.394-.369 1.043-.22 1.58"></svg:path><svg:path d="M10.232 10.232v2.122l2.122-.707v1.414L15 12.5"></svg:path></svg:g>`,
})
export class SolarBoneCrackBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneCrackLineDuotoneIcon],svg[solar-bone-crack-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.137 2.738c-.743.743-1.128 2.038-.848 3.052c.149.536.173 1.185-.22 1.579l-5.7 5.7c-.394.393-1.043.369-1.58.22c-1.013-.28-2.308.105-3.051.848A2.519 2.519 0 0 0 6.3 17.7a2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052c-.149-.536-.173-1.185.22-1.579l5.7-5.7c.394-.393 1.043-.369 1.58-.22c1.013.28 2.308-.105 3.051-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562"></svg:path><svg:path d="M10.232 10.232v2.122l2.122-.707v1.414L15 12.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBoneCrackLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneCrackLinearIcon],svg[solar-bone-crack-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.137 2.738c-.743.743-1.128 2.038-.848 3.052c.149.536.173 1.185-.22 1.579l-5.7 5.7c-.394.393-1.043.369-1.58.22c-1.013-.28-2.308.105-3.051.848A2.519 2.519 0 0 0 6.3 17.7a2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052c-.149-.536-.173-1.185.22-1.579l5.7-5.7c.394-.393 1.043-.369 1.58-.22c1.013.28 2.308-.105 3.051-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562"></svg:path><svg:path d="M10.232 10.232v2.122l2.122-.707v1.414L15 12.5"></svg:path></svg:g>`,
})
export class SolarBoneCrackLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneCrackOutlineIcon],svg[solar-bone-crack-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.23 2.207a3.26 3.26 0 0 1 .943 2.62a3.269 3.269 0 0 1 2.62 5.566c-.92.919-2.489 1.398-3.783 1.04a1.7 1.7 0 0 0-.577-.068c-.16.014-.234.06-.272.097l-5.7 5.7c-.037.037-.082.111-.096.271c-.015.163.01.366.068.577c.358 1.294-.121 2.864-1.04 3.782a3.269 3.269 0 0 1-5.566-2.619a3.27 3.27 0 0 1-2.62-5.566c.92-.919 2.489-1.398 3.783-1.04c.21.058.414.083.577.068c.16-.014.234-.06.272-.097l5.7-5.7c.037-.037.082-.111.096-.271a1.7 1.7 0 0 0-.068-.577c-.358-1.294.121-2.864 1.04-3.783a3.27 3.27 0 0 1 4.623 0m-3.562 1.061A1.769 1.769 0 1 1 17.17 5.77a.75.75 0 1 0 1.06 1.06a1.769 1.769 0 1 1 2.502 2.502c-.568.568-1.59.858-2.322.656a3.2 3.2 0 0 0-1.109-.117c-.397.035-.844.174-1.2.53l-1.395 1.394l-1.602.34v-.489a.75.75 0 0 0-.987-.711l-1.135.378v-.797L13.6 7.899c.356-.356.495-.803.53-1.2a3.2 3.2 0 0 0-.117-1.11c-.202-.732.088-1.753.656-2.32m-5.186 8.748L7.9 13.599c-.356.356-.803.495-1.2.53a3.2 3.2 0 0 1-1.11-.117c-.732-.202-1.753.088-2.32.656a1.769 1.769 0 1 0 2.5 2.502a.75.75 0 1 1 1.062 1.06a1.769 1.769 0 1 0 2.501 2.502c.568-.568.858-1.59.656-2.322a3.2 3.2 0 0 1-.117-1.109c.035-.397.174-.844.53-1.2l2.36-2.36l-.252.053a.75.75 0 0 1-.905-.733v-.374l-1.134.378a.75.75 0 0 1-.988-.711z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBoneCrackOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneLineDuotoneIcon],svg[solar-bone-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M10.931 16.631c-.393.394-.369 1.043-.22 1.58c.28 1.013-.105 2.308-.848 3.051A2.519 2.519 0 0 1 6.3 17.7a2.519 2.519 0 0 1-3.562-3.563c.743-.743 2.038-1.128 3.052-.848c.536.149 1.185.173 1.579-.22m9.262-2.138c.394-.393 1.043-.369 1.58-.22c1.013.28 2.308-.105 3.051-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562c-.743.743-1.128 2.038-.848 3.052c.149.536.173 1.185-.22 1.579"></svg:path><svg:path fill="currentColor" d="M17.161 11.462a.75.75 0 0 0-1.06-1.06zM13.6 7.899a.75.75 0 0 0-1.06-1.06zm-2.137 9.263l5.7-5.7l-1.061-1.06l-5.7 5.699zM7.9 13.599l5.7-5.7l-1.06-1.06l-5.7 5.7z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBoneLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneLinearIcon],svg[solar-bone-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.137 2.738c-.743.743-1.128 2.038-.848 3.052c.149.536.173 1.185-.22 1.579l-5.7 5.7c-.394.393-1.043.369-1.58.22c-1.013-.28-2.308.105-3.051.848A2.519 2.519 0 0 0 6.3 17.7a2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052c-.149-.536-.173-1.185.22-1.579l5.7-5.7c.394-.393 1.043-.369 1.58-.22c1.013.28 2.308-.105 3.051-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562"></svg:path>`,
})
export class SolarBoneLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneOutlineIcon],svg[solar-bone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.17 3.268a1.77 1.77 0 0 0-2.502 0c-.568.568-.858 1.59-.656 2.322c.09.325.152.715.117 1.109c-.035.397-.174.844-.53 1.2l-5.7 5.7c-.356.356-.803.495-1.2.53a3.2 3.2 0 0 1-1.11-.117c-.732-.202-1.753.088-2.32.656a1.769 1.769 0 1 0 2.5 2.502a.75.75 0 1 1 1.062 1.06a1.769 1.769 0 1 0 2.501 2.502c.568-.568.858-1.59.656-2.322a3.2 3.2 0 0 1-.117-1.109c.035-.397.174-.844.53-1.2l5.7-5.7c.356-.356.803-.495 1.2-.53a3.2 3.2 0 0 1 1.11.117c.732.202 1.753-.088 2.32-.656a1.77 1.77 0 0 0-2.5-2.501a.75.75 0 0 1-1.062-1.061a1.77 1.77 0 0 0 0-2.502m2.003 1.559a3.27 3.27 0 0 0-5.566-2.62c-.919.92-1.398 2.489-1.04 3.783c.058.21.083.414.068.577c-.014.16-.06.234-.097.272l-5.7 5.7c-.037.037-.111.082-.271.096a1.7 1.7 0 0 1-.577-.068c-1.294-.358-2.864.121-3.783 1.04a3.27 3.27 0 0 0 2.62 5.566a3.269 3.269 0 0 0 5.566 2.62c.919-.92 1.398-2.489 1.04-3.783a1.7 1.7 0 0 1-.068-.577c.014-.16.06-.234.097-.272l5.7-5.7c.037-.037.111-.082.271-.096c.163-.015.366.01.577.068c1.294.358 2.864-.121 3.782-1.04a3.269 3.269 0 0 0-2.619-5.566" clip-rule="evenodd"></svg:path>`,
})
export class SolarBoneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBonesBoldIcon],svg[solar-bones-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.07 1.464-8.535c1.177-1.177 2.93-1.408 6.017-1.454v2.05c0 .556-.476.998-.96 1.273c-.915.518-1.56 1.706-1.56 2.757a2.519 2.519 0 1 0 5.039 0a2.519 2.519 0 0 0 5.038 0c0-1.051-.644-2.24-1.559-2.757c-.484-.275-.96-.717-.96-1.273V2.01c3.088.046 4.84.277 6.016 1.454C22 4.929 22 7.286 22 12s0 7.071-1.465 8.536c-1.171 1.171-2.914 1.406-5.978 1.452v-2.003c0-.557.476-.999.96-1.273c.915-.518 1.559-1.706 1.559-2.758a2.519 2.519 0 0 0-5.038 0a2.519 2.519 0 0 0-5.038 0c0 1.052.644 2.24 1.558 2.758c.485.274.961.716.961 1.273v2.005c-3.111-.045-4.873-.273-6.055-1.454C2 19.07 2 16.714 2 12"></svg:path>`,
})
export class SolarBonesBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBonesBoldDuotoneIcon],svg[solar-bones-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.48 10.61A2.52 2.52 0 0 0 12 8.091a2.519 2.519 0 0 0 5.038 0c0-1.051-.644-2.24-1.559-2.757c-.484-.275-.96-.717-.96-1.273V2.01H9.48v2.05c0 .556-.476.998-.96 1.273c-.915.518-1.56 1.706-1.56 2.757a2.52 2.52 0 0 0 2.52 2.52m5.077 11.378v-2.003c0-.557.476-.999.96-1.273c.915-.518 1.559-1.706 1.559-2.758a2.519 2.519 0 0 0-5.038 0a2.519 2.519 0 0 0-5.038 0c0 1.052.644 2.24 1.558 2.758c.485.274.961.716.961 1.273v2.005z"></svg:path>`,
})
export class SolarBonesBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBonesBrokenIcon],svg[solar-bones-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M9.48 2.045v2.016c0 .556-.475.998-.96 1.272c-.914.519-1.558 1.707-1.558 2.758a2.519 2.519 0 1 0 5.038 0a2.519 2.519 0 0 0 5.038 0c0-1.051-.644-2.24-1.559-2.758c-.484-.274-.96-.716-.96-1.272V2.045M9.519 22v-2.015c0-.557-.476-.999-.96-1.273C7.643 18.194 7 17.006 7 15.954a2.519 2.519 0 1 1 5.038 0a2.519 2.519 0 0 1 5.038 0c0 1.052-.644 2.24-1.559 2.758c-.484.274-.96.716-.96 1.273V22"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarBonesBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBonesLineDuotoneIcon],svg[solar-bones-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9.48 2.045v2.016c0 .556-.475.998-.96 1.272c-.914.519-1.558 1.707-1.558 2.758a2.519 2.519 0 1 0 5.038 0a2.519 2.519 0 0 0 5.038 0c0-1.051-.644-2.24-1.559-2.758c-.484-.274-.96-.716-.96-1.272V2.045M9.519 22v-2.015c0-.557-.476-.999-.96-1.273C7.643 18.194 7 17.006 7 15.954a2.519 2.519 0 1 1 5.038 0a2.519 2.519 0 0 1 5.038 0c0 1.052-.644 2.24-1.559 2.758c-.484.274-.96.716-.96 1.273V22"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBonesLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBonesLinearIcon],svg[solar-bones-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9.48 2.045v2.016c0 .556-.475.998-.96 1.272c-.914.519-1.558 1.707-1.558 2.758a2.519 2.519 0 1 0 5.038 0a2.519 2.519 0 0 0 5.038 0c0-1.051-.644-2.24-1.559-2.758c-.484-.274-.96-.716-.96-1.272V2.045M9.519 22v-2.015c0-.557-.476-.999-.96-1.273C7.643 18.194 7 17.006 7 15.954a2.519 2.519 0 1 1 5.038 0a2.519 2.519 0 0 1 5.038 0c0 1.052-.644 2.24-1.559 2.758c-.484.274-.96.716-.96 1.273V22"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarBonesLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBonesOutlineIcon],svg[solar-bones-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c.84.113 1.823.159 2.968.178a.8.8 0 0 0 .253.003a189 189 0 0 0 2.308.009h.114c.86 0 1.652 0 2.378-.01a.8.8 0 0 0 .266-.004c1.11-.02 2.065-.065 2.885-.176c1.445-.194 2.585-.6 3.48-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zm3.364 19.972a20 20 0 0 0 2.08-.148c1.278-.172 2.049-.5 2.618-1.069c.57-.57.897-1.34 1.069-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068a21 21 0 0 0-2.117-.149v1.284c0 .052.02.137.123.26c.106.126.267.252.457.36c1.168.662 1.939 2.11 1.939 3.41A3.269 3.269 0 0 1 12 10.175A3.269 3.269 0 0 1 6.212 8.09c0-1.3.77-2.748 1.939-3.41c.19-.108.351-.234.456-.36c.103-.123.124-.208.124-.26V2.777c-.813.024-1.51.068-2.117.15c-1.279.171-2.05.498-2.62 1.068c-.569.57-.896 1.34-1.068 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068a21 21 0 0 0 2.155.15v-1.24c0-.052-.02-.137-.124-.26a1.7 1.7 0 0 0-.456-.36c-1.168-.661-1.939-2.11-1.939-3.41a3.269 3.269 0 0 1 5.788-2.083a3.269 3.269 0 0 1 5.788 2.084c0 1.299-.77 2.748-1.939 3.41a1.7 1.7 0 0 0-.457.36c-.102.122-.123.207-.123.26zm-5.038.025q.8.004 1.731.003q.974.001 1.807-.004v-1.261c0-.504.217-.918.474-1.224a3.2 3.2 0 0 1 .867-.702c.661-.374 1.178-1.302 1.178-2.105a1.77 1.77 0 0 0-3.538 0a.75.75 0 0 1-1.5 0a1.769 1.769 0 1 0-3.538 0c0 .803.517 1.73 1.178 2.105c.294.167.613.399.867.702c.257.306.474.72.474 1.224zm-.038-18.493V4.06c0 .503-.218.918-.474 1.224a3.2 3.2 0 0 1-.867.701c-.661.375-1.178 1.302-1.178 2.105a1.769 1.769 0 0 0 3.538 0a.75.75 0 0 1 1.5 0a1.769 1.769 0 1 0 3.538 0c0-.803-.517-1.73-1.178-2.105a3.2 3.2 0 0 1-.867-.701c-.257-.306-.474-.72-.474-1.224V2.754Q12.953 2.749 12 2.75q-.953-.001-1.77.004" clip-rule="evenodd"></svg:path>`,
})
export class SolarBonesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBonfireBoldIcon],svg[solar-bonfire-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.313 14.7a.75.75 0 0 1 .988-.387l5 2.188a.75.75 0 1 1-.601 1.374l-5-2.188a.75.75 0 0 1-.387-.987m17.374 0a.75.75 0 0 1-.386.987l-16 7a.75.75 0 0 1-.601-1.374l16-7a.75.75 0 0 1 .987.387m-6.874 4.593a.75.75 0 0 1 .988-.386l5.5 2.406a.75.75 0 1 1-.601 1.374l-5.5-2.406a.75.75 0 0 1-.387-.988M11.6 15c2.133 0 6.4-1.239 6.4-6.193c0-3.031-1.849-5.23-3.6-6.542c-.897-.674-2.047.025-2.047 1.124c0 .743-.21 1.977-.793 2.891c-.682 1.07-1.809.141-1.987-1.104c-.09-.624-.777-.882-1.312-.523C7.208 5.358 6 6.71 6 8.807C6 13.761 9.733 15 11.6 15m3.616-5.718a.75.75 0 0 1 .502.934c-.268.896-1.384 2.534-3.718 2.534a.75.75 0 0 1 0-1.5c1.506 0 2.15-1.028 2.282-1.466a.75.75 0 0 1 .934-.502" clip-rule="evenodd"></svg:path>`,
})
export class SolarBonfireBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBonfireBoldDuotoneIcon],svg[solar-bonfire-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.313 14.7a.75.75 0 0 1 .988-.387l5 2.188a.75.75 0 1 1-.601 1.374l-5-2.188a.75.75 0 0 1-.387-.987m17.374 0a.75.75 0 0 1-.386.987l-16 7a.75.75 0 0 1-.601-1.374l16-7a.75.75 0 0 1 .987.387m-6.874 4.593a.75.75 0 0 1 .988-.386l5.5 2.406a.75.75 0 1 1-.601 1.374l-5.5-2.406a.75.75 0 0 1-.387-.988" opacity=".5"></svg:path><svg:path d="M11.6 15c2.133 0 6.4-1.239 6.4-6.193c0-3.031-1.849-5.23-3.6-6.542c-.897-.674-2.047.025-2.047 1.124c0 .743-.21 1.977-.793 2.891c-.682 1.07-1.809.141-1.987-1.104c-.09-.624-.777-.882-1.312-.523C7.208 5.358 6 6.71 6 8.807C6 13.761 9.733 15 11.6 15m3.616-5.718a.75.75 0 0 1 .502.934c-.268.896-1.384 2.534-3.718 2.534a.75.75 0 0 1 0-1.5c1.506 0 2.15-1.028 2.282-1.466a.75.75 0 0 1 .934-.502"></svg:path></svg:g>`,
})
export class SolarBonfireBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBonfireBrokenIcon],svg[solar-bonfire-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 15L4 22m0-7l5 2.188M20 22l-5.5-2.406M15 10c-.2.667-1.08 2-3 2"></svg:path><svg:path d="M6 8.86C6 13.772 9.733 15 11.6 15c.956 0 2.34-.246 3.577-.96m1.92-1.803c.551-.86.903-1.967.903-3.377c0-3.126-2.001-5.36-3.81-6.64c-.818-.578-1.837.057-1.837 1.045v.223c0 .996-.428 2.814-1.617 3.57c-.607.386-1.263-.192-1.336-.896l-.061-.58c-.07-.672-.77-1.08-1.32-.67a5.2 5.2 0 0 0-1.335 1.454"></svg:path></svg:g>`,
})
export class SolarBonfireBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBonfireLineDuotoneIcon],svg[solar-bonfire-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18 8.807C18 13.761 13.733 15 11.6 15C9.733 15 6 13.761 6 8.807C6 6.71 7.208 5.358 8.261 4.653c.535-.36 1.223-.101 1.312.523c.178 1.245 1.305 2.173 1.987 1.104c.582-.914.793-2.148.793-2.891c0-1.1 1.15-1.798 2.048-1.124C16.15 3.577 18 5.776 18 8.807Z"></svg:path><svg:path stroke-linecap="round" d="M20 15L4 22"></svg:path><svg:path stroke-linecap="round" d="m4 15l5 2.188M20 22l-5.5-2.406M15 10c-.2.667-1.08 2-3 2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBonfireLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBonfireLinearIcon],svg[solar-bonfire-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18 8.807C18 13.761 13.733 15 11.6 15C9.733 15 6 13.761 6 8.807C6 6.71 7.208 5.358 8.261 4.653c.535-.36 1.223-.101 1.312.523c.178 1.245 1.305 2.173 1.987 1.104c.582-.914.793-2.148.793-2.891c0-1.1 1.15-1.798 2.048-1.124C16.15 3.577 18 5.776 18 8.807Z"></svg:path><svg:path stroke-linecap="round" d="M20 15L4 22m0-7l5 2.188M20 22l-5.5-2.406M15 10c-.2.667-1.08 2-3 2"></svg:path></svg:g>`,
})
export class SolarBonfireLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBonfireOutlineIcon],svg[solar-bonfire-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.669 1.51a1.96 1.96 0 0 1 2.182.155c1.848 1.385 3.9 3.78 3.9 7.142c0 2.733-1.196 4.506-2.722 5.57c-1.487 1.036-3.247 1.373-4.429 1.373a6.6 6.6 0 0 1-3.967-1.402c-1.356-1.08-2.383-2.85-2.383-5.54c0-2.424 1.406-3.982 2.594-4.778c.92-.618 2.292-.216 2.472 1.04c.065.46.302.787.472.898q.03.018.045.025a.5.5 0 0 0 .095-.116c.482-.757.675-1.838.675-2.488c0-.82.433-1.517 1.066-1.879m-1.856 4.496l.005-.002zm.036-.008l.003.001zm2.563-3.184a.65.65 0 0 0-.309.575c0 .835-.228 2.223-.91 3.294c-.248.388-.598.687-1.049.784c-.447.096-.86-.036-1.176-.243c-.61-.398-1.025-1.156-1.137-1.941l-.007-.027l-.003-.006l-.01-.006c-.013-.005-.061-.016-.132.032c-.917.615-1.929 1.76-1.929 3.531c0 2.263.84 3.59 1.817 4.368A5.1 5.1 0 0 0 11.6 14.25c.952 0 2.392-.282 3.572-1.104c1.14-.794 2.078-2.117 2.078-4.339c0-2.7-1.646-4.703-3.299-5.942c-.2-.15-.387-.138-.54-.051m1.804 6.468a.75.75 0 0 1 .503.934c-.27.896-1.384 2.534-3.719 2.534a.75.75 0 0 1 0-1.5c1.506 0 2.15-1.028 2.282-1.466a.75.75 0 0 1 .934-.502M3.313 14.699a.75.75 0 0 1 .988-.386l5 2.187a.75.75 0 1 1-.601 1.375l-5-2.188a.75.75 0 0 1-.387-.988m17.374 0a.75.75 0 0 1-.386.988l-16 7a.75.75 0 0 1-.601-1.374l16-7a.75.75 0 0 1 .987.386m-6.874 4.594a.75.75 0 0 1 .988-.386l5.5 2.406a.75.75 0 1 1-.601 1.374l-5.5-2.406a.75.75 0 0 1-.387-.988" clip-rule="evenodd"></svg:path>`,
})
export class SolarBonfireOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBook2BoldIcon],svg[solar-book-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.727 2.712c.306-.299.734-.494 1.544-.6C7.105 2.002 8.209 2 9.793 2h4.414c1.584 0 2.688.002 3.522.112c.81.106 1.238.301 1.544.6c.305.3.504.72.613 1.513c.112.817.114 1.899.114 3.45v7.839H7.346c-.903 0-1.519-.001-2.047.138c-.472.124-.91.326-1.299.592V7.676c0-1.552.002-2.634.114-3.451c.109-.793.308-1.213.613-1.513m2.86 3.072a.82.82 0 0 0-.828.81c0 .448.37.811.827.811h8.828a.82.82 0 0 0 .827-.81a.82.82 0 0 0-.827-.811zm-.828 4.594c0-.447.37-.81.827-.81h5.517a.82.82 0 0 1 .828.81a.82.82 0 0 1-.828.811H7.586a.82.82 0 0 1-.827-.81" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.473 17.135c-1.079 0-1.456.007-1.746.083a2.46 2.46 0 0 0-1.697 1.538q.023.571.084 1.019c.109.793.308 1.213.613 1.513c.306.299.734.494 1.544.6c.834.11 1.938.112 3.522.112h4.414c1.584 0 2.688-.002 3.522-.111c.81-.107 1.238-.302 1.544-.601c.216-.213.38-.486.495-.91H7.586a.82.82 0 0 1-.827-.81c0-.448.37-.811.827-.811H19.97c.02-.466.027-1 .03-1.622z"></svg:path>`,
})
export class SolarBook2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBook2BoldDuotoneIcon],svg[solar-book-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.727 2.733c.306-.308.734-.508 1.544-.618C7.105 2.002 8.209 2 9.793 2h4.414c1.584 0 2.688.002 3.522.115c.81.11 1.238.31 1.544.618c.305.308.504.74.613 1.557c.112.84.114 1.955.114 3.552V18H7.426c-1.084 0-1.462.006-1.753.068c-.513.11-.96.347-1.285.667c-.11.108-.164.161-.291.505A1.3 1.3 0 0 0 4 19.7V7.842c0-1.597.002-2.711.114-3.552c.109-.816.308-1.249.613-1.557" opacity=".5"></svg:path><svg:path fill="currentColor" d="M20 18H7.426c-1.084 0-1.462.006-1.753.068c-.513.11-.96.347-1.285.667c-.11.108-.164.161-.291.505s-.107.489-.066.78l.022.15c.11.653.31.998.616 1.244c.307.246.737.407 1.55.494c.837.09 1.946.092 3.536.092h4.43c1.59 0 2.7-.001 3.536-.092c.813-.087 1.243-.248 1.55-.494c.2-.16.354-.362.467-.664H8a.75.75 0 0 1 0-1.5h11.975c.018-.363.023-.776.025-1.25M7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7M8 9.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarBook2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBook2BrokenIcon],svg[solar-book-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"></svg:path><svg:path stroke-linecap="round" d="M8 7h8m-8 3.5h5m6.5 8.5H8m2 3c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8m-6 14c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16v-4"></svg:path></svg:g>`,
})
export class SolarBook2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBook2LineDuotoneIcon],svg[solar-book-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16z"></svg:path><svg:path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"></svg:path><svg:path stroke-linecap="round" d="M8 7h8m-8 3.5h5m6.5 8.5H8" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBook2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBook2LinearIcon],svg[solar-book-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16z"></svg:path><svg:path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"></svg:path><svg:path stroke-linecap="round" d="M8 7h8m-8 3.5h5m6.5 8.5H8"></svg:path></svg:g>`,
})
export class SolarBook2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBook2OutlineIcon],svg[solar-book-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.945 1.25h4.11c1.368 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v8.11c0 1.367 0 2.47-.116 3.337c-.121.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-4.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26a12 12 0 0 1-.082-.943a.75.75 0 0 1-.016-.392a66 66 0 0 1-.019-2.002v-8.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.982-2.26c.601-.602 1.36-.86 2.26-.981c.866-.117 1.969-.117 3.336-.117m-5.168 17c.015.353.039.664.076.942c.099.734.28 1.122.556 1.399c.277.277.666.457 1.4.556c.755.101 1.756.103 3.191.103h4c1.436 0 2.437-.002 3.192-.103c.734-.099 1.122-.28 1.4-.556c.196-.196.343-.449.448-.841H8a.75.75 0 0 1 0-1.5h11.223c.019-.431.025-.925.026-1.5H7.898c-.978 0-1.32.006-1.582.077a2.25 2.25 0 0 0-1.54 1.422m14.473-3H7.782c-.818 0-1.376 0-1.855.128a3.8 3.8 0 0 0-1.177.548V8c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399c.277-.277.666-.457 1.4-.556c.755-.101 1.756-.103 3.191-.103h4c1.436 0 2.437.002 3.192.103c.734.099 1.122.28 1.4.556c.276.277.456.665.555 1.4c.102.754.103 1.756.103 3.191zM7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7m0 3.5A.75.75 0 0 1 8 9.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBook2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookBoldIcon],svg[solar-book-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.271 2.112c-.81.106-1.238.301-1.544.6c-.305.3-.504.72-.613 1.513C4.002 5.042 4 6.124 4 7.675v8.57a4.2 4.2 0 0 1 1.299-.593c.528-.139 1.144-.139 2.047-.138H20V7.676c0-1.552-.002-2.634-.114-3.451c-.109-.793-.308-1.213-.613-1.513c-.306-.299-.734-.494-1.544-.6c-.834-.11-1.938-.112-3.522-.112H9.793c-1.584 0-2.688.002-3.522.112m.488 4.483c0-.448.37-.811.827-.811h8.828a.82.82 0 0 1 .827.81a.82.82 0 0 1-.827.811H7.586a.82.82 0 0 1-.827-.81m.827 2.973a.82.82 0 0 0-.827.81c0 .448.37.811.827.811h5.517a.82.82 0 0 0 .828-.81a.82.82 0 0 0-.828-.811z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.473 17.135H20c-.003 1.13-.021 1.974-.113 2.64c-.109.793-.308 1.213-.613 1.513c-.306.299-.734.494-1.544.6c-.834.11-1.938.112-3.522.112H9.793c-1.584 0-2.688-.002-3.522-.111c-.81-.107-1.238-.302-1.544-.601c-.305-.3-.504-.72-.613-1.513c-.041-.3-.068-.637-.084-1.02a2.46 2.46 0 0 1 1.697-1.537c.29-.076.667-.083 1.746-.083"></svg:path>`,
})
export class SolarBookBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookBoldDuotoneIcon],svg[solar-book-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.426 18H20c-.003.93-.022 1.623-.113 2.17c-.11.653-.31.998-.616 1.244c-.307.246-.737.407-1.55.494c-.837.09-1.946.092-3.536.092h-4.43c-1.59 0-2.7-.001-3.536-.092c-.813-.087-1.243-.248-1.55-.494s-.506-.591-.616-1.243l-.022-.151c-.04-.291-.06-.437.066-.78c.127-.344.181-.397.291-.505a2.6 2.6 0 0 1 1.285-.667c.29-.062.67-.068 1.753-.068"></svg:path><svg:path fill="currentColor" d="M4.727 2.733c.306-.308.734-.508 1.544-.618C7.105 2.002 8.209 2 9.793 2h4.414c1.584 0 2.688.002 3.522.115c.81.11 1.238.31 1.544.618c.305.308.504.74.613 1.557c.112.84.114 1.955.114 3.552V18H7.426c-1.084 0-1.462.006-1.753.068c-.513.11-.96.347-1.285.667c-.11.108-.164.161-.291.505A1.3 1.3 0 0 0 4 19.7V7.842c0-1.597.002-2.711.114-3.552c.109-.816.308-1.249.613-1.557" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7M8 9.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarBookBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookBookmarkBoldIcon],svg[solar-book-bookmark-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.271 2.112c-.81.106-1.238.301-1.544.6c-.305.3-.504.72-.613 1.513C4.002 5.042 4 6.124 4 7.675v8.57a4.2 4.2 0 0 1 1.299-.593c.528-.139 1.144-.139 2.047-.138H20V7.676c0-1.552-.002-2.634-.114-3.451c-.109-.793-.308-1.213-.613-1.513c-.306-.299-.734-.494-1.544-.6c-.834-.11-1.938-.112-3.522-.112H9.793c-1.584 0-2.688.002-3.522.112m.488 4.483c0-.448.37-.811.827-.811h8.828a.82.82 0 0 1 .827.81a.82.82 0 0 1-.827.811H7.586a.82.82 0 0 1-.827-.81m.827 2.973a.82.82 0 0 0-.827.81c0 .448.37.811.827.811h5.517a.82.82 0 0 0 .828-.81a.82.82 0 0 0-.828-.811z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.69 17.135H7.473c-1.079 0-1.456.007-1.746.083a2.46 2.46 0 0 0-1.697 1.538q.023.571.084 1.019c.109.793.308 1.213.613 1.513c.306.299.734.494 1.544.6c.834.11 1.938.112 3.522.112h4.414c1.584 0 2.688-.002 3.522-.111c.81-.107 1.238-.302 1.544-.601c.305-.3.504-.72.613-1.513c.092-.666.11-1.51.113-2.64h-6.896v3.007c0 .298 0 .447-.104.507c-.105.06-.248-.007-.534-.14l-1.371-.638c-.097-.045-.145-.067-.197-.067s-.101.022-.198.067l-1.37.638c-.287.133-.43.2-.535.14c-.104-.06-.104-.21-.104-.507z"></svg:path>`,
})
export class SolarBookBookmarkBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookBookmarkBoldDuotoneIcon],svg[solar-book-bookmark-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20.028V18H8v2.028c0 .277 0 .416.095.472s.224-.006.484-.13l1.242-.593c.088-.042.132-.063.179-.063s.091.02.179.063l1.242.593c.26.124.39.186.484.13c.095-.056.095-.195.095-.472" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 18h-.574c-1.084 0-1.462.006-1.753.068c-.513.11-.96.347-1.285.667c-.11.108-.164.161-.291.505s-.107.489-.066.78l.022.15c.11.653.31.998.616 1.244c.307.246.737.407 1.55.494c.837.09 1.946.092 3.536.092h4.43c1.59 0 2.7-.001 3.536-.092c.813-.087 1.243-.248 1.55-.494s.506-.591.616-1.243c.091-.548.11-1.241.113-2.171h-8v2.028c0 .277 0 .416-.095.472s-.224-.006-.484-.13l-1.242-.593c-.088-.042-.132-.063-.179-.063s-.091.02-.179.063l-1.242.593c-.26.124-.39.186-.484.13C8 20.444 8 20.305 8 20.028z"></svg:path><svg:path fill="currentColor" d="M4.727 2.733c.306-.308.734-.508 1.544-.618C7.105 2.002 8.209 2 9.793 2h4.414c1.584 0 2.688.002 3.522.115c.81.11 1.238.31 1.544.618c.305.308.504.74.613 1.557c.112.84.114 1.955.114 3.552V18H7.426c-1.084 0-1.462.006-1.753.068c-.513.11-.96.347-1.285.667c-.11.108-.164.161-.291.505A1.3 1.3 0 0 0 4 19.7V7.842c0-1.597.002-2.711.114-3.552c.109-.816.308-1.249.613-1.557" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7M8 9.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarBookBookmarkBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookBookmarkBrokenIcon],svg[solar-book-bookmark-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"></svg:path><svg:path stroke-linecap="round" d="M8 7h8m-8 3.5h5m0 5.5v3.53c0 .276 0 .414-.095.47s-.224-.006-.484-.13l-1.242-.59c-.088-.04-.132-.062-.179-.062s-.091.021-.179.063l-1.242.59c-.26.123-.39.185-.484.129C9 19.944 9 19.806 9 19.53v-3.08"></svg:path><svg:path stroke-linecap="round" d="M10 22c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8m-6 14c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16v-4"></svg:path></svg:g>`,
})
export class SolarBookBookmarkBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookBookmarkLineDuotoneIcon],svg[solar-book-bookmark-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16z"></svg:path><svg:path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"></svg:path><svg:path stroke-linecap="round" d="M8 7h8m-8 3.5h5m0 5.5v3.53c0 .276 0 .414-.095.47s-.224-.006-.484-.13l-1.242-.59c-.088-.04-.132-.062-.179-.062s-.091.021-.179.063l-1.242.59c-.26.123-.39.185-.484.129C9 19.944 9 19.806 9 19.53v-3.08" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBookBookmarkLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookBookmarkLinearIcon],svg[solar-book-bookmark-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16z"></svg:path><svg:path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"></svg:path><svg:path stroke-linecap="round" d="M8 7h8m-8 3.5h5m0 5.5v3.53c0 .276 0 .414-.095.47s-.224-.006-.484-.13l-1.242-.59c-.088-.04-.132-.062-.179-.062s-.091.021-.179.063l-1.242.59c-.26.123-.39.185-.484.129C9 19.944 9 19.806 9 19.53v-3.08"></svg:path></svg:g>`,
})
export class SolarBookBookmarkLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookBookmarkMinimalisticBoldIcon],svg[solar-book-bookmark-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.655 2.227c-.433.113-.711.273-.928.485c-.305.3-.504.72-.613 1.513C4.002 5.042 4 6.124 4 7.675v8.57a4.2 4.2 0 0 1 1.299-.593a3 3 0 0 1 .356-.072zM7.31 15.514H20V7.676c0-1.552-.002-2.634-.114-3.451c-.109-.793-.308-1.213-.613-1.513c-.306-.299-.734-.494-1.544-.6c-.834-.11-1.938-.112-3.522-.112H9.793c-1.002 0-1.812 0-2.483.029zm1.38 1.621H7.474c-1.08 0-1.457.007-1.747.083a2.46 2.46 0 0 0-1.697 1.538q.023.571.084 1.019c.109.793.308 1.213.613 1.513c.306.299.734.494 1.544.6c.834.11 1.938.112 3.522.112h4.414c1.584 0 2.689-.002 3.522-.111c.81-.107 1.239-.302 1.544-.601c.305-.3.504-.72.613-1.513c.092-.666.11-1.51.113-2.64h-6.895v3.007c0 .298 0 .447-.105.507s-.248-.007-.534-.14l-1.37-.638c-.098-.045-.146-.067-.198-.067s-.1.022-.198.067l-1.37.638c-.287.133-.43.2-.535.14c-.104-.06-.104-.21-.104-.507z"></svg:path>`,
})
export class SolarBookBookmarkMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookBookmarkMinimalisticBoldDuotoneIcon],svg[solar-book-bookmark-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.31 16.23H20V7.977c0-1.634-.002-2.774-.114-3.634c-.109-.835-.308-1.278-.613-1.593c-.306-.315-.734-.52-1.544-.633C16.895 2.002 15.791 2 14.207 2H9.793c-1.002 0-1.812 0-2.483.03zM5.655 2.24c-.433.119-.711.287-.928.51c-.305.316-.504.758-.613 1.593c-.112.86-.114 2-.114 3.634V17c.389-.28.827-.494 1.299-.624a3 3 0 0 1 .356-.076z"></svg:path><svg:path fill="currentColor" d="M6.271 2.115c-.81.11-1.238.31-1.544.618c-.305.308-.504.74-.613 1.557C4.002 5.13 4 6.245 4 7.842V19.7c0-.131.024-.263.097-.46c.127-.344.181-.397.291-.505a2.6 2.6 0 0 1 1.285-.667c.29-.062.67-.068 1.753-.068H8v2.028c0 .277 0 .416.095.472s.224-.006.484-.13l1.242-.593c.088-.042.132-.063.179-.063s.091.02.179.063l1.242.593c.26.124.39.186.484.13c.095-.056.095-.195.095-.472V18h8V7.842c0-1.597-.002-2.711-.114-3.552c-.109-.816-.308-1.249-.613-1.557c-.306-.308-.734-.508-1.544-.618C16.895 2.002 15.791 2 14.207 2H9.793c-1.584 0-2.688.002-3.522.115" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 18h-.574c-1.084 0-1.462.006-1.753.068c-.513.11-.96.347-1.285.667c-.11.108-.164.161-.291.505s-.107.489-.066.78l.022.15c.11.653.31.998.616 1.244c.307.246.737.407 1.55.494c.837.09 1.946.092 3.536.092h4.43c1.59 0 2.7-.001 3.536-.092c.813-.087 1.243-.248 1.55-.494s.506-.591.616-1.243c.091-.548.11-1.241.113-2.171h-8v2.028c0 .277 0 .416-.095.472s-.224-.006-.484-.13l-1.242-.593c-.088-.042-.132-.063-.179-.063s-.091.02-.179.063l-1.242.593c-.26.124-.39.186-.484.13C8 20.444 8 20.305 8 20.028z"></svg:path>`,
})
export class SolarBookBookmarkMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookBookmarkMinimalisticBrokenIcon],svg[solar-book-bookmark-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10 22c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8m-6 14c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16v-4"></svg:path><svg:path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"></svg:path><svg:path stroke-linecap="round" d="M7 16V9m0-6.5V5m6 11v3.53c0 .276 0 .414-.095.47s-.224-.006-.484-.13l-1.242-.59c-.088-.04-.132-.062-.179-.062s-.091.021-.179.063l-1.242.59c-.26.123-.39.185-.484.129C9 19.944 9 19.806 9 19.53v-3.08"></svg:path></svg:g>`,
})
export class SolarBookBookmarkMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookBookmarkMinimalisticLineDuotoneIcon],svg[solar-book-bookmark-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16z"></svg:path><svg:path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"></svg:path><svg:path stroke-linecap="round" d="M7 16V2.5M13 16v3.53c0 .276 0 .414-.095.47s-.224-.006-.484-.13l-1.242-.59c-.088-.04-.132-.062-.179-.062s-.091.021-.179.063l-1.242.59c-.26.123-.39.185-.484.129C9 19.944 9 19.806 9 19.53v-3.08" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBookBookmarkMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookBookmarkMinimalisticLinearIcon],svg[solar-book-bookmark-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16z"></svg:path><svg:path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"></svg:path><svg:path stroke-linecap="round" d="M7 16V2.5M13 16v3.53c0 .276 0 .414-.095.47s-.224-.006-.484-.13l-1.242-.59c-.088-.04-.132-.062-.179-.062s-.091.021-.179.063l-1.242.59c-.26.123-.39.185-.484.129C9 19.944 9 19.806 9 19.53v-3.08"></svg:path></svg:g>`,
})
export class SolarBookBookmarkMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookBookmarkMinimalisticOutlineIcon],svg[solar-book-bookmark-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.945 1.25h4.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v8.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-4.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-8.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M6.25 2.96c-.392.105-.645.253-.841.449c-.277.277-.457.665-.556 1.4C4.752 5.562 4.75 6.564 4.75 8v7.926c.352-.246.75-.434 1.177-.548q.155-.042.323-.067zm1.5-.183V15.25h11.5V8c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103h-4c-.908 0-1.642 0-2.25.027m11.5 13.973h-5.5v2.808c0 .111 0 .27-.02.406a.94.94 0 0 1-.445.683a.96.96 0 0 1-.783.072c-.13-.04-.272-.109-.378-.159l-.025-.012L11 20.026l-1.1.522l-.024.012c-.106.05-.248.118-.378.159a.96.96 0 0 1-.783-.072a.94.94 0 0 1-.444-.683c-.021-.136-.021-.295-.021-.406V16.75h-.352c-.978 0-1.32.006-1.583.077a2.25 2.25 0 0 0-1.538 1.422c.015.354.039.665.076.943c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h4c1.435 0 2.436-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.083-.615.099-1.395.102-2.441m-9.5 0v2.21l.75-.357l.008-.004a1.1 1.1 0 0 1 .492-.13a1.1 1.1 0 0 1 .5.134l.75.356V16.75z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBookBookmarkMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookBookmarkOutlineIcon],svg[solar-book-bookmark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.945 1.25h4.11c1.368 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v8.11c0 1.367 0 2.47-.116 3.337c-.121.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-4.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26a12 12 0 0 1-.082-.943a.75.75 0 0 1-.016-.392a66 66 0 0 1-.019-2.002v-8.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.982-2.26c.601-.602 1.36-.86 2.26-.981c.866-.117 1.969-.117 3.336-.117m-5.168 17c.015.353.039.664.076.942c.099.734.28 1.122.556 1.399c.277.277.666.457 1.4.556c.755.101 1.756.103 3.191.103h4c1.436 0 2.437-.002 3.192-.103c.734-.099 1.122-.28 1.4-.556c.276-.277.456-.665.555-1.4c.083-.615.1-1.395.102-2.441H13.75v2.808c0 .111 0 .27-.02.406a.94.94 0 0 1-.445.683a.96.96 0 0 1-.783.072c-.13-.04-.272-.109-.378-.159l-.024-.012l-1.1-.522l-1.1.522l-.024.012c-.106.05-.248.118-.378.159a.96.96 0 0 1-.783-.072a.94.94 0 0 1-.444-.683a3 3 0 0 1-.02-.406V16.75h-.353c-.978 0-1.32.006-1.582.077a2.25 2.25 0 0 0-1.54 1.422m4.973-1.5v2.21l.75-.357l.008-.004a1.1 1.1 0 0 1 .492-.13c.236 0 .443.105.492.13l.009.004l.75.356V16.75zm-1.852-1.5h-.116c-.818 0-1.376 0-1.855.128a3.8 3.8 0 0 0-1.177.548V8c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399c.277-.277.666-.457 1.4-.556c.755-.101 1.756-.103 3.191-.103h4c1.436 0 2.437.002 3.192.103c.734.099 1.122.28 1.4.556c.276.277.456.665.555 1.4c.102.754.103 1.756.103 3.191v7.25zM7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7m0 3.5A.75.75 0 0 1 8 9.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBookBookmarkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookBrokenIcon],svg[solar-book-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"></svg:path><svg:path stroke-linecap="round" d="M8 7h8m-8 3.5h5M10 22c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8m-6 14c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16v-4"></svg:path></svg:g>`,
})
export class SolarBookBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookLineDuotoneIcon],svg[solar-book-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16z"></svg:path><svg:path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M8 7h8m-8 3.5h5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBookLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookLinearIcon],svg[solar-book-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16z"></svg:path><svg:path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"></svg:path><svg:path stroke-linecap="round" d="M8 7h8m-8 3.5h5"></svg:path></svg:g>`,
})
export class SolarBookLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookMinimalisticBoldIcon],svg[solar-book-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.655 2.227c-.433.113-.711.273-.928.485c-.305.3-.504.72-.613 1.513C4.002 5.042 4 6.124 4 7.675v8.57a4.2 4.2 0 0 1 1.299-.593a3 3 0 0 1 .356-.072zM7.31 15.514H20V7.676c0-1.552-.002-2.634-.114-3.451c-.109-.793-.308-1.213-.613-1.513c-.306-.299-.734-.494-1.544-.6c-.834-.11-1.938-.112-3.522-.112H9.793c-1.002 0-1.812 0-2.483.029zm.163 1.621c-1.079 0-1.456.007-1.746.083a2.46 2.46 0 0 0-1.697 1.538q.023.571.084 1.019c.109.793.308 1.213.613 1.513c.306.299.734.494 1.544.6c.834.11 1.938.112 3.522.112h4.414c1.584 0 2.688-.002 3.522-.111c.81-.107 1.238-.302 1.544-.601c.305-.3.504-.72.613-1.513c.092-.666.11-1.51.113-2.64z"></svg:path>`,
})
export class SolarBookMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookMinimalisticBoldDuotoneIcon],svg[solar-book-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.426 18H20c-.003.93-.022 1.623-.113 2.17c-.11.653-.31.998-.616 1.244c-.307.246-.737.407-1.55.494c-.837.09-1.946.092-3.536.092h-4.43c-1.59 0-2.7-.001-3.536-.092c-.813-.087-1.243-.248-1.55-.494s-.506-.591-.616-1.243l-.022-.151c-.04-.291-.06-.437.066-.78c.127-.344.181-.397.291-.505a2.6 2.6 0 0 1 1.285-.667c.29-.062.67-.068 1.753-.068"></svg:path><svg:path fill="currentColor" d="M4.727 2.733c.306-.308.734-.508 1.544-.618C7.105 2.002 8.209 2 9.793 2h4.414c1.584 0 2.688.002 3.522.115c.81.11 1.238.31 1.544.618c.305.308.504.74.613 1.557c.112.84.114 1.955.114 3.552V18H7.426c-1.084 0-1.462.006-1.753.068c-.513.11-.96.347-1.285.667c-.11.108-.164.161-.291.505A1.3 1.3 0 0 0 4 19.7V7.842c0-1.597.002-2.711.114-3.552c.109-.816.308-1.249.613-1.557" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.31 16.23H20V7.977c0-1.634-.002-2.774-.114-3.634c-.109-.835-.308-1.278-.613-1.593c-.306-.315-.734-.52-1.544-.633C16.895 2.002 15.791 2 14.207 2H9.793c-1.002 0-1.812 0-2.483.03zM5.655 2.24c-.433.119-.711.287-.928.51c-.305.316-.504.758-.613 1.593c-.112.86-.114 2-.114 3.634V17c.389-.28.827-.494 1.299-.624a3 3 0 0 1 .356-.076z"></svg:path>`,
})
export class SolarBookMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookMinimalisticBrokenIcon],svg[solar-book-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"></svg:path><svg:path stroke-linecap="round" d="M7 16V2.5M10 22c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8m-6 14c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16v-4"></svg:path></svg:g>`,
})
export class SolarBookMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookMinimalisticLineDuotoneIcon],svg[solar-book-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16z"></svg:path><svg:path fill="currentColor" d="m6.121 16.102l-.194-.724zM3.276 18.03a.75.75 0 0 0 1.448.389zM6.25 16a.75.75 0 0 0 1.5 0zm1.5-13.5a.75.75 0 0 0-1.5 0zm.148 14.25h12v-1.5h-12zm0-1.5c-.882 0-1.47-.006-1.97.128l.387 1.449c.263-.07.605-.077 1.583-.077zm-1.97.128a3.75 3.75 0 0 0-2.652 2.651l1.448.389a2.25 2.25 0 0 1 1.591-1.591zM7.75 16V2.5h-1.5V16z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBookMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookMinimalisticLinearIcon],svg[solar-book-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16z"></svg:path><svg:path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"></svg:path><svg:path stroke-linecap="round" d="M7 16V2.5"></svg:path></svg:g>`,
})
export class SolarBookMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookMinimalisticOutlineIcon],svg[solar-book-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.945 1.25h4.11c1.368 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v8.11c0 1.367 0 2.47-.116 3.337c-.121.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-4.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26a12 12 0 0 1-.082-.943a.75.75 0 0 1-.016-.392a66 66 0 0 1-.019-2.002v-8.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.982-2.26c.601-.602 1.36-.86 2.26-.981c.866-.117 1.969-.117 3.336-.117m-5.168 17c.015.353.039.664.076.942c.099.734.28 1.122.556 1.399c.277.277.666.457 1.4.556c.755.101 1.756.103 3.191.103h4c1.436 0 2.437-.002 3.192-.103c.734-.099 1.122-.28 1.4-.556c.276-.277.456-.665.555-1.4c.083-.615.1-1.395.102-2.441H7.898c-.978 0-1.32.006-1.582.077a2.25 2.25 0 0 0-1.54 1.422m14.473-3V8c0-1.435-.001-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.399-.556c-.755-.101-1.756-.103-3.192-.103h-4c-.908 0-1.642 0-2.25.027V15.25zm-13 .061q-.168.026-.323.067a3.8 3.8 0 0 0-1.177.548V8c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399c.197-.196.45-.344.841-.449z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBookMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookOutlineIcon],svg[solar-book-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7M8 9.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.945 1.25c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.602.602-.86 1.36-.981 2.26c-.117.867-.117 1.97-.117 3.337v8.11c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.981 2.26c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h4.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-8.11c0-1.367 0-2.47-.116-3.337c-.122-.9-.38-1.658-.982-2.26s-1.36-.86-2.26-.981c-.867-.117-1.97-.117-3.337-.117zM5.41 3.409c.277-.277.665-.457 1.4-.556c.754-.101 1.756-.103 3.191-.103h4c1.435 0 2.436.002 3.192.103c.734.099 1.122.28 1.399.556c.277.277.457.665.556 1.4c.101.754.103 1.756.103 3.191v7.25H7.782c-.818 0-1.376 0-1.855.128a3.8 3.8 0 0 0-1.177.548V8c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399m-.632 14.84c.015.354.039.665.076.943c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h4c1.435 0 2.436-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.083-.615.099-1.395.102-2.441H7.898c-.978 0-1.32.006-1.583.077a2.25 2.25 0 0 0-1.538 1.422" clip-rule="evenodd"></svg:path>`,
})
export class SolarBookOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkBoldIcon],svg[solar-bookmark-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 11.098v4.993c0 3.096 0 4.645-.734 5.321c-.35.323-.792.526-1.263.58c-.987.113-2.14-.907-4.445-2.946c-1.02-.901-1.529-1.352-2.118-1.47a2.2 2.2 0 0 0-.88 0c-.59.118-1.099.569-2.118 1.47c-2.305 2.039-3.458 3.059-4.445 2.945a2.24 2.24 0 0 1-1.263-.579C3 20.736 3 19.188 3 16.091v-4.994C3 6.81 3 4.666 4.318 3.333S7.758 2 12 2s6.364 0 7.682 1.332S21 6.81 21 11.098M8.25 6A.75.75 0 0 1 9 5.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 6" clip-rule="evenodd"></svg:path>`,
})
export class SolarBookmarkBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkBoldDuotoneIcon],svg[solar-bookmark-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11.098v4.993c0 3.096 0 4.645-.734 5.321c-.35.323-.792.526-1.263.58c-.987.113-2.14-.907-4.445-2.946c-1.02-.901-1.529-1.352-2.118-1.47a2.2 2.2 0 0 0-.88 0c-.59.118-1.099.569-2.118 1.47c-2.305 2.039-3.458 3.059-4.445 2.945a2.24 2.24 0 0 1-1.263-.579C3 20.736 3 19.188 3 16.091v-4.994C3 6.81 3 4.666 4.318 3.333S7.758 2 12 2s6.364 0 7.682 1.332S21 6.81 21 11.098" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 5.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarBookmarkBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkBrokenIcon],svg[solar-bookmark-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 11.098v4.993c0 3.096 0 4.645.734 5.321c.35.323.792.526 1.263.58c.987.113 2.14-.907 4.445-2.946c1.02-.901 1.529-1.352 2.118-1.47c.29-.06.59-.06.88 0c.59.118 1.099.569 2.118 1.47c2.305 2.039 3.458 3.059 4.445 2.945c.47-.053.913-.256 1.263-.579c.734-.676.734-2.224.734-5.321v-4.994c0-4.288 0-6.432-1.318-7.765S16.242 2 12 2S5.636 2 4.318 3.332C3.511 4.148 3.198 5.27 3.077 7M15 6H9"></svg:path>`,
})
export class SolarBookmarkBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkCircleBoldIcon],svg[solar-bookmark-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m4-7.954v-2.497c0-2.145 0-3.217-.586-3.883S13.886 7 12 7s-2.828 0-3.414.666S8 9.404 8 11.55v2.497c0 1.548 0 2.322.326 2.66a.95.95 0 0 0 .562.29c.438.056.95-.453 1.975-1.473c.453-.45.68-.676.942-.735a.9.9 0 0 1 .39 0c.262.059.489.284.942.735c1.024 1.02 1.537 1.53 1.976 1.473a.95.95 0 0 0 .56-.29c.327-.338.327-1.112.327-2.66" clip-rule="evenodd"></svg:path>`,
})
export class SolarBookmarkCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkCircleBoldDuotoneIcon],svg[solar-bookmark-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16 14.046v-2.497c0-2.145 0-3.217-.586-3.883S13.886 7 12 7s-2.828 0-3.414.666S8 9.404 8 11.55v2.497c0 1.548 0 2.322.326 2.66a.95.95 0 0 0 .562.29c.438.056.95-.453 1.975-1.473c.453-.45.68-.676.942-.735a.9.9 0 0 1 .39 0c.262.059.489.284.942.735c1.024 1.02 1.537 1.53 1.976 1.473a.95.95 0 0 0 .56-.29c.327-.338.327-1.112.327-2.66"></svg:path>`,
})
export class SolarBookmarkCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkCircleBrokenIcon],svg[solar-bookmark-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 14.046v-2.497c0-2.145 0-3.217-.586-3.883S13.886 7 12 7s-2.828 0-3.414.666S8 9.404 8 11.55v2.497c0 1.548 0 2.322.326 2.66a.95.95 0 0 0 .562.29c.438.056.95-.453 1.975-1.473c.453-.45.68-.676.942-.735a.9.9 0 0 1 .39 0c.262.059.489.284.942.735c1.024 1.02 1.537 1.53 1.976 1.473a.95.95 0 0 0 .56-.29c.327-.338.327-1.112.327-2.66Z"></svg:path><svg:path stroke-linecap="round" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarBookmarkCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkCircleLineDuotoneIcon],svg[solar-bookmark-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 14.046v-2.497c0-2.145 0-3.217-.586-3.883S13.886 7 12 7s-2.828 0-3.414.666S8 9.404 8 11.55v2.497c0 1.548 0 2.322.326 2.66a.95.95 0 0 0 .562.29c.438.056.95-.453 1.975-1.473c.453-.45.68-.676.942-.735a.9.9 0 0 1 .39 0c.262.059.489.284.942.735c1.024 1.02 1.537 1.53 1.976 1.473a.95.95 0 0 0 .56-.29c.327-.338.327-1.112.327-2.66Z"></svg:path><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBookmarkCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkCircleLinearIcon],svg[solar-bookmark-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 14.046v-2.497c0-2.145 0-3.217-.586-3.883S13.886 7 12 7s-2.828 0-3.414.666S8 9.404 8 11.55v2.497c0 1.548 0 2.322.326 2.66a.95.95 0 0 0 .562.29c.438.056.95-.453 1.975-1.473c.453-.45.68-.676.942-.735a.9.9 0 0 1 .39 0c.262.059.489.284.942.735c1.024 1.02 1.537 1.53 1.976 1.473a.95.95 0 0 0 .56-.29c.327-.338.327-1.112.327-2.66Z"></svg:path><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"></svg:path></svg:g>`,
})
export class SolarBookmarkCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkCircleOutlineIcon],svg[solar-bookmark-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m10.692-5.75h.116c.893 0 1.648 0 2.25.092c.647.099 1.22.318 1.67.829c.437.497.612 1.108.694 1.794c.078.664.078 1.505.078 2.536v2.585c0 .74 0 1.35-.044 1.814c-.043.446-.137.958-.492 1.327a1.7 1.7 0 0 1-1.006.513c-.55.07-1.005-.231-1.331-.49c-.344-.274-.752-.68-1.237-1.163l-.032-.032a8 8 0 0 0-.49-.467a1 1 0 0 0-.097-.07a.1.1 0 0 0-.042 0a1 1 0 0 0-.097.07a8 8 0 0 0-.49.467l-.032.032c-.485.482-.893.889-1.237 1.162c-.326.26-.782.561-1.331.49a1.7 1.7 0 0 1-1.006-.512c-.355-.369-.45-.88-.492-1.327c-.044-.465-.044-1.074-.044-1.814V11.5c0-1.031 0-1.872.078-2.536c.082-.686.257-1.297.695-1.794c.45-.511 1.022-.73 1.67-.83c.6-.091 1.356-.091 2.25-.091m.043 9.264l-.001.001zM9.92 7.823c-.443.068-.634.183-.77.337c-.148.17-.266.428-.331.98c-.067.565-.068 1.317-.068 2.408v2.497c0 .79 0 1.327.037 1.713c.032.33.082.424.086.433a.2.2 0 0 0 .072.05c.036-.018.113-.062.243-.166c.27-.215.62-.562 1.146-1.085l.022-.021c.208-.207.4-.398.573-.54a1.7 1.7 0 0 1 .71-.374a1.6 1.6 0 0 1 .722 0c.294.067.523.22.71.373c.174.143.365.334.573.54l.022.022c.526.523.875.87 1.146 1.085c.13.104.207.148.243.166a.2.2 0 0 0 .072-.05c.004-.01.054-.104.086-.433c.036-.386.037-.923.037-1.713v-2.497c0-1.091-.001-1.843-.068-2.408c-.065-.552-.183-.81-.331-.98c-.136-.154-.327-.269-.77-.336c-.475-.073-1.114-.075-2.081-.075s-1.606.002-2.081.075" clip-rule="evenodd"></svg:path>`,
})
export class SolarBookmarkCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkLineDuotoneIcon],svg[solar-bookmark-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21 16.09v-4.992c0-4.29 0-6.433-1.318-7.766C18.364 2 16.242 2 12 2S5.636 2 4.318 3.332S3 6.81 3 11.098v4.993c0 3.096 0 4.645.734 5.321c.35.323.792.526 1.263.58c.987.113 2.14-.907 4.445-2.946c1.02-.901 1.529-1.352 2.118-1.47c.29-.06.59-.06.88 0c.59.118 1.099.569 2.118 1.47c2.305 2.039 3.458 3.059 4.445 2.945c.47-.053.913-.256 1.263-.579c.734-.676.734-2.224.734-5.321Z"></svg:path><svg:path stroke-linecap="round" d="M15 6H9" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBookmarkLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkLinearIcon],svg[solar-bookmark-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21 16.09v-4.992c0-4.29 0-6.433-1.318-7.766C18.364 2 16.242 2 12 2S5.636 2 4.318 3.332S3 6.81 3 11.098v4.993c0 3.096 0 4.645.734 5.321c.35.323.792.526 1.263.58c.987.113 2.14-.907 4.445-2.946c1.02-.901 1.529-1.352 2.118-1.47c.29-.06.59-.06.88 0c.59.118 1.099.569 2.118 1.47c2.305 2.039 3.458 3.059 4.445 2.945c.47-.053.913-.256 1.263-.579c.734-.676.734-2.224.734-5.321Z"></svg:path><svg:path stroke-linecap="round" d="M15 6H9"></svg:path></svg:g>`,
})
export class SolarBookmarkLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkOpenedBoldIcon],svg[solar-bookmark-opened-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-.882 0-1.68.01-2.407c.056-.195.123-.366.203-.522a4.25 4.25 0 0 1 1.858-1.858c.411-.21.919-.333 1.706-.397q.225-.02.473-.03v4.045c0 .468 0 .851.017 1.153c.018.298.054.606.177.881a2.25 2.25 0 0 0 2.587 1.273c.293-.07.56-.23.806-.398c.25-.17.553-.404.924-.69l.018-.014c.47-.36.602-.456.723-.508a1.25 1.25 0 0 1 .996 0c.121.052.253.147.723.508l.018.015c.37.285.675.519.924.69c.247.167.513.326.806.397a2.25 2.25 0 0 0 2.587-1.273c.123-.275.16-.583.177-.881c.017-.302.017-.685.017-1.153V6.785q.248.012.473.03c.787.065 1.295.189 1.707.398a4.25 4.25 0 0 1 1.857 1.858c.08.156.147.327.203.522c.01.726.01 1.525.01 2.407c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m19.843-5.277c-.173-1.474-.538-2.49-1.308-3.259C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464c-.769.77-1.134 1.785-1.307 3.26a5.8 5.8 0 0 1 1.233-.847c.658-.336 1.385-.484 2.265-.556c.864-.071 1.94-.071 3.311-.071h6.068c1.371 0 2.447 0 3.311.07c.88.073 1.607.221 2.265.557c.45.228.863.514 1.233.846" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.75 10.808V6.752Q8.318 6.75 9 6.75h6q.682 0 1.25.002v4.056c0 .496 0 .836-.015 1.09c-.015.262-.043.343-.05.358a.75.75 0 0 1-.862.425c-.016-.004-.097-.032-.315-.18a21 21 0 0 1-.872-.653l-.067-.052c-.37-.285-.659-.507-.973-.644a2.75 2.75 0 0 0-2.192 0c-.314.137-.603.359-.973.644l-.067.052c-.393.303-.663.51-.873.653c-.217.148-.298.176-.314.18a.75.75 0 0 1-.862-.425c-.007-.015-.035-.096-.05-.358a22 22 0 0 1-.015-1.09"></svg:path>`,
})
export class SolarBookmarkOpenedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkOpenedBoldDuotoneIcon],svg[solar-bookmark-opened-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12q.001-1.002-.004-1.867c-.002-.279-.003-.418-.057-.641a1.5 1.5 0 0 0-.152-.421a4.25 4.25 0 0 0-1.857-1.858c-.412-.21-.92-.333-1.707-.397q-.224-.02-.473-.03l-1.5-.034v4.056c0 .496 0 .836-.015 1.09c-.015.262-.043.343-.05.358a.75.75 0 0 1-.862.425c-.016-.004-.097-.032-.315-.18a21 21 0 0 1-.872-.653l-.067-.052c-.37-.285-.659-.507-.973-.644a2.75 2.75 0 0 0-2.192 0c-.314.137-.603.359-.973.644l-.067.052c-.393.303-.663.51-.873.653c-.217.148-.298.176-.314.18a.75.75 0 0 1-.862-.425c-.007-.015-.035-.096-.05-.358a22 22 0 0 1-.015-1.09V6.752l-1.5.033q-.249.012-.473.03c-.787.065-1.295.189-1.706.398A4.25 4.25 0 0 0 2.204 9.09c-.06.12-.09.18-.143.402c-.054.222-.055.362-.057.641Q2 10.999 2 12c0 4.714 0 7.071 1.464 8.535" clip-rule="evenodd" opacity=".6"></svg:path><svg:path fill="currentColor" d="M7.75 6.752v4.056c0 .496 0 .836.015 1.09c.015.262.043.343.05.358a.75.75 0 0 0 .862.425c.016-.004.097-.032.314-.18c.21-.143.48-.35.873-.653l.067-.052c.37-.285.659-.507.973-.644a2.75 2.75 0 0 1 2.192 0c.314.137.603.36.973.645l.067.051c.393.303.663.51.873.653c.217.148.298.176.314.18a.75.75 0 0 0 .862-.425c.007-.015.035-.096.05-.358c.015-.254.015-.594.015-1.09V6.752z"></svg:path><svg:path fill="currentColor" d="M20.535 3.464C19.071 2 16.714 2 12 2S4.928 2 3.464 3.464c-.77.77-1.134 1.785-1.308 3.26l-.119 2.878q.01-.052.024-.11a1.4 1.4 0 0 1 .143-.402l.01-.02A4.25 4.25 0 0 1 4.07 7.214c.411-.21.919-.333 1.706-.397q.225-.018.473-.03l1.5-.034V10.5h8.5V6.752l1.5.033q.248.014.473.03c.787.065 1.295.189 1.707.398a4.25 4.25 0 0 1 1.857 1.858l.01.019l.046.096V6.723c-.174-1.474-.539-2.49-1.308-3.259M2.002 10.5v-.056L2 10.5z" opacity=".4"></svg:path>`,
})
export class SolarBookmarkOpenedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkOpenedBrokenIcon],svg[solar-bookmark-opened-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2m9.945 14c-.11 2.193-.436 3.562-1.41 4.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536c.974-.973 2.343-1.3 4.536-1.409"></svg:path><svg:path stroke-linecap="round" d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185c.396.778.505 1.73.534 3.27"></svg:path><svg:path d="M17 6v4.808c0 .975 0 1.462-.13 1.753a1.5 1.5 0 0 1-1.724.848c-.31-.075-.695-.372-1.468-.967c-.436-.336-.654-.504-.881-.602a2 2 0 0 0-1.594 0c-.227.098-.445.266-.881.602c-.773.595-1.159.892-1.468.967a1.5 1.5 0 0 1-1.725-.848C7 12.27 7 11.783 7 10.808V6"></svg:path></svg:g>`,
})
export class SolarBookmarkOpenedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkOpenedLineDuotoneIcon],svg[solar-bookmark-opened-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12" opacity=".5"></svg:path><svg:path d="M14 6h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 8.73C2 9.8 2 11.2 2 14s0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C5.8 22 7.2 22 10 22h4c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C22 18.2 22 16.8 22 14s0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C18.2 6 16.8 6 14 6Z"></svg:path><svg:path d="M17 6v4.808c0 .975 0 1.462-.13 1.753a1.5 1.5 0 0 1-1.724.848c-.31-.075-.695-.372-1.468-.967c-.436-.336-.654-.504-.881-.602a2 2 0 0 0-1.594 0c-.227.098-.445.266-.881.602c-.773.595-1.159.892-1.468.967a1.5 1.5 0 0 1-1.725-.848C7 12.27 7 11.783 7 10.808V6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBookmarkOpenedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkOpenedLinearIcon],svg[solar-bookmark-opened-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14"></svg:path><svg:path d="M17 6v4.808c0 .975 0 1.462-.13 1.753a1.5 1.5 0 0 1-1.724.848c-.31-.075-.695-.372-1.468-.967c-.436-.336-.654-.504-.881-.602a2 2 0 0 0-1.594 0c-.227.098-.445.266-.881.602c-.773.595-1.159.892-1.468.967a1.5 1.5 0 0 1-1.725-.848C7 12.27 7 11.783 7 10.808V6"></svg:path></svg:g>`,
})
export class SolarBookmarkOpenedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkOpenedOutlineIcon],svg[solar-bookmark-opened-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529V14h-.005c-.012 1.414-.052 2.598-.185 3.586c-.194 1.445-.6 2.585-1.494 3.48c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.133-.988-.173-2.172-.185-3.586H1.25v-2.057c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m9.13 5.364q.026.18.045.373a5.8 5.8 0 0 0-1.508-1.11c-.658-.336-1.385-.484-2.265-.556c-.864-.071-1.94-.071-3.311-.071H9.966c-1.371 0-2.447 0-3.311.07c-.88.073-1.607.221-2.265.557a5.8 5.8 0 0 0-1.508 1.11q.02-.192.044-.373c.172-1.279.5-2.05 1.069-2.62c.57-.569 1.34-.896 2.619-1.068c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619M2.927 17.386c-.146-1.09-.171-2.469-.175-4.289c.003-.959.014-1.705.065-2.32c.064-.787.188-1.295.397-1.706a4.25 4.25 0 0 1 1.858-1.858c.311-.158.678-.268 1.179-.34v3.958c0 .468 0 .851.017 1.153c.018.298.054.606.177.881a2.25 2.25 0 0 0 2.587 1.273c.293-.07.56-.23.806-.398c.25-.17.553-.404.924-.69l.018-.014c.47-.36.602-.456.723-.508a1.25 1.25 0 0 1 .996 0c.121.052.253.147.723.508l.018.015c.37.285.675.519.924.69c.247.167.513.326.806.397a2.25 2.25 0 0 0 2.587-1.273c.123-.275.16-.583.177-.881c.017-.302.017-.685.017-1.153V6.873c.501.072.868.182 1.18.34a4.25 4.25 0 0 1 1.857 1.858c.21.411.333.919.397 1.706c.05.615.062 1.361.065 2.32c-.004 1.82-.029 3.199-.175 4.29c-.172 1.278-.5 2.049-1.069 2.618c-.57.57-1.34.897-2.619 1.069c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619M14 6.75c.894 0 1.63 0 2.25.017v4.04c0 .497 0 .837-.015 1.09c-.015.263-.043.344-.05.36a.75.75 0 0 1-.862.424c-.016-.004-.097-.032-.315-.18a21 21 0 0 1-.872-.653l-.067-.052c-.37-.285-.659-.507-.973-.644a2.75 2.75 0 0 0-2.192 0c-.314.137-.603.359-.973.644l-.067.052c-.393.303-.663.51-.873.653c-.217.148-.298.176-.314.18a.75.75 0 0 1-.862-.425c-.007-.015-.035-.096-.05-.358a22 22 0 0 1-.015-1.09V6.767C8.37 6.75 9.106 6.75 10 6.75z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBookmarkOpenedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkOutlineIcon],svg[solar-bookmark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25c-2.073 0-3.706 0-4.982.173c-1.31.178-2.355.552-3.176 1.382c-.82.829-1.188 1.882-1.364 3.202c-.171 1.289-.171 2.938-.171 5.034v5.098c0 1.508 0 2.701.096 3.6c.095.888.298 1.689.88 2.225c.466.43 1.056.7 1.686.773c.787.09 1.522-.286 2.247-.8c.733-.518 1.622-1.305 2.744-2.297l.036-.032c.52-.46.872-.77 1.166-.986c.284-.207.457-.282.603-.312a1.5 1.5 0 0 1 .584 0c.146.03.32.105.603.312c.294.215.646.526 1.166.986l.037.032c1.121.992 2.01 1.779 2.743 2.298c.725.513 1.46.889 2.247.799a3 3 0 0 0 1.686-.773c.581-.536.785-1.337.88-2.225c.096-.899.096-2.092.096-3.6v-5.098c0-2.096 0-3.746-.171-5.034c-.176-1.32-.544-2.373-1.364-3.202c-.821-.83-1.866-1.204-3.176-1.382c-1.276-.173-2.909-.173-4.982-.173zM4.85 3.86c.497-.502 1.172-.795 2.312-.95c1.163-.158 2.694-.16 4.837-.16s3.674.002 4.837.16c1.14.155 1.815.448 2.312.95c.498.503.789 1.188.943 2.345c.156 1.178.158 2.727.158 4.893v4.993c0 1.566-.001 2.68-.087 3.488c-.09.83-.253 1.141-.405 1.282c-.234.215-.528.35-.84.385c-.2.023-.534-.054-1.21-.532c-.658-.467-1.487-1.198-2.653-2.23l-.026-.023c-.488-.431-.892-.788-1.249-1.05c-.373-.272-.749-.482-1.192-.571a3 3 0 0 0-1.176 0c-.443.09-.82.299-1.192.572c-.357.26-.761.618-1.249 1.049l-.026.023c-1.166 1.032-1.995 1.763-2.653 2.23c-.676.478-1.01.555-1.21.532a1.5 1.5 0 0 1-.84-.385c-.152-.141-.316-.452-.404-1.282c-.087-.809-.088-1.922-.088-3.488v-4.994c0-2.165.002-3.714.158-4.892c.154-1.157.445-1.842.943-2.345" clip-rule="evenodd"></svg:path>`,
})
export class SolarBookmarkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkSquareBoldIcon],svg[solar-bookmark-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536c-.683-.684-1.562-1.048-2.785-1.242v9.609c0 .468 0 .851-.017 1.153c-.018.298-.054.606-.177.881a2.25 2.25 0 0 1-2.587 1.273c-.293-.07-.56-.23-.806-.398c-.25-.17-.553-.404-.924-.69l-.018-.014c-.47-.36-.602-.456-.723-.508a1.25 1.25 0 0 0-.996 0c-.121.052-.253.147-.723.508l-.018.015c-.37.285-.675.519-.924.69c-.247.167-.513.326-.806.397a2.25 2.25 0 0 1-2.587-1.273c-.123-.275-.16-.583-.177-.881c-.017-.302-.017-.685-.017-1.153v-9.61c-1.223.195-2.101.56-2.786 1.243M7 17.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.75 2.069v9.739c0 .496 0 .836.015 1.09c.015.262.043.343.05.358a.75.75 0 0 0 .862.425c.016-.004.097-.032.314-.18c.21-.143.48-.35.873-.653l.067-.052c.37-.285.659-.507.973-.644a2.75 2.75 0 0 1 2.192 0c.314.137.603.359.973.644l.067.052c.393.303.663.51.873.653c.217.148.298.176.314.18a.75.75 0 0 0 .862-.425c.007-.015.035-.096.05-.358c.015-.254.015-.594.015-1.09v-9.74C15.094 2 13.7 2 12 2s-3.094 0-4.25.069"></svg:path>`,
})
export class SolarBookmarkSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkSquareBoldDuotoneIcon],svg[solar-bookmark-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.464C22 19.07 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.536" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7 17.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zm.765-5.352a22 22 0 0 1-.015-1.09v-8.74C8.906 2 10.3 2 12 2s3.094 0 4.25.069v8.739c0 .496 0 .836-.015 1.09c-.015.262-.043.343-.05.358a.75.75 0 0 1-.862.425c-.016-.004-.097-.032-.315-.18a21 21 0 0 1-.872-.653l-.067-.052c-.37-.285-.659-.507-.973-.644a2.75 2.75 0 0 0-2.192 0c-.314.137-.603.359-.973.644l-.067.052c-.393.303-.663.51-.873.653c-.217.148-.298.176-.314.18a.75.75 0 0 1-.862-.425c-.007-.015-.035-.096-.05-.358"></svg:path>`,
})
export class SolarBookmarkSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkSquareBrokenIcon],svg[solar-bookmark-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17 2v9.808c0 .975 0 1.462-.13 1.753a1.5 1.5 0 0 1-1.724.848c-.31-.075-.695-.372-1.468-.967c-.436-.336-.654-.504-.881-.602a2 2 0 0 0-1.594 0c-.227.098-.445.266-.881.602c-.773.595-1.159.892-1.468.967a1.5 1.5 0 0 1-1.725-.848C7 13.27 7 12.783 7 11.808V2"></svg:path><svg:path stroke-linecap="round" d="M17 18H7m15-6c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarBookmarkSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkSquareLineDuotoneIcon],svg[solar-bookmark-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path d="M17 2v9.808c0 .975 0 1.462-.13 1.753a1.5 1.5 0 0 1-1.724.848c-.31-.075-.695-.372-1.468-.967c-.436-.336-.654-.504-.881-.602a2 2 0 0 0-1.594 0c-.227.098-.445.266-.881.602c-.773.595-1.159.892-1.468.967a1.5 1.5 0 0 1-1.725-.848C7 13.27 7 12.783 7 11.808V2" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M17 18H7" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBookmarkSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkSquareLinearIcon],svg[solar-bookmark-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path d="M17 2v9.808c0 .975 0 1.462-.13 1.753a1.5 1.5 0 0 1-1.724.848c-.31-.075-.695-.372-1.468-.967c-.436-.336-.654-.504-.881-.602a2 2 0 0 0-1.594 0c-.227.098-.445.266-.881.602c-.773.595-1.159.892-1.468.967a1.5 1.5 0 0 1-1.725-.848C7 13.27 7 12.783 7 11.808V2"></svg:path><svg:path stroke-linecap="round" d="M17 18H7"></svg:path></svg:g>`,
})
export class SolarBookmarkSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkSquareMinimalisticBoldIcon],svg[solar-bookmark-square-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.765 9.898a22 22 0 0 1-.015-1.09v-6.74C8.906 2 10.3 2 12 2s3.094 0 4.25.069v6.739c0 .496 0 .836-.015 1.09c-.015.262-.043.343-.05.358a.75.75 0 0 1-.862.425c-.016-.004-.097-.032-.315-.18a21 21 0 0 1-.872-.653l-.067-.052c-.37-.285-.659-.507-.973-.644a2.75 2.75 0 0 0-2.192 0c-.314.137-.603.359-.973.644l-.067.052c-.393.303-.663.51-.873.653c-.217.148-.298.176-.314.18a.75.75 0 0 1-.862-.425c-.007-.015-.035-.096-.05-.358"></svg:path><svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.15 2.78 5.027 2.416 6.25 2.222V8.83c0 .468 0 .851.017 1.153c.018.298.054.606.177.881a2.25 2.25 0 0 0 2.587 1.273c.293-.07.56-.23.806-.398c.25-.17.553-.404.924-.69l.018-.014c.47-.36.602-.456.723-.508a1.25 1.25 0 0 1 .996 0c.121.052.253.147.723.508l.018.015c.37.285.675.519.924.69c.247.167.513.326.806.397a2.25 2.25 0 0 0 2.587-1.273c.123-.275.16-.583.177-.881c.017-.302.017-.685.017-1.153V2.22c1.223.195 2.102.56 2.785 1.243C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22"></svg:path>`,
})
export class SolarBookmarkSquareMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkSquareMinimalisticBoldDuotoneIcon],svg[solar-bookmark-square-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.464C22 19.07 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.536" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.765 9.898a22 22 0 0 1-.015-1.09v-6.74C8.906 2 10.3 2 12 2s3.094 0 4.25.069v6.739c0 .496 0 .836-.015 1.09c-.015.262-.043.343-.05.358a.75.75 0 0 1-.862.425c-.016-.004-.097-.032-.315-.18a21 21 0 0 1-.872-.653l-.067-.052c-.37-.285-.659-.507-.973-.644a2.75 2.75 0 0 0-2.192 0c-.314.137-.603.359-.973.644l-.067.052c-.393.303-.663.51-.873.653c-.217.148-.298.176-.314.18a.75.75 0 0 1-.862-.425c-.007-.015-.035-.096-.05-.358"></svg:path>`,
})
export class SolarBookmarkSquareMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkSquareMinimalisticBrokenIcon],svg[solar-bookmark-square-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path><svg:path d="M17 2v6.808c0 .975 0 1.462-.13 1.753a1.5 1.5 0 0 1-1.724.848c-.31-.075-.695-.372-1.468-.967c-.436-.336-.654-.504-.881-.602a2 2 0 0 0-1.594 0c-.227.098-.445.266-.881.602c-.773.595-1.159.892-1.468.967a1.5 1.5 0 0 1-1.725-.848C7 10.27 7 9.783 7 8.808V2"></svg:path></svg:g>`,
})
export class SolarBookmarkSquareMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkSquareMinimalisticLineDuotoneIcon],svg[solar-bookmark-square-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path d="M17 2v6.808c0 .975 0 1.462-.13 1.753a1.5 1.5 0 0 1-1.724.848c-.31-.075-.695-.372-1.468-.967c-.436-.336-.654-.504-.881-.602a2 2 0 0 0-1.594 0c-.227.098-.445.266-.881.602c-.773.595-1.159.892-1.468.967a1.5 1.5 0 0 1-1.725-.848C7 10.27 7 9.783 7 8.808V2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBookmarkSquareMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkSquareMinimalisticLinearIcon],svg[solar-bookmark-square-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path d="M17 2v6.808c0 .975 0 1.462-.13 1.753a1.5 1.5 0 0 1-1.724.848c-.31-.075-.695-.372-1.468-.967c-.436-.336-.654-.504-.881-.602a2 2 0 0 0-1.594 0c-.227.098-.445.266-.881.602c-.773.595-1.159.892-1.468.967a1.5 1.5 0 0 1-1.725-.848C7 10.27 7 9.783 7 8.808V2"></svg:path></svg:g>`,
})
export class SolarBookmarkSquareMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkSquareMinimalisticOutlineIcon],svg[solar-bookmark-square-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zM6.25 2.982c-1.065.183-1.742.5-2.255 1.013c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.513-.513-1.19-.829-2.255-1.012V8.83c0 .468 0 .851-.017 1.153c-.018.298-.054.606-.177.881a2.25 2.25 0 0 1-2.587 1.273c-.293-.07-.56-.23-.806-.398c-.25-.17-.553-.404-.924-.69l-.018-.014c-.47-.36-.602-.456-.723-.508a1.25 1.25 0 0 0-.996 0c-.121.052-.253.147-.723.508l-.018.015c-.37.285-.675.519-.924.69c-.247.167-.513.326-.806.397a2.25 2.25 0 0 1-2.587-1.273c-.123-.275-.16-.583-.177-.881c-.017-.302-.017-.685-.017-1.153zm10-.162c-1.126-.07-2.508-.07-4.25-.07s-3.124 0-4.25.07v5.988c0 .496 0 .836.015 1.09c.015.262.043.343.05.358a.75.75 0 0 0 .862.425c.016-.004.097-.032.314-.18c.21-.143.48-.35.873-.653l.067-.052c.37-.285.659-.507.973-.644a2.75 2.75 0 0 1 2.192 0c.314.137.603.359.973.644l.067.052c.393.303.663.51.873.653c.217.148.298.176.314.18a.75.75 0 0 0 .862-.425c.007-.015.035-.096.05-.358c.015-.254.015-.594.015-1.09z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBookmarkSquareMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkSquareOutlineIcon],svg[solar-bookmark-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zM6.25 2.982c-1.065.183-1.742.5-2.255 1.013c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.513-.513-1.19-.829-2.255-1.012v8.849c0 .468 0 .851-.017 1.153c-.018.298-.054.606-.177.881a2.25 2.25 0 0 1-2.587 1.273c-.293-.07-.56-.23-.806-.398c-.25-.17-.553-.404-.924-.69l-.018-.014c-.47-.36-.602-.456-.723-.508a1.25 1.25 0 0 0-.996 0c-.121.052-.253.147-.723.508l-.018.015c-.37.285-.675.519-.924.69c-.247.167-.513.326-.806.397a2.25 2.25 0 0 1-2.587-1.273c-.123-.275-.16-.583-.177-.881c-.017-.302-.017-.685-.017-1.153zm10-.162c-1.126-.07-2.508-.07-4.25-.07s-3.124 0-4.25.07v8.988c0 .496 0 .836.015 1.09c.015.262.043.343.05.358a.75.75 0 0 0 .862.425c.016-.004.097-.032.314-.18c.21-.143.48-.35.873-.653l.067-.052c.37-.285.659-.507.973-.644a2.75 2.75 0 0 1 2.192 0c.314.137.603.359.973.644l.067.052c.393.303.663.51.873.653c.217.148.298.176.314.18a.75.75 0 0 0 .862-.425c.007-.015.035-.096.05-.358c.015-.254.015-.594.015-1.09z"></svg:path><svg:path d="M6.25 18a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"></svg:path></svg:g>`,
})
export class SolarBookmarkSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoomboxBoldIcon],svg[solar-boombox-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 16c0-.98.626-1.813 1.5-2.122V15a.75.75 0 0 0 1.5 0v-1.122a2.251 2.251 0 1 1-3 2.122m8.659-1.591a2.25 2.25 0 0 1 2.561-.44l-.793.794a.75.75 0 1 0 1.06 1.06l.794-.793a2.251 2.251 0 1 1-3.622-.621"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.052 1.25h-.104c-.899 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.08.595-.08 1.345-.08 2.243v.078c-2.021.066-3.235.302-4.078 1.146C2 8.343 2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14s0-5.657-1.172-6.828c-.843-.844-2.057-1.08-4.078-1.146v-.078c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.344-.08-2.242-.08m3.196 4.752c-.005-.847-.019-1.758-.064-2.097c-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.045.34-.06 1.25-.064 2.097Q9.34 5.999 10 6h4q.662 0 1.248.002M8 12.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5m10.652 1.098a3.75 3.75 0 1 0-5.304 5.304a3.75 3.75 0 0 0 5.304-5.304M5.25 9.5A.75.75 0 0 1 6 8.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBoomboxBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoomboxBoldDuotoneIcon],svg[solar-boombox-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.25 9.5A.75.75 0 0 1 6 8.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m6.698-8.25h.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243V6h-1.5c0-.964-.002-1.612-.066-2.095c-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788C8.753 4.388 8.75 5.036 8.75 6h-1.5v-.052c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.25 13.095A3.001 3.001 0 0 0 8 19a3 3 0 0 0 .75-5.905V15a.75.75 0 0 1-1.5 0zm6.629 5.026a3 3 0 0 0 4.706-3.645l-1.348 1.347a.75.75 0 0 1-1.06-1.06l1.347-1.348a3.001 3.001 0 0 0-3.645 4.706"></svg:path>`,
})
export class SolarBoomboxBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoomboxBrokenIcon],svg[solar-boombox-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 9.5h12"></svg:path><svg:path stroke-linecap="round" d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14s0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828"></svg:path><svg:path d="M16 6c0-1.886 0-2.828-.586-3.414S13.886 2 12 2s-2.828 0-3.414.586S8 4.114 8 6"></svg:path><svg:path stroke-linecap="round" d="M8 19a3 3 0 1 0-3-3"></svg:path><svg:path d="M18.121 18.122a3 3 0 1 1-4.242-4.243a3 3 0 0 1 4.242 4.243Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 13v2m10.121-1.121l-1.414 1.414"></svg:path></svg:g>`,
})
export class SolarBoomboxBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoomboxLineDuotoneIcon],svg[solar-boombox-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 9.5h12" opacity=".5"></svg:path><svg:path d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14Zm14-8c0-1.886 0-2.828-.586-3.414S13.886 2 12 2s-2.828 0-3.414.586S8 4.114 8 6"></svg:path><svg:path d="M11 16a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm7.121 2.122a3 3 0 1 1-4.242-4.243a3 3 0 0 1 4.242 4.243Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 13v2m10.121-1.121l-1.414 1.414" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBoomboxLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoomboxLinearIcon],svg[solar-boombox-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 9.5h12"></svg:path><svg:path d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14Zm14-8c0-1.886 0-2.828-.586-3.414S13.886 2 12 2s-2.828 0-3.414.586S8 4.114 8 6"></svg:path><svg:path d="M11 16a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm7.121 2.121a3 3 0 1 1-4.242-4.242a3 3 0 0 1 4.242 4.242Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 13v2m10.121-1.121l-1.414 1.414"></svg:path></svg:g>`,
})
export class SolarBoomboxLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoomboxOutlineIcon],svg[solar-boombox-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.948 1.25h.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.06.44.075.964.079 1.57c.648.021 1.226.06 1.74.128c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238a18 18 0 0 1 1.74-.128c.004-.606.02-1.13.079-1.57c.084-.627.27-1.194.725-1.65c.456-.455 1.023-.64 1.65-.725c.595-.08 1.345-.08 2.243-.08M8.752 5.252q.567-.003 1.192-.002h4.112q.625 0 1.192.002c-.004-.57-.018-1-.064-1.347c-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.046.346-.06.776-.064 1.347M5.71 6.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.027-.14 2.382-.14 4.289s.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289s-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14M5.25 9.5A.75.75 0 0 1 6 8.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m2 4.378a2.251 2.251 0 1 0 1.5 0V15a.75.75 0 0 1-1.5 0zM4.25 16a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m12.72-2.03a2.251 2.251 0 1 0 1.06 1.06l-.793.793a.75.75 0 1 1-1.06-1.06zm-3.622-.622a3.75 3.75 0 1 1 5.304 5.304a3.75 3.75 0 0 1-5.304-5.304" clip-rule="evenodd"></svg:path>`,
})
export class SolarBoomboxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBottleBoldIcon],svg[solar-bottle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.993 2.017a4 4 0 0 0-.193.328l-.323.583l-2.827 1.39l-.168.083c-1.626.835-2.772 2.403-3.116 4.233c-.01.05-.019.103-.034.19l-.001.007l-.03.173a7.24 7.24 0 0 1-2.095 3.927l-.804.79c-.504.496-.91.896-1.214 1.24c-.31.35-.56.694-.71 1.088a3.49 3.49 0 0 0 .363 3.18c.236.35.558.626.939.894c.373.262.859.555 1.46.917l.713.43c.601.362 1.087.654 1.492.86c.412.21.806.367 1.225.406a3.23 3.23 0 0 0 2.88-1.284c.254-.335.413-.732.548-1.184c.133-.445.261-1.01.42-1.715l.255-1.121l.039-.171a7.2 7.2 0 0 1 2.297-3.798l.006-.005l.141-.126c1.358-1.237 2.076-3.054 1.958-4.914l-.015-.192l-.262-3.267l.355-.642c.058-.103.12-.216.166-.318c.053-.116.111-.274.12-.467a1.25 1.25 0 0 0-.195-.729a1.3 1.3 0 0 0-.337-.344a4 4 0 0 0-.303-.193l-.815-.491a5 5 0 0 0-.33-.188a1.3 1.3 0 0 0-.489-.139a1.25 1.25 0 0 0-.763.204a1.3 1.3 0 0 0-.354.365m-.01 2.333l1.472.887l.248 3.101c.005.064.009.103.01.134l-1.055.351a1.95 1.95 0 0 1-1.838-.328a3.45 3.45 0 0 0-3.703-.392l-.06.03a4.43 4.43 0 0 1 2.261-2.473z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBottleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBottleBoldDuotoneIcon],svg[solar-bottle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.156 3.317l2.178 1.313l.283 3.528c.008.096.012.144.014.19c.106 1.659-.535 3.272-1.735 4.365l-.139.123c-.069.06-.103.091-.136.121a8.05 8.05 0 0 0-2.468 4.3l-.251 1.108c-.334 1.472-.5 2.208-.851 2.67a2.51 2.51 0 0 1-2.24 1.003c-.565-.053-1.195-.432-2.454-1.191l-.673-.405c-1.26-.759-1.89-1.138-2.216-1.622a2.77 2.77 0 0 1-.288-2.525c.21-.549.737-1.068 1.792-2.105l.794-.78l.13-.129a8.1 8.1 0 0 0 2.237-4.435c.016-.095.024-.143.033-.188c.307-1.63 1.325-3.016 2.755-3.75l.165-.082z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.896 12.713a5.42 5.42 0 0 0 1.743-3.816l-1.596.533a2.74 2.74 0 0 1-2.576-.46a2.74 2.74 0 0 0-2.935-.31l-1.47.734l-.041.02a8.07 8.07 0 0 1-2.125 3.867l-.13.128l-.794.78c-1.055 1.038-1.583 1.557-1.792 2.105a2.77 2.77 0 0 0 .288 2.525c.327.485.957.864 2.216 1.623l.673.405c1.26.758 1.889 1.138 2.454 1.19a2.51 2.51 0 0 0 2.24-1.001c.35-.464.517-1.2.85-2.671l.252-1.108l.041-.182a8.05 8.05 0 0 1 2.427-4.118l.136-.121z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m16.155 3.317l2.179 1.313l.46-.833c.133-.24.2-.36.205-.478a.5.5 0 0 0-.079-.296c-.064-.1-.181-.17-.416-.312l-.79-.476c-.251-.151-.377-.227-.501-.234a.5.5 0 0 0-.31.083c-.103.068-.174.196-.316.453z"></svg:path>`,
})
export class SolarBottleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBottleBrokenIcon],svg[solar-bottle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m18.45 8.279l.748-.06zm.015.187l.749-.047zM16.614 12.9l.495.563zm.137-.122l.505.554zm-6.68-3.82l.738.127zm.032-.185l.737.139zm2.884-3.786l.331.673zm-.162.081l.342.667zm-5.093 8.398l-.526-.535zm.66.402a.75.75 0 1 0-1.064-1.058zm1.647-4.729l.737.135zm4.002 8.128l.732.165zm.041-.18l-.73-.174v.005zm2.397-4.068l.502.557zM7.65 20.413l.387-.643zM5.462 18.81l-.621.42zm1.486-4.573l.525.535zm-1.77 2.08l-.7-.268zm3.138 4.496l-.387.642zm2.424 1.176l-.07.747zm3.053-3.628l-.731-.166zm-.84 2.638l.597.453zM18.34 2.9l.387-.643zm.41.308l.633-.404zm-.123.764l.656.363zm.202-.472l-.75-.034zm-2.383-.773l-.656-.363zm.313-.447l.413.626zm.8.15l-.387.642zm-.495-.232l.045-.749zM9.138 9.7a.75.75 0 1 0 1.443.41zm5.76 5.3l.653.367zm.735-10.861l2.152 1.296l.774-1.285l-2.152-1.296zm-6.93 16.03l-.665-.4l-.774 1.285l.665.4zm4.607-3.07l-.248 1.095l1.463.332l.248-1.095zm-5.837-2.328L8.258 14l-1.052-1.07l-.784.772zm5.845-9.112l3.032-1.49l-.661-1.346l-3.032 1.49zm4.106-.807l.28 3.485l1.494-.12l-.279-3.484zm-.748-.993l.426-.77l-1.312-.727l-.427.771zm.496-.79l.78.471l.774-1.285l-.78-.47zm.798.538l-.455.822l1.313.727l.455-.823zm-.267 4.73l.014.176l1.497-.095l-.016-.2zm-.594 5.125c.068-.06.109-.095.147-.13l-1.01-1.11l-.128.114zm.608-4.95c.09 1.419-.46 2.789-1.471 3.71l1.01 1.11c1.358-1.238 2.076-3.055 1.958-4.914zm-6.908.572l.03-.173l-1.473-.278c-.01.052-.02.106-.035.197zm1.848-4.77c-.08.039-.129.062-.175.086l.685 1.334l.151-.075zM10.84 8.911c.262-1.391 1.128-2.561 2.327-3.177L12.482 4.4c-1.626.835-2.772 2.404-3.116 4.233zM8.258 14l.134-.133l-1.064-1.058l-.122.121zM9.33 8.83l-.03.174l1.475.27c.01-.05.018-.1.033-.19zm5.442 8.601l.027-.12l.01-.04l.002-.011v-.004l-.73-.17l-.73-.17v.002l-.001.003l-.003.011l-.01.042l-.028.126zm1.345-5.095l-.141.125l1.004 1.114l.128-.113zm-8.08 7.433c-.631-.38-1.07-.645-1.395-.874c-.322-.226-.472-.377-.559-.506l-1.243.84c.236.35.558.625.939.893c.378.266.872.563 1.484.932zm-1.616-6.067c-.513.504-.927.91-1.234 1.258c-.31.35-.56.694-.71 1.088l1.401.534c.056-.148.17-.332.433-.629c.264-.3.633-.662 1.161-1.182zm-.338 4.688a1.99 1.99 0 0 1-.205-1.808l-1.402-.534a3.49 3.49 0 0 0 .364 3.18zm1.845 3.064c.612.37 1.105.667 1.516.876c.412.21.807.366 1.225.405l.14-1.493c-.14-.013-.335-.07-.685-.249s-.79-.443-1.422-.824zm5.133-3.26c-.167.737-.285 1.253-.401 1.644c-.117.389-.213.585-.306.707l1.195.906c.254-.335.413-.731.548-1.184c.134-.45.264-1.025.427-1.741zm-2.392 4.541a3.23 3.23 0 0 0 2.88-1.284l-1.196-.906a1.73 1.73 0 0 1-1.543.697zM17.952 3.54l.143.087q.055.035.075.05c.029.02-.012-.003-.052-.067l1.264-.808a1.3 1.3 0 0 0-.337-.344c-.096-.07-.214-.14-.32-.203zm1.33.793c.06-.108.126-.227.175-.335c.053-.116.111-.274.12-.466l-1.499-.068c.004-.076.027-.116.013-.084l-.041.08l-.08.147zm-1.165-.723a.25.25 0 0 1-.039-.146l1.499.068a1.25 1.25 0 0 0-.195-.73zm-1.016-.522l.088-.156c.024-.043.04-.068.05-.084c.022-.033 0 .011-.068.056l-.826-1.252c-.17.112-.28.253-.354.364c-.069.103-.138.23-.202.346zm.844-1.303c-.113-.068-.237-.144-.349-.199a1.3 1.3 0 0 0-.488-.139l-.09 1.498c-.08-.005-.122-.032-.087-.014q.024.01.085.047c.043.024.091.054.155.092zm-.774 1.119a.25.25 0 0 1-.153.04l.09-1.497a1.25 1.25 0 0 0-.763.205zm-6.59 7.207q.117-.412.194-.838L9.3 9.003a7 7 0 0 1-.163.697zm4.23 7.149c.16-.67.41-1.307.74-1.893l-1.309-.735a8.8 8.8 0 0 0-.89 2.28zm.74-1.893a7 7 0 0 1 1.429-1.792l-1.004-1.114a8.6 8.6 0 0 0-1.734 2.17z"></svg:path><svg:path stroke="currentColor" stroke-linecap="square" stroke-width="1.5" d="m17.698 9.267l-.802.268c-.87.29-1.829.119-2.545-.454a2.7 2.7 0 0 0-2.899-.307l-.726.363"></svg:path></svg:g>`,
})
export class SolarBottleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBottleLineDuotoneIcon],svg[solar-bottle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m18.45 8.279l.748-.06zm.015.187l.749-.047zM16.614 12.9l.495.563zm.137-.122l.505.554zm-6.68-3.82l.738.127zm.032-.185l.737.139zm2.884-3.786l.331.673zm-.162.081l.342.667zm-5.093 8.398l-.526-.535zm.128-.127l.532.529zm2.179-4.2l.737.135zm4.002 8.128l.732.165zm.041-.18l-.73-.174zm2.397-4.068l.502.557zM7.65 20.413l.387-.643zM5.462 18.81l-.621.42zm1.486-4.573l.525.535zm-1.77 2.08l-.7-.268zm3.138 4.496l-.387.642zm2.424 1.176l-.07.747zm3.053-3.628l-.731-.166zm-.84 2.638l.597.453zM18.34 2.9l.387-.643zm.41.308l.633-.404zm-.123.764l.656.363zm.202-.472l-.75-.034zm-2.383-.773l-.656-.363zm.313-.447l.413.626zm.8.15l-.387.642zm-.495-.232l.045-.749zM15.633 4.14l2.152 1.296l.774-1.285l-2.152-1.296zm-6.93 16.03l-.665-.4l-.774 1.285l.665.4zm4.607-3.07l-.248 1.095l1.463.332l.248-1.095zm-5.837-2.328l.785-.771l-1.052-1.07l-.784.772zm5.845-9.112l3.032-1.49l-.661-1.346l-3.032 1.49zm4.106-.807l.28 3.485l1.494-.12l-.279-3.484zm-.748-.993l.426-.77l-1.312-.727l-.427.771zm.496-.79l.78.471l.774-1.285l-.78-.47zm.798.538l-.455.822l1.313.727l.455-.823zm-.267 4.73l.014.176l1.497-.095l-.016-.2zm-.594 5.125c.068-.06.109-.095.147-.13l-1.01-1.11l-.128.114zm.608-4.95c.09 1.419-.46 2.789-1.471 3.71l1.01 1.11c1.358-1.238 2.076-3.055 1.958-4.914zm-6.908.572l.03-.173l-1.473-.278c-.01.052-.02.106-.035.197zm1.848-4.77c-.08.039-.129.062-.175.086l.685 1.334l.151-.075zM10.84 8.911c.262-1.391 1.128-2.561 2.327-3.177L12.482 4.4c-1.626.835-2.772 2.404-3.116 4.233zM8.258 14l.134-.133l-1.064-1.058l-.122.121zM9.33 8.83l-.03.174l1.475.27c.01-.05.018-.1.033-.19zm-.939 5.037a8.74 8.74 0 0 0 2.384-4.594L9.3 9.003a7.24 7.24 0 0 1-1.973 3.806zm6.38 3.564l.04-.171l-1.46-.348l-.042.188zm1.346-5.095l-.141.125l1.004 1.114l.128-.113zm-1.306 4.924a7.2 7.2 0 0 1 2.169-3.685l-1.004-1.114a8.7 8.7 0 0 0-2.624 4.451zm-6.774 2.51c-.631-.381-1.07-.646-1.395-.875c-.322-.226-.472-.377-.559-.506l-1.243.84c.236.35.558.625.939.893c.378.266.872.563 1.484.932zm-1.616-6.068c-.513.504-.927.91-1.234 1.258c-.31.35-.56.694-.71 1.088l1.401.534c.056-.148.17-.332.433-.629c.264-.3.633-.662 1.161-1.182zm-.338 4.688a1.99 1.99 0 0 1-.205-1.808l-1.402-.534a3.49 3.49 0 0 0 .364 3.18zm1.845 3.064c.612.37 1.105.667 1.516.876c.412.21.807.366 1.225.405l.14-1.493c-.14-.013-.335-.07-.685-.249s-.79-.443-1.422-.824zm5.133-3.26c-.167.737-.285 1.253-.401 1.644c-.117.389-.213.585-.306.707l1.195.906c.254-.335.413-.731.548-1.184c.134-.45.264-1.025.427-1.741zm-2.392 4.541a3.23 3.23 0 0 0 2.88-1.284l-1.196-.906a1.73 1.73 0 0 1-1.543.697zM17.952 3.54l.143.087q.055.035.075.05c.029.02-.012-.003-.052-.067l1.264-.808a1.3 1.3 0 0 0-.337-.344c-.096-.07-.214-.14-.32-.203zm1.33.793c.06-.108.126-.227.175-.335c.053-.116.111-.274.12-.466l-1.499-.068c.004-.076.027-.116.013-.084l-.041.08l-.08.147zm-1.165-.723a.25.25 0 0 1-.039-.146l1.499.068a1.25 1.25 0 0 0-.195-.73zm-1.016-.522l.088-.156c.024-.043.04-.068.05-.084c.022-.033 0 .011-.068.056l-.826-1.252c-.17.112-.28.253-.354.364c-.069.103-.138.23-.202.346zm.844-1.303c-.113-.068-.237-.144-.349-.199a1.3 1.3 0 0 0-.488-.139l-.09 1.498c-.08-.005-.122-.032-.087-.014q.024.01.085.047c.043.024.091.054.155.092zm-.774 1.119a.25.25 0 0 1-.153.04l.09-1.497a1.25 1.25 0 0 0-.763.205z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m10 9.5l1.452-.726a2.7 2.7 0 0 1 2.9.307a2.7 2.7 0 0 0 2.544.454L18.5 9" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBottleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBottleLinearIcon],svg[solar-bottle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m18.45 8.279l.748-.06zm.015.187l.749-.047zM16.614 12.9l.495.563zm.137-.122l.505.554zm-6.68-3.82l.738.127zm.032-.185l.737.139zm2.884-3.786l.331.673zm-.162.081l.342.667zm-5.093 8.398l-.526-.535zm.128-.127l.532.529zm2.179-4.2l.737.135zm4.002 8.128l.732.165zm.041-.18l-.73-.174zm2.397-4.068l.502.557zM7.65 20.413l.387-.643zM5.462 18.81l-.621.42zm1.486-4.573l.525.535zm-1.77 2.08l-.7-.268zm3.138 4.496l-.387.642zm2.424 1.176l-.07.747zm3.053-3.628l-.731-.166zm-.84 2.638l.597.453zM18.34 2.9l.387-.643zm.41.308l.633-.404zm-.123.764l.656.363zm.202-.472l-.75-.034zm-2.383-.773l-.656-.363zm.313-.447l.413.626zm.8.15l-.387.642zm-.495-.232l.045-.749zM15.633 4.14l2.152 1.296l.774-1.285l-2.152-1.296zm-6.93 16.03l-.665-.4l-.774 1.285l.665.4zm4.607-3.07l-.248 1.095l1.463.332l.248-1.095zm-5.837-2.328l.785-.771l-1.052-1.07l-.784.772zm5.845-9.112l3.032-1.49l-.661-1.346l-3.032 1.49zm4.106-.807l.28 3.485l1.494-.12l-.279-3.484zm-.748-.993l.426-.77l-1.312-.727l-.427.771zm.496-.79l.78.471l.774-1.285l-.78-.47zm.798.538l-.455.822l1.313.727l.455-.823zm-.267 4.73l.014.176l1.497-.095l-.016-.2zm-.594 5.125c.068-.06.109-.095.147-.13l-1.01-1.11l-.128.114zm.608-4.95c.09 1.419-.46 2.789-1.471 3.71l1.01 1.11c1.358-1.238 2.076-3.055 1.958-4.914zm-6.908.572l.03-.173l-1.473-.278c-.01.052-.02.106-.035.197zm1.848-4.77c-.08.039-.129.062-.175.086l.685 1.334l.151-.075zM10.84 8.911c.262-1.391 1.128-2.561 2.327-3.177L12.482 4.4c-1.626.835-2.772 2.404-3.116 4.233zM8.258 14l.134-.133l-1.064-1.058l-.122.121zM9.33 8.83l-.03.174l1.475.27c.01-.05.018-.1.033-.19zm-.939 5.037a8.74 8.74 0 0 0 2.384-4.594L9.3 9.003a7.24 7.24 0 0 1-1.973 3.806zm6.38 3.564l.04-.171l-1.46-.348l-.042.188zm1.346-5.095l-.141.125l1.004 1.114l.128-.113zm-1.306 4.924a7.2 7.2 0 0 1 2.169-3.685l-1.004-1.114a8.7 8.7 0 0 0-2.624 4.451zm-6.774 2.51c-.631-.381-1.07-.646-1.395-.875c-.322-.226-.472-.377-.559-.506l-1.243.84c.236.35.558.625.939.893c.378.266.872.563 1.484.932zm-1.616-6.068c-.513.504-.927.91-1.234 1.258c-.31.35-.56.694-.71 1.088l1.401.534c.056-.148.17-.332.433-.629c.264-.3.633-.662 1.161-1.182zm-.338 4.688a1.99 1.99 0 0 1-.205-1.808l-1.402-.534a3.49 3.49 0 0 0 .364 3.18zm1.845 3.064c.612.37 1.105.667 1.516.876c.412.21.807.366 1.225.405l.14-1.493c-.14-.013-.335-.07-.685-.249s-.79-.443-1.422-.824zm5.133-3.26c-.167.737-.285 1.253-.401 1.644c-.117.389-.213.585-.306.707l1.195.906c.254-.335.413-.731.548-1.184c.134-.45.264-1.025.427-1.741zm-2.392 4.541a3.23 3.23 0 0 0 2.88-1.284l-1.196-.906a1.73 1.73 0 0 1-1.543.697zM17.952 3.54l.143.087q.055.035.075.05c.029.02-.012-.003-.052-.067l1.264-.808a1.3 1.3 0 0 0-.337-.344c-.096-.07-.214-.14-.32-.203zm1.33.793c.06-.108.126-.227.175-.335c.053-.116.111-.274.12-.466l-1.499-.068c.004-.076.027-.116.013-.084l-.041.08l-.08.147zm-1.165-.723a.25.25 0 0 1-.039-.146l1.499.068a1.25 1.25 0 0 0-.195-.73zm-1.016-.522l.088-.156c.024-.043.04-.068.05-.084c.022-.033 0 .011-.068.056l-.826-1.252c-.17.112-.28.253-.354.364c-.069.103-.138.23-.202.346zm.844-1.303c-.113-.068-.237-.144-.349-.199a1.3 1.3 0 0 0-.488-.139l-.09 1.498c-.08-.005-.122-.032-.087-.014q.024.01.085.047c.043.024.091.054.155.092zm-.774 1.119a.25.25 0 0 1-.153.04l.09-1.497a1.25 1.25 0 0 0-.763.205z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m10 9.5l1.452-.726a2.7 2.7 0 0 1 2.9.307a2.7 2.7 0 0 0 2.544.454L18.5 9"></svg:path></svg:g>`,
})
export class SolarBottleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBottleOutlineIcon],svg[solar-bottle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.877 2.598l-.025.046l-.076.138l.866.522l.078-.142l.024-.042l-.041-.025l-.781-.47zm1.054.64h-.001m-.726 1.554l-1.472-.887l-2.665 1.31a4.43 4.43 0 0 0-2.26 2.472l.059-.03a3.45 3.45 0 0 1 3.703.393c.517.414 1.21.537 1.839.328l1.055-.352l-.01-.133zm1.757 3.998a.75.75 0 0 0 .014-.423q0-.197-.012-.394l-.015-.193l-.262-3.267l.355-.642a4 4 0 0 0 .166-.317c.053-.116.111-.274.12-.467a1.25 1.25 0 0 0-.195-.73a1.3 1.3 0 0 0-.337-.344a4 4 0 0 0-.303-.192l-.016-.01l-.799-.482a5 5 0 0 0-.33-.188a1.3 1.3 0 0 0-.489-.139a1.25 1.25 0 0 0-.763.205a1.3 1.3 0 0 0-.354.364c-.065.098-.131.218-.192.328l-.323.583l-2.827 1.39l-.168.083C10.606 4.79 9.46 6.36 9.116 8.188c-.01.05-.019.103-.034.19l-.001.007l-.03.174a7.24 7.24 0 0 1-2.095 3.926l-.804.791c-.504.496-.91.895-1.214 1.24c-.31.35-.56.693-.71 1.087a3.49 3.49 0 0 0 .363 3.18c.236.35.558.626.939.894c.373.263.859.555 1.46.918l.713.43c.601.361 1.087.654 1.492.86c.412.21.806.366 1.225.405a3.23 3.23 0 0 0 2.88-1.284c.254-.334.413-.731.548-1.183c.133-.445.261-1.011.42-1.715l.255-1.122l.039-.17a7.2 7.2 0 0 1 2.297-3.799l.006-.005l.141-.125a6.1 6.1 0 0 0 1.956-4.097m-1.666.873l-.413.138a3.45 3.45 0 0 1-3.25-.58a1.95 1.95 0 0 0-2.095-.222l-1.186.593a8.7 8.7 0 0 1-2.21 3.83l-.13.13l-.789.774c-.528.52-.897.883-1.161 1.182c-.263.298-.377.482-.433.63c-.228.6-.15 1.28.205 1.807c.087.128.237.28.559.505c.324.229.764.494 1.395.874l.665.4c.631.381 1.071.645 1.422.824c.35.178.546.236.685.249c.586.055 1.168-.2 1.544-.696c.094-.123.19-.319.307-.708c.116-.39.234-.906.4-1.643l.25-1.1l.042-.182a8.7 8.7 0 0 1 2.624-4.452l.137-.121l.004-.004l.128-.113a4.54 4.54 0 0 0 1.3-2.115" clip-rule="evenodd"></svg:path>`,
})
export class SolarBottleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBowlingBoldIcon],svg[solar-bowling-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.5-10a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M12 5.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-2.5 4a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarBowlingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBowlingBoldDuotoneIcon],svg[solar-bowling-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M8 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m4-2.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class SolarBowlingBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBowlingBrokenIcon],svg[solar-bowling-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="7" r="1.5" transform="rotate(-90 12 7)"></svg:circle><svg:circle cx="12" cy="12" r="1.5" transform="rotate(-90 12 12)"></svg:circle><svg:path d="M8 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path stroke-linecap="round" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarBowlingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBowlingLineDuotoneIcon],svg[solar-bowling-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:circle cx="12" cy="7" r="1.5" opacity=".5" transform="rotate(-90 12 7)"></svg:circle><svg:circle cx="12" cy="12" r="1.5" opacity=".5" transform="rotate(-90 12 12)"></svg:circle><svg:path d="M8 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBowlingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBowlingLinearIcon],svg[solar-bowling-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:circle cx="12" cy="7" r="1.5" transform="rotate(-90 12 7)"></svg:circle><svg:circle cx="12" cy="12" r="1.5" transform="rotate(-90 12 12)"></svg:circle><svg:path d="M8 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path></svg:g>`,
})
export class SolarBowlingLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBowlingOutlineIcon],svg[solar-bowling-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 6.25a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M9.75 7a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0M8 8.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0M12 11.25a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarBowlingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoxBoldIcon],svg[solar-box-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.578 4.432l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-.321.169l8.923 5.099l4.016-2.01c-.646-.732-1.688-1.279-3.462-2.21m4.17 3.534l-3.998 2V13a.75.75 0 0 1-1.5 0v-2.286l-3.5 1.75v9.44c.718-.179 1.535-.607 2.828-1.286l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.597-1.014.597-2.277.597-4.8v-.117c0-1.893 0-3.076-.252-3.978M11.25 21.904v-9.44l-8.998-4.5C2 8.866 2 10.05 2 11.941v.117c0 2.525 0 3.788.597 4.802c.598 1.015 1.674 1.58 3.825 2.709l2 1.049c1.293.679 2.11 1.107 2.828 1.286M2.96 6.641l9.04 4.52l3.411-1.705l-8.886-5.078l-.103.054c-1.773.93-2.816 1.477-3.462 2.21"></svg:path>`,
})
export class SolarBoxBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoxBoldDuotoneIcon],svg[solar-box-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.422 20.618C10.178 21.54 11.056 22 12 22V12L2.638 7.073l-.04.067C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801c.598 1.015 1.674 1.58 3.825 2.709z"></svg:path><svg:path fill="currentColor" d="m17.577 4.432l-2-1.05C13.822 2.461 12.944 2 12 2c-.945 0-1.822.46-3.578 1.382l-2 1.05C4.318 5.536 3.242 6.1 2.638 7.072L12 12l9.362-4.927c-.606-.973-1.68-1.537-3.785-2.641" opacity=".7"></svg:path><svg:path fill="currentColor" d="m21.403 7.14l-.041-.067L12 12v10c.944 0 1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.597-1.014.597-2.277.597-4.8v-.117c0-2.525 0-3.788-.597-4.802" opacity=".5"></svg:path><svg:path fill="currentColor" d="m6.323 4.484l.1-.052l1.493-.784l9.1 5.005l4.025-2.011q.205.232.362.498c.15.254.262.524.346.825L17.75 9.964V13a.75.75 0 0 1-1.5 0v-2.286l-3.5 1.75v9.44A3 3 0 0 1 12 22c-.248 0-.493-.032-.75-.096v-9.44l-8.998-4.5c.084-.3.196-.57.346-.824q.156-.266.362-.498l9.04 4.52l3.387-1.693z"></svg:path>`,
})
export class SolarBoxBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoxBrokenIcon],svg[solar-box-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.984 10c-.037-1.311-.161-2.147-.581-2.86c-.598-1.015-1.674-1.58-3.825-2.708l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-2 1.05C4.271 5.56 3.195 6.125 2.597 7.14C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801c.598 1.015 1.674 1.58 3.825 2.709l2 1.049C10.178 21.539 11.056 22 12 22s1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.42-.713.544-1.549.581-2.86M21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5"></svg:path>`,
})
export class SolarBoxBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoxLineDuotoneIcon],svg[solar-box-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m15.578 3.382l2 1.05c2.151 1.129 3.227 1.693 3.825 2.708C22 8.154 22 9.417 22 11.942v.117c0 2.524 0 3.787-.597 4.801c-.598 1.015-1.674 1.58-3.825 2.709l-2 1.049C13.822 21.539 12.944 22 12 22s-1.822-.46-3.578-1.382l-2-1.05c-2.151-1.129-3.227-1.693-3.825-2.708C2 15.846 2 14.583 2 12.06v-.117c0-2.525 0-3.788.597-4.802c.598-1.015 1.674-1.58 3.825-2.708l2-1.05C10.178 2.461 11.056 2 12 2s1.822.46 3.578 1.382Z"></svg:path><svg:path d="m21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBoxLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoxLinearIcon],svg[solar-box-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m15.578 3.382l2 1.05c2.151 1.129 3.227 1.693 3.825 2.708C22 8.154 22 9.417 22 11.942v.117c0 2.524 0 3.787-.597 4.801c-.598 1.015-1.674 1.58-3.825 2.709l-2 1.049C13.822 21.539 12.944 22 12 22s-1.822-.46-3.578-1.382l-2-1.05c-2.151-1.129-3.227-1.693-3.825-2.708C2 15.846 2 14.583 2 12.06v-.117c0-2.525 0-3.788.597-4.802c.598-1.015 1.674-1.58 3.825-2.708l2-1.05C10.178 2.461 11.056 2 12 2s1.822.46 3.578 1.382ZM21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5"></svg:path>`,
})
export class SolarBoxLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoxMinimalisticBoldIcon],svg[solar-box-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.578 4.432l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-2 1.05c-1.773.93-2.816 1.478-3.462 2.21l9.04 4.52l9.04-4.52c-.646-.732-1.688-1.28-3.462-2.21m4.17 3.532l-8.998 4.5v9.44c.718-.179 1.535-.607 2.828-1.286l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.597-1.014.597-2.277.597-4.8v-.117c0-1.893 0-3.076-.252-3.978M11.25 21.904v-9.44l-8.998-4.5C2 8.866 2 10.05 2 11.941v.117c0 2.525 0 3.788.597 4.802c.598 1.015 1.674 1.58 3.825 2.709l2 1.049c1.293.679 2.11 1.107 2.828 1.286"></svg:path>`,
})
export class SolarBoxMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoxMinimalisticBoldDuotoneIcon],svg[solar-box-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.422 20.618C10.178 21.54 11.056 22 12 22V12L2.638 7.073l-.04.067C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801c.598 1.015 1.674 1.58 3.825 2.709z"></svg:path><svg:path fill="currentColor" d="m17.577 4.432l-2-1.05C13.822 2.461 12.944 2 12 2c-.945 0-1.822.46-3.578 1.382l-2 1.05C4.318 5.536 3.242 6.1 2.638 7.072L12 12l9.362-4.927c-.606-.973-1.68-1.537-3.785-2.641" opacity=".7"></svg:path><svg:path fill="currentColor" d="m21.403 7.14l-.041-.067L12 12v10c.944 0 1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.597-1.014.597-2.277.597-4.8v-.117c0-2.525 0-3.788-.597-4.802" opacity=".5"></svg:path>`,
})
export class SolarBoxMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoxMinimalisticBrokenIcon],svg[solar-box-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.984 10c-.037-1.311-.161-2.147-.581-2.86c-.598-1.015-1.674-1.58-3.825-2.708l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-2 1.05C4.271 5.56 3.195 6.125 2.597 7.14C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801c.598 1.015 1.674 1.58 3.825 2.709l2 1.049C10.178 21.539 11.056 22 12 22s1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.42-.713.544-1.549.581-2.86M21 7.5L12 12m0 0L3 7.5m9 4.5v9.5"></svg:path>`,
})
export class SolarBoxMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoxMinimalisticLineDuotoneIcon],svg[solar-box-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m15.578 3.382l2 1.05c2.151 1.129 3.227 1.693 3.825 2.708C22 8.154 22 9.417 22 11.942v.117c0 2.524 0 3.787-.597 4.801c-.598 1.015-1.674 1.58-3.825 2.709l-2 1.049C13.822 21.539 12.944 22 12 22s-1.822-.46-3.578-1.382l-2-1.05c-2.151-1.129-3.227-1.693-3.825-2.708C2 15.846 2 14.583 2 12.06v-.117c0-2.525 0-3.788.597-4.802c.598-1.015 1.674-1.58 3.825-2.708l2-1.05C10.178 2.461 11.056 2 12 2s1.822.46 3.578 1.382Z"></svg:path><svg:path d="M21 7.5L12 12m0 0L3 7.5m9 4.5v9.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBoxMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoxMinimalisticLinearIcon],svg[solar-box-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m15.578 3.382l2 1.05c2.151 1.129 3.227 1.693 3.825 2.708C22 8.154 22 9.417 22 11.942v.117c0 2.524 0 3.787-.597 4.801c-.598 1.015-1.674 1.58-3.825 2.709l-2 1.049C13.822 21.539 12.944 22 12 22s-1.822-.46-3.578-1.382l-2-1.05c-2.151-1.129-3.227-1.693-3.825-2.708C2 15.846 2 14.583 2 12.06v-.117c0-2.525 0-3.788.597-4.802c.598-1.015 1.674-1.58 3.825-2.708l2-1.05C10.178 2.461 11.056 2 12 2s1.822.46 3.578 1.382ZM21 7.5L12 12m0 0L3 7.5m9 4.5v9.5"></svg:path>`,
})
export class SolarBoxMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoxMinimalisticOutlineIcon],svg[solar-box-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25c-.605 0-1.162.15-1.771.402c-.589.244-1.273.603-2.124 1.05L6.037 3.787c-1.045.548-1.88.987-2.527 1.418c-.668.447-1.184.917-1.559 1.554c-.374.635-.542 1.323-.623 2.142c-.078.795-.078 1.772-.078 3.002v.194c0 1.23 0 2.207.078 3.002c.081.82.25 1.507.623 2.142c.375.637.89 1.107 1.56 1.554c.645.431 1.481.87 2.526 1.418l2.068 1.085c.851.447 1.535.806 2.124 1.05c.61.252 1.166.402 1.771.402s1.162-.15 1.771-.402c.589-.244 1.273-.603 2.124-1.05l2.068-1.084c1.045-.549 1.88-.988 2.526-1.419c.67-.447 1.185-.917 1.56-1.554c.374-.635.542-1.323.623-2.142c.078-.795.078-1.772.078-3.001v-.196c0-1.229 0-2.206-.078-3.001c-.081-.82-.25-1.507-.623-2.142c-.375-.637-.89-1.107-1.56-1.554c-.645-.431-1.481-.87-2.526-1.418l-2.068-1.085c-.851-.447-1.535-.806-2.124-1.05c-.61-.252-1.166-.402-1.771-.402M8.77 4.046c.89-.467 1.514-.793 2.032-1.007c.504-.209.859-.289 1.198-.289c.34 0 .694.08 1.198.289c.518.214 1.141.54 2.031 1.007l2 1.05c1.09.571 1.855.974 2.428 1.356c.282.189.503.364.683.54L12 11.162l-8.34-4.17c.18-.176.401-.351.684-.54c.572-.382 1.337-.785 2.427-1.356zM2.939 8.307c-.05.214-.089.457-.117.74c-.07.714-.071 1.617-.071 2.894v.117c0 1.278 0 2.181.071 2.894c.069.697.2 1.148.423 1.528c.222.377.543.696 1.1 1.068c.572.382 1.337.785 2.427 1.356l2 1.05c.89.467 1.513.793 2.031 1.007q.244.101.448.165v-8.663zm9.812 12.818q.204-.063.448-.164c.518-.214 1.141-.54 2.031-1.007l2-1.05c1.09-.572 1.855-.974 2.428-1.356c.556-.372.877-.691 1.1-1.068c.223-.38.353-.83.422-1.528c.07-.713.071-1.616.071-2.893v-.117c0-1.278 0-2.181-.071-2.894a6 6 0 0 0-.117-.74l-8.312 4.156z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBoxMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoxOutlineIcon],svg[solar-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25c-.605 0-1.162.15-1.771.402c-.589.244-1.273.603-2.124 1.05L6.037 3.787c-1.045.548-1.88.987-2.527 1.418c-.668.447-1.184.917-1.559 1.554c-.374.635-.542 1.323-.623 2.142c-.078.795-.078 1.772-.078 3.002v.194c0 1.23 0 2.207.078 3.002c.081.82.25 1.507.623 2.142c.375.637.89 1.107 1.56 1.554c.645.431 1.481.87 2.526 1.418l2.068 1.085c.851.447 1.535.806 2.124 1.05c.61.252 1.166.402 1.771.402s1.162-.15 1.771-.402c.589-.244 1.273-.603 2.124-1.05l2.068-1.084c1.045-.549 1.88-.988 2.526-1.419c.67-.447 1.185-.917 1.56-1.554c.374-.635.542-1.323.623-2.142c.078-.795.078-1.772.078-3.001v-.196c0-1.229 0-2.206-.078-3.001c-.081-.82-.25-1.507-.623-2.142c-.375-.637-.89-1.107-1.56-1.554c-.645-.431-1.481-.87-2.526-1.418l-2.068-1.085c-.851-.447-1.535-.806-2.124-1.05c-.61-.252-1.166-.402-1.771-.402M8.77 4.046c.89-.467 1.514-.793 2.032-1.007c.504-.209.859-.289 1.198-.289c.34 0 .694.08 1.198.289c.518.214 1.141.54 2.031 1.007l2 1.05c1.09.571 1.855.974 2.428 1.356c.282.189.503.364.683.54l-3.331 1.665l-8.5-4.474zm-1.825.958l-.174.092c-1.09.571-1.855.974-2.427 1.356a4.7 4.7 0 0 0-.683.54L12 11.162l3.357-1.68l-8.206-4.318a.8.8 0 0 1-.206-.16M2.938 8.307c-.05.214-.089.457-.117.74c-.07.714-.071 1.617-.071 2.894v.117c0 1.278 0 2.181.071 2.894c.069.697.2 1.148.423 1.528c.222.377.543.696 1.1 1.068c.572.382 1.337.785 2.427 1.356l2 1.05c.89.467 1.513.793 2.031 1.007q.244.101.448.165v-8.663zm9.812 12.818q.204-.063.448-.164c.518-.214 1.141-.54 2.031-1.007l2-1.05c1.09-.572 1.855-.974 2.428-1.356c.556-.372.877-.691 1.1-1.068c.223-.38.353-.83.422-1.528c.07-.713.071-1.616.071-2.893v-.117c0-1.278 0-2.181-.071-2.894a6 6 0 0 0-.117-.74L17.75 9.963V13a.75.75 0 0 1-1.5 0v-2.286l-3.5 1.75z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBranchingPathsDownBoldIcon],svg[solar-branching-paths-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M12 5.75a.75.75 0 0 1 .75.75v6A3.25 3.25 0 0 0 16 15.75h.19l-.22-.22a.75.75 0 1 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H16a4.75 4.75 0 0 1-4-2.187a4.75 4.75 0 0 1-4 2.187h-.19l.22.22a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5a.75.75 0 0 1 1.06 1.06l-.22.22H8a3.25 3.25 0 0 0 3.25-3.25v-6a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBranchingPathsDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBranchingPathsDownBoldDuotoneIcon],svg[solar-branching-paths-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 6.5a.75.75 0 0 0-1.5 0v6A3.25 3.25 0 0 1 8 15.75h-.19l.22-.22a.75.75 0 1 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06l-.22-.22H8c1.68 0 3.155-.872 4-2.187a4.75 4.75 0 0 0 4 2.187h.19l-.22.22a.75.75 0 1 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06l-1.5-1.5a.75.75 0 1 0-1.06 1.06l.22.22H16a3.25 3.25 0 0 1-3.25-3.25z"></svg:path>`,
})
export class SolarBranchingPathsDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBranchingPathsDownBrokenIcon],svg[solar-branching-paths-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12.75 6.5a.75.75 0 0 0-1.5 0zm5.25 10l.53.53a.75.75 0 0 0 0-1.06zm-2.03.97a.75.75 0 1 0 1.06 1.06zm1.06-3a.75.75 0 1 0-1.06 1.06zM11.25 6.5v6h1.5v-6zM16 17.25h2v-1.5h-2zm1.47-1.28l-1.5 1.5l1.06 1.06l1.5-1.5zm1.06 0l-1.5-1.5l-1.06 1.06l1.5 1.5zm-7.28-3.47A4.75 4.75 0 0 0 16 17.25v-1.5a3.25 3.25 0 0 1-3.25-3.25z"></svg:path><svg:path fill="currentColor" d="M12.75 6.5a.75.75 0 0 0-1.5 0zM6 16.5l-.53-.53a.75.75 0 0 0 0 1.06zm.97 2.03a.75.75 0 0 0 1.06-1.06zm1.06-3a.75.75 0 1 0-1.06-1.06zm3.22-9.03v6h1.5v-6zM8 15.75H6v1.5h2zm-2.53 1.28l1.5 1.5l1.06-1.06l-1.5-1.5zm1.06 0l1.5-1.5l-1.06-1.06l-1.5 1.5zm4.72-4.53A3.25 3.25 0 0 1 8 15.75v1.5a4.75 4.75 0 0 0 4.75-4.75z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarBranchingPathsDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBranchingPathsDownLineDuotoneIcon],svg[solar-branching-paths-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 6.5a.75.75 0 0 0-1.5 0zm5.25 10l.53.53a.75.75 0 0 0 0-1.06zm-2.03.97a.75.75 0 1 0 1.06 1.06zm1.06-3a.75.75 0 1 0-1.06 1.06zM11.25 6.5v6h1.5v-6zM16 17.25h2v-1.5h-2zm1.47-1.28l-1.5 1.5l1.06 1.06l1.5-1.5zm1.06 0l-1.5-1.5l-1.06 1.06l1.5 1.5zm-7.28-3.47A4.75 4.75 0 0 0 16 17.25v-1.5a3.25 3.25 0 0 1-3.25-3.25z"></svg:path><svg:path fill="currentColor" d="M12.75 6.5a.75.75 0 0 0-1.5 0zM6 16.5l-.53-.53a.75.75 0 0 0 0 1.06zm.97 2.03a.75.75 0 0 0 1.06-1.06zm1.06-3a.75.75 0 1 0-1.06-1.06zm3.22-9.03v6h1.5v-6zM8 15.75H6v1.5h2zm-2.53 1.28l1.5 1.5l1.06-1.06l-1.5-1.5zm1.06 0l1.5-1.5l-1.06-1.06l-1.5 1.5zm4.72-4.53A3.25 3.25 0 0 1 8 15.75v1.5a4.75 4.75 0 0 0 4.75-4.75z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBranchingPathsDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBranchingPathsDownLinearIcon],svg[solar-branching-paths-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path fill="currentColor" d="M12.75 6.5a.75.75 0 0 0-1.5 0zm5.25 10l.53.53a.75.75 0 0 0 0-1.06zm-2.03.97a.75.75 0 1 0 1.06 1.06zm1.06-3a.75.75 0 1 0-1.06 1.06zM11.25 6.5v6h1.5v-6zM16 17.25h2v-1.5h-2zm1.47-1.28l-1.5 1.5l1.06 1.06l1.5-1.5zm1.06 0l-1.5-1.5l-1.06 1.06l1.5 1.5zm-7.28-3.47A4.75 4.75 0 0 0 16 17.25v-1.5a3.25 3.25 0 0 1-3.25-3.25z"></svg:path><svg:path fill="currentColor" d="M12.75 6.5a.75.75 0 0 0-1.5 0zM6 16.5l-.53-.53a.75.75 0 0 0 0 1.06zm.97 2.03a.75.75 0 0 0 1.06-1.06zm1.06-3a.75.75 0 1 0-1.06-1.06zm3.22-9.03v6h1.5v-6zM8 15.75H6v1.5h2zm-2.53 1.28l1.5 1.5l1.06-1.06l-1.5-1.5zm1.06 0l1.5-1.5l-1.06-1.06l-1.5 1.5zm4.72-4.53A3.25 3.25 0 0 1 8 15.75v1.5a4.75 4.75 0 0 0 4.75-4.75z"></svg:path></svg:g>`,
})
export class SolarBranchingPathsDownLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBranchingPathsDownOutlineIcon],svg[solar-branching-paths-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176"></svg:path><svg:path d="M12 5.75a.75.75 0 0 1 .75.75v6A3.25 3.25 0 0 0 16 15.75h.19l-.22-.22a.75.75 0 1 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H16a4.75 4.75 0 0 1-4-2.187a4.75 4.75 0 0 1-4 2.187h-.19l.22.22a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5a.75.75 0 0 1 1.06 1.06l-.22.22H8a3.25 3.25 0 0 0 3.25-3.25v-6a.75.75 0 0 1 .75-.75"></svg:path></svg:g>`,
})
export class SolarBranchingPathsDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBranchingPathsUpBoldIcon],svg[solar-branching-paths-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M8.03 5.97a.75.75 0 0 1 0 1.06l-.22.22H8c1.68 0 3.155.872 4 2.187a4.75 4.75 0 0 1 4-2.187h.19l-.22-.22a.75.75 0 0 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H16A3.25 3.25 0 0 0 12.75 12v6a.75.75 0 0 1-1.5 0v-6A3.25 3.25 0 0 0 8 8.75h-.19l.22.22a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarBranchingPathsUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBranchingPathsUpBoldDuotoneIcon],svg[solar-branching-paths-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 3.464C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 17.5a.75.75 0 0 1-1.5 0v-6A3.25 3.25 0 0 0 8 8.25h-.19l.22.22a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5a.75.75 0 0 1 1.06 1.06l-.22.22H8c1.68 0 3.155.872 4 2.187a4.75 4.75 0 0 1 4-2.187h.19l-.22-.22a.75.75 0 0 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H16a3.25 3.25 0 0 0-3.25 3.25z"></svg:path>`,
})
export class SolarBranchingPathsUpBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBranchingPathsUpBrokenIcon],svg[solar-branching-paths-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M11.25 18a.75.75 0 0 0 1.5 0zM18 8l.53.53a.75.75 0 0 0 0-1.06zm-.97-2.03a.75.75 0 1 0-1.06 1.06zm-1.06 3a.75.75 0 1 0 1.06 1.06zM12.75 18v-6h-1.5v6zM16 8.75h2v-1.5h-2zm2.53-1.28l-1.5-1.5l-1.06 1.06l1.5 1.5zm-1.06 0l-1.5 1.5l1.06 1.06l1.5-1.5zM12.75 12A3.25 3.25 0 0 1 16 8.75v-1.5A4.75 4.75 0 0 0 11.25 12z"></svg:path><svg:path fill="currentColor" d="M11.25 18a.75.75 0 0 0 1.5 0zM6 8l-.53-.53a.75.75 0 0 0 0 1.06zm2.03-.97a.75.75 0 0 0-1.06-1.06zm-1.06 3a.75.75 0 1 0 1.06-1.06zM12.75 18v-6h-1.5v6zM8 7.25H6v1.5h2zM6.53 8.53l1.5-1.5l-1.06-1.06l-1.5 1.5zm-1.06 0l1.5 1.5l1.06-1.06l-1.5-1.5zM12.75 12A4.75 4.75 0 0 0 8 7.25v1.5A3.25 3.25 0 0 1 11.25 12z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarBranchingPathsUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBranchingPathsUpLineDuotoneIcon],svg[solar-branching-paths-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.25 18a.75.75 0 0 0 1.5 0zM18 8l.53.53a.75.75 0 0 0 0-1.06zm-.97-2.03a.75.75 0 1 0-1.06 1.06zm-1.06 3a.75.75 0 1 0 1.06 1.06zM12.75 18v-6h-1.5v6zM16 8.75h2v-1.5h-2zm2.53-1.28l-1.5-1.5l-1.06 1.06l1.5 1.5zm-1.06 0l-1.5 1.5l1.06 1.06l1.5-1.5zM12.75 12A3.25 3.25 0 0 1 16 8.75v-1.5A4.75 4.75 0 0 0 11.25 12z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.25 18a.75.75 0 0 0 1.5 0zM6 8l-.53-.53a.75.75 0 0 0 0 1.06zm2.03-.97a.75.75 0 0 0-1.06-1.06zm-1.06 3a.75.75 0 1 0 1.06-1.06zM12.75 18v-6h-1.5v6zM8 7.25H6v1.5h2zM6.53 8.53l1.5-1.5l-1.06-1.06l-1.5 1.5zm-1.06 0l1.5 1.5l1.06-1.06l-1.5-1.5zM12.75 12A4.75 4.75 0 0 0 8 7.25v1.5A3.25 3.25 0 0 1 11.25 12z"></svg:path></svg:g>`,
})
export class SolarBranchingPathsUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBranchingPathsUpLinearIcon],svg[solar-branching-paths-up-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path fill="currentColor" d="M11.25 18a.75.75 0 0 0 1.5 0zM18 8l.53.53a.75.75 0 0 0 0-1.06zm-.97-2.03a.75.75 0 1 0-1.06 1.06zm-1.06 3a.75.75 0 1 0 1.06 1.06zM12.75 18v-6h-1.5v6zM16 8.75h2v-1.5h-2zm2.53-1.28l-1.5-1.5l-1.06 1.06l1.5 1.5zm-1.06 0l-1.5 1.5l1.06 1.06l1.5-1.5zM12.75 12A3.25 3.25 0 0 1 16 8.75v-1.5A4.75 4.75 0 0 0 11.25 12z"></svg:path><svg:path fill="currentColor" d="M11.25 18a.75.75 0 0 0 1.5 0zM6 8l-.53-.53a.75.75 0 0 0 0 1.06zm2.03-.97a.75.75 0 0 0-1.06-1.06zm-1.06 3a.75.75 0 1 0 1.06-1.06zM12.75 18v-6h-1.5v6zM8 7.25H6v1.5h2zM6.53 8.53l1.5-1.5l-1.06-1.06l-1.5 1.5zm-1.06 0l1.5 1.5l1.06-1.06l-1.5-1.5zM12.75 12A4.75 4.75 0 0 0 8 7.25v1.5A3.25 3.25 0 0 1 11.25 12z"></svg:path></svg:g>`,
})
export class SolarBranchingPathsUpLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBranchingPathsUpOutlineIcon],svg[solar-branching-paths-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176"></svg:path><svg:path d="M8.03 5.97a.75.75 0 0 1 0 1.06l-.22.22H8c1.68 0 3.155.872 4 2.187a4.75 4.75 0 0 1 4-2.187h.19l-.22-.22a.75.75 0 0 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H16A3.25 3.25 0 0 0 12.75 12v6a.75.75 0 0 1-1.5 0v-6A3.25 3.25 0 0 0 8 8.75h-.19l.22.22a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5a.75.75 0 0 1 1.06 0"></svg:path></svg:g>`,
})
export class SolarBranchingPathsUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBroomBoldIcon],svg[solar-broom-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.221 19.643c.477-.903.942-1.937 1.24-2.98c.411-1.438.56-2.788.602-3.818l-1.552-1.552l-5.804-5.804l-1.552-1.552c-1.03.042-2.38.19-3.817.602c-1.045.298-2.078.763-2.981 1.24C2.1 6.97 1.427 9.71 2.497 11.807l.013.025l.7 1.15a23.34 23.34 0 0 0 7.808 7.809l1.15.699l.025.013c2.096 1.07 4.837.396 6.028-1.86m3.554-16.33a.77.77 0 0 0-1.088-1.088L19.012 3.9a4.88 4.88 0 0 0-5.718 0l1.109 1.109l4.588 4.588l1.109 1.109a4.88 4.88 0 0 0 0-5.718z"></svg:path>`,
})
export class SolarBroomBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBroomBoldDuotoneIcon],svg[solar-broom-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.53 2.53a.75.75 0 1 0-1.06-1.06l-2.403 2.402a4.5 4.5 0 0 1 1.061 1.06zM2.449 11.411l.74 1.218a24.45 24.45 0 0 0 8.181 8.181l1.219.741c1.898.97 4.353.347 5.414-1.661c.5-.949.977-2.012 1.279-3.07a19.5 19.5 0 0 0 .712-4.33c.033-.64.049-.961-.104-1.357c-.152-.395-.416-.66-.944-1.187L14.12 5.12c-.491-.491-.737-.737-1.107-.89c-.37-.151-.664-.15-1.253-.148a17.2 17.2 0 0 0-4.581.635c-1.057.302-2.12.778-3.069 1.28c-2.008 1.06-2.63 3.515-1.661 5.413" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.643 4.358a4.445 4.445 0 0 0-6.287 0l-.038.037c.232.156.456.38.802.726l4.825 4.825c.302.302.518.517.675.72l.023-.022a4.445 4.445 0 0 0 0-6.286"></svg:path>`,
})
export class SolarBroomBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBroomBrokenIcon],svg[solar-broom-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.036 3.944a.75.75 0 0 0-1.06-1.06zm-8.838 1.061a.75.75 0 1 0 1.06 1.06zm6.187 6.187l-.53.53a.75.75 0 0 0 1.06 0zM3.58 12.98l.64-.39zm-.667-1.096l-.668.34l.012.026l.015.024zM4.408 7.01l.35.663zm2.761-1.15l.206.721zm5.366-.518l.53-.53l-.183-.184l-.258-.03zM10.94 20.34l.39-.64zm1.096.667l-.39.641l.024.015l.025.012zm4.872-1.495l-.663-.35zm1.151-2.761l.721.206zm.924-.585a.75.75 0 1 0-1.463-.332zm.992-13.282l-2.122 2.121l1.061 1.06l2.121-2.12zm-6.718 3.182a3.25 3.25 0 0 1 4.596 0l1.061-1.061a4.75 4.75 0 0 0-6.717 0zm4.596 0a3.25 3.25 0 0 1 0 4.596l1.061 1.06a4.75 4.75 0 0 0 0-6.717zM4.22 12.589l-.667-1.096l-1.281.78l.667 1.096zm.538-4.915c.827-.436 1.734-.84 2.617-1.093l-.412-1.442c-1.018.29-2.025.744-2.905 1.209zm2.617-1.093a14.6 14.6 0 0 1 4.98-.503l.091.009l.089-.745l.088-.745h-.004l-.008-.001l-.123-.012q-.124-.013-.348-.025a16.1 16.1 0 0 0-5.176.58zm-3.794 4.96c-.701-1.373-.238-3.12 1.177-3.867l-.7-1.326c-2.2 1.16-2.856 3.833-1.813 5.876zm6.97 9.44l1.097.667l.78-1.281l-1.097-.667zm7.021-1.119c.465-.88.918-1.887 1.21-2.905l-1.443-.412c-.253.883-.656 1.79-1.093 2.617zm-5.876 1.813c2.044 1.043 4.715.387 5.876-1.812l-1.326-.7c-.747 1.414-2.494 1.878-3.868 1.176zm.308-15.803l5.85 5.85l1.061-1.06l-5.85-5.85zM2.94 13.37a22.75 22.75 0 0 0 7.612 7.612l.78-1.281a21.25 21.25 0 0 1-7.11-7.11zm15.842 3.588q.115-.402.203-.791l-1.463-.332q-.079.351-.182.71z"></svg:path>`,
})
export class SolarBroomBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBroomLineDuotoneIcon],svg[solar-broom-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12.728 5.536a4 4 0 1 1 5.657 5.657M3.58 12.979l-.667-1.096C2.04 10.175 2.6 7.965 4.408 7.011c.854-.45 1.81-.879 2.761-1.15c2.86-.818 5.366-.518 5.366-.518l6.043 6.043s.3 2.506-.518 5.365c-.272.951-.7 1.908-1.15 2.762c-.955 1.807-3.164 2.367-4.873 1.495l-1.096-.667a22 22 0 0 1-7.361-7.362Z"></svg:path><svg:path stroke-linecap="round" d="m20.506 3.414l-2.121 2.121" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBroomLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBroomLinearIcon],svg[solar-broom-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.53 2.53a.75.75 0 0 0-1.06-1.06zM3.19 12.63l.64-.39zm-.741-1.219l-.668.341l.012.025l.015.024zM4.11 5.997l.35.663zm3.069-1.279l.206.721zm5.963-.575l.53-.53l-.184-.184l-.257-.031zM11.37 20.81l.39-.64zm1.219.742l-.39.64l.024.015l.025.012zm5.414-1.662l-.663-.35zm1.279-3.069l.721.206zm.575-5.963l.745-.089l-.03-.257l-.184-.184zM21.47 1.47l-2.358 2.357l1.06 1.06L22.53 2.53zm-7.583 3.418a3.695 3.695 0 0 1 5.225 0l1.06-1.06a5.195 5.195 0 0 0-7.346 0zm5.225 0a3.695 3.695 0 0 1 0 5.226l1.061 1.06a5.195 5.195 0 0 0 0-7.347zM3.83 12.24l-.74-1.219l-1.282.78l.74 1.218zm.63-5.58c.922-.486 1.935-.938 2.925-1.22l-.412-1.443c-1.124.321-2.237.822-3.213 1.337zm2.925-1.22a16.3 16.3 0 0 1 5.564-.563l.1.01h.004l.088-.744l.09-.745h-.005l-.009-.002l-.135-.013q-.136-.013-.384-.027a17.8 17.8 0 0 0-5.725.641zm-4.268 5.63c-.799-1.563-.273-3.556 1.343-4.41l-.7-1.326C1.36 6.6.64 9.519 1.78 11.752zm7.863 10.381l1.219.741l.78-1.281l-1.219-.742zm7.686-1.21c.515-.976 1.016-2.09 1.337-3.214l-1.442-.412c-.283.99-.735 2.003-1.221 2.925zm1.337-3.214a17.8 17.8 0 0 0 .614-6.11l-.01-.105l-.003-.03l-.002-.008v-.004l-.745.088l-.744.09v-.001v.003l.002.019l.008.082q.01.112.023.333a16.3 16.3 0 0 1-.585 5.23zm-7.755 5.192c2.233 1.14 5.15.421 6.418-1.979l-1.326-.7c-.854 1.616-2.847 2.142-4.41 1.344zm.363-17.546l6.716 6.716l1.06-1.06l-6.715-6.717zM2.55 13.019a25.2 25.2 0 0 0 8.432 8.432l.78-1.282a23.7 23.7 0 0 1-7.93-7.93z"></svg:path>`,
})
export class SolarBroomLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBroomOutlineIcon],svg[solar-broom-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.037 2.884a.75.75 0 0 1 0 1.06l-1.633 1.633a4.75 4.75 0 0 1-.085 5.687l.004.032l-.032.004l.032-.004v.005l.001.008l.003.027a9 9 0 0 1 .034.444a16.1 16.1 0 0 1-.58 5.176c-.29 1.019-.743 2.026-1.208 2.907c-1.162 2.199-3.833 2.855-5.876 1.812l-.025-.012l-1.12-.682a22.75 22.75 0 0 1-7.613-7.612l-.681-1.12l-.013-.025c-1.043-2.043-.386-4.715 1.813-5.876c.88-.465 1.888-.918 2.905-1.21a16.1 16.1 0 0 1 5.525-.554l.096.009l.027.003h.009l.002.001h.001l-.003.033l.003-.033l.034.004a4.75 4.75 0 0 1 5.686-.085l1.633-1.632a.75.75 0 0 1 1.06 0m-8.84 3.182l-.14-.01a14.6 14.6 0 0 0-4.682.524c-.883.254-1.79.658-2.617 1.094c-1.406.743-1.873 2.474-1.189 3.844l.652 1.071a21.25 21.25 0 0 0 7.11 7.11l1.071.652c1.37.684 3.102.218 3.844-1.189c.437-.827.84-1.734 1.093-2.617a14.6 14.6 0 0 0 .516-4.823zm6.127 4.004L13.85 5.597a3.251 3.251 0 0 1 4.474 4.473" clip-rule="evenodd"></svg:path>`,
})
export class SolarBroomOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBugBoldIcon],svg[solar-bug-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.416 2.624a.75.75 0 1 0-.832-1.248L13.669 3.32A4.5 4.5 0 0 0 12 3c-.59 0-1.153.113-1.669.32L7.416 1.376a.75.75 0 0 0-.832 1.248l2.36 1.573a4.5 4.5 0 0 0-1.368 2.475A5.5 5.5 0 0 1 8.938 6.5h6.125q.707.002 1.361.172a4.5 4.5 0 0 0-1.368-2.475zM1.25 14a.75.75 0 0 1 .75-.75h3v-1.312c0-.836.26-1.611.704-2.248l-2.483-.994a.75.75 0 0 1 .558-1.392l3.136 1.254A3.9 3.9 0 0 1 8.938 8h6.124c.74 0 1.432.204 2.023.558l3.136-1.254a.75.75 0 1 1 .558 1.392l-2.483.994A3.9 3.9 0 0 1 19 11.938v1.312h3a.75.75 0 0 1 0 1.5h-3V15a7 7 0 0 1-.808 3.269l2.587 1.035a.75.75 0 0 1-.558 1.393l-2.892-1.158a7 7 0 0 1-4.579 2.421V15a.75.75 0 1 0-1.5 0v6.96a7 7 0 0 1-4.579-2.42L3.78 20.696a.75.75 0 1 1-.558-1.393l2.588-1.035A7 7 0 0 1 5 15v-.25H2a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class SolarBugBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBugBoldDuotoneIcon],svg[solar-bug-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 11.938V15a7 7 0 0 1-6.25 6.96V15a.75.75 0 0 0-1.5 0v6.96A7 7 0 0 1 5 15v-3.062A3.94 3.94 0 0 1 8.938 8h6.124A3.94 3.94 0 0 1 19 11.938" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19 14.75v-1.5h3a.75.75 0 0 1 0 1.5zm-1.504 4.586c.31-.393.58-.82.801-1.276l2.538 1.27a.75.75 0 1 1-.67 1.34zM5.703 18.06q.333.684.801 1.276l-2.669 1.335a.75.75 0 0 1-.67-1.342zM5 13.25H2a.75.75 0 0 0 0 1.5h3zm12.354-4.515l2.81-1.406a.75.75 0 1 1 .671 1.341L18.42 9.88a4 4 0 0 0-1.065-1.144M6.647 8.735c-.427.306-.79.695-1.067 1.144L3.165 8.67a.75.75 0 0 1 .67-1.341zM16.5 8.27V7.5a4.5 4.5 0 1 0-9 0v.77A3.9 3.9 0 0 1 8.938 8h6.124c.508 0 .993.096 1.438.27"></svg:path><svg:path fill="currentColor" d="M6.376 1.584a.75.75 0 0 0 .208 1.04l2.36 1.573a4.5 4.5 0 0 1 1.387-.877L7.416 1.376a.75.75 0 0 0-1.04.208m8.68 2.613a4.5 4.5 0 0 0-1.387-.877l2.915-1.944a.75.75 0 1 1 .832 1.248z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 14.25a.75.75 0 0 1 .75.75v7h-1.5v-7a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBugBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBugBrokenIcon],svg[solar-bug-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 21.71A7 7 0 0 1 5 15v-3.062A3.94 3.94 0 0 1 8.938 8h6.124A3.94 3.94 0 0 1 19 11.938V15a6.98 6.98 0 0 1-2 4.899"></svg:path><svg:path fill="currentColor" d="M8.25 7.5a.75.75 0 0 0-1.5 0zm-.615-2.917a.75.75 0 1 0 1.246.834zM17.25 8.5v-1h-1.5v1zm-10.5-1v1h1.5v-1zm10.5 0c0-2.9-2.35-5.25-5.25-5.25v1.5a3.75 3.75 0 0 1 3.75 3.75zM12 2.25a5.25 5.25 0 0 0-4.365 2.333l1.246.834A3.75 3.75 0 0 1 12 3.75z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 14h3M5 14H2M14.5 3.5L17 2M9.5 3.5L7 2m13.5 18l-2-.8m2-11.2l-2 .8M3.5 20l2-.8M3.5 8l2 .8M12 21.5V15"></svg:path></svg:g>`,
})
export class SolarBugBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBugLineDuotoneIcon],svg[solar-bug-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19 15v-3.062A3.94 3.94 0 0 0 15.063 8H8.936A3.94 3.94 0 0 0 5 11.938V15a7 7 0 1 0 14 0Z"></svg:path><svg:path d="M16.5 8.5v-1a4.5 4.5 0 1 0-9 0v1"></svg:path><svg:path stroke-linecap="round" d="M19 14h3M5 14H2M14.5 3.5L17 2M9.5 3.5L7 2m13.5 18l-2-.8m2-11.2l-2 .8M3.5 20l2-.8M3.5 8l2 .8M12 21.5V15" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBugLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBugLinearIcon],svg[solar-bug-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19 15v-3.062A3.94 3.94 0 0 0 15.063 8H8.936A3.94 3.94 0 0 0 5 11.938V15a7 7 0 1 0 14 0Z"></svg:path><svg:path d="M16.5 8.5v-1a4.5 4.5 0 1 0-9 0v1"></svg:path><svg:path stroke-linecap="round" d="M19 14h3M5 14H2M14.5 3.5L17 2M9.5 3.5L7 2m13.5 18l-2-.8m2-11.2l-2 .8M3.5 20l2-.8M3.5 8l2 .8M12 21.5V15"></svg:path></svg:g>`,
})
export class SolarBugLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBugMinimalisticBoldIcon],svg[solar-bug-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.422 3.179L7.386 1.357a.75.75 0 0 0-.772 1.286L8.64 3.858a7.03 7.03 0 0 0-2.99 3.194l-1.87-.748a.75.75 0 1 0-.557 1.392l1.945.779A7 7 0 0 0 5 10v2.25H2a.75.75 0 0 0 0 1.5h3V15c0 .85.152 1.666.43 2.42l-2.209.884a.75.75 0 1 0 .558 1.393l2.32-.929A7 7 0 0 0 12 22a7 7 0 0 0 5.9-3.232l2.322.929a.75.75 0 0 0 .556-1.393l-2.208-.883a7 7 0 0 0 .43-2.42v-1.25h3a.75.75 0 0 0 0-1.5h-3V10q-.002-.788-.167-1.526l1.945-.779a.75.75 0 1 0-.557-1.392l-1.87.748a7.03 7.03 0 0 0-2.99-3.194l2.025-1.215a.75.75 0 1 0-.772-1.286l-3.036 1.822a7 7 0 0 0-3.156 0M10.5 9.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm-.75 5.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBugMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBugMinimalisticBoldDuotoneIcon],svg[solar-bug-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10a7 7 0 0 1 14 0v5a7 7 0 1 1-14 0z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.75 15.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m.75-5.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm6.916-7.126a.75.75 0 1 0-.832-1.248l-2.786 1.857a7 7 0 0 1 1.674.687zm1.414 5.834a7 7 0 0 0-.477-1.402l.07-.033l1.798-.72a.75.75 0 1 1 .557 1.393l-1.797.72q-.075.03-.151.042M19 13.75h3a.75.75 0 0 0 0-1.5h-3zm-1.058 4.952q.369-.589.616-1.25a.8.8 0 0 1 .22.052l2 .8a.75.75 0 0 1-.556 1.393l-2-.8a.75.75 0 0 1-.28-.195m-12.5-1.25q.247.661.616 1.25a.75.75 0 0 1-.28.195l-2 .8a.75.75 0 1 1-.557-1.393l2-.8a.8.8 0 0 1 .22-.052M5 12.25H2a.75.75 0 0 0 0 1.5h3zm.648-5.194a7 7 0 0 0-.478 1.402a1 1 0 0 1-.15-.042l-1.798-.72a.75.75 0 0 1 .557-1.392l1.797.719q.038.014.072.033m2.88-3.136L6.584 2.624a.75.75 0 0 1 .832-1.248l2.786 1.857a7 7 0 0 0-1.674.687"></svg:path>`,
})
export class SolarBugMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBugMinimalisticBrokenIcon],svg[solar-bug-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 22a7 7 0 0 1-7-7v-5a7 7 0 0 1 14 0v5a6.98 6.98 0 0 1-2.101 5M19 13h3M5 13H2m18.5-6l-1.798.72M3.5 7l1.798.72M14.5 3.5L17 2M9.5 3.5L7 2m13.5 17l-2-.8m-15 .8l2-.8m5-7.7h3m-3 5h3"></svg:path>`,
})
export class SolarBugMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBugMinimalisticLineDuotoneIcon],svg[solar-bug-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 10a7 7 0 0 1 14 0v5a7 7 0 1 1-14 0z"></svg:path><svg:path stroke-linecap="round" d="M19 13h3M5 13H2m18.5-6l-1.798.72M3.5 7l1.798.72M14.5 3.5L17 2M9.5 3.5L7 2m13.5 17l-2-.8m-15 .8l2-.8m5-7.7h3m-3 5h3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBugMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBugMinimalisticLinearIcon],svg[solar-bug-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 10a7 7 0 0 1 14 0v5a7 7 0 1 1-14 0z"></svg:path><svg:path stroke-linecap="round" d="M19 13h3M5 13H2m18.5-6l-1.798.72M3.5 7l1.798.72M14.5 3.5L17 2M9.5 3.5L7 2m13.5 17l-2-.8m-15 .8l2-.8m5-7.7h3m-3 5h3"></svg:path></svg:g>`,
})
export class SolarBugMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBugMinimalisticOutlineIcon],svg[solar-bug-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 10.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m.75 4.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.643 1.614a.75.75 0 0 1-.257 1.03l-1.292.774a7.8 7.8 0 0 1 2.954 3.355l1.173-.47a.75.75 0 1 1 .557 1.393l-1.24.497c.139.58.212 1.185.212 1.807v2.25H22a.75.75 0 0 1 0 1.5h-2.25V15c0 .95-.17 1.859-.483 2.7l1.512.604a.75.75 0 0 1-.558 1.393l-1.613-.646a7.75 7.75 0 0 1-6.608 3.7a7.75 7.75 0 0 1-6.608-3.7l-1.613.646a.75.75 0 0 1-.558-1.393l1.512-.605A7.7 7.7 0 0 1 4.25 15v-1.25H2a.75.75 0 0 1 0-1.5h2.25V10c0-.622.073-1.227.212-1.807l-1.24-.497a.75.75 0 1 1 .557-1.392l1.173.469a7.8 7.8 0 0 1 2.954-3.355l-1.292-.775a.75.75 0 1 1 .772-1.286l2.153 1.292A7.7 7.7 0 0 1 12 2.25c.86 0 1.688.14 2.46.399l2.154-1.292a.75.75 0 0 1 1.03.257M9.55 4.25a.75.75 0 0 0 .415-.16A6.2 6.2 0 0 1 12 3.75c.713 0 1.397.12 2.035.339c.12.094.265.15.415.16A6.25 6.25 0 0 1 18.25 10v5a6.25 6.25 0 1 1-12.5 0v-5a6.25 6.25 0 0 1 3.8-5.751" clip-rule="evenodd"></svg:path>`,
})
export class SolarBugMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBugOutlineIcon],svg[solar-bug-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.386 2.643a.75.75 0 1 0-.772-1.286L14.27 2.764A5.2 5.2 0 0 0 12 2.25a5.2 5.2 0 0 0-2.269.514L7.386 1.357a.75.75 0 0 0-.772 1.286l1.763 1.058A5.24 5.24 0 0 0 6.75 7.5v.29q-.386.204-.725.473a.8.8 0 0 0-.246-.16l-2-.8a.75.75 0 0 0-.558 1.392l1.772.709c-.47.73-.743 1.6-.743 2.533v1.312H2a.75.75 0 0 0 0 1.5h2.25V15c0 1.28.31 2.486.859 3.55l-1.888.754a.75.75 0 1 0 .558 1.393l2-.8a1 1 0 0 0 .149-.08A7.74 7.74 0 0 0 12 22.75a7.74 7.74 0 0 0 6.072-2.934a1 1 0 0 0 .15.08l2 .8a.75.75 0 0 0 .556-1.392l-1.886-.755A7.7 7.7 0 0 0 19.75 15v-.25H22a.75.75 0 0 0 0-1.5h-2.25v-1.312c0-.934-.273-1.803-.743-2.533l1.771-.709a.75.75 0 0 0-.556-1.392l-2 .8a.8.8 0 0 0-.247.16a4.7 4.7 0 0 0-.725-.473V7.5a5.24 5.24 0 0 0-1.627-3.8zM5.75 15v-3.062A3.187 3.187 0 0 1 8.938 8.75h6.124a3.19 3.19 0 0 1 3.188 3.188V15a6.25 6.25 0 0 1-5.5 6.206V15a.75.75 0 0 0-1.5 0v6.206A6.25 6.25 0 0 1 5.75 15M12 3.75a3.75 3.75 0 0 1 3.745 3.55a5 5 0 0 0-.682-.05H8.936q-.347 0-.682.05A3.75 3.75 0 0 1 12 3.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBugOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildings2BoldIcon],svg[solar-buildings-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.25 8.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552c-.441-.295-1.034-.332-2.115-.336q.005.438.004.91V7.25h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v6.5h-1.5V6c0-1.886 0-2.828-.586-3.414S14.636 2 12.75 2h-2c-1.886 0-2.828 0-3.414.586S6.75 4.114 6.75 6v15.25h-1.5v-6.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1V5.91q-.001-.47.004-.91c-1.081.005-1.674.042-2.115.337a2 2 0 0 0-.552.552C2.25 6.393 2.25 7.096 2.25 8.5v12.75h-.5a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-.5zM9 11.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m2.75 3.5a.75.75 0 0 1 .75.75v2.25H11V19a.75.75 0 0 1 .75-.75M9 6.25a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 6.25m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 9.25" clip-rule="evenodd"></svg:path>`,
})
export class SolarBuildings2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildings2BoldDuotoneIcon],svg[solar-buildings-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.913 5.889c.337.504.337 1.206.337 2.611v12.75h.5a.75.75 0 0 1 0 1.5h-20a.75.75 0 1 1 0-1.5h.5V8.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552c.441-.295 2.537-.332 3.618-.336q-.005.437-.004.91V7.25H4.25a.75.75 0 1 0 0 1.5h2.503v1.5H4.25a.75.75 0 0 0 0 1.5h2.503v1.5H4.25a.75.75 0 0 0 0 1.5h2.503v6.5h10v-6.5h2.497a.75.75 0 1 0 0-1.5h-2.497v-1.5h2.497a.75.75 0 1 0 0-1.5h-2.497v-1.5h2.497a.75.75 0 0 0 0-1.5h-2.497V5.91q.001-.471-.004-.91c1.081.005 3.17.042 3.612.337a2 2 0 0 1 .552.552" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.75 2h2c1.886 0 2.828 0 3.414.586S16.75 4.114 16.75 6v15.25h5a.75.75 0 0 1 0 1.5h-20a.75.75 0 0 1 0-1.5h5V6c0-1.886 0-2.828.586-3.414S8.864 2 10.75 2m1 16.25a.75.75 0 0 1 .75.75v2.25H11V19a.75.75 0 0 1 .75-.75m-2-4.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM9 11.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m.75-3.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM9 6.25a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 6.25" clip-rule="evenodd"></svg:path>`,
})
export class SolarBuildings2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildings2BrokenIcon],svg[solar-buildings-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 22H2"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16"></svg:path><svg:path fill="currentColor" d="M20.25 11.5a.75.75 0 0 0 1.5 0zm-.139-3.163l-.416.624zm.552.552l-.624.417zM21.75 15.5a.75.75 0 0 0-1.5 0zM17.5 8.75c.718 0 1.2 0 1.567.038c.355.036.519.1.628.173l.833-1.248c-.396-.264-.835-.369-1.309-.417c-.461-.047-1.032-.046-1.719-.046zm4.25 2.75c0-.687 0-1.258-.046-1.719c-.048-.473-.153-.913-.418-1.309l-1.247.834c.073.108.137.272.173.627c.037.367.038.85.038 1.567zm-2.055-2.54q.206.14.344.346l1.247-.834c-.2-.3-.458-.558-.758-.759zm.555 6.54V22h1.5v-6.5zM3.889 8.337l.417.624zm-.552.552l.624.417zM3.75 20a.75.75 0 0 0-1.5 0zm-1.5-4a.75.75 0 0 0 1.5 0zM6.5 7.25c-.687 0-1.258 0-1.719.046c-.473.048-.913.153-1.309.417l.834 1.248c.108-.073.272-.137.627-.173c.367-.037.85-.038 1.567-.038zM3.75 11.5c0-.718 0-1.2.038-1.567c.036-.355.1-.519.173-.627l-1.248-.834c-.264.396-.369.836-.417 1.309c-.047.461-.046 1.032-.046 1.719zm-.278-3.787a2.8 2.8 0 0 0-.759.76l1.248.833a1.3 1.3 0 0 1 .345-.345zM2.25 20v2h1.5v-2zm0-8.5V16h1.5v-4.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 22v-3M10 5h4m-4 9h.5m3.5 0h-1.5M14 8h-.5M10 8h1.5M10 11h4"></svg:path></svg:g>`,
})
export class SolarBuildings2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildings2LineDuotoneIcon],svg[solar-buildings-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2"></svg:path><svg:path d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16"></svg:path><svg:path d="M21 22V11.5c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 8 18.904 8 17.5 8M3 22V11.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 8 5.096 8 6.5 8" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 22v-3"></svg:path><svg:path stroke-linecap="round" d="M10 5h4m-4 3h4m-4 3h4m-4 3h4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBuildings2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildings2LinearIcon],svg[solar-buildings-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2"></svg:path><svg:path d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16m14 0V11.5c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 8 18.904 8 17.5 8M3 22V11.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 8 5.096 8 6.5 8"></svg:path><svg:path stroke-linecap="round" d="M12 22v-3M10 5h4m-4 3h4m-4 3h4m-4 3h4"></svg:path></svg:g>`,
})
export class SolarBuildings2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildings2OutlineIcon],svg[solar-buildings-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.948 1.25h2.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243V7.25c.577 0 1.065.005 1.469.046c.473.048.913.153 1.309.417c.3.201.558.459.759.76c.264.395.369.835.417 1.308c.046.452.046 1.011.046 1.68v9.789H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.25v-9.788c0-.67 0-1.229.046-1.681c.048-.473.153-.913.417-1.309c.201-.3.459-.558.76-.759c.395-.264.835-.369 1.308-.417c.404-.041.892-.045 1.469-.046V5.948c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08M6.25 8.75c-.583 0-.994.005-1.317.038c-.355.036-.519.1-.627.173a1.3 1.3 0 0 0-.345.345c-.073.108-.137.272-.173.627c-.037.367-.038.85-.038 1.567v9.75h2.5zm1.5 12.5h3.5V19a.75.75 0 0 1 1.5 0v2.25h3.5V6c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-2c-.964 0-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788C7.753 4.388 7.75 5.036 7.75 6zm10 0h2.5V11.5c0-.718 0-1.2-.038-1.567c-.036-.355-.1-.519-.173-.627a1.3 1.3 0 0 0-.344-.345c-.109-.073-.273-.137-.628-.173c-.323-.033-.734-.037-1.317-.038zM9.25 5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 5m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 8m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBuildings2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildings3BoldIcon],svg[solar-buildings-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.913 5.889c.337.504.337 1.207.337 2.611v12.75h.5a.75.75 0 0 1 0 1.5h-20a.75.75 0 0 1 0-1.5h.5V8.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552c.441-.295 1.034-.332 2.115-.336q-.005.438-.004.91V7.25h-1a.75.75 0 0 0 0 1.5h1v1.5h-1a.75.75 0 0 0 0 1.5h1v1.5h-1a.75.75 0 0 0 0 1.5h1v6.5h1.5V6c0-1.886 0-2.828.586-3.414S8.864 2 10.75 2h2c1.886 0 2.828 0 3.414.586S16.75 4.114 16.75 6v15.25h1.5v-6.5h1a.75.75 0 0 0 0-1.5h-1v-1.5h1a.75.75 0 0 0 0-1.5h-1v-1.5h1a.75.75 0 0 0 0-1.5h-1V5.91q.001-.47-.004-.91c1.081.005 1.674.042 2.115.337a2 2 0 0 1 .552.552M12.5 19a.75.75 0 0 0-1.5 0v2.25h1.5zM9 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 15m.75-3.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM9.25 7a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0m1.5 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarBuildings3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildings3BoldDuotoneIcon],svg[solar-buildings-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.75 2h2c1.886 0 2.828 0 3.414.586S16.75 4.114 16.75 6v15.25h5a.75.75 0 0 1 0 1.5h-20a.75.75 0 0 1 0-1.5h5V6c0-1.886 0-2.828.586-3.414S8.864 2 10.75 2M9 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 12m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 15m2.75 3.25a.75.75 0 0 1 .75.75v2.25H11V19a.75.75 0 0 1 .75-.75M9.25 7a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10.75 7a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M20.913 5.889c.337.504.337 1.206.337 2.611v12.75h.5a.75.75 0 0 1 0 1.5h-20a.75.75 0 1 1 0-1.5h.5V8.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552c.441-.295 2.537-.332 3.618-.336q-.005.437-.004.91V7.25H4.25a.75.75 0 1 0 0 1.5h2.503v1.5H4.25a.75.75 0 0 0 0 1.5h2.503v1.5H4.25a.75.75 0 0 0 0 1.5h2.503v6.5h10v-6.5h2.497a.75.75 0 1 0 0-1.5h-2.497v-1.5h2.497a.75.75 0 1 0 0-1.5h-2.497v-1.5h2.497a.75.75 0 0 0 0-1.5h-2.497V5.91q.001-.471-.004-.91c1.081.005 3.17.042 3.612.337a2 2 0 0 1 .552.552" opacity=".5"></svg:path>`,
})
export class SolarBuildings3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildings3BrokenIcon],svg[solar-buildings-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 22H2"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 22v-3m-2-7h4m-8.5-1H7m-1.5 3H7m10-3h1.5M17 14h1.5m-13-6H7m10 0h1.5"></svg:path><svg:circle cx="12" cy="7" r="2" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path fill="currentColor" d="M20.25 11.5a.75.75 0 0 0 1.5 0zm-.139-3.163l-.416.624zm.552.552l-.624.417zM21.75 15.5a.75.75 0 0 0-1.5 0zM17.5 8.75c.718 0 1.2 0 1.567.038c.355.036.519.1.628.173l.833-1.248c-.396-.264-.835-.369-1.309-.417c-.461-.047-1.032-.046-1.719-.046zm4.25 2.75c0-.687 0-1.258-.046-1.719c-.048-.473-.153-.913-.418-1.309l-1.247.834c.073.108.137.272.173.627c.037.367.038.85.038 1.567zm-2.055-2.54q.206.14.344.346l1.247-.834c-.2-.3-.458-.558-.758-.759zm.555 6.54V22h1.5v-6.5zM3.889 8.337l.417.624zm-.552.552l.624.417zM3.75 20a.75.75 0 0 0-1.5 0zm-1.5-4a.75.75 0 0 0 1.5 0zM6.5 7.25c-.687 0-1.258 0-1.719.046c-.473.048-.913.153-1.309.417l.834 1.248c.108-.073.272-.137.627-.173c.367-.037.85-.038 1.567-.038zM3.75 11.5c0-.718 0-1.2.038-1.567c.036-.355.1-.519.173-.627l-1.248-.834c-.264.396-.369.836-.417 1.309c-.047.461-.046 1.032-.046 1.719zm-.278-3.787a2.8 2.8 0 0 0-.759.76l1.248.833a1.3 1.3 0 0 1 .345-.345zM2.25 20v2h1.5v-2zm0-8.5V16h1.5v-4.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 15h.5m3.5 0h-1.5"></svg:path></svg:g>`,
})
export class SolarBuildings3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildings3LineDuotoneIcon],svg[solar-buildings-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2"></svg:path><svg:path d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16"></svg:path><svg:path d="M21 22V8.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 5 18.904 5 17.5 5M3 22V8.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 5 5.096 5 6.5 5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 22v-3"></svg:path><svg:path stroke-linecap="round" d="M10 12h4m-8.5-1H7m-1.5 3H7m10-3h1.5M17 14h1.5m-13-6H7m10 0h1.5M10 15h4" opacity=".5"></svg:path><svg:circle cx="12" cy="7" r="2"></svg:circle></svg:g>`,
})
export class SolarBuildings3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildings3LinearIcon],svg[solar-buildings-3-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2"></svg:path><svg:path d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16m14 0V8.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 5 18.904 5 17.5 5M3 22V8.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 5 5.096 5 6.5 5"></svg:path><svg:path stroke-linecap="round" d="M12 22v-3m-2-7h4m-8.5-1H7m-1.5 3H7m10-3h1.5M17 14h1.5m-13-6H7m10 0h1.5M10 15h4"></svg:path><svg:circle cx="12" cy="7" r="2"></svg:circle></svg:g>`,
})
export class SolarBuildings3LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildings3OutlineIcon],svg[solar-buildings-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.948 1.25h2.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65q.035.255.05.545c.59 0 1.088.004 1.499.046c.473.048.913.153 1.309.417c.3.201.558.459.759.76c.264.395.369.835.417 1.308c.046.452.046 1.011.046 1.68V21.25H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.25V8.462c0-.67 0-1.229.046-1.681c.048-.473.153-.913.417-1.309c.201-.3.459-.558.76-.759c.395-.264.835-.369 1.308-.417c.41-.042.909-.046 1.498-.046q.017-.29.05-.544c.085-.628.271-1.195.726-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08M6.25 5.75c-.583 0-.994.005-1.317.038c-.355.036-.519.1-.627.173a1.3 1.3 0 0 0-.345.345c-.073.108-.137.272-.173.627c-.037.367-.038.85-.038 1.567v12.75h2.5v-6.5H5.5a.75.75 0 0 1 0-1.5h.75v-1.5H5.5a.75.75 0 0 1 0-1.5h.75v-1.5H5.5a.75.75 0 1 1 0-1.5h.75zm1.5 15.5h3.5V19a.75.75 0 0 1 1.5 0v2.25h3.5V6c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-2c-.964 0-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788C7.753 4.388 7.75 5.036 7.75 6zm10-12.5h.75a.75.75 0 0 0 0-1.5h-.75v-1.5c.583 0 .994.005 1.317.038c.355.036.519.1.628.173c.136.09.253.208.344.345c.073.108.137.272.173.627c.037.367.038.85.038 1.567v12.75h-2.5v-6.5h.75a.75.75 0 0 0 0-1.5h-.75v-1.5h.75a.75.75 0 0 0 0-1.5h-.75zm-5.75-3a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M9.25 7a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0m0 5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBuildings3OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildingsBoldIcon],svg[solar-buildings-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 2h2c1.886 0 2.828 0 3.414.586S21 4.114 21 6v15.25h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h1V9c0-1.886 0-2.828.586-3.414S5.114 5 7 5h4c1.886 0 2.828 0 3.414.586S15 7.114 15 9v12.25h1.5V8.91c0-.865 0-1.659-.087-2.304c-.095-.711-.32-1.463-.938-2.08c-.618-.619-1.37-.844-2.08-.94c-.637-.085-1.418-.086-2.269-.086c.084-.387.225-.68.46-.914C12.172 2 13.114 2 15 2M5.25 8A.75.75 0 0 1 6 7.25h6a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8m0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M9 18.25a.75.75 0 0 1 .75.75v2.25h-1.5V19a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBuildingsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildingsBoldDuotoneIcon],svg[solar-buildings-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 5h4c1.886 0 2.828 0 3.414.586S15 7.114 15 9v12.25h7a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h1V9c0-1.886 0-2.828.586-3.414S5.114 5 7 5M5.25 8A.75.75 0 0 1 6 7.25h6a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8m0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M9 18.25a.75.75 0 0 1 .75.75v2.25h-1.5V19a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15 2h2c1.886 0 2.828 0 3.414.586S21 4.114 21 6v15.25h-6V9c0-1.886 0-2.828-.586-3.414C13.842 5.013 12.928 5 11.126 5V3.5c.084-.387.225-.68.46-.914C12.17 2 13.114 2 15 2" opacity=".5"></svg:path>`,
})
export class SolarBuildingsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildingsBrokenIcon],svg[solar-buildings-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 22H2m19 0v-9m-9.996-8c.018-1.24.11-1.943.582-2.414C12.172 2 13.114 2 15 2h2c1.886 0 2.828 0 3.414.586S21 4.114 21 6v3"></svg:path><svg:path d="M15 22v-6M3 22v-9m0-4c0-1.886 0-2.828.586-3.414S5.114 5 7 5h4c1.886 0 2.828 0 3.414.586S15 7.114 15 9v3M9 22v-3M6 8h6m-6 3h1m5 0H9.5M6 14h6"></svg:path></svg:g>`,
})
export class SolarBuildingsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildingsLineDuotoneIcon],svg[solar-buildings-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2"></svg:path><svg:path d="M21 22V6c0-1.886 0-2.828-.586-3.414S18.886 2 17 2h-2c-1.886 0-2.828 0-3.414.586c-.472.471-.564 1.174-.582 2.414" opacity=".5"></svg:path><svg:path d="M15 22V9c0-1.886 0-2.828-.586-3.414S12.886 5 11 5H7c-1.886 0-2.828 0-3.414.586S3 7.114 3 9v13"></svg:path><svg:path stroke-linecap="round" d="M9 22v-3"></svg:path><svg:path stroke-linecap="round" d="M6 8h6m-6 3h6m-6 3h6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBuildingsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildingsLinearIcon],svg[solar-buildings-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2"></svg:path><svg:path d="M21 22V6c0-1.886 0-2.828-.586-3.414S18.886 2 17 2h-2c-1.886 0-2.828 0-3.414.586c-.472.471-.564 1.174-.582 2.414"></svg:path><svg:path d="M15 22V9c0-1.886 0-2.828-.586-3.414S12.886 5 11 5H7c-1.886 0-2.828 0-3.414.586S3 7.114 3 9v13"></svg:path><svg:path stroke-linecap="round" d="M9 22v-3M6 8h6m-6 3h6m-6 3h6"></svg:path></svg:g>`,
})
export class SolarBuildingsLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildingsOutlineIcon],svg[solar-buildings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.948 1.25h2.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243V21.25H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.25V8.948c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08h3.33c.051-.874.213-1.63.777-2.195c.456-.455 1.023-.64 1.65-.725c.595-.08 1.345-.08 2.243-.08m-3.941 4.5H7c-.964 0-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788C3.753 7.388 3.75 8.036 3.75 9v12.25h4.5V19a.75.75 0 0 1 1.5 0v2.25h4.5V9c0-.964-.002-1.612-.066-2.095c-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.481-.064-1.127-.066-2.087-.066m4.743 15.5V8.948c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.425-.057-.93-.074-1.51-.078c.05-.7.16-.963.332-1.136c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066h2c.964 0 1.612.002 2.095.067c.461.062.659.169.789.3s.237.327.3.788c.064.483.066 1.131.066 2.095v15.25zM5.25 8A.75.75 0 0 1 6 7.25h6a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8m0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBuildingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBusBoldIcon],svg[solar-bus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C8.229 2 6.343 2 5.172 3.172C4.108 4.235 4.01 5.886 4 9H3a1 1 0 0 0-1 1v1a1 1 0 0 0 .4.8L4 13c.01 3.114.108 4.765 1.172 5.828c.242.243.514.435.828.587V21a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1.018C10.227 20 11.054 20 12 20s1.773 0 2.5-.018V21a1 1 0 0 0 1 1H17a1 1 0 0 0 1-1v-1.585a3 3 0 0 0 .828-.587C19.892 17.765 19.991 16.114 20 13l1.6-1.2a1 1 0 0 0 .4-.8v-1a1 1 0 0 0-1-1h-1c-.01-3.114-.108-4.765-1.172-5.828C17.657 2 15.771 2 12 2M5.5 9.5c0 1.414 0 2.121.44 2.56c.439.44 1.146.44 2.56.44h7c1.414 0 2.121 0 2.56-.44c.44-.439.44-1.146.44-2.56V7c0-1.414 0-2.121-.44-2.56C17.622 4 16.915 4 15.5 4h-7c-1.414 0-2.121 0-2.56.44C5.5 4.878 5.5 5.585 5.5 7zm.75 6.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m11.5 0a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBusBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBusBoldDuotoneIcon],svg[solar-bus-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 19.982c1.573-.04 2.677-.167 3.5-.567V21a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1zM6 19.415c.823.4 1.927.527 3.5.567V21a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.172 3.172C6.343 2 8.229 2 12 2s5.657 0 6.828 1.172C19.892 4.235 19.99 5.886 20 9v4c-.01 3.114-.108 4.765-1.172 5.828a3 3 0 0 1-.828.587c-.823.4-1.927.527-3.5.567C13.773 20 12.946 20 12 20s-1.773 0-2.5-.018c-1.573-.04-2.677-.167-3.5-.567a3 3 0 0 1-.828-.587C4.108 17.765 4.009 16.114 4 13V9c.01-3.114.108-4.765 1.172-5.828" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.75 16a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 .75-.75m-11.5 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75M5.5 9.5c0 1.414 0 2.121.44 2.56c.439.44 1.146.44 2.56.44h7c1.414 0 2.121 0 2.56-.44c.44-.439.44-1.146.44-2.56V7c0-1.414 0-2.121-.44-2.56C17.622 4 16.915 4 15.5 4h-7c-1.414 0-2.121 0-2.56.44C5.5 4.878 5.5 5.585 5.5 7zm-3.1 2.3L4 13V9H3a1 1 0 0 0-1 1v1a1 1 0 0 0 .4.8M21 9h-1.001L20 13l1.6-1.2a1 1 0 0 0 .4-.8v-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class SolarBusBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBusBrokenIcon],svg[solar-bus-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10 2.009c-2.48.036-3.885.22-4.828 1.163C4 4.343 4 6.229 4 10v2c0 3.771 0 5.657 1.172 6.828S8.229 20 12 20s5.657 0 6.828-1.172S20 15.771 20 12v-2c0-3.771 0-5.657-1.172-6.828c-.943-.943-2.348-1.127-4.828-1.163"></svg:path><svg:path stroke-linejoin="round" d="M20 13h-4M4 13h8m3.5 3H17M7 16h1.5M6 19.5V21a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1m8.5-.5V21a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1M20 9h1a1 1 0 0 1 1 1v1a1 1 0 0 1-.4.8L20 13M4 9H3a1 1 0 0 0-1 1v1a1 1 0 0 0 .4.8L4 13"></svg:path><svg:path d="M4.5 5h3.75M19.5 5H12"></svg:path></svg:g>`,
})
export class SolarBusBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBusLineDuotoneIcon],svg[solar-bus-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v2c0 3.771 0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 13h16" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.5 16H17M7 16h1.5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 19.5V21a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1m8.5-.5V21a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1M20 9h1a1 1 0 0 1 1 1v1a1 1 0 0 1-.4.8L20 13M4 9H3a1 1 0 0 0-1 1v1a1 1 0 0 0 .4.8L4 13" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M19.5 5h-15" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBusLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBusLinearIcon],svg[solar-bus-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v2c0 3.771 0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 13h16m-4.5 3H17M7 16h1.5M6 19.5V21a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1m8.5-.5V21a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1M20 9h1a1 1 0 0 1 1 1v1a1 1 0 0 1-.4.8L20 13M4 9H3a1 1 0 0 0-1 1v1a1 1 0 0 0 .4.8L4 13"></svg:path><svg:path stroke-linecap="round" d="M19.5 5h-15"></svg:path></svg:g>`,
})
export class SolarBusLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBusOutlineIcon],svg[solar-bus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.944 1.25h.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.103.764.136 1.67.147 2.739H21c.966 0 1.75.784 1.75 1.75v1c0 .55-.26 1.07-.7 1.4l-1.303.977c-.007 1.232-.036 2.26-.15 3.112c-.158 1.172-.49 2.121-1.238 2.87q-.285.284-.609.493V21A1.75 1.75 0 0 1 17 22.75h-1.5A1.75 1.75 0 0 1 13.75 21v-.256q-.786.007-1.694.006h-.112q-.909.002-1.694-.006V21a1.75 1.75 0 0 1-1.75 1.75H7A1.75 1.75 0 0 1 5.25 21v-1.148a3.7 3.7 0 0 1-.609-.493c-.748-.749-1.08-1.698-1.238-2.87c-.114-.852-.143-1.88-.15-3.112L1.95 12.4c-.44-.33-.7-.85-.7-1.4v-1c0-.966.784-1.75 1.75-1.75h.255c.012-1.069.045-1.975.148-2.739c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M3.25 9.75H3a.25.25 0 0 0-.25.25v1a.25.25 0 0 0 .1.2l.4.3zm1.506 4c.01 1.034.042 1.858.134 2.54c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14s3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.092-.68.123-1.505.134-2.539zm14.494-1.5H4.75V10c0-1.883.002-3.227.135-4.25h14.23c.133 1.023.135 2.367.135 4.25zm1.5-.75l.4-.3a.25.25 0 0 0 .1-.2v-1a.25.25 0 0 0-.25-.25h-.25zm-2.049-7.25a2.3 2.3 0 0 0-.403-.548c-.423-.423-1.003-.677-2.009-.812c-1.028-.138-2.382-.14-4.289-.14s-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812a2.3 2.3 0 0 0-.403.548zM6.75 20.46V21c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-.296a15 15 0 0 1-1.239-.107a8 8 0 0 1-.761-.137m8.5.244V21c0 .138.112.25.25.25H17a.25.25 0 0 0 .25-.25v-.54q-.363.084-.761.137a15 15 0 0 1-1.239.107M6.25 16a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m8.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalculatorBoldIcon],svg[solar-calculator-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.243 0-6.364 0-7.682-1.465C3 19.072 3 16.714 3 12s0-7.071 1.318-8.536S7.758 2 12 2s6.364 0 7.682 1.464C21 4.93 21 7.286 21 12s0 7.071-1.318 8.535S16.242 22 12 22m3-16H9c-.465 0-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C7 7.304 7 7.536 7 8s0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06C8.304 10 8.536 10 9 10h6c.465 0 .697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C17 8.696 17 8.464 17 8s0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C15.697 6 15.464 6 15 6m-6 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-3-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarCalculatorBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalculatorBoldDuotoneIcon],svg[solar-calculator-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.243 0-6.364 0-7.682-1.465C3 19.072 3 16.714 3 12s0-7.071 1.318-8.536S7.758 2 12 2s6.364 0 7.682 1.464C21 4.93 21 7.286 21 12s0 7.071-1.318 8.535S16.242 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15 6H9c-.465 0-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C7 7.304 7 7.536 7 8s0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06C8.304 10 8.536 10 9 10h6c.465 0 .697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C17 8.696 17 8.464 17 8s0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C15.697 6 15.464 6 15 6m-7 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class SolarCalculatorBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalculatorBrokenIcon],svg[solar-calculator-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21 12c0 4.714 0 7.071-1.318 8.535S16.242 22 12 22s-6.364 0-7.682-1.465C3 19.072 3 16.714 3 12s0-7.071 1.318-8.536S7.758 2 12 2s6.364 0 7.682 1.464c.876.974 1.17 2.343 1.268 4.536"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M7 8c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C8.304 6 8.536 6 9 6h6c.465 0 .697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C17 7.304 17 7.536 17 8s0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C15.697 10 15.464 10 15 10H9c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C7 8.696 7 8.464 7 8Z"></svg:path><svg:circle cx="8" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="8" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="17" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarCalculatorBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalculatorLineDuotoneIcon],svg[solar-calculator-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M4.318 20.536C5.636 22 7.758 22 12 22s6.364 0 7.682-1.465C21 19.072 21 16.714 21 12s0-7.071-1.318-8.536S16.242 2 12 2S5.636 2 4.318 3.464C3 4.93 3 7.286 3 12s0 7.071 1.318 8.535Z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M7 8c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C8.304 6 8.536 6 9 6h6c.465 0 .697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C17 7.304 17 7.536 17 8s0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C15.697 10 15.464 10 15 10H9c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C7 8.696 7 8.464 7 8Z" opacity=".5"></svg:path><svg:circle cx="8" cy="13" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="8" cy="17" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="12" cy="13" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="12" cy="17" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="16" cy="13" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="16" cy="17" r="1" fill="currentColor" opacity=".5"></svg:circle></svg:g>`,
})
export class SolarCalculatorLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalculatorLinearIcon],svg[solar-calculator-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M4.318 20.536C5.636 22 7.758 22 12 22s6.364 0 7.682-1.465C21 19.072 21 16.714 21 12s0-7.071-1.318-8.536S16.242 2 12 2S5.636 2 4.318 3.464C3 4.93 3 7.286 3 12s0 7.071 1.318 8.535Z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M7 8c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C8.304 6 8.536 6 9 6h6c.465 0 .697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C17 7.304 17 7.536 17 8s0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C15.697 10 15.464 10 15 10H9c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C7 8.696 7 8.464 7 8Z"></svg:path><svg:circle cx="8" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="8" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="17" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarCalculatorLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalculatorMinimalisticBoldIcon],svg[solar-calculator-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22M8.75 6.5a.75.75 0 1 0-1.5 0v1.25H6a.75.75 0 0 0 0 1.5h1.25v1.25a.75.75 0 0 0 1.5 0V9.25H10a.75.75 0 0 0 0-1.5H8.75zM14 7.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm0 6a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm-6.97.22a.75.75 0 0 0-1.06 1.06l.97.97l-.97.97a.75.75 0 1 0 1.06 1.06l.97-.97l.97.97a.75.75 0 1 0 1.06-1.06L9.06 16l.97-.97a.75.75 0 1 0-1.06-1.06l-.97.97zM14 16.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCalculatorMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalculatorMinimalisticBoldDuotoneIcon],svg[solar-calculator-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8 5.75a.75.75 0 0 1 .75.75v1.25H10a.75.75 0 0 1 0 1.5H8.75v1.25a.75.75 0 0 1-1.5 0V9.25H6a.75.75 0 0 1 0-1.5h1.25V6.5A.75.75 0 0 1 8 5.75m5.25 2.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m-7.28-.53a.75.75 0 0 1 1.06 0l.97.97l.97-.97a.75.75 0 1 1 1.06 1.06l-.97.97l.97.97a.75.75 0 1 1-1.06 1.06L8 17.06l-.97.97a.75.75 0 0 1-1.06-1.06l.97-.97l-.97-.97a.75.75 0 0 1 0-1.06m7.28 3.53a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCalculatorMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalculatorMinimalisticBrokenIcon],svg[solar-calculator-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536M18 8.5h-4m4 6h-4m4 3h-4m-4-9H8m0 0H6m2 0v-2m0 2v2m1.5 4L8 16m0 0l-1.5 1.5M8 16l-1.5-1.5M8 16l1.5 1.5"></svg:path>`,
})
export class SolarCalculatorMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalculatorMinimalisticLineDuotoneIcon],svg[solar-calculator-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535Z"></svg:path><svg:path stroke-linecap="round" d="M18 8.5h-4m4 6h-4m4 3h-4m-4-9H8m0 0H6m2 0v-2m0 2v2m1.5 4L8 16m0 0l-1.5 1.5M8 16l-1.5-1.5M8 16l1.5 1.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCalculatorMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalculatorMinimalisticLinearIcon],svg[solar-calculator-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535Z"></svg:path><svg:path stroke-linecap="round" d="M18 8.5h-4m4 6h-4m4 3h-4m-4-9H8m0 0H6m2 0v-2m0 2v2m1.5 4L8 16m0 0l-1.5 1.5M8 16l-1.5-1.5M8 16l1.5 1.5"></svg:path></svg:g>`,
})
export class SolarCalculatorMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalculatorMinimalisticOutlineIcon],svg[solar-calculator-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176"></svg:path><svg:path d="M8 5.75a.75.75 0 0 1 .75.75v1.25H10a.75.75 0 0 1 0 1.5H8.75v1.25a.75.75 0 0 1-1.5 0V9.25H6a.75.75 0 1 1 0-1.5h1.25V6.5A.75.75 0 0 1 8 5.75m5.25 2.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m-7.28-.53a.75.75 0 0 1 1.06 0l.97.97l.97-.97a.75.75 0 1 1 1.06 1.06l-.97.97l.97.97a.75.75 0 1 1-1.06 1.06L8 17.06l-.97.97a.75.75 0 0 1-1.06-1.06l.97-.97l-.97-.97a.75.75 0 0 1 0-1.06m7.28 3.53a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"></svg:path></svg:g>`,
})
export class SolarCalculatorMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalculatorOutlineIcon],svg[solar-calculator-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.938 1.25h.124c2.069 0 3.706 0 4.987.191c1.323.198 2.373.614 3.19 1.522c.807.896 1.168 2.03 1.34 3.46c.171 1.407.171 3.212.171 5.525v.104c0 2.313 0 4.118-.17 5.525c-.173 1.43-.534 2.564-1.34 3.46c-.818.908-1.867 1.324-3.191 1.522c-1.281.191-2.918.191-4.986.191h-.126c-2.068 0-3.705 0-4.986-.191c-1.324-.198-2.373-.614-3.19-1.522c-.807-.896-1.168-2.03-1.34-3.46c-.171-1.407-.171-3.212-.171-5.525v-.104c0-2.313 0-4.118.17-5.524c.173-1.432.534-2.565 1.34-3.461c.818-.908 1.867-1.324 3.191-1.522c1.281-.191 2.918-.191 4.987-.191M7.173 2.925c-1.127.168-1.797.485-2.298 1.041c-.51.568-.81 1.346-.966 2.638C3.751 7.91 3.75 9.624 3.75 12s.001 4.09.16 5.396c.156 1.292.454 2.07.965 2.638c.501.556 1.171.873 2.298 1.041c1.157.173 2.682.175 4.827.175s3.67-.002 4.827-.175c1.127-.168 1.797-.485 2.297-1.041c.512-.568.81-1.346.967-2.638c.158-1.306.159-3.02.159-5.396s-.001-4.09-.16-5.396c-.156-1.292-.454-2.07-.965-2.638c-.501-.556-1.171-.873-2.298-1.041C15.67 2.752 14.145 2.75 12 2.75s-3.67.002-4.827.175M8.916 5.25h6.168c.38 0 .71 0 .998.077a2.25 2.25 0 0 1 1.591 1.59c.078.29.078.618.077 1v.167c0 .38 0 .71-.077.998a2.25 2.25 0 0 1-1.59 1.591c-.29.078-.618.078-1 .077H8.917c-.38 0-.71 0-.998-.077a2.25 2.25 0 0 1-1.591-1.59c-.078-.29-.077-.618-.077-1v-.167c0-.38 0-.71.077-.998a2.25 2.25 0 0 1 1.59-1.591c.29-.078.618-.077 1-.077M9 6.75c-.513 0-.623.006-.694.026a.75.75 0 0 0-.53.53c-.02.071-.026.18-.026.694c0 .513.006.623.026.694a.75.75 0 0 0 .53.53c.071.02.18.026.694.026h6c.513 0 .623-.006.694-.026a.75.75 0 0 0 .53-.53c.02-.071.026-.18.026-.694c0-.513-.006-.623-.026-.694a.75.75 0 0 0-.53-.53c-.071-.02-.18-.026-.694-.026z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9 13a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SolarCalculatorOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarAddBoldIcon],svg[solar-calendar-add-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12m-6 1.25a.75.75 0 0 1 .75.75v1.25H18a.75.75 0 0 1 0 1.5h-1.25V18a.75.75 0 0 1-1.5 0v-1.25H14a.75.75 0 0 1 0-1.5h1.25V14a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCalendarAddBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarAddBoldDuotoneIcon],svg[solar-calendar-add-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.96 2c.418 0 .756.31.756.692V4.09c.67-.012 1.422-.012 2.268-.012h4.032c.846 0 1.597 0 2.268.012V2.692c0-.382.338-.692.756-.692s.756.31.756.692V4.15c1.45.106 2.403.368 3.103 1.008c.7.641.985 1.513 1.101 2.842v1H2V8c.116-1.329.401-2.2 1.101-2.842c.7-.64 1.652-.902 3.103-1.008V2.692c0-.382.339-.692.756-.692"></svg:path><svg:path fill="currentColor" d="M22 14v-2c0-.839-.013-2.335-.026-3H2.006c-.013.665 0 2.161 0 3v2c0 3.771 0 5.657 1.17 6.828C4.349 22 6.234 22 10.004 22h4c3.77 0 5.654 0 6.826-1.172S22 17.771 22 14" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16 13.25a.75.75 0 0 1 .75.75v1.25H18a.75.75 0 0 1 0 1.5h-1.25V18a.75.75 0 0 1-1.5 0v-1.25H14a.75.75 0 0 1 0-1.5h1.25V14a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCalendarAddBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarAddBrokenIcon],svg[solar-calendar-add-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18 16h-2m0 0h-2m2 0v-2m0 2v2M7 4V2.5M17 4V2.5M21.5 9H10.75M2 9h3.875M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828c-.653.654-1.528.943-2.828 1.07"></svg:path>`,
})
export class SolarCalendarAddBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarAddLineDuotoneIcon],svg[solar-calendar-add-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path><svg:path stroke-linecap="round" d="M18 16h-2m0 0h-2m2 0v-2m0 2v2"></svg:path><svg:path stroke-linecap="round" d="M7 4V2.5M17 4V2.5M2 9h20" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCalendarAddLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarAddLinearIcon],svg[solar-calendar-add-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path><svg:path stroke-linecap="round" d="M18 16h-2m0 0h-2m2 0v-2m0 2v2M7 4V2.5M17 4V2.5M2.5 9h19"></svg:path></svg:g>`,
})
export class SolarCalendarAddLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarAddOutlineIcon],svg[solar-calendar-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 1.75a.75.75 0 0 1 .75.75v.763c.662-.013 1.391-.013 2.194-.013h4.112c.803 0 1.532 0 2.194.013V2.5a.75.75 0 0 1 1.5 0v.827q.39.03.739.076c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87q.074.562.107 1.23a.75.75 0 0 1 .019.46c.027.801.027 1.712.027 2.743v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.031 0-1.942.027-2.744a.75.75 0 0 1 .02-.46q.032-.667.106-1.229c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238q.35-.046.739-.076V2.5A.75.75 0 0 1 7 1.75m-4.237 8c-.013.653-.013 1.396-.013 2.25v2c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2c0-.854 0-1.597-.013-2.25zm18.405-1.5H2.832q.024-.284.058-.54c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009q.034.255.058.539m-5.168 5a.75.75 0 0 1 .75.75v1.25H18a.75.75 0 0 1 0 1.5h-1.25V18a.75.75 0 0 1-1.5 0v-1.25H14a.75.75 0 0 1 0-1.5h1.25V14a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCalendarAddOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarBoldIcon],svg[solar-calendar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14zm15 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarCalendarBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarBoldDuotoneIcon],svg[solar-calendar-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.94 2c.416 0 .753.324.753.724v1.46c.668-.012 1.417-.012 2.26-.012h4.015c.842 0 1.591 0 2.259.013v-1.46c0-.4.337-.725.753-.725s.753.324.753.724V4.25c1.445.111 2.394.384 3.09 1.055c.698.67.982 1.582 1.097 2.972L22 9H2v-.724c.116-1.39.4-2.302 1.097-2.972s1.645-.944 3.09-1.055V2.724c0-.4.337-.724.753-.724"></svg:path><svg:path fill="currentColor" d="M22 14v-2c0-.839-.004-2.335-.017-3H2.01c-.013.665-.01 2.161-.01 3v2c0 3.771 0 5.657 1.172 6.828S6.228 22 10 22h4c3.77 0 5.656 0 6.828-1.172S22 17.772 22 14" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SolarCalendarBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarBrokenIcon],svg[solar-calendar-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828c-.653.654-1.528.943-2.828 1.07M7 4V2.5M17 4V2.5M21.5 9H10.75M2 9h3.875"></svg:path><svg:path fill="currentColor" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarCalendarBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarDateBoldIcon],svg[solar-calendar-date-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0-.839 0-1.585-.013-2.25H2.013C2 10.415 2 11.161 2 12v2c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14zm-8 .25A1.75 1.75 0 0 0 12.25 14v2a1.75 1.75 0 1 0 3.5 0v-2A1.75 1.75 0 0 0 14 12.25m0 1.5a.25.25 0 0 0-.25.25v2a.25.25 0 1 0 .5 0v-2a.25.25 0 0 0-.25-.25m-3.213-1.443a.75.75 0 0 1 .463.693v4a.75.75 0 0 1-1.5 0v-2.19l-.22.22a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 .817-.163" clip-rule="evenodd"></svg:path>`,
})
export class SolarCalendarDateBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarDateBoldDuotoneIcon],svg[solar-calendar-date-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.96 2c.418 0 .756.31.756.692V4.09c.67-.012 1.422-.012 2.268-.012h4.032c.846 0 1.597 0 2.268.012V2.692c0-.382.338-.692.756-.692s.756.31.756.692V4.15c1.45.106 2.403.368 3.103 1.008c.7.641.985 1.513 1.101 2.842v1H2V8c.116-1.329.401-2.2 1.101-2.842c.7-.64 1.652-.902 3.103-1.008V2.692c0-.382.339-.692.756-.692"></svg:path><svg:path fill="currentColor" d="M22 14v-2c0-.839-.013-2.335-.026-3H2.006c-.013.665 0 2.161 0 3v2c0 3.771 0 5.657 1.17 6.828C4.349 22 6.234 22 10.004 22h4c3.77 0 5.654 0 6.826-1.172S22 17.771 22 14" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14 12.25A1.75 1.75 0 0 0 12.25 14v2a1.75 1.75 0 1 0 3.5 0v-2A1.75 1.75 0 0 0 14 12.25m0 1.5a.25.25 0 0 0-.25.25v2a.25.25 0 1 0 .5 0v-2a.25.25 0 0 0-.25-.25" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.25 13a.75.75 0 0 0-1.28-.53l-1.5 1.5a.75.75 0 0 0 1.06 1.06l.22-.22V17a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class SolarCalendarDateBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarDateBrokenIcon],svg[solar-calendar-date-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M7 4V2.5M17 4V2.5"></svg:path><svg:path stroke-linejoin="round" d="m9 14.5l1.5-1.5v4"></svg:path><svg:path d="M13 16v-2a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0Zm8.5-7H10.75M2 9h3.875"></svg:path><svg:path d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828c-.653.654-1.528.943-2.828 1.07"></svg:path></svg:g>`,
})
export class SolarCalendarDateBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarDateLineDuotoneIcon],svg[solar-calendar-date-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path><svg:path stroke-linecap="round" d="M7 4V2.5M17 4V2.5M2 9h20" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9 14.5l1.5-1.5v4"></svg:path><svg:path stroke-linecap="round" d="M13 16v-2a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0Z"></svg:path></svg:g>`,
})
export class SolarCalendarDateLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarDateLinearIcon],svg[solar-calendar-date-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path><svg:path stroke-linecap="round" d="M7 4V2.5M17 4V2.5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9 14.5l1.5-1.5v4"></svg:path><svg:path stroke-linecap="round" d="M13 16v-2a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0ZM2.5 9h19"></svg:path></svg:g>`,
})
export class SolarCalendarDateLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarDateOutlineIcon],svg[solar-calendar-date-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 1.75a.75.75 0 0 1 .75.75v.763c.662-.013 1.391-.013 2.194-.013h4.112c.803 0 1.532 0 2.194.013V2.5a.75.75 0 0 1 1.5 0v.827q.39.03.739.076c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87q.074.562.107 1.23a.75.75 0 0 1 .019.46c.027.801.027 1.712.027 2.743v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.031 0-1.942.027-2.744a.75.75 0 0 1 .02-.46q.032-.667.106-1.229c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238q.35-.046.739-.076V2.5A.75.75 0 0 1 7 1.75m-4.237 8c-.013.653-.013 1.396-.013 2.25v2c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2c0-.854 0-1.597-.013-2.25zm18.405-1.5H2.832q.024-.284.058-.54c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009q.034.255.058.539m-10.381 4.057a.75.75 0 0 1 .463.693v4a.75.75 0 0 1-1.5 0v-2.19l-.22.22a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 .817-.163M14 13.75a.25.25 0 0 0-.25.25v2a.25.25 0 1 0 .5 0v-2a.25.25 0 0 0-.25-.25m-1.75.25a1.75 1.75 0 1 1 3.5 0v2a1.75 1.75 0 1 1-3.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCalendarDateOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarLineDuotoneIcon],svg[solar-calendar-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 4V2.5M17 4V2.5M2.5 9h19" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarCalendarLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarLinearIcon],svg[solar-calendar-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 4V2.5M17 4V2.5M2.5 9h19"></svg:path><svg:path fill="currentColor" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarCalendarLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarMarkBoldIcon],svg[solar-calendar-mark-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12m-5.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></svg:path>`,
})
export class SolarCalendarMarkBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarMarkBoldDuotoneIcon],svg[solar-calendar-mark-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.96 2c.418 0 .756.31.756.692V4.09c.67-.012 1.422-.012 2.268-.012h4.032c.846 0 1.597 0 2.268.012V2.692c0-.382.338-.692.756-.692s.756.31.756.692V4.15c1.45.106 2.403.368 3.103 1.008c.7.641.985 1.513 1.101 2.842v1H2V8c.116-1.329.401-2.2 1.101-2.842c.7-.64 1.652-.902 3.103-1.008V2.692c0-.382.339-.692.756-.692"></svg:path><svg:path fill="currentColor" d="M22 14v-2c0-.839-.013-2.335-.026-3H2.006c-.013.665 0 2.161 0 3v2c0 3.771 0 5.657 1.17 6.828C4.349 22 6.234 22 10.004 22h4c3.77 0 5.654 0 6.826-1.172S22 17.771 22 14" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18 16.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class SolarCalendarMarkBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarMarkBrokenIcon],svg[solar-calendar-mark-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M7 4V2.5M17 4V2.5"></svg:path><svg:circle cx="16.5" cy="16.5" r="1.5"></svg:circle><svg:path stroke-linecap="round" d="M21.5 9H10.75M2 9h3.875M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828c-.653.654-1.528.943-2.828 1.07"></svg:path></svg:g>`,
})
export class SolarCalendarMarkBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarMarkLineDuotoneIcon],svg[solar-calendar-mark-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path><svg:path stroke-linecap="round" d="M7 4V2.5M17 4V2.5M2 9h20" opacity=".5"></svg:path><svg:circle cx="16.5" cy="16.5" r="1.5"></svg:circle></svg:g>`,
})
export class SolarCalendarMarkLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarMarkLinearIcon],svg[solar-calendar-mark-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path><svg:path stroke-linecap="round" d="M7 4V2.5M17 4V2.5"></svg:path><svg:circle cx="16.5" cy="16.5" r="1.5"></svg:circle><svg:path stroke-linecap="round" d="M2.5 9h19"></svg:path></svg:g>`,
})
export class SolarCalendarMarkLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarMarkOutlineIcon],svg[solar-calendar-mark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 1.75a.75.75 0 0 1 .75.75v.763c.662-.013 1.391-.013 2.194-.013h4.112c.803 0 1.532 0 2.194.013V2.5a.75.75 0 0 1 1.5 0v.827q.39.03.739.076c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87q.074.562.107 1.23a.75.75 0 0 1 .019.46c.027.801.027 1.712.027 2.743v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.031 0-1.942.027-2.744a.75.75 0 0 1 .02-.46q.032-.667.106-1.229c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238q.35-.046.739-.076V2.5A.75.75 0 0 1 7 1.75m-4.237 8c-.013.653-.013 1.396-.013 2.25v2c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2c0-.854 0-1.597-.013-2.25zm18.405-1.5H2.832q.024-.284.058-.54c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009q.034.255.058.539m-4.668 7.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCalendarMarkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarMinimalisticBoldIcon],svg[solar-calendar-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14v-2c0-.839 0-1.585-.013-2.25H2.013C2 10.415 2 11.161 2 12v2c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013z"></svg:path>`,
})
export class SolarCalendarMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarMinimalisticBoldDuotoneIcon],svg[solar-calendar-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.94 2c.416 0 .753.324.753.724v1.46c.668-.012 1.417-.012 2.26-.012h4.015c.842 0 1.591 0 2.259.013v-1.46c0-.4.337-.725.753-.725s.753.324.753.724V4.25c1.445.111 2.394.384 3.09 1.055c.698.67.982 1.582 1.097 2.972L22 9H2v-.724c.116-1.39.4-2.302 1.097-2.972s1.645-.944 3.09-1.055V2.724c0-.4.337-.724.753-.724"></svg:path><svg:path fill="currentColor" d="M22 14v-2c0-.839-.004-2.335-.017-3H2.01c-.013.665-.01 2.161-.01 3v2c0 3.771 0 5.657 1.172 6.828S6.228 22 10 22h4c3.77 0 5.656 0 6.828-1.172S22 17.772 22 14" opacity=".5"></svg:path>`,
})
export class SolarCalendarMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarMinimalisticBrokenIcon],svg[solar-calendar-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828c-.653.654-1.528.943-2.828 1.07M7 4V2.5M17 4V2.5M21.5 9H10.75M2 9h3.875"></svg:path>`,
})
export class SolarCalendarMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarMinimalisticLineDuotoneIcon],svg[solar-calendar-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path><svg:path stroke-linecap="round" d="M7 4V2.5M17 4V2.5M2 9h20" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCalendarMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarMinimalisticLinearIcon],svg[solar-calendar-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path><svg:path stroke-linecap="round" d="M7 4V2.5M17 4V2.5M2.5 9h19"></svg:path></svg:g>`,
})
export class SolarCalendarMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarMinimalisticOutlineIcon],svg[solar-calendar-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 1.75a.75.75 0 0 1 .75.75v.763c.662-.013 1.391-.013 2.194-.013h4.112c.803 0 1.532 0 2.194.013V2.5a.75.75 0 0 1 1.5 0v.827q.39.03.739.076c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87q.074.562.107 1.23a.75.75 0 0 1 .019.46c.027.801.027 1.712.027 2.743v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.031 0-1.942.027-2.744a.75.75 0 0 1 .02-.46q.032-.667.106-1.229c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238q.35-.046.739-.076V2.5A.75.75 0 0 1 7 1.75m-4.237 8c-.013.653-.013 1.396-.013 2.25v2c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2c0-.854 0-1.597-.013-2.25zm18.405-1.5H2.832q.024-.284.058-.54c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009q.034.255.058.539" clip-rule="evenodd"></svg:path>`,
})
export class SolarCalendarMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarOutlineIcon],svg[solar-calendar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7 1.75a.75.75 0 0 1 .75.75v.763c.662-.013 1.391-.013 2.193-.013h4.113c.803 0 1.532 0 2.194.013V2.5a.75.75 0 0 1 1.5 0v.827q.39.03.739.076c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.945c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238q.35-.046.739-.076V2.5A.75.75 0 0 1 7 1.75M5.71 4.89c-1.005.135-1.585.389-2.008.812S3.025 6.705 2.89 7.71q-.034.255-.058.539h18.336q-.024-.284-.058-.54c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14M2.75 12c0-.854 0-1.597.013-2.25h18.474c.013.653.013 1.396.013 2.25v2c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008s-1.003.677-2.009.812c-1.027.138-2.382.14-4.289.14h-4c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.138-1.027-.14-2.382-.14-4.289z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCalendarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarSearchBoldIcon],svg[solar-calendar-search-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 15.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M14.25 18a3.75 3.75 0 1 1 6.879 2.068l1.401 1.402a.75.75 0 1 1-1.06 1.06l-1.402-1.401A3.75 3.75 0 0 1 14.25 18" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013zM22 12v2.6a5.25 5.25 0 1 0-7.4 7.4H10c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12"></svg:path>`,
})
export class SolarCalendarSearchBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarSearchBoldDuotoneIcon],svg[solar-calendar-search-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.96 2c.418 0 .756.31.756.692V4.09c.67-.012 1.422-.012 2.268-.012h4.032c.846 0 1.597 0 2.268.012V2.692c0-.382.338-.692.756-.692s.756.31.756.692V4.15c1.45.106 2.403.368 3.103 1.008c.7.641.985 1.513 1.101 2.842v1H2V8c.116-1.329.401-2.2 1.101-2.842c.7-.64 1.652-.902 3.103-1.008V2.692c0-.382.339-.692.756-.692"></svg:path><svg:path fill="currentColor" d="M22 14v-2c0-.839-.013-2.335-.026-3H2.006c-.013.665 0 2.161 0 3v2c0 3.771 0 5.657 1.17 6.828C4.349 22 6.234 22 10.004 22h4c3.77 0 5.654 0 6.826-1.172S22 17.771 22 14" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.75 16.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M15 18.75a3.75 3.75 0 1 1 6.879 2.068l1.401 1.402a.75.75 0 1 1-1.06 1.06l-1.402-1.401A3.75 3.75 0 0 1 15 18.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCalendarSearchBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarSearchBrokenIcon],svg[solar-calendar-search-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 14v-2c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4m0 18h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4M7 4V2.5M17 4V2.5"></svg:path><svg:circle cx="18" cy="18" r="3"></svg:circle><svg:path stroke-linecap="round" d="M20.5 20.5L22 22m-.5-13H10.75M2 9h3.875"></svg:path></svg:g>`,
})
export class SolarCalendarSearchBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarSearchLineDuotoneIcon],svg[solar-calendar-search-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 14v-2c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12v2c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4"></svg:path><svg:path stroke-linecap="round" d="M7 4V2.5M17 4V2.5M2 9h20" opacity=".5"></svg:path><svg:circle cx="18" cy="18" r="3"></svg:circle><svg:path stroke-linecap="round" d="M20.5 20.5L22 22"></svg:path></svg:g>`,
})
export class SolarCalendarSearchLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarSearchLinearIcon],svg[solar-calendar-search-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 14v-2c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12v2c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4M7 4V2.5M17 4V2.5"></svg:path><svg:circle cx="18" cy="18" r="3"></svg:circle><svg:path stroke-linecap="round" d="M20.5 20.5L22 22M2.5 9h19"></svg:path></svg:g>`,
})
export class SolarCalendarSearchLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarSearchOutlineIcon],svg[solar-calendar-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 1.75a.75.75 0 0 1 .75.75v.763c.662-.013 1.391-.013 2.194-.013h4.112c.803 0 1.532 0 2.194.013V2.5a.75.75 0 0 1 1.5 0v.827q.39.03.739.076c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87q.074.562.107 1.23a.75.75 0 0 1 .019.46c.027.801.027 1.712.027 2.743V14a.75.75 0 0 1-1.5 0v-2c0-.854 0-1.597-.013-2.25H2.763c-.013.653-.013 1.396-.013 2.25v2c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4a.75.75 0 0 1 0 1.5H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.031 0-1.942.027-2.744a.75.75 0 0 1 .02-.46q.032-.667.106-1.229c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238q.35-.046.739-.076V2.5A.75.75 0 0 1 7 1.75m-4.168 6.5h18.336q-.024-.284-.058-.54c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 6.705 2.89 7.71q-.034.255-.058.539M18 15.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M14.25 18a3.75 3.75 0 1 1 6.879 2.068l1.401 1.402a.75.75 0 1 1-1.06 1.06l-1.402-1.401A3.75 3.75 0 0 1 14.25 18" clip-rule="evenodd"></svg:path>`,
})
export class SolarCalendarSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallCancelBoldIcon],svg[solar-call-cancel-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m20 4l-4 4m0-4l4 4"></svg:path><svg:path fill="currentColor" d="m15.556 14.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336"></svg:path></svg:g>`,
})
export class SolarCallCancelBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallCancelBoldDuotoneIcon],svg[solar-call-cancel-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m20 4l-4 4m0-4l4 4"></svg:path><svg:path fill="currentColor" d="m15.556 14.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCallCancelBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallCancelBrokenIcon],svg[solar-call-cancel-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m20 4l-4 4m0-4l4 4"></svg:path><svg:path fill="currentColor" d="m15.1 15.027l.545.517zm.456-.48l-.544-.516zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.064-9.55a.75.75 0 1 0-1.498.081zm5.439 1.88l.544.517zm.287-.302l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zm-3.656-.818a.75.75 0 0 0 1.087 1.033zm6.345 9.964l.544-.517zm-.399 6.756a.75.75 0 1 0 .798-1.27zm4.449.246a.75.75 0 0 0-.307 1.469zm.532-4.514l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zM8.359 15.959c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zM9.19 8.805a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02zm1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .422-.25l.035-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.006-.005l.047-.042q.014-.008-.005.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zm9.471 16.26c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47zm-4.638 3.478c-.983-.618-2.03-1.454-3.103-2.583l-1.087 1.033c1.154 1.215 2.297 2.132 3.392 2.82zm6.14 1.675a8.3 8.3 0 0 1-2.489-.159l-.307 1.469a9.8 9.8 0 0 0 2.944.182z"></svg:path></svg:g>`,
})
export class SolarCallCancelBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallCancelLineDuotoneIcon],svg[solar-call-cancel-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m20 4l-4 4m0-4l4 4"></svg:path><svg:path fill="currentColor" d="m15.1 15.027l-.543-.516zm.456-.48l.544.517zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.813-9.51l-.749.041zm6.475 1.538l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zM5.26 3.609l.544.516zM3.691 5.26l-.543-.516zm7.372 7.795l.544-.517zm4.582 2.488l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zm-5.53-2.168L3.149 4.745l1.088 1.033l1.57-1.653zm4.474 5.713a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02s-.002 0-.545-.516m1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .421-.25l.036-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.005-.005l.01-.01l.037-.032q.015-.008-.004.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zM3.752 6.926c-.022-.4.152-.8.484-1.148L3.148 4.745c-.536.564-.943 1.347-.894 2.261zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCallCancelLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallCancelLinearIcon],svg[solar-call-cancel-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m20 4l-4 4m0-4l4 4"></svg:path><svg:path fill="currentColor" d="m15.1 15.027l-.543-.516zm.456-.48l.544.517zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.813-9.51l-.749.041zm6.475 1.538l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zM5.26 3.609l.544.516zM3.691 5.26l-.543-.516zm7.372 7.795l.544-.517zm4.582 2.488l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zm-5.53-2.168L3.149 4.745l1.088 1.033l1.57-1.653zm4.474 5.713a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02s-.002 0-.545-.516m1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .421-.25l.036-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.005-.005l.01-.01l.037-.032q.015-.008-.004.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zM3.752 6.926c-.022-.4.152-.8.484-1.148L3.148 4.745c-.536.564-.943 1.347-.894 2.261zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47z"></svg:path></svg:g>`,
})
export class SolarCallCancelLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallCancelOutlineIcon],svg[solar-call-cancel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.986 3.476c-1.014-1.433-3.042-1.675-4.268-.384l-1.57 1.652c-.536.565-.943 1.348-.894 2.262c.1 1.85.884 5.634 5.018 9.985c4.429 4.664 8.654 4.898 10.478 4.718c.747-.073 1.352-.472 1.795-.939l1.42-1.495c1.305-1.374.925-3.673-.707-4.613l-1.911-1.1c-1.099-.632-2.46-.451-3.335.469l-.408.43a.6.6 0 0 1-.294.007c-.402-.066-1.27-.421-2.703-1.929c-1.428-1.503-1.78-2.429-1.846-2.884c-.032-.22 0-.336.013-.372l.003-.006l.244-.258c.968-1.018 1.036-2.612.226-3.76zm-3.18.649c.522-.55 1.443-.507 1.955.217l1.26 1.784c.423.597.358 1.391-.087 1.86l-.287.302l.532.505a26 26 0 0 0-.533-.503l-.002.001l-.003.003l-.006.007l-.013.015a1 1 0 0 0-.104.14c-.052.081-.109.19-.157.324c-.098.275-.15.638-.084 1.092c.13.893.715 2.092 2.242 3.7c1.523 1.604 2.673 2.234 3.55 2.376c.451.073.816.015 1.092-.094a1.5 1.5 0 0 0 .422-.251l.035-.033l.014-.014l.007-.006l.003-.004l.001-.001s.002-.002-.526-.502l.528.5l.455-.479c.385-.406.986-.497 1.499-.202l1.91 1.1c.821.472.982 1.634.369 2.28l-1.42 1.495c-.28.294-.572.452-.855.48c-1.435.141-5.18.02-9.244-4.259c-3.876-4.08-4.526-7.523-4.607-9.032c-.022-.4.152-.8.484-1.149z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.53 3.47a.75.75 0 0 0-1.06 1.06L16.94 6l-1.47 1.47a.75.75 0 1 0 1.06 1.06L18 7.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L19.06 6l1.47-1.47a.75.75 0 0 0-1.06-1.06L18 4.94z"></svg:path>`,
})
export class SolarCallCancelOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallCancelRoundedBoldIcon],svg[solar-call-cancel-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.47 3.47a.75.75 0 0 1 1.06 0L18 4.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L19.06 6l1.47 1.47a.75.75 0 0 1-1.06 1.06L18 7.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L16.94 6l-1.47-1.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38"></svg:path>`,
})
export class SolarCallCancelRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallCancelRoundedBoldDuotoneIcon],svg[solar-call-cancel-rounded-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.47 3.47a.75.75 0 0 1 1.06 0L18 4.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L19.06 6l1.47 1.47a.75.75 0 0 1-1.06 1.06L18 7.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L16.94 6l-1.47-1.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38" opacity=".5"></svg:path>`,
})
export class SolarCallCancelRoundedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallCancelRoundedBrokenIcon],svg[solar-call-cancel-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m20 4l-4 4m0-4l4 4M4.007 7.933c-.073 1.908.41 5.149 3.66 8.4a14 14 0 0 0 2.333 1.9M5.538 4.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53A9.8 9.8 0 0 1 13 19.611"></svg:path>`,
})
export class SolarCallCancelRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallCancelRoundedLineDuotoneIcon],svg[solar-call-cancel-rounded-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m20 4l-4 4m0-4l4 4"></svg:path><svg:path d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCallCancelRoundedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallCancelRoundedLinearIcon],svg[solar-call-cancel-rounded-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m20 4l-4 4m0-4l4 4m-9.962-2.684l.649 1.163c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38Z"></svg:path>`,
})
export class SolarCallCancelRoundedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallCancelRoundedOutlineIcon],svg[solar-call-cancel-rounded-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.53 3.47a.75.75 0 0 0-1.06 1.06L16.94 6l-1.47 1.47a.75.75 0 0 0 1.06 1.06L18 7.06l1.47 1.47a.75.75 0 0 0 1.06-1.06L19.06 6l1.47-1.47a.75.75 0 1 0-1.06-1.06L18 4.94z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.693 4.95c-1.17-2.095-4.005-2.223-5.686-.543c-.898.899-1.697 2.093-1.75 3.498c-.079 2.08.459 5.536 3.88 8.958c3.422 3.421 6.877 3.959 8.958 3.88c1.405-.053 2.6-.852 3.498-1.75c1.68-1.68 1.552-4.516-.544-5.685l-1.163-.65c-1.368-.763-3.095-.438-4.227.68a.63.63 0 0 1-.337.104c-.256.012-.85-.079-1.767-.997c-.919-.918-1.01-1.511-.997-1.767a.63.63 0 0 1 .104-.337c1.118-1.131 1.443-2.859.68-4.227zm-4.625.518c1.106-1.106 2.716-.86 3.315.214l.649 1.163c.403.723.266 1.74-.448 2.452c-.07.07-.486.516-.524 1.307c-.04.81.324 1.792 1.434 2.902s2.09 1.474 2.901 1.434c.791-.038 1.237-.454 1.307-.524c.714-.713 1.73-.851 2.453-.448l1.163.65c1.074.598 1.32 2.208.214 3.314c-.775.775-1.63 1.28-2.494 1.312c-1.735.066-4.76-.363-7.84-3.442S4.69 9.697 4.756 7.962c.033-.863.537-1.72 1.312-2.494" clip-rule="evenodd"></svg:path>`,
})
export class SolarCallCancelRoundedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallChatBoldIcon],svg[solar-call-chat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.556 15.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L7.374 4.91C6.61 3.83 5.135 3.688 4.26 4.609L2.691 6.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336"></svg:path><svg:path fill="currentColor" d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12"></svg:path>`,
})
export class SolarCallChatBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallChatBoldDuotoneIcon],svg[solar-call-chat-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.556 15.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L7.374 4.91C6.61 3.83 5.135 3.688 4.26 4.609L2.691 6.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12"></svg:path>`,
})
export class SolarCallChatBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallChatBrokenIcon],svg[solar-call-chat-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12Z"></svg:path><svg:path fill="currentColor" d="m14.1 16.027l.545.517zm.456-.48l-.544-.516zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.064-9.55a.75.75 0 1 0-1.498.081zm5.439 1.88l.544.517zm.287-.302l.543.517zm.156-2.81l.613-.433zM7.374 4.91l-.613.433zm-3.656-.818a.75.75 0 0 0 1.087 1.033zm6.345 9.964l.544-.517zm-.399 6.756a.75.75 0 1 0 .798-1.27zm4.449.246a.75.75 0 0 0-.307 1.469zm.532-4.514l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zM7.359 16.959c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L7.986 4.477l-1.225.866l1.26 1.783zM8.19 9.805a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019a.3.3 0 0 1-.037.047l-.005.005l-.003.003l-.001.001s-.001.002-.545-.515m1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .422-.25l.035-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.006-.005l.047-.042q.014-.008-.005.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM7.986 4.477C6.972 3.043 4.944 2.8 3.718 4.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zm9.471 16.26c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM9.021 10.02c.969-1.02 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47zm-4.638 3.478c-.984-.618-2.03-1.454-3.103-2.583l-1.087 1.033c1.154 1.215 2.297 2.132 3.392 2.82zm6.14 1.675a8.3 8.3 0 0 1-2.489-.159l-.307 1.469a9.8 9.8 0 0 0 2.944.182z"></svg:path></svg:g>`,
})
export class SolarCallChatBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallChatLineDuotoneIcon],svg[solar-call-chat-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12Z"></svg:path><svg:path fill="currentColor" d="m14.1 16.027l-.543-.516zm.456-.48l.544.517zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.813-9.51l-.749.041zm6.475 1.538l.543.517zm.156-2.81l.613-.433zM7.374 4.91l-.613.433zM4.26 4.609l.544.516zM2.691 6.26l-.543-.516zm7.372 7.795l.544-.517zm4.582 2.488l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L7.986 4.477l-1.225.866l1.26 1.783zm-5.53-2.168L2.149 5.745l1.088 1.033l1.57-1.653zm4.474 5.713a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019a.3.3 0 0 1-.037.047l-.005.005l-.003.003l-.001.001s-.002.002-.545-.515m1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .421-.25l.036-.034l.014-.014l.01-.01h.001c0-.002.002-.002-.542-.519c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.005-.005l.01-.01l.037-.032q.015-.008-.004.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM7.986 4.477C6.972 3.043 4.944 2.8 3.718 4.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zM2.752 7.926c-.022-.4.152-.8.484-1.148L2.148 5.745c-.536.564-.943 1.347-.894 2.261zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM9.021 10.02c.969-1.02 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCallChatLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallChatLinearIcon],svg[solar-call-chat-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12Z"></svg:path><svg:path fill="currentColor" d="m14.1 16.027l-.543-.516zm.456-.48l.544.517zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.813-9.51l-.749.041zm6.475 1.538l.543.517zm.156-2.81l.613-.433zM7.374 4.91l-.613.433zM4.26 4.609l.544.516zM2.691 6.26l-.543-.516zm7.372 7.795l.544-.517zm4.582 2.488l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L7.986 4.477l-1.225.866l1.26 1.783zm-5.53-2.168L2.149 5.745l1.088 1.033l1.57-1.653zm4.474 5.713a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019a.3.3 0 0 1-.037.047l-.005.005l-.003.003l-.001.001s-.002.002-.545-.515m1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .421-.25l.036-.034l.014-.014l.01-.01h.001c0-.002.002-.002-.542-.519c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.005-.005l.01-.01l.037-.032q.015-.008-.004.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM7.986 4.477C6.972 3.043 4.944 2.8 3.718 4.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zM2.752 7.926c-.022-.4.152-.8.484-1.148L2.148 5.745c-.536.564-.943 1.347-.894 2.261zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM9.021 10.02c.969-1.02 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47z"></svg:path></svg:g>`,
})
export class SolarCallChatLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallChatOutlineIcon],svg[solar-call-chat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 2.75a4.25 4.25 0 0 0-3.807 6.142c.16.32.225.71.12 1.102l-.253.946l.946-.253a1.57 1.57 0 0 1 1.102.12A4.25 4.25 0 1 0 17 2.75M11.25 7a5.75 5.75 0 1 1 3.19 5.15a.1.1 0 0 0-.04-.013h-.007l-1.112.297a1.4 1.4 0 0 1-1.715-1.714l.298-1.113V9.6a.1.1 0 0 0-.014-.04a5.7 5.7 0 0 1-.6-2.56M3.718 4.092c1.226-1.29 3.254-1.049 4.268.385l1.26 1.783c.811 1.147.743 2.74-.225 3.76l-.245.257l-.002.006c-.013.037-.045.152-.013.372c.067.456.418 1.381 1.846 2.884c1.432 1.508 2.3 1.864 2.703 1.929a.6.6 0 0 0 .294-.007l.408-.43c.874-.92 2.236-1.101 3.335-.469l1.91 1.1c1.633.94 2.013 3.239.708 4.613l-1.42 1.495c-.443.467-1.048.866-1.795.94c-1.824.18-6.049-.055-10.478-4.718c-4.134-4.352-4.919-8.137-5.018-9.986c-.049-.914.358-1.697.894-2.261l.544.516l-.544-.516zm3.043 1.25c-.512-.724-1.433-.767-1.956-.217l-1.57 1.653c-.33.349-.505.748-.483 1.148c.08 1.51.731 4.952 4.607 9.033c4.064 4.279 7.809 4.4 9.244 4.258c.283-.028.575-.186.854-.48l1.42-1.495c.614-.645.453-1.808-.368-2.28l-1.91-1.1c-.513-.295-1.114-.204-1.499.202l-.455.48l-.544-.517c.543.517.543.517.542.518l-.001.002l-.003.003l-.007.006l-.014.014a1 1 0 0 1-.136.112c-.08.057-.186.12-.321.172c-.276.11-.64.168-1.091.095c-.878-.143-2.028-.773-3.55-2.377c-1.528-1.608-2.113-2.807-2.243-3.7a2.25 2.25 0 0 1 .084-1.092a1.6 1.6 0 0 1 .23-.427l.03-.037l.014-.015l.006-.006l.003-.003l.002-.002s.001-.001.545.515l-.544-.516l.287-.302c.445-.47.51-1.264.088-1.86z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCallChatOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallChatRoundedBoldIcon],svg[solar-call-chat-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12"></svg:path><svg:path fill="currentColor" d="m8.038 7.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38"></svg:path>`,
})
export class SolarCallChatRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallChatRoundedBoldDuotoneIcon],svg[solar-call-chat-rounded-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12"></svg:path><svg:path fill="currentColor" d="m8.038 7.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38" opacity=".5"></svg:path>`,
})
export class SolarCallChatRoundedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallChatRoundedBrokenIcon],svg[solar-call-chat-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12Z"></svg:path><svg:path stroke-linecap="round" d="M2.007 9.933c-.073 1.908.41 5.149 3.66 8.4A14 14 0 0 0 8 20.232M3.538 6.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53A9.8 9.8 0 0 1 11 21.611"></svg:path></svg:g>`,
})
export class SolarCallChatRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallChatRoundedLineDuotoneIcon],svg[solar-call-chat-rounded-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12Z"></svg:path><svg:path stroke-linecap="round" d="m8.038 7.316l.649 1.163c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCallChatRoundedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallChatRoundedLinearIcon],svg[solar-call-chat-rounded-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12Z"></svg:path><svg:path stroke-linecap="round" d="m8.038 7.316l.649 1.163c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38Z"></svg:path></svg:g>`,
})
export class SolarCallChatRoundedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallChatRoundedOutlineIcon],svg[solar-call-chat-rounded-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M22.75 7a5.75 5.75 0 1 0-10.9 2.56a.1.1 0 0 1 .013.04v.007l-.297 1.113a1.4 1.4 0 0 0 1.714 1.714l1.113-.298q-.002 0 0 0h.007a.1.1 0 0 1 .04.014A5.75 5.75 0 0 0 22.75 7m-8.356 5.136h-.002zM17 2.75a4.25 4.25 0 1 1-1.892 8.057a1.57 1.57 0 0 0-1.102-.12l-.946.253l.253-.946a1.57 1.57 0 0 0-.12-1.102A4.25 4.25 0 0 1 17 2.75"></svg:path><svg:path d="M3.007 6.407c1.68-1.68 4.516-1.552 5.685.544l.65 1.163c.763 1.368.438 3.095-.68 4.227a.63.63 0 0 0-.104.337c-.013.256.078.849.997 1.767c.918.918 1.51 1.01 1.767.997a.63.63 0 0 0 .337-.104c1.131-1.118 2.859-1.443 4.227-.68l1.163.65c2.096 1.17 2.224 4.005.544 5.685c-.899.898-2.094 1.697-3.498 1.75c-2.08.079-5.536-.459-8.958-3.88c-3.421-3.422-3.959-6.877-3.88-8.958c.053-1.405.852-2.6 1.75-3.498m4.376 1.275c-.6-1.074-2.21-1.32-3.315-.214c-.775.775-1.28 1.63-1.312 2.493c-.066 1.736.363 4.762 3.442 7.841s6.105 3.508 7.84 3.442c.863-.033 1.72-.537 2.494-1.312c1.106-1.106.86-2.716-.214-3.315l-1.163-.649c-.723-.403-1.74-.266-2.452.448c-.07.07-.517.486-1.308.524c-.81.04-1.791-.324-2.9-1.434c-1.111-1.11-1.475-2.091-1.435-2.902c.038-.791.455-1.237.524-1.306c.714-.714.851-1.73.448-2.453z"></svg:path></svg:g>`,
})
export class SolarCallChatRoundedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallDroppedBoldIcon],svg[solar-call-dropped-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 4v1c0 1.886 0 2.828.586 3.414S17.114 9 19 9h1.5m0 0L18 7m2.5 2L18 11"></svg:path><svg:path fill="currentColor" d="m15.556 14.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336"></svg:path></svg:g>`,
})
export class SolarCallDroppedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallDroppedBoldDuotoneIcon],svg[solar-call-dropped-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 4v1c0 1.886 0 2.828.586 3.414S17.114 9 19 9h1.5m0 0L18 7m2.5 2L18 11"></svg:path><svg:path fill="currentColor" d="m15.556 14.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCallDroppedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallDroppedBrokenIcon],svg[solar-call-dropped-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 4v1c0 1.886 0 2.828.586 3.414S17.115 9 19 9h1.5m0 0L18 7m2.5 2L18 11"></svg:path><svg:path fill="currentColor" d="m15.1 15.027l.545.517zm.456-.48l-.544-.516zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.064-9.55a.75.75 0 1 0-1.498.081zm5.439 1.88l.544.517zm.287-.302l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zm-3.656-.818a.75.75 0 0 0 1.087 1.033zm6.345 9.964l.544-.517zm-.399 6.756a.75.75 0 1 0 .798-1.27zm4.449.246a.75.75 0 0 0-.307 1.469zm.532-4.514l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zM8.359 15.959c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zM9.19 8.805a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02zm1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .422-.25l.035-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.006-.005l.047-.042q.014-.008-.005.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zm9.471 16.26c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47zm-4.638 3.478c-.983-.618-2.03-1.454-3.103-2.583l-1.087 1.033c1.154 1.215 2.297 2.132 3.392 2.82zm6.14 1.675a8.3 8.3 0 0 1-2.489-.159l-.307 1.469a9.8 9.8 0 0 0 2.944.182z"></svg:path></svg:g>`,
})
export class SolarCallDroppedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallDroppedLineDuotoneIcon],svg[solar-call-dropped-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 4v1c0 1.886 0 2.828.586 3.414S17.115 9 19 9h1.5m0 0L18 7m2.5 2L18 11"></svg:path><svg:path fill="currentColor" d="m15.1 15.027l-.543-.516zm.456-.48l.544.517zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.813-9.51l-.749.041zm6.475 1.538l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zM5.26 3.609l.544.516zM3.691 5.26l-.543-.516zm7.372 7.795l.544-.517zm4.582 2.488l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zm-5.53-2.168L3.149 4.745l1.088 1.033l1.57-1.653zm4.474 5.713a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02s-.002 0-.545-.516m1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .421-.25l.036-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.005-.005l.01-.01l.037-.032q.015-.008-.004.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zM3.752 6.926c-.022-.4.152-.8.484-1.148L3.148 4.745c-.536.564-.943 1.347-.894 2.261zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCallDroppedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallDroppedLinearIcon],svg[solar-call-dropped-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 4v1c0 1.886 0 2.828.586 3.414S17.114 9 19 9h1.5m0 0L18 7m2.5 2L18 11"></svg:path><svg:path fill="currentColor" d="m15.1 15.027l-.543-.516zm.456-.48l.544.517zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.813-9.51l-.749.041zm6.475 1.538l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zM5.26 3.609l.544.516zM3.691 5.26l-.543-.516zm7.372 7.795l.544-.517zm4.582 2.488l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zm-5.53-2.168L3.149 4.745l1.088 1.033l1.57-1.653zm4.474 5.713a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02s-.002 0-.545-.516m1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .421-.25l.036-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.005-.005l.01-.01l.037-.032q.015-.008-.004.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zM3.752 6.926c-.022-.4.152-.8.484-1.148L3.148 4.745c-.536.564-.943 1.347-.894 2.261zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47z"></svg:path></svg:g>`,
})
export class SolarCallDroppedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallDroppedOutlineIcon],svg[solar-call-dropped-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.986 3.476c-1.014-1.433-3.042-1.675-4.268-.384l-1.57 1.652c-.536.565-.943 1.348-.894 2.262c.1 1.85.884 5.634 5.018 9.985c4.429 4.664 8.654 4.898 10.478 4.718c.747-.073 1.352-.472 1.795-.939l1.42-1.495c1.305-1.374.925-3.673-.707-4.613l-1.911-1.1c-1.099-.632-2.46-.451-3.335.469l-.408.43a.6.6 0 0 1-.294.007c-.402-.066-1.27-.421-2.703-1.929c-1.428-1.503-1.78-2.429-1.846-2.884c-.032-.22 0-.336.013-.372l.003-.006l.244-.258c.968-1.018 1.036-2.612.226-3.76zm-3.18.649c.522-.55 1.443-.507 1.955.217l1.26 1.784c.423.597.358 1.391-.087 1.86l-.287.302l.532.505a26 26 0 0 0-.533-.503l-.002.001l-.003.003l-.006.007l-.013.015a1 1 0 0 0-.104.14c-.052.081-.109.19-.157.324c-.098.275-.15.638-.084 1.092c.13.893.715 2.092 2.242 3.7c1.523 1.604 2.673 2.234 3.55 2.376c.451.073.816.015 1.092-.094a1.5 1.5 0 0 0 .422-.251l.035-.033l.014-.014l.007-.006l.003-.004l.001-.001s.002-.002-.526-.502l.528.5l.455-.479c.385-.406.986-.497 1.499-.202l1.91 1.1c.821.472.982 1.634.369 2.28l-1.42 1.495c-.28.294-.572.452-.855.48c-1.435.141-5.18.02-9.244-4.259c-3.876-4.08-4.526-7.523-4.607-9.032c-.022-.4.152-.8.484-1.149z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15.75 4a.75.75 0 1 0-1.5 0v1.052c0 .898 0 1.647.08 2.242c.084.628.27 1.195.726 1.65c.455.456 1.022.641 1.65.726c.46.062 1.014.076 1.657.079l-.831.665a.75.75 0 0 0 .937 1.171l2.5-2a.75.75 0 0 0 0-1.17l-2.5-2a.75.75 0 0 0-.937 1.17l.829.664c-.625-.004-1.088-.016-1.456-.066c-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.789c-.064-.483-.066-1.13-.066-2.094z"></svg:path>`,
})
export class SolarCallDroppedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallDroppedRoundedBoldIcon],svg[solar-call-dropped-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 4v1c0 1.886 0 2.828.586 3.414S17.114 9 19 9h1.5m0 0L18 7m2.5 2L18 11"></svg:path><svg:path fill="currentColor" d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38"></svg:path></svg:g>`,
})
export class SolarCallDroppedRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallDroppedRoundedBoldDuotoneIcon],svg[solar-call-dropped-rounded-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 4v1c0 1.886 0 2.828.586 3.414S17.114 9 19 9h1.5m0 0L18 7m2.5 2L18 11"></svg:path><svg:path fill="currentColor" d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCallDroppedRoundedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallDroppedRoundedBrokenIcon],svg[solar-call-dropped-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M15 4v1c0 1.886 0 2.828.586 3.414S17.115 9 19 9h1.5m0 0L18 7m2.5 2L18 11"></svg:path><svg:path d="M4.007 7.933c-.073 1.908.41 5.149 3.66 8.4a14 14 0 0 0 2.333 1.9M5.538 4.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53A9.8 9.8 0 0 1 13 19.611"></svg:path></svg:g>`,
})
export class SolarCallDroppedRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallDroppedRoundedLineDuotoneIcon],svg[solar-call-dropped-rounded-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M15 4v1c0 1.886 0 2.828.586 3.414S17.115 9 19 9h1.5m0 0L18 7m2.5 2L18 11"></svg:path><svg:path d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCallDroppedRoundedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallDroppedRoundedLinearIcon],svg[solar-call-dropped-rounded-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M15 4v1c0 1.886 0 2.828.586 3.414S17.114 9 19 9h1.5m0 0L18 7m2.5 2L18 11"></svg:path><svg:path d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38Z"></svg:path></svg:g>`,
})
export class SolarCallDroppedRoundedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallDroppedRoundedOutlineIcon],svg[solar-call-dropped-rounded-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.75 4a.75.75 0 0 0-1.5 0v1.052c0 .898 0 1.648.08 2.242c.084.628.27 1.195.725 1.65c.456.456 1.023.642 1.65.726c.461.062 1.015.076 1.658.08l-.831.664a.75.75 0 0 0 .936 1.172l2.5-2a.75.75 0 0 0 0-1.172l-2.5-2a.75.75 0 1 0-.936 1.172l.828.663c-.624-.003-1.087-.016-1.455-.066c-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788c-.064-.483-.066-1.131-.066-2.095z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.693 4.95c-1.17-2.095-4.005-2.223-5.686-.543c-.898.899-1.697 2.093-1.75 3.498c-.079 2.08.459 5.536 3.88 8.958c3.422 3.421 6.877 3.959 8.958 3.88c1.405-.053 2.6-.852 3.498-1.75c1.68-1.68 1.552-4.516-.544-5.685l-1.163-.65c-1.368-.763-3.095-.438-4.227.68a.63.63 0 0 1-.337.104c-.256.012-.85-.079-1.767-.997c-.919-.918-1.01-1.511-.997-1.767a.63.63 0 0 1 .104-.337c1.118-1.131 1.443-2.859.68-4.227zm-4.625.518c1.106-1.106 2.716-.86 3.315.214l.649 1.163c.403.723.266 1.74-.448 2.452c-.07.07-.486.516-.524 1.307c-.04.81.324 1.792 1.434 2.902s2.09 1.474 2.901 1.434c.791-.038 1.237-.454 1.307-.524c.714-.713 1.73-.851 2.453-.448l1.163.65c1.074.598 1.32 2.208.214 3.314c-.775.775-1.63 1.28-2.494 1.312c-1.735.066-4.76-.363-7.84-3.442S4.69 9.697 4.756 7.962c.033-.863.537-1.72 1.312-2.494" clip-rule="evenodd"></svg:path>`,
})
export class SolarCallDroppedRoundedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallMedicineBoldIcon],svg[solar-call-medicine-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.556 15.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L7.374 4.91C6.61 3.83 5.135 3.688 4.26 4.609L2.691 6.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 7a5 5 0 0 1-7.226 4.478a.82.82 0 0 0-.574-.067l-1.113.298a.65.65 0 0 1-.796-.796l.298-1.113a.82.82 0 0 0-.067-.574A5 5 0 1 1 22 7m-5-2.187c.518 0 .938.42.938.937v.313h.312a.937.937 0 1 1 0 1.875h-.312v.312a.937.937 0 1 1-1.875 0v-.312h-.313a.937.937 0 1 1 0-1.875h.313V5.75c0-.518.42-.937.937-.937" clip-rule="evenodd"></svg:path>`,
})
export class SolarCallMedicineBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallMedicineBoldDuotoneIcon],svg[solar-call-medicine-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.556 15.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L7.374 4.91C6.61 3.83 5.135 3.688 4.26 4.609L2.691 6.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 7a5 5 0 0 1-7.226 4.478a.82.82 0 0 0-.574-.067l-1.113.298a.65.65 0 0 1-.796-.796l.298-1.113a.82.82 0 0 0-.067-.574A5 5 0 1 1 22 7m-5-2.187c.518 0 .938.42.938.937v.313h.312a.937.937 0 1 1 0 1.875h-.312v.312a.937.937 0 1 1-1.875 0v-.312h-.313a.937.937 0 1 1 0-1.875h.313V5.75c0-.518.42-.937.937-.937" clip-rule="evenodd"></svg:path>`,
})
export class SolarCallMedicineBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallMedicineBrokenIcon],svg[solar-call-medicine-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 9V5m2 2h-4"></svg:path><svg:path fill="currentColor" d="m14.1 16.027l.545.517zm.456-.48l-.544-.516zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.064-9.55a.75.75 0 1 0-1.498.081zm5.439 1.88l.544.517zm.287-.302l.543.517zm.156-2.81l.613-.433zM7.374 4.91l-.613.433zm-3.656-.818a.75.75 0 0 0 1.087 1.033zm6.345 9.964l.544-.517zm-.399 6.756a.75.75 0 1 0 .798-1.27zm4.449.246a.75.75 0 0 0-.307 1.469zm.532-4.514l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zM7.359 16.959c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L7.986 4.477l-1.225.866l1.26 1.783zM8.19 9.805a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019a.3.3 0 0 1-.037.047l-.005.005l-.003.003l-.001.001s-.001.002-.545-.515m1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .422-.25l.035-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.006-.005l.047-.042q.014-.008-.005.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM7.986 4.477C6.972 3.043 4.944 2.8 3.718 4.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zm9.471 16.26c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM9.021 10.02c.969-1.02 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47zm-4.638 3.478c-.984-.618-2.03-1.454-3.103-2.583l-1.087 1.033c1.154 1.215 2.297 2.132 3.392 2.82zm6.14 1.675a8.3 8.3 0 0 1-2.489-.159l-.307 1.469a9.8 9.8 0 0 0 2.944.182z"></svg:path></svg:g>`,
})
export class SolarCallMedicineBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallMedicineLineDuotoneIcon],svg[solar-call-medicine-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 9V5m2 2h-4"></svg:path><svg:path fill="currentColor" d="m14.1 16.027l-.543-.516zm.456-.48l.544.517zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.813-9.51l-.749.041zm6.475 1.538l.543.517zm.156-2.81l.613-.433zM7.374 4.91l-.613.433zM4.26 4.609l.544.516zM2.691 6.26l-.543-.516zm7.372 7.795l.544-.517zm4.582 2.488l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L7.986 4.477l-1.225.866l1.26 1.783zm-5.53-2.168L2.149 5.745l1.088 1.033l1.57-1.653zm4.474 5.713a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019a.3.3 0 0 1-.037.047l-.005.005l-.003.003l-.001.001s-.002.002-.545-.515m1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .421-.25l.036-.034l.014-.014l.01-.01h.001c0-.002.002-.002-.542-.519c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.005-.005l.01-.01l.037-.032q.015-.008-.004.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM7.986 4.477C6.972 3.043 4.944 2.8 3.718 4.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zM2.752 7.926c-.022-.4.152-.8.484-1.148L2.148 5.745c-.536.564-.943 1.347-.894 2.261zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM9.021 10.02c.969-1.02 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCallMedicineLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallMedicineLinearIcon],svg[solar-call-medicine-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 9V5m2 2h-4"></svg:path><svg:path fill="currentColor" d="m14.1 16.027l-.543-.516zm.456-.48l.544.517zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.813-9.51l-.749.041zm6.475 1.538l.543.517zm.156-2.81l.613-.433zM7.374 4.91l-.613.433zM4.26 4.609l.544.516zM2.691 6.26l-.543-.516zm7.372 7.795l.544-.517zm4.582 2.488l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L7.986 4.477l-1.225.866l1.26 1.783zm-5.53-2.168L2.149 5.745l1.088 1.033l1.57-1.653zm4.474 5.713a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019a.3.3 0 0 1-.037.047l-.005.005l-.003.003l-.001.001s-.002.002-.545-.515m1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .421-.25l.036-.034l.014-.014l.01-.01h.001c0-.002.002-.002-.542-.519c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.005-.005l.01-.01l.037-.032q.015-.008-.004.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM7.986 4.477C6.972 3.043 4.944 2.8 3.718 4.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zM2.752 7.926c-.022-.4.152-.8.484-1.148L2.148 5.745c-.536.564-.943 1.347-.894 2.261zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM9.021 10.02c.969-1.02 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47z"></svg:path></svg:g>`,
})
export class SolarCallMedicineLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallMedicineOutlineIcon],svg[solar-call-medicine-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 2.75a4.25 4.25 0 0 0-3.807 6.142c.16.32.225.71.12 1.102l-.253.946l.946-.253a1.57 1.57 0 0 1 1.102.12A4.25 4.25 0 1 0 17 2.75M11.25 7a5.75 5.75 0 1 1 3.19 5.15a.1.1 0 0 0-.04-.013h-.007l-1.112.297a1.4 1.4 0 0 1-1.715-1.714l.298-1.113V9.6a.1.1 0 0 0-.014-.04a5.7 5.7 0 0 1-.6-2.56M3.718 4.092c1.226-1.29 3.254-1.049 4.268.385l1.26 1.783c.811 1.147.743 2.74-.225 3.76l-.245.257l-.002.006c-.013.037-.045.152-.013.372c.067.456.418 1.381 1.846 2.884c1.432 1.508 2.3 1.864 2.703 1.929a.6.6 0 0 0 .294-.007l.408-.43c.874-.92 2.236-1.101 3.335-.469l1.91 1.1c1.633.94 2.013 3.239.708 4.613l-1.42 1.495c-.443.467-1.048.866-1.795.94c-1.824.18-6.049-.055-10.478-4.718c-4.134-4.352-4.919-8.137-5.018-9.986c-.049-.914.358-1.697.894-2.261l.544.516l-.544-.516zm3.043 1.25c-.512-.724-1.433-.767-1.956-.217l-1.57 1.653c-.33.349-.505.748-.483 1.148c.08 1.51.731 4.952 4.607 9.033c4.064 4.279 7.809 4.4 9.244 4.258c.283-.028.575-.186.854-.48l1.42-1.495c.614-.645.453-1.808-.368-2.28l-1.91-1.1c-.513-.295-1.114-.204-1.499.202l-.455.48l-.544-.517c.543.517.543.517.542.518l-.001.002l-.003.003l-.007.006l-.014.014a1 1 0 0 1-.136.112c-.08.057-.186.12-.321.172c-.276.11-.64.168-1.091.095c-.878-.143-2.028-.773-3.55-2.377c-1.528-1.608-2.113-2.807-2.243-3.7a2.25 2.25 0 0 1 .084-1.092a1.6 1.6 0 0 1 .23-.427l.03-.037l.014-.015l.006-.006l.003-.003l.002-.002s.001-.001.545.515l-.544-.516l.287-.302c.445-.47.51-1.264.088-1.86zM17 4.25a.75.75 0 0 1 .75.75v1.25H19a.75.75 0 1 1 0 1.5h-1.25V9a.75.75 0 1 1-1.5 0V7.75H15a.75.75 0 0 1 0-1.5h1.25V5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCallMedicineOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallMedicineRoundedBoldIcon],svg[solar-call-medicine-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 7a5 5 0 0 1-7.226 4.478a.82.82 0 0 0-.574-.067l-1.113.298a.65.65 0 0 1-.796-.796l.298-1.113a.82.82 0 0 0-.067-.574A5 5 0 1 1 22 7m-5-2.187c.518 0 .938.42.938.937v.313h.312a.937.937 0 1 1 0 1.875h-.312v.312a.937.937 0 1 1-1.875 0v-.312h-.313a.937.937 0 1 1 0-1.875h.313V5.75c0-.518.42-.937.937-.937" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m8.038 7.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38"></svg:path>`,
})
export class SolarCallMedicineRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallMedicineRoundedBoldDuotoneIcon],svg[solar-call-medicine-rounded-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 7a5 5 0 0 1-7.226 4.478a.82.82 0 0 0-.574-.067l-1.113.298a.65.65 0 0 1-.796-.796l.298-1.113a.82.82 0 0 0-.067-.574A5 5 0 1 1 22 7m-5-2.187c.518 0 .938.42.938.937v.313h.312a.937.937 0 1 1 0 1.875h-.312v.312a.937.937 0 1 1-1.875 0v-.312h-.313a.937.937 0 1 1 0-1.875h.313V5.75c0-.518.42-.937.937-.937" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m8.038 7.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38" opacity=".5"></svg:path>`,
})
export class SolarCallMedicineRoundedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallMedicineRoundedBrokenIcon],svg[solar-call-medicine-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12Z"></svg:path><svg:path stroke-linecap="round" d="M15 7h4m-2 2V5M2.007 9.933c-.073 1.908.41 5.149 3.66 8.4A14 14 0 0 0 8 20.232M3.538 6.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53A9.8 9.8 0 0 1 11 21.611"></svg:path></svg:g>`,
})
export class SolarCallMedicineRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallMedicineRoundedLineDuotoneIcon],svg[solar-call-medicine-rounded-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12Z"></svg:path><svg:path stroke-linecap="round" d="M15 7h4m-2 2V5"></svg:path><svg:path stroke-linecap="round" d="m8.038 7.316l.649 1.163c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCallMedicineRoundedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallMedicineRoundedLinearIcon],svg[solar-call-medicine-rounded-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12Z"></svg:path><svg:path stroke-linecap="round" d="M15 7h4m-2 2V5M8.038 7.316l.649 1.163c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38Z"></svg:path></svg:g>`,
})
export class SolarCallMedicineRoundedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallMedicineRoundedOutlineIcon],svg[solar-call-medicine-rounded-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M22.75 7a5.75 5.75 0 1 0-10.9 2.56a.1.1 0 0 1 .013.04v.007l-.297 1.113a1.4 1.4 0 0 0 1.714 1.714l1.113-.298q-.002 0 0 0h.007a.1.1 0 0 1 .04.014A5.75 5.75 0 0 0 22.75 7m-8.356 5.136h-.002zM17 2.75a4.25 4.25 0 1 1-1.892 8.057a1.57 1.57 0 0 0-1.102-.12l-.946.253l.253-.946a1.57 1.57 0 0 0-.12-1.102A4.25 4.25 0 0 1 17 2.75"></svg:path><svg:path d="M17 4.25a.75.75 0 0 1 .75.75v1.25H19a.75.75 0 0 1 0 1.5h-1.25V9a.75.75 0 0 1-1.5 0V7.75H15a.75.75 0 0 1 0-1.5h1.25V5a.75.75 0 0 1 .75-.75M3.007 6.407c1.68-1.68 4.516-1.552 5.685.544l.65 1.163c.763 1.368.438 3.095-.68 4.227a.63.63 0 0 0-.104.337c-.013.256.078.849.997 1.767c.918.918 1.51 1.01 1.767.997a.63.63 0 0 0 .337-.104c1.131-1.118 2.859-1.443 4.227-.68l1.163.65c2.096 1.17 2.224 4.005.544 5.685c-.899.898-2.094 1.697-3.498 1.75c-2.08.079-5.536-.459-8.958-3.88c-3.421-3.422-3.959-6.877-3.88-8.958c.053-1.405.852-2.6 1.75-3.498m4.376 1.275c-.6-1.074-2.21-1.32-3.315-.214c-.775.775-1.28 1.63-1.312 2.493c-.066 1.736.363 4.762 3.442 7.841s6.105 3.508 7.84 3.442c.863-.033 1.72-.537 2.494-1.312c1.106-1.106.86-2.716-.214-3.315l-1.163-.649c-.723-.403-1.74-.266-2.452.448c-.07.07-.517.486-1.308.524c-.81.04-1.791-.324-2.9-1.434c-1.111-1.11-1.475-2.091-1.435-2.902c.038-.791.455-1.237.524-1.306c.714-.714.851-1.73.448-2.453z"></svg:path></svg:g>`,
})
export class SolarCallMedicineRoundedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraAddBoldIcon],svg[solar-camera-add-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 10.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V15a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1 0-1.5h1.25V11a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21M16 13a4 4 0 1 1-8 0a4 4 0 0 1 8 0m2-3.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"></svg:path></svg:g>`,
})
export class SolarCameraAddBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraAddBoldDuotoneIcon],svg[solar-camera-add-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21M16 13a4 4 0 1 1-8 0a4 4 0 0 1 8 0m2-3.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16 13a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-3.25-2a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 0 0 0 1.5h1.25V15a.75.75 0 0 0 1.5 0v-1.25H14a.75.75 0 0 0 0-1.5h-1.25z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18 9.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarCameraAddBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraAddBrokenIcon],svg[solar-camera-add-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 13H9m3-3v6m7-6h-1M2 13.364c0-3.065 0-4.597.749-5.697a4.4 4.4 0 0 1 1.226-1.204c.72-.473 1.622-.642 3.003-.702c.659 0 1.226-.49 1.355-1.125A2.064 2.064 0 0 1 10.366 3h3.268c.988 0 1.839.685 2.033 1.636c.129.635.696 1.125 1.355 1.125c1.38.06 2.282.23 3.003.702c.485.318.902.727 1.226 1.204c.749 1.1.749 2.632.749 5.697s0 4.596-.749 5.697a4.4 4.4 0 0 1-1.226 1.204C18.904 21 17.343 21 14.222 21H9.778c-3.121 0-4.682 0-5.803-.735A4.4 4.4 0 0 1 2.75 19.06A3.4 3.4 0 0 1 2.277 18"></svg:path>`,
})
export class SolarCameraAddBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraAddLineDuotoneIcon],svg[solar-camera-add-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M15 13H9m3-3v6"></svg:path><svg:path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M19 10h-1"></svg:path></svg:g>`,
})
export class SolarCameraAddLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
