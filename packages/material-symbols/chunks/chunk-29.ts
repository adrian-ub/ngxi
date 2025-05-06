import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWbShadeIcon],svg[material-symbols-wb-shade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 20L14 14.5V12l8 8zM14 20v-3l3 3zM4 20V10H2l6-6l6 6h-2v10zm3-6h2v-4H7z"></svg:path>`,
})
export class MaterialSymbolsWbShadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWbShadeRoundedIcon],svg[material-symbols-wb-shade-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 20L14 14.5v-1.3q0-.35.3-.475t.55.125l6.3 6.3q.25.25.125.55t-.475.3zM14 19v-2l3 3h-2q-.425 0-.712-.288T14 19M4 19v-9h-.8q-.35 0-.475-.3t.125-.55L7.3 4.7q.3-.3.7-.3t.7.3l4.45 4.45q.25.25.125.55t-.475.3H12v9q0 .425-.288.713T11 20H5q-.425 0-.712-.288T4 19m3-5h2v-4H7z"></svg:path>`,
})
export class MaterialSymbolsWbShadeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWbSunnyIcon],svg[material-symbols-wb-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4V1h2v3zm0 19v-3h2v3zm9-10v-2h3v2zM1 13v-2h3v2zm17.7-6.3l-1.4-1.4l1.75-1.8l1.45 1.45zM4.95 20.5L3.5 19.05l1.8-1.75l1.4 1.4zm14.1 0l-1.75-1.8l1.4-1.4l1.8 1.75zM5.3 6.7L3.5 4.95L4.95 3.5L6.7 5.3zM12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12t-1.75 4.25T12 18"></svg:path>`,
})
export class MaterialSymbolsWbSunnyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWbSunnyOutlineIcon],svg[material-symbols-wb-sunny-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4V1h2v3zm0 19v-3h2v3zm9-10v-2h3v2zM1 13v-2h3v2zm17.7-6.3l-1.4-1.4l1.75-1.8l1.45 1.45zM4.95 20.5L3.5 19.05l1.8-1.75l1.4 1.4zm14.1 0l-1.75-1.8l1.4-1.4l1.8 1.75zM5.3 6.7L3.5 4.95L4.95 3.5L6.7 5.3zM12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12t-1.75 4.25T12 18m0-2q1.675 0 2.838-1.162T16 12t-1.162-2.838T12 8T9.162 9.163T8 12t1.163 2.838T12 16m0-4"></svg:path>`,
})
export class MaterialSymbolsWbSunnyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWbSunnyOutlineRoundedIcon],svg[material-symbols-wb-sunny-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3V2q0-.425.288-.712T12 1t.713.288T13 2v1q0 .425-.288.713T12 4t-.712-.288T11 3m0 19v-1q0-.425.288-.712T12 20t.713.288T13 21v1q0 .425-.288.713T12 23t-.712-.288T11 22m11-9h-1q-.425 0-.712-.288T20 12t.288-.712T21 11h1q.425 0 .713.288T23 12t-.288.713T22 13M3 13H2q-.425 0-.712-.288T1 12t.288-.712T2 11h1q.425 0 .713.288T4 12t-.288.713T3 13m16.75-7.325l-.35.35q-.275.275-.687.275T18 6q-.275-.275-.288-.687t.263-.713l.375-.375q.275-.3.7-.3t.725.3t.288.725t-.313.725M6.025 19.4l-.375.375q-.275.3-.7.3t-.725-.3t-.288-.725t.313-.725l.35-.35q.275-.275.688-.275T6 18q.275.275.288.688t-.263.712m12.3.35l-.35-.35q-.275-.275-.275-.687T18 18q.275-.275.688-.287t.712.262l.375.375q.3.275.3.7t-.3.725t-.725.288t-.725-.313M4.6 6.025l-.375-.375q-.3-.275-.3-.7t.3-.725t.725-.288t.725.313l.35.35q.275.275.275.688T6 6q-.275.275-.687.288T4.6 6.025M12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12t-1.75 4.25T12 18m0-2q1.675 0 2.838-1.162T16 12t-1.162-2.838T12 8T9.162 9.163T8 12t1.163 2.838T12 16m0-4"></svg:path>`,
})
export class MaterialSymbolsWbSunnyOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWbSunnyRoundedIcon],svg[material-symbols-wb-sunny-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3V2q0-.425.288-.712T12 1t.713.288T13 2v1q0 .425-.288.713T12 4t-.712-.288T11 3m0 19v-1q0-.425.288-.712T12 20t.713.288T13 21v1q0 .425-.288.713T12 23t-.712-.288T11 22m11-9h-1q-.425 0-.712-.288T20 12t.288-.712T21 11h1q.425 0 .713.288T23 12t-.288.713T22 13M3 13H2q-.425 0-.712-.288T1 12t.288-.712T2 11h1q.425 0 .713.288T4 12t-.288.713T3 13m16.75-7.325l-.35.35q-.275.275-.687.275T18 6q-.275-.275-.288-.687t.263-.713l.375-.375q.275-.3.7-.3t.725.3t.288.725t-.313.725M6.025 19.4l-.375.375q-.275.3-.7.3t-.725-.3t-.288-.725t.313-.725l.35-.35q.275-.275.688-.275T6 18q.275.275.288.688t-.263.712m12.3.35l-.35-.35q-.275-.275-.275-.687T18 18q.275-.275.688-.287t.712.262l.375.375q.3.275.3.7t-.3.725t-.725.288t-.725-.313M4.6 6.025l-.375-.375q-.3-.275-.3-.7t.3-.725t.725-.288t.725.313l.35.35q.275.275.275.688T6 6q-.275.275-.687.288T4.6 6.025M12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12t-1.75 4.25T12 18"></svg:path>`,
})
export class MaterialSymbolsWbSunnyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWbTwilightIcon],svg[material-symbols-wb-twilight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.35 10.1l-1.4-1.45l2.15-2.1l1.4 1.4zM2 20v-2h20v2zm9-13V4h2v3zm-5.35 3.05L3.55 7.9l1.4-1.4L7.1 8.65zM5 16q0-2.925 2.038-4.962T12 9t4.963 2.038T19 16z"></svg:path>`,
})
export class MaterialSymbolsWbTwilightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWbTwilightOutlineIcon],svg[material-symbols-wb-twilight-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.35 10.1l-1.4-1.45l2.15-2.1l1.4 1.4zM2 20v-2h20v2zm9-13V4h2v3zm-5.35 3.05L3.55 7.9l1.4-1.4L7.1 8.65zM7.425 14h9.15q-.575-1.35-1.8-2.175T12 11t-2.775.825T7.425 14M5 16q0-2.925 2.038-4.962T12 9t4.963 2.038T19 16zm7-2"></svg:path>`,
})
export class MaterialSymbolsWbTwilightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWbTwilightOutlineRoundedIcon],svg[material-symbols-wb-twilight-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.8 7.25q.275.275.275.7t-.275.7l-.725.725q-.3.3-.712.3t-.713-.3t-.287-.712t.312-.713l.725-.725q.3-.275.713-.262t.687.287M3 20q-.425 0-.712-.288T2 19t.288-.712T3 18h18q.425 0 .713.288T22 19t-.288.713T21 20zm9-16q.425 0 .713.288T13 5v1q0 .425-.288.713T12 7t-.712-.288T11 6V5q0-.425.288-.712T12 4M4.25 7.2q.275-.275.7-.275t.7.275l.725.725q.3.3.3.713t-.3.712q-.3.275-.725.275t-.7-.3L4.225 8.6q-.275-.3-.262-.712T4.25 7.2M7.425 14h9.15q-.575-1.35-1.8-2.175T12 11t-2.775.825T7.425 14M5 16q0-2.925 2.038-4.962T12 9t4.963 2.038T19 16zm7-2"></svg:path>`,
})
export class MaterialSymbolsWbTwilightOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWbTwilightRoundedIcon],svg[material-symbols-wb-twilight-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.8 7.25q.275.275.275.7t-.275.7l-.725.725q-.3.3-.712.3t-.713-.3t-.287-.712t.312-.713l.725-.725q.3-.275.713-.262t.687.287M3 20q-.425 0-.712-.288T2 19t.288-.712T3 18h18q.425 0 .713.288T22 19t-.288.713T21 20zm9-16q.425 0 .713.288T13 5v1q0 .425-.288.713T12 7t-.712-.288T11 6V5q0-.425.288-.712T12 4M4.25 7.2q.275-.275.7-.275t.7.275l.725.725q.3.3.3.713t-.3.712q-.3.275-.725.275t-.7-.3L4.225 8.6q-.275-.3-.262-.712T4.25 7.2M5 16q0-2.925 2.038-4.962T12 9t4.963 2.038T19 16z"></svg:path>`,
})
export class MaterialSymbolsWbTwilightRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWcIcon],svg[material-symbols-wc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 22v-7.5H4V9q0-.825.588-1.412T6 7h3q.825 0 1.413.588T11 9v5.5H9.5V22zm2-16q-.825 0-1.412-.587T5.5 4t.588-1.412T7.5 2t1.413.588T9.5 4t-.587 1.413T7.5 6M15 22v-6h-3l2.55-7.65q.2-.65.738-1T16.5 7t1.213.35t.737 1L21 16h-3v6zm1.5-16q-.825 0-1.412-.587T14.5 4t.588-1.412T16.5 2t1.413.588T18.5 4t-.587 1.413T16.5 6"></svg:path>`,
})
export class MaterialSymbolsWcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWcRoundedIcon],svg[material-symbols-wc-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 21v-6.5H5q-.425 0-.712-.288T4 13.5V9q0-.825.588-1.412T6 7h3q.825 0 1.413.588T11 9v4.5q0 .425-.288.713T10 14.5h-.5V21q0 .425-.288.713T8.5 22h-2q-.425 0-.712-.288T5.5 21m2-15q-.825 0-1.412-.587T5.5 4t.588-1.412T7.5 2t1.413.588T9.5 4t-.587 1.413T7.5 6M15 21v-5h-1.625q-.5 0-.8-.413t-.125-.912l2.1-6.325q.2-.65.737-1T16.5 7t1.213.35t.737 1l2.1 6.325q.175.5-.125.913t-.8.412H18v5q0 .425-.288.713T17 22h-1q-.425 0-.712-.288T15 21m1.5-15q-.825 0-1.412-.587T14.5 4t.588-1.412T16.5 2t1.413.588T18.5 4t-.587 1.413T16.5 6"></svg:path>`,
})
export class MaterialSymbolsWcRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWcSharpIcon],svg[material-symbols-wc-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 22v-7.5H4V7h7v7.5H9.5V22zm2-16q-.825 0-1.412-.587T5.5 4t.588-1.412T7.5 2t1.413.588T9.5 4t-.587 1.413T7.5 6M15 22v-6h-3l2.95-9h3.1L21 16h-3v6zm1.5-16q-.825 0-1.412-.587T14.5 4t.588-1.412T16.5 2t1.413.588T18.5 4t-.587 1.413T16.5 6"></svg:path>`,
})
export class MaterialSymbolsWcSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeatherHailIcon],svg[material-symbols-weather-hail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 23L11 21.5l1.5-1.5l1.5 1.5zm-3.45-1.5L8 20.45l2.95-2.95L12 18.55zM15.5 20L14 18.5l1.5-1.5l1.5 1.5zm-9 0L5 18.5L6.5 17L8 18.5zm1-4q-2.275 0-3.887-1.612T2 10.5q0-2.075 1.375-3.625t3.4-1.825q.8-1.425 2.188-2.238T12 2q2.25 0 3.913 1.438t2.012 3.587q1.725.15 2.9 1.425T22 11.5q0 1.875-1.312 3.188T17.5 16z"></svg:path>`,
})
export class MaterialSymbolsWeatherHailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeatherHailOutlineIcon],svg[material-symbols-weather-hail-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 23L11 21.5l1.5-1.5l1.5 1.5zm-3.45-1.5L8 20.45l2.95-2.95L12 18.55zM15.5 20L14 18.5l1.5-1.5l1.5 1.5zm-9 0L5 18.5L6.5 17L8 18.5zm1-4q-2.275 0-3.887-1.612T2 10.5q0-2.075 1.375-3.625t3.4-1.825q.8-1.425 2.188-2.238T12 2q2.25 0 3.913 1.438t2.012 3.587q1.725.15 2.9 1.425T22 11.5q0 1.875-1.312 3.188T17.5 16zm0-2h10q1.05 0 1.775-.725T20 11.5t-.725-1.775T17.5 9H16V8q0-1.65-1.175-2.825T12 4q-1.2 0-2.187.65T8.325 6.4l-.25.6H7.45q-1.425.05-2.437 1.063T4 10.5q0 1.45 1.025 2.475T7.5 14M12 9"></svg:path>`,
})
export class MaterialSymbolsWeatherHailOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeatherHailOutlineRoundedIcon],svg[material-symbols-weather-hail-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.65 21.85l-.8.8q-.15.15-.35.15t-.35-.15l-.8-.8q-.15-.15-.15-.35t.15-.35l.8-.8q.15-.15.35-.15t.35.15l.8.8q.15.15.15.35t-.15.35m-5.125-.875Q8.3 20.75 8.3 20.45t.225-.525l1.9-1.9q.225-.225.525-.225t.525.225t.225.525t-.225.525l-1.9 1.9q-.225.225-.525.225t-.525-.225m8.125-2.125l-.8.8q-.15.15-.35.15t-.35-.15l-.8-.8q-.15-.15-.15-.35t.15-.35l.8-.8q.15-.15.35-.15t.35.15l.8.8q.15.15.15.35t-.15.35m-9 0l-.8.8q-.15.15-.35.15t-.35-.15l-.8-.8q-.15-.15-.15-.35t.15-.35l.8-.8q.15-.15.35-.15t.35.15l.8.8q.15.15.15.35t-.15.35M7.5 16q-2.275 0-3.888-1.612T2 10.5q0-2.075 1.375-3.625t3.4-1.825q.8-1.425 2.188-2.238T12 2q2.25 0 3.913 1.438t2.012 3.587q1.725.15 2.9 1.425T22 11.5q0 1.875-1.312 3.188T17.5 16zm0-2h10q1.05 0 1.775-.725T20 11.5t-.725-1.775T17.5 9H16V8q0-1.65-1.175-2.825T12 4q-1.2 0-2.187.65T8.325 6.4l-.25.6H7.45q-1.425.05-2.437 1.063T4 10.5q0 1.45 1.025 2.475T7.5 14M12 9"></svg:path>`,
})
export class MaterialSymbolsWeatherHailOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeatherHailRoundedIcon],svg[material-symbols-weather-hail-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.65 21.85l-.8.8q-.15.15-.35.15t-.35-.15l-.8-.8q-.15-.15-.15-.35t.15-.35l.8-.8q.15-.15.35-.15t.35.15l.8.8q.15.15.15.35t-.15.35m-5.125-.875Q8.3 20.75 8.3 20.45t.225-.525l1.9-1.9q.225-.225.525-.225t.525.225t.225.525t-.225.525l-1.9 1.9q-.225.225-.525.225t-.525-.225m8.125-2.125l-.8.8q-.15.15-.35.15t-.35-.15l-.8-.8q-.15-.15-.15-.35t.15-.35l.8-.8q.15-.15.35-.15t.35.15l.8.8q.15.15.15.35t-.15.35m-9 0l-.8.8q-.15.15-.35.15t-.35-.15l-.8-.8q-.15-.15-.15-.35t.15-.35l.8-.8q.15-.15.35-.15t.35.15l.8.8q.15.15.15.35t-.15.35M7.5 16q-2.275 0-3.888-1.612T2 10.5q0-2.075 1.375-3.625t3.4-1.825q.8-1.425 2.188-2.238T12 2q2.25 0 3.913 1.438t2.012 3.587q1.725.15 2.9 1.425T22 11.5q0 1.875-1.312 3.188T17.5 16z"></svg:path>`,
})
export class MaterialSymbolsWeatherHailRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeatherMixIcon],svg[material-symbols-weather-mix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 23q-.625 0-1.062-.425T11 21.525q0-.3.113-.575t.337-.475l1.05-.975l1.05.975q.225.2.338.475t.112.575q0 .625-.437 1.05T12.5 23m-3.45-1.5L8 20.45l2.95-2.95L12 18.55zM15.5 20L14 18.5l1.5-1.5l1.5 1.5zm-9 0L5 18.5L6.5 17L8 18.5zm1-4q-2.275 0-3.887-1.612T2 10.5q0-2.075 1.375-3.625t3.4-1.825q.8-1.425 2.188-2.238T12 2q2.25 0 3.913 1.438t2.012 3.587q1.725.15 2.9 1.425T22 11.5q0 1.875-1.312 3.188T17.5 16z"></svg:path>`,
})
export class MaterialSymbolsWeatherMixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeatherMixOutlineIcon],svg[material-symbols-weather-mix-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 23q-.625 0-1.062-.425T11 21.525q0-.3.113-.575t.337-.475l1.05-.975l1.05.975q.225.2.338.475t.112.575q0 .625-.437 1.05T12.5 23m-3.45-1.5L8 20.45l2.95-2.95L12 18.55zM15.5 20L14 18.5l1.5-1.5l1.5 1.5zm-9 0L5 18.5L6.5 17L8 18.5zm1-4q-2.275 0-3.887-1.612T2 10.5q0-2.075 1.375-3.625t3.4-1.825q.8-1.425 2.188-2.238T12 2q2.25 0 3.913 1.438t2.012 3.587q1.725.15 2.9 1.425T22 11.5q0 1.875-1.312 3.188T17.5 16zm0-2h10q1.05 0 1.775-.725T20 11.5t-.725-1.775T17.5 9H16V8q0-1.65-1.175-2.825T12 4q-1.2 0-2.187.65T8.325 6.4l-.25.6H7.45q-1.425.05-2.437 1.063T4 10.5q0 1.45 1.025 2.475T7.5 14M12 9"></svg:path>`,
})
export class MaterialSymbolsWeatherMixOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeatherMixOutlineRoundedIcon],svg[material-symbols-weather-mix-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 23q-.625 0-1.062-.425T11 21.525q0-.3.113-.575t.337-.475l.7-.65q.15-.125.35-.125t.35.125l.7.65q.225.2.337.475t.113.575q0 .625-.437 1.05T12.5 23m-3.975-2.025Q8.3 20.75 8.3 20.45t.225-.525l1.9-1.9q.225-.225.525-.225t.525.225t.225.525t-.225.525l-1.9 1.9q-.225.225-.525.225t-.525-.225m6.625-1.325l-.8-.8q-.15-.15-.15-.35t.15-.35l.8-.8q.15-.15.35-.15t.35.15l.8.8q.15.15.15.35t-.15.35l-.8.8q-.15.15-.35.15t-.35-.15m-7.5-.8l-.8.8q-.15.15-.35.15t-.35-.15l-.8-.8q-.15-.15-.15-.35t.15-.35l.8-.8q.15-.15.35-.15t.35.15l.8.8q.15.15.15.35t-.15.35M7.5 16q-2.275 0-3.888-1.612T2 10.5q0-2.075 1.375-3.625t3.4-1.825q.8-1.425 2.188-2.238T12 2q2.25 0 3.913 1.438t2.012 3.587q1.725.15 2.9 1.425T22 11.5q0 1.875-1.312 3.188T17.5 16zm0-2h10q1.05 0 1.775-.725T20 11.5t-.725-1.775T17.5 9H16V8q0-1.65-1.175-2.825T12 4q-1.2 0-2.187.65T8.325 6.4l-.25.6H7.45q-1.425.05-2.437 1.063T4 10.5q0 1.45 1.025 2.475T7.5 14M12 9"></svg:path>`,
})
export class MaterialSymbolsWeatherMixOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeatherMixRoundedIcon],svg[material-symbols-weather-mix-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 23q-.625 0-1.062-.425T11 21.525q0-.3.113-.575t.337-.475l.7-.65q.15-.125.35-.125t.35.125l.7.65q.225.2.337.475t.113.575q0 .625-.437 1.05T12.5 23m-3.975-2.025Q8.3 20.75 8.3 20.45t.225-.525l1.9-1.9q.225-.225.525-.225t.525.225t.225.525t-.225.525l-1.9 1.9q-.225.225-.525.225t-.525-.225m6.625-1.325l-.8-.8q-.15-.15-.15-.35t.15-.35l.8-.8q.15-.15.35-.15t.35.15l.8.8q.15.15.15.35t-.15.35l-.8.8q-.15.15-.35.15t-.35-.15m-7.5-.8l-.8.8q-.15.15-.35.15t-.35-.15l-.8-.8q-.15-.15-.15-.35t.15-.35l.8-.8q.15-.15.35-.15t.35.15l.8.8q.15.15.15.35t-.15.35M7.5 16q-2.275 0-3.888-1.612T2 10.5q0-2.075 1.375-3.625t3.4-1.825q.8-1.425 2.188-2.238T12 2q2.25 0 3.913 1.438t2.012 3.587q1.725.15 2.9 1.425T22 11.5q0 1.875-1.312 3.188T17.5 16z"></svg:path>`,
})
export class MaterialSymbolsWeatherMixRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeatherSnowyIcon],svg[material-symbols-weather-snowy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 19q-.525 0-.888-.363t-.362-.887t.363-.888t.887-.362t.888.363t.362.887t-.363.888T6.5 19m3 3q-.525 0-.888-.363t-.362-.887t.363-.888t.887-.362t.888.363t.362.887t-.363.888T9.5 22m3-3q-.525 0-.888-.363t-.362-.887t.363-.888t.887-.362t.888.363t.362.887t-.363.888T12.5 19m6 0q-.525 0-.888-.363t-.362-.887t.363-.888t.887-.362t.888.363t.362.887t-.363.888T18.5 19m-3 3q-.525 0-.888-.363t-.362-.887t.363-.888t.887-.362t.888.363t.362.887t-.363.888T15.5 22m-8-7q-2.275 0-3.887-1.612T2 9.5q0-2.075 1.375-3.625t3.4-1.825q.8-1.425 2.188-2.238T12 1q2.25 0 3.913 1.438t2.012 3.587q1.725.15 2.9 1.425T22 10.5q0 1.875-1.312 3.188T17.5 15z"></svg:path>`,
})
export class MaterialSymbolsWeatherSnowyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeatherSnowyOutlineIcon],svg[material-symbols-weather-snowy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 19q-.525 0-.888-.363t-.362-.887t.363-.888t.887-.362t.888.363t.362.887t-.363.888T6.5 19m3 3q-.525 0-.888-.363t-.362-.887t.363-.888t.887-.362t.888.363t.362.887t-.363.888T9.5 22m3-3q-.525 0-.888-.363t-.362-.887t.363-.888t.887-.362t.888.363t.362.887t-.363.888T12.5 19m6 0q-.525 0-.888-.363t-.362-.887t.363-.888t.887-.362t.888.363t.362.887t-.363.888T18.5 19m-3 3q-.525 0-.888-.363t-.362-.887t.363-.888t.887-.362t.888.363t.362.887t-.363.888T15.5 22m-8-7q-2.275 0-3.887-1.612T2 9.5q0-2.075 1.375-3.625t3.4-1.825q.8-1.425 2.188-2.238T12 1q2.25 0 3.913 1.438t2.012 3.587q1.725.15 2.9 1.425T22 10.5q0 1.875-1.312 3.188T17.5 15zm0-2h10q1.05 0 1.775-.725T20 10.5t-.725-1.775T17.5 8H16V7q0-1.65-1.175-2.825T12 3q-1.2 0-2.187.65T8.325 5.4l-.25.6H7.45q-1.425.05-2.437 1.063T4 9.5q0 1.45 1.025 2.475T7.5 13m4.5-2.5"></svg:path>`,
})
export class MaterialSymbolsWeatherSnowyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWebIcon],svg[material-symbols-web-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h10.5v-3.5H4zm12.5 0H20V9h-3.5zM4 12.5h10.5V9H4z"></svg:path>`,
})
export class MaterialSymbolsWebIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWebAssetIcon],svg[material-symbols-web-asset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V8H4z"></svg:path>`,
})
export class MaterialSymbolsWebAssetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWebAssetOffIcon],svg[material-symbols-web-asset-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.45 23.3l-3.3-3.3H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4v2.85L.65 3.5l1.425-1.425l19.8 19.8zM4 18h11.15l-10-10H4zm17.775.925L20 17.15V8h-9.15l-4-4H20q.825 0 1.413.588T22 6v12q0 .25-.05.488t-.175.437"></svg:path>`,
})
export class MaterialSymbolsWebAssetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWebAssetOffRoundedIcon],svg[material-symbols-web-asset-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4v2.85L1.35 4.2q-.3-.3-.3-.712t.3-.713t.713-.3t.712.3l18.4 18.4q.3.3.3.7t-.3.7t-.712.3t-.713-.3L17.15 20zm0-2h11.15l-10-10H4zM22 6v11q0 .5-.312.75T21 18t-.687-.262t-.313-.763V8h-8.325q-.4 0-.763-.15t-.637-.425L8.55 5.7q-.225-.25-.275-.525t.075-.55t.35-.45T9.275 4H20q.825 0 1.413.588T22 6"></svg:path>`,
})
export class MaterialSymbolsWebAssetOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWebAssetOffSharpIcon],svg[material-symbols-web-asset-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.45 23.3l-3.3-3.3H2V4h2v2.85L.65 3.5l1.425-1.425l19.8 19.8zM4 18h11.15l-10-10H4zm18 1.15l-2-2V8h-9.15l-4-4H22z"></svg:path>`,
})
export class MaterialSymbolsWebAssetOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWebAssetSharpIcon],svg[material-symbols-web-asset-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h20v16zm2-2h16V8H4z"></svg:path>`,
})
export class MaterialSymbolsWebAssetSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWebSharpIcon],svg[material-symbols-web-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h20v16zm2-2h10.5v-3.5H4zm12.5 0H20V9h-3.5zM4 12.5h10.5V9H4z"></svg:path>`,
})
export class MaterialSymbolsWebSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWebStoriesIcon],svg[material-symbols-web-stories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20V4q.825 0 1.413.588T19 6v12q0 .825-.587 1.413T17 20M4 22q-.825 0-1.412-.587T2 20V4q0-.825.588-1.412T4 2h9q.825 0 1.413.588T15 4v16q0 .825-.587 1.413T13 22zm17-4V6q.625 0 1.063.438T22.5 7.5v9q0 .625-.437 1.063T21 18"></svg:path>`,
})
export class MaterialSymbolsWebStoriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWebStoriesOutlineIcon],svg[material-symbols-web-stories-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20V4q.825 0 1.413.588T19 6v12q0 .825-.587 1.413T17 20M4 22q-.825 0-1.412-.587T2 20V4q0-.825.588-1.412T4 2h9q.825 0 1.413.588T15 4v16q0 .825-.587 1.413T13 22zm17-4V6q.625 0 1.063.438T22.5 7.5v9q0 .625-.437 1.063T21 18M4 20h9V4H4zM4 4v16z"></svg:path>`,
})
export class MaterialSymbolsWebStoriesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWebStoriesOutlineSharpIcon],svg[material-symbols-web-stories-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20V4h2v16zM2 22V2h13v20zm19-4V6h1.5v12zM4 20h9V4H4zM4 4v16z"></svg:path>`,
})
export class MaterialSymbolsWebStoriesOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWebStoriesSharpIcon],svg[material-symbols-web-stories-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20V4h2v16zM2 22V2h13v20zm19-4V6h1.5v12z"></svg:path>`,
})
export class MaterialSymbolsWebStoriesSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWebTrafficIcon],svg[material-symbols-web-traffic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12v-2h3v2zm3.4 5.55L4 16.1L6.1 14l1.45 1.4zM6.1 8L4 5.9l1.4-1.45L7.55 6.6zM18 20l-4.75-4.75L12 19L9 9l10 3l-3.7 1.3L20 18zM10 6V3h2v3zm5.9 2l-1.45-1.4l2.15-2.15l1.4 1.4z"></svg:path>`,
})
export class MaterialSymbolsWebTrafficIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWebTrafficRoundedIcon],svg[material-symbols-web-traffic-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10h1q.425 0 .713.288T5 11t-.288.713T4 12H3q-.425 0-.712-.288T2 11t.288-.712T3 10m1.7 5.4l.7-.7q.3-.3.7-.287t.7.287q.3.3.313.713t-.288.712l-.7.7q-.3.3-.712.288T4.7 16.8q-.275-.3-.288-.7t.288-.7m.7-8.1l-.7-.7q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287l.7.7q.3.3.288.713T6.8 7.3q-.3.275-.7.288T5.4 7.3m11.9 12l-4.05-4.05l-.75 2.25q-.05.175-.187.263t-.288.087t-.288-.1t-.187-.275l-2.15-7.15q-.05-.2.013-.4T9.6 9.6t.325-.187t.4-.013l7.2 2.15q.175.05.263.188t.087.287t-.075.288t-.25.187l-2.25.8l4 4q.3.3.3.7t-.3.7l-.6.6q-.3.3-.7.3t-.7-.3M10 5V4q0-.425.288-.712T11 3t.713.288T12 4v1q0 .425-.288.713T11 6t-.712-.288T10 5m5.175.875l.725-.725q.275-.275.688-.288t.712.288q.275.275.288.688t-.263.712l-.725.75q-.275.3-.688.288T15.2 7.3q-.3-.3-.312-.712t.287-.713"></svg:path>`,
})
export class MaterialSymbolsWebTrafficRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWebhookIcon],svg[material-symbols-webhook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21q-2.075 0-3.537-1.463T2 16q0-1.825 1.138-3.187T6 11.1v2.075q-.875.3-1.437 1.075T4 16q0 1.25.875 2.125T7 19t2.125-.875T10 16v-1h5.875q.2-.225.488-.363T17 14.5q.625 0 1.063.438T18.5 16t-.437 1.063T17 17.5q-.35 0-.638-.137T15.876 17H11.9q-.35 1.725-1.713 2.863T7 21m10 0q-1.4 0-2.537-.687T12.675 18.5h2.675q.35.25.775.375T17 19q1.25 0 2.125-.875T20 16t-.875-2.125T17 13q-.5 0-.925.138t-.8.412l-3.05-5.075q-.525-.1-.875-.5T11 7q0-.625.438-1.062T12.5 5.5t1.063.438T14 7v.213q0 .087-.05.212l2.175 3.65q.2-.05.425-.062T17 11q2.075 0 3.538 1.463T22 16t-1.463 3.538T17 21M7 17.5q-.625 0-1.062-.437T5.5 16q0-.55.35-.95t.85-.525l2.35-3.9q-.725-.675-1.138-1.612T7.5 7q0-2.075 1.463-3.537T12.5 2t3.538 1.463T17.5 7h-2q0-1.25-.875-2.125T12.5 4t-2.125.875T9.5 7q0 1.075.65 1.888t1.65 1.037L8.425 15.55q.05.125.063.225T8.5 16q0 .625-.437 1.063T7 17.5"></svg:path>`,
})
export class MaterialSymbolsWebhookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWebhookRoundedIcon],svg[material-symbols-webhook-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21q-2.075 0-3.537-1.463T2 16q0-1.4.675-2.537t1.8-1.788q.525-.3 1.025.013t.5.862q0 .275-.112.5t-.313.325q-.7.375-1.137 1.075T4 16q0 1.25.875 2.125T7 19t2.125-.875T10 16q0-.425.238-.712T10.9 15h4.975q.2-.225.488-.363T17 14.5q.625 0 1.063.438T18.5 16t-.437 1.063T17 17.5q-.35 0-.638-.137T15.876 17H11.9q-.35 1.725-1.713 2.863T7 21m0-3.5q-.625 0-1.062-.437T5.5 16q0-.55.35-.95t.85-.525l2.35-3.9q-.725-.675-1.138-1.612T7.5 7q0-2.075 1.463-3.537T12.5 2q1.75 0 3.088 1.063T17.35 5.75q.125.475-.175.863t-.8.387q-.325 0-.612-.238t-.388-.587q-.275-.95-1.05-1.562T12.5 4q-1.25 0-2.125.875T9.5 7q0 .825.413 1.513T10.974 9.6q.35.2.438.5t-.088.6l-2.9 4.85q.05.125.063.225T8.5 16q0 .625-.437 1.063T7 17.5M17 21q-.65 0-1.263-.162T14.6 20.4q-.675-.375-.537-1.137t1.012-.763q.125 0 .275.05t.275.125q.325.175.663.25T17 19q1.25 0 2.125-.875T20 16t-.875-2.125T17 13q-.25 0-.475.038t-.45.112q-.4.125-.75.013t-.525-.388l-2.575-4.3q-.525-.1-.875-.5T11 7q0-.625.438-1.062T12.5 5.5t1.063.438T14 7v.213q0 .087-.05.212l2.175 3.65q.2-.05.425-.062T17 11q2.075 0 3.538 1.463T22 16t-1.463 3.538T17 21"></svg:path>`,
})
export class MaterialSymbolsWebhookRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeekendIcon],svg[material-symbols-weekend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-1.25 0-2.125-.875T1 17v-5q0-.825.588-1.412T3 10t1.413.588T5 12v4h14v-4q0-.825.588-1.412T21 10t1.413.588T23 12v5q0 1.25-.875 2.125T20 20zm3-6v-2q0-1.325-.862-2.325T4 8.3V7q0-1.25.875-2.125T7 4h10q1.25 0 2.125.875T20 7v1.3q-1.325.275-2.162 1.313T17 12v2z"></svg:path>`,
})
export class MaterialSymbolsWeekendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeekendOutlineIcon],svg[material-symbols-weekend-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7q0-1.25.875-2.125T7 4h10q1.25 0 2.125.875T20 7v2q1.25 0 2.125.875T23 12v5q0 1.25-.875 2.125T20 20H4q-1.25 0-2.125-.875T1 17v-5q0-1.25.875-2.125T4 9zm2 0v2.8q.45.425.725.975T7 12v2h10v-2q0-.675.275-1.225T18 9.8V7q0-.425-.288-.712T17 6H7q-.425 0-.712.288T6 7m13 9H5v-4q0-.2-.075-.387t-.213-.325t-.325-.213T4 11q-.425 0-.713.288T3 12v5q0 .425.288.713T4 18h16q.425 0 .713-.288T21 17v-5q0-.425-.288-.712T20 11q-.2 0-.387.075t-.325.213t-.213.324T19 12zm-7-2"></svg:path>`,
})
export class MaterialSymbolsWeekendOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeekendOutlineSharpIcon],svg[material-symbols-weekend-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 20V9h3V4h16v5h3v11zm6-6h10V9h1V6H6v3h1zm-4 4h18v-7h-2v5H5v-5H3zm9-2"></svg:path>`,
})
export class MaterialSymbolsWeekendOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeekendSharpIcon],svg[material-symbols-weekend-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 20V10h4v6h14v-6h4v10zm6-6V8H4V4h16v4h-3v6z"></svg:path>`,
})
export class MaterialSymbolsWeekendSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeightIcon],svg[material-symbols-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7q.425 0 .713-.288T13 6t-.288-.712T12 5t-.712.288T11 6t.288.713T12 7m2.825 0h1.75q.75 0 1.3.5t.675 1.225l1.425 10q.125.9-.462 1.588T18 21H6q-.925 0-1.513-.687t-.462-1.588l1.425-10Q5.575 8 6.125 7.5t1.3-.5h1.75q-.075-.25-.125-.487T9 6q0-1.25.875-2.125T12 3t2.125.875T15 6q0 .275-.05.513T14.825 7"></svg:path>`,
})
export class MaterialSymbolsWeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeightOutlineIcon],svg[material-symbols-weight-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19h12L16.575 9h-9.15zm6-12q.425 0 .713-.288T13 6t-.288-.712T12 5t-.712.288T11 6t.288.713T12 7m2.825 0h1.75q.75 0 1.3.5t.675 1.225l1.425 10q.125.9-.462 1.588T18 21H6q-.925 0-1.513-.687t-.462-1.588l1.425-10Q5.575 8 6.125 7.5t1.3-.5h1.75q-.075-.25-.125-.487T9 6q0-1.25.875-2.125T12 3t2.125.875T15 6q0 .275-.05.513T14.825 7M6 19h12z"></svg:path>`,
})
export class MaterialSymbolsWeightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeightOutlineSharpIcon],svg[material-symbols-weight-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19h12L16.575 9h-9.15zm6-12q.425 0 .713-.288T13 6t-.288-.712T12 5t-.712.288T11 6t.288.713T12 7M3.7 21l2-14h3.475q-.075-.25-.125-.488T9 6q0-1.25.875-2.125T12 3t2.125.875T15 6q0 .275-.05.513T14.825 7H18.3l2 14zM6 19h12z"></svg:path>`,
})
export class MaterialSymbolsWeightOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeightSharpIcon],svg[material-symbols-weight-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7q.425 0 .713-.288T13 6t-.288-.712T12 5t-.712.288T11 6t.288.713T12 7M3.7 21l2-14h3.475q-.075-.25-.125-.488T9 6q0-1.25.875-2.125T12 3t2.125.875T15 6q0 .275-.05.513T14.825 7H18.3l2 14z"></svg:path>`,
})
export class MaterialSymbolsWeightSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWestIcon],svg[material-symbols-west-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 19l-7-7l7-7l1.4 1.4L5.825 11H22v2H5.825l4.6 4.6z"></svg:path>`,
})
export class MaterialSymbolsWestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWestRoundedIcon],svg[material-symbols-west-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.825 13H21q.425 0 .713-.288T22 12t-.288-.712T21 11H5.825L9.7 7.1q.275-.275.288-.687T9.7 5.7q-.275-.275-.7-.275t-.7.275l-5.6 5.6q-.15.15-.213.325T2.426 12t.063.375t.212.325l5.6 5.6q.275.275.688.275T9.7 18.3q.3-.3.3-.712t-.3-.713z"></svg:path>`,
})
export class MaterialSymbolsWestRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWhatshotIcon],svg[material-symbols-whatshot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.5 0-4.587-1.1T3.95 17.95l4.1-4.1l3 2.5L16 11.4V14h2V8h-6v2h2.6l-3.65 3.65l-3-2.5L2.9 16.2q-.425-.95-.662-2.013T2 12q0-2.075.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsWhatshotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWhatshotOutlineIcon],svg[material-symbols-whatshot-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-1.65 0-3.187-.513T6 20l1.45-1.45q1.05.725 2.2 1.088T12 20q3.325 0 5.663-2.337T20 12t-2.337-5.663T12 4T6.337 6.338T4 12H2q0-2.075.788-3.9t2.137-3.175T8.1 2.788T12 2t3.888.788t3.174 2.15t2.15 3.175T22 12q0 2.05-.788 3.875t-2.15 3.188t-3.175 2.15T12 22m-8.025-4.075L8.05 13.85l3 2.5L16 11.4V14h2V8h-6v2h2.6l-3.65 3.65l-3-2.5l-5.025 5.025q.275.575.488.938t.562.812M12 12"></svg:path>`,
})
export class MaterialSymbolsWhatshotOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWhatshotOutlineRoundedIcon],svg[material-symbols-whatshot-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.05 11q.375-3.8 3.2-6.4T12 2q2.075 0 3.888.788t3.174 2.15t2.15 3.175T22 12q0 2.05-.788 3.875t-2.15 3.188t-3.175 2.15T12 22q-1.325 0-2.575-.325T7.05 20.7q-.45-.25-.5-.725t.35-.875q.225-.225.575-.275t.625.125q.925.5 1.9.775T12 20q3.325 0 5.663-2.338T20 12t-2.337-5.663T12 4Q8.925 4 6.675 6.013T4.05 11q-.05.425-.337.713T3 12t-.712-.3t-.238-.7m13.95.4V13q0 .425.288.713T17 14t.713-.288T18 13V9q0-.425-.288-.712T17 8h-4q-.425 0-.712.288T12 9t.288.713T13 10h1.6l-3.65 3.65l-2.3-1.925q-.3-.25-.687-.225t-.663.3l-3.825 3.825q-.25.25-.288.588t.138.637q.25.425.725.475t.825-.3L8.05 13.85l2.3 1.925q.3.25.688.225t.662-.3z"></svg:path>`,
})
export class MaterialSymbolsWhatshotOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWhatshotRoundedIcon],svg[material-symbols-whatshot-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.5 0-4.587-1.1T3.95 17.95l4.1-4.1l2.3 1.925q.3.25.688.225t.662-.3l4.3-4.3V13q0 .425.288.712T17 14t.713-.288T18 13V9q0-.425-.288-.712T17 8h-4q-.425 0-.712.288T12 9t.288.713T13 10h1.6l-3.65 3.65l-2.3-1.925q-.3-.25-.687-.225t-.663.3l-4.4 4.4q-.425-.95-.662-2.013T2 12q0-2.075.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsWhatshotRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWheelchairPickupIcon],svg[material-symbols-wheelchair-pickup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 6q-.825 0-1.412-.587T4.5 4t.588-1.412T6.5 2t1.413.588T8.5 4t-.587 1.413T6.5 6M5 22v-7H3V9q0-.825.588-1.412T5 7h3q.825 0 1.413.588T10 9v1.95q-1.575.9-2.537 2.5T6.5 17q0 1.425.525 2.688T8.5 21.9v.1zm8.5 0q-2.075 0-3.537-1.463T8.5 17q0-1.675.988-2.963T12 12.25v2.175q-.675.4-1.088 1.075T10.5 17q0 1.25.875 2.125T13.5 20t2.125-.875T16.5 17h2q0 2.075-1.463 3.538T13.5 22m7.425-2.3L18.45 16H13V8h2v6h4.55l3.05 4.6z"></svg:path>`,
})
export class MaterialSymbolsWheelchairPickupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWheelchairPickupRoundedIcon],svg[material-symbols-wheelchair-pickup-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 6q-.825 0-1.412-.587T4.5 4t.588-1.412T6.5 2t1.413.588T8.5 4t-.587 1.413T6.5 6M5 21v-6H4q-.425 0-.712-.288T3 14V9q0-.825.588-1.412T5 7h3q.825 0 1.413.588T10 9v1.95q-1.575.9-2.537 2.5T6.5 17q0 1.425.525 2.688T8.5 21.9v.1H6q-.425 0-.712-.288T5 21m8.5 1q-2.075 0-3.537-1.463T8.5 17q0-1.675.988-2.963T12 12.25v2.175q-.675.4-1.088 1.075T10.5 17q0 1.25.875 2.125T13.5 20t2.125-.875T16.5 17h2q0 2.075-1.463 3.538T13.5 22m6.875-3.125L18.45 16H15q-.825 0-1.412-.587T13 14V9q0-.425.288-.712T14 8t.713.288T15 9v5h3.475q.5 0 .95.238t.725.662l1.9 2.875q.225.35.138.75t-.438.625t-.75.15t-.625-.425"></svg:path>`,
})
export class MaterialSymbolsWheelchairPickupRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWheelchairPickupSharpIcon],svg[material-symbols-wheelchair-pickup-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 6q-.825 0-1.412-.587T4.5 4t.588-1.412T6.5 2t1.413.588T8.5 4t-.587 1.413T6.5 6M5 22v-7H3V7h7v3.95q-1.575.9-2.537 2.5T6.5 17q0 1.425.525 2.688T8.5 21.9v.1zm8.5 0q-2.075 0-3.537-1.463T8.5 17q0-1.675.988-2.963T12 12.25v2.175q-.675.4-1.088 1.075T10.5 17q0 1.25.875 2.125T13.5 20t2.125-.875T16.5 17h2q0 2.075-1.463 3.538T13.5 22m7.425-2.3L18.45 16H13V8h2v6h4.55l3.05 4.6z"></svg:path>`,
})
export class MaterialSymbolsWheelchairPickupSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWhereToVoteIcon],svg[material-symbols-where-to-vote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.95 13.35L15.9 8.4l-1.425-1.425L10.95 10.5l-1.4-1.4l-1.425 1.425zM12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"></svg:path>`,
})
export class MaterialSymbolsWhereToVoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWhereToVoteOutlineIcon],svg[material-symbols-where-to-vote-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.95 13.35L15.9 8.4l-1.425-1.425L10.95 10.5l-1.4-1.4l-1.425 1.425zm1.05 6q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22m0-12"></svg:path>`,
})
export class MaterialSymbolsWhereToVoteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWhereToVoteOutlineRoundedIcon],svg[material-symbols-where-to-vote-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.95 10.5l-.7-.7q-.3-.3-.7-.3t-.7.3t-.3.713t.3.712l1.4 1.425q.3.3.7.3t.7-.3L15.2 9.1q.3-.3.3-.712t-.3-.713t-.712-.3t-.713.3zM12 19.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35m0 1.975q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762t-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 1.125-.437 2.363t-1.275 2.575T16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125M12 10"></svg:path>`,
})
export class MaterialSymbolsWhereToVoteOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWhereToVoteRoundedIcon],svg[material-symbols-where-to-vote-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.95 10.5l-.7-.7q-.3-.3-.7-.3t-.7.3t-.3.713t.3.712l1.4 1.425q.3.3.7.3t.7-.3L15.2 9.1q.3-.3.3-.712t-.3-.713t-.712-.3t-.713.3zm9.05-.3q0 1.125-.437 2.363t-1.275 2.574T16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125t-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762t-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2"></svg:path>`,
})
export class MaterialSymbolsWhereToVoteRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWhiteboardIcon],svg[material-symbols-whiteboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18v-5l9.95-9.95Q16 2 17.45 2t2.5 1.05Q21 4.1 21 5.55t-1.05 2.5L10 18Zm2-2h2.175l9.375-9.375q.45-.45.45-1.088q0-.637-.45-1.087Q18.1 4 17.462 4q-.637 0-1.087.45L7 13.825Zm-4 6v-2h18v2Z"></svg:path>`,
})
export class MaterialSymbolsWhiteboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidgetMediumIcon],svg[material-symbols-widget-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22v-6h6v6zm7 0v-6h6v6zm7 0v-6h6v6zM2 15V9h6v6zm7 0V9h6v6zm7 0V9h6v6zM2 8V2h13v6zm14 0V2h6v6z"></svg:path>`,
})
export class MaterialSymbolsWidgetMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidgetMediumOutlineIcon],svg[material-symbols-widget-medium-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22v-6h6v6zm7 0v-6h6v6zm7 0v-6h6v6zM2 15V9h6v6zm7 0V9h6v6zm7 0V9h6v6zM2 8V2h13v6zm14 0V2h6v6zm-5 10h2zm-5-5v-2zm12 0v-2zM4 20h2v-2H4zm7 0h2v-2h-2zm7 0h2v-2h-2zM4 13h2v-2H4zm7 0h2v-2h-2zm7 0h2v-2h-2zm0-7h2V4h-2z"></svg:path>`,
})
export class MaterialSymbolsWidgetMediumOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidgetMediumOutlineRoundedIcon],svg[material-symbols-widget-medium-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7V3q0-.425.288-.712T3 2h11q.425 0 .713.288T15 3v4q0 .425-.288.713T14 8H3q-.425 0-.712-.288T2 7m0 14v-4q0-.425.288-.712T3 16h4q.425 0 .713.288T8 17v4q0 .425-.288.713T7 22H3q-.425 0-.712-.288T2 21m7 0v-4q0-.425.288-.712T10 16h4q.425 0 .713.288T15 17v4q0 .425-.288.713T14 22h-4q-.425 0-.712-.288T9 21m7 0v-4q0-.425.288-.712T17 16h4q.425 0 .713.288T22 17v4q0 .425-.288.713T21 22h-4q-.425 0-.712-.288T16 21M2 14v-4q0-.425.288-.712T3 9h4q.425 0 .713.288T8 10v4q0 .425-.288.713T7 15H3q-.425 0-.712-.288T2 14m7 0v-4q0-.425.288-.712T10 9h4q.425 0 .713.288T15 10v4q0 .425-.288.713T14 15h-4q-.425 0-.712-.288T9 14m7 0v-4q0-.425.288-.712T17 9h4q.425 0 .713.288T22 10v4q0 .425-.288.713T21 15h-4q-.425 0-.712-.288T16 14m-5 4h2zm-5-5v-2zm12 0v-2zM4 20h2v-2H4zm7 0h2v-2h-2zm7 0h2v-2h-2zM4 13h2v-2H4zm7 0h2v-2h-2zm7 0h2v-2h-2zm-2-6V3q0-.425.288-.712T17 2h4q.425 0 .713.288T22 3v4q0 .425-.288.713T21 8h-4q-.425 0-.712-.288T16 7m2-1h2V4h-2z"></svg:path>`,
})
export class MaterialSymbolsWidgetMediumOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidgetMediumRoundedIcon],svg[material-symbols-widget-medium-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8q-.425 0-.712-.288T2 7V3q0-.425.288-.712T3 2h11q.425 0 .713.288T15 3v4q0 .425-.288.713T14 8zm0 14q-.425 0-.712-.288T2 21v-4q0-.425.288-.712T3 16h4q.425 0 .713.288T8 17v4q0 .425-.288.713T7 22zm7 0q-.425 0-.712-.288T9 21v-4q0-.425.288-.712T10 16h4q.425 0 .713.288T15 17v4q0 .425-.288.713T14 22zm7 0q-.425 0-.712-.288T16 21v-4q0-.425.288-.712T17 16h4q.425 0 .713.288T22 17v4q0 .425-.288.713T21 22zM3 15q-.425 0-.712-.288T2 14v-4q0-.425.288-.712T3 9h4q.425 0 .713.288T8 10v4q0 .425-.288.713T7 15zm7 0q-.425 0-.712-.288T9 14v-4q0-.425.288-.712T10 9h4q.425 0 .713.288T15 10v4q0 .425-.288.713T14 15zm7 0q-.425 0-.712-.288T16 14v-4q0-.425.288-.712T17 9h4q.425 0 .713.288T22 10v4q0 .425-.288.713T21 15zm0-7q-.425 0-.712-.288T16 7V3q0-.425.288-.712T17 2h4q.425 0 .713.288T22 3v4q0 .425-.288.713T21 8z"></svg:path>`,
})
export class MaterialSymbolsWidgetMediumRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidgetSmallIcon],svg[material-symbols-widget-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22v-6h6v6zm7 0v-6h6v6zm7 0v-6h6v6zM2 15V9h6v6zm7 0V9h6v6zm7 0V9h6v6zM2 8V2h6v6zm7 0V2h6v6zm7 0V2h6v6z"></svg:path>`,
})
export class MaterialSymbolsWidgetSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidgetSmallOutlineIcon],svg[material-symbols-widget-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22v-6h6v6zm7 0v-6h6v6zm7 0v-6h6v6zM2 15V9h6v6zm7 0V9h6v6zm7 0V9h6v6zM2 8V2h6v6zm7 0V2h6v6zm7 0V2h6v6zm-5 10h2zm-5-5v-2zm12 0v-2zm-7-7h2zM4 20h2v-2H4zm7 0h2v-2h-2zm7 0h2v-2h-2zM4 13h2v-2H4zm7 0h2v-2h-2zm7 0h2v-2h-2zm-7-7h2V4h-2zm7 0h2V4h-2z"></svg:path>`,
})
export class MaterialSymbolsWidgetSmallOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidgetSmallOutlineRoundedIcon],svg[material-symbols-widget-small-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21v-4q0-.425.288-.712T3 16h4q.425 0 .713.288T8 17v4q0 .425-.288.713T7 22H3q-.425 0-.712-.288T2 21m7 0v-4q0-.425.288-.712T10 16h4q.425 0 .713.288T15 17v4q0 .425-.288.713T14 22h-4q-.425 0-.712-.288T9 21m7 0v-4q0-.425.288-.712T17 16h4q.425 0 .713.288T22 17v4q0 .425-.288.713T21 22h-4q-.425 0-.712-.288T16 21M2 14v-4q0-.425.288-.712T3 9h4q.425 0 .713.288T8 10v4q0 .425-.288.713T7 15H3q-.425 0-.712-.288T2 14m7 0v-4q0-.425.288-.712T10 9h4q.425 0 .713.288T15 10v4q0 .425-.288.713T14 15h-4q-.425 0-.712-.288T9 14m7 0v-4q0-.425.288-.712T17 9h4q.425 0 .713.288T22 10v4q0 .425-.288.713T21 15h-4q-.425 0-.712-.288T16 14M2 7V3q0-.425.288-.712T3 2h4q.425 0 .713.288T8 3v4q0 .425-.288.713T7 8H3q-.425 0-.712-.288T2 7m7 0V3q0-.425.288-.712T10 2h4q.425 0 .713.288T15 3v4q0 .425-.288.713T14 8h-4q-.425 0-.712-.288T9 7m7 0V3q0-.425.288-.712T17 2h4q.425 0 .713.288T22 3v4q0 .425-.288.713T21 8h-4q-.425 0-.712-.288T16 7m-5 11h2zm-5-5v-2zm12 0v-2zm-7-7h2zM4 20h2v-2H4zm7 0h2v-2h-2zm7 0h2v-2h-2zM4 13h2v-2H4zm7 0h2v-2h-2zm7 0h2v-2h-2zm-7-7h2V4h-2zm7 0h2V4h-2z"></svg:path>`,
})
export class MaterialSymbolsWidgetSmallOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidgetSmallRoundedIcon],svg[material-symbols-widget-small-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22q-.425 0-.712-.288T2 21v-4q0-.425.288-.712T3 16h4q.425 0 .713.288T8 17v4q0 .425-.288.713T7 22zm7 0q-.425 0-.712-.288T9 21v-4q0-.425.288-.712T10 16h4q.425 0 .713.288T15 17v4q0 .425-.288.713T14 22zm7 0q-.425 0-.712-.288T16 21v-4q0-.425.288-.712T17 16h4q.425 0 .713.288T22 17v4q0 .425-.288.713T21 22zM3 15q-.425 0-.712-.288T2 14v-4q0-.425.288-.712T3 9h4q.425 0 .713.288T8 10v4q0 .425-.288.713T7 15zm7 0q-.425 0-.712-.288T9 14v-4q0-.425.288-.712T10 9h4q.425 0 .713.288T15 10v4q0 .425-.288.713T14 15zm7 0q-.425 0-.712-.288T16 14v-4q0-.425.288-.712T17 9h4q.425 0 .713.288T22 10v4q0 .425-.288.713T21 15zM3 8q-.425 0-.712-.288T2 7V3q0-.425.288-.712T3 2h4q.425 0 .713.288T8 3v4q0 .425-.288.713T7 8zm7 0q-.425 0-.712-.288T9 7V3q0-.425.288-.712T10 2h4q.425 0 .713.288T15 3v4q0 .425-.288.713T14 8zm7 0q-.425 0-.712-.288T16 7V3q0-.425.288-.712T17 2h4q.425 0 .713.288T22 3v4q0 .425-.288.713T21 8z"></svg:path>`,
})
export class MaterialSymbolsWidgetSmallRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidgetWidthIcon],svg[material-symbols-widget-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22v-6h6v6zm7 0v-6h6v6zm7 0v-6h6v6zM2 15V9h6v6zm7 0V9h6v6zm7 0V9h6v6zM2 8V2h20v6z"></svg:path>`,
})
export class MaterialSymbolsWidgetWidthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidgetWidthOutlineIcon],svg[material-symbols-widget-width-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22v-6h6v6zm7 0v-6h6v6zm7 0v-6h6v6zM2 15V9h6v6zm7 0V9h6v6zm7 0V9h6v6zM2 8V2h20v6zm9 10h2zm-5-5v-2zm12 0v-2zM4 20h2v-2H4zm7 0h2v-2h-2zm7 0h2v-2h-2zM4 13h2v-2H4zm7 0h2v-2h-2zm7 0h2v-2h-2z"></svg:path>`,
})
export class MaterialSymbolsWidgetWidthOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidgetWidthOutlineRoundedIcon],svg[material-symbols-widget-width-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7V3q0-.425.288-.712T3 2h18q.425 0 .713.288T22 3v4q0 .425-.288.713T21 8H3q-.425 0-.712-.288T2 7m0 14v-4q0-.425.288-.712T3 16h4q.425 0 .713.288T8 17v4q0 .425-.288.713T7 22H3q-.425 0-.712-.288T2 21m7 0v-4q0-.425.288-.712T10 16h4q.425 0 .713.288T15 17v4q0 .425-.288.713T14 22h-4q-.425 0-.712-.288T9 21m7 0v-4q0-.425.288-.712T17 16h4q.425 0 .713.288T22 17v4q0 .425-.288.713T21 22h-4q-.425 0-.712-.288T16 21M2 14v-4q0-.425.288-.712T3 9h4q.425 0 .713.288T8 10v4q0 .425-.288.713T7 15H3q-.425 0-.712-.288T2 14m7 0v-4q0-.425.288-.712T10 9h4q.425 0 .713.288T15 10v4q0 .425-.288.713T14 15h-4q-.425 0-.712-.288T9 14m7 0v-4q0-.425.288-.712T17 9h4q.425 0 .713.288T22 10v4q0 .425-.288.713T21 15h-4q-.425 0-.712-.288T16 14m-5 4h2zm-5-5v-2zm12 0v-2zM4 20h2v-2H4zm7 0h2v-2h-2zm7 0h2v-2h-2zM4 13h2v-2H4zm7 0h2v-2h-2zm7 0h2v-2h-2z"></svg:path>`,
})
export class MaterialSymbolsWidgetWidthOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidgetWidthRoundedIcon],svg[material-symbols-widget-width-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8q-.425 0-.712-.288T2 7V3q0-.425.288-.712T3 2h18q.425 0 .713.288T22 3v4q0 .425-.288.713T21 8zm0 14q-.425 0-.712-.288T2 21v-4q0-.425.288-.712T3 16h4q.425 0 .713.288T8 17v4q0 .425-.288.713T7 22zm7 0q-.425 0-.712-.288T9 21v-4q0-.425.288-.712T10 16h4q.425 0 .713.288T15 17v4q0 .425-.288.713T14 22zm7 0q-.425 0-.712-.288T16 21v-4q0-.425.288-.712T17 16h4q.425 0 .713.288T22 17v4q0 .425-.288.713T21 22zM3 15q-.425 0-.712-.288T2 14v-4q0-.425.288-.712T3 9h4q.425 0 .713.288T8 10v4q0 .425-.288.713T7 15zm7 0q-.425 0-.712-.288T9 14v-4q0-.425.288-.712T10 9h4q.425 0 .713.288T15 10v4q0 .425-.288.713T14 15zm7 0q-.425 0-.712-.288T16 14v-4q0-.425.288-.712T17 9h4q.425 0 .713.288T22 10v4q0 .425-.288.713T21 15z"></svg:path>`,
})
export class MaterialSymbolsWidgetWidthRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidgetsIcon],svg[material-symbols-widgets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.65 13L11 7.35l5.65-5.65l5.65 5.65zM3 11V3h8v8zm10 10v-8h8v8zM3 21v-8h8v8z"></svg:path>`,
})
export class MaterialSymbolsWidgetsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidgetsOutlineIcon],svg[material-symbols-widgets-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.65 13L11 7.35l5.65-5.65l5.65 5.65zM3 11V3h8v8zm10 10v-8h8v8zM3 21v-8h8v8zM5 9h4V5H5zm11.675 1.2L19.5 7.375L16.675 4.55L13.85 7.375zM15 19h4v-4h-4zM5 19h4v-4H5zm10-4"></svg:path>`,
})
export class MaterialSymbolsWidgetsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidgetsOutlineRoundedIcon],svg[material-symbols-widgets-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.95 12.3L11.7 8.05q-.15-.15-.212-.325t-.063-.375t.063-.375t.212-.325l4.25-4.25q.15-.15.325-.212t.375-.063t.375.063t.325.212l4.25 4.25q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.25 4.25q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213M3 10V4q0-.425.288-.712T4 3h6q.425 0 .713.288T11 4v6q0 .425-.288.713T10 11H4q-.425 0-.712-.288T3 10m10 10v-6q0-.425.288-.712T14 13h6q.425 0 .713.288T21 14v6q0 .425-.288.713T20 21h-6q-.425 0-.712-.288T13 20M3 20v-6q0-.425.288-.712T4 13h6q.425 0 .713.288T11 14v6q0 .425-.288.713T10 21H4q-.425 0-.712-.288T3 20M5 9h4V5H5zm11.675 1.2L19.5 7.375L16.675 4.55L13.85 7.375zM15 19h4v-4h-4zM5 19h4v-4H5zm10-4"></svg:path>`,
})
export class MaterialSymbolsWidgetsOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidgetsRoundedIcon],svg[material-symbols-widgets-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.95 12.3L11.7 8.05q-.15-.15-.212-.325t-.063-.375t.063-.375t.212-.325l4.25-4.25q.15-.15.325-.212t.375-.063t.375.063t.325.212l4.25 4.25q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.25 4.25q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213M3 10V4q0-.425.288-.712T4 3h6q.425 0 .713.288T11 4v6q0 .425-.288.713T10 11H4q-.425 0-.712-.288T3 10m10 10v-6q0-.425.288-.712T14 13h6q.425 0 .713.288T21 14v6q0 .425-.288.713T20 21h-6q-.425 0-.712-.288T13 20M3 20v-6q0-.425.288-.712T4 13h6q.425 0 .713.288T11 14v6q0 .425-.288.713T10 21H4q-.425 0-.712-.288T3 20"></svg:path>`,
})
export class MaterialSymbolsWidgetsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidthIcon],svg[material-symbols-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 16l-4-4l4-4l1.425 1.4l-1.6 1.6h10.35L15.6 9.4L17 8l4 4l-4 4l-1.4-1.4l1.575-1.6H6.825L8.4 14.6z"></svg:path>`,
})
export class MaterialSymbolsWidthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidthFullIcon],svg[material-symbols-width-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h1V6H4zm15 0h1V6h-1z"></svg:path>`,
})
export class MaterialSymbolsWidthFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidthFullOutlineIcon],svg[material-symbols-width-full-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h1V6H4zm3 0h10V6H7zm12 0h1V6h-1zM7 6v12z"></svg:path>`,
})
export class MaterialSymbolsWidthFullOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidthFullOutlineSharpIcon],svg[material-symbols-width-full-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h20v16zm2-2h1V6H4zm3 0h10V6H7zm12 0h1V6h-1zM7 6v12z"></svg:path>`,
})
export class MaterialSymbolsWidthFullOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidthFullSharpIcon],svg[material-symbols-width-full-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h20v16zm2-2h1V6H4zm15 0h1V6h-1z"></svg:path>`,
})
export class MaterialSymbolsWidthFullSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidthNormalIcon],svg[material-symbols-width-normal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h4V6H4zm12 0h4V6h-4z"></svg:path>`,
})
export class MaterialSymbolsWidthNormalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidthNormalOutlineIcon],svg[material-symbols-width-normal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h4V6H4zm6 0h4V6h-4zm6 0h4V6h-4zm-6 0V6z"></svg:path>`,
})
export class MaterialSymbolsWidthNormalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidthNormalOutlineSharpIcon],svg[material-symbols-width-normal-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h20v16zm2-2h4V6H4zm6 0h4V6h-4zm6 0h4V6h-4zM10 6v12z"></svg:path>`,
})
export class MaterialSymbolsWidthNormalOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidthNormalSharpIcon],svg[material-symbols-width-normal-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h20v16zm2-2h4V6H4zm12 0h4V6h-4z"></svg:path>`,
})
export class MaterialSymbolsWidthNormalSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidthRoundedIcon],svg[material-symbols-width-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.825 13l.875.925q.275.275.275.688T7.7 15.3q-.3.3-.712.3t-.688-.3l-2.6-2.575q-.15-.15-.225-.337T3.4 12t.075-.375t.225-.325l2.6-2.6q.275-.275.688-.275T7.7 8.7q.3.3.3.713t-.3.712L6.825 11h10.35l-.9-.9Q16 9.825 16 9.413t.3-.713q.275-.275.688-.275t.712.275l2.575 2.6q.15.15.225.325t.075.375t-.075.387t-.225.338l-2.6 2.6q-.275.275-.687.275t-.713-.3Q16 15.025 16 14.613t.275-.688l.9-.925z"></svg:path>`,
})
export class MaterialSymbolsWidthRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidthWideIcon],svg[material-symbols-width-wide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h2V6H4zm14 0h2V6h-2z"></svg:path>`,
})
export class MaterialSymbolsWidthWideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidthWideOutlineIcon],svg[material-symbols-width-wide-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h2V6H4zm4 0h8V6H8zm10 0h2V6h-2zM8 6v12z"></svg:path>`,
})
export class MaterialSymbolsWidthWideOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidthWideOutlineSharpIcon],svg[material-symbols-width-wide-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h20v16zm2-2h2V6H4zm4 0h8V6H8zm10 0h2V6h-2zM8 6v12z"></svg:path>`,
})
export class MaterialSymbolsWidthWideOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidthWideSharpIcon],svg[material-symbols-width-wide-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h20v16zm2-2h2V6H4zm14 0h2V6h-2z"></svg:path>`,
})
export class MaterialSymbolsWidthWideSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiIcon],svg[material-symbols-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-1.05 0-1.775-.725T9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21m-5.65-5.65l-2.1-2.15q1.475-1.475 3.463-2.337T12 10t4.288.875t3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725T12 13t-3.1.625t-2.55 1.725M2.1 11.1L0 9q2.3-2.35 5.375-3.675T12 4t6.625 1.325T24 9l-2.1 2.1q-1.925-1.925-4.462-3.012T12 7T6.563 8.088T2.1 11.1"></svg:path>`,
})
export class MaterialSymbolsWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifi1BarIcon],svg[material-symbols-wifi-1-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-1.05 0-1.775-.725T9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21"></svg:path>`,
})
export class MaterialSymbolsWifi1BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifi1BarRoundedIcon],svg[material-symbols-wifi-1-bar-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-1.05 0-1.775-.725Q9.5 19.55 9.5 18.5q0-1.05.725-1.775Q10.95 16 12 16q1.05 0 1.775.725q.725.725.725 1.775q0 1.05-.725 1.775Q13.05 21 12 21Z"></svg:path>`,
})
export class MaterialSymbolsWifi1BarRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifi1BarSharpIcon],svg[material-symbols-wifi-1-bar-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 21l-3.525-3.55q.7-.7 1.613-1.075T12 16t1.913.375t1.612 1.075z"></svg:path>`,
})
export class MaterialSymbolsWifi1BarSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifi2BarIcon],svg[material-symbols-wifi-2-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-1.05 0-1.775-.725T9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21m-5.65-5.65l-2.1-2.15q1.475-1.475 3.463-2.337T12 10t4.288.875t3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725T12 13t-3.1.625t-2.55 1.725"></svg:path>`,
})
export class MaterialSymbolsWifi2BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifi2BarRoundedIcon],svg[material-symbols-wifi-2-bar-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-1.05 0-1.775-.725T9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21m0-8q-1.275 0-2.425.375t-2.1 1.025q-.5.35-1.125.325t-1.05-.45q-.425-.45-.425-1.062t.5-.988q1.375-1.05 3.063-1.638T12 10t3.563.6t3.062 1.65q.5.375.513.988T18.7 14.3q-.425.425-1.05.438t-1.125-.338q-.95-.65-2.1-1.025T12 13"></svg:path>`,
})
export class MaterialSymbolsWifi2BarRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifi2BarSharpIcon],svg[material-symbols-wifi-2-bar-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.35 15.35l-2.1-2.15q1.55-1.55 3.55-2.375T12 10t4.213.838t3.537 2.412l-2.1 2.1q-1.125-1.125-2.588-1.737T12 13t-3.062.613T6.35 15.35M12 21l-3.525-3.55q.7-.7 1.613-1.075T12 16t1.913.375t1.612 1.075z"></svg:path>`,
})
export class MaterialSymbolsWifi2BarSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiAddIcon],svg[material-symbols-wifi-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9l-2.475 2.475q-.575-.275-1.213-.413t-1.287-.137q-2.525 0-4.3 1.775T12.95 17q0 .65.138 1.288T13.5 19.5zm6 0v-3h-3v-2h3v-3h2v3h3v2h-3v3z"></svg:path>`,
})
export class MaterialSymbolsWifiAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiAddOutlineIcon],svg[material-symbols-wifi-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 21v-3h-3v-2h3v-3h2v3h3v2h-3v3zm-6 0L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9l-3.45 3.425q-.35-.35-.7-.712t-.7-.713l1.95-1.95q-1.975-1.5-4.3-2.275T12 6t-4.8.775T2.9 9.05l9.1 9.1l1-1l.713.713l.712.712zm0-8.925"></svg:path>`,
})
export class MaterialSymbolsWifiAddOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiAddOutlineRoundedIcon],svg[material-symbols-wifi-add-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18h-2q-.425 0-.712-.288T15 17t.288-.712T16 16h2v-2q0-.425.288-.712T19 13t.713.288T20 14v2h2q.425 0 .713.288T23 17t-.288.713T22 18h-2v2q0 .425-.288.713T19 21t-.712-.288T18 20zM12 4q2.825 0 5.463.888T22.3 7.5q.375.3.563.7t.187.85q0 .425-.162.812t-.488.713l-1.125 1.15q-.3.275-.712.288t-.713-.288t-.3-.712t.3-.713l1.25-1.25q-1.975-1.5-4.3-2.275T12 6t-4.8.775T2.9 9.05l9.1 9.1l.275-.275q.3-.3.713-.3t.712.3t.3.713t-.3.712l-.275.275q-.3.3-.675.45t-.75.15t-.75-.15t-.675-.45l-9-9q-.325-.325-.475-.7t-.15-.8t.175-.85t.55-.725q2.2-1.725 4.85-2.612T12 4m0 8.075"></svg:path>`,
})
export class MaterialSymbolsWifiAddOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiAddRoundedIcon],svg[material-symbols-wifi-add-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21q-.425 0-.712-.288T18 20v-2h-2q-.425 0-.712-.288T15 17t.288-.712T16 16h2v-2q0-.425.288-.712T19 13t.713.288T20 14v2h2q.425 0 .713.288T23 17t-.288.713T22 18h-2v2q0 .425-.288.713T19 21m-7-.65q-.3 0-.587-.112T10.9 19.9l-9.325-9.325q-.325-.325-.475-.7t-.15-.8t.175-.85t.55-.725q2.2-1.725 4.85-2.612T12 4t5.475.888t4.85 2.612q.375.275.55.7t.175.85t-.15.812t-.475.713l-.5.5q-.175.175-.425.238t-.475-.038q-.5-.175-1-.262t-1-.088q-2.525 0-4.3 1.775T12.95 17q0 .5.088 1t.262 1q.075.225.025.475t-.225.425q-.225.225-.512.338T12 20.35"></svg:path>`,
})
export class MaterialSymbolsWifiAddRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingIcon],svg[material-symbols-wifi-calling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M16.5 10.5l-5.525-5.55Q12.225 4 13.65 3.5T16.5 3q1.4 0 2.813.513T22 5z"></svg:path>`,
})
export class MaterialSymbolsWifiCallingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingBar1Icon],svg[material-symbols-wifi-calling-bar-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 11q-.425 0-.712-.288T15.5 10t.288-.712T16.5 9t.713.288t.287.712t-.288.713T16.5 11m3.45 10q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"></svg:path>`,
})
export class MaterialSymbolsWifiCallingBar1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingBar1OutlineIcon],svg[material-symbols-wifi-calling-bar-1-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 10.975q-.425 0-.712-.287t-.288-.713t.288-.712t.712-.288t.713.288t.287.712t-.288.713t-.712.287M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9m8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475zm0 0"></svg:path>`,
})
export class MaterialSymbolsWifiCallingBar1OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingBar1OutlineSharpIcon],svg[material-symbols-wifi-calling-bar-1-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21zM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.125.375 2.113T6.025 9m8.95 8.95q1 .425 2.013.675T19 18.95v-2.2l-2.35-.475zm1.525-6.975q-.425 0-.712-.287t-.288-.713t.288-.712t.712-.288t.713.288t.287.712t-.288.713t-.712.287"></svg:path>`,
})
export class MaterialSymbolsWifiCallingBar1OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingBar1RoundedIcon],svg[material-symbols-wifi-calling-bar-1-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M16.5 11q-.425 0-.712-.288T15.5 10t.288-.712T16.5 9t.713.288t.287.712t-.288.713T16.5 11"></svg:path>`,
})
export class MaterialSymbolsWifiCallingBar1RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingBar1SharpIcon],svg[material-symbols-wifi-calling-bar-1-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21zM16.5 11q-.425 0-.712-.288T15.5 10t.288-.712T16.5 9t.713.288t.287.712t-.288.713T16.5 11"></svg:path>`,
})
export class MaterialSymbolsWifiCallingBar1SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingBar2Icon],svg[material-symbols-wifi-calling-bar-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 11q-.425 0-.712-.288T15.5 10t.288-.712T16.5 9t.713.288t.287.712t-.288.713T16.5 11M14 8.55L12.95 7.5q.725-.725 1.638-1.112T16.5 6t1.913.388T20.05 7.5L19 8.55q-.5-.5-1.137-.775T16.5 7.5t-1.362.275T14 8.55M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"></svg:path>`,
})
export class MaterialSymbolsWifiCallingBar2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingBar2OutlineIcon],svg[material-symbols-wifi-calling-bar-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 10.975q-.425 0-.712-.287t-.288-.713t.288-.712t.712-.288t.713.288t.287.712t-.288.713t-.712.287M14 8.525l-1.05-1.05q.725-.725 1.638-1.112t1.912-.388t1.913.388t1.637 1.112L19 8.525q-.5-.5-1.137-.775T16.5 7.475t-1.362.275T14 8.525M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9m8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475zm0 0"></svg:path>`,
})
export class MaterialSymbolsWifiCallingBar2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingBar2OutlineRoundedIcon],svg[material-symbols-wifi-calling-bar-2-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 10.975q-.425 0-.712-.287t-.288-.713t.288-.712t.712-.288t.713.288t.287.712t-.288.713t-.712.287m0-3.5q-.525 0-1.012.15t-.913.425q-.275.175-.587.163T13.475 8q-.225-.225-.212-.525t.262-.5q.65-.5 1.413-.75t1.562-.25t1.563.25t1.412.75q.25.2.263.5T19.525 8q-.2.2-.512.213t-.588-.163q-.425-.275-.913-.425t-1.012-.15M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9m8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475zm0 0"></svg:path>`,
})
export class MaterialSymbolsWifiCallingBar2OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingBar2OutlineSharpIcon],svg[material-symbols-wifi-calling-bar-2-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 10.975q-.425 0-.712-.287t-.288-.713t.288-.712t.712-.288t.713.288t.287.712t-.288.713t-.712.287M14 8.525l-1.05-1.05q.725-.725 1.638-1.112t1.912-.388t1.913.388t1.637 1.112L19 8.525q-.5-.5-1.137-.775T16.5 7.475t-1.362.275T14 8.525M19.95 21q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21zM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.125.375 2.113T6.025 9m8.95 8.95q1 .425 2.013.675T19 18.95v-2.2l-2.35-.475zm0 0"></svg:path>`,
})
export class MaterialSymbolsWifiCallingBar2OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingBar2RoundedIcon],svg[material-symbols-wifi-calling-bar-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 11q-.425 0-.712-.288T15.5 10t.288-.712T16.5 9t.713.288t.287.712t-.288.713T16.5 11m0-3.5q-.525 0-1.012.15t-.913.425q-.275.175-.587.163t-.513-.213q-.225-.225-.212-.525t.262-.5q.65-.5 1.413-.75T16.5 6t1.563.25t1.412.75q.25.2.263.5t-.213.525q-.2.2-.512.213t-.588-.163Q18 7.8 17.512 7.65T16.5 7.5M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"></svg:path>`,
})
export class MaterialSymbolsWifiCallingBar2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingBar2SharpIcon],svg[material-symbols-wifi-calling-bar-2-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 11q-.425 0-.712-.288T15.5 10t.288-.712T16.5 9t.713.288t.287.712t-.288.713T16.5 11M14 8.55L12.95 7.5q.725-.725 1.638-1.112T16.5 6t1.913.388T20.05 7.5L19 8.55q-.5-.5-1.137-.775T16.5 7.5t-1.362.275T14 8.55M19.95 21q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21z"></svg:path>`,
})
export class MaterialSymbolsWifiCallingBar2SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingBar3Icon],svg[material-symbols-wifi-calling-bar-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 11q-.425 0-.712-.288T15.5 10t.288-.712T16.5 9t.713.288t.287.712t-.288.713T16.5 11M14 8.55L12.95 7.5q.725-.725 1.638-1.112T16.5 6t1.913.388T20.05 7.5L19 8.55q-.5-.5-1.137-.775T16.5 7.5t-1.362.275T14 8.55M11.9 6.4l-1.05-1.05q1.125-1.125 2.588-1.737T16.5 3t3.063.613T22.15 5.35L21.1 6.4q-.925-.925-2.113-1.412T16.5 4.5t-2.475.5T11.9 6.4M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"></svg:path>`,
})
export class MaterialSymbolsWifiCallingBar3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingBar3OutlineIcon],svg[material-symbols-wifi-calling-bar-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 10.975q-.425 0-.712-.287t-.288-.713t.288-.712t.712-.288t.713.288t.287.712t-.288.713t-.712.287M14 8.525l-1.05-1.05q.725-.725 1.638-1.112t1.912-.388t1.913.388t1.637 1.112L19 8.525q-.5-.5-1.137-.775T16.5 7.475t-1.362.275T14 8.525m-2.1-2.15l-1.05-1.05q1.125-1.125 2.588-1.737t3.062-.613t3.063.613t2.587 1.737l-1.05 1.05q-.925-.925-2.113-1.412T16.5 4.475t-2.475.5t-2.125 1.4M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9m8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475zm0 0"></svg:path>`,
})
export class MaterialSymbolsWifiCallingBar3OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingBar3OutlineRoundedIcon],svg[material-symbols-wifi-calling-bar-3-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 10.975q-.425 0-.712-.287t-.288-.713t.288-.712t.712-.288t.713.288t.287.712t-.288.713t-.712.287m0-3.5q-.525 0-1.012.15t-.913.425q-.275.175-.587.163T13.475 8q-.225-.225-.212-.525t.262-.5q.65-.5 1.413-.75t1.562-.25t1.563.25t1.412.75q.25.2.263.5T19.525 8q-.2.2-.512.213t-.588-.163q-.425-.275-.913-.425t-1.012-.15m0-3q-1.125 0-2.137.363t-1.888 1.037q-.275.2-.575.2t-.525-.225t-.225-.525t.25-.5q1.075-.875 2.375-1.362t2.725-.488t2.725.488T21.6 4.825q.25.2.25.5t-.225.525t-.537.213t-.563-.213q-.875-.675-1.887-1.025t-2.138-.35M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9m8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475zm0 0"></svg:path>`,
})
export class MaterialSymbolsWifiCallingBar3OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingBar3OutlineSharpIcon],svg[material-symbols-wifi-calling-bar-3-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21zM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.125.375 2.113T6.025 9m8.95 8.95q1 .425 2.013.675T19 18.95v-2.2l-2.35-.475zm1.525-6.975q-.425 0-.712-.287t-.288-.713t.288-.712t.712-.288t.713.288t.287.712t-.288.713t-.712.287M14 8.525l-1.05-1.05q.725-.725 1.638-1.112t1.912-.388t1.913.388t1.637 1.112L19 8.525q-.5-.5-1.137-.775T16.5 7.475t-1.362.275T14 8.525m-2.1-2.15l-1.05-1.05q1.125-1.125 2.588-1.737t3.062-.613t3.063.613t2.587 1.737l-1.05 1.05q-.925-.925-2.113-1.412T16.5 4.475t-2.475.5t-2.125 1.4"></svg:path>`,
})
export class MaterialSymbolsWifiCallingBar3OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingBar3RoundedIcon],svg[material-symbols-wifi-calling-bar-3-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M16.5 11q-.425 0-.712-.288T15.5 10t.288-.712T16.5 9t.713.288t.287.712t-.288.713T16.5 11m0-3.5q-.525 0-1.012.15t-.913.425q-.275.175-.587.163t-.513-.213q-.225-.225-.212-.525t.262-.5q.65-.5 1.413-.75T16.5 6t1.563.25t1.412.75q.25.2.263.5t-.213.525q-.2.2-.512.213t-.588-.163Q18 7.8 17.512 7.65T16.5 7.5m0-3q-1.125 0-2.137.363T12.475 5.9q-.275.2-.575.2t-.525-.225t-.225-.525t.25-.5q1.075-.875 2.375-1.362T16.5 3t2.725.488T21.6 4.85q.25.2.25.5t-.225.525t-.537.213t-.563-.213Q19.65 5.2 18.638 4.85T16.5 4.5"></svg:path>`,
})
export class MaterialSymbolsWifiCallingBar3RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingBar3SharpIcon],svg[material-symbols-wifi-calling-bar-3-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21zM16.5 11q-.425 0-.712-.288T15.5 10t.288-.712T16.5 9t.713.288t.287.712t-.288.713T16.5 11M14 8.55L12.95 7.5q.725-.725 1.638-1.112T16.5 6t1.913.388T20.05 7.5L19 8.55q-.5-.5-1.137-.775T16.5 7.5t-1.362.275T14 8.55M11.9 6.4l-1.05-1.05q1.125-1.125 2.588-1.737T16.5 3t3.063.613T22.15 5.35L21.1 6.4q-.925-.925-2.113-1.412T16.5 4.5t-2.475.5T11.9 6.4"></svg:path>`,
})
export class MaterialSymbolsWifiCallingBar3SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingOutlineIcon],svg[material-symbols-wifi-calling-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.5 10.5l-5.525-5.55Q12.225 4 13.65 3.5T16.5 3q1.4 0 2.813.513T22 5zm0-2.85l2.225-2.2q-.45-.225-1.012-.337T16.5 5q-.675 0-1.237.113t-1.013.312zM19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9m8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475zm0 0"></svg:path>`,
})
export class MaterialSymbolsWifiCallingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingOutlineRoundedIcon],svg[material-symbols-wifi-calling-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.8 9.8l-3.975-3.975q-.35-.35-.3-.825T12 4.275q1.05-.65 2.2-.962T16.5 3q1.125 0 2.25.325t2.2.975q.425.275.488.738t-.288.812L17.2 9.8q-.3.3-.7.3t-.7-.3m.7-2.15l2.225-2.2q-.45-.225-1.012-.337T16.5 5q-.675 0-1.237.113t-1.013.312zM19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9m8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475zm0 0"></svg:path>`,
})
export class MaterialSymbolsWifiCallingOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingOutlineSharpIcon],svg[material-symbols-wifi-calling-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21zM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.125.375 2.113T6.025 9m8.95 8.95q1 .425 2.013.675T19 18.95v-2.2l-2.35-.475zM16.5 10.5l-5.525-5.55Q12.225 4 13.65 3.5T16.5 3q1.4 0 2.813.513T22 5zm0-2.85l2.225-2.2q-.45-.225-1.012-.337T16.5 5q-.675 0-1.237.113t-1.013.312zm0 0"></svg:path>`,
})
export class MaterialSymbolsWifiCallingOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingRoundedIcon],svg[material-symbols-wifi-calling-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M15.8 9.8l-3.975-3.975q-.35-.35-.3-.825T12 4.275q1.05-.65 2.2-.962T16.5 3q1.125 0 2.25.325t2.2.975q.425.275.488.738t-.288.812L17.2 9.8q-.3.3-.7.3t-.7-.3"></svg:path>`,
})
export class MaterialSymbolsWifiCallingRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingSharpIcon],svg[material-symbols-wifi-calling-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21zM16.5 10.5l-5.525-5.55Q12.225 4 13.65 3.5T16.5 3q1.4 0 2.813.513T22 5z"></svg:path>`,
})
export class MaterialSymbolsWifiCallingSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiChannelIcon],svg[material-symbols-wifi-channel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21q.275-2.175.763-4.762T5 11.6q.65-1.725 1.4-2.662T8 8q.5 0 1 .35t.975 1.075t.888 1.75t.737 2.4q.325-2.575.75-4.537t.975-3.313t1.213-2.037T16 3q1.075 0 1.925 1.275T19.4 7.9q.775 2.9 1.125 6.5T21 21h-2q-.45-2.2-1.4-4.1T16 15t-1.612 1.9T13 21h-2q-.2-1.8-.537-3.537T9.7 14.224t-.85-2.587T8 10.125q-.425.425-.85 1.5T6.3 14.2t-.762 3.238T5 21zm10.5-6.5q.575-.725 1.2-1.112T16 13t1.3.388t1.2 1.112q-.225-1.9-.513-3.488t-.612-2.837t-.675-2.05T16 5.05q-.35.275-.7 1.075t-.675 2.05t-.612 2.838T13.5 14.5"></svg:path>`,
})
export class MaterialSymbolsWifiChannelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiChannelOutlineIcon],svg[material-symbols-wifi-channel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21q.35-2.9.85-5.288t1.138-4.1t1.4-2.662T8 8q1 0 1.975 1.425t1.625 4.15q.325-2.55.75-4.525t.975-3.325t1.213-2.038T16 3q1.075 0 1.925 1.275T19.4 7.9t1.025 5.675T21 21h-2q-.45-2.2-1.4-4.1T16 15t-1.612 1.9T13 21h-2q-.2-1.775-.537-3.537t-.75-3.238t-.85-2.563T8 10.125q-.4.45-.85 1.525t-.862 2.55t-.75 3.238T5 21zm10.5-6.5q.575-.725 1.2-1.112T16 13t1.3.388t1.2 1.112q-.45-3.8-1.125-6.337T16 5.05q-.7.575-1.375 3.113T13.5 14.5"></svg:path>`,
})
export class MaterialSymbolsWifiChannelOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiChannelOutlineRoundedIcon],svg[material-symbols-wifi-channel-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21q-.4 0-.663-.3t-.212-.7q.275-2.05.738-4.325T5 11.6q.65-1.8 1.413-2.7T8 8q.525 0 1.038.388t.987 1.112t.875 1.763t.7 2.312q.35-2.65.775-4.625t.975-3.3t1.213-1.988T16 3q1.05 0 1.9 1.225T19.4 7.9q.7 2.65 1.05 5.925t.5 6.15q.025.425-.25.725t-.7.3t-.763-.275t-.462-.7q-.225-.825-.525-1.625t-.65-1.5q-.45-.9-.862-1.4T16 15q-.45 0-.937.75t-.688 1.175q-.325.65-.612 1.425t-.513 1.625q-.125.45-.475.738T12 21t-.75-.3t-.375-.75q-.25-1.7-.575-3.287t-.725-2.913t-.8-2.275T8 10.125q-.425.45-.85 1.513T6.3 14.2q-.35 1.275-.662 2.75T5.125 20q-.05.425-.375.713T4 21m9.5-6.5q.575-.75 1.213-1.125T16 13t1.288.375T18.5 14.5q-.225-1.875-.513-3.475t-.612-2.85t-.675-2.05T16 5.05q-.35.275-.7 1.075t-.675 2.05t-.612 2.85T13.5 14.5"></svg:path>`,
})
export class MaterialSymbolsWifiChannelOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiChannelRoundedIcon],svg[material-symbols-wifi-channel-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21q-.4 0-.663-.3t-.212-.7q.275-2.05.738-4.325T5 11.6q.65-1.8 1.413-2.7T8 8q.525 0 1.038.388t.987 1.112t.875 1.763t.7 2.312q.325-2.625.775-4.587t1-3.313t1.2-2.012T16 3q1.05 0 1.9 1.225T19.4 7.9q.7 2.65 1.05 5.925t.5 6.15q.025.425-.25.725t-.7.3t-.763-.275t-.462-.7q-.225-.825-.525-1.625t-.65-1.5q-.45-.9-.862-1.4T16 15q-.275 0-.65.4t-.75 1.1t-.725 1.588t-.625 1.887q-.125.45-.475.737T12 21t-.75-.3t-.375-.75q-.25-1.7-.575-3.287t-.725-2.913t-.8-2.275T8 10.125q-.425.45-.85 1.513T6.3 14.2q-.35 1.275-.662 2.75T5.125 20q-.05.425-.375.713T4 21m9.5-6.5q.575-.75 1.2-1.125T16 13q.65 0 1.288.388T18.5 14.5q-.225-1.875-.513-3.475t-.612-2.85t-.675-2.05T16 5.05q-.35.275-.687 1.075t-.663 2.05t-.625 2.85T13.5 14.5"></svg:path>`,
})
export class MaterialSymbolsWifiChannelRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiFindIcon],svg[material-symbols-wifi-find-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21L0 8.975q2.325-2.325 5.388-3.65T12 4t6.613 1.325T24 8.975l-1.875 1.9Q21.375 9.6 20.063 8.8T17 8q-2.5 0-4.25 1.75T11 14q0 1.725.813 3.063t2.037 2.062zm9.6-1l-2.575-2.55q-.45.275-.95.413T17 18q-1.7 0-2.85-1.15T13 14t1.15-2.85T17 10t2.85 1.15T21 14q0 .575-.137 1.075t-.413.95L23 18.6zM17 16q.85 0 1.425-.575T19 14t-.575-1.425T17 12t-1.425.575T15 14t.575 1.425T17 16"></svg:path>`,
})
export class MaterialSymbolsWifiFindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiFindOutlineIcon],svg[material-symbols-wifi-find-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21L0 8.975q2.325-2.325 5.388-3.65T12 4t6.613 1.325T24 8.975L22.6 10.4q-2.025-2.025-4.75-3.213T12 6q-2.575 0-4.875.813t-4.2 2.262l10.475 10.5zm9.6-1l-2.575-2.55q-.45.275-.95.413T17 18q-1.7 0-2.85-1.15T13 14t1.15-2.85T17 10t2.85 1.15T21 14q0 .575-.137 1.075t-.413.95L23 18.6zM17 16q.85 0 1.425-.575T19 14t-.575-1.425T17 12t-1.425.575T15 14t.575 1.425T17 16m-5 3.575"></svg:path>`,
})
export class MaterialSymbolsWifiFindOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiFindOutlineRoundedIcon],svg[material-symbols-wifi-find-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.275 20.275L1.525 10.5q-.3-.3-.45-.7T.95 9t.175-.775t.5-.65q2.05-1.75 4.875-2.663T12 4q2.775 0 5.563.925t4.912 2.75q.3.275.463.613t.187.712t-.112.75t-.413.65q-2.025-2.025-4.75-3.213T12 6q-2.575 0-4.875.813t-4.2 2.262l9.775 9.8q.275.275.275.688t-.275.712q-.3.3-.712.3t-.713-.3M20.9 19.3l-1.875-1.85q-.45.275-.95.413T17 18q-1.7 0-2.85-1.15T13 14t1.15-2.85T17 10t2.85 1.15T21 14q0 .575-.137 1.075t-.413.95L22.3 17.9q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275M17 16q.85 0 1.425-.575T19 14t-.575-1.425T17 12t-1.425.575T15 14t.575 1.425T17 16m-5 3.575"></svg:path>`,
})
export class MaterialSymbolsWifiFindOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiFindRoundedIcon],svg[material-symbols-wifi-find-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.575 19.575l-9.05-9.05q-.325-.325-.462-.712T.95 9t.188-.8t.512-.65Q3.675 5.8 6.513 4.9T12 4q2.675 0 5.488.913t4.862 2.662q.35.275.513.663t.187.787t-.125.788t-.45.712l-.35.35Q21.375 9.6 20.063 8.8T17 8q-2.5 0-4.25 1.75T11 14q0 1.725.813 3.063t2.037 2.062l-.425.45q-.3.3-.663.438T12 20.15t-.763-.137t-.662-.438M20.9 19.3l-1.875-1.85q-.45.275-.95.413T17 18q-1.7 0-2.85-1.15T13 14t1.15-2.85T17 10t2.85 1.15T21 14q0 .575-.137 1.075t-.413.95L22.3 17.9q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275M17 16q.85 0 1.425-.575T19 14t-.575-1.425T17 12t-1.425.575T15 14t.575 1.425T17 16"></svg:path>`,
})
export class MaterialSymbolsWifiFindRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiHomeIcon],svg[material-symbols-wifi-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-9.375L2.2 12L1 10.4L12 2l11 8.4l-1.2 1.575l-1.8-1.35v.65q-.475-.15-.975-.212T18 11q-2.925 0-4.962 2.038T11 18q0 .5.075 1t.225 1zm13 3h-4v-1.5h1.425q-.65-.675-1.037-1.575T13 18q0-1.8 1.138-3.175T17 13.1v1.55q-1.1.325-1.8 1.238T14.5 18q0 .725.263 1.35t.737 1.1V19H17zm2-.1v-1.55q1.125-.35 1.813-1.263T21.5 18q0-.725-.262-1.35t-.738-1.1V17H19v-4h4v1.5h-1.425q.65.675 1.038 1.575T23 18q0 1.8-1.137 3.175T19 22.9"></svg:path>`,
})
export class MaterialSymbolsWifiHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiHomeOutlineIcon],svg[material-symbols-wifi-home-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-9.375L2.2 12L1 10.4L12 2l11 8.4l-1.2 1.575l-1.8-1.35l-8-6.1L6 9.1V18h5q0 .5.075 1t.225 1zm13 3h-4v-1.5h1.425q-.65-.675-1.037-1.575T13 18q0-1.8 1.138-3.175T17 13.1v1.55q-1.1.325-1.8 1.238T14.5 18q0 .725.263 1.35t.737 1.1V19H17zm2-.1v-1.55q1.125-.35 1.813-1.263T21.5 18q0-.725-.262-1.35t-.738-1.1V17H19v-4h4v1.5h-1.425q.65.675 1.038 1.575T23 18q0 1.8-1.137 3.175T19 22.9"></svg:path>`,
})
export class MaterialSymbolsWifiHomeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiHomeOutlineRoundedIcon],svg[material-symbols-wifi-home-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10.625L3 11.4q-.35.25-.75.2t-.65-.4t-.187-.75t.387-.65l8.975-6.875q.275-.2.588-.3t.637-.1t.638.1t.587.3l9 6.875q.325.25.375.663t-.2.737t-.65.375t-.725-.2L12 4.525L6 9.1V18h4q.425 0 .713.288T11 19t-.288.713T10 20H6q-.825 0-1.412-.587T4 18zM13.75 23q-.325 0-.537-.213T13 22.25t.213-.537t.537-.213h.675q-.65-.675-1.037-1.575T13 18q0-1.525.825-2.762T16 13.425q.275-.125.513 0t.362.4t.025.563t-.475.487q-.875.425-1.4 1.263T14.5 18q0 .725.263 1.35t.737 1.1v-.7q0-.325.213-.537T16.25 19t.538.213t.212.537V22q0 .425-.288.713T16 23zm6.275-.425q-.275.125-.525 0t-.375-.4t-.025-.562t.475-.488q.875-.45 1.4-1.275T21.5 18q0-.725-.262-1.35t-.738-1.1v.7q0 .325-.213.538T19.75 17t-.537-.213T19 16.25V14q0-.425.288-.712T20 13h2.25q.325 0 .538.213t.212.537t-.213.538t-.537.212h-.675q.65.675 1.038 1.575T23 18q0 1.525-.825 2.763t-2.15 1.812"></svg:path>`,
})
export class MaterialSymbolsWifiHomeOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiHomeRoundedIcon],svg[material-symbols-wifi-home-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20q-.825 0-1.412-.587T4 18v-7.375L3 11.4q-.35.25-.75.2t-.65-.4t-.187-.75t.387-.65l8.975-6.875q.275-.2.588-.3t.637-.1t.638.1t.587.3l9 6.875q.325.25.375.663t-.2.737t-.65.375t-.725-.2L20 10.625v.65q-.475-.15-.975-.212T18 11q-2.925 0-4.962 2.038T11 18q0 .225.013.45t.037.425q.05.45-.213.788T10.15 20zm7.75 3q-.325 0-.537-.213T13 22.25t.213-.537t.537-.213h.675q-.65-.675-1.037-1.575T13 18q0-1.525.825-2.762T16 13.425q.275-.125.513 0t.362.4t.025.563t-.475.487q-.875.425-1.4 1.263T14.5 18q0 .725.263 1.35t.737 1.1v-.7q0-.325.213-.537T16.25 19t.538.213t.212.537V22q0 .425-.288.713T16 23zm6.275-.425q-.275.125-.525 0t-.375-.4t-.025-.562t.475-.488q.875-.45 1.4-1.275T21.5 18q0-.725-.262-1.35t-.738-1.1v.7q0 .325-.213.538T19.75 17t-.537-.213T19 16.25V14q0-.425.288-.712T20 13h2.25q.325 0 .538.213t.212.537t-.213.538t-.537.212h-.675q.65.675 1.038 1.575T23 18q0 1.525-.825 2.763t-2.15 1.812"></svg:path>`,
})
export class MaterialSymbolsWifiHomeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiLockIcon],svg[material-symbols-wifi-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9l-2.475 2.475q-.575-.275-1.213-.413t-1.287-.137q-2.525 0-4.3 1.775T12.95 17q0 .65.138 1.288T13.5 19.5zm5 0q-.425 0-.712-.288T16 20v-3q0-.425.288-.712T17 16v-1q0-.825.588-1.412T19 13t1.413.588T21 15v1q.425 0 .713.288T22 17v3q0 .425-.288.713T21 21zm1-5h2v-1q0-.425-.288-.712T19 14t-.712.288T18 15z"></svg:path>`,
})
export class MaterialSymbolsWifiLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiLockOutlineIcon],svg[material-symbols-wifi-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21q-.425 0-.712-.288T16 20v-3q0-.425.288-.712T17 16v-1q0-.825.588-1.412T19 13t1.413.588T21 15v1q.425 0 .713.288T22 17v3q0 .425-.288.713T21 21zm1-5h2v-1q0-.425-.288-.712T19 14t-.712.288T18 15zm-6 5L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9l-3.45 3.425q-.35-.35-.7-.712t-.7-.713l1.95-1.95q-1.975-1.5-4.3-2.275T12 6t-4.8.775T2.9 9.05l9.1 9.1l1-1l.713.713l.712.712zm0-8.925"></svg:path>`,
})
export class MaterialSymbolsWifiLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiLockOutlineRoundedIcon],svg[material-symbols-wifi-lock-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21q-.425 0-.712-.288T16 20v-3q0-.425.288-.712T17 16v-1q0-.825.588-1.412T19 13t1.413.588T21 15v1q.425 0 .713.288T22 17v3q0 .425-.288.713T21 21zm1-5h2v-1q0-.425-.288-.712T19 14t-.712.288T18 15zM12 4q2.825 0 5.463.888T22.3 7.5q.35.275.538.663t.212.812t-.137.838t-.513.762l-1.125 1.15q-.3.275-.712.288t-.713-.288t-.3-.712t.3-.713l1.25-1.25q-1.975-1.5-4.3-2.275T12 6t-4.8.775T2.9 9.05l9.1 9.1l.275-.275q.3-.3.713-.3t.712.3t.3.713t-.3.712l-.275.275q-.3.3-.675.45t-.75.15t-.75-.15t-.675-.45l-9-9q-.325-.325-.488-.737T.95 9t.2-.812t.525-.688q2.2-1.725 4.85-2.613T12 4m0 8.075"></svg:path>`,
})
export class MaterialSymbolsWifiLockOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiLockOutlineSharpIcon],svg[material-symbols-wifi-lock-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21v-5h1v-1q0-.825.588-1.412T19 13t1.413.588T21 15v1h1v5zm2-5h2v-1q0-.425-.288-.712T19 14t-.712.288T18 15zm-6 5L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9l-3.45 3.425q-.35-.35-.7-.712t-.7-.713l1.95-1.95q-1.975-1.5-4.3-2.275T12 6t-4.8.775T2.9 9.05l9.1 9.1l1-1l.713.713l.712.712zm0-8.925"></svg:path>`,
})
export class MaterialSymbolsWifiLockOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiLockRoundedIcon],svg[material-symbols-wifi-lock-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20.35q-.3 0-.587-.112T10.9 19.9l-9.325-9.325q-.325-.325-.475-.7t-.15-.8t.175-.85t.55-.725q2.2-1.725 4.85-2.612T12 4t5.475.888t4.85 2.612q.375.275.55.7t.175.85t-.15.812t-.475.713l-.5.5q-.175.175-.425.238t-.475-.038q-.5-.175-1-.262t-1-.088q-2.525 0-4.3 1.775T12.95 17q0 .5.088 1t.262 1q.075.225.025.475t-.225.425q-.225.225-.512.338T12 20.35m5 .65q-.425 0-.712-.288T16 20v-3q0-.425.288-.712T17 16v-1q0-.825.588-1.412T19 13t1.413.588T21 15v1q.425 0 .713.288T22 17v3q0 .425-.288.713T21 21zm1-5h2v-1q0-.425-.288-.712T19 14t-.712.288T18 15z"></svg:path>`,
})
export class MaterialSymbolsWifiLockRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiLockSharpIcon],svg[material-symbols-wifi-lock-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21v-5h1v-1q0-.825.588-1.412T19 13t1.413.588T21 15v1h1v5zm2-5h2v-1q0-.425-.288-.712T19 14t-.712.288T18 15zm-6 5L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9l-2.475 2.475q-.575-.275-1.213-.413t-1.287-.137q-2.525 0-4.3 1.775T12.95 17q0 .65.138 1.288T13.5 19.5z"></svg:path>`,
})
export class MaterialSymbolsWifiLockSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiNotificationIcon],svg[material-symbols-wifi-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-8-3v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q.575.125 1.088.375t.987.6q-1.95.55-3.662 1.6T8.85 9.325L16.5 17H20v2zm13.35-4l-1.425-1.4q.275-.275.638-.437T17.35 13t.775.163t.625.437zm-2.475-2.475L13.8 11.45q.675-.675 1.575-1.062t1.95-.388t1.963.388t1.587 1.062L19.8 12.525q-.475-.5-1.1-.763t-1.35-.262t-1.362.275t-1.113.75M12.75 10.4l-1.075-1.05q1.1-1.1 2.563-1.725T17.35 7t3.1.625T23 9.35l-1.075 1.05q-.875-.875-2.062-1.388T17.325 8.5t-2.525.513t-2.05 1.387"></svg:path>`,
})
export class MaterialSymbolsWifiNotificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiNotificationOutlineIcon],svg[material-symbols-wifi-notification-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-8-3v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q.575.125 1.088.375t.987.6q-.65.2-1.287.438t-1.238.537q-.275-.075-.525-.112T12 6q-1.65 0-2.825 1.175T8 10v7h12v2zm8.75-8.6l-1.075-1.05q1.1-1.1 2.563-1.725T17.35 7t3.1.625T23 9.35l-1.075 1.05q-.875-.875-2.062-1.388T17.325 8.5t-2.525.513t-2.05 1.387m2.125 2.125L13.8 11.45q.675-.675 1.575-1.062t1.95-.388t1.963.388t1.587 1.062L19.8 12.525q-.475-.5-1.1-.763t-1.35-.262t-1.362.275t-1.113.75M17.35 15l-1.425-1.4q.275-.275.638-.437T17.35 13t.775.163t.625.437z"></svg:path>`,
})
export class MaterialSymbolsWifiNotificationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiNotificationOutlineRoundedIcon],svg[material-symbols-wifi-notification-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.325 8.5q-1.15 0-2.175.375T13.3 9.9q-.25.2-.563.2t-.537-.225t-.2-.55t.275-.525q1.05-.85 2.338-1.325T17.35 7t2.725.475T22.4 8.8q.25.2.263.525t-.213.55t-.525.225t-.55-.2q-.825-.65-1.862-1.025T17.325 8.5m.025 3q-.525 0-1.013.15t-.912.425q-.275.175-.562.163T14.35 12t-.212-.525t.262-.5q.625-.45 1.363-.712T17.325 10t1.588.263t1.387.712q.25.2.263.5T20.35 12t-.525.225t-.575-.175q-.425-.275-.9-.413t-1-.137m0 3.5q-.425 0-.712-.287T16.35 14t.288-.712t.712-.288t.713.288t.287.712t-.288.713t-.712.287M12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-6-5v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q.375.175.488.513t-.013.662t-.437.55t-.788.125q-.225-.025-.387-.038T12 6q-1.65 0-2.825 1.175T8 10v7h11q.425 0 .713.288T20 18t-.288.713T19 19H5q-.425 0-.712-.288T4 18t.288-.712T5 17zm6.25-5.5"></svg:path>`,
})
export class MaterialSymbolsWifiNotificationOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiNotificationOutlineSharpIcon],svg[material-symbols-wifi-notification-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-8-3v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2V2h3v2.2q.575.125 1.088.375t.987.6q-.65.2-1.287.438t-1.238.537q-.275-.075-.525-.112T12 6q-1.65 0-2.825 1.175T8 10v7h12v2zm8.75-8.6l-1.075-1.05q1.1-1.1 2.563-1.725T17.35 7t3.1.625T23 9.35l-1.075 1.05q-.875-.875-2.062-1.388T17.325 8.5t-2.525.513t-2.05 1.387m2.125 2.125L13.8 11.45q.675-.675 1.575-1.062t1.95-.388t1.963.388t1.587 1.062L19.8 12.525q-.475-.5-1.1-.763t-1.35-.262t-1.362.275t-1.113.75M17.35 15l-1.425-1.4q.275-.275.638-.437T17.35 13t.775.163t.625.437z"></svg:path>`,
})
export class MaterialSymbolsWifiNotificationOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiNotificationRoundedIcon],svg[material-symbols-wifi-notification-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-7-3q-.425 0-.712-.288T4 18t.288-.712T5 17h1v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q.05.025.1.025t.1.025q.55.15.55.763t-.65.887q-.7.3-1.35.675T11 7.4q-.925.675-.962 1.875t.837 2.075l5.075 5.075q.275.275.638.425t.762.15H19q.425 0 .713.288T20 18t-.288.713T19 19zM17.325 8.5q-1.15 0-2.175.375T13.3 9.9q-.25.2-.562.2t-.538-.225t-.2-.55t.275-.525q1.05-.85 2.338-1.325T17.35 7t2.725.475T22.4 8.8q.25.2.263.525t-.213.55t-.525.225t-.55-.2q-.825-.65-1.862-1.025T17.325 8.5m.025 3q-.525 0-1.013.15t-.912.425q-.275.175-.562.163T14.35 12t-.212-.525t.262-.5q.625-.45 1.363-.712T17.325 10t1.588.263t1.387.712q.25.2.263.5T20.35 12t-.525.225t-.575-.175q-.425-.275-.9-.413t-1-.137m0 3.5q-.425 0-.712-.287T16.35 14t.288-.712t.712-.288t.713.288t.287.712t-.288.713t-.712.287"></svg:path>`,
})
export class MaterialSymbolsWifiNotificationRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiNotificationSharpIcon],svg[material-symbols-wifi-notification-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-8-3v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2V2h3v2.2q.575.125 1.088.375t.987.6q-1.95.55-3.662 1.6T8.85 9.325L16.5 17H20v2zm13.35-4l-1.425-1.4q.275-.275.638-.437T17.35 13t.775.163t.625.437zm-2.475-2.475L13.8 11.45q.675-.675 1.575-1.062t1.95-.388t1.963.388t1.587 1.062L19.8 12.525q-.475-.5-1.1-.763t-1.35-.262t-1.362.275t-1.113.75M12.75 10.4l-1.075-1.05q1.1-1.1 2.563-1.725T17.35 7t3.1.625T23 9.35l-1.075 1.05q-.875-.875-2.062-1.388T17.325 8.5t-2.525.513t-2.05 1.387"></svg:path>`,
})
export class MaterialSymbolsWifiNotificationSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiOffIcon],svg[material-symbols-wifi-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.75 22.6l-9.4-9.45q-1.175.275-2.187.825T6.35 15.35l-2.1-2.15q.8-.8 1.725-1.4t1.975-1.05L5.7 8.5q-1.025.525-1.913 1.163T2.1 11.1L0 8.95q.8-.8 1.663-1.437T3.5 6.3L1.4 4.2l1.4-1.4l18.4 18.4zM12 21q-1.05 0-1.775-.737T9.5 18.5q0-1.05.725-1.775T12 16t1.775.725t.725 1.775q0 1.025-.725 1.763T12 21m5.9-5.95l-.725-.725l-.725-.725l-3.6-3.6q2.025.2 3.787 1.025T19.75 13.2zm4-3.95q-1.925-1.925-4.462-3.012T12 7q-.525 0-1.012.038T10 7.15L7.45 4.6q1.1-.3 2.238-.45T12 4q3.55 0 6.625 1.325T24 8.95z"></svg:path>`,
})
export class MaterialSymbolsWifiOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiOffRoundedIcon],svg[material-symbols-wifi-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.05 21.9l-8.7-8.75q-.775.175-1.487.475t-1.338.725q-.525.35-1.162.363T5.3 14.275q-.45-.45-.412-1.088t.537-1.012Q6 11.75 6.638 11.4t1.312-.65L5.7 8.5q-.65.35-1.262.738t-1.188.837q-.5.4-1.137.4t-1.063-.45Q.6 9.575.625 8.95t.525-1.025q.55-.45 1.125-.862T3.5 6.3L2.1 4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l16.975 16.975q.3.3.3.713t-.3.712q-.3.275-.712.288t-.713-.288M12 21q-1.05 0-1.775-.737T9.5 18.5q0-1.05.725-1.775T12 16t1.775.725t.725 1.775q0 1.025-.725 1.763T12 21m6.825-6.875q-.4.4-.937.388t-.938-.413l-.25-.25l-.25-.25l-2.4-2.4q-.325-.325-.125-.675t.7-.225q1.125.275 2.137.775t1.888 1.175q.45.35.513.913t-.338.962m4.125-4.1q-.425.45-1.05.462t-1.125-.387q-1.8-1.475-4.037-2.287T12 7q-.525 0-1.012.038T10 7.15q-.625.1-1.125-.262t-.6-.988t.275-1.125t1-.6q.6-.1 1.213-.137T12 4q3.125 0 5.888 1.038T22.85 7.9q.5.425.525 1.05t-.425 1.075"></svg:path>`,
})
export class MaterialSymbolsWifiOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiOffSharpIcon],svg[material-symbols-wifi-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.75 22.6l-9.4-9.45q-1.175.275-2.187.825T6.35 15.35l-2.1-2.15q.8-.8 1.725-1.4t1.975-1.05L5.7 8.5q-1.025.525-1.913 1.163T2.1 11.1L0 8.95q.8-.8 1.663-1.437T3.5 6.3L1.4 4.2l1.4-1.4l18.4 18.4zm-1.85-7.55l-.725-.725l-.725-.725l-3.6-3.6q2.025.2 3.787 1.025T19.75 13.2zm4-3.95q-1.925-1.925-4.462-3.012T12 7q-.525 0-1.012.038T10 7.15L7.45 4.6q1.1-.3 2.238-.45T12 4q3.55 0 6.625 1.325T24 8.95zM12 21l-3.525-3.55q.7-.7 1.613-1.075T12 16t1.913.375t1.612 1.075z"></svg:path>`,
})
export class MaterialSymbolsWifiOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiPasswordIcon],svg[material-symbols-wifi-password-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.125 11.1L0 8.975q2.325-2.325 5.388-3.65T12 4t6.613 1.325T24 8.975L21.875 11.1q-1.9-1.925-4.437-3.012T12 7T6.563 8.088T2.125 11.1m4.225 4.25l-2.1-2.125q1.5-1.5 3.488-2.362T12 10t4.263.863t3.487 2.362l-2.1 2.125q-1.1-1.1-2.55-1.725T12 13t-3.1.625t-2.55 1.725M12 21q-1.05 0-1.775-.725T9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21m7 3q-.425 0-.712-.288T18 23v-3q0-.425.288-.712T19 19v-1q0-.825.588-1.412T21 16t1.413.588T23 18v1q.425 0 .713.288T24 20v3q0 .425-.288.713T23 24zm1-5h2v-1q0-.425-.288-.712T21 17t-.712.288T20 18z"></svg:path>`,
})
export class MaterialSymbolsWifiPasswordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiPasswordRoundedIcon],svg[material-symbols-wifi-password-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 24q-.425 0-.712-.288T18 23v-3q0-.425.288-.712T19 19v-1q0-.825.588-1.412T21 16t1.413.588T23 18v1q.425 0 .713.288T24 20v3q0 .425-.288.713T23 24zm1-5h2v-1q0-.425-.288-.712T21 17t-.712.288T20 18zm-8 2q-1.05 0-1.775-.725T9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21m0-11q1.875 0 3.563.6t3.062 1.65q.5.375.513.988T18.7 14.3q-.425.425-1.05.438t-1.125-.338q-.95-.65-2.1-1.025T12 13t-2.425.375t-2.1 1.025q-.5.35-1.125.325t-1.05-.45q-.425-.45-.425-1.062t.5-.988q1.375-1.05 3.063-1.638T12 10m0-6q3.125 0 5.888 1.025t4.962 2.9q.5.425.525 1.05t-.425 1.075q-.425.425-1.05.438t-1.125-.388q-1.8-1.475-4.037-2.287T12 7t-4.737.813T3.225 10.1q-.5.4-1.125.388t-1.05-.438Q.6 9.6.625 8.975t.525-1.05q2.2-1.875 4.963-2.9T12 4"></svg:path>`,
})
export class MaterialSymbolsWifiPasswordRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiPasswordSharpIcon],svg[material-symbols-wifi-password-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 24v-5h1v-1q0-.825.588-1.412T21 16t1.413.588T23 18v1h1v5zm2-5h2v-1q0-.425-.288-.712T21 17t-.712.288T20 18zM6.35 15.35l-2.1-2.15q1.55-1.55 3.55-2.375T12 10t4.213.838t3.537 2.412l-2.1 2.1q-1.125-1.125-2.588-1.737T12 13t-3.062.613T6.35 15.35M2.1 11.1L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9l-2.1 2.1q-1.975-1.975-4.538-3.037T12 7T6.637 8.063T2.1 11.1M12 21l-3.525-3.55q.7-.7 1.613-1.075T12 16t1.913.375t1.612 1.075z"></svg:path>`,
})
export class MaterialSymbolsWifiPasswordSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiProtectedSetupIcon],svg[material-symbols-wifi-protected-setup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.675 18.75q.425-.825.65-1.737t.225-1.888q0-2-.875-3.662T13.3 8.7L11 11V3h8l-2.3 2.3q1.3 1.175 2.075 2.8t.775 3.525q0 2.275-1.063 4.125t-2.812 3M5 21l2.3-2.3q-1.325-1.175-2.087-2.8t-.763-3.525q0-2.275 1.063-4.125t2.837-3q-.425.825-.663 1.738T7.45 8.875q0 2 .888 3.663T10.7 15.3L13 13v8z"></svg:path>`,
})
export class MaterialSymbolsWifiProtectedSetupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiProtectedSetupRoundedIcon],svg[material-symbols-wifi-protected-setup-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.1 17.55q-.275.25-.587.025T16.325 17q.125-.45.175-.913t.05-.962q0-2-.875-3.663T13.3 8.7l-1.45 1.45q-.25.25-.55.125T11 9.8V4q0-.425.288-.712T12 3h5.8q.35 0 .475.3t-.125.55L16.7 5.3q1.3 1.175 2.075 2.8t.775 3.525q0 1.125-.288 2.163t-.787 1.962q-.275.475-.612.963t-.763.837m-11.25 2.6L7.3 18.7q-1.325-1.175-2.087-2.8t-.763-3.525q0-1.125.288-2.162t.787-1.963q.275-.475.625-.962t.775-.838q.275-.25.588-.038t.187.563q-.125.45-.187.925t-.063.975q0 2 .888 3.663T10.7 15.3l1.45-1.45q.25-.25.55-.125t.3.475V20q0 .425-.287.713T12 21H6.2q-.35 0-.475-.3t.125-.55"></svg:path>`,
})
export class MaterialSymbolsWifiProtectedSetupRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiProxyIcon],svg[material-symbols-wifi-proxy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9l-2.475 2.475q-.575-.275-1.213-.413t-1.287-.137q-2.525 0-4.3 1.775T12.95 17q0 .65.138 1.288T13.5 19.5zm4 0v-7h4.25v2.75H23V21zm1.5-4.25h1.25V15.5H17.5zm0 2.75h1.25v-1.25H17.5zm2.75 0h1.25v-1.25h-1.25z"></svg:path>`,
})
export class MaterialSymbolsWifiProxyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiProxyOutlineIcon],svg[material-symbols-wifi-proxy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 19.5h1.25v-1.25H17.5zm0-2.75h1.25V15.5H17.5zm2.75 2.75h1.25v-1.25h-1.25zM16 21v-7h4.25v2.75H23V21zm-4 0L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9l-3.45 3.425q-.35-.35-.7-.712t-.7-.713l1.95-1.95q-1.975-1.5-4.3-2.275T12 6t-4.8.775T2.9 9.05l9.1 9.1l1-1l.713.713l.712.712zm0-8.925"></svg:path>`,
})
export class MaterialSymbolsWifiProxyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiProxyOutlineRoundedIcon],svg[material-symbols-wifi-proxy-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 19.5h1.25v-1.25H17.5zm0-2.75h1.25V15.5H17.5zm2.75 2.75h1.25v-1.25h-1.25zM17.5 21q-.625 0-1.062-.437T16 19.5v-4q0-.625.438-1.062T17.5 14h1.25q.625 0 1.063.438t.437 1.062v1.25h1.25q.625 0 1.063.438T23 18.25v1.25q0 .625-.437 1.063T21.5 21zM12 4q2.825 0 5.463.888T22.3 7.5q.35.275.538.663t.212.812t-.137.838t-.513.762l-1.125 1.15q-.3.275-.712.288t-.713-.288t-.3-.712t.3-.713l1.25-1.25q-1.975-1.5-4.3-2.275T12 6t-4.8.775T2.9 9.05l9.1 9.1l.275-.275q.3-.3.713-.3t.712.3t.3.713t-.3.712l-.275.275q-.3.3-.675.45t-.75.15t-.75-.15t-.675-.45l-9-9q-.325-.325-.488-.737T.95 9t.2-.812t.525-.688q2.2-1.725 4.85-2.613T12 4m0 8.075"></svg:path>`,
})
export class MaterialSymbolsWifiProxyOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiProxyRoundedIcon],svg[material-symbols-wifi-proxy-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 19.5h1.25v-1.25H17.5zm0-2.75h1.25V15.5H17.5zm2.75 2.75h1.25v-1.25h-1.25zM17.5 21q-.625 0-1.062-.437T16 19.5v-4q0-.625.438-1.062T17.5 14h1.25q.625 0 1.063.438t.437 1.062v1.25h1.25q.625 0 1.063.438T23 18.25v1.25q0 .625-.437 1.063T21.5 21zm-5.5-.65q-.3 0-.587-.112T10.9 19.9l-9.325-9.325q-.325-.325-.475-.7t-.15-.8t.175-.85t.55-.725q2.2-1.725 4.85-2.612T12 4t5.475.888t4.85 2.612q.375.275.55.7t.175.85t-.15.812t-.475.713l-.5.5q-.175.175-.425.238t-.475-.038q-.5-.175-1-.262t-1-.088q-2.525 0-4.3 1.775T12.95 17q0 .5.088 1t.262 1q.075.225.025.475t-.225.425q-.225.225-.512.338T12 20.35"></svg:path>`,
})
export class MaterialSymbolsWifiProxyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiRoundedIcon],svg[material-symbols-wifi-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-1.05 0-1.775-.725T9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21m0-11q1.875 0 3.563.6t3.062 1.65q.5.375.513.988T18.7 14.3q-.425.425-1.05.438t-1.125-.338q-.95-.65-2.1-1.025T12 13t-2.425.375t-2.1 1.025q-.5.35-1.125.325t-1.05-.45q-.425-.45-.425-1.062t.5-.988q1.375-1.05 3.063-1.638T12 10m0-6q3.125 0 5.888 1.025t4.962 2.9q.5.425.525 1.05t-.425 1.075q-.425.425-1.05.438t-1.125-.388q-1.8-1.475-4.037-2.287T12 7t-4.737.813T3.225 10.1q-.5.4-1.125.388t-1.05-.438Q.6 9.6.625 8.975t.525-1.05q2.2-1.875 4.963-2.9T12 4"></svg:path>`,
})
export class MaterialSymbolsWifiRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiSharpIcon],svg[material-symbols-wifi-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.35 15.35l-2.1-2.15q1.55-1.55 3.55-2.375T12 10t4.213.838t3.537 2.412l-2.1 2.1q-1.125-1.125-2.588-1.737T12 13t-3.062.613T6.35 15.35M2.1 11.1L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9l-2.1 2.1q-1.975-1.975-4.538-3.037T12 7T6.637 8.063T2.1 11.1M12 21l-3.525-3.55q.7-.7 1.613-1.075T12 16t1.913.375t1.612 1.075z"></svg:path>`,
})
export class MaterialSymbolsWifiSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiTetheringIcon],svg[material-symbols-wifi-tethering-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.1 20.25q-1.425-1.375-2.262-3.238T2 13q0-2.075.788-3.9t2.137-3.175T8.1 3.788T12 3t3.9.788t3.175 2.137T21.213 9.1T22 13q0 2.15-.837 4.025T18.9 20.25l-1.4-1.4q1.15-1.1 1.825-2.613T20 13q0-3.35-2.325-5.675T12 5T6.325 7.325T4 13q0 1.725.675 3.225t1.85 2.6zm2.825-2.825q-.875-.825-1.4-1.963T6 13q0-2.5 1.75-4.25T12 7t4.25 1.75T18 13q0 1.325-.525 2.475t-1.4 1.95L14.65 16q.625-.575.988-1.35T16 13q0-1.65-1.175-2.825T12 9t-2.825 1.175T8 13q0 .9.363 1.663T9.35 16zM12 15q-.825 0-1.412-.587T10 13t.588-1.412T12 11t1.413.588T14 13t-.587 1.413T12 15"></svg:path>`,
})
export class MaterialSymbolsWifiTetheringIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiTetheringErrorIcon],svg[material-symbols-wifi-tethering-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.1 20.25q-1.425-1.375-2.262-3.238T2 13q0-2.075.788-3.9t2.137-3.175T8.1 3.788T12 3q2.8 0 5.075 1.363T20.675 8H18.25q-1.125-1.375-2.738-2.187T12 5Q8.65 5 6.325 7.325T4 13q0 1.725.675 3.225t1.85 2.6zm2.825-2.825q-.875-.825-1.4-1.963T6 13q0-2.5 1.75-4.25T12 7t4.25 1.75T18 13q0 1.325-.525 2.475t-1.4 1.95L14.65 16q.625-.575.988-1.35T16 13q0-1.65-1.175-2.825T12 9t-2.825 1.175T8 13q0 .9.363 1.663T9.35 16zM12 15q-.825 0-1.412-.587T10 13t.588-1.412T12 11t1.413.588T14 13t-.587 1.413T12 15m9 5q-.425 0-.712-.288T20 19t.288-.712T21 18t.713.288T22 19t-.288.713T21 20m-1-4v-6h2v6z"></svg:path>`,
})
export class MaterialSymbolsWifiTetheringErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiTetheringErrorRoundedIcon],svg[material-symbols-wifi-tethering-error-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.825 19.525q-.3.3-.725.3t-.7-.325q-1.15-1.375-1.775-3.037T2 13q0-2.075.788-3.9t2.137-3.175T8.1 3.788T12 3q2.275 0 4.325.975T19.8 6.75q.275.325.225.725t-.375.675t-.725.225T18.25 8q-1.15-1.425-2.787-2.212T12 5Q8.65 5 6.325 7.325T4 13q0 1.4.462 2.7t1.363 2.375q.275.325.287.738t-.287.712M8.65 16.7q-.3.3-.725.313t-.675-.338q-.575-.775-.913-1.7T6 13q0-2.5 1.75-4.25T12 7t4.25 1.75T18 13q0 1.05-.337 1.988t-.913 1.687q-.25.325-.675.338t-.725-.288q-.275-.275-.287-.7t.237-.775q.325-.5.513-1.062T16 13q0-1.65-1.175-2.825T12 9t-2.825 1.175T8 13q0 .65.188 1.2t.512 1.05q.25.35.238.763t-.288.687M12 15q-.825 0-1.412-.587T10 13t.588-1.412T12 11t1.413.588T14 13t-.587 1.413T12 15m9 5q-.425 0-.712-.288T20 19t.288-.712T21 18t.713.288T22 19t-.288.713T21 20m-1-5v-4q0-.425.288-.712T21 10t.713.288T22 11v4q0 .425-.288.713T21 16t-.712-.288T20 15"></svg:path>`,
})
export class MaterialSymbolsWifiTetheringErrorRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiTetheringRoundedIcon],svg[material-symbols-wifi-tethering-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.825 19.525q-.3.3-.725.3t-.7-.325q-1.125-1.325-1.763-2.975T2 13q0-2.075.788-3.9t2.137-3.175T8.1 3.788T12 3t3.9.788t3.175 2.137T21.213 9.1T22 13q0 1.875-.638 3.525T19.6 19.5q-.275.325-.687.338t-.713-.288q-.275-.275-.275-.7t.275-.75q.85-1.05 1.325-2.35T20 13q0-3.35-2.325-5.675T12 5T6.325 7.325T4 13q0 1.45.475 2.738t1.35 2.337q.275.325.287.738t-.287.712M8.65 16.7q-.3.3-.725.313t-.675-.338q-.575-.775-.913-1.7T6 13q0-2.5 1.75-4.25T12 7t4.25 1.75T18 13q0 1.05-.337 1.988t-.913 1.687q-.25.325-.675.338t-.725-.288q-.275-.275-.287-.7t.237-.775q.325-.5.513-1.062T16 13q0-1.65-1.175-2.825T12 9t-2.825 1.175T8 13q0 .65.188 1.2t.512 1.05q.25.35.238.763t-.288.687M12 15q-.825 0-1.412-.587T10 13t.588-1.412T12 11t1.413.588T14 13t-.587 1.413T12 15"></svg:path>`,
})
export class MaterialSymbolsWifiTetheringRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindPowerIcon],svg[material-symbols-wind-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 23q0-.825.588-1.412T12 21v-5.725q.225.1.475.15t.525.05q1.05 0 1.763-.712T15.474 13v-.225l3.2.775q.4.1.725.35t.525.6l2.275 4.1q.375.675.275 1.425t-.65 1.3Q21.15 22 20.213 22t-1.613-.675l-4.6-4.6V21q.825 0 1.413.588T16 23zm-7-2v-2h5v2zm4.15-4.25l-4.5-1.275q-.725-.2-1.187-.812T1 13.275q0-.95.663-1.612T3.275 11h8.25q-.475.35-.737.863T10.525 13q0 .575.225 1.05t.625.825L8.75 16.55q-.35.2-.763.263t-.837-.063M13 14.5q-.625 0-1.062-.437T11.5 13t.438-1.062T13 11.5t1.063.438T14.5 13t-.437 1.063T13 14.5m2.3-2.45q-.275-.675-.888-1.1T13 10.525q-.275 0-.525.05t-.475.15v-3.95q0-.425.163-.8t.462-.65l3.425-3.2q.575-.55 1.338-.625t1.412.325q.8.5 1.038 1.413t-.263 1.712zM1 9V7h5v2zm3-4V3h6v2z"></svg:path>`,
})
export class MaterialSymbolsWindPowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindPowerOutlineIcon],svg[material-symbols-wind-power-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 23q0-.825.588-1.412T12 21v-5.2q-.3-.125-.562-.288t-.488-.362l-2.2 1.4q-.35.2-.763.263t-.837-.063l-4.5-1.275q-.725-.2-1.187-.812T1 13.275q0-.95.663-1.612T3.275 11H10.8q.25-.275.55-.475T12 10.2V6.775q0-.425.163-.8t.462-.65l3.425-3.2q.575-.55 1.338-.625t1.412.325q.8.5 1.038 1.413t-.263 1.712L15.6 11.525q.175.3.263.65t.112.725l2.7.65q.4.1.725.35t.525.6l2.275 4.1q.375.675.275 1.425t-.65 1.3Q21.15 22 20.213 22t-1.613-.675l-4.6-4.6V21q.825 0 1.413.588T16 23zM4 5V3h6v2zm10 1.775V10.2q.025 0 .038.013t.037.012l3.8-6.325q.05-.1.025-.213t-.125-.162q-.075-.05-.187-.025t-.163.075zM1 9V7h5v2zm12 5q.425 0 .713-.288T14 13t-.288-.712T13 12t-.712.288T12 13t.288.713T13 14m-5.275.85l2.325-1.4q-.025-.125-.025-.225V13h-6.75q-.125 0-.2.075t-.075.2q0 .1.05.175t.15.1zm10.475.625l-2.85-.65q-.05.05-.1.125t-.1.125l4.875 4.85q.075.075.2.075t.2-.075t.088-.162t-.038-.188zM3 21v-2h5v2zm12.15-5.925"></svg:path>`,
})
export class MaterialSymbolsWindPowerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindPowerOutlineRoundedIcon],svg[material-symbols-wind-power-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 23q0-.825.588-1.412T12 21v-5.2q-.3-.125-.562-.288t-.488-.362l-2.2 1.4q-.35.2-.763.263t-.837-.063l-4.5-1.275q-.725-.2-1.187-.812T1 13.275q0-.95.663-1.612T3.275 11H10.8q.25-.275.55-.475T12 10.2V6.775q0-.425.163-.8t.462-.65l3.425-3.2q.575-.55 1.338-.625t1.412.325q.8.5 1.038 1.413t-.263 1.712L15.6 11.525q.175.3.263.65t.112.725l2.7.65q.4.1.725.35t.525.6l2.275 4.1q.375.675.275 1.425t-.65 1.3Q21.15 22 20.213 22t-1.613-.675l-4.6-4.6V21q.825 0 1.413.588T16 23zM5 5q-.425 0-.712-.288T4 4t.288-.712T5 3h4q.425 0 .713.288T10 4t-.288.713T9 5zm9 1.775V10.2q.025 0 .038.013t.037.012l3.8-6.325q.05-.1.025-.213t-.125-.162q-.075-.05-.187-.025t-.163.075zM2 9q-.425 0-.712-.288T1 8t.288-.712T2 7h3q.425 0 .713.288T6 8t-.288.713T5 9zm11 5q.425 0 .713-.288T14 13t-.288-.712T13 12t-.712.288T12 13t.288.713T13 14m-5.275.85l2.325-1.4q-.025-.125-.025-.225V13h-6.75q-.125 0-.2.075t-.075.2q0 .1.05.175t.15.1zm10.475.625l-2.85-.65q-.05.05-.1.125t-.1.125l4.875 4.85q.075.075.2.075t.2-.075t.088-.162t-.038-.188zM4 21q-.425 0-.712-.288T3 20t.288-.712T4 19h3q.425 0 .713.288T8 20t-.288.713T7 21zm11.15-5.925"></svg:path>`,
})
export class MaterialSymbolsWindPowerOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindPowerOutlineSharpIcon],svg[material-symbols-wind-power-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 23v-2h2v-5.2q-.3-.125-.562-.288t-.488-.362L8.05 17L1 15v-4h9.8q.25-.275.55-.475T12 10.2V5.9L17.325.925l3.4 2.125l-5.125 8.475q.175.3.263.65t.112.725l3.525.85l3.55 6.35l-2.825 2.825l-6.225-6.2V21h2v2zM4 5V3h6v2zm10 1.775V10.2q.025 0 .038.013t.037.012l3.95-6.55l-.45-.25zM1 9V7h5v2zm12 5q.425 0 .713-.288T14 13t-.288-.712T13 12t-.712.288T12 13t.288.713T13 14m-5.275.85l2.325-1.4q-.025-.125-.025-.225V13H3v.5zm10.475.625l-2.85-.65q-.05.05-.1.125t-.1.125l5.075 5.05l.375-.375zM3 21v-2h5v2zm12.15-5.925"></svg:path>`,
})
export class MaterialSymbolsWindPowerOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindPowerRoundedIcon],svg[material-symbols-wind-power-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 23q0-.825.588-1.412T12 21v-5.725q.225.1.475.15t.525.05q1.05 0 1.763-.712T15.474 13v-.225l3.2.775q.4.1.725.35t.525.6l2.275 4.1q.375.675.275 1.425t-.65 1.3Q21.15 22 20.213 22t-1.613-.675l-4.6-4.6V21q.825 0 1.413.588T16 23zm-6-2q-.425 0-.712-.288T3 20t.288-.712T4 19h3q.425 0 .713.288T8 20t-.288.713T7 21zm3.15-4.25l-4.5-1.275q-.725-.2-1.187-.812T1 13.275q0-.95.663-1.612T3.275 11h8.25q-.475.35-.737.863T10.525 13q0 .575.225 1.05t.625.825L8.75 16.55q-.35.2-.763.263t-.837-.063M13 14.5q-.625 0-1.062-.437T11.5 13t.438-1.062T13 11.5t1.063.438T14.5 13t-.437 1.063T13 14.5m2.3-2.45q-.275-.675-.888-1.1T13 10.525q-.275 0-.525.05t-.475.15v-3.95q0-.425.163-.8t.462-.65l3.425-3.2q.575-.55 1.338-.625t1.412.325q.8.5 1.038 1.413t-.263 1.712zM2 9q-.425 0-.712-.288T1 8t.288-.712T2 7h3q.425 0 .713.288T6 8t-.288.713T5 9zm3-4q-.425 0-.712-.288T4 4t.288-.712T5 3h4q.425 0 .713.288T10 4t-.288.713T9 5z"></svg:path>`,
})
export class MaterialSymbolsWindPowerRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindPowerSharpIcon],svg[material-symbols-wind-power-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 23v-2h2v-5.725q.225.1.475.15t.525.05q1.05 0 1.763-.712T15.474 13v-.225l4.025.975l3.55 6.35l-2.825 2.825l-6.225-6.2V21h2v2zm-7-2v-2h5v2zm-2-6v-4h10.525q-.475.35-.737.863T10.525 13q0 .575.225 1.05t.625.825L8.05 17zm12-.5q-.625 0-1.062-.437T11.5 13t.438-1.062T13 11.5t1.063.438T14.5 13t-.437 1.063T13 14.5m2.3-2.45q-.275-.675-.888-1.1T13 10.525q-.275 0-.525.05t-.475.15V5.9L17.325.925l3.4 2.125zM1 9V7h5v2zm3-4V3h6v2z"></svg:path>`,
})
export class MaterialSymbolsWindPowerSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindowIcon],svg[material-symbols-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13h8v6q0 .825-.587 1.413T19 21h-6zm0-2V3h6q.825 0 1.413.588T21 5v6zm-2 0H3V5q0-.825.588-1.412T5 3h6zm0 2v8H5q-.825 0-1.412-.587T3 19v-6z"></svg:path>`,
})
export class MaterialSymbolsWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindowClosedIcon],svg[material-symbols-window-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21V3h16v18zm3-10h4v-1h2v1h4V6H7zm0 7h10v-5H7zm-1 1h12V5H6z"></svg:path>`,
})
export class MaterialSymbolsWindowClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindowClosedOutlineIcon],svg[material-symbols-window-closed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21V3h16v18zm2-10h5v-1h2v1h5V5H6zm0 8h12v-6H6zm0 0h12z"></svg:path>`,
})
export class MaterialSymbolsWindowClosedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindowClosedOutlineRoundedIcon],svg[material-symbols-window-closed-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19h12v-6H6zm0 2q-.825 0-1.412-.587T4 19V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v14q0 .825-.587 1.413T18 21zm0-10h5v-.5q0-.2.15-.35t.35-.15h1q.2 0 .35.15t.15.35v.5h5V5H6zm0 8h12z"></svg:path>`,
})
export class MaterialSymbolsWindowClosedOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindowClosedRoundedIcon],svg[material-symbols-window-closed-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18h10v-5H7zm-1 3q-.825 0-1.412-.587T4 19V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v14q0 .825-.587 1.413T18 21zm1-10h4v-.5q0-.2.15-.35t.35-.15h1q.2 0 .35.15t.15.35v.5h4V6H7zm-1 8h12V5H6z"></svg:path>`,
})
export class MaterialSymbolsWindowClosedRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindowOpenIcon],svg[material-symbols-window-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21V3h16v18zm3-10h4v-1h2v1h4V6H7zm-1 8h12V5H6z"></svg:path>`,
})
export class MaterialSymbolsWindowOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindowOpenOutlineIcon],svg[material-symbols-window-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21V3h16v18zm2-10h5v-1h2v1h5V5H6zm0 8h12z"></svg:path>`,
})
export class MaterialSymbolsWindowOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindowOpenOutlineRoundedIcon],svg[material-symbols-window-open-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21q-.825 0-1.412-.587T4 19V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v14q0 .825-.587 1.413T18 21zm0-10h5v-.5q0-.2.15-.35t.35-.15h1q.2 0 .35.15t.15.35v.5h5V5H6zm0 8h12z"></svg:path>`,
})
export class MaterialSymbolsWindowOpenOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindowOpenRoundedIcon],svg[material-symbols-window-open-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21q-.825 0-1.412-.587T4 19V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v14q0 .825-.587 1.413T18 21zm1-10h4v-.5q0-.2.15-.35t.35-.15h1q.2 0 .35.15t.15.35v.5h4V6H7zm-1 8h12V5H6z"></svg:path>`,
})
export class MaterialSymbolsWindowOpenRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindowOutlineIcon],svg[material-symbols-window-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm8-8v6h6v-6zm0-2h6V5h-6zm-2 0V5H5v6zm0 2H5v6h6z"></svg:path>`,
})
export class MaterialSymbolsWindowOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindowOutlineSharpIcon],svg[material-symbols-window-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21H3V3h18zm-8-8v6h6v-6zm0-2h6V5h-6zm-2 0V5H5v6zm0 2H5v6h6z"></svg:path>`,
})
export class MaterialSymbolsWindowOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindowSensorIcon],svg[material-symbols-window-sensor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9q-.425 0-.712-.288T21 8V4q0-.425.288-.712T22 3t.713.288T23 4v4q0 .425-.288.713T22 9M3 21V3h16v18zm3-10h4v-1h2v1h4V6H6zm0 7h10v-5H6zm-1 1h12V5H5z"></svg:path>`,
})
export class MaterialSymbolsWindowSensorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindowSensorOutlineIcon],svg[material-symbols-window-sensor-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9q-.425 0-.712-.288T21 8V4q0-.425.288-.712T22 3t.713.288T23 4v4q0 .425-.288.713T22 9M3 21V3h16v18zm2-10h5v-1h2v1h5V5H5zm0 8h12v-6H5zm0 0h12z"></svg:path>`,
})
export class MaterialSymbolsWindowSensorOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindowSensorOutlineRoundedIcon],svg[material-symbols-window-sensor-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9q-.425 0-.712-.288T21 8V4q0-.425.288-.712T22 3t.713.288T23 4v4q0 .425-.288.713T22 9M3 19V5q0-.825.588-1.412T5 3h12q.825 0 1.413.588T19 5v14q0 .825-.587 1.413T17 21H5q-.825 0-1.412-.587T3 19m2-8h5v-.5q0-.2.15-.35t.35-.15h1q.2 0 .35.15t.15.35v.5h5V5H5zm0 8h12v-6H5zm0 0h12z"></svg:path>`,
})
export class MaterialSymbolsWindowSensorOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindowSensorRoundedIcon],svg[material-symbols-window-sensor-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9q-.425 0-.712-.288T21 8V4q0-.425.288-.712T22 3t.713.288T23 4v4q0 .425-.288.713T22 9M3 19V5q0-.825.588-1.412T5 3h12q.825 0 1.413.588T19 5v14q0 .825-.587 1.413T17 21H5q-.825 0-1.412-.587T3 19m3-8h4v-.5q0-.2.15-.35t.35-.15h1q.2 0 .35.15t.15.35v.5h4V6H6zm0 7h10v-5H6zm-1 1h12V5H5z"></svg:path>`,
})
export class MaterialSymbolsWindowSensorRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindowSharpIcon],svg[material-symbols-window-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13h8v8h-8zm0-2V3h8v8zm-2 0H3V3h8zm0 2v8H3v-8z"></svg:path>`,
})
export class MaterialSymbolsWindowSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindshieldDefrostFrontIcon],svg[material-symbols-windshield-defrost-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4q2.5 0 5.213.4t5.937 1.275L20.975 17.2l-1.95-.375L20.85 7.15q-2.6-.6-4.75-.875T12 6t-4.1.275t-4.75.875l1.825 9.675l-1.95.375L.85 5.675Q4.075 4.8 6.787 4.4T12 4m5.025 16.55l-1.65-1.1l.325-.525q.15-.225.225-.462T16 17.95q0-.35-.125-.675T15.5 16.7q-.525-.525-.813-1.212T14.4 14.05q0-.575.163-1.1t.462-1l.325-.5l1.675 1.1l-.35.525q-.15.225-.213.463t-.062.512q0 .35.125.675t.375.575q.525.525.813 1.213T18 17.95q0 .575-.162 1.1t-.463 1zm-4.2 0l-1.65-1.1l.325-.525q.15-.225.225-.462t.075-.513q0-.35-.125-.675T11.3 16.7q-.525-.525-.813-1.212T10.2 14.05q0-.575.163-1.1t.462-1l.325-.5l1.675 1.1l-.35.525q-.15.225-.212.463t-.063.512q0 .35.125.675t.375.575q.525.525.813 1.213t.287 1.437q0 .575-.162 1.1t-.463 1zm-4.175 0l-1.675-1.1l.35-.525q.15-.225.225-.462t.075-.513q0-.35-.138-.675T7.1 16.7q-.525-.525-.812-1.213T6 14.05q0-.575.15-1.1t.475-1l.35-.5l1.675 1.1l-.35.525q-.15.2-.225.45T8 14.05q0 .35.125.675t.375.575q.525.525.813 1.213T9.6 17.95q0 .575-.162 1.1t-.463 1z"></svg:path>`,
})
export class MaterialSymbolsWindshieldDefrostFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindshieldDefrostFrontRoundedIcon],svg[material-symbols-windshield-defrost-front-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17q-.425.075-.763-.15t-.412-.65L1.05 6.7q-.075-.425.163-.788t.662-.487Q4.75 4.7 7.238 4.35T12 4t4.763.35t5.362 1.075q.425.125.663.488t.162.787l-1.775 9.5q-.075.425-.412.65T20 17t-.65-.4t-.15-.75l1.65-8.7q-2.6-.6-4.75-.875T12 6t-4.1.275t-4.75.875l1.65 8.7q.075.425-.15.75T4 17m12 .95q0-.35-.125-.675T15.5 16.7q-.525-.525-.812-1.213T14.4 14.05q0-.575.163-1.1t.462-1l.325-.5q.225-.35.638-.425t.762.15t.425.625t-.15.75l-.35.525q-.15.225-.213.463t-.062.512q0 .35.125.675t.375.575q.525.525.813 1.213T18 17.95q0 .575-.162 1.1t-.463 1l-.35.5q-.225.35-.625.425t-.75-.15t-.425-.625t.15-.75l.325-.525q.15-.225.225-.462T16 17.95m-4.2 0q0-.35-.125-.675T11.3 16.7q-.525-.525-.813-1.212T10.2 14.05q0-.575.163-1.1t.462-1l.325-.5q.225-.35.638-.425t.762.15t.425.625t-.15.75l-.35.525q-.15.225-.213.463t-.062.512q0 .35.125.675t.375.575q.525.525.813 1.213t.287 1.437q0 .575-.162 1.1t-.463 1l-.35.5q-.225.35-.625.425t-.75-.15t-.425-.625t.15-.75l.325-.525q.15-.225.225-.462t.075-.513m-4.175 0q0-.35-.138-.675T7.1 16.7q-.525-.525-.812-1.213T6 14.05q0-.575.15-1.1t.475-1l.35-.5q.225-.35.638-.425t.762.15t.425.625t-.15.75l-.35.525q-.15.2-.225.45T8 14.05q0 .35.125.675t.375.575q.525.525.813 1.213T9.6 17.95q0 .575-.162 1.1t-.463 1l-.325.5q-.225.35-.638.425t-.762-.15t-.425-.625t.15-.75l.35-.525q.15-.225.225-.462t.075-.513"></svg:path>`,
})
export class MaterialSymbolsWindshieldDefrostFrontRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindshieldDefrostRearIcon],svg[material-symbols-windshield-defrost-rear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 18v-2h1V6H4v10h1v2H4q-.825 0-1.412-.587T2 16V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v10q0 .825-.587 1.413T20 18zm-1.975 2.55l-1.65-1.1l.325-.525q.15-.225.225-.462T16 17.95q0-.35-.125-.675T15.5 16.7q-.525-.525-.813-1.212T14.4 14.05q0-.575.163-1.1t.462-1l.325-.5l1.675 1.1l-.35.525q-.15.225-.213.463t-.062.512q0 .35.125.675t.375.575q.525.525.813 1.213T18 17.95q0 .575-.162 1.1t-.463 1zm-4.2 0l-1.65-1.1l.325-.525q.15-.225.225-.462t.075-.513q0-.35-.125-.675T11.3 16.7q-.525-.525-.813-1.212T10.2 14.05q0-.575.163-1.1t.462-1l.325-.5l1.675 1.1l-.35.525q-.15.225-.212.463t-.063.512q0 .35.125.675t.375.575q.525.525.813 1.213t.287 1.437q0 .575-.162 1.1t-.463 1zm-4.175 0l-1.675-1.1l.35-.525q.15-.225.225-.462t.075-.513q0-.35-.138-.675T7.1 16.7q-.525-.525-.812-1.213T6 14.05q0-.575.15-1.1t.475-1l.35-.5l1.675 1.1l-.35.525q-.15.2-.225.45T8 14.05q0 .35.125.675t.375.575q.525.525.813 1.213T9.6 17.95q0 .575-.162 1.1t-.463 1z"></svg:path>`,
})
export class MaterialSymbolsWindshieldDefrostRearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindshieldDefrostRearRoundedIcon],svg[material-symbols-windshield-defrost-rear-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 18v-2h1V6H4v10h1v2H4q-.825 0-1.412-.587T2 16V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v10q0 .825-.587 1.413T20 18zm-3-.05q0-.35-.125-.675T15.5 16.7q-.525-.525-.812-1.213T14.4 14.05q0-.575.163-1.1t.462-1l.325-.5q.225-.35.638-.425t.762.15t.425.625t-.15.75l-.35.525q-.15.225-.213.463t-.062.512q0 .35.125.675t.375.575q.525.525.813 1.213T18 17.95q0 .575-.162 1.1t-.463 1l-.35.5q-.225.35-.625.425t-.75-.15t-.425-.625t.15-.75l.325-.525q.15-.225.225-.462T16 17.95m-4.2 0q0-.35-.125-.675T11.3 16.7q-.525-.525-.813-1.212T10.2 14.05q0-.575.163-1.1t.462-1l.325-.5q.225-.35.638-.425t.762.15t.425.625t-.15.75l-.35.525q-.15.225-.213.463t-.062.512q0 .35.125.675t.375.575q.525.525.813 1.213t.287 1.437q0 .575-.162 1.1t-.463 1l-.35.5q-.225.35-.625.425t-.75-.15t-.425-.625t.15-.75l.325-.525q.15-.225.225-.462t.075-.513m-4.175 0q0-.35-.138-.675T7.1 16.7q-.525-.525-.812-1.213T6 14.05q0-.575.15-1.1t.475-1l.35-.5q.225-.35.638-.425t.762.15t.425.625t-.15.75l-.35.525q-.15.2-.225.45T8 14.05q0 .35.125.675t.375.575q.525.525.813 1.213T9.6 17.95q0 .575-.162 1.1t-.463 1l-.325.5q-.225.35-.638.425t-.762-.15t-.425-.625t.15-.75l.35-.525q.15-.225.225-.462t.075-.513"></svg:path>`,
})
export class MaterialSymbolsWindshieldDefrostRearRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindshieldDefrostRearSharpIcon],svg[material-symbols-windshield-defrost-rear-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 18v-2h1V6H4v10h1v2H2V4h20v14zm-1.975 2.55l-1.65-1.1l.325-.525q.15-.225.225-.462T16 17.95q0-.35-.125-.675T15.5 16.7q-.525-.525-.813-1.212T14.4 14.05q0-.575.163-1.1t.462-1l.325-.5l1.675 1.1l-.35.525q-.15.225-.213.463t-.062.512q0 .35.125.675t.375.575q.525.525.813 1.213T18 17.95q0 .575-.162 1.1t-.463 1zm-4.2 0l-1.65-1.1l.325-.525q.15-.225.225-.462t.075-.513q0-.35-.125-.675T11.3 16.7q-.525-.525-.813-1.212T10.2 14.05q0-.575.163-1.1t.462-1l.325-.5l1.675 1.1l-.35.525q-.15.225-.212.463t-.063.512q0 .35.125.675t.375.575q.525.525.813 1.213t.287 1.437q0 .575-.162 1.1t-.463 1zm-4.175 0l-1.675-1.1l.35-.525q.15-.225.225-.462t.075-.513q0-.35-.138-.675T7.1 16.7q-.525-.525-.812-1.213T6 14.05q0-.575.15-1.1t.475-1l.35-.5l1.675 1.1l-.35.525q-.15.2-.225.45T8 14.05q0 .35.125.675t.375.575q.525.525.813 1.213T9.6 17.95q0 .575-.162 1.1t-.463 1z"></svg:path>`,
})
export class MaterialSymbolsWindshieldDefrostRearSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindshieldHeatFrontIcon],svg[material-symbols-windshield-heat-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8.775v-2.05q.975.2 2.013.425t2.162.525L20.85 20H3.175L.85 7.675q1.1-.3 2.125-.525T5 6.725v2.05q-.55.125-1.025.213t-.825.162L4.825 18h14.35l1.675-8.85q-.35-.075-.825-.162T19 8.775m-1.975 2.775l-1.65-1.1l.325-.525q.15-.225.225-.462T16 8.95q0-.35-.125-.675T15.5 7.7q-.525-.525-.812-1.213T14.4 5.05q0-.575.163-1.1t.462-1l.325-.5l1.675 1.1l-.35.525q-.15.225-.213.463t-.062.512q0 .35.125.675t.375.575q.525.525.813 1.213T18 8.95q0 .575-.162 1.1t-.463 1zm-4.2 0l-1.65-1.1l.325-.525q.15-.225.225-.462t.075-.513q0-.35-.125-.675T11.3 7.7q-.525-.525-.812-1.213T10.2 5.05q0-.575.163-1.1t.462-1l.325-.5l1.675 1.1l-.35.525q-.15.225-.212.463t-.063.512q0 .35.125.675t.375.575q.525.525.813 1.213T13.8 8.95q0 .575-.162 1.1t-.463 1zm-4.175 0l-1.675-1.1l.35-.525q.15-.225.225-.462t.075-.513q0-.35-.137-.675T7.1 7.7q-.525-.525-.812-1.213T6 5.05q0-.575.15-1.1t.475-1l.35-.5l1.675 1.1l-.35.525q-.15.2-.225.45T8 5.05q0 .35.125.675T8.5 6.3q.525.525.813 1.213T9.6 8.95q0 .575-.162 1.1t-.463 1z"></svg:path>`,
})
export class MaterialSymbolsWindshieldHeatFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindshieldHeatFrontRoundedIcon],svg[material-symbols-windshield-heat-front-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8.775v-2.05q.775.15 1.575.338t1.65.387q.4.1.625.438t.15.737l-1.85 9.75q-.125.725-.688 1.175t-1.287.45H4.825q-.725 0-1.275-.45t-.675-1.175l-1.85-9.75q-.075-.4.138-.75t.612-.45q.85-.2 1.65-.375T5 6.725v2.05q-.55.125-1.025.213t-.825.162L4.825 18h14.35l1.675-8.85q-.35-.075-.825-.162T19 8.775m-3 .175q0-.35-.125-.675T15.5 7.7q-.525-.525-.812-1.213T14.4 5.05q0-.575.163-1.1t.462-1l.325-.5q.225-.35.638-.425t.762.15t.425.625t-.15.75l-.35.525q-.15.225-.213.463t-.062.512q0 .35.125.675t.375.575q.525.525.813 1.213T18 8.95q0 .575-.162 1.1t-.463 1l-.35.5q-.225.35-.625.425t-.75-.15t-.425-.625t.15-.75l.325-.525q.15-.225.225-.462T16 8.95m-4.2 0q0-.35-.125-.675T11.3 7.7q-.525-.525-.813-1.213T10.2 5.05q0-.575.163-1.1t.462-1l.325-.5q.225-.35.638-.425t.762.15t.425.625t-.15.75l-.35.525q-.15.225-.213.463t-.062.512q0 .35.125.675t.375.575q.525.525.813 1.213T13.8 8.95q0 .575-.162 1.1t-.463 1l-.35.5q-.225.35-.625.425t-.75-.15t-.425-.625t.15-.75l.325-.525q.15-.225.225-.462t.075-.513m-4.175 0q0-.35-.138-.675T7.1 7.7q-.525-.525-.812-1.213T6 5.05q0-.575.15-1.1t.475-1l.35-.5q.225-.35.638-.425t.762.15t.425.625t-.15.75l-.35.525q-.15.2-.225.45T8 5.05q0 .35.125.675T8.5 6.3q.525.525.813 1.213T9.6 8.95q0 .575-.162 1.1t-.463 1l-.325.5q-.225.35-.638.425t-.762-.15t-.425-.625t.15-.75l.35-.525q.15-.225.225-.462t.075-.513"></svg:path>`,
})
export class MaterialSymbolsWindshieldHeatFrontRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWineBarIcon],svg[material-symbols-wine-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21v-2h3v-4.1q-2.15-.35-3.575-2T6 9V3h12v6q0 2.25-1.425 3.9T13 14.9V19h3v2zM8 8h8V5H8z"></svg:path>`,
})
export class MaterialSymbolsWineBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWineBarOutlineIcon],svg[material-symbols-wine-bar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21v-2h3v-4.1q-2.15-.35-3.575-2T6 9V3h12v6q0 2.25-1.425 3.9T13 14.9V19h3v2zm4-8q1.4 0 2.45-.85t1.4-2.15h-7.7q.35 1.3 1.4 2.15T12 13M8 8h8V5H8zm4 5"></svg:path>`,
})
export class MaterialSymbolsWineBarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWineBarOutlineRoundedIcon],svg[material-symbols-wine-bar-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19v-4.1q-2.15-.35-3.575-2T6 9V4q0-.425.288-.712T7 3h10q.425 0 .713.288T18 4v5q0 2.25-1.425 3.9T13 14.9V19h2q.425 0 .713.288T16 20t-.288.713T15 21H9q-.425 0-.712-.288T8 20t.288-.712T9 19zm1-6q1.4 0 2.45-.85t1.4-2.15h-7.7q.35 1.3 1.4 2.15T12 13M8 8h8V5H8zm4 5"></svg:path>`,
})
export class MaterialSymbolsWineBarOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWineBarRoundedIcon],svg[material-symbols-wine-bar-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19v-4.1q-2.15-.35-3.575-2T6 9V4q0-.425.288-.712T7 3h10q.425 0 .713.288T18 4v5q0 2.25-1.425 3.9T13 14.9V19h2q.425 0 .713.288T16 20t-.288.713T15 21H9q-.425 0-.712-.288T8 20t.288-.712T9 19zM8 8h8V5H8z"></svg:path>`,
})
export class MaterialSymbolsWineBarRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWomanIcon],svg[material-symbols-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22v-6H7l3.05-7.7q.25-.6.775-.95T12 7t1.175.35t.775.95L17 16h-3v6zm2-16q-.825 0-1.412-.587T10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6"></svg:path>`,
})
export class MaterialSymbolsWomanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWoman2Icon],svg[material-symbols-woman-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 22v-6H7l3.05-7.7q.25-.6.775-.95T12 7t1.175.35t.775.95L17 16h-3.5v6zM12 6q-.825 0-1.412-.587T10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6"></svg:path>`,
})
export class MaterialSymbolsWoman2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWoman2RoundedIcon],svg[material-symbols-woman-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 21v-5H8.475q-.525 0-.825-.437t-.1-.938l2.5-6.325q.25-.6.775-.95T12 7t1.175.35t.775.95l2.5 6.325q.2.5-.1.938t-.825.437H13.5v5q0 .425-.288.713T12.5 22h-1q-.425 0-.712-.288T10.5 21M12 6q-.825 0-1.412-.587T10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6"></svg:path>`,
})
export class MaterialSymbolsWoman2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWoman2SharpIcon],svg[material-symbols-woman-2-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 22v-6H7l3.575-9h2.85L17 16h-3.5v6zM12 6q-.825 0-1.412-.587T10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6"></svg:path>`,
})
export class MaterialSymbolsWoman2SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWomanRoundedIcon],svg[material-symbols-woman-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 21v-5H8.475q-.525 0-.825-.437t-.1-.938l2.5-6.325q.25-.6.775-.95T12 7t1.175.35t.775.95l2.5 6.325q.2.5-.1.938t-.825.437H14v5q0 .425-.288.713T13 22h-2q-.425 0-.712-.288T10 21m2-15q-.825 0-1.412-.587T10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6"></svg:path>`,
})
export class MaterialSymbolsWomanRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWomanSharpIcon],svg[material-symbols-woman-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22v-6H7l3.575-9h2.85L17 16h-3v6zm2-16q-.825 0-1.412-.587T10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6"></svg:path>`,
})
export class MaterialSymbolsWomanSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkIcon],svg[material-symbols-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v11q0 .825-.587 1.413T20 21zm6-15h4V4h-4z"></svg:path>`,
})
export class MaterialSymbolsWorkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkAlertIcon],svg[material-symbols-work-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v4.275q-.875-.625-1.9-.95T18 11q-2.9 0-4.95 2.05T11 18q0 .775.163 1.538T11.675 21zm14 0q.2 0 .35-.15t.15-.35t-.15-.35T18 20t-.35.15t-.15.35t.15.35t.35.15m-.5-2h1v-4h-1z"></svg:path>`,
})
export class MaterialSymbolsWorkAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkAlertOutlineIcon],svg[material-symbols-work-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 21q.2 0 .35-.15t.15-.35t-.15-.35T18 20t-.35.15t-.15.35t.15.35t.35.15m-.5-2h1v-4h-1zM4 19v-.375zV8zm0 2q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v4.275q-.45-.325-.95-.562T20 11.3V8H4v11h7.075q.075.525.225 1.025t.375.975zm6-15h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23"></svg:path>`,
})
export class MaterialSymbolsWorkAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkAlertOutlineRoundedIcon],svg[material-symbols-work-alert-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 21q.2 0 .35-.15t.15-.35t-.15-.35T18 20t-.35.15t-.15.35t.15.35t.35.15m0-2q.2 0 .35-.15t.15-.35v-3q0-.2-.15-.35T18 15t-.35.15t-.15.35v3q0 .2.15.35T18 19M4 19v-.375zV8zm0 2q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v3q0 .425-.288.7t-.712.275t-.712-.287t-.288-.713V8H4v11h6.5q.425 0 .713.288T11.5 20t-.288.713T10.5 21zm6-15h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23"></svg:path>`,
})
export class MaterialSymbolsWorkAlertOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkAlertOutlineSharpIcon],svg[material-symbols-work-alert-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19v-.375zV8zm-2 2V6h6V2h8v4h6v6.275q-.45-.325-.95-.562T20 11.3V8H4v11h7.075q.075.525.225 1.025t.375.975zm8-15h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m0-2q.2 0 .35-.15t.15-.35t-.15-.35T18 20t-.35.15t-.15.35t.15.35t.35.15m-.5-2h1v-4h-1z"></svg:path>`,
})
export class MaterialSymbolsWorkAlertOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkAlertRoundedIcon],svg[material-symbols-work-alert-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v2.9q0 .45-.387.675t-.813.025q-.65-.3-1.362-.45T18 11q-2.9 0-4.95 2.05T11 18q0 .45.063.913t.187.912q.125.425-.137.8t-.688.375zm14 0q.2 0 .35-.15t.15-.35t-.15-.35T18 20t-.35.15t-.15.35t.15.35t.35.15m0-2q.2 0 .35-.15t.15-.35v-3q0-.2-.15-.35T18 15t-.35.15t-.15.35v3q0 .2.15.35T18 19"></svg:path>`,
})
export class MaterialSymbolsWorkAlertRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkAlertSharpIcon],svg[material-symbols-work-alert-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M2 21V6h6V2h8v4h6v6.275q-.875-.625-1.9-.95T18 11q-2.9 0-4.95 2.05T11 18q0 .775.163 1.538T11.675 21zm16 0q.2 0 .35-.15t.15-.35t-.15-.35T18 20t-.35.15t-.15.35t.15.35t.35.15m-.5-2h1v-4h-1z"></svg:path>`,
})
export class MaterialSymbolsWorkAlertSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkHistoryIcon],svg[material-symbols-work-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.65 20.35l.7-.7l-1.85-1.85V15h-1v3.2zM10 6h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v4.275q-.875-.625-1.9-.95T18 11q-2.9 0-4.95 2.05T11 18q0 .775.163 1.538T11.675 21z"></svg:path>`,
})
export class MaterialSymbolsWorkHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkHistoryOutlineIcon],svg[material-symbols-work-history-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19V8zv-.375zm0 2q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v4.275q-.45-.325-.95-.562T20 11.3V8H4v11h7.075q.075.525.225 1.025t.375.975zm6-15h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m.5-5.2V15h-1v3.2l2.15 2.15l.7-.7z"></svg:path>`,
})
export class MaterialSymbolsWorkHistoryOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkHistoryOutlineRoundedIcon],svg[material-symbols-work-history-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19V8zv-.375zm0 2q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v3q0 .425-.288.7t-.712.275t-.712-.287t-.288-.713V8H4v11h6.5q.425 0 .713.288T11.5 20t-.288.713T10.5 21zm6-15h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m.5-5.2v-2.3q0-.2-.15-.35T18 15t-.35.15t-.15.35v2.275q0 .2.075.388t.225.337l1.5 1.5q.15.15.35.15T20 20t.15-.35t-.15-.35z"></svg:path>`,
})
export class MaterialSymbolsWorkHistoryOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkHistoryOutlineSharpIcon],svg[material-symbols-work-history-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19V8zv-.375zm-2 2V6h6V2h8v4h6v6.275q-.45-.325-.962-.562T20 11.3V8H4v11h7.075q.075.525.225 1.025t.375.975zm8-15h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m.5-5.2V15h-1v3.2l2.15 2.15l.7-.7z"></svg:path>`,
})
export class MaterialSymbolsWorkHistoryOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkHistoryRoundedIcon],svg[material-symbols-work-history-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v2.9q0 .45-.387.675t-.813.025q-.65-.3-1.362-.45T18 11q-2.9 0-4.95 2.05T11 18q0 .45.063.913t.187.912q.125.425-.137.8t-.688.375zm14.5-3.2v-2.3q0-.2-.15-.35T18 15t-.35.15t-.15.35v2.275q0 .2.075.388t.225.337l1.5 1.5q.15.15.35.15T20 20t.15-.35t-.15-.35z"></svg:path>`,
})
export class MaterialSymbolsWorkHistoryRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkHistorySharpIcon],svg[material-symbols-work-history-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.65 20.35l.7-.7l-1.85-1.85V15h-1v3.2zM10 6h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M2 21V6h6V2h8v4h6v6.275q-.875-.625-1.9-.95T18 11q-2.9 0-4.95 2.05T11 18q0 .775.163 1.538T11.675 21z"></svg:path>`,
})
export class MaterialSymbolsWorkHistorySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkOutlineIcon],svg[material-symbols-work-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v11q0 .825-.587 1.413T20 21zm0-2h16V8H4zm6-13h4V4h-4zM4 19V8z"></svg:path>`,
})
export class MaterialSymbolsWorkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkOutlineSharpIcon],svg[material-symbols-work-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21V6h6V2h8v4h6v15zm2-2h16V8H4zm6-13h4V4h-4zM4 19V8z"></svg:path>`,
})
export class MaterialSymbolsWorkOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkSharpIcon],svg[material-symbols-work-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21V6h6V2h8v4h6v15zm8-15h4V4h-4z"></svg:path>`,
})
export class MaterialSymbolsWorkSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkUpdateIcon],svg[material-symbols-work-update-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 21l3-3l-.7-.7l-1.8 1.8V15h-1v4.1l-1.8-1.8l-.7.7zM10 6h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v4.275q-.875-.625-1.9-.95T18 11q-2.9 0-4.95 2.05T11 18q0 .775.163 1.538T11.675 21z"></svg:path>`,
})
export class MaterialSymbolsWorkUpdateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkUpdateOutlineIcon],svg[material-symbols-work-update-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19v-.375zV8zm0 2q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v4.275q-.45-.325-.95-.562T20 11.3V8H4v11h7.075q.075.525.225 1.025t.375.975zm6-15h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m0-2l3-3l-.7-.7l-1.8 1.8V15h-1v4.1l-1.8-1.8l-.7.7z"></svg:path>`,
})
export class MaterialSymbolsWorkUpdateOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkUpdateOutlineRoundedIcon],svg[material-symbols-work-update-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19v-.375zV8zm0 2q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v3q0 .425-.288.7t-.712.275t-.712-.287t-.288-.713V8H4v11h6.5q.425 0 .713.288T11.5 20t-.288.713T10.5 21zm6-15h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m-.5-3.9l-1.45-1.45q-.15-.15-.35-.15t-.35.15t-.15.35t.15.35l1.95 1.95q.3.3.7.3t.7-.3l1.95-1.95q.15-.15.15-.35t-.15-.35t-.35-.15t-.35.15L18.5 19.1v-3.6q0-.2-.15-.35T18 15t-.35.15t-.15.35z"></svg:path>`,
})
export class MaterialSymbolsWorkUpdateOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkUpdateOutlineSharpIcon],svg[material-symbols-work-update-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19v-.375zV8zm-2 2V6h6V2h8v4h6v6.275q-.45-.325-.95-.562T20 11.3V8H4v11h7.075q.075.525.225 1.025t.375.975zm8-15h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m0-2l3-3l-.7-.7l-1.8 1.8V15h-1v4.1l-1.8-1.8l-.7.7z"></svg:path>`,
})
export class MaterialSymbolsWorkUpdateOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkUpdateRoundedIcon],svg[material-symbols-work-update-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v2.9q0 .45-.387.675t-.813.025q-.65-.3-1.362-.45T18 11q-2.9 0-4.95 2.05T11 18q0 .45.063.913t.187.912q.125.425-.137.8t-.688.375zm13.5-1.9l-1.45-1.45q-.15-.15-.35-.15t-.35.15t-.15.35t.15.35l1.95 1.95q.3.3.7.3t.7-.3l1.95-1.95q.15-.15.15-.35t-.15-.35t-.35-.15t-.35.15L18.5 19.1v-3.6q0-.2-.15-.35T18 15t-.35.15t-.15.35z"></svg:path>`,
})
export class MaterialSymbolsWorkUpdateRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkUpdateSharpIcon],svg[material-symbols-work-update-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 21l3-3l-.7-.7l-1.8 1.8V15h-1v4.1l-1.8-1.8l-.7.7zM10 6h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M2 21V6h6V2h8v4h6v6.275q-.875-.625-1.9-.95T18 11q-2.9 0-4.95 2.05T11 18q0 .775.163 1.538T11.675 21z"></svg:path>`,
})
export class MaterialSymbolsWorkUpdateSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkbenchIcon],svg[material-symbols-workbench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22V8.5L12 2l10 6.5V22l-10-7Zm10-9.4l6.325-4.1L12 4.4L5.675 8.5Z"></svg:path>`,
})
export class MaterialSymbolsWorkbenchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkbenchOutlineIcon],svg[material-symbols-workbench-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22V8.5L12 2l10 6.5V22l-10-7Zm10-9.4l6.325-4.1L12 4.4L5.675 8.5Zm-8 5.55l6.2-4.325L4 9.8Zm16 0V9.8l-6.2 4.025Zm-9.8-4.325Zm3.6 0Z"></svg:path>`,
})
export class MaterialSymbolsWorkbenchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkspacePremiumIcon],svg[material-symbols-workspace-premium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.675 13.7l.875-2.85L8.25 9h2.85l.9-2.8l.9 2.8h2.85l-2.325 1.85l.875 2.85l-2.3-1.775zM6 23v-7.725q-.95-1.05-1.475-2.4T4 10q0-3.35 2.325-5.675T12 2t5.675 2.325T20 10q0 1.525-.525 2.875T18 15.275V23l-6-2zm6-7q2.5 0 4.25-1.75T18 10t-1.75-4.25T12 4T7.75 5.75T6 10t1.75 4.25T12 16"></svg:path>`,
})
export class MaterialSymbolsWorkspacePremiumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkspacePremiumOutlineIcon],svg[material-symbols-workspace-premium-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.675 13.7l.875-2.85L8.25 9h2.85l.9-2.8l.9 2.8h2.85l-2.325 1.85l.875 2.85l-2.3-1.775zM6 23v-7.725q-.95-1.05-1.475-2.4T4 10q0-3.35 2.325-5.675T12 2t5.675 2.325T20 10q0 1.525-.525 2.875T18 15.275V23l-6-2zm6-7q2.5 0 4.25-1.75T18 10t-1.75-4.25T12 4T7.75 5.75T6 10t1.75 4.25T12 16m-4 4.025L12 19l4 1.025v-3.1q-.875.5-1.888.788T12 18t-2.113-.288T8 16.926zm4-1.55"></svg:path>`,
})
export class MaterialSymbolsWorkspacePremiumOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkspacePremiumOutlineRoundedIcon],svg[material-symbols-workspace-premium-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 11.925l-1.7 1.3q-.15.125-.3.013t-.1-.288l.65-2.1l-1.75-1.4q-.125-.125-.075-.287T8.95 9h2.15l.65-2.05q.05-.175.25-.175t.25.175L12.9 9h2.125q.175 0 .238.163t-.063.287l-1.775 1.4l.65 2.1q.05.175-.1.288t-.3-.013zM12 21l-4.675 1.55q-.5.175-.913-.125t-.412-.8v-6.35q-.95-1.05-1.475-2.4T4 10q0-3.35 2.325-5.675T12 2t5.675 2.325T20 10q0 1.525-.525 2.875T18 15.275v6.35q0 .5-.413.8t-.912.125zm0-5q2.5 0 4.25-1.75T18 10t-1.75-4.25T12 4T7.75 5.75T6 10t1.75 4.25T12 16m-4 4.025L12 19l4 1.025v-3.1q-.875.5-1.888.788T12 18t-2.113-.288T8 16.926zm4-1.55"></svg:path>`,
})
export class MaterialSymbolsWorkspacePremiumOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkspacePremiumRoundedIcon],svg[material-symbols-workspace-premium-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 11.925l-1.7 1.3q-.15.125-.3.013t-.1-.288l.65-2.1l-1.75-1.4q-.125-.125-.075-.287T8.95 9h2.15l.65-2.05q.05-.175.25-.175t.25.175L12.9 9h2.125q.175 0 .238.163t-.063.287l-1.775 1.4l.65 2.1q.05.175-.1.288t-.3-.013zM12 21l-4.675 1.55q-.5.175-.913-.125t-.412-.8v-6.35q-.95-1.05-1.475-2.4T4 10q0-3.35 2.325-5.675T12 2t5.675 2.325T20 10q0 1.525-.525 2.875T18 15.275v6.35q0 .5-.413.8t-.912.125zm0-5q2.5 0 4.25-1.75T18 10t-1.75-4.25T12 4T7.75 5.75T6 10t1.75 4.25T12 16"></svg:path>`,
})
export class MaterialSymbolsWorkspacePremiumRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkspacesIcon],svg[material-symbols-workspaces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21q-1.65 0-2.825-1.175T2 17t1.175-2.825T6 13t2.825 1.175T10 17t-1.175 2.825T6 21m12 0q-1.65 0-2.825-1.175T14 17t1.175-2.825T18 13t2.825 1.175T22 17t-1.175 2.825T18 21m-6-10q-1.65 0-2.825-1.175T8 7t1.175-2.825T12 3t2.825 1.175T16 7t-1.175 2.825T12 11"></svg:path>`,
})
export class MaterialSymbolsWorkspacesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkspacesOutlineIcon],svg[material-symbols-workspaces-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21q-1.65 0-2.825-1.175T2 17t1.175-2.825T6 13t2.825 1.175T10 17t-1.175 2.825T6 21m12 0q-1.65 0-2.825-1.175T14 17t1.175-2.825T18 13t2.825 1.175T22 17t-1.175 2.825T18 21M6 19q.825 0 1.413-.587T8 17t-.587-1.412T6 15t-1.412.588T4 17t.588 1.413T6 19m12 0q.825 0 1.413-.587T20 17t-.587-1.412T18 15t-1.412.588T16 17t.588 1.413T18 19m-6-8q-1.65 0-2.825-1.175T8 7t1.175-2.825T12 3t2.825 1.175T16 7t-1.175 2.825T12 11m0-2q.825 0 1.413-.587T14 7t-.587-1.412T12 5t-1.412.588T10 7t.588 1.413T12 9m-6 8"></svg:path>`,
})
export class MaterialSymbolsWorkspacesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWoundsInjuriesIcon],svg[material-symbols-wounds-injuries-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.4 22L2 20.6l2.2-2.2l-2.2-.6l.525-1.925l2.175.6l-.575-2.2l1.925-.525l.6 2.2l3.425-3.425l-2.2-.6L8.4 10l2.175.575L10 8.4l1.925-.525l.6 2.2L15.95 6.65l-2.2-.6l.525-1.925l2.2.575l-.6-2.175L17.8 2l.6 2.2L20.6 2L22 3.4l-2.2 2.2l2.2.6l-.525 1.925l-2.175-.6l.575 2.2l-1.925.525l-.6-2.2l-3.425 3.425l2.2.6L15.6 14l-2.175-.575L14 15.6l-1.925.525l-.6-2.2L8.05 17.35l2.2.6l-.525 1.925l-2.2-.575l.6 2.175L6.2 22l-.6-2.2z"></svg:path>`,
})
export class MaterialSymbolsWoundsInjuriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWoundsInjuriesRoundedIcon],svg[material-symbols-wounds-injuries-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.6 19.8l-1.475 1.5q-.3.3-.712.3t-.713-.3t-.3-.712t.3-.713L4.2 18.4l-1.225-.325q-.4-.125-.625-.475t-.1-.75t.475-.612t.75-.088l1.225.325l-.325-1.25q-.125-.4.088-.75T5.075 14t.75.1t.475.625l.35 1.225l3.425-3.425L8.85 12.2q-.4-.125-.612-.475t-.088-.75t.475-.625t.75-.1l1.2.325l-.325-1.225q-.125-.4.1-.737t.625-.463t.75.088t.475.612l.325 1.225L15.95 6.65l-1.225-.35q-.4-.125-.625-.475t-.1-.75t.475-.612t.75-.088l1.25.325l-.35-1.225q-.125-.4.1-.75t.625-.475t.75.1t.475.625L18.4 4.2l1.475-1.5q.3-.3.713-.3t.712.3t.3.713t-.3.712L19.8 5.6l1.225.325q.4.125.625.475t.1.75t-.475.613t-.75.087L19.3 7.525l.325 1.25q.125.4-.088.75t-.612.475t-.75-.1t-.475-.625l-.35-1.225l-3.425 3.425l1.225.325q.4.125.612.475t.088.75t-.475.625t-.75.1l-1.2-.325l.325 1.225q.125.4-.1.738t-.625.462t-.75-.087t-.475-.613l-.325-1.225L8.05 17.35l1.225.35q.4.125.625.475t.1.75t-.475.613t-.75.087l-1.25-.325l.35 1.225q.125.4-.1.75t-.625.475t-.75-.1t-.475-.625z"></svg:path>`,
})
export class MaterialSymbolsWoundsInjuriesRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWrapTextIcon],svg[material-symbols-wrap-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.7 20.7L11 17l3.7-3.7l1.4 1.45L14.85 16h2.4q.725 0 1.238-.513T19 14.25t-.513-1.237t-1.237-.513H4v-2h13.25q1.575 0 2.663 1.088T21 14.25t-1.088 2.663T17.25 18h-2.4l1.25 1.25zM4 18v-2h5v2zM4 7V5h16v2z"></svg:path>`,
})
export class MaterialSymbolsWrapTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWrapTextRoundedIcon],svg[material-symbols-wrap-text-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12.5q-.425 0-.712-.288T4 11.5t.288-.712T5 10.5h12.25q1.575 0 2.663 1.088T21 14.25t-1.088 2.663T17.25 18h-2.4l.55.55q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L11.7 17.7q-.15-.15-.212-.325T11.425 17t.063-.375t.212-.325l2.275-2.275q.3-.3.713-.3t.712.3q.275.3.288.713t-.288.712l-.55.55h2.4q.725 0 1.238-.513T19 14.25t-.513-1.237t-1.237-.513zM5 18q-.425 0-.712-.288T4 17t.288-.712T5 16h3q.425 0 .713.288T9 17t-.288.713T8 18zM5 7q-.425 0-.712-.288T4 6t.288-.712T5 5h14q.425 0 .713.288T20 6t-.288.713T19 7z"></svg:path>`,
})
export class MaterialSymbolsWrapTextRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWristIcon],svg[material-symbols-wrist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21.9L6.1 17H1V7h4.6l1.1-1.125q.425-.425.975-.65T8.825 5H19q.425 0 .713.288T20 6t-.288.713T19 7h-5v1.5h7q.425 0 .713.288T22 9.5t-.288.713T21 10.5h-7V12h8q.425 0 .713.288T23 13t-.288.713T22 14h-8v1.5h6q.425 0 .713.288T21 16.5t-.288.713T20 17.5h-7.875l.15.3q.425.875.263 1.813t-.838 1.612z"></svg:path>`,
})
export class MaterialSymbolsWristIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWristOutlineIcon],svg[material-symbols-wrist-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21.9L6.1 17H1v-2h5.9l3.45 3.425L8.875 15.5H20q.425 0 .713.288T21 16.5t-.288.713T20 17.5h-7.875l.15.3q.425.875.263 1.813t-.838 1.612zM1 9V7h4.6l1.1-1.125q.425-.425.975-.65T8.825 5H19q.425 0 .713.288T20 6t-.288.713T19 7H8.825q-.2 0-.375.088t-.325.212L6.4 9zm13 5v-2h8q.425 0 .713.288T23 13t-.288.713T22 14zm0-3.5v-2h7q.425 0 .713.288T22 9.5t-.288.713T21 10.5z"></svg:path>`,
})
export class MaterialSymbolsWristOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWristOutlineRoundedIcon],svg[material-symbols-wrist-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.1 17H2q-.425 0-.712-.288T1 16t.288-.712T2 15h4.075q.4 0 .763.15t.637.425l2.875 2.85l-.75-1.475q-.25-.5.038-.975t.862-.475H20q.425 0 .713.288T21 16.5t-.288.713T20 17.5h-7.875l.15.3q.425.875.263 1.813t-.838 1.612q-.3.275-.7.275t-.675-.275zM1 8q0-.425.288-.712T2 7h3.6l1.1-1.125q.425-.425.975-.65T8.825 5H19q.425 0 .713.288T20 6t-.288.713T19 7H8.825q-.2 0-.375.088t-.325.212l-1.15 1.125q-.275.275-.637.425T5.575 9H2q-.425 0-.712-.288T1 8m21 6h-7q-.425 0-.712-.288T14 13t.288-.712T15 12h7q.425 0 .713.288T23 13t-.288.713T22 14m-1-3.5h-6q-.425 0-.712-.288T14 9.5t.288-.712T15 8.5h6q.425 0 .713.288T22 9.5t-.288.713T21 10.5"></svg:path>`,
})
export class MaterialSymbolsWristOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWristOutlineSharpIcon],svg[material-symbols-wrist-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21.9L6.1 17H1v-2h5.9l3.45 3.425L8.875 15.5H21v2h-8.875l1.125 2.225zM1 9V7h4.6l1.95-2H20v2H8.425L6.4 9zm13 5v-2h9v2zm0-3.5v-2h8v2zM1 12.7"></svg:path>`,
})
export class MaterialSymbolsWristOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWristRoundedIcon],svg[material-symbols-wrist-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.1 17H2q-.425 0-.712-.288T1 16V8q0-.425.288-.712T2 7h3.6l1.1-1.125q.425-.425.975-.65T8.825 5H19q.425 0 .713.288T20 6t-.288.713T19 7h-5v1.5h7q.425 0 .713.288T22 9.5t-.288.713T21 10.5h-7V12h8q.425 0 .713.288T23 13t-.288.713T22 14h-8v1.5h6q.425 0 .713.288T21 16.5t-.288.713T20 17.5h-7.875l.15.3q.425.875.263 1.813t-.838 1.612q-.3.275-.7.275t-.675-.275z"></svg:path>`,
})
export class MaterialSymbolsWristRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWristSharpIcon],svg[material-symbols-wrist-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21.9L6.1 17H1V7h4.6l1.95-2H20v2h-6v1.5h8v2h-8V12h9v2h-9v1.5h7v2h-8.875l1.125 2.225z"></svg:path>`,
})
export class MaterialSymbolsWristSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWrongLocationIcon],svg[material-symbols-wrong-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q.425 0 .875.05t.875.1l2.4 2.4l-2.1 2.1l2.825 2.825l2.1-2.1l.775.8q.1.5.175 1T20 10.2q0 2.5-1.987 5.438T12 22m4.875-13.95l-1.4-1.4l2.1-2.1l-2.1-2.1l1.4-1.4l2.1 2.1l2.1-2.1l1.4 1.4l-2.1 2.1l2.1 2.1l-1.4 1.4l-2.1-2.1z"></svg:path>`,
})
export class MaterialSymbolsWrongLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWrongLocationOutlineIcon],svg[material-symbols-wrong-location-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q.25 0 .488.013t.512.062V4.1q-.25-.05-.5-.075T12 4Q9.475 4 7.738 5.737T6 10.2q0 1.775 1.475 4.063T12 19.35q3.05-2.8 4.525-5.087T18 10.2q0-.05-.012-.1t-.013-.1h2q0 .05.013.1t.012.1q0 2.5-1.987 5.438T12 22m4.875-13.95l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1l-1.4-1.4l-2.1 2.1l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1zM12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12"></svg:path>`,
})
export class MaterialSymbolsWrongLocationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWrongLocationOutlineRoundedIcon],svg[material-symbols-wrong-location-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2q.25 0 .488.013t.512.062V4.1q-.25-.05-.5-.075T12 4Q9.475 4 7.738 5.737T6 10.2q0 1.775 1.475 4.063T12 19.35q3.05-2.8 4.525-5.087T18 10.2q0-.05-.012-.1t-.013-.1h2q0 .05.013.1t.012.1q0 2.35-1.7 5.025t-4.975 5.6q-.275.25-.625.375t-.7.125t-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762t-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2m6.975 3.95l1.4 1.4q.275.275.7.275t.7-.275t.275-.7t-.275-.7l-1.4-1.4l1.4-1.4q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275l-1.4 1.4l-1.4-1.4q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l1.4 1.4l-1.4 1.4q-.275.275-.275.7t.275.7t.7.275t.7-.275zM12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12"></svg:path>`,
})
export class MaterialSymbolsWrongLocationOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWrongLocationRoundedIcon],svg[material-symbols-wrong-location-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0-10q.425 0 .875.05t.875.1l2.4 2.4l-.7.7q-.575.575-.562 1.4t.587 1.4t1.413.575T18.3 8.05l.675-.675l.775.8q.1.5.175 1.013T20 10.2q0 2.35-1.7 5.025t-4.975 5.6q-.275.25-.625.375t-.7.125t-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762t-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2m6.975 3.95l-1.4 1.4q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l1.4-1.4l-1.4-1.4q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l1.4 1.4l1.4-1.4q.275-.275.7-.275t.7.275t.275.7t-.275.7l-1.4 1.4l1.4 1.4q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"></svg:path>`,
})
export class MaterialSymbolsWrongLocationRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWysiwygIcon],svg[material-symbols-wysiwyg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V7H5zm2-7v-2h10v2zm0 4v-2h6v2z"></svg:path>`,
})
export class MaterialSymbolsWysiwygIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWysiwygRoundedIcon],svg[material-symbols-wysiwyg-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V7H5zm3-7q-.425 0-.712-.288T7 11t.288-.712T8 10h8q.425 0 .713.288T17 11t-.288.713T16 12zm0 4q-.425 0-.712-.288T7 15t.288-.712T8 14h4q.425 0 .713.288T13 15t-.288.713T12 16z"></svg:path>`,
})
export class MaterialSymbolsWysiwygRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWysiwygSharpIcon],svg[material-symbols-wysiwyg-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zm2-2h14V7H5zm2-7v-2h10v2zm0 4v-2h6v2z"></svg:path>`,
})
export class MaterialSymbolsWysiwygSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYardIcon],svg[material-symbols-yard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19q0-2.5-1.75-4.25T6 13q0 2.5 1.75 4.25T12 19m0-5.05q.65 0 1.1-.45t.45-1.1v-.15q.2.15.412.225t.488.075q.65 0 1.1-.45T16 11q0-.5-.238-.875T15.1 9.6q.425-.15.663-.525T16 8.2q0-.65-.45-1.1t-1.1-.45q-.275 0-.487.075t-.413.225V6.8q0-.65-.45-1.1T12 5.25t-1.1.45t-.45 1.1v.15q-.2-.15-.412-.225T9.55 6.65q-.65 0-1.1.45T8 8.2q0 .5.238.875T8.9 9.6q-.425.15-.662.525T8 11q0 .65.45 1.1t1.1.45q.275 0 .488-.075t.412-.225v.15q0 .65.45 1.1t1.1.45m0-2.8q-.65 0-1.1-.437T10.45 9.6q0-.65.45-1.1t1.1-.45t1.1.45t.45 1.1q0 .675-.45 1.113t-1.1.437M12 19q2.5 0 4.25-1.75T18 13q-2.5 0-4.25 1.75T12 19m-8 3q-.825 0-1.412-.587T2 20V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v16q0 .825-.587 1.413T20 22z"></svg:path>`,
})
export class MaterialSymbolsYardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYardOutlineIcon],svg[material-symbols-yard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19q0-2.5-1.75-4.25T6 13q0 2.5 1.75 4.25T12 19m0-5.05q.65 0 1.1-.45t.45-1.1v-.15q.2.15.412.225t.488.075q.65 0 1.1-.45T16 11q0-.5-.238-.875T15.1 9.6q.425-.15.663-.525T16 8.2q0-.65-.45-1.1t-1.1-.45q-.275 0-.487.075t-.413.225V6.8q0-.65-.45-1.1T12 5.25t-1.1.45t-.45 1.1v.15q-.2-.15-.412-.225T9.55 6.65q-.65 0-1.1.45T8 8.2q0 .5.238.875T8.9 9.6q-.425.15-.662.525T8 11q0 .65.45 1.1t1.1.45q.275 0 .488-.075t.412-.225v.15q0 .65.45 1.1t1.1.45m0-2.8q-.65 0-1.1-.437T10.45 9.6q0-.65.45-1.1t1.1-.45t1.1.45t.45 1.1q0 .675-.45 1.113t-1.1.437M12 19q2.5 0 4.25-1.75T18 13q-2.5 0-4.25 1.75T12 19m-8 3q-.825 0-1.412-.587T2 20V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v16q0 .825-.587 1.413T20 22zm0-2h16V4H4zm0 0V4z"></svg:path>`,
})
export class MaterialSymbolsYardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYardOutlineRoundedIcon],svg[material-symbols-yard-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19q0-1.2-.45-2.3t-1.3-1.95q-.725-.725-1.675-1.175t-2-.525q-.225-.025-.388.137t-.137.388q.075 1.05.538 1.988t1.187 1.662q.85.85 1.938 1.313T12 19m0-5.05q.65 0 1.1-.45t.45-1.1v-.15q.2.15.412.225t.488.075q.65 0 1.1-.45T16 11q0-.5-.238-.875T15.1 9.6q.425-.15.663-.525T16 8.2q0-.65-.45-1.1t-1.1-.45q-.275 0-.487.075t-.413.225V6.8q0-.65-.45-1.1T12 5.25t-1.1.45t-.45 1.1v.15q-.2-.15-.412-.225T9.55 6.65q-.65 0-1.1.45T8 8.2q0 .5.238.875T8.9 9.6q-.425.15-.662.525T8 11q0 .65.45 1.1t1.1.45q.275 0 .488-.075t.412-.225v.15q0 .65.45 1.1t1.1.45m0-2.8q-.65 0-1.1-.437T10.45 9.6q0-.65.45-1.1t1.1-.45t1.1.45t.45 1.1q0 .675-.45 1.113t-1.1.437M12 19q1.2 0 2.3-.45t1.95-1.3q.725-.725 1.175-1.675t.525-2q.025-.225-.137-.387t-.388-.138q-1.05.075-1.987.525t-1.663 1.175q-.85.85-1.312 1.95T12 19m-8 3q-.825 0-1.412-.587T2 20V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v16q0 .825-.587 1.413T20 22zm0-2h16V4H4zm0 0V4z"></svg:path>`,
})
export class MaterialSymbolsYardOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYardOutlineSharpIcon],svg[material-symbols-yard-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19q0-2.5-1.75-4.25T6 13q0 2.5 1.75 4.25T12 19m0-5.05q.65 0 1.1-.45t.45-1.1v-.15q.2.15.412.225t.488.075q.65 0 1.1-.45T16 11q0-.5-.238-.875T15.1 9.6q.425-.15.663-.525T16 8.2q0-.65-.45-1.1t-1.1-.45q-.275 0-.487.075t-.413.225V6.8q0-.65-.45-1.1T12 5.25t-1.1.45t-.45 1.1v.15q-.2-.15-.412-.225T9.55 6.65q-.65 0-1.1.45T8 8.2q0 .5.238.875T8.9 9.6q-.425.15-.662.525T8 11q0 .65.45 1.1t1.1.45q.275 0 .488-.075t.412-.225v.15q0 .65.45 1.1t1.1.45m0-2.8q-.65 0-1.1-.437T10.45 9.6q0-.65.45-1.1t1.1-.45t1.1.45t.45 1.1q0 .675-.45 1.113t-1.1.437M12 19q2.5 0 4.25-1.75T18 13q-2.5 0-4.25 1.75T12 19M2 22V2h20v20zm2-2h16V4H4zm0 0V4z"></svg:path>`,
})
export class MaterialSymbolsYardOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYardRoundedIcon],svg[material-symbols-yard-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19q0-1.2-.45-2.3t-1.3-1.95q-.725-.725-1.675-1.175t-2-.525q-.225-.025-.388.137t-.137.388q.075 1.05.538 1.988t1.187 1.662q.85.85 1.938 1.313T12 19m0-5.05q.65 0 1.1-.45t.45-1.1v-.15q.2.15.412.225t.488.075q.65 0 1.1-.45T16 11q0-.5-.238-.875T15.1 9.6q.425-.15.663-.525T16 8.2q0-.65-.45-1.1t-1.1-.45q-.275 0-.487.075t-.413.225V6.8q0-.65-.45-1.1T12 5.25t-1.1.45t-.45 1.1v.15q-.2-.15-.412-.225T9.55 6.65q-.65 0-1.1.45T8 8.2q0 .5.238.875T8.9 9.6q-.425.15-.662.525T8 11q0 .65.45 1.1t1.1.45q.275 0 .488-.075t.412-.225v.15q0 .65.45 1.1t1.1.45m0-2.8q-.65 0-1.1-.437T10.45 9.6q0-.65.45-1.1t1.1-.45t1.1.45t.45 1.1q0 .675-.45 1.113t-1.1.437M12 19q1.2 0 2.3-.45t1.95-1.3q.725-.725 1.175-1.675t.525-2q.025-.225-.137-.387t-.388-.138q-1.05.075-1.987.525t-1.663 1.175q-.85.85-1.312 1.95T12 19m-8 3q-.825 0-1.412-.587T2 20V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v16q0 .825-.587 1.413T20 22z"></svg:path>`,
})
export class MaterialSymbolsYardRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYardSharpIcon],svg[material-symbols-yard-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19q0-2.5-1.75-4.25T6 13q0 2.5 1.75 4.25T12 19m0-5.05q.65 0 1.1-.45t.45-1.1v-.15q.2.15.412.225t.488.075q.65 0 1.1-.45T16 11q0-.5-.238-.875T15.1 9.6q.425-.15.663-.525T16 8.2q0-.65-.45-1.1t-1.1-.45q-.275 0-.487.075t-.413.225V6.8q0-.65-.45-1.1T12 5.25t-1.1.45t-.45 1.1v.15q-.2-.15-.412-.225T9.55 6.65q-.65 0-1.1.45T8 8.2q0 .5.238.875T8.9 9.6q-.425.15-.662.525T8 11q0 .65.45 1.1t1.1.45q.275 0 .488-.075t.412-.225v.15q0 .65.45 1.1t1.1.45m0-2.8q-.65 0-1.1-.437T10.45 9.6q0-.65.45-1.1t1.1-.45t1.1.45t.45 1.1q0 .675-.45 1.113t-1.1.437M12 19q2.5 0 4.25-1.75T18 13q-2.5 0-4.25 1.75T12 19M2 22V2h20v20z"></svg:path>`,
})
export class MaterialSymbolsYardSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYourTripsIcon],svg[material-symbols-your-trips-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18h8v-2H8zm-1 4q-.825 0-1.412-.587T5 20v-8q0-2.125 1.113-3.8T9 5.7V5q0-1.25.875-2.125T12 2t2.125.875T15 5v.7q1.775.825 2.888 2.5T19 12v8q0 .825-.587 1.413T17 22zm4-16.9q.275-.05.5-.075T12 5t.5.025t.5.075V5q0-.425-.288-.713T12 4t-.712.288T11 5zm-.85 9.4L12 13.1l1.85 1.4l-.7-2.275L15 10.9h-2.275L12 8.5l-.725 2.4H9l1.85 1.325z"></svg:path>`,
})
export class MaterialSymbolsYourTripsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYourTripsOutlineIcon],svg[material-symbols-your-trips-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18h8v-2H8zm-1 4q-.825 0-1.412-.587T5 20v-8q0-2.125 1.113-3.8T9 5.7V5q0-1.25.875-2.125T12 2t2.125.875T15 5v.7q1.775.825 2.888 2.5T19 12v8q0 .825-.587 1.413T17 22zm0-2h10v-8q0-2.075-1.463-3.537T12 7T8.463 8.463T7 12zm4-14.9q.275-.05.5-.075T12 5t.5.025t.5.075V5q0-.425-.288-.712T12 4t-.712.288T11 5zM7 20h10zm3.15-5.5L12 13.1l1.85 1.4l-.7-2.275L15 10.9h-2.275L12 8.5l-.725 2.4H9l1.85 1.325z"></svg:path>`,
})
export class MaterialSymbolsYourTripsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYourTripsOutlineRoundedIcon],svg[material-symbols-your-trips-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18h6q.425 0 .713-.288T16 17t-.288-.712T15 16H9q-.425 0-.712.288T8 17t.288.713T9 18m-2 4q-.825 0-1.412-.587T5 20v-8q0-2.125 1.113-3.8T9 5.7V5q0-1.25.875-2.125T12 2t2.125.875T15 5v.7q1.775.825 2.888 2.5T19 12v8q0 .825-.587 1.413T17 22zm0-2h10v-8q0-2.075-1.463-3.537T12 7T8.463 8.463T7 12zm4-14.9q.275-.05.5-.075T12 5t.5.025t.5.075V5q0-.425-.288-.712T12 4t-.712.288T11 5zM7 20h10zm5-6.9l1.225.925q.15.125.3.013t.1-.288l-.475-1.525l1.225-.875q.15-.125.1-.288t-.25-.162h-1.5l-.475-1.625Q12.2 9.1 12 9.1t-.25.175l-.475 1.625h-1.5q-.2 0-.25.163t.1.287l1.225.875l-.475 1.525q-.05.175.1.288t.3-.013z"></svg:path>`,
})
export class MaterialSymbolsYourTripsOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYourTripsOutlineSharpIcon],svg[material-symbols-your-trips-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18h8v-2H8zm-3 4V12q0-2.125 1.113-3.8T9 5.7V5q0-1.25.875-2.125T12 2t2.125.875T15 5v.7q1.775.825 2.888 2.5T19 12v10zm2-2h10v-8q0-2.075-1.463-3.537T12 7T8.463 8.463T7 12zm4-14.9q.275-.05.5-.075T12 5t.5.025t.5.075V5q0-.425-.288-.712T12 4t-.712.288T11 5zM7 20h10zm3.15-5.5L12 13.1l1.85 1.4l-.7-2.275L15 10.9h-2.275L12 8.5l-.725 2.4H9l1.85 1.325z"></svg:path>`,
})
export class MaterialSymbolsYourTripsOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYourTripsRoundedIcon],svg[material-symbols-your-trips-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18h6q.425 0 .713-.288T16 17t-.288-.712T15 16H9q-.425 0-.712.288T8 17t.288.713T9 18m-2 4q-.825 0-1.412-.587T5 20v-8q0-2.125 1.113-3.8T9 5.7V5q0-1.25.875-2.125T12 2t2.125.875T15 5v.7q1.775.825 2.888 2.5T19 12v8q0 .825-.587 1.413T17 22zm4-16.9q.275-.05.5-.075T12 5t.5.025t.5.075V5q0-.425-.288-.713T12 4t-.712.288T11 5zm1 8l1.225.925q.15.125.3.012t.1-.287l-.475-1.525l1.225-.875q.15-.125.1-.288t-.25-.162h-1.5l-.475-1.625Q12.2 9.1 12 9.1t-.25.175l-.475 1.625h-1.5q-.2 0-.25.162t.1.288l1.225.875l-.475 1.525q-.05.175.1.287t.3-.012z"></svg:path>`,
})
export class MaterialSymbolsYourTripsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYourTripsSharpIcon],svg[material-symbols-your-trips-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18h8v-2H8zm-3 4V12q0-2.125 1.113-3.8T9 5.7V5q0-1.25.875-2.125T12 2t2.125.875T15 5v.7q1.775.825 2.888 2.5T19 12v10zm6-16.9q.275-.05.5-.075T12 5t.5.025t.5.075V5q0-.425-.288-.713T12 4t-.712.288T11 5zm-.85 9.4L12 13.1l1.85 1.4l-.7-2.275L15 10.9h-2.275L12 8.5l-.725 2.4H9l1.85 1.325z"></svg:path>`,
})
export class MaterialSymbolsYourTripsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYoutubeActivityIcon],svg[material-symbols-youtube-activity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.4 17.95q-.675.025-1.287.038T13.025 18H12q-1.775 0-3.325-.05q-1.325-.05-2.613-.137T4.2 17.575q-.65-.175-1.125-.65t-.65-1.125q-.15-.575-.237-1.4t-.138-1.575Q2 11.925 2 11t.05-1.825q.05-.75.138-1.575t.237-1.4q.175-.65.65-1.125t1.125-.65q.575-.15 1.863-.238t2.612-.137Q10.225 4 12 4t3.325.05q1.325.05 2.613.138t1.862.237q.65.175 1.125.65t.65 1.125q.15.575.238 1.4t.137 1.575q.05.9.05 1.825v.425q-.475-.2-.975-.312T20 11q-2.075 0-3.537 1.463T15 16q0 .525.1 1.013t.3.937M10 14l5.2-3L10 8zm9 5v-2h-2v-2h2v-2h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsYoutubeActivityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYoutubeActivityRoundedIcon],svg[material-symbols-youtube-activity-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.2 17.575q-.65-.175-1.125-.65t-.65-1.125q-.15-.575-.237-1.4t-.138-1.575Q2 11.925 2 11t.05-1.825q.05-.75.138-1.575t.237-1.4q.175-.65.65-1.125t1.125-.65q.575-.15 1.863-.238t2.612-.137Q10.225 4 12 4t3.325.05q1.325.05 2.613.138t1.862.237q.65.175 1.125.65t.65 1.125q.225.85.313 1.863T22 10.075q0 .5-.4.8t-.9.175q-.175-.025-.337-.037T20 11q-2.075 0-3.537 1.463T15 16q0 .2.013.388t.062.387q.075.45-.2.825t-.7.375q-.45 0-.85.013t-.7.012H12q-1.775 0-3.325-.05q-1.325-.05-2.612-.137T4.2 17.575m6.55-4l3.7-2.15q.25-.15.25-.425t-.25-.425l-3.7-2.15q-.25-.15-.5.012t-.25.438v4.25q0 .275.25.438t.5.012M19 17h-1q-.425 0-.712-.288T17 16t.288-.712T18 15h1v-1q0-.425.288-.712T20 13t.713.288T21 14v1h1q.425 0 .713.288T23 16t-.288.713T22 17h-1v1q0 .425-.288.713T20 19t-.712-.288T19 18z"></svg:path>`,
})
export class MaterialSymbolsYoutubeActivityRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYoutubeMusicIcon],svg[material-symbols-youtube-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2.5q3.125 0 5.312-2.188Q19.5 15.125 19.5 12q0-3.125-2.188-5.312Q15.125 4.5 12 4.5q-3.125 0-5.312 2.188Q4.5 8.875 4.5 12q0 3.125 2.188 5.312Q8.875 19.5 12 19.5Zm0-1.5q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Zm-2-2.5l5.5-3.5L10 8.5Z"></svg:path>`,
})
export class MaterialSymbolsYoutubeMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYoutubeSearchedForIcon],svg[material-symbols-youtube-searched-for-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.55 20.45L14.8 14.7q-.8.65-1.775.975T11 16t-2-.312t-1.75-.888l1.45-1.45q.5.3 1.075.475T11 14q1.875 0 3.187-1.312T15.5 9.5t-1.312-3.187T11 5Q9.275 5 8.012 6.163T6.55 9.05L7.8 7.8l1.4 1.4l-3.7 3.7l-3.7-3.7l1.4-1.4l1.35 1.3q.15-2.575 2-4.337T11 3q2.725 0 4.613 1.888T17.5 9.5q0 1.05-.325 2.05T16.2 13.3l5.75 5.75z"></svg:path>`,
})
export class MaterialSymbolsYoutubeSearchedForIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYoutubeSearchedForRoundedIcon],svg[material-symbols-youtube-searched-for-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16q-.6 0-1.162-.1t-1.088-.3q-.4-.15-.55-.55t.05-.8q.2-.375.575-.488t.8.013q.325.125.675.175t.7.05q1.875 0 3.188-1.312T15.5 9.5t-1.312-3.187T11 5Q9.275 5 8.012 6.163T6.55 9.05l.55-.55q.275-.275.7-.275t.7.275t.275.7t-.275.7l-2.3 2.3q-.3.3-.7.3t-.7-.3L2.5 9.9q-.275-.275-.275-.7t.3-.725Q2.8 8.2 3.2 8.2t.7.275l.65.625q.15-2.575 2-4.337T11 3q2.725 0 4.613 1.888T17.5 9.5q0 1.05-.325 2.05T16.2 13.3l5.05 5.05q.275.275.275.7t-.275.7t-.7.275t-.7-.275L14.8 14.7q-.8.65-1.775.975T11 16"></svg:path>`,
})
export class MaterialSymbolsYoutubeSearchedForRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYoutubeTvIcon],svg[material-symbols-youtube-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20v-2h12v2Zm-2-3q-.825 0-1.412-.587Q2 15.825 2 15V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v9q0 .825-.587 1.413Q20.825 17 20 17Zm6-3l5.5-3.5L10 7Z"></svg:path>`,
})
export class MaterialSymbolsYoutubeTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYoutubeTvOutlineIcon],svg[material-symbols-youtube-tv-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20v-2h12v2Zm-2-3q-.825 0-1.412-.587Q2 15.825 2 15V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v9q0 .825-.587 1.413Q20.825 17 20 17Zm0-2h16V6H4v9Zm6-1l5.5-3.5L10 7Zm-6 1V6v9Z"></svg:path>`,
})
export class MaterialSymbolsYoutubeTvOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZonePersonAlertIcon],svg[material-symbols-zone-person-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18v-3h2v3h3v2zm4.8-4l1-5.1l-1.8.7V15H6v-4.7l3.95-1.7q.875-.375 1.288-.487T12 8q.525 0 .975.275T13.7 9l1 1.6l.2.3q.1.15.225.275q-1.225.8-2.025 2.063T12.075 16zm4.7-8.5q-.825 0-1.412-.587T11.5 5.5t.588-1.412T13.5 3.5t1.413.588T15.5 5.5t-.587 1.413T13.5 7.5M2 5V2q0-.825.588-1.412T4 0h3v2H4v3zm18 0V2h-3V0h3q.825 0 1.413.588T22 2v3zm-1 17q-2.075 0-3.537-1.463T14 17t1.463-3.537T19 12t3.538 1.463T24 17t-1.463 3.538T19 22m-.5-4h1v-4h-1zm.5 2q.2 0 .35-.15t.15-.35t-.15-.35T19 19t-.35.15t-.15.35t.15.35t.35.15"></svg:path>`,
})
export class MaterialSymbolsZonePersonAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZonePersonAlertRoundedIcon],svg[material-symbols-zone-person-alert-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18v-2q0-.425.288-.712T3 15t.713.288T4 16v2h2q.425 0 .713.288T7 19t-.288.713T6 20zm4.8-4l1-5.1l-1.8.7V14q0 .425-.288.712T7 15t-.712-.288T6 14v-3.05q0-.3.163-.537t.437-.363L9.95 8.6q.875-.375 1.288-.487T12 8q.525 0 .975.275T13.7 9l1 1.6l.2.3q.1.15.225.275q-1.225.8-2.025 2.063T12.075 16zm4.7-8.5q-.825 0-1.412-.587T11.5 5.5t.588-1.412T13.5 3.5t1.413.588T15.5 5.5t-.587 1.413T13.5 7.5M2 4V2q0-.825.588-1.412T4 0h2q.425 0 .713.288T7 1t-.288.713T6 2H4v2q0 .425-.288.713T3 5t-.712-.288T2 4m18 0V2h-2q-.425 0-.712-.288T17 1t.288-.712T18 0h2q.825 0 1.413.588T22 2v2q0 .425-.288.713T21 5t-.712-.288T20 4m-1 18q-2.075 0-3.537-1.463T14 17t1.463-3.537T19 12t3.538 1.463T24 17t-1.463 3.538T19 22m0-4q.2 0 .35-.15t.15-.35v-3q0-.2-.15-.35T19 14t-.35.15t-.15.35v3q0 .2.15.35T19 18m0 2q.2 0 .35-.15t.15-.35t-.15-.35T19 19t-.35.15t-.15.35t.15.35t.35.15"></svg:path>`,
})
export class MaterialSymbolsZonePersonAlertRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZonePersonAlertSharpIcon],svg[material-symbols-zone-person-alert-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20v-5h2v3h3v2zm6.8-4l1-5.1l-1.8.7V15H6v-4.7l3.95-1.7q.875-.375 1.288-.487T12 8q.525 0 .975.275T13.7 9l1 1.6l.2.3q.1.15.225.275q-1.225.8-2.025 2.063T12.075 16zm4.7-8.5q-.825 0-1.412-.587T11.5 5.5t.588-1.412T13.5 3.5t1.413.588T15.5 5.5t-.587 1.413T13.5 7.5M2 5V0h5v2H4v3zm18 0V2h-3V0h5v5zm-1 17q-2.075 0-3.537-1.463T14 17t1.463-3.537T19 12t3.538 1.463T24 17t-1.463 3.538T19 22m-.5-4h1v-4h-1zm.5 2q.2 0 .35-.15t.15-.35t-.15-.35T19 19t-.35.15t-.15.35t.15.35t.35.15"></svg:path>`,
})
export class MaterialSymbolsZonePersonAlertSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZonePersonIdleIcon],svg[material-symbols-zone-person-idle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.475 22.05l-7.275-7.3l-.4 1.95h-4l1-5.1l-1.8.7v3.4H6V11l2.4-1.025L.675 2.25L2.1.825l19.8 19.8zM4 20.7q-.825 0-1.412-.587T2 18.7v-3h2v3h3v2zm16-15v-3h-3v-2h3q.825 0 1.413.588T22 2.7v3zm-18 0v-3q0-.425.163-.788t.412-.637L4 2.725V5.7zm15 15v-2h2.975l1.425 1.4q-.25.275-.612.437T20 20.7zM6.825 2.7l-2-2H7v2zM22 17.875l-2-2V15.7h2zM13.5 8.2q-.825 0-1.412-.587T11.5 6.2t.588-1.412T13.5 4.2t1.413.588T15.5 6.2t-.587 1.413T13.5 8.2"></svg:path>`,
})
export class MaterialSymbolsZonePersonIdleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZonePersonIdleRoundedIcon],svg[material-symbols-zone-person-idle-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.775 21.325L13.2 14.75l-.4 1.95h-4l1-5.1l-1.8.7v2.4q0 .425-.288.712T7 15.7t-.712-.287T6 14.7v-3.05q0-.3.163-.537t.437-.363l1.8-.775L1.375 2.95q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3l18.375 18.4q.3.3.3.7t-.3.7t-.712.3t-.713-.3M4 20.7q-.825 0-1.412-.587T2 18.7v-2q0-.425.288-.712T3 15.7t.713.288T4 16.7v2h2q.425 0 .713.288T7 19.7t-.288.713T6 20.7zm16-16v-2h-2q-.425 0-.712-.288T17 1.7t.288-.712T18 .7h2q.825 0 1.413.588T22 2.7v2q0 .425-.288.713T21 5.7t-.712-.288T20 4.7m-18 0V3.2q0-.425.163-.788t.412-.637L4 3.225V4.7q0 .425-.288.713T3 5.7t-.712-.288T2 4.7m16 16q-.425 0-.712-.288T17 19.7t.288-.712T18 18.7h1.725l1.425 1.4q-.25.275-.612.437t-.788.163zM6.825 2.7l-2-2H7q.425 0 .713.287T8 1.7t-.288.713T7 2.7zM22 17.875l-2-2V15.7q0-.425.288-.712T21 14.7t.713.288t.287.712zM13.5 8.2q-.825 0-1.412-.587T11.5 6.2t.588-1.412T13.5 4.2t1.413.588T15.5 6.2t-.587 1.413T13.5 8.2"></svg:path>`,
})
export class MaterialSymbolsZonePersonIdleRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZonePersonIdleSharpIcon],svg[material-symbols-zone-person-idle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.475 22.05l-7.275-7.3l-.4 1.95h-4l1-5.1l-1.8.7v3.4H6V11l2.4-1.025L.675 2.25L2.1.825l19.8 19.8zM2 20.7v-5h2v3h3v2zm18-15v-3h-3v-2h5v5zm-18 0v-3h2v3zm15 15v-2h3v2zM6.825 2.7l-2-2H7v2zM22 17.875l-2-2V15.7h2zM13.5 8.2q-.825 0-1.412-.587T11.5 6.2t.588-1.412T13.5 4.2t1.413.588T15.5 6.2t-.587 1.413T13.5 8.2"></svg:path>`,
})
export class MaterialSymbolsZonePersonIdleSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZonePersonUrgentIcon],svg[material-symbols-zone-person-urgent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6V3q0-.825.588-1.412T4 1h3v2H4v3zm5 15H4q-.825 0-1.412-.587T2 19v-3h2v3h3zM20 6V3h-3V1h3q.825 0 1.413.588T22 3v3zm-6.5 2.5q-.825 0-1.412-.587T11.5 6.5t.588-1.412T13.5 4.5t1.413.588T15.5 6.5t-.587 1.413T13.5 8.5M8.8 17l1-5.1l-1.8.7V16H6v-4.7l3.95-1.7q.875-.375 1.288-.487T12 9q.525 0 .975.275T13.7 10l1 1.6q.275.425.6.788t.75.662l-1.025 1.775q-.425-.275-.813-.612T13.5 13.5l-.7 3.5zm6.2 5q-.575 0-.862-.5t-.013-1l4-7q.325-.475.9-.525t.85.525l4 7q.325.5 0 1T23 22zm4-1q.2 0 .35-.15t.15-.35t-.15-.35T19 20t-.35.15t-.15.35t.15.35t.35.15m-.5-2h1v-4h-1z"></svg:path>`,
})
export class MaterialSymbolsZonePersonUrgentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZonePersonUrgentRoundedIcon],svg[material-symbols-zone-person-urgent-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5V3q0-.825.588-1.412T4 1h2q.425 0 .713.288T7 2t-.288.713T6 3H4v2q0 .425-.288.713T3 6t-.712-.288T2 5m2 16q-.825 0-1.412-.587T2 19v-2q0-.425.288-.712T3 16t.713.288T4 17v2h2q.425 0 .713.288T7 20t-.288.713T6 21zM20 5V3h-2q-.425 0-.712-.288T17 2t.288-.712T18 1h2q.825 0 1.413.588T22 3v2q0 .425-.288.713T21 6t-.712-.288T20 5m-6.5 3.5q-.825 0-1.412-.587T11.5 6.5t.588-1.412T13.5 4.5t1.413.588T15.5 6.5t-.587 1.413T13.5 8.5M8.8 17l1-5.1l-1.8.7V15q0 .425-.288.712T7 16t-.712-.288T6 15v-3.05q0-.3.163-.537t.437-.363L9.95 9.6q.875-.375 1.288-.487T12 9q.525 0 .975.275T13.7 10l1 1.6q.275.425.6.788t.75.662l-1.025 1.775q-.425-.275-.813-.612T13.5 13.5l-.7 3.5zm6.2 5q-.575 0-.862-.5t-.013-1l4-7q.325-.475.9-.525t.85.525l4 7q.325.5 0 1T23 22zm4-1q.2 0 .35-.15t.15-.35t-.15-.35T19 20t-.35.15t-.15.35t.15.35t.35.15m0-2q.2 0 .35-.15t.15-.35v-3q0-.2-.15-.35T19 15t-.35.15t-.15.35v3q0 .2.15.35T19 19"></svg:path>`,
})
export class MaterialSymbolsZonePersonUrgentRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZonePersonUrgentSharpIcon],svg[material-symbols-zone-person-urgent-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6V1h5v2H4v3zm5 15H2v-5h2v3h3zM20 6V3h-3V1h5v5zm-6.5 2.5q-.825 0-1.412-.587T11.5 6.5t.588-1.412T13.5 4.5t1.413.588T15.5 6.5t-.587 1.413T13.5 8.5M8.8 17l1-5.1l-1.8.7V16H6v-4.7l3.95-1.7q.875-.375 1.288-.487T12 9q.525 0 .975.275T13.7 10l1 1.6q.275.425.6.788t.75.662l-1.025 1.775q-.425-.275-.813-.612T13.5 13.5l-.7 3.5zm4.475 5L19 11.975L24.725 22zM19 21q.2 0 .35-.15t.15-.35t-.15-.35T19 20t-.35.15t-.15.35t.15.35t.35.15m-.5-2h1v-4h-1z"></svg:path>`,
})
export class MaterialSymbolsZonePersonUrgentSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZoomInIcon],svg[material-symbols-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14m-1-1.5v-2h-2v-2h2v-2h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsZoomInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZoomInMapIcon],svg[material-symbols-zoom-in-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.9 21.5l-1.4-1.4L5.6 17H3v-2h6v6H7v-2.6zm16.2 0L17 18.4V21h-2v-6h6v2h-2.6l3.1 3.1zM3 9V7h2.6L2.5 3.9l1.4-1.4L7 5.6V3h2v6zm12 0V3h2v2.6l3.1-3.1l1.4 1.4L18.4 7H21v2z"></svg:path>`,
})
export class MaterialSymbolsZoomInMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZoomInMapRoundedIcon],svg[material-symbols-zoom-in-map-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 18.4l-2.4 2.4q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L5.6 17H4q-.425 0-.713-.287T3 16t.288-.712T4 15h4q.425 0 .713.288T9 16v4q0 .425-.288.713T8 21t-.712-.288T7 20zm10 0V20q0 .425-.288.713T16 21t-.712-.288T15 20v-4q0-.425.288-.712T16 15h4q.425 0 .713.288T21 16t-.288.713T20 17h-1.6l2.4 2.4q.275.275.275.7t-.275.7t-.7.275t-.7-.275zM5.6 7L3.2 4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275L7 5.6V4q0-.425.288-.713T8 3t.713.288T9 4v4q0 .425-.288.713T8 9H4q-.425 0-.712-.288T3 8t.288-.712T4 7zm12.8 0H20q.425 0 .713.288T21 8t-.288.713T20 9h-4q-.425 0-.712-.288T15 8V4q0-.425.288-.712T16 3t.713.288T17 4v1.6l2.4-2.4q.275-.275.7-.275t.7.275t.275.7t-.275.7z"></svg:path>`,
})
export class MaterialSymbolsZoomInMapRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZoomInRoundedIcon],svg[material-symbols-zoom-in-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 10.5h-1q-.425 0-.712-.288T6.5 9.5t.288-.712T7.5 8.5h1v-1q0-.425.288-.712T9.5 6.5t.713.288t.287.712v1h1q.425 0 .713.288t.287.712t-.288.713t-.712.287h-1v1q0 .425-.288.713T9.5 12.5t-.712-.288T8.5 11.5zm1 5.5q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"></svg:path>`,
})
export class MaterialSymbolsZoomInRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZoomOutIcon],svg[material-symbols-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14M7 10.5v-2h5v2z"></svg:path>`,
})
export class MaterialSymbolsZoomOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZoomOutMapIcon],svg[material-symbols-zoom-out-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-6h2v2.6l3.1-3.1l1.4 1.4L6.4 19H9v2zm12 0v-2h2.6l-3.1-3.1l1.4-1.4l3.1 3.1V15h2v6zM8.1 9.5L5 6.4V9H3V3h6v2H6.4l3.1 3.1zm7.8 0l-1.4-1.4L17.6 5H15V3h6v6h-2V6.4z"></svg:path>`,
})
export class MaterialSymbolsZoomOutMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZoomOutMapRoundedIcon],svg[material-symbols-zoom-out-map-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.4 19H8q.425 0 .713.288T9 20t-.288.713T8 21H4q-.425 0-.712-.288T3 20v-4q0-.425.288-.712T4 15t.713.288T5 16v1.6l2.4-2.4q.275-.275.7-.275t.7.275t.275.7t-.275.7zm11.2 0l-2.4-2.4q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.4 2.4V16q0-.425.288-.712T20 15t.713.288T21 16v4q0 .425-.288.713T20 21h-4q-.425 0-.712-.288T15 20t.288-.712T16 19zM5 6.4V8q0 .425-.288.713T4 9t-.712-.288T3 8V4q0-.425.288-.712T4 3h4q.425 0 .713.288T9 4t-.288.713T8 5H6.4l2.4 2.4q.275.275.275.7t-.275.7t-.7.275t-.7-.275zm14 0l-2.4 2.4q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L17.6 5H16q-.425 0-.712-.287T15 4t.288-.712T16 3h4q.425 0 .713.288T21 4v4q0 .425-.288.713T20 9t-.712-.288T19 8z"></svg:path>`,
})
export class MaterialSymbolsZoomOutMapRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZoomOutRoundedIcon],svg[material-symbols-zoom-out-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10.5q-.425 0-.712-.288T7 9.5t.288-.712T8 8.5h3q.425 0 .713.288T12 9.5t-.288.713T11 10.5zM9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"></svg:path>`,
})
export class MaterialSymbolsZoomOutRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
