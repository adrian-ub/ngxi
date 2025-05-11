import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jam500pxIcon],svg[jam-500px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.991 17.692c3.68 0 6.673-2.972 6.673-6.625S12.67 4.441 8.991 4.441a6.7 6.7 0 0 0-4.798 2.02v-5.34h9.178a.563.563 0 0 0 .564-.56a.56.56 0 0 0-.564-.561H3.628a.563.563 0 0 0-.564.56v7.453l-.007.136a.566.566 0 0 0 1.06.294a5.55 5.55 0 0 1 4.874-2.88c3.057 0 5.543 2.468 5.543 5.503s-2.486 5.504-5.543 5.504a5.56 5.56 0 0 1-2.844-.787v-4.716c0-1.558 1.276-2.825 2.844-2.825a2.837 2.837 0 0 1 2.844 2.825c0 1.557-1.275 2.824-2.844 2.824a2.8 2.8 0 0 1-1.095-.217a.566.566 0 0 0-.738.302a.56.56 0 0 0 .303.733c.486.201 1 .303 1.53.303c2.191 0 3.974-1.77 3.974-3.945c0-2.176-1.783-3.946-3.974-3.946c-2.19 0-3.973 1.77-3.973 3.946v3.832a5.46 5.46 0 0 1-1.37-2.366a.565.565 0 0 0-1.09.298c.795 2.862 3.44 4.861 6.433 4.861"></svg:path><svg:path d="M5.598 2.833a.56.56 0 0 0-.287.74c.127.283.46.41.745.285c1.77-.78 5.248-1.596 8.647 1.715a.565.565 0 0 0 .8-.008a.56.56 0 0 0-.009-.793c-4.02-3.915-8.26-2.66-9.896-1.939M15.695 16.13a.567.567 0 0 0-.797.056a7.85 7.85 0 0 1-5.907 2.674c-3.98 0-7.322-2.957-7.773-6.878a.564.564 0 0 0-.625-.493a.56.56 0 0 0-.497.62c.516 4.488 4.34 7.873 8.895 7.873a8.98 8.98 0 0 0 6.76-3.06a.56.56 0 0 0-.056-.791zm-8.141-3.704a.565.565 0 0 0 .799.006l.58-.568l.572.575a.565.565 0 0 0 .798.006a.56.56 0 0 0 .006-.793l-.572-.576l.559-.547a.56.56 0 0 0 .005-.793a.567.567 0 0 0-.798-.006l-.559.548l-.551-.555a.567.567 0 0 0-.799-.006a.56.56 0 0 0-.005.793l.55.555l-.579.568a.56.56 0 0 0-.006.793"></svg:path></svg:g>`,
})
export class Jam500pxIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamAlarmClockFIcon],svg[jam-alarm-clock-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.962 2.05a5 5 0 1 1 7.668 6.387a9.01 9.01 0 0 0-7.668-6.386zM1.37 8.439a5 5 0 1 1 7.668-6.387A9.01 9.01 0 0 0 1.37 8.438zM10 18a7 7 0 1 1 0-14a7 7 0 0 1 0 14m1-8V6a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2z"></svg:path>`,
})
export class JamAlarmClockFIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamAccessibilityIcon],svg[jam-accessibility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.9 10.016l-.324 3.087a1 1 0 1 1-1.989-.21L4.31 6.01H1a1 1 0 0 1 0-2.003h10a1 1 0 0 1 0 2.003H7.69l.723 6.885a1.001 1.001 0 1 1-1.99.209L6.1 10.016zm.1-6.01c-1.105 0-2-.897-2-2.003S4.895 0 6 0s2 .897 2 2.003a2 2 0 0 1-2 2.003"></svg:path>`,
})
export class JamAccessibilityIcon {
  readonly viewBox = input("0 0 12 14")
  readonly width = input("0.86em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamAlarmClockIcon],svg[jam-alarm-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 10h2a1 1 0 0 1 0 2h-3a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0zm7.63-1.562a9 9 0 1 1-17.26 0a5 5 0 1 1 7.668-6.387a9 9 0 0 1 1.924 0a5 5 0 1 1 7.668 6.387m-.938-2.113a3 3 0 0 0-4.48-3.735a9.03 9.03 0 0 1 4.48 3.735M6.787 2.59a3 3 0 0 0-4.48 3.735a9.03 9.03 0 0 1 4.48-3.735M10 18a7 7 0 1 0 0-14a7 7 0 0 0 0 14"></svg:path>`,
})
export class JamAlarmClockIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamAlertFIcon],svg[jam-alert-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20.393c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.478 10 10s-4.477 10-10 10m0-15a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1m0 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamAlertFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamAirbnbIcon],svg[jam-airbnb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.497 13.278c1.017 2.29.441 4.676-1.433 5.938c-.774.522-1.592.783-2.431.783c-.848 0-1.716-.266-2.583-.797c-.512-.314-.966-.72-1.405-1.112q-.21-.189-.422-.371a1 1 0 0 1-.171-.192q-.183.162-.353.318c-.432.392-.841.762-1.286 1.078c-1.643 1.167-3.276 1.38-4.856.635a4.446 4.446 0 0 1-2.3-5.5c.493-1.414 1.135-2.79 1.757-4.12l.02-.043c.883-1.89 1.806-3.797 2.698-5.641l.793-1.641c.34-.706.795-1.498 1.595-2.026c.823-.543 1.783-.717 2.703-.49c.937.233 1.735.86 2.248 1.764c.763 1.346 1.44 2.762 2.015 3.984a375 375 0 0 1 3.411 7.433M11.62 3.97l-.555-1.165c-.412-.869-1.167-1.392-2.02-1.4c-.873.004-1.65.512-2.09 1.394q-.199.397-.404.79c-.226.439-.46.892-.674 1.35c-1.5 3.224-2.883 6.218-4.227 9.152c-.396.863-.41 1.772-.043 2.627c.35.814.974 1.422 1.757 1.711c.324.12.66.179.999.179c.483 0 .971-.12 1.432-.36c.585-.304 1.097-.738 1.593-1.157c.216-.183.432-.366.653-.537c.579-.448.26-.959.136-1.158c-.572-.915-1.164-1.862-1.624-2.842c-.444-.948-.538-1.903-.278-2.837c.413-1.482 1.952-2.33 3.503-1.93c1.456.374 2.341 1.873 2.058 3.486c-.194 1.107-.66 2.178-1.51 3.475c-.055.082-.12.168-.186.255c-.24.317-.511.677-.451 1.064c.064.41.426.705.745.965q.108.088.206.172c.805.711 1.719 1.371 2.951 1.388h.026l.025-.003q.117-.015.235-.027c.19-.02.389-.04.589-.097a3.06 3.06 0 0 0 1.953-1.692c.37-.83.356-1.766-.038-2.634c-1.547-3.41-3.18-6.846-4.761-10.169m-1.162 7.32c.183-.907.054-1.46-.43-1.85q-.468-.372-.988-.373q-.384 0-.793.204c-.545.274-.78.748-.737 1.495c.076 1.313.747 2.383 1.504 3.483c.633-.89 1.221-1.854 1.444-2.96z"></svg:path>`,
})
export class JamAirbnbIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamActivityIcon],svg[jam-activity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.116 10.749L6 1.948l-1.116 8.8H1c-.552 0-1-.437-1-.976a.99.99 0 0 1 1-.978h2.116l.9-7.086C4.15.636 5.15-.124 6.245.008c.91.11 1.626.81 1.739 1.7l.899 7.086h1.974L12 16.04l1.142-7.245H19c.552 0 1 .438 1 .978s-.448.977-1 .977h-4.142l-.881 5.587a1.98 1.98 0 0 1-1.672 1.634c-1.092.165-2.113-.567-2.282-1.634l-.88-5.587z"></svg:path>`,
})
export class JamActivityIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamAlienFIcon],svg[jam-alien-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20.858c-4.5 0-9-6.03-9-11a9 9 0 1 1 18 0c0 4.97-4.5 11-9 11m-1.974-6.181c.529-.192 1.42-1.946.853-3.503c-.566-1.557-2.399-2.32-2.905-2.135c-.506.184-1.42 1.946-.853 3.503c.566 1.557 2.376 2.327 2.905 2.135m3.948 0c.529.192 2.339-.578 2.905-2.135c.567-1.557-.347-3.319-.853-3.503s-2.339.578-2.905 2.135c-.567 1.557.324 3.31.853 3.503"></svg:path>`,
})
export class JamAlienFIcon {
  readonly viewBox = input("-3 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamAlignCenterIcon],svg[jam-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h8a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2m0 8h8a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"></svg:path>`,
})
export class JamAlignCenterIcon {
  readonly viewBox = input("-5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamAlertIcon],svg[jam-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-13a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1m0 10a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class JamAlertIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamAlienIcon],svg[jam-alien-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20c-4.5 0-9-6.03-9-11a9 9 0 1 1 18 0c0 4.97-4.5 11-9 11m0-2c3.14 0 7-4.869 7-9A7 7 0 0 0 2 9c0 4.131 3.86 9 7 9m-1.974-4.18c-.529.192-2.339-.579-2.905-2.136c-.567-1.557.347-3.319.853-3.503s2.339.578 2.905 2.135c.567 1.557-.324 3.31-.853 3.503zm3.948 0c-.529-.193-1.42-1.947-.853-3.504c.566-1.557 2.399-2.32 2.905-2.135c.506.184 1.42 1.946.853 3.503c-.566 1.557-2.376 2.328-2.905 2.135z"></svg:path>`,
})
export class JamAlienIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamAlignRightIcon],svg[jam-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 0h6a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2M5 8h8a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"></svg:path>`,
})
export class JamAlignRightIcon {
  readonly viewBox = input("-5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamAnchorIcon],svg[jam-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.93 11.998A1 1 0 0 1 17 10h2a1 1 0 0 1 0 2h-.055a9.001 9.001 0 0 1-17.89 0H1a1 1 0 0 1 0-2h2a1 1 0 0 1 .07 1.998A7.005 7.005 0 0 0 9 17.929V7.874A4.002 4.002 0 0 1 10 0a4 4 0 0 1 1 7.874v10.055a7.005 7.005 0 0 0 5.93-5.931M10 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class JamAnchorIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamAlignJustifyIcon],svg[jam-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2m0 8h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2m0-4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"></svg:path>`,
})
export class JamAlignJustifyIcon {
  readonly viewBox = input("-5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamAlignLeftIcon],svg[jam-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0h6a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m0 8h8a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m0-4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"></svg:path>`,
})
export class JamAlignLeftIcon {
  readonly viewBox = input("-5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamAndroidCircleIcon],svg[jam-android-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.39 8.248h-.026a.6.6 0 0 0-.596.596v2.594c0 .329.267.596.596.596h.026a.6.6 0 0 0 .596-.596V8.844a.6.6 0 0 0-.597-.596zm.88 4.192c0 .3.247.546.548.546h.586v1.402c0 .329.268.596.596.596h.025a.6.6 0 0 0 .597-.596v-1.402h.818v1.402c0 .329.27.596.596.596h.026a.6.6 0 0 0 .596-.596v-1.402h.586c.3 0 .547-.245.547-.547V8.343H7.27zm4.136-6.581l.465-.718a.099.099 0 1 0-.166-.108l-.482.743a3.1 3.1 0 0 0-1.192-.232c-.427 0-.83.084-1.192.232l-.481-.743a.1.1 0 0 0-.137-.029a.1.1 0 0 0-.03.137l.466.718c-.839.41-1.405 1.185-1.405 2.074q0 .082.009.162h5.541q.008-.08.008-.162c0-.889-.566-1.663-1.404-2.074m-2.66 1.284a.266.266 0 1 1 0-.532a.266.266 0 0 1 0 .532m2.57 0a.266.266 0 1 1-.001-.532a.266.266 0 0 1 0 .532zm2.382 1.105h-.025a.6.6 0 0 0-.597.596v2.594c0 .329.27.596.597.596h.025a.597.597 0 0 0 .596-.596V8.844a.6.6 0 0 0-.596-.596"></svg:path><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class JamAndroidCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamAmazonIcon],svg[jam-amazon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.829 4.741c-.484.038-1.043.075-1.601.15c-.856.111-1.712.261-2.42.596C6.432 6.047 5.5 7.239 5.5 8.993c0 2.2 1.415 3.317 3.202 3.317c.596 0 1.08-.073 1.526-.185c.708-.224 1.303-.634 2.01-1.38c.41.56.52.821 1.229 1.417c.186.075.372.075.52-.037a67 67 0 0 0 1.64-1.417c.185-.15.147-.373.036-.56c-.41-.522-.819-.97-.819-1.975V4.816c0-1.418.11-2.722-.93-3.69C13.057.34 11.716.042 10.675.042h-.447C8.329.155 6.319.975 5.872 3.324c-.074.298.15.41.299.449l2.084.26c.223-.038.334-.224.371-.41c.187-.82.857-1.23 1.602-1.305h.15c.445 0 .929.187 1.19.558c.297.448.26 1.045.26 1.567zm0 2.164c0 .858.036 1.529-.41 2.273c-.26.522-.707.858-1.191.97c-.074 0-.185.038-.298.038c-.818 0-1.303-.633-1.303-1.566c0-1.193.708-1.753 1.6-2.014c.485-.112 1.044-.15 1.602-.15zm6.857 8.86c.91-.77 1.294-2.167 1.314-2.897v-.122a.66.66 0 0 0-.08-.344c-.182-.222-1.518-.426-2.67-.081a3.2 3.2 0 0 0-.87.425c-.202.143-.162.323.04.304c.223-.041.506-.06.83-.102c.708-.06 1.537-.08 1.74.183c.281.343-.324 1.843-.588 2.492c-.08.203.101.285.284.142"></svg:path><svg:path d="M.1 12.868c2.609 2.37 6.047 3.789 9.89 3.789c2.386 0 5.136-.67 7.26-1.945c.284-.163.566-.346.828-.548c.364-.262.041-.669-.323-.507c-.161.06-.344.143-.505.203a19.5 19.5 0 0 1-7.038 1.338c-3.6 0-7.078-.993-9.89-2.634c-.263-.141-.445.122-.222.304"></svg:path></svg:g>`,
})
export class JamAmazonIcon {
  readonly viewBox = input("-2 -3.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamAndroidIcon],svg[jam-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.247 6.51h-.051c-.656 0-1.19.537-1.19 1.19v5.183c0 .656.534 1.19 1.19 1.19h.052c.655 0 1.19-.535 1.19-1.19V7.7a1.195 1.195 0 0 0-1.191-1.19m1.76 8.373c0 .602.492 1.092 1.094 1.092h1.17v2.8c0 .657.535 1.191 1.19 1.191h.05c.657 0 1.192-.535 1.192-1.192v-2.799h1.634v2.8c0 .657.538 1.191 1.192 1.191h.05c.657 0 1.191-.535 1.191-1.192v-2.799h1.17c.601 0 1.093-.49 1.093-1.092V6.701H3.007zm8.259-13.145l.929-1.433a.197.197 0 1 0-.33-.215l-.963 1.483a6.3 6.3 0 0 0-2.38-.462a6.3 6.3 0 0 0-2.382.462L5.179.09a.197.197 0 0 0-.275-.058a.197.197 0 0 0-.058.273l.93 1.433C4.1 2.56 2.97 4.107 2.97 5.882q0 .164.016.323h11.07a4 4 0 0 0 .014-.323c0-1.775-1.13-3.322-2.805-4.144zM5.955 4.305a.532.532 0 1 1-.002-1.064a.532.532 0 0 1 .002 1.064m5.132 0a.532.532 0 1 1-.003-1.064a.532.532 0 0 1 .003 1.064m4.758 2.205h-.05c-.655 0-1.191.537-1.191 1.19v5.183c0 .656.537 1.19 1.191 1.19h.05c.657 0 1.191-.535 1.191-1.19V7.7c0-.654-.535-1.19-1.191-1.19"></svg:path>`,
})
export class JamAndroidIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamApertureIcon],svg[jam-aperture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.164 11.107l1.817 1.049l1.87-1.08V9.01L9.96 7.92L8.164 9.042zm-2-1.155V2.978a8.02 8.02 0 0 0-3.839 4.758zm-4.163-.094L2 10a7.97 7.97 0 0 0 2.19 5.499l3.79-2.189zm6.163-3.174l5.808-3.63A7.96 7.96 0 0 0 10 2q-.95.002-1.836.212zm7.503-2.33l-3.786 2.365l6.115 3.531a7.98 7.98 0 0 0-2.329-5.897zm-1.816 5.812v6.848a8.02 8.02 0 0 0 3.796-4.656zm-7.993 6.68A7.96 7.96 0 0 0 10 18c.637 0 1.257-.074 1.85-.215v-4.4l-5.992 3.46zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamApertureIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamAppleIcon],svg[jam-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.623 10.627c-.025-2.533 2.066-3.748 2.159-3.808c-1.175-1.72-3.005-1.955-3.657-1.982c-1.557-.158-3.039.917-3.83.917c-.788 0-2.008-.894-3.3-.87C3.299 4.909 1.734 5.87.86 7.39c-1.764 3.06-.452 7.595 1.267 10.077c.84 1.215 1.842 2.58 3.157 2.53c1.266-.05 1.745-.819 3.276-.819s1.962.82 3.302.795c1.363-.026 2.226-1.239 3.06-2.457c.965-1.41 1.362-2.775 1.386-2.845c-.03-.013-2.658-1.02-2.684-4.045zm-2.518-7.433c.698-.847 1.169-2.022 1.04-3.194C11.14.04 9.921.67 9.2 1.515c-.647.75-1.214 1.945-1.062 3.094c1.122.088 2.268-.57 2.967-1.415"></svg:path>`,
})
export class JamAppleIcon {
  readonly viewBox = input("-3.5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamAppleCircleIcon],svg[jam-apple-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.8 10.313c-.012-1.266 1.034-1.873 1.08-1.904c-.587-.86-1.502-.977-1.828-.99c-.779-.08-1.52.458-1.915.458c-.394 0-1.004-.447-1.65-.435c-.849.013-1.631.493-2.068 1.254c-.882 1.53-.226 3.797.633 5.038c.42.607.921 1.29 1.579 1.265c.633-.025.872-.41 1.638-.41s.98.41 1.65.398c.682-.013 1.114-.62 1.531-1.229c.482-.704.681-1.387.693-1.422c-.015-.007-1.33-.51-1.342-2.023zm-1.258-3.716c.349-.424.584-1.011.52-1.597c-.503.02-1.112.335-1.473.757c-.323.375-.607.973-.53 1.548c.56.043 1.133-.286 1.483-.708"></svg:path><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class JamAppleCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamAppleSquareIcon],svg[jam-apple-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.8 10.313c-.012-1.266 1.034-1.873 1.08-1.904c-.587-.86-1.502-.977-1.828-.99c-.779-.08-1.52.458-1.915.458c-.394 0-1.004-.447-1.65-.435c-.849.013-1.631.493-2.068 1.254c-.882 1.53-.226 3.797.633 5.038c.42.607.921 1.29 1.579 1.265c.633-.025.872-.41 1.638-.41s.98.41 1.65.398c.682-.013 1.114-.62 1.531-1.229c.482-.704.681-1.387.693-1.422c-.015-.007-1.33-.51-1.342-2.023zm-1.258-3.716c.349-.424.584-1.011.52-1.597c-.503.02-1.112.335-1.473.757c-.323.375-.607.973-.53 1.548c.56.043 1.133-.286 1.483-.708"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamAppleSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArchiveIcon],svg[jam-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h16V2H2zm16 2v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1zM4 18h12V7H4zm4-4h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamArchiveIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArchiveFIcon],svg[jam-archive-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1zm1 2v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7zM8 14a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"></svg:path>`,
})
export class JamArchiveFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowCircleDownIcon],svg[jam-arrow-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-1-6.414V6a1 1 0 1 1 2 0v5.586l2.536-2.536a1 1 0 0 1 1.414 1.414l-4.243 4.243a.997.997 0 0 1-1.414 0L5.05 10.464A1 1 0 0 1 6.464 9.05z"></svg:path>`,
})
export class JamArrowCircleDownIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowCircleDownFIcon],svg[jam-arrow-circle-down-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.293 14.707a.997.997 0 0 0 1.414 0l4.243-4.243a1 1 0 1 0-1.414-1.414L11 11.586V6a1 1 0 0 0-2 0v5.586L6.464 9.05a1 1 0 1 0-1.414 1.414zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamArrowCircleDownFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowCircleDownLeftIcon],svg[jam-arrow-circle-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-1.828-7.586l3.95-3.95a1 1 0 0 1 1.414 1.415l-3.95 3.95h3.586a1 1 0 0 1 0 2h-6a.997.997 0 0 1-1-1v-6a1 1 0 1 1 2 0z"></svg:path>`,
})
export class JamArrowCircleDownLeftIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowCircleDownLeftFIcon],svg[jam-arrow-circle-down-left-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.172 12.828a.997.997 0 0 0 1 1h6a1 1 0 1 0 0-2H9.586l3.95-3.95a1 1 0 1 0-1.415-1.414l-3.95 3.95V6.828a1 1 0 1 0-2 0zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamArrowCircleDownLeftFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowCircleDownRightIcon],svg[jam-arrow-circle-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m.414-6.172l-3.95-3.95A1 1 0 0 1 7.88 6.465l3.95 3.95V6.828a1 1 0 0 1 2 0v6a.997.997 0 0 1-1 1h-6a1 1 0 1 1 0-2z"></svg:path>`,
})
export class JamArrowCircleDownRightIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowCircleDownRightFIcon],svg[jam-arrow-circle-down-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.828 13.828a.997.997 0 0 0 1-1v-6a1 1 0 1 0-2 0v3.586l-3.95-3.95A1 1 0 0 0 6.465 7.88l3.95 3.95H6.828a1 1 0 0 0 0 2h6zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamArrowCircleDownRightFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowCircleLeftIcon],svg[jam-arrow-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16M8.414 9H14a1 1 0 0 1 0 2H8.414l2.536 2.536a1 1 0 0 1-1.414 1.414l-4.243-4.243a.997.997 0 0 1 0-1.414L9.536 5.05a1 1 0 0 1 1.414 1.414z"></svg:path>`,
})
export class JamArrowCircleLeftIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowCircleLeftFIcon],svg[jam-arrow-circle-left-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.293 9.293a.997.997 0 0 0 0 1.414l4.243 4.243a1 1 0 1 0 1.414-1.414L8.414 11H14a1 1 0 0 0 0-2H8.414l2.536-2.536A1 1 0 1 0 9.536 5.05zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamArrowCircleLeftFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowCircleRightIcon],svg[jam-arrow-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1.586-7H6a1 1 0 0 1 0-2h5.586L9.05 6.464a1 1 0 1 1 1.414-1.414l4.243 4.243a.997.997 0 0 1 0 1.414l-4.243 4.243a1 1 0 1 1-1.414-1.414z"></svg:path>`,
})
export class JamArrowCircleRightIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowCircleRightFIcon],svg[jam-arrow-circle-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.707 10.707a.997.997 0 0 0 0-1.414L10.464 5.05A1 1 0 0 0 9.05 6.464L11.586 9H6a1 1 0 1 0 0 2h5.586L9.05 13.536a1 1 0 0 0 1.414 1.414zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamArrowCircleRightFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowCircleUpIcon],svg[jam-arrow-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8.414V14a1 1 0 0 1-2 0V8.414L6.464 10.95A1 1 0 1 1 5.05 9.536l4.243-4.243a.997.997 0 0 1 1.414 0l4.243 4.243a1 1 0 1 1-1.414 1.414zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path>`,
})
export class JamArrowCircleUpIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowCircleUpFIcon],svg[jam-arrow-circle-up-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.707 5.293a.997.997 0 0 0-1.414 0L5.05 9.536a1 1 0 0 0 1.414 1.414L9 8.414V14a1 1 0 0 0 2 0V8.414l2.536 2.536a1 1 0 0 0 1.414-1.414zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamArrowCircleUpFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowCircleUpLeftIcon],svg[jam-arrow-circle-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-.414-9.828l3.95 3.95a1 1 0 0 1-1.415 1.414l-3.95-3.95v3.586a1 1 0 0 1-2 0v-6a.997.997 0 0 1 1-1h6a1 1 0 0 1 0 2z"></svg:path>`,
})
export class JamArrowCircleUpLeftIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowCircleUpLeftFIcon],svg[jam-arrow-circle-up-left-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.172 6.172a.997.997 0 0 0-1 1v6a1 1 0 0 0 2 0V9.586l3.95 3.95a1 1 0 0 0 1.414-1.415l-3.95-3.95h3.586a1 1 0 0 0 0-2zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamArrowCircleUpLeftFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowCircleUpRightIcon],svg[jam-arrow-circle-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1.828-8.414l-3.95 3.95a1 1 0 1 1-1.414-1.415l3.95-3.95H6.828a1 1 0 1 1 0-2h6a.997.997 0 0 1 1 1v6a1 1 0 1 1-2 0z"></svg:path>`,
})
export class JamArrowCircleUpRightIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowCircleUpRightFIcon],svg[jam-arrow-circle-up-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.828 7.172a.997.997 0 0 0-1-1h-6a1 1 0 1 0 0 2h3.586l-3.95 3.95a1 1 0 0 0 1.415 1.414l3.95-3.95v3.586a1 1 0 0 0 2 0v-6zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamArrowCircleUpRightFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowDownIcon],svg[jam-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 11.243l3.95-3.95a1 1 0 1 1 1.414 1.414l-5.657 5.657a.997.997 0 0 1-1.414 0L.636 8.707A1 1 0 1 1 2.05 7.293L6 11.243V1.657a1 1 0 1 1 2 0z"></svg:path>`,
})
export class JamArrowDownIcon {
  readonly viewBox = input("-5 -4.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowDownLeftIcon],svg[jam-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.828 8.9h5.586a1 1 0 0 1 0 2h-8a.997.997 0 0 1-1-1v-8a1 1 0 1 1 2 0v5.585L9.192.707a1 1 0 1 1 1.415 1.414z"></svg:path>`,
})
export class JamArrowDownLeftIcon {
  readonly viewBox = input("-6.5 -6.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowDownRightIcon],svg[jam-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.9 7.485V1.9a1 1 0 0 1 2 0v8a.997.997 0 0 1-1 1h-8a1 1 0 1 1 0-2h5.585L.707 2.121A1 1 0 0 1 2.121.707z"></svg:path>`,
})
export class JamArrowDownRightIcon {
  readonly viewBox = input("-6.5 -6.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowLeftIcon],svg[jam-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.414 7.657l3.95 3.95A1 1 0 0 1 5.95 13.02L.293 7.364a.997.997 0 0 1 0-1.414L5.95.293a1 1 0 1 1 1.414 1.414l-3.95 3.95H13a1 1 0 0 1 0 2z"></svg:path>`,
})
export class JamArrowLeftIcon {
  readonly viewBox = input("-5 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowRightIcon],svg[jam-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2z"></svg:path>`,
})
export class JamArrowRightIcon {
  readonly viewBox = input("-5 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowSquareDownIcon],svg[jam-arrow-square-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path><svg:path d="M9 11.586V6a1 1 0 1 1 2 0v5.586l2.536-2.536a1 1 0 0 1 1.414 1.414l-4.243 4.243a.997.997 0 0 1-1.414 0L5.05 10.464A1 1 0 1 1 6.464 9.05z"></svg:path></svg:g>`,
})
export class JamArrowSquareDownIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowSquareDownFIcon],svg[jam-arrow-square-down-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.293 14.707a.997.997 0 0 0 1.414 0l4.243-4.243a1 1 0 1 0-1.414-1.414L11 11.586V6a1 1 0 0 0-2 0v5.586L6.464 9.05a1 1 0 1 0-1.414 1.414zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamArrowSquareDownFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowSquareDownLeftIcon],svg[jam-arrow-square-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path><svg:path d="m8.172 10.414l3.95-3.95a1 1 0 1 1 1.414 1.415l-3.95 3.95h3.586a1 1 0 0 1 0 2h-6a.997.997 0 0 1-1-1v-6a1 1 0 1 1 2 0z"></svg:path></svg:g>`,
})
export class JamArrowSquareDownLeftIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowSquareDownLeftFIcon],svg[jam-arrow-square-down-left-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.172 12.828a.997.997 0 0 0 1 1h6a1 1 0 1 0 0-2H9.586l3.95-3.95a1 1 0 1 0-1.415-1.414l-3.95 3.95V6.828a1 1 0 1 0-2 0zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamArrowSquareDownLeftFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowSquareDownRightIcon],svg[jam-arrow-square-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path><svg:path d="m10.414 11.828l-3.95-3.95A1 1 0 1 1 7.88 6.465l3.95 3.95V6.828a1 1 0 0 1 2 0v6a.997.997 0 0 1-1 1h-6a1 1 0 1 1 0-2z"></svg:path></svg:g>`,
})
export class JamArrowSquareDownRightIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowSquareDownRightFIcon],svg[jam-arrow-square-down-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.828 13.828a.997.997 0 0 0 1-1v-6a1 1 0 1 0-2 0v3.586l-3.95-3.95A1 1 0 0 0 6.465 7.88l3.95 3.95H6.828a1 1 0 0 0 0 2h6zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamArrowSquareDownRightFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowSquareLeftIcon],svg[jam-arrow-square-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path><svg:path d="M8.414 9H14a1 1 0 1 1 0 2H8.414l2.536 2.536a1 1 0 0 1-1.414 1.414l-4.243-4.243a.997.997 0 0 1 0-1.414L9.536 5.05a1 1 0 1 1 1.414 1.414z"></svg:path></svg:g>`,
})
export class JamArrowSquareLeftIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowSquareLeftFIcon],svg[jam-arrow-square-left-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.293 9.293a.997.997 0 0 0 0 1.414l4.243 4.243a1 1 0 1 0 1.414-1.414L8.414 11H14a1 1 0 0 0 0-2H8.414l2.536-2.536A1 1 0 1 0 9.536 5.05zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamArrowSquareLeftFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowSquareRightIcon],svg[jam-arrow-square-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path><svg:path d="M11.586 11H6a1 1 0 1 1 0-2h5.586L9.05 6.464a1 1 0 0 1 1.414-1.414l4.243 4.243a.997.997 0 0 1 0 1.414l-4.243 4.243a1 1 0 1 1-1.414-1.414z"></svg:path></svg:g>`,
})
export class JamArrowSquareRightIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowSquareRightFIcon],svg[jam-arrow-square-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.707 10.707a.997.997 0 0 0 0-1.414L10.464 5.05A1 1 0 0 0 9.05 6.464L11.586 9H6a1 1 0 1 0 0 2h5.586L9.05 13.536a1 1 0 0 0 1.414 1.414zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamArrowSquareRightFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowSquareUpIcon],svg[jam-arrow-square-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path><svg:path d="M11 8.414V14a1 1 0 0 1-2 0V8.414L6.464 10.95A1 1 0 1 1 5.05 9.536l4.243-4.243a.997.997 0 0 1 1.414 0l4.243 4.243a1 1 0 1 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class JamArrowSquareUpIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowSquareUpFIcon],svg[jam-arrow-square-up-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.707 5.293a.997.997 0 0 0-1.414 0L5.05 9.536a1 1 0 0 0 1.414 1.414L9 8.414V14a1 1 0 0 0 2 0V8.414l2.536 2.536a1 1 0 0 0 1.414-1.414zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamArrowSquareUpFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowSquareUpLeftIcon],svg[jam-arrow-square-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path><svg:path d="m9.586 8.172l3.95 3.95a1 1 0 1 1-1.415 1.414l-3.95-3.95v3.586a1 1 0 0 1-2 0v-6a.997.997 0 0 1 1-1h6a1 1 0 1 1 0 2z"></svg:path></svg:g>`,
})
export class JamArrowSquareUpLeftIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowSquareUpLeftFIcon],svg[jam-arrow-square-up-left-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.172 6.172a.997.997 0 0 0-1 1v6a1 1 0 0 0 2 0V9.586l3.95 3.95a1 1 0 0 0 1.414-1.415l-3.95-3.95h3.586a1 1 0 0 0 0-2zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamArrowSquareUpLeftFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowSquareUpRightIcon],svg[jam-arrow-square-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path><svg:path d="m11.828 9.586l-3.95 3.95a1 1 0 1 1-1.414-1.415l3.95-3.95H6.828a1 1 0 0 1 0-2h6a.997.997 0 0 1 1 1v6a1 1 0 1 1-2 0z"></svg:path></svg:g>`,
})
export class JamArrowSquareUpRightIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowSquareUpRightFIcon],svg[jam-arrow-square-up-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.828 7.172a.997.997 0 0 0-1-1h-6a1 1 0 1 0 0 2h3.586l-3.95 3.95a1 1 0 0 0 1.415 1.414l3.95-3.95v3.586a1 1 0 0 0 2 0v-6zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamArrowSquareUpRightFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowUpIcon],svg[jam-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 4.071l-3.95 3.95A1 1 0 0 1 .636 6.607L6.293.95a.997.997 0 0 1 1.414 0l5.657 5.657A1 1 0 0 1 11.95 8.02L8 4.07v9.586a1 1 0 1 1-2 0z"></svg:path>`,
})
export class JamArrowUpIcon {
  readonly viewBox = input("-5 -4.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowUpLeftIcon],svg[jam-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.757 3.828v5.586a1 1 0 0 1-2 0v-8a.997.997 0 0 1 1-1h8a1 1 0 1 1 0 2H4.172l6.778 6.778a1 1 0 1 1-1.414 1.415z"></svg:path>`,
})
export class JamArrowUpLeftIcon {
  readonly viewBox = input("-6 -6.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowUpRightIcon],svg[jam-arrow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.828 2.414H2.243a1 1 0 1 1 0-2h8a.997.997 0 0 1 1 1v8a1 1 0 0 1-2 0V3.828l-6.779 6.779A1 1 0 0 1 1.05 9.192z"></svg:path>`,
})
export class JamArrowUpRightIcon {
  readonly viewBox = input("-6 -6.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowsCornersIcon],svg[jam-arrows-corners-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0h6a1 1 0 1 1 0 2H3.414L18 16.586V13a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1h-6a1 1 0 0 1 0-2h3.586L2 3.414V7a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamArrowsCornersIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowsFullscreenIcon],svg[jam-arrows-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V3.414L11.414 10L18 16.586V13a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1h-6a1 1 0 0 1 0-2h3.586L10 11.414L3.414 18H7a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 2 0v3.586L8.586 10L2 3.414V7a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H3.414L10 8.586L16.586 2H13a1 1 0 0 1 0-2z"></svg:path>`,
})
export class JamArrowsFullscreenIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowsHIcon],svg[jam-arrows-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.423 4.996h13.154L14.04 2.46a1 1 0 1 1 1.415-1.414l4.242 4.243a1 1 0 0 1 0 1.414l-4.242 4.242a1 1 0 0 1-1.415-1.414l2.536-2.535H3.423L5.96 9.53a1 1 0 1 1-1.415 1.414L.302 6.703a.997.997 0 0 1 0-1.414l4.242-4.243A1 1 0 1 1 5.96 2.46z"></svg:path>`,
})
export class JamArrowsHIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamArrowsVIcon],svg[jam-arrows-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16.573V3.419L2.464 5.954A1 1 0 0 1 1.05 4.54L5.293.297a1 1 0 0 1 1.414 0L10.95 4.54a1 1 0 1 1-1.414 1.414L7 3.42v13.154l2.536-2.536a1 1 0 1 1 1.414 1.414l-4.243 4.243a.997.997 0 0 1-1.414 0L1.05 15.451a1 1 0 1 1 1.414-1.414z"></svg:path>`,
})
export class JamArrowsVIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamAttachmentIcon],svg[jam-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.433 5.359a.933.933 0 0 1 1.357 0c.375.39.375 1.022 0 1.412L8.26 18.78a4.663 4.663 0 0 1-6.783 0c-1.873-1.95-1.873-5.113 0-7.064L11.65 1.12a2.8 2.8 0 0 1 4.07 0c1.124 1.17 1.124 3.068 0 4.239L6.902 14.54a.933.933 0 0 1-1.356 0a1.03 1.03 0 0 1 0-1.412l8.818-9.183a1.03 1.03 0 0 0 0-1.413a.933.933 0 0 0-1.357 0L2.832 13.13c-1.123 1.17-1.123 3.068 0 4.238a2.8 2.8 0 0 0 4.07 0z"></svg:path>`,
})
export class JamAttachmentIcon {
  readonly viewBox = input("-1.5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBackgroundColorIcon],svg[jam-background-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.543 8l.506 1.386c.17.466.734.722 1.26.57c.525-.15.813-.651.643-1.117l-2.05-5.61c-.197-.542-.675-.967-1.285-1.142c-1.05-.302-2.179.209-2.52 1.141L2.05 8.838c-.17.467.118.967.643 1.119c.525.15 1.09-.105 1.26-.571L4.458 8zm-.73-2H5.188L6 3.776zM2 0h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2"></svg:path>`,
})
export class JamBackgroundColorIcon {
  readonly viewBox = input("-6 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBackpackIcon],svg[jam-backpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13v5h8v-5zm10-.764V18a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-5.764c-.614-.55-1-1.348-1-2.236V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3c0 .888-.386 1.687-1 2.236M3 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm5 5H6v-1a1 1 0 1 1 2 0zm0 2v1a1 1 0 0 1-2 0v-1zM3.5 0A1.5 1.5 0 0 1 5 1.5v3a1.5 1.5 0 0 1-3 0v-3A1.5 1.5 0 0 1 3.5 0m7 0A1.5 1.5 0 0 1 12 1.5v3a1.5 1.5 0 0 1-3 0v-3A1.5 1.5 0 0 1 10.5 0"></svg:path>`,
})
export class JamBackpackIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBackpackFIcon],svg[jam-backpack-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14a1 1 0 0 0 2 0h3c.729 0 1.412-.195 2-.535V18a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-4.535c.588.34 1.271.535 2 .535zm2-1v-3a1 1 0 1 0-2 0v3H3a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3zM5 3H3q-.519.002-1 .126V1.5a1.5 1.5 0 0 1 3 0zm7 .126A4 4 0 0 0 11 3H9V1.5a1.5 1.5 0 0 1 3 0z"></svg:path>`,
})
export class JamBackpackFIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBackwardIcon],svg[jam-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.51.69a1.966 1.966 0 0 1 2.814-.182c.43.386.676.942.676 1.526v13.932C20 17.089 19.107 18 18.006 18a1.98 1.98 0 0 1-1.496-.69l-6.012-6.966a2.065 2.065 0 0 1 0-2.688zm1.496 15.276V2.034L11.994 9zM6.51.69A1.966 1.966 0 0 1 9.324.508c.43.386.676.942.676 1.526v13.932C10 17.089 9.107 18 8.006 18a1.98 1.98 0 0 1-1.496-.69L.498 10.344a2.065 2.065 0 0 1 0-2.688zm1.496 15.276V2.034L1.994 9z"></svg:path>`,
})
export class JamBackwardIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBackwardCircleIcon],svg[jam-backward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m.973-11.246l1.956-1.398c.905-.646 2.13-.389 2.737.576c.218.346.334.753.334 1.17v5.796c0 1.16-.883 2.102-1.972 2.102a1.9 1.9 0 0 1-1.099-.356l-1.956-1.398C10.818 14.24 10.006 15 9.028 15a1.9 1.9 0 0 1-1.099-.356l-4.055-2.898c-.905-.647-1.146-1.952-.54-2.917c.143-.227.327-.422.54-.575L7.93 5.356c.905-.646 2.13-.389 2.737.576c.157.249.26.53.307.822zm-1.945 6.144V7.102L4.973 10zm5 0V7.102l-3.02 2.159l-.004 1.476z"></svg:path>`,
})
export class JamBackwardCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBackwardCircleFIcon],svg[jam-backward-circle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.973 6.754a2.2 2.2 0 0 0-.307-.822c-.607-.965-1.832-1.222-2.737-.576L3.874 8.254a2 2 0 0 0-.54.575c-.606.965-.365 2.27.54 2.917l4.055 2.898A1.9 1.9 0 0 0 9.028 15c.978 0 1.79-.759 1.945-1.754l1.956 1.398a1.9 1.9 0 0 0 1.099.356C15.117 15 16 14.059 16 12.898V7.102c0-.417-.116-.824-.334-1.17c-.607-.965-1.832-1.222-2.737-.576zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m4.028-7.102l-3.024-2.161l.003-1.476l3.02-2.159v5.796zm-5 0L4.973 10l4.055-2.898z"></svg:path>`,
})
export class JamBackwardCircleFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBackwardSquareIcon],svg[jam-backward-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm6.973 4.754l1.956-1.398c.905-.646 2.13-.389 2.737.576c.218.346.334.753.334 1.17v5.796c0 1.16-.883 2.102-1.972 2.102a1.9 1.9 0 0 1-1.099-.356l-1.956-1.398C10.818 14.24 10.006 15 9.028 15a1.9 1.9 0 0 1-1.099-.356l-4.055-2.898c-.905-.647-1.146-1.952-.54-2.917c.143-.227.327-.422.54-.575L7.93 5.356c.905-.646 2.13-.389 2.737.576c.157.249.26.53.307.822zm-1.945 6.144V7.102L4.973 10zm5 0V7.102l-3.02 2.159l-.004 1.476z"></svg:path>`,
})
export class JamBackwardSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBackwardSquareFIcon],svg[jam-backward-square-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.973 6.754a2.2 2.2 0 0 0-.307-.822c-.607-.965-1.832-1.222-2.737-.576L3.874 8.254a2 2 0 0 0-.54.575c-.606.965-.365 2.27.54 2.917l4.055 2.898A1.9 1.9 0 0 0 9.028 15c.978 0 1.79-.759 1.945-1.754l1.956 1.398a1.9 1.9 0 0 0 1.099.356C15.117 15 16 14.059 16 12.898V7.102c0-.417-.116-.824-.334-1.17c-.607-.965-1.832-1.222-2.737-.576zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m10.052 7.114v5.795l-3.02-2.158l-.004-1.476zm-4.97 0v5.795l-4.054-2.897z"></svg:path>`,
})
export class JamBackwardSquareFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBaiduIcon],svg[jam-baidu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.503 7.382c.114 1.681-.774 3.115-1.986 3.202c-1.21.087-2.285-1.205-2.4-2.887s.774-3.115 1.985-3.202s2.286 1.205 2.4 2.887zm8.34-6.97c-1.176-.308-2.458.767-2.862 2.4c-.406 1.633.219 3.207 1.395 3.515c1.177.308 2.46-.767 2.864-2.4C14.767 1.8 13.126.485 12.844.412zm2.76 5.506c-1.238.018-2.22 1.226-2.193 3.096s1.05 2.722 2.29 2.703c1.236-.019 2.22-.901 2.192-2.772c-.036-2.434-1.993-3.032-2.29-3.027zM6.635 0C5.458 0 4.503 1.354 4.503 3.023s.955 3.023 2.132 3.023s2.133-1.353 2.133-3.023S7.813 0 6.635 0m-.272 9.389c-.68 1.002-1.452 1.98-2.95 3.262c-1.497 1.282-2.132 2.167-2.132 3.472c0 1.304.726 3.471 2.79 3.471s3.063-.466 4.697-.466s2.723.652 4.787.652s2.926-2.003 2.926-3.308s-.358-2.043-2.012-3.532c-1.06-.955-1.958-1.733-3.365-3.737c-.695-.99-1.497-1.118-2.336-1.118c-.84 0-1.724.302-2.405 1.304"></svg:path>`,
})
export class JamBaiduIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBaiduCircleIcon],svg[jam-baidu-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M7.731 8.74c.058.85-.39 1.575-1.003 1.619s-1.156-.61-1.214-1.46s.391-1.575 1.004-1.619c.612-.044 1.156.61 1.213 1.46m4.217-3.524c-.595-.156-1.243.388-1.447 1.213c-.206.826.11 1.622.705 1.777c.595.156 1.244-.387 1.448-1.213c.267-1.075-.563-1.74-.706-1.777M13.343 8c-.626.01-1.122.62-1.108 1.566c.013.945.53 1.376 1.157 1.367c.625-.01 1.122-.456 1.109-1.402c-.019-1.23-1.008-1.533-1.158-1.53zM8.81 5.008c-.596 0-1.078.684-1.078 1.528s.482 1.528 1.078 1.528c.595 0 1.078-.684 1.078-1.528S9.405 5.008 8.81 5.008m-.138 4.746c-.344.507-.734 1.002-1.491 1.65s-1.078 1.095-1.078 1.755s.367 1.755 1.41 1.755c1.044 0 1.549-.236 2.375-.236c.825 0 1.376.33 2.42.33c1.043 0 1.48-1.013 1.48-1.673s-.182-1.033-1.018-1.785c-.536-.483-.99-.877-1.701-1.89c-.352-.5-.757-.565-1.181-.565s-.872.153-1.216.66z"></svg:path></svg:g>`,
})
export class JamBaiduCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBaiduSquareIcon],svg[jam-baidu-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.731 8.74c.058.85-.39 1.575-1.003 1.619s-1.156-.61-1.214-1.46s.391-1.575 1.004-1.619c.612-.044 1.156.61 1.213 1.46m4.217-3.524c-.595-.156-1.243.388-1.447 1.213c-.206.826.11 1.622.705 1.777c.595.156 1.244-.387 1.448-1.213c.267-1.075-.563-1.74-.706-1.777M13.343 8c-.626.01-1.122.62-1.108 1.566c.013.945.53 1.376 1.157 1.367c.625-.01 1.122-.456 1.109-1.402c-.019-1.23-1.008-1.533-1.158-1.53zM8.81 5.008c-.596 0-1.078.684-1.078 1.528s.482 1.528 1.078 1.528c.595 0 1.078-.684 1.078-1.528S9.405 5.008 8.81 5.008m-.138 4.746c-.344.507-.734 1.002-1.491 1.65s-1.078 1.095-1.078 1.755s.367 1.755 1.41 1.755c1.044 0 1.549-.236 2.375-.236c.825 0 1.376.33 2.42.33c1.043 0 1.48-1.013 1.48-1.673s-.182-1.033-1.018-1.785c-.536-.483-.99-.877-1.701-1.89c-.352-.5-.757-.565-1.181-.565s-.872.153-1.216.66z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamBaiduSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBandageIcon],svg[jam-bandage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.697 1.445a4.69 4.69 0 0 1 0 6.635L8.08 18.697a4.692 4.692 0 0 1-6.635-6.635L12.062 1.445a4.69 4.69 0 0 1 6.635 0M17.37 2.772a2.815 2.815 0 0 0-3.981 0L2.772 13.39a2.815 2.815 0 1 0 3.981 3.98L17.37 6.754a2.813 2.813 0 0 0 0-3.98zm-5.972 4.645l1.327 1.327a.94.94 0 0 1 0 1.327l-2.654 2.654a.94.94 0 0 1-1.327 0l-1.327-1.327a.94.94 0 0 1 0-1.327l2.654-2.654a.94.94 0 0 1 1.327 0m.664-.664a.938.938 0 1 1 1.327-1.327a.938.938 0 0 1-1.327 1.327M5.426 13.39a.938.938 0 1 1 1.327-1.327a.938.938 0 0 1-1.327 1.327m9.953-7.3a.938.938 0 1 1 1.327-1.326a.938.938 0 0 1-1.327 1.327zM4.763 16.707A.938.938 0 1 1 6.09 15.38a.938.938 0 0 1-1.327 1.327"></svg:path>`,
})
export class JamBandageIcon {
  readonly viewBox = input("-1.5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBandageFIcon],svg[jam-bandage-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.92 1.536a5 5 0 0 1 0 7.07L8.607 19.92a5 5 0 1 1-7.071-7.07L12.849 1.535a5 5 0 0 1 7.071 0zm-7.778 6.363a1 1 0 0 0-1.414 0l-2.829 2.829a1 1 0 0 0 0 1.414l1.415 1.414a1 1 0 0 0 1.414 0l2.828-2.828a1 1 0 0 0 0-1.414zm.707-.707a1 1 0 1 0 1.414-1.414a1 1 0 0 0-1.414 1.414m-7.07 7.071a1 1 0 1 0 1.413-1.414a1 1 0 0 0-1.414 1.414zm10.606-7.778a1 1 0 1 0 1.414-1.414a1 1 0 0 0-1.414 1.414M5.07 17.8a1 1 0 1 0 1.414-1.414A1 1 0 0 0 5.07 17.8"></svg:path>`,
})
export class JamBandageFIcon {
  readonly viewBox = input("-1 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBarChartIcon],svg[jam-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1m12 4a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1M7 8a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamBarChartIcon {
  readonly viewBox = input("-5 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBaseballIcon],svg[jam-baseball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.05 11H13a1 1 0 0 1 0-2h.05a9.95 9.95 0 0 1 2.065-5.151A7.97 7.97 0 0 0 10 2a7.97 7.97 0 0 0-5.115 1.849A9.95 9.95 0 0 1 6.95 9H7a1 1 0 1 1 0 2h-.05a9.95 9.95 0 0 1-2.065 5.151A7.97 7.97 0 0 0 10 18a7.97 7.97 0 0 0 5.115-1.849A9.95 9.95 0 0 1 13.05 11m2.012-1.998a1 1 0 0 1 0 1.996a7.96 7.96 0 0 0 1.438 3.668A7.97 7.97 0 0 0 18 10c0-1.71-.538-3.329-1.5-4.666a7.96 7.96 0 0 0-1.438 3.668M4.938 10.998a1 1 0 0 1 0-1.996A7.96 7.96 0 0 0 3.5 5.334A7.97 7.97 0 0 0 2 10c0 1.71.538 3.329 1.5 4.666a7.96 7.96 0 0 0 1.438-3.668M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamBaseballIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBasketballIcon],svg[jam-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17.938a7.97 7.97 0 0 0 4.115-1.787A9.95 9.95 0 0 1 13.05 11H11zm-2 0V11H6.95a9.95 9.95 0 0 1-2.065 5.151A7.97 7.97 0 0 0 9 17.938M6.95 9H9V2.062a7.97 7.97 0 0 0-4.115 1.787A9.95 9.95 0 0 1 6.95 9M11 2.062V9h2.05a9.95 9.95 0 0 1 2.065-5.151A7.97 7.97 0 0 0 11 2.062M4.938 11H2.062A7.96 7.96 0 0 0 3.5 14.666A7.96 7.96 0 0 0 4.938 11M2.062 9h2.876A7.96 7.96 0 0 0 3.5 5.334A7.96 7.96 0 0 0 2.062 9m13 0h2.876A7.96 7.96 0 0 0 16.5 5.334A7.96 7.96 0 0 0 15.062 9m2.876 2h-2.876a7.96 7.96 0 0 0 1.438 3.666A7.96 7.96 0 0 0 17.938 11M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamBasketballIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBathtubIcon],svg[jam-bathtub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.487 2.04A3 3 0 0 1 11 5v2H5V5c0-1.039.528-1.955 1.33-2.493A2 2 0 0 0 3 4v6h16a1 1 0 0 1 0 2v1a6 6 0 0 1-4 5.659V19a1 1 0 0 1-2 0H7a1 1 0 0 1-2 0v-.341A6 6 0 0 1 1 13v-1a1 1 0 0 1 0-2V4a4 4 0 0 1 7.487-1.96M17 12H3v1a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4zM8 4a1 1 0 0 0-1 1h2a1 1 0 0 0-1-1"></svg:path>`,
})
export class JamBathtubIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBathtubFIcon],svg[jam-bathtub-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.487 2.897A3 3 0 0 1 11 5.857v2H5v-2c0-1.038.528-1.954 1.33-2.492A2 2 0 0 0 3 4.858v6h16a1 1 0 0 1 0 2v1a6 6 0 0 1-4 5.658V20a1 1 0 1 1-2 0v-.142H7V20a1 1 0 1 1-2 0v-.484a6 6 0 0 1-4-5.658v-1a1 1 0 0 1 0-2v-6a4 4 0 0 1 7.487-1.96z"></svg:path>`,
})
export class JamBathtubFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBatteryIcon],svg[jam-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2zm-2 1.5V2H2v8h15z"></svg:path>`,
})
export class JamBatteryIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBatteryChargingIcon],svg[jam-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v8h15V2zm17 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2zm-5.212 3.358a1 1 0 0 1-1.281.597l-3.76-1.368a1 1 0 0 1 .685-1.88l3.759 1.369a1 1 0 0 1 .597 1.282M10.03 7.989a1 1 0 0 1-1.282.598L4.989 7.22a1 1 0 0 1 .684-1.88l3.759 1.369a1 1 0 0 1 .598 1.281zm.06-3.342v3a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0"></svg:path>`,
})
export class JamBatteryChargingIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBatteryChargingFIcon],svg[jam-battery-charging-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2zm-8.775 5.11q.365-.245.408-.738V5.72l2.432.898a1 1 0 0 0 1.285-.591c.191-.518-.121-1.066-.639-1.258A381 381 0 0 1 9.946 3.41c-.441-.163-.755-.005-1.03.204q-.273.21-.326.806l.043 1.49l-2.428-.877a1 1 0 1 0-.68 1.881q2.484.909 3.77 1.377c.34.124.566.06.93-.183z"></svg:path>`,
})
export class JamBatteryChargingFIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBatteryFIcon],svg[jam-battery-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 0h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2"></svg:path><svg:path d="M18.5 3h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-.5A1.5 1.5 0 0 1 17 7.5v-3A1.5 1.5 0 0 1 18.5 3"></svg:path></svg:g>`,
})
export class JamBatteryFIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBatteryHalfIcon],svg[jam-battery-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v8h15V2zm17 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2zM9 2h2v8H9z"></svg:path>`,
})
export class JamBatteryHalfIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBatteryHalfFIcon],svg[jam-battery-half-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2v8h7V2zm9 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2z"></svg:path>`,
})
export class JamBatteryHalfFIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBatteryOneQuarterIcon],svg[jam-battery-one-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v8h15V2zm17 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2zM6 2h2v8H6z"></svg:path>`,
})
export class JamBatteryOneQuarterIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBatteryOneQuarterFIcon],svg[jam-battery-one-quarter-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2v8h9V2zm11 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2z"></svg:path>`,
})
export class JamBatteryOneQuarterFIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBatteryThreeQuartersIcon],svg[jam-battery-three-quarters-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v8h15V2zm17 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2zm-8-1h2v8h-2z"></svg:path>`,
})
export class JamBatteryThreeQuartersIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBatteryThreeQuartersFIcon],svg[jam-battery-three-quarters-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v8h4V2zm6 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2z"></svg:path>`,
})
export class JamBatteryThreeQuartersFIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBeatportIcon],svg[jam-beatport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.667 7.63c0-4.207-3.178-7.63-7.084-7.63S2.5 3.423 2.5 7.63c0 1.947.682 3.801 1.92 5.222c.167.19.444.199.62.02l.764-.774a.5.5 0 0 0 .02-.667a5.77 5.77 0 0 1-1.396-3.8c0-3.063 2.312-5.554 5.155-5.554s5.156 2.491 5.156 5.554a5.77 5.77 0 0 1-1.397 3.8l.001.001a.5.5 0 0 0 .021.666l.764.773c.176.18.454.17.62-.02c1.237-1.42 1.919-3.274 1.919-5.22M20 7.65c0-1.02-.158-2.026-.47-2.99v-.003l-.002-.003a.483.483 0 0 0-.597-.3l-1.094.329a.46.46 0 0 0-.315.58h-.001a7.75 7.75 0 0 1-.789 6.467h.001a.455.455 0 0 0 .167.634l.981.57c.227.132.52.06.657-.159A9.74 9.74 0 0 0 20 7.649"></svg:path><svg:path d="M3.268 11.732a7.76 7.76 0 0 1-.788-6.468a.46.46 0 0 0-.315-.58l-1.093-.33a.48.48 0 0 0-.598.301H.472a9.72 9.72 0 0 0 .99 8.123h.002a.49.49 0 0 0 .655.156l.982-.57a.455.455 0 0 0 .167-.631z"></svg:path></svg:g>`,
})
export class JamBeatportIcon {
  readonly viewBox = input("-2 -5.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBeatportCircleIcon],svg[jam-beatport-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M13.462 10.58c0-2.103-1.588-3.814-3.541-3.814s-3.542 1.711-3.542 3.815c0 .973.34 1.9.96 2.61c.083.095.222.1.31.01l.382-.387a.25.25 0 0 0 .01-.333a2.9 2.9 0 0 1-.698-1.9c0-1.531 1.156-2.777 2.578-2.777s2.577 1.246 2.577 2.777c0 .708-.248 1.383-.698 1.9a.25.25 0 0 0 .011.333l.382.387c.088.09.227.085.31-.01c.619-.71.96-1.637.96-2.61m1.666.009c0-.51-.079-1.012-.235-1.495v-.003a.24.24 0 0 0-.3-.15l-.546.165a.23.23 0 0 0-.158.29a3.88 3.88 0 0 1-.395 3.233v.001a.23.23 0 0 0 .084.317l.49.285c.114.065.26.03.33-.08c.477-.773.73-1.66.73-2.563"></svg:path><svg:path d="M6.763 12.632a3.88 3.88 0 0 1-.394-3.234a.23.23 0 0 0-.157-.29l-.547-.165a.24.24 0 0 0-.3.15a4.86 4.86 0 0 0 .495 4.062a.244.244 0 0 0 .329.078l.49-.285a.23.23 0 0 0 .084-.316"></svg:path></svg:g>`,
})
export class JamBeatportCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBeatportSquareIcon],svg[jam-beatport-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.462 10.58c0-2.103-1.588-3.814-3.541-3.814s-3.542 1.711-3.542 3.815c0 .973.34 1.9.96 2.61c.083.095.222.1.31.01l.382-.387a.25.25 0 0 0 .01-.333a2.9 2.9 0 0 1-.698-1.9c0-1.531 1.156-2.777 2.578-2.777s2.577 1.246 2.577 2.777c0 .708-.248 1.383-.698 1.9a.25.25 0 0 0 .011.333l.382.387c.088.09.227.085.31-.01c.619-.71.96-1.637.96-2.61m1.666.009c0-.51-.079-1.012-.235-1.495v-.003a.24.24 0 0 0-.3-.15l-.546.165a.23.23 0 0 0-.158.29a3.88 3.88 0 0 1-.395 3.233v.001a.23.23 0 0 0 .084.317l.49.285c.114.065.26.03.33-.08c.477-.773.73-1.66.73-2.563"></svg:path><svg:path d="M6.763 12.632a3.88 3.88 0 0 1-.394-3.234a.23.23 0 0 0-.157-.29l-.547-.165a.24.24 0 0 0-.3.15a4.86 4.86 0 0 0 .495 4.062a.244.244 0 0 0 .329.078l.49-.285a.23.23 0 0 0 .084-.316"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamBeatportSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBeerIcon],svg[jam-beer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6zm10 0h1a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-1a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2m0 2v5h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zM4 8a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1M6.5 0A4.5 4.5 0 0 1 11 4.5v1.509H0V4.5a3.5 3.5 0 0 1 3.667-3.496A4.48 4.48 0 0 1 6.5 0M2 4h7a2 2 0 0 0-2-2H6a2 2 0 0 0-1.75 1.031A1 1 0 0 0 4 3H3a1 1 0 0 0-1 1"></svg:path>`,
})
export class JamBeerIcon {
  readonly viewBox = input("-4 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBeerFIcon],svg[jam-beer-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V6h13a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3zM.035 4a3.5 3.5 0 0 1 3.632-2.996A4.5 4.5 0 0 1 10.973 4zM4 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1m4 0v5h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"></svg:path>`,
})
export class JamBeerFIcon {
  readonly viewBox = input("-4 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBehanceIcon],svg[jam-behance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.025 1.769h-5.001V.527h5.001zm-8.33 5.094q.483.75.483 1.819q.001 1.106-.551 1.982a3.4 3.4 0 0 1-.879.975a3.4 3.4 0 0 1-1.402.624a8.7 8.7 0 0 1-1.753.167H0V.011h5.998C7.509.036 8.58.474 9.214 1.334q.569.792.568 1.897q.001 1.137-.574 1.828q-.32.388-.945.707q.948.345 1.431 1.097zm-6.83-1.955h2.627q.81 0 1.313-.308q.504-.308.504-1.092q0-.868-.667-1.146q-.575-.193-1.466-.194H2.864v2.74zm4.697 3.597c0-.645-.264-1.091-.79-1.33q-.443-.205-1.242-.211H2.864v3.31H5.49q.807.001 1.257-.218q.815-.405.816-1.551zm12.318-2.02q.092.61.077 1.766H13.48q.053 1.34.93 1.877q.53.335 1.282.334q.793.002 1.29-.409q.271-.219.478-.61h2.374q-.092.792-.861 1.608q-1.194 1.298-3.346 1.299q-1.775 0-3.134-1.095q-1.355-1.097-1.356-3.564q0-2.314 1.224-3.546c.82-.824 1.878-1.234 3.182-1.234q1.16 0 2.092.416q.93.416 1.536 1.317q.546.794.71 1.84zm-2.337.231q-.065-.927-.621-1.406q-.554-.48-1.379-.481q-.897.002-1.387.51q-.495.505-.62 1.377z"></svg:path>`,
})
export class JamBehanceIcon {
  readonly viewBox = input("-2 -5.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBehanceCircleIcon],svg[jam-behance-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M14.03 7.88h-2.505v-.622h2.506v.623zm-4.173 2.553q.243.375.242.911q.002.554-.276.993a1.72 1.72 0 0 1-1.142.801a4.3 4.3 0 0 1-.879.084H5V7h3.005q1.136.017 1.611.663q.285.396.285.95q0 .57-.288.916q-.16.195-.473.354q.475.173.717.55m-3.422-.98h1.317q.405 0 .657-.154q.253-.154.253-.547q0-.435-.334-.574a2.4 2.4 0 0 0-.735-.098H6.435zm2.354 1.802q0-.485-.396-.666q-.223-.102-.622-.106H6.435v1.658H7.75q.405.001.63-.109q.409-.202.409-.777m6.171-1.012q.046.306.039.885h-3.245q.026.672.466.94q.264.169.642.168q.397.001.647-.205a1 1 0 0 0 .239-.306h1.19q-.047.397-.432.806q-.6.65-1.677.65a2.43 2.43 0 0 1-1.57-.548q-.679-.548-.68-1.785q0-1.16.614-1.777q.615-.619 1.595-.618q.58 0 1.048.208q.466.21.769.66q.274.398.355.922m-1.17.116q-.033-.465-.312-.704a1.02 1.02 0 0 0-.69-.242q-.45.001-.696.256q-.247.255-.31.69z"></svg:path></svg:g>`,
})
export class JamBehanceCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBehanceSquareIcon],svg[jam-behance-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.03 7.88h-2.505v-.622h2.506v.623zm-4.173 2.553q.243.375.242.911q.002.554-.276.993a1.72 1.72 0 0 1-1.142.801a4.3 4.3 0 0 1-.879.084H5V7h3.005q1.136.017 1.611.663q.285.396.285.95q0 .57-.288.916q-.16.195-.473.354q.475.173.717.55m-3.422-.98h1.317q.405 0 .657-.154q.253-.154.253-.547q0-.435-.334-.574a2.4 2.4 0 0 0-.735-.098H6.435zm2.354 1.802q0-.485-.396-.666q-.223-.102-.622-.106H6.435v1.658H7.75q.405.001.63-.109q.409-.202.409-.777m6.171-1.012q.046.306.039.885h-3.245q.026.672.466.94q.264.169.642.168q.397.001.647-.205a1 1 0 0 0 .239-.306h1.19q-.047.397-.432.806q-.6.65-1.677.65a2.43 2.43 0 0 1-1.57-.548q-.679-.548-.68-1.785q0-1.16.614-1.777q.615-.619 1.595-.618q.58 0 1.048.208q.466.21.769.66q.274.398.355.922m-1.17.116q-.033-.465-.312-.704a1.02 1.02 0 0 0-.69-.242q-.45.001-.696.256q-.247.255-.31.69z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamBehanceSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBellIcon],svg[jam-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.666 11.782L13 11.186V6a4 4 0 1 0-8 0v5.186l-.666.596A7 7 0 0 0 2.29 15h13.42a7 7 0 0 0-2.044-3.218M12 17a3 3 0 0 1-6 0H0a8.98 8.98 0 0 1 3-6.708V6a6 6 0 1 1 12 0v4.292A8.98 8.98 0 0 1 18 17zm-3 1a1 1 0 0 0 1-1H8a1 1 0 0 0 1 1"></svg:path>`,
})
export class JamBellIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBellFIcon],svg[jam-bell-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 17H0a8.98 8.98 0 0 1 3-6.708V6a6 6 0 1 1 12 0v4.292A8.98 8.98 0 0 1 18 17M6.17 18h5.66a3.001 3.001 0 0 1-5.66 0"></svg:path>`,
})
export class JamBellFIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBellOffIcon],svg[jam-bell-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18a3 3 0 0 1-6 0H4.657l2-2H16.71a7 7 0 0 0-2.044-3.218L14 12.186v-3.53l1.99-1.99Q16 6.832 16 7v4.292A8.98 8.98 0 0 1 19 18zM1.295 15.705A9 9 0 0 1 4 11.292V7a6 6 0 0 1 10.243-4.243l-1.415 1.415A4 4 0 0 0 6 7v4zM10 19a1 1 0 0 0 1-1H9a1 1 0 0 0 1 1M19.092.707a1 1 0 0 1 0 1.414l-16.97 16.97a1 1 0 1 1-1.415-1.413L17.677.708a1 1 0 0 1 1.415 0z"></svg:path>`,
})
export class JamBellOffIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBellOffFIcon],svg[jam-bell-off-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.295 15.705A9 9 0 0 1 4 11.292V7a6 6 0 0 1 10.243-4.243zm14.696-9.039Q16 6.832 16 7v4.292A8.98 8.98 0 0 1 19 18H4.657zM12.829 19a3.001 3.001 0 0 1-5.658 0zM19.092.707a1 1 0 0 1 0 1.414l-16.97 16.97a1 1 0 1 1-1.415-1.413L17.677.708a1 1 0 0 1 1.415 0z"></svg:path>`,
})
export class JamBellOffFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBingIcon],svg[jam-bing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.973 8.57a.48.48 0 0 0-.317-.434L6.273 5.23c-.175-.054-.255.039-.178.206L7.84 9.269c.077.168.276.367.442.443l2.394 1.096c.166.076.17.209.008.295L.47 16.535c-.161.086-.182.056-.046-.067l3.924-3.534a.86.86 0 0 0 .248-.558L4.6 1.664a.48.48 0 0 0-.318-.435L.355.014C.18-.04.037.067.037.252v16.25c0 .185.122.423.272.529l3.99 2.827c.15.106.4.115.557.02l10.832-6.523a.66.66 0 0 0 .286-.507V8.57z"></svg:path>`,
})
export class JamBingIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBingCircleIcon],svg[jam-bing-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M13.99 9.297a.24.24 0 0 0-.159-.218L9.127 7.623c-.088-.027-.128.02-.09.103l.876 1.922a.52.52 0 0 0 .221.222l1.2.55c.084.037.086.104.005.147l-5.122 2.724c-.08.043-.091.028-.023-.034l1.968-1.772a.43.43 0 0 0 .124-.28l.001-5.37a.24.24 0 0 0-.159-.219L6.16 5.007c-.088-.027-.16.027-.16.12v8.148c0 .092.061.211.136.264l2.001 1.418c.075.053.2.058.28.01l5.43-3.27a.33.33 0 0 0 .144-.255z"></svg:path></svg:g>`,
})
export class JamBingCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBingSquareIcon],svg[jam-bing-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.99 9.297a.24.24 0 0 0-.159-.218L9.127 7.623c-.088-.027-.128.02-.09.103l.876 1.922a.52.52 0 0 0 .221.222l1.2.55c.084.037.086.104.005.147l-5.122 2.724c-.08.043-.091.028-.023-.034l1.968-1.772a.43.43 0 0 0 .124-.28l.001-5.37a.24.24 0 0 0-.159-.219L6.16 5.007c-.088-.027-.16.027-.16.12v8.148c0 .092.061.211.136.264l2.001 1.418c.075.053.2.058.28.01l5.43-3.27a.33.33 0 0 0 .144-.255z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamBingSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBirthdayCakeIcon],svg[jam-birthday-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18.262V20h16v-1.728l-3.106.753l-4.86-1.004l-4.977 1.004zM2 16.2l3.104.775l4.936-.996l4.819.996L18 16.214V15a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1zM13 12h4a3 3 0 0 1 3 3v7H0v-7a3 3 0 0 1 3-3h4V9h6zm-2 0v-1H9v1zm-1-3.6a3 3 0 0 1-3-3Q7 3.742 10 0q3 3.742 3 5.4a3 3 0 0 1-3 3m-.002-1.981c.552 0 1-.48 1-1.072q0-.591-1-1.928q-1 1.337-1 1.928c0 .592.448 1.072 1 1.072"></svg:path>`,
})
export class JamBirthdayCakeIcon {
  readonly viewBox = input("-2 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBirthdayCakeFIcon],svg[jam-birthday-cake-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 15.693l-5.141 1.282l-4.82-.996l-4.935.996L0 15.687V15a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3zm0 2.063V22H0v-4.25l5.057 1.275l4.978-1.004l4.859 1.004zM7 9h6v2H7zm3-.6a3 3 0 0 1-3-3Q7 3.742 10 0q3 3.742 3 5.4a3 3 0 0 1-3 3"></svg:path>`,
})
export class JamBirthdayCakeFIcon {
  readonly viewBox = input("-2 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBloggerIcon],svg[jam-blogger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.593 19.96c3.48 0 6.307-2.836 6.327-6.297l.039-5.095l-.059-.278l-.167-.348l-.283-.22c-.367-.287-2.228.02-2.729-.435c-.355-.324-.41-.91-.518-1.706c-.2-1.54-.326-1.62-.568-2.142C14.76 1.585 12.382.193 10.75 0H6.325C2.845 0 0 2.839 0 6.307v7.356c0 3.461 2.845 6.296 6.325 6.296h7.268zM6.406 5.151h3.507c.67 0 1.212.544 1.212 1.205c0 .657-.542 1.206-1.212 1.206H6.406c-.67 0-1.21-.549-1.21-1.206c0-.661.54-1.205 1.21-1.205m-1.21 8.418c0-.66.54-1.2 1.21-1.2h7.127c.665 0 1.205.54 1.205 1.2c0 .652-.54 1.2-1.205 1.2H6.406a1.21 1.21 0 0 1-1.21-1.2"></svg:path>`,
})
export class JamBloggerIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBloggerCircleIcon],svg[jam-blogger-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M11.81 15c1.744 0 3.16-1.42 3.17-3.154L15 9.293l-.03-.14l-.083-.174l-.142-.11c-.184-.144-1.116.01-1.367-.218c-.178-.163-.206-.456-.26-.855c-.1-.771-.163-.811-.284-1.073c-.44-.929-1.63-1.627-2.448-1.723H8.169A3.174 3.174 0 0 0 5 8.16v3.686C5 13.58 6.426 15 8.17 15zm-3.6-7.419h1.757c.335 0 .607.273.607.604s-.272.604-.607.604H8.21a.61.61 0 0 1-.607-.604c0-.331.271-.604.607-.604M7.603 11.8c0-.33.271-.601.607-.601h3.57c.333 0 .604.27.604.601c0 .327-.27.601-.604.601H8.21a.607.607 0 0 1-.607-.601"></svg:path></svg:g>`,
})
export class JamBloggerCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBloggerSquareIcon],svg[jam-blogger-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.81 15c1.744 0 3.16-1.42 3.17-3.154L15 9.293l-.03-.14l-.083-.174l-.142-.11c-.184-.144-1.116.01-1.367-.218c-.178-.163-.206-.456-.26-.855c-.1-.771-.163-.811-.284-1.073c-.44-.929-1.63-1.627-2.448-1.723H8.169A3.174 3.174 0 0 0 5 8.16v3.686C5 13.58 6.426 15 8.17 15zm-3.6-7.419h1.757c.335 0 .607.273.607.604s-.272.604-.607.604H8.21a.61.61 0 0 1-.607-.604c0-.331.271-.604.607-.604M7.603 11.8c0-.33.271-.601.607-.601h3.57c.333 0 .604.27.604.601c0 .327-.27.601-.604.601H8.21a.607.607 0 0 1-.607-.601"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamBloggerSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBluetoothIcon],svg[jam-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.414 10l4.294 4.294A1 1 0 0 1 12 15q0 .403-.35.76l-4.947 3.958q-.555.447-1.105.19T5 19.006v-6.592l-3.293 3.293a1 1 0 1 1-1.414-1.414L4.586 10L.293 5.707a1 1 0 1 1 1.414-1.414L5 7.586v-6.56C5 .448 5.448 0 6 0a1 1 0 0 1 .602.201l4.91 3.928c.293.187.488.506.488.871c0 .33-.16.623-.407.805zM7 16.92l2.503-2.003L7 12.414v4.505zM9.503 5.082L7 3.08v4.505z"></svg:path>`,
})
export class JamBluetoothIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBoldIcon],svg[jam-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.455v2.727h1.5c.828 0 1.5-.61 1.5-1.364c0-.753-.672-1.363-1.5-1.363zm3.514-1.24C6.413 4.793 7 5.744 7 6.819C7 8.575 5.433 10 3.5 10H0V.91C0 .406.448 0 1 0h2c1.657 0 3 1.221 3 2.727c0 .55-.179 1.06-.486 1.489zM2 1.819v1.818h1c.552 0 1-.407 1-.909s-.448-.909-1-.909z"></svg:path>`,
})
export class JamBoldIcon {
  readonly viewBox = input("-8.5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBookIcon],svg[jam-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18v2H3v-2H0V0h11a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM3 2H2v14h1zm2 0v14h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm1 2h5v2H6zm0 3h5v2H6z"></svg:path>`,
})
export class JamBookIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBookFIcon],svg[jam-book-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18V1H3v17H0V0h11a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM6 4v2h5V4zm0 3v2h5V7zM3 18h2v2H3z"></svg:path>`,
})
export class JamBookFIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBookmarkIcon],svg[jam-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2a1 1 0 0 0-1 1v15l2.978-2.717a3 3 0 0 1 4.044 0L12 18V3a1 1 0 0 0-1-1zm0-2h8a3 3 0 0 1 3 3v15a2 2 0 0 1-3.348 1.477L7.674 16.76a1 1 0 0 0-1.348 0l-2.978 2.717A2 2 0 0 1 0 18V3a3 3 0 0 1 3-3"></svg:path>`,
})
export class JamBookmarkIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBookmarkFIcon],svg[jam-bookmark-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h8a3 3 0 0 1 3 3v15a2 2 0 0 1-3.348 1.477L7.674 16.76a1 1 0 0 0-1.348 0l-2.978 2.717A2 2 0 0 1 0 18V3a3 3 0 0 1 3-3"></svg:path>`,
})
export class JamBookmarkFIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBookmarkMinusIcon],svg[jam-bookmark-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2a1 1 0 0 0-1 1v15l2.978-2.717a3 3 0 0 1 4.044 0L12 18V3a1 1 0 0 0-1-1zm0-2h8a3 3 0 0 1 3 3v15a2 2 0 0 1-3.348 1.477L7.674 16.76a1 1 0 0 0-1.348 0l-2.978 2.717A2 2 0 0 1 0 18V3a3 3 0 0 1 3-3m1 8h6a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2"></svg:path>`,
})
export class JamBookmarkMinusIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBookmarkMinusFIcon],svg[jam-bookmark-minus-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 .858h8a3 3 0 0 1 3 3v15a2 2 0 0 1-3.348 1.477l-2.978-2.717a1 1 0 0 0-1.348 0l-2.978 2.717A2 2 0 0 1 0 18.858v-15a3 3 0 0 1 3-3m1 8a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2z"></svg:path>`,
})
export class JamBookmarkMinusFIcon {
  readonly viewBox = input("-5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBookmarkPlusIcon],svg[jam-bookmark-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2a1 1 0 0 0-1 1v15l2.978-2.717a3 3 0 0 1 4.044 0L12 18V3a1 1 0 0 0-1-1zm0-2h8a3 3 0 0 1 3 3v15a2 2 0 0 1-3.348 1.477L7.674 16.76a1 1 0 0 0-1.348 0l-2.978 2.717A2 2 0 0 1 0 18V3a3 3 0 0 1 3-3m5 8h2a1 1 0 0 1 0 2H8v2a1 1 0 0 1-2 0v-2H4a1 1 0 1 1 0-2h2V6a1 1 0 1 1 2 0z"></svg:path>`,
})
export class JamBookmarkPlusIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBookmarkPlusFIcon],svg[jam-bookmark-plus-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8.858v-2a1 1 0 1 0-2 0v2H4a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2zm-5-8h8a3 3 0 0 1 3 3v15a2 2 0 0 1-3.348 1.477l-2.978-2.717a1 1 0 0 0-1.348 0l-2.978 2.717A2 2 0 0 1 0 18.858v-15a3 3 0 0 1 3-3"></svg:path>`,
})
export class JamBookmarkPlusFIcon {
  readonly viewBox = input("-5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBookmarkRemoveIcon],svg[jam-bookmark-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2a1 1 0 0 0-1 1v15l2.978-2.717a3 3 0 0 1 4.044 0L12 18V3a1 1 0 0 0-1-1zm0-2h8a3 3 0 0 1 3 3v15a2 2 0 0 1-3.348 1.477L7.674 16.76a1 1 0 0 0-1.348 0l-2.978 2.717A2 2 0 0 1 0 18V3a3 3 0 0 1 3-3m5.414 9l1.414 1.414a1 1 0 1 1-1.414 1.414L7 10.414l-1.414 1.414a1 1 0 0 1-1.414-1.414L5.586 9L4.172 7.586a1 1 0 1 1 1.414-1.414L7 7.586l1.414-1.414a1 1 0 1 1 1.414 1.414z"></svg:path>`,
})
export class JamBookmarkRemoveIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBookmarkRemoveFIcon],svg[jam-bookmark-remove-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.414 9.858l1.414-1.414a1 1 0 0 0-1.414-1.415L7 8.444L5.586 7.029a1 1 0 1 0-1.414 1.415l1.414 1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414L7 11.272l1.414 1.414a1 1 0 0 0 1.414-1.414zM3 .858h8a3 3 0 0 1 3 3v15a2 2 0 0 1-3.348 1.477l-2.978-2.717a1 1 0 0 0-1.348 0l-2.978 2.717A2 2 0 0 1 0 18.858v-15a3 3 0 0 1 3-3"></svg:path>`,
})
export class JamBookmarkRemoveFIcon {
  readonly viewBox = input("-5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBottleIcon],svg[jam-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.975 9H10v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9h.025a4 4 0 0 1 .902-2.113l1.11-1.33A2 2 0 0 0 2.5 4.275V1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3.276a2 2 0 0 0 .464 1.28l1.109 1.331A4 4 0 0 1 9.975 9M7.949 9a2 2 0 0 0-.413-.832L6.427 6.837A4 4 0 0 1 5.5 4.276V2h-1v2.276a4 4 0 0 1-.927 2.56l-1.11 1.332A2 2 0 0 0 2.052 9zM8 16H2v2h6zm-6-5v3h6v-3z"></svg:path>`,
})
export class JamBottleIcon {
  readonly viewBox = input("-7 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBottleFIcon],svg[jam-bottle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.975 9H.025a4 4 0 0 1 .902-2.113l1.11-1.33A2 2 0 0 0 2.5 4.275V1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3.276a2 2 0 0 0 .464 1.28l1.109 1.331A4 4 0 0 1 9.975 9M10 16v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2zm-8-5h6v3H2z"></svg:path>`,
})
export class JamBottleFIcon {
  readonly viewBox = input("-7 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBoxIcon],svg[jam-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm10.874 5a4.002 4.002 0 0 1-7.748 0H2V5h16v2zm-2.142 0H8.268a2 2 0 0 0 3.464 0"></svg:path>`,
})
export class JamBoxIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBoxFIcon],svg[jam-box-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5H0V3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3zm0 2v6a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V7h6.126a4.002 4.002 0 0 0 7.748 0z"></svg:path>`,
})
export class JamBoxFIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBranchIcon],svg[jam-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1-7.002v3.173a3.001 3.001 0 1 1-2 0V5.829a3.001 3.001 0 1 1 2 0v2.34c.312-.11.647-.17.997-.171l6.037-.006a1 1 0 0 0 .999-1V5.84A3.001 3.001 0 0 1 13 0a3 3 0 0 1 1.033 5.817v1.175a3 3 0 0 1-2.997 3l-6.037.006a1 1 0 0 0-.999 1M3 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamBranchIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBranchFIcon],svg[jam-branch-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11.856v3.173a3.001 3.001 0 1 1-2 0V6.687a3.001 3.001 0 1 1 2 0v2.34c.312-.11.647-.17.997-.171l6.037-.006a1 1 0 0 0 .999-1V6.699A3.001 3.001 0 0 1 13 .858a3 3 0 0 1 1.033 5.817V7.85a3 3 0 0 1-2.997 3l-6.037.006a1 1 0 0 0-.999 1"></svg:path>`,
})
export class JamBranchFIcon {
  readonly viewBox = input("-4 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBrightnessIcon],svg[jam-brightness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18q.168 0 0-16a8 8 0 1 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamBrightnessIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBrightnessDownIcon],svg[jam-brightness-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8a4 4 0 0 1 0 8m6-5h1a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2m-6 6a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1M8 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1M1 7h1a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m11.95 4.536l.707.707a1 1 0 1 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414m-8.486 0a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0m9.193-9.193a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0m-9.9 0l.707.707A1 1 0 1 1 3.05 4.464l-.707-.707a1 1 0 0 1 1.414-1.414"></svg:path>`,
})
export class JamBrightnessDownIcon {
  readonly viewBox = input("-4 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBrightnessDownFIcon],svg[jam-brightness-down-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12.858a4 4 0 1 1 0-8a4 4 0 0 1 0 8m6-5h1a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2m-6 6a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1m0-13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m-7 7h1a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m11.95 4.535l.707.708a1 1 0 1 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.415m-8.486 0a1 1 0 0 1 0 1.415l-.707.707A1 1 0 0 1 2.343 13.1l.707-.708a1 1 0 0 1 1.414 0zm9.193-9.192a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0m-9.9 0l.707.707A1 1 0 1 1 3.05 5.322l-.707-.707a1 1 0 0 1 1.414-1.414"></svg:path>`,
})
export class JamBrightnessDownFIcon {
  readonly viewBox = input("-4 -3.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBrightnessUpIcon],svg[jam-brightness-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8a4 4 0 0 1 0 8m6-5h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2m-6 6a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1m0-15a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1M1 9h3a1 1 0 1 1 0 2H1a1 1 0 0 1 0-2m13.95 4.536l2.121 2.12a1 1 0 0 1-1.414 1.415l-2.121-2.121a1 1 0 0 1 1.414-1.414m-8.486 0a1 1 0 0 1 0 1.414l-2.12 2.121a1 1 0 1 1-1.415-1.414l2.121-2.121a1 1 0 0 1 1.414 0M17.071 2.929a1 1 0 0 1 0 1.414L14.95 6.464a1 1 0 0 1-1.414-1.414l2.12-2.121a1 1 0 0 1 1.415 0m-12.728 0L6.464 5.05A1 1 0 1 1 5.05 6.464l-2.12-2.12a1 1 0 0 1 1.414-1.415z"></svg:path>`,
})
export class JamBrightnessUpIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBrightnessUpFIcon],svg[jam-brightness-up-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14.858a4 4 0 1 1 0-8a4 4 0 0 1 0 8m6-5h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2m-6 6a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1m0-15a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1m-9 9h3a1 1 0 1 1 0 2H1a1 1 0 0 1 0-2m13.95 4.535l2.121 2.122a1 1 0 0 1-1.414 1.414l-2.121-2.121a1 1 0 0 1 1.414-1.415m-8.486 0a1 1 0 0 1 0 1.415l-2.12 2.12a1 1 0 1 1-1.415-1.413l2.121-2.122a1 1 0 0 1 1.414 0M17.071 3.787a1 1 0 0 1 0 1.414L14.95 7.322a1 1 0 0 1-1.414-1.414l2.12-2.121a1 1 0 0 1 1.415 0m-12.728 0l2.121 2.121A1 1 0 1 1 5.05 7.322L2.93 5.201a1 1 0 0 1 1.414-1.414z"></svg:path>`,
})
export class JamBrightnessUpFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBrowseIcon],svg[jam-browse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v10h16V4zm1-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2M2 0h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2"></svg:path>`,
})
export class JamBrowseIcon {
  readonly viewBox = input("0 0 20 16")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBrushIcon],svg[jam-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.816 11.556c-1.008.464-1.69 1.003-2.084 1.598a52 52 0 0 0-1.115 1.756c1.124.244 1.969.127 2.578-.281c.852-.57 1.408-1.221 1.717-1.977zm1.395-1.433l1.02 1.02c.742-.382 1.489-.987 2.234-1.832c1.139-1.29 3.061-3.588 5.757-6.88a.211.211 0 0 0-.297-.296c-3.286 2.693-5.583 4.615-6.881 5.758c-.849.746-1.454 1.491-1.833 2.23m-.903 6.168q-2.423 1.622-6.63-.298a58 58 0 0 1 2.387-3.945q.983-1.48 3.17-2.422q.728-1.688 2.487-3.236q1.98-1.743 6.936-5.803a2.21 2.21 0 0 1 3.111 3.111q-4.065 4.965-5.804 6.935q-1.467 1.662-3.067 2.408q-.645 1.946-2.59 3.249z"></svg:path>`,
})
export class JamBrushIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBrushFIcon],svg[jam-brush-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.36 11.116l2.68 2.681q-.75.974-1.864 1.832q-2.238 1.725-5.318.885a83 83 0 0 1 2.603-3.6q.733-.955 1.898-1.798zm1.489-1.338q.826-1.184 2.154-2.406q1.9-1.748 6.602-5.877c.834-.733 1.86-.9 2.375-.385c.514.514.348 1.542-.384 2.376q-4.135 4.71-5.878 6.601q-1.22 1.324-2.407 2.153z"></svg:path>`,
})
export class JamBrushFIcon {
  readonly viewBox = input("-2.5 -3.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBugIcon],svg[jam-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9a1 1 0 0 0-1 1v4a4 4 0 1 0 8 0v-4a1 1 0 0 0-1-1zm8.236-1h1.647V5a1 1 0 1 1 2 0v3a2 2 0 0 1-2 2H16v1h3a1 1 0 0 1 0 2h-3v1h.883a2 2 0 0 1 2 2v3a1 1 0 0 1-2 0v-3h-1.224A6.002 6.002 0 0 1 4.34 16H3v3a1 1 0 0 1-2 0v-3a2 2 0 0 1 2-2h1v-1H1a1 1 0 0 1 0-2h3v-1H3a2 2 0 0 1-2-2V5a1 1 0 1 1 2 0v3h1.764A3 3 0 0 1 6 7.17V5a2 2 0 0 1 2-2h.737c-.343-.598-.988-1-1.726-1H5a1 1 0 1 1 0-2h2.01A3.98 3.98 0 0 1 10 1.348A3.98 3.98 0 0 1 12.99 0H15a1 1 0 0 1 0 2h-2.01c-.74 0-1.384.402-1.727 1H12a2 2 0 0 1 2 2v2.17a3 3 0 0 1 1.236.83M8 7h4V5H8z"></svg:path>`,
})
export class JamBugIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBugFIcon],svg[jam-bug-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.236 8h1.647V5a1 1 0 1 1 2 0v3a2 2 0 0 1-2 2H16v1h3a1 1 0 0 1 0 2h-3v1h.883a2 2 0 0 1 2 2v3a1 1 0 0 1-2 0v-3h-1.224A6.01 6.01 0 0 1 11 19.917V13a1 1 0 0 0-2 0v6.917A6.01 6.01 0 0 1 4.341 16H3v3a1 1 0 0 1-2 0v-3a2 2 0 0 1 2-2h1v-1H1a1 1 0 0 1 0-2h3v-1H3a2 2 0 0 1-2-2V5a1 1 0 1 1 2 0v3h1.764A3 3 0 0 1 6 7.17V5a2 2 0 0 1 2-2h.737c-.343-.598-.988-1-1.726-1H5a1 1 0 1 1 0-2h2.01A3.98 3.98 0 0 1 10 1.348A3.98 3.98 0 0 1 12.99 0H15a1 1 0 0 1 0 2h-2.01c-.74 0-1.384.402-1.727 1H12a2 2 0 0 1 2 2v2.17a3 3 0 0 1 1.236.83"></svg:path>`,
})
export class JamBugFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBuildingIcon],svg[jam-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h7a3 3 0 0 1 3 3v17H0V3a3 3 0 0 1 3-3M2 18h9V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1zM4 4h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2m0 3h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2m0 3h1a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2m0 3h1a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2m4-9h1a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2m0 3h1a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2m0 3h1a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2m0 3h1a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2m-3 3h3a1 1 0 0 1 1 1v1H4v-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamBuildingIcon {
  readonly viewBox = input("-5.5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBuildingFIcon],svg[jam-building-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20v-3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v3H0V3a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v17zM4 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm0 3a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm0 3a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm4-9a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm0 3a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm0 3a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2z"></svg:path>`,
})
export class JamBuildingFIcon {
  readonly viewBox = input("-5.5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBusIcon],svg[jam-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17H5v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2.535A4 4 0 0 1 0 13V4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v9c0 1.48-.804 2.773-2 3.465V19a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm3-8V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5zm0 2H2v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM4 3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1m0 11a1 1 0 1 1 0-2a1 1 0 0 1 0 2m8 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class JamBusIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamBusFIcon],svg[jam-bus-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v5l12-.037V4a2 2 0 0 0-2-2zm7 15H5v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2.535A4 4 0 0 1 0 13V4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v9c0 1.48-.804 2.773-2 3.465V19a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm-7-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m8 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2M4 3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamBusFIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCactusIcon],svg[jam-cactus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6.5V14h-6v6H6v-4H0V8.5a2.5 2.5 0 0 1 5 0V11h1V4a4 4 0 0 1 7.988-.314V9H15V6.5a2.5 2.5 0 1 1 5 0M8 18h4v-6h6V6.5a.5.5 0 1 0-1 0V11h-5V4a2 2 0 1 0-4 0v9H3V8.5a.5.5 0 0 0-1 0V14h6zm2-9a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1m0-5a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamCactusIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCactusFIcon],svg[jam-cactus-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16H0V8.5a2.5 2.5 0 0 1 5 0V11h1V4a4 4 0 1 1 8 0v5h1V6.5a2.5 2.5 0 1 1 5 0V14h-6v6H6zm4-7a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1m0-5a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1"></svg:path>`,
})
export class JamCactusFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCalculatorIcon],svg[jam-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h7a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm1 2h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m0 5h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1m4 0h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1m0 4h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1m-4 0h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamCalculatorIcon {
  readonly viewBox = input("-4.5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCalendarIcon],svg[jam-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7V5a1 1 0 0 0-1-1h-1v1a1 1 0 0 1-2 0V4H6v1a1 1 0 1 1-2 0V4H3a1 1 0 0 0-1 1v2zm0 2H2v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1zm-2-7h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h1V1a1 1 0 1 1 2 0v1h8V1a1 1 0 0 1 2 0z"></svg:path>`,
})
export class JamCalendarIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCalendarAltIcon],svg[jam-calendar-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2V1a1 1 0 1 1 2 0v1h3V1a1 1 0 0 1 2 0v1h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h1V1a1 1 0 1 1 2 0v1zm0 2H6v1a1 1 0 1 1-2 0V4H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-1v1a1 1 0 0 1-2 0V4h-3v1a1 1 0 0 1-2 0zM3 8h2v2H3zm0 4h2v2H3zm12 0h2v2h-2zm0-4h2v2h-2zM7 8h2v2H7zm4 0h2v2h-2zm0 4h2v2h-2zm-4 0h2v2H7z"></svg:path>`,
})
export class JamCalendarAltIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCalendarAltFIcon],svg[jam-calendar-alt-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3v2a2 2 0 1 0 4 0V2h1v2a2 2 0 1 0 4 0V2h1v2a2 2 0 1 0 4 0zM3 8v2h2V8zm0 4v2h2v-2zm12 0v2h2v-2zm0-4v2h2V8zM7 8v2h2V8zm4 0v2h2V8zm0 4v2h2v-2zm-4 0v2h2v-2zM5 0a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1m10 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1m-5 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamCalendarAltFIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCalendarFIcon],svg[jam-calendar-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v2a2 2 0 1 0 4 0V3h6v2a2 2 0 1 0 4 0V3a3 3 0 0 1 3 3v2H0V6a3 3 0 0 1 3-3m17 7v6a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-6zM15 0a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1M5 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamCalendarFIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCameraIcon],svg[jam-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.676 5H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1.676l-.387-1.501A2 2 0 0 0 12 2H8a2 2 0 0 0-1.937 1.499zm-1.55-2C4.57 1.275 6.136 0 8 0h4a4 4 0 0 1 3.874 3H16a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM10 13a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamCameraIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCameraAltIcon],svg[jam-camera-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4H2v-2zM6 0h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6m0 15h8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2m4-4a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m6 2a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class JamCameraAltIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCameraAltFIcon],svg[jam-camera-alt-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12H0V6a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6zm0 2a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6zM6 15a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm4-4a4 4 0 1 0 0-8a4 4 0 0 0 0 8m6 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-6-2a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamCameraAltFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCameraFIcon],svg[jam-camera-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.126 3C4.57 1.275 6.136 0 8 0h4a4 4 0 0 1 3.874 3H16a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM10 13a4 4 0 1 0 0-8a4 4 0 0 0 0 8m6-5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-6 3a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamCameraFIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCandleIcon],svg[jam-candle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11v6h2v-6zm4 6h5a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h5V9h6zM2 19v1h16v-1zm8-10.6a3 3 0 0 1-3-3Q7 3.742 10 0q3 3.742 3 5.4a3 3 0 0 1-3 3m0-1.952c.552 0 1-.48 1-1c0-.466-.333-1.109-1-2c-.667.891-1 1.534-1 2c0 .52.448 1 1 1"></svg:path>`,
})
export class JamCandleIcon {
  readonly viewBox = input("-2 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCandleFIcon],svg[jam-candle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9h6v6H7zm-5 8h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2m8-8.6a3 3 0 0 1-3-3Q7 3.742 10 0q3 3.742 3 5.4a3 3 0 0 1-3 3"></svg:path>`,
})
export class JamCandleFIcon {
  readonly viewBox = input("-2 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCapsuleIcon],svg[jam-capsule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9V5a3 3 0 1 0-6 0v4zm0 2H2v4a3 3 0 0 0 6 0zM5 0a5 5 0 0 1 5 5v10a5 5 0 0 1-10 0V5a5 5 0 0 1 5-5"></svg:path>`,
})
export class JamCapsuleIcon {
  readonly viewBox = input("-7 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCapsuleFIcon],svg[jam-capsule-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9.858H0v-4a5 5 0 1 1 10 0zm0 2v4a5 5 0 0 1-10 0v-4z"></svg:path>`,
})
export class JamCapsuleFIcon {
  readonly viewBox = input("-7 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCarIcon],svg[jam-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17H6v1.5A1.5 1.5 0 0 1 4.5 20h-1A1.5 1.5 0 0 1 2 18.5v-1.67A3 3 0 0 1 0 14v-3c0-.62.188-1.196.51-1.674l1.086-6.8A3 3 0 0 1 4.56 0h10.88a3 3 0 0 1 2.96 2.527l1.083 6.79c.326.48.516 1.06.516 1.683v3a3 3 0 0 1-2 2.83v1.67a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zM3 15h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1m14.25-6.99l-.824-5.168A1 1 0 0 0 15.44 2H4.559a1 1 0 0 0-.988.842l-.825 5.169A3 3 0 0 1 3 8h14q.127 0 .25.01M15.5 12a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m0 2a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-11-2a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m0 2a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m.704-10.906a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamCarIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCarFIcon],svg[jam-car-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17H6v1.5A1.5 1.5 0 0 1 4.5 20h-1A1.5 1.5 0 0 1 2 18.5v-1.67A3 3 0 0 1 0 14v-3c0-.62.188-1.196.51-1.674l1.086-6.8A3 3 0 0 1 4.56 0h10.88a3 3 0 0 1 2.96 2.527l1.083 6.79c.326.48.516 1.06.516 1.683v3a3 3 0 0 1-2 2.83v1.67a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm3.25-8.99l-.824-5.168A1 1 0 0 0 15.44 2H4.559a1 1 0 0 0-.988.842l-.825 5.169A3 3 0 0 1 3 8h14q.127 0 .25.01M15.5 14a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-11 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m.704-10.906a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamCarFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCastleIcon],svg[jam-castle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8v9h6V8zm8 11H0v-7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h2V8a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2zM8 17v-3H4v-2H2v5zM8 2v4h10V2h-2v2h-6V2zm5 11a2 2 0 0 1 2 2v3h-4v-3a2 2 0 0 1 2-2m-1-4h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamCastleIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCastleFIcon],svg[jam-castle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8v11h-3v-4a2 2 0 1 0-4 0v4H0v-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V8a2 2 0 0 1-2-2V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2m-6 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"></svg:path>`,
})
export class JamCastleFIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCharacterIcon],svg[jam-character-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14v-2.108c1.984-.504 3.501-2.476 3.501-4.882c0-2.797-2.049-5.007-4.5-5.007s-4.5 2.21-4.5 5.007c0 2.405 1.516 4.376 3.499 4.881V14H1a1 1 0 0 1 0-2.003h1.434C1.241 10.727.501 8.961.501 7.01c0-3.872 2.91-7.01 6.5-7.01s6.5 3.138 6.5 7.01c0 1.951-.74 3.716-1.933 4.987H13A1 1 0 0 1 13 14z"></svg:path>`,
})
export class JamCharacterIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCheckIcon],svg[jam-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.486 9.73a1 1 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a1 1 0 0 1-.707.292"></svg:path>`,
})
export class JamCheckIcon {
  readonly viewBox = input("-5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronCircleDownIcon],svg[jam-chevron-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-6.172l3.536-3.535a1 1 0 0 1 1.414 1.414l-4.243 4.243a1 1 0 0 1-1.414 0L5.05 9.707a1 1 0 0 1 1.414-1.414z"></svg:path>`,
})
export class JamChevronCircleDownIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronCircleDownFIcon],svg[jam-chevron-circle-down-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 11.828L6.464 8.293A1 1 0 0 0 5.05 9.707l4.243 4.243a.997.997 0 0 0 1.414 0l4.243-4.243a1 1 0 1 0-1.414-1.414zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamChevronCircleDownFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronCircleDownLeftIcon],svg[jam-chevron-circle-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-1-7h5a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0z"></svg:path>`,
})
export class JamChevronCircleDownLeftIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronCircleDownLeftFIcon],svg[jam-chevron-circle-down-left-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11V6a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2zm1 9C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamChevronCircleDownLeftFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronCircleDownRightIcon],svg[jam-chevron-circle-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1-7V6a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2z"></svg:path>`,
})
export class JamChevronCircleDownRightIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronCircleDownRightFIcon],svg[jam-chevron-circle-down-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11H6a1 1 0 0 0 0 2h6a1 1 0 0 0 1-1V6a1 1 0 0 0-2 0zm-1 9C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamChevronCircleDownRightFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronCircleLeftIcon],svg[jam-chevron-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-1.828-8l3.535 3.536a1 1 0 0 1-1.414 1.414L6.05 10.707a1 1 0 0 1 0-1.414l4.243-4.243a1 1 0 0 1 1.414 1.414z"></svg:path>`,
})
export class JamChevronCircleLeftIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronCircleLeftFIcon],svg[jam-chevron-circle-left-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.172 10l3.535-3.536a1 1 0 1 0-1.414-1.414L6.05 9.293a1 1 0 0 0 0 1.414l4.243 4.243a1 1 0 0 0 1.414-1.414zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamChevronCircleLeftFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronCircleRightIcon],svg[jam-chevron-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1.828-8L8.293 6.464A1 1 0 0 1 9.707 5.05l4.243 4.243a1 1 0 0 1 0 1.414L9.707 14.95a1 1 0 1 1-1.414-1.414z"></svg:path>`,
})
export class JamChevronCircleRightIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronCircleRightFIcon],svg[jam-chevron-circle-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.828 10l-3.535 3.536a1 1 0 0 0 1.414 1.414l4.243-4.243a1 1 0 0 0 0-1.414L9.707 5.05a1 1 0 0 0-1.414 1.414zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamChevronCircleRightFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronCircleUpIcon],svg[jam-chevron-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-8.828l-3.536 3.535a1 1 0 1 1-1.414-1.414L9.293 7.05a1 1 0 0 1 1.414 0l4.243 4.243a1 1 0 0 1-1.414 1.414z"></svg:path>`,
})
export class JamChevronCircleUpIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronCircleUpFIcon],svg[jam-chevron-circle-up-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 9.172l3.536 3.535a1 1 0 0 0 1.414-1.414L10.707 7.05a1 1 0 0 0-1.414 0L5.05 11.293a1 1 0 0 0 1.414 1.414zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamChevronCircleUpFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronCircleUpLeftIcon],svg[jam-chevron-circle-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16M9 9v5a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2z"></svg:path>`,
})
export class JamChevronCircleUpLeftIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronCircleUpLeftFIcon],svg[jam-chevron-circle-up-left-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9h5a1 1 0 0 0 0-2H8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0zm1 11C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamChevronCircleUpLeftFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronCircleUpRightIcon],svg[jam-chevron-circle-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1-9H6a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0z"></svg:path>`,
})
export class JamChevronCircleUpRightIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronCircleUpRightFIcon],svg[jam-chevron-circle-up-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9v5a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1H6a1 1 0 1 0 0 2zm-1 11C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamChevronCircleUpRightFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronDownIcon],svg[jam-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364z"></svg:path>`,
})
export class JamChevronDownIcon {
  readonly viewBox = input("-5 -8 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronDownLeftIcon],svg[jam-chevron-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8h7a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0z"></svg:path>`,
})
export class JamChevronDownLeftIcon {
  readonly viewBox = input("-7 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronDownRightIcon],svg[jam-chevron-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8V1a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2z"></svg:path>`,
})
export class JamChevronDownRightIcon {
  readonly viewBox = input("-7 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronLeftIcon],svg[jam-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.757 7l4.95 4.95a1 1 0 1 1-1.414 1.414L.636 7.707a1 1 0 0 1 0-1.414L6.293.636A1 1 0 0 1 7.707 2.05z"></svg:path>`,
})
export class JamChevronLeftIcon {
  readonly viewBox = input("-8 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronRightIcon],svg[jam-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414z"></svg:path>`,
})
export class JamChevronRightIcon {
  readonly viewBox = input("-8 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronSquareDownIcon],svg[jam-chevron-square-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm6 9.828l3.536-3.535a1 1 0 0 1 1.414 1.414l-4.243 4.243a1 1 0 0 1-1.414 0L5.05 9.707a1 1 0 0 1 1.414-1.414z"></svg:path>`,
})
export class JamChevronSquareDownIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronSquareDownFIcon],svg[jam-chevron-square-down-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 11.828L6.464 8.293A1 1 0 0 0 5.05 9.707l4.243 4.243a.997.997 0 0 0 1.414 0l4.243-4.243a1 1 0 1 0-1.414-1.414zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamChevronSquareDownFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronSquareDownLeftIcon],svg[jam-chevron-square-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm5 9h5a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0z"></svg:path>`,
})
export class JamChevronSquareDownLeftIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronSquareDownLeftFIcon],svg[jam-chevron-square-down-left-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11V6a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamChevronSquareDownLeftFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronSquareDownRightIcon],svg[jam-chevron-square-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm7 9V6a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2z"></svg:path>`,
})
export class JamChevronSquareDownRightIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronSquareDownRightFIcon],svg[jam-chevron-square-down-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11H6a1 1 0 0 0 0 2h6a1 1 0 0 0 1-1V6a1 1 0 0 0-2 0zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamChevronSquareDownRightFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronSquareLeftIcon],svg[jam-chevron-square-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm4.172 8l3.535 3.536a1 1 0 0 1-1.414 1.414L6.05 10.707a1 1 0 0 1 0-1.414l4.243-4.243a1 1 0 0 1 1.414 1.414z"></svg:path>`,
})
export class JamChevronSquareLeftIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronSquareLeftFIcon],svg[jam-chevron-square-left-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.172 10l3.535-3.536a1 1 0 1 0-1.414-1.414L6.05 9.293a1 1 0 0 0 0 1.414l4.243 4.243a1 1 0 0 0 1.414-1.414zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamChevronSquareLeftFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronSquareRightIcon],svg[jam-chevron-square-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm7.828 8L8.293 6.464A1 1 0 0 1 9.707 5.05l4.243 4.243a1 1 0 0 1 0 1.414L9.707 14.95a1 1 0 1 1-1.414-1.414z"></svg:path>`,
})
export class JamChevronSquareRightIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronSquareRightFIcon],svg[jam-chevron-square-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.828 10l-3.535 3.536a1 1 0 0 0 1.414 1.414l4.243-4.243a1 1 0 0 0 0-1.414L9.707 5.05a1 1 0 0 0-1.414 1.414zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamChevronSquareRightFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronSquareUpIcon],svg[jam-chevron-square-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm6 7.172l-3.536 3.535a1 1 0 1 1-1.414-1.414L9.293 7.05a1 1 0 0 1 1.414 0l4.243 4.243a1 1 0 0 1-1.414 1.414z"></svg:path>`,
})
export class JamChevronSquareUpIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronSquareUpFIcon],svg[jam-chevron-square-up-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 9.172l3.536 3.535a1 1 0 0 0 1.414-1.414L10.707 7.05a1 1 0 0 0-1.414 0L5.05 11.293a1 1 0 0 0 1.414 1.414zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamChevronSquareUpFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronSquareUpLeftIcon],svg[jam-chevron-square-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm5 7v5a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2z"></svg:path>`,
})
export class JamChevronSquareUpLeftIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronSquareUpLeftFIcon],svg[jam-chevron-square-up-left-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9h5a1 1 0 0 0 0-2H8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamChevronSquareUpLeftFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronSquareUpRightIcon],svg[jam-chevron-square-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm7 7H6a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0z"></svg:path>`,
})
export class JamChevronSquareUpRightIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronSquareUpRightFIcon],svg[jam-chevron-square-up-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9v5a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1H6a1 1 0 1 0 0 2zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamChevronSquareUpRightFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronUpIcon],svg[jam-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.071 2.828l-4.95 4.95A1 1 0 0 1 .707 6.364L6.364.707a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414z"></svg:path>`,
})
export class JamChevronUpIcon {
  readonly viewBox = input("-5 -7.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronUpLeftIcon],svg[jam-chevron-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v7a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2z"></svg:path>`,
})
export class JamChevronUpLeftIcon {
  readonly viewBox = input("-7 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronUpRightIcon],svg[jam-chevron-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2H1a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0z"></svg:path>`,
})
export class JamChevronUpRightIcon {
  readonly viewBox = input("-7 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsCircleDownIcon],svg[jam-chevrons-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-5.29l2.121-2.12a1 1 0 0 1 1.415 1.414l-2.829 2.828a1 1 0 0 1-1.414 0l-2.829-2.828a1 1 0 1 1 1.415-1.415zm0-5l2.121-2.12a1 1 0 0 1 1.415 1.414l-2.829 2.828a1 1 0 0 1-1.414 0L6.464 7.004A1 1 0 1 1 7.88 5.589L10 7.711z"></svg:path>`,
})
export class JamChevronsCircleDownIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsCircleDownFIcon],svg[jam-chevrons-circle-down-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m.009-7.377l-2.122-2.12a1 1 0 0 0-1.414 1.413l2.828 2.829a1 1 0 0 0 1.415 0l2.828-2.829a1 1 0 1 0-1.414-1.414zm0-5l-2.122-2.12a1 1 0 0 0-1.414 1.413l2.828 2.829a1 1 0 0 0 1.415 0l2.828-2.829a1 1 0 1 0-1.414-1.414z"></svg:path>`,
})
export class JamChevronsCircleDownFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsCircleDownLeftIcon],svg[jam-chevrons-circle-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-2-6h3a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0zm3-3h3a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0z"></svg:path>`,
})
export class JamChevronsCircleDownLeftIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsCircleDownLeftFIcon],svg[jam-chevrons-circle-down-left-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9V6a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2zm-3 3V9a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2zm2 8C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamChevronsCircleDownLeftFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsCircleDownRightIcon],svg[jam-chevrons-circle-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m2-6V9a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2zM9 9V6a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2z"></svg:path>`,
})
export class JamChevronsCircleDownRightIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsCircleDownRightFIcon],svg[jam-chevrons-circle-down-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9H6a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1V6a1 1 0 0 0-2 0zm3 3H9a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0zm-2 8C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamChevronsCircleDownRightFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsCircleLeftIcon],svg[jam-chevrons-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-3.172-8l2.122 2.121a1 1 0 0 1-1.414 1.415l-2.829-2.829a1 1 0 0 1 0-1.414l2.829-2.829A1 1 0 1 1 8.95 7.88zm4.99 0l2.121 2.121a1 1 0 0 1-1.414 1.415l-2.828-2.829a1 1 0 0 1 0-1.414l2.828-2.829A1 1 0 0 1 13.94 7.88z"></svg:path>`,
})
export class JamChevronsCircleLeftIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsCircleLeftFIcon],svg[jam-chevrons-circle-left-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.818 10l2.121-2.121a1 1 0 1 0-1.414-1.415L9.697 9.293a1 1 0 0 0 0 1.414l2.828 2.829a1 1 0 0 0 1.414-1.415zm-4.99 0L8.95 7.879a1 1 0 0 0-1.414-1.415L4.707 9.293a1 1 0 0 0 0 1.414l2.829 2.829A1 1 0 1 0 8.95 12.12zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamChevronsCircleLeftFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsCircleRightIcon],svg[jam-chevrons-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m2.818-8l-2.121-2.121a1 1 0 0 1 1.414-1.415l2.828 2.829a1 1 0 0 1 0 1.414l-2.828 2.829a1 1 0 1 1-1.414-1.415zm-4.99 0l-2.12-2.121A1 1 0 0 1 7.12 6.464l2.83 2.829a1 1 0 0 1 0 1.414l-2.83 2.829a1 1 0 1 1-1.414-1.415z"></svg:path>`,
})
export class JamChevronsCircleRightIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsCircleRightFIcon],svg[jam-chevrons-circle-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m3.175-9.976l-2.122 2.121a1 1 0 0 0 1.414 1.414l2.829-2.828a1 1 0 0 0 0-1.414l-2.829-2.829a1 1 0 1 0-1.414 1.415zm-4.99 0l-2.121 2.121a1 1 0 0 0 1.414 1.414l2.828-2.828a1 1 0 0 0 0-1.414L7.478 6.488a1 1 0 0 0-1.414 1.415z"></svg:path>`,
})
export class JamChevronsCircleRightFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsCircleUpIcon],svg[jam-chevrons-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M10 7.382L7.879 9.503A1 1 0 1 1 6.464 8.09l2.829-2.828a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1-1.415 1.414L10 7.383z"></svg:path><svg:path d="m10 12.382l-2.121 2.121a1 1 0 1 1-1.415-1.414l2.829-2.828a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1-1.415 1.414z"></svg:path></svg:g>`,
})
export class JamChevronsCircleUpIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsCircleUpFIcon],svg[jam-chevrons-circle-up-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 12.382l2.121 2.121a1 1 0 0 0 1.415-1.414l-2.829-2.828a1 1 0 0 0-1.414 0l-2.829 2.828a1 1 0 0 0 1.415 1.414zm0-5l2.121 2.121a1 1 0 0 0 1.415-1.414l-2.829-2.828a1 1 0 0 0-1.414 0L6.464 8.089A1 1 0 1 0 7.88 9.503L10 7.383zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamChevronsCircleUpFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsCircleUpLeftIcon],svg[jam-chevrons-circle-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16M8 8v3a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2zm3 3v3a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2z"></svg:path>`,
})
export class JamChevronsCircleUpLeftIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsCircleUpLeftFIcon],svg[jam-chevrons-circle-up-left-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11h3a1 1 0 0 0 0-2h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0zM8 8h3a1 1 0 0 0 0-2H7a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0zm2 12C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamChevronsCircleUpLeftFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsCircleUpRightIcon],svg[jam-chevrons-circle-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m2-10H9a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0zm-3 3H6a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0z"></svg:path>`,
})
export class JamChevronsCircleUpRightIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsCircleUpRightFIcon],svg[jam-chevrons-circle-up-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11v3a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1H6a1 1 0 1 0 0 2zm3-3v3a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1H9a1 1 0 1 0 0 2zm-2 12C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamChevronsCircleUpRightFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsDownIcon],svg[jam-chevrons-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364zm0 6l4.95-4.95a1 1 0 1 1 1.414 1.414l-5.657 5.657a1 1 0 0 1-1.414 0L.707 7.778a1 1 0 1 1 1.414-1.414z"></svg:path>`,
})
export class JamChevronsDownIcon {
  readonly viewBox = input("-5 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsDownLeftIcon],svg[jam-chevrons-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12h7a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0zm4-4h7a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0z"></svg:path>`,
})
export class JamChevronsDownLeftIcon {
  readonly viewBox = input("-5 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsDownRightIcon],svg[jam-chevrons-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8V1a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2zm4 4V5a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2z"></svg:path>`,
})
export class JamChevronsDownRightIcon {
  readonly viewBox = input("-5 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsLeftIcon],svg[jam-chevrons-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.828 7.071l4.95 4.95a1 1 0 1 1-1.414 1.414L6.707 7.778a1 1 0 0 1 0-1.414L12.364.707a1 1 0 0 1 1.414 1.414zm-6 0l4.95 4.95a1 1 0 1 1-1.414 1.414L.707 7.778a1 1 0 0 1 0-1.414L6.364.707a1 1 0 1 1 1.414 1.414z"></svg:path>`,
})
export class JamChevronsLeftIcon {
  readonly viewBox = input("-4.5 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsRightIcon],svg[jam-chevrons-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.314 7.071l-4.95-4.95A1 1 0 0 1 7.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414zm-6 0l-4.95-4.95A1 1 0 1 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414z"></svg:path>`,
})
export class JamChevronsRightIcon {
  readonly viewBox = input("-5 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsSquareDownIcon],svg[jam-chevrons-square-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm6 10.958l2.121-2.121a1 1 0 0 1 1.415 1.414l-2.829 2.828a1 1 0 0 1-1.414 0l-2.829-2.828a1 1 0 0 1 1.415-1.414zm0-5l2.121-2.121a1 1 0 0 1 1.415 1.414l-2.829 2.828a1 1 0 0 1-1.414 0L6.464 7.251A1 1 0 1 1 7.88 5.837L10 7.957z"></svg:path>`,
})
export class JamChevronsSquareDownIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsSquareDownFIcon],svg[jam-chevrons-square-down-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m5.998 12.612l-2.122-2.121a1 1 0 1 0-1.414 1.414l2.829 2.828a1 1 0 0 0 1.414 0l2.828-2.828a1 1 0 0 0-1.414-1.414zm0-5L7.876 5.491a1 1 0 1 0-1.414 1.414l2.829 2.828a1 1 0 0 0 1.414 0l2.828-2.828A1 1 0 0 0 12.12 5.49z"></svg:path>`,
})
export class JamChevronsSquareDownFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsSquareDownLeftIcon],svg[jam-chevrons-square-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm4 10h3a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0zm3-3h3a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0z"></svg:path>`,
})
export class JamChevronsSquareDownLeftIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsSquareDownLeftFIcon],svg[jam-chevrons-square-down-left-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9V6a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2zm-3 3V9a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamChevronsSquareDownLeftFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsSquareDownRightIcon],svg[jam-chevrons-square-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm8 10V9a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2zM9 9V6a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2z"></svg:path>`,
})
export class JamChevronsSquareDownRightIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsSquareDownRightFIcon],svg[jam-chevrons-square-down-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9H6a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1V6a1 1 0 0 0-2 0zm3 3H9a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamChevronsSquareDownRightFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsSquareLeftIcon],svg[jam-chevrons-square-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm2.828 8l2.122 2.121a1 1 0 0 1-1.414 1.415l-2.829-2.829a1 1 0 0 1 0-1.414l2.829-2.829A1 1 0 1 1 8.95 7.88zm4.99 0l2.121 2.121a1 1 0 0 1-1.414 1.415l-2.828-2.829a1 1 0 0 1 0-1.414l2.828-2.829A1 1 0 0 1 13.94 7.88z"></svg:path>`,
})
export class JamChevronsSquareLeftIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsSquareLeftFIcon],svg[jam-chevrons-square-left-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.818 10l2.121-2.121a1 1 0 1 0-1.414-1.415L9.697 9.293a1 1 0 0 0 0 1.414l2.828 2.829a1 1 0 0 0 1.414-1.415zm-4.99 0L8.95 7.879a1 1 0 0 0-1.414-1.415L4.707 9.293a1 1 0 0 0 0 1.414l2.829 2.829A1 1 0 1 0 8.95 12.12zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamChevronsSquareLeftFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsSquareRightIcon],svg[jam-chevrons-square-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm8.818 8l-2.121-2.121a1 1 0 0 1 1.414-1.415l2.828 2.829a1 1 0 0 1 0 1.414l-2.828 2.829a1 1 0 1 1-1.414-1.415zm-4.99 0l-2.12-2.121A1 1 0 0 1 7.12 6.464l2.83 2.829a1 1 0 0 1 0 1.414l-2.83 2.829a1 1 0 1 1-1.414-1.415z"></svg:path>`,
})
export class JamChevronsSquareRightIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsSquareRightFIcon],svg[jam-chevrons-square-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m9.212 10.021l-2.121 2.122a1 1 0 0 0 1.414 1.414l2.828-2.829a1 1 0 0 0 0-1.414l-2.828-2.828A1 1 0 1 0 11.09 7.9l2.12 2.121zm-4.99 0l-2.12 2.122a1 1 0 0 0 1.413 1.414l2.829-2.829a1 1 0 0 0 0-1.414L7.515 6.486A1 1 0 0 0 6.101 7.9z"></svg:path>`,
})
export class JamChevronsSquareRightFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsSquareUpIcon],svg[jam-chevrons-square-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm6 5.382L7.879 9.503A1 1 0 0 1 6.464 8.09l2.829-2.828a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 1 1-1.415 1.414L10 7.383zm0 5l-2.121 2.121a1 1 0 1 1-1.415-1.414l2.829-2.828a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1-1.415 1.414z"></svg:path>`,
})
export class JamChevronsSquareUpIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsSquareUpFIcon],svg[jam-chevrons-square-up-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 12.382l2.121 2.121a1 1 0 0 0 1.415-1.414l-2.829-2.828a1 1 0 0 0-1.414 0l-2.829 2.828a1 1 0 0 0 1.415 1.414zm0-5l2.121 2.121a1 1 0 0 0 1.415-1.414l-2.829-2.828a1 1 0 0 0-1.414 0L6.464 8.089A1 1 0 1 0 7.88 9.503L10 7.383zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamChevronsSquareUpFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsSquareUpLeftIcon],svg[jam-chevrons-square-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm4 6v3a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2zm3 3v3a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2z"></svg:path>`,
})
export class JamChevronsSquareUpLeftIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsSquareUpLeftFIcon],svg[jam-chevrons-square-up-left-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11h3a1 1 0 0 0 0-2h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0zM8 8h3a1 1 0 0 0 0-2H7a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamChevronsSquareUpLeftFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsSquareUpRightIcon],svg[jam-chevrons-square-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm8 6H9a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0zm-3 3H6a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0z"></svg:path>`,
})
export class JamChevronsSquareUpRightIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsSquareUpRightFIcon],svg[jam-chevrons-square-up-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11v3a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1H6a1 1 0 1 0 0 2zm3-3v3a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1H9a1 1 0 1 0 0 2zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamChevronsSquareUpRightFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsUpIcon],svg[jam-chevrons-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.071 2.828l-4.95 4.95A1 1 0 0 1 .707 6.364L6.364.707a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414zm0 6l-4.95 4.95a1 1 0 1 1-1.414-1.414l5.657-5.657a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414z"></svg:path>`,
})
export class JamChevronsUpIcon {
  readonly viewBox = input("-5 -4.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsUpLeftIcon],svg[jam-chevrons-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v7a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2zm4 4v7a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2z"></svg:path>`,
})
export class JamChevronsUpLeftIcon {
  readonly viewBox = input("-5 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChevronsUpRightIcon],svg[jam-chevrons-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2H5a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0zM8 6H1a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0z"></svg:path>`,
})
export class JamChevronsUpRightIcon {
  readonly viewBox = input("-5 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChronometerIcon],svg[jam-chronometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11h2a1 1 0 0 1 0 2H8a.997.997 0 0 1-1-1V8a1 1 0 1 1 2 0zM1.869 6.861a1.5 1.5 0 1 1 2.077-1.76a8 8 0 0 1 1.126-.548A2.5 2.5 0 0 1 6.5 0h3a2.5 2.5 0 0 1 1.428 4.553q.586.231 1.126.548a1.5 1.5 0 1 1 2.077 1.76a8 8 0 1 1-12.263 0zM8 18A6 6 0 1 0 8 6a6 6 0 0 0 0 12M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class JamChronometerIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamChronometerFIcon],svg[jam-chronometer-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11V8a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2zm-1 7A6 6 0 1 1 7 6a6 6 0 0 1 0 12M9.928 4.553A8 8 0 0 0 7 4a8 8 0 0 0-2.928.553A2.5 2.5 0 0 1 5.5 0h3a2.5 2.5 0 0 1 1.428 4.553M5.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm5.554 3.101a1.5 1.5 0 1 1 2.077 1.76a8 8 0 0 0-2.077-1.76M.869 6.861a1.5 1.5 0 1 1 2.077-1.76A8 8 0 0 0 .87 6.861z"></svg:path>`,
})
export class JamChronometerFIcon {
  readonly viewBox = input("-5 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCircleIcon],svg[jam-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCircleFIcon],svg[jam-circle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20.565c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamCircleFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamClearFormatIcon],svg[jam-clear-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.326 2L3.95 9.309a1 1 0 1 1-1.902-.618L4.223 2H1a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2zm3.33 6.243l.708.707a1 1 0 1 1-1.414 1.414l-.707-.707l-.707.707A1 1 0 0 1 6.12 8.95l.707-.707l-.707-.707A1 1 0 0 1 7.536 6.12l.707.707l.707-.707a1 1 0 1 1 1.414 1.415z"></svg:path>`,
})
export class JamClearFormatIcon {
  readonly viewBox = input("-6.5 -6.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamClipboardIcon],svg[jam-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2v2h4V2zm6 0h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2m0 2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2H2v14h10V4zM4 8h6a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2m0 5h6a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamClipboardIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamClipboardFIcon],svg[jam-clipboard-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2v2H5V2H3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zM5 6h4a2 2 0 0 0 2-2V2h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1v2a2 2 0 0 0 2 2M4 8a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2zm0 5a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"></svg:path>`,
})
export class JamClipboardFIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamClockIcon],svg[jam-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9h4a1 1 0 0 1 0 2h-5a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0zm-1 11C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path>`,
})
export class JamClockIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamClockFIcon],svg[jam-clock-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9V4a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2zm-1 11C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamClockFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCloseIcon],svg[jam-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485L2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535l3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"></svg:path>`,
})
export class JamCloseIcon {
  readonly viewBox = input("-6 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCloseCircleIcon],svg[jam-close-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.414 10l2.829 2.828a1 1 0 0 1-1.415 1.415L10 11.414l-2.828 2.829a1 1 0 1 1-1.415-1.415L8.586 10L5.757 7.172a1 1 0 0 1 1.415-1.415L10 8.586l2.828-2.829a1 1 0 0 1 1.415 1.415zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path>`,
})
export class JamCloseCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCloseCircleFIcon],svg[jam-close-circle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.414 10l2.829-2.828a1 1 0 1 0-1.415-1.415L10 8.586L7.172 5.757a1 1 0 0 0-1.415 1.415L8.586 10l-2.829 2.828a1 1 0 0 0 1.415 1.415L10 11.414l2.828 2.829a1 1 0 0 0 1.415-1.415zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamCloseCircleFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCloseRectangleIcon],svg[jam-close-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm7.414 8l2.829 2.828a1 1 0 0 1-1.415 1.415L10 11.414l-2.828 2.829a1 1 0 1 1-1.415-1.415L8.586 10L5.757 7.172a1 1 0 0 1 1.415-1.415L10 8.586l2.828-2.829a1 1 0 0 1 1.415 1.415z"></svg:path>`,
})
export class JamCloseRectangleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCloseRectangleFIcon],svg[jam-close-rectangle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.414 10l2.829-2.828a1 1 0 1 0-1.415-1.415L10 8.586L7.172 5.757a1 1 0 0 0-1.415 1.415L8.586 10l-2.829 2.828a1 1 0 0 0 1.415 1.415L10 11.414l2.828 2.829a1 1 0 0 0 1.415-1.415zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamCloseRectangleFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCloudIcon],svg[jam-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 14a5 5 0 1 1 1.561-9.751A7.002 7.002 0 0 1 20 7a7 7 0 0 1-7 7zm0-2h8a5 5 0 1 0-4.6-6.965l-.72 1.686l-1.742-.572A3 3 0 1 0 5 12"></svg:path>`,
})
export class JamCloudIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCloudFIcon],svg[jam-cloud-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 0a7 7 0 0 1 0 14H5a5 5 0 1 1 1.561-9.751A7 7 0 0 1 13 0"></svg:path>`,
})
export class JamCloudFIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCloudRainIcon],svg[jam-cloud-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 14a5 5 0 1 1 1.561-9.751A7.002 7.002 0 0 1 20 7a7 7 0 0 1-7 7zm0-2h8a5 5 0 1 0-4.6-6.965l-.72 1.686l-1.742-.572A3 3 0 1 0 5 12m1 3a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamCloudRainIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCloudRainFIcon],svg[jam-cloud-rain-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 0a7 7 0 0 1 0 14H5a5 5 0 1 1 1.561-9.751A7 7 0 0 1 13 0"></svg:path><svg:rect width="2" height="4" x="5" y="15" rx="1"></svg:rect><svg:rect width="2" height="5" x="9" y="15" rx="1"></svg:rect><svg:rect width="2" height="3" x="13" y="15" rx="1"></svg:rect></svg:g>`,
})
export class JamCloudRainFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCloudSnowIcon],svg[jam-cloud-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 14a5 5 0 1 1 1.561-9.751A7.002 7.002 0 0 1 20 7a7 7 0 0 1-7 7zm0-2h8a5 5 0 1 0-4.6-6.965l-.72 1.686l-1.742-.572A3 3 0 1 0 5 12m1 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4-2a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamCloudSnowIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCloudSnowFIcon],svg[jam-cloud-snow-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 0a7 7 0 0 1 0 14H5a5 5 0 1 1 1.561-9.751A7 7 0 0 1 13 0M6 15a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4-2a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamCloudSnowFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCloudThunderIcon],svg[jam-cloud-thunder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14a1 1 0 0 1 0-2a5 5 0 1 0-4.6-6.965l-.72 1.686l-1.742-.572A3 3 0 1 0 5 12h2a1 1 0 0 1 0 2H5a5 5 0 1 1 1.561-9.751A7.002 7.002 0 0 1 20 7a7 7 0 0 1-7 7m-2.29-2.936c.519.198.787.801.598 1.346L9.94 16.36c-.19.545-.763.826-1.282.627s-.786-.801-.597-1.346l1.368-3.95c.188-.545.762-.826 1.281-.627m1.632 3.949c.519.198.786.801.597 1.346l-1.368 3.95c-.188.545-.762.826-1.281.627s-.787-.801-.598-1.346l1.368-3.95c.19-.545.763-.826 1.282-.627M9 14.949h3c.552 0 1 .47 1 1.051c0 .58-.448 1.05-1 1.05H9c-.552 0-1-.47-1-1.05s.448-1.05 1-1.05z"></svg:path>`,
})
export class JamCloudThunderIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCloudThunderFIcon],svg[jam-cloud-thunder-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.774 14l.502-1.378a2 2 0 1 0-3.759-1.368l-.684 1.88A2 2 0 0 0 7.72 14H5a5 5 0 1 1 1.561-9.751A7.002 7.002 0 0 1 20 7a7 7 0 0 1-7 7zm-1.064-2.936c.519.198.787.801.598 1.346L9.94 16.36c-.19.545-.763.826-1.282.627s-.786-.801-.597-1.346l1.368-3.95c.188-.545.762-.826 1.281-.627m1.632 3.949c.519.198.786.801.597 1.346l-1.368 3.95c-.188.545-.762.826-1.281.627s-.787-.801-.598-1.346l1.368-3.95c.19-.545.763-.826 1.282-.627M9 14.949h3c.552 0 1 .47 1 1.051c0 .58-.448 1.05-1 1.05H9c-.552 0-1-.47-1-1.05s.448-1.05 1-1.05z"></svg:path>`,
})
export class JamCloudThunderFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCodeIcon],svg[jam-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.736.064c.52.2.787.805.598 1.353L8.546 15.305c-.19.548-.763.83-1.282.631c-.52-.2-.787-.805-.598-1.353L11.454.695c.19-.548.763-.83 1.282-.631M2.414 8.256L5.95 11.99c.39.412.39 1.08 0 1.492a.963.963 0 0 1-1.414 0L.293 9.003a1.1 1.1 0 0 1 0-1.493l4.243-4.48a.963.963 0 0 1 1.414 0a1.1 1.1 0 0 1 0 1.494zm15.172 0L14.05 4.524a1.1 1.1 0 0 1 0-1.493a.963.963 0 0 1 1.414 0l4.243 4.479c.39.412.39 1.08 0 1.493l-4.243 4.478a.963.963 0 0 1-1.414 0a1.1 1.1 0 0 1 0-1.492z"></svg:path>`,
})
export class JamCodeIcon {
  readonly viewBox = input("0 0 20 16")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCodeSampleIcon],svg[jam-code-sample-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.243 6.657l-4.95-4.95A1 1 0 1 1 1.707.293L7.364 5.95a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414zM9 11h8a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamCodeSampleIcon {
  readonly viewBox = input("0 0 18 14")
  readonly width = input("1.29em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCodepenIcon],svg[jam-codepen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.549.26a1.56 1.56 0 0 0-1.756.02L.928 5.76c-.42.292-.67.77-.67 1.282v5.903c0 .525.264 1.014.702 1.303l7.994 5.285a1.56 1.56 0 0 0 1.723 0l8.153-5.386c.438-.29.701-.78.701-1.304v-5.8c0-.524-.263-1.013-.7-1.303zm6.09 6.393l-3.014 2.023l-2.826-2.055l-.018-4.042l5.857 4.074zm-7.902-4.07V6.54L5.84 8.564L2.953 6.627zM2.16 8.576l1.87 1.253l-1.87 1.308zm6.625 8.433L2.954 13.1l2.913-2.037l2.92 1.958v3.99zM7.68 9.796l1.888-1.32l2.2 1.445l-1.95 1.31zm3.167 7.213v-3.99l2.79-1.87l3.003 1.975zm6.625-5.805l-1.98-1.3l1.98-1.329z"></svg:path>`,
})
export class JamCodepenIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCodepenCircleIcon],svg[jam-codepen-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M10.402 5.131a.79.79 0 0 0-.887.01L5.54 7.91a.79.79 0 0 0-.339.648v2.982a.79.79 0 0 0 .355.659l4.039 2.67a.79.79 0 0 0 .87 0l4.12-2.722a.79.79 0 0 0 .354-.658v-2.93a.79.79 0 0 0-.354-.66l-4.184-2.768zm3.077 3.23l-1.523 1.023l-1.428-1.038l-.009-2.043zM9.486 6.306v1.999L8.023 9.327l-1.46-.979zM6.164 9.333l.944.633l-.944.661zm3.347 4.261l-2.947-1.976l1.472-1.029l1.475.99zm-.56-3.644l.955-.667l1.11.73l-.984.662zm1.601 3.644v-2.016l1.41-.944l1.517.997zm3.347-2.933l-1-.657l1-.671z"></svg:path></svg:g>`,
})
export class JamCodepenCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCodepenSquareIcon],svg[jam-codepen-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.402 5.131a.79.79 0 0 0-.887.01L5.54 7.91a.79.79 0 0 0-.339.648v2.982a.79.79 0 0 0 .355.659l4.039 2.67a.79.79 0 0 0 .87 0l4.12-2.722a.79.79 0 0 0 .354-.658v-2.93a.79.79 0 0 0-.354-.66l-4.184-2.768zm3.077 3.23l-1.523 1.023l-1.428-1.038l-.009-2.043zM9.486 6.306v1.999L8.023 9.327l-1.46-.979zM6.164 9.333l.944.633l-.944.661zm3.347 4.261l-2.947-1.976l1.472-1.029l1.475.99zm-.56-3.644l.955-.667l1.11.73l-.984.662zm1.601 3.644v-2.016l1.41-.944l1.517.997zm3.347-2.933l-1-.657l1-.671z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamCodepenSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCoffeeIcon],svg[jam-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.232 4.976A1.5 1.5 0 0 1 1.5 2H2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2h.5a1.5 1.5 0 0 1 .268 2.976l-.448 3.805a2 2 0 0 1 .399 1.467l-.5 4a2 2 0 0 1-.693 1.279l-.422 3.59a1 1 0 0 1-.993.883H3.889a1 1 0 0 1-.993-.883l-.422-3.59a2 2 0 0 1-.693-1.279l-.5-4a2 2 0 0 1 .4-1.467zM3.25 5l.353 3h6.796l.353-3zm.517 9h6.468l.5-4H3.266zm.777 2l.235 2h4.444l.235-2z"></svg:path>`,
})
export class JamCoffeeIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCoffeeCupIcon],svg[jam-coffee-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a6 6 0 1 0 12 0V2H2zm14-4h1a3 3 0 0 1 0 6h-1.252A8 8 0 0 1 0 4V0zm0 4h1a1 1 0 0 0 0-2h-1z"></svg:path>`,
})
export class JamCoffeeCupIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCoffeeCupFIcon],svg[jam-coffee-cup-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h17a3 3 0 0 1 0 6h-1.252A8 8 0 0 1 0 4zm16 4h1a1 1 0 0 0 0-2h-1z"></svg:path>`,
})
export class JamCoffeeCupFIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCogIcon],svg[jam-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8.163A2.1 2.1 0 0 0 18.926 10c0 .789.433 1.476 1.074 1.837l-.717 2.406a2.105 2.105 0 0 0-2.218 3.058l-2.062 1.602A2.104 2.104 0 0 0 11.633 20l-3.29-.008a2.104 2.104 0 0 0-3.362-1.094l-2.06-1.615A2.105 2.105 0 0 0 .715 14.24L0 11.825A2.1 2.1 0 0 0 1.051 10C1.051 9.22.63 8.54 0 8.175L.715 5.76a2.105 2.105 0 0 0 2.207-3.043L4.98 1.102A2.104 2.104 0 0 0 8.342.008L11.634 0a2.104 2.104 0 0 0 3.37 1.097l2.06 1.603a2.105 2.105 0 0 0 2.218 3.058zM14.823 3.68q0-.094.005-.188l-.08-.062a4.1 4.1 0 0 1-4.308-1.428l-.904.002a4.1 4.1 0 0 1-4.29 1.43l-.095.076A4.11 4.11 0 0 1 2.279 7.6a4.1 4.1 0 0 1 .772 2.399c0 .882-.28 1.715-.772 2.4a4.11 4.11 0 0 1 2.872 4.09l.096.075a4.1 4.1 0 0 1 4.289 1.43l.904.002a4.1 4.1 0 0 1 4.307-1.428l.08-.062A4.11 4.11 0 0 1 17.7 12.4a4.1 4.1 0 0 1-.773-2.4c0-.882.281-1.716.773-2.4a4.11 4.11 0 0 1-2.876-3.919zM10 14a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class JamCogIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCogFIcon],svg[jam-cog-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8.163A2.1 2.1 0 0 0 18.926 10c0 .789.433 1.476 1.074 1.837l-.717 2.406a2.105 2.105 0 0 0-2.218 3.058l-2.062 1.602A2.104 2.104 0 0 0 11.633 20l-3.29-.008a2.104 2.104 0 0 0-3.362-1.094l-2.06-1.615A2.105 2.105 0 0 0 .715 14.24L0 11.825A2.1 2.1 0 0 0 1.051 10C1.051 9.22.63 8.54 0 8.175L.715 5.76a2.105 2.105 0 0 0 2.207-3.043L4.98 1.102A2.104 2.104 0 0 0 8.342.008L11.634 0a2.104 2.104 0 0 0 3.37 1.097l2.06 1.603a2.105 2.105 0 0 0 2.218 3.058zM10 14a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path>`,
})
export class JamCogFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCogsIcon],svg[jam-cogs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.815 3.094a3.47 3.47 0 0 1-2.78-1.09l-.084-.001a3.47 3.47 0 0 1-2.781 1.09a3.48 3.48 0 0 1-1.727 2.51a3.47 3.47 0 0 1 0 2.794a3.48 3.48 0 0 1 1.727 2.51a3.47 3.47 0 0 1 2.78 1.09h.084a3.47 3.47 0 0 1 2.78-1.09a3.48 3.48 0 0 1 1.727-2.51a3.47 3.47 0 0 1 0-2.794a3.48 3.48 0 0 1-1.726-2.51zM14 5.714a1.474 1.474 0 0 0 0 2.572l-.502 1.684a1.473 1.473 0 0 0-1.553 2.14l-1.443 1.122A1.473 1.473 0 0 0 8.143 14l-2.304-.006a1.473 1.473 0 0 0-2.352-.765l-1.442-1.131A1.473 1.473 0 0 0 .5 9.968L0 8.278a1.474 1.474 0 0 0 0-2.555l.5-1.69a1.473 1.473 0 0 0 1.545-2.13L3.487.77A1.473 1.473 0 0 0 5.84.005L8.143 0a1.473 1.473 0 0 0 2.358.768l1.444 1.122a1.473 1.473 0 0 0 1.553 2.14zm-5.812 9.198a8 8 0 0 0 2.342-.73a4 4 0 0 1-.087.215a3.48 3.48 0 0 1 1.727 2.51a3.47 3.47 0 0 1 2.78 1.09h.084a3.47 3.47 0 0 1 2.78-1.09a3.48 3.48 0 0 1 1.727-2.51a3.47 3.47 0 0 1 0-2.794a3.48 3.48 0 0 1-1.726-2.51a3.47 3.47 0 0 1-2.78-1.09h-.084l-.015.016a8 8 0 0 0 .002-2.016L16.144 6a1.473 1.473 0 0 0 2.358.768l1.444 1.122a1.473 1.473 0 0 0 1.553 2.14L22 11.714a1.474 1.474 0 0 0 0 2.572l-.502 1.684a1.473 1.473 0 0 0-1.553 2.14l-1.443 1.122a1.473 1.473 0 0 0-2.359.768l-2.304-.006a1.473 1.473 0 0 0-2.352-.765l-1.442-1.131a1.473 1.473 0 0 0-1.545-2.13zM7 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m8 8a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamCogsIcon {
  readonly viewBox = input("-1 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCogsFIcon],svg[jam-cogs-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5.714a1.474 1.474 0 0 0 0 2.572l-.502 1.684a1.473 1.473 0 0 0-1.553 2.14l-1.443 1.122A1.473 1.473 0 0 0 8.143 14l-2.304-.006a1.473 1.473 0 0 0-2.352-.765l-1.442-1.131A1.473 1.473 0 0 0 .5 9.968L0 8.278a1.474 1.474 0 0 0 0-2.555l.5-1.69a1.473 1.473 0 0 0 1.545-2.13L3.487.77A1.473 1.473 0 0 0 5.84.005L8.143 0a1.473 1.473 0 0 0 2.358.768l1.444 1.122a1.473 1.473 0 0 0 1.553 2.14zM7 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m7.393.061a8 8 0 0 0 .545-4.058L16.144 6a1.473 1.473 0 0 0 2.358.768l1.444 1.122a1.473 1.473 0 0 0 1.553 2.14L22 11.714a1.474 1.474 0 0 0 0 2.572l-.502 1.684a1.473 1.473 0 0 0-1.553 2.14l-1.443 1.122a1.473 1.473 0 0 0-2.359.768l-2.304-.006a1.473 1.473 0 0 0-2.352-.765l-1.442-1.131a1.473 1.473 0 0 0-1.545-2.13l-.312-1.056a7.96 7.96 0 0 0 3.821-1.674a3 3 0 1 0 2.384-3.177"></svg:path>`,
})
export class JamCogsFIcon {
  readonly viewBox = input("-1 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCoinIcon],svg[jam-coin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13v-2a3 3 0 1 1 0-6V4a1 1 0 1 1 2 0v1h.022A2.98 2.98 0 0 1 14 7.978a1 1 0 0 1-2 0A.98.98 0 0 0 11.022 7H11v2a3 3 0 0 1 0 6v1a1 1 0 0 1-2 0v-1h-.051A2.95 2.95 0 0 1 6 12.051a1 1 0 1 1 2 0a.95.95 0 0 0 .949.949zm2 0a1 1 0 0 0 0-2zM9 7a1 1 0 1 0 0 2zm1 13C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path>`,
})
export class JamCoinIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCoinFIcon],svg[jam-coin-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13.858h-.051A.95.95 0 0 1 8 12.909a1 1 0 1 0-2 0a2.95 2.95 0 0 0 2.949 2.949H9v1a1 1 0 0 0 2 0v-1a3 3 0 0 0 0-6v-2h.022c.54 0 .978.438.978.978a1 1 0 0 0 2 0a2.98 2.98 0 0 0-2.978-2.978H11v-1a1 1 0 0 0-2 0v1a3 3 0 1 0 0 6zm2 0v-2a1 1 0 0 1 0 2m-2-6v2a1 1 0 1 1 0-2m1 13c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamCoinFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamColorIcon],svg[jam-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.327 6.99H2.672l-.477 1.306c-.191.524-.826.812-1.417.642c-.59-.17-.915-.734-.723-1.258l2.304-6.312C2.743.32 4.011-.256 5.193.084C5.88.282 6.418.76 6.64 1.368L8.945 7.68c.191.524-.133 1.088-.724 1.258c-.59.17-1.225-.118-1.417-.642l-.477-1.307zm-.729-1.998L4.5 1.984L3.4 4.992h2.197zM10 4a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamColorIcon {
  readonly viewBox = input("-6 -7.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCompassIcon],svg[jam-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.932 9.482a2.003 2.003 0 0 1-2.45 2.45L6.464 14.95a1 1 0 1 1-1.414-1.414l3.018-3.018a2.003 2.003 0 0 1 2.45-2.45l3.018-3.018a1 1 0 0 1 1.414 1.414zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path>`,
})
export class JamCompassIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCompassFIcon],svg[jam-compass-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.932 9.482l3.018-3.018a1 1 0 1 0-1.414-1.414l-3.018 3.018a2.003 2.003 0 0 0-2.45 2.45L5.05 13.536a1 1 0 0 0 1.414 1.414l3.018-3.018a2.003 2.003 0 0 0 2.45-2.45M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamCompassFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamComputerIcon],svg[jam-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 13v1h3V2H2v9h1v2zM1 0h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1m9 3h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v6h8V5zm2 9h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamComputerIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamComputerAltIcon],svg[jam-computer-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 14h18a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2M2 0h16a2 2 0 0 1 2 2v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2a2 2 0 0 1 2-2m16 11V2H2v9z"></svg:path>`,
})
export class JamComputerAltIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamComputerAltFIcon],svg[jam-computer-alt-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 14h18a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2M2 0h16a2 2 0 0 1 2 2v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2a2 2 0 0 1 2-2"></svg:path>`,
})
export class JamComputerAltFIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamComputerFIcon],svg[jam-computer-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 .565h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1m0 11v2h2v-2zm9-8h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m2 11h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamComputerFIcon {
  readonly viewBox = input("-2 -3.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCreditCardIcon],svg[jam-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4V2H2v2zm0 3H2v5h16zM2 0h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m2 9h1a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2m5 0h5a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamCreditCardIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCreditCardFIcon],svg[jam-credit-card-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H0V2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zm0 3v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7zM4 9a1 1 0 1 0 0 2h1a1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2h5a1 1 0 0 0 0-2z"></svg:path>`,
})
export class JamCreditCardFIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCropIcon],svg[jam-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17H7a4 4 0 0 1-4-4V5H1a1 1 0 1 1 0-2h2v-4v2a1 1 0 1 1 2 0v2h8a4 4 0 0 1 4 4v8h2a1 1 0 0 1 0 2h-2v4v-2a1 1 0 0 1-2 0zm0-2V7a2 2 0 0 0-2-2H5v8a2 2 0 0 0 2 2z"></svg:path>`,
})
export class JamCropIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCrownIcon],svg[jam-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.776 5.106L3.648 11h12.736l.867-5.98l-3.493 3.02l-3.755-4.827l-3.909 4.811zm10.038-1.537l-.078.067l.141.014l1.167 1.499l1.437-1.242l.14.014l-.062-.082l2.413-2.086a1 1 0 0 1 1.643.9L18.115 13H1.922L.399 2.7a1 1 0 0 1 1.65-.898L4.35 3.827l-.05.06l.109-.008l1.444 1.27l1.212-1.493l.109-.009l-.06-.052L9.245.976a1 1 0 0 1 1.565.017zM2 14h16v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"></svg:path>`,
})
export class JamCrownIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCrownFIcon],svg[jam-crown-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.049 1.802L5.854 5.15L9.244.976a1 1 0 0 1 1.565.017l3.235 4.156l3.928-3.396a1 1 0 0 1 1.643.9L18.115 13H1.922L.399 2.7a1 1 0 0 1 1.65-.898M2 14h16v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"></svg:path>`,
})
export class JamCrownFIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCutleryIcon],svg[jam-cutlery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.303 16.738l8.066-8.065l.894.05c1.065.061 2.369-.485 3.415-1.53c1.636-1.637 1.934-3.723 1.06-4.597c-.873-.873-2.96-.575-4.596 1.06c-1.046 1.047-1.592 2.35-1.531 3.416l.05.894l-8.065 8.065a.5.5 0 0 0 .707.707m1.415 1.415a2.5 2.5 0 0 1-3.536-3.536l7.432-7.432c-.092-1.614.643-3.471 2.114-4.942c2.343-2.344 5.667-2.818 7.425-1.061c1.757 1.757 1.282 5.081-1.061 7.425c-1.471 1.47-3.329 2.205-4.943 2.114z"></svg:path>`,
})
export class JamCutleryIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCutleryFIcon],svg[jam-cutlery-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.955 10.5l-8.298 8.3a2 2 0 1 1-2.829-2.828l8.299-8.299c-.173-1.518.515-3.343 1.954-4.783C13.23.741 16.237.266 17.8 1.83c1.562 1.562 1.087 4.57-1.06 6.717c-1.44 1.44-3.266 2.128-4.784 1.955z"></svg:path>`,
})
export class JamCutleryFIcon {
  readonly viewBox = input("-2.5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCutterIcon],svg[jam-cutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.37 15.226l.023-.027l-4.617-3.832l-.002.003zm-1.286 1.533l-2.58 3.074l-7.158-.803l5.142-6.128zM7.02 14.187L4.722 12.26L13.72 1.534a4 4 0 0 1 6.128 5.143L10.85 17.4l-2.298-1.928l-1.928 2.298l-2.175-.52l2.571-3.064zm.52-2.174l3.064 2.57l7.713-9.192a2 2 0 0 0-3.064-2.571zm9.245-7.907a1 1 0 0 1 .123 1.408l-.642.766a1 1 0 1 1-1.533-1.285l.643-.766a1 1 0 0 1 1.41-.123z"></svg:path>`,
})
export class JamCutterIcon {
  readonly viewBox = input("-1.5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamCutterFIcon],svg[jam-cutter-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.684 17.995l-1.928 2.298L.588 19.5l4.5-5.362zm2.052-.89l-6.129-5.142l8.356-9.958a4 4 0 0 1 6.129 5.142l-8.356 9.959zm5.916-12.62a1 1 0 0 0-1.409.124l-.643.766a1 1 0 0 0 1.532 1.286l.643-.766a1 1 0 0 0-.123-1.41"></svg:path>`,
})
export class JamCutterFIcon {
  readonly viewBox = input("-1.5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDashboardIcon],svg[jam-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.832 14A10 10 0 0 1 0 10C0 4.477 4.477 0 10 0s10 4.477 10 10a10 10 0 0 1-.832 4zm16.916-2a8 8 0 1 0-15.497 0zM10 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2M5 9a1 1 0 1 1 0-2a1 1 0 0 1 0 2m10 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-5-3a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamDashboardIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDashboardFIcon],svg[jam-dashboard-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.832 14.565a10 10 0 0 1-.832-4c0-5.523 4.477-10 10-10s10 4.477 10 10a10 10 0 0 1-.832 4zm9.168-9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-5 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-5-3a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1"></svg:path>`,
})
export class JamDashboardFIcon {
  readonly viewBox = input("-2 -4.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDatabaseIcon],svg[jam-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm0-2a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3m0-8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm2 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 10a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-3 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class JamDatabaseIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDatabaseFIcon],svg[jam-database-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3m5 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-3 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2M5 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamDatabaseFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDeezerIcon],svg[jam-deezer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 9.786h3.64v1.062H0zm0-1.381h3.64v1.062H0zm0-1.38h3.64v1.062H0zm0-1.38h3.64v1.062H0zm0-1.381h3.64v1.062H0zm4.082 5.522h3.641v1.062H4.082zm0-1.381h3.641v1.062H4.082zm0-1.38h3.641v1.062H4.082zm4.082 2.761h3.641v1.062H8.164zm0-1.381h3.641v1.062H8.164zm0-1.38h3.641v1.062H8.164zm0-1.38h3.641v1.062H8.164zm0-1.381h3.641v1.062H8.164zm0-1.38h3.641v1.062H8.164zm0-1.381h3.641v1.062H8.164zm4.082 8.283h3.641v1.062h-3.641zm0-1.381h3.641v1.062h-3.641zm0-1.38h3.641v1.062h-3.641zm0-1.38h3.641v1.062h-3.641zm0-1.381h3.641v1.062h-3.641zm4.082 5.522h3.641v1.062h-3.641zm0-1.381h3.641v1.062h-3.641zm0-1.38h3.641v1.062h-3.641zm0-1.38h3.641v1.062h-3.641zm0-1.381h3.641v1.062h-3.641zm0-1.38h3.641v1.062h-3.641zm0-1.381h3.641v1.062h-3.641zm0-1.381h3.641v1.062h-3.641z"></svg:path>`,
})
export class JamDeezerIcon {
  readonly viewBox = input("-2 -6.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDeezerCircleIcon],svg[jam-deezer-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M5 12.111h1.82v1H5z"></svg:path><svg:path d="M5 11.421h1.82v1H5z"></svg:path><svg:path d="M5 10.731h1.82v1H5z"></svg:path><svg:path d="M5 10.041h1.82v1H5z"></svg:path><svg:path d="M5 9.351h1.82v1H5zm2.041 2.76h1.82v1h-1.82z"></svg:path><svg:path d="M7.041 11.421h1.82v1h-1.82z"></svg:path><svg:path d="M7.041 10.731h1.82v1h-1.82zm2.041 1.38h1.82v1h-1.82z"></svg:path><svg:path d="M9.082 11.421h1.82v1h-1.82z"></svg:path><svg:path d="M9.082 10.731h1.82v1h-1.82z"></svg:path><svg:path d="M9.082 10.041h1.82v1h-1.82z"></svg:path><svg:path d="M9.082 9.351h1.82v1h-1.82z"></svg:path><svg:path d="M9.082 8.66h1.82v1h-1.82z"></svg:path><svg:path d="M9.082 7.97h1.82v1h-1.82zm2.041 4.141h1.821v1h-1.821z"></svg:path><svg:path d="M11.123 11.421h1.821v1h-1.821z"></svg:path><svg:path d="M11.123 10.731h1.821v1h-1.821z"></svg:path><svg:path d="M11.123 10.041h1.821v1h-1.821z"></svg:path><svg:path d="M11.123 9.351h1.821v1h-1.821zm2.041 2.76h1.82v1h-1.82z"></svg:path><svg:path d="M13.164 11.421h1.82v1h-1.82z"></svg:path><svg:path d="M13.164 10.731h1.82v1h-1.82z"></svg:path><svg:path d="M13.164 10.041h1.82v1h-1.82z"></svg:path><svg:path d="M13.164 9.35h1.82v1h-1.82z"></svg:path><svg:path d="M13.164 8.66h1.82v1h-1.82z"></svg:path><svg:path d="M13.164 7.97h1.82v1h-1.82z"></svg:path><svg:path d="M13.164 7.28h1.82v1h-1.82z"></svg:path></svg:g>`,
})
export class JamDeezerCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDeezerSquareIcon],svg[jam-deezer-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 12.111h1.82v1H5z"></svg:path><svg:path d="M5 11.421h1.82v1H5z"></svg:path><svg:path d="M5 10.731h1.82v1H5z"></svg:path><svg:path d="M5 10.041h1.82v1H5z"></svg:path><svg:path d="M5 9.351h1.82v1H5zm2.041 2.76h1.82v1h-1.82z"></svg:path><svg:path d="M7.041 11.421h1.82v1h-1.82z"></svg:path><svg:path d="M7.041 10.731h1.82v1h-1.82zm2.041 1.38h1.82v1h-1.82z"></svg:path><svg:path d="M9.082 11.421h1.82v1h-1.82z"></svg:path><svg:path d="M9.082 10.731h1.82v1h-1.82z"></svg:path><svg:path d="M9.082 10.041h1.82v1h-1.82z"></svg:path><svg:path d="M9.082 9.351h1.82v1h-1.82z"></svg:path><svg:path d="M9.082 8.66h1.82v1h-1.82z"></svg:path><svg:path d="M9.082 7.97h1.82v1h-1.82zm2.041 4.141h1.821v1h-1.821z"></svg:path><svg:path d="M11.123 11.421h1.821v1h-1.821z"></svg:path><svg:path d="M11.123 10.731h1.821v1h-1.821z"></svg:path><svg:path d="M11.123 10.041h1.821v1h-1.821z"></svg:path><svg:path d="M11.123 9.351h1.821v1h-1.821zm2.041 2.76h1.82v1h-1.82z"></svg:path><svg:path d="M13.164 11.421h1.82v1h-1.82z"></svg:path><svg:path d="M13.164 10.731h1.82v1h-1.82z"></svg:path><svg:path d="M13.164 10.041h1.82v1h-1.82z"></svg:path><svg:path d="M13.164 9.35h1.82v1h-1.82z"></svg:path><svg:path d="M13.164 8.66h1.82v1h-1.82z"></svg:path><svg:path d="M13.164 7.97h1.82v1h-1.82z"></svg:path><svg:path d="M13.164 7.28h1.82v1h-1.82z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamDeezerSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDeleteIcon],svg[jam-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.828 0H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.828a2 2 0 0 1-1.414-.586L.707 7.707a1 1 0 0 1 0-1.414L6.414.586A2 2 0 0 1 7.828 0m0 12H18V2H7.828l-5 5zm6.586-5l1.414 1.414a1 1 0 0 1-1.414 1.414L13 8.414l-1.414 1.414a1 1 0 1 1-1.414-1.414L11.586 7l-1.414-1.414a1 1 0 1 1 1.414-1.414L13 5.586l1.414-1.414a1 1 0 1 1 1.414 1.414z"></svg:path>`,
})
export class JamDeleteIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDeleteFIcon],svg[jam-delete-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.414 7l1.414-1.414a1 1 0 0 0-1.414-1.414L13 5.586l-1.414-1.414a1 1 0 1 0-1.414 1.414L11.586 7l-1.414 1.414a1 1 0 1 0 1.414 1.414L13 8.414l1.414 1.414a1 1 0 1 0 1.414-1.414zM7.828 0H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.828a2 2 0 0 1-1.414-.586L.707 7.707a1 1 0 0 1 0-1.414L6.414.586A2 2 0 0 1 7.828 0"></svg:path>`,
})
export class JamDeleteFIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDeviantartIcon],svg[jam-deviantart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.985 0H8.846L7.141 3.211a1.2 1.2 0 0 1-1.066.631H.033v5.1h3.27c.362 0 .596.373.43.686l-3.7 6.967v3.375h4.131l1.706-3.21a1.2 1.2 0 0 1 1.066-.632h6.049v-5.1H9.707a.47.47 0 0 1-.43-.686l3.708-6.98z"></svg:path>`,
})
export class JamDeviantartIcon {
  readonly viewBox = input("-5.5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDeviantartCircleIcon],svg[jam-deviantart-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M13.254 5.01h-2.072l-.854 1.608a.6.6 0 0 1-.534.317H6.77v2.553h1.637c.182 0 .299.187.215.344L6.77 13.32v1.69h2.069l.853-1.607a.6.6 0 0 1 .534-.316h3.03v-2.554h-1.642a.236.236 0 0 1-.215-.344l1.856-3.495V5.011z"></svg:path></svg:g>`,
})
export class JamDeviantartCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDeviantartSquareIcon],svg[jam-deviantart-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.254 5.01h-2.072l-.854 1.608a.6.6 0 0 1-.534.317H6.77v2.553h1.637c.182 0 .299.187.215.344L6.77 13.32v1.69h2.069l.853-1.607a.6.6 0 0 1 .534-.316h3.03v-2.554h-1.642a.236.236 0 0 1-.215-.344l1.856-3.495V5.011z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamDeviantartSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDiceIcon],svg[jam-dice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm0 2H4a2 2 0 0 0-1.995 1.85L2 4v12a2 2 0 0 0 1.85 1.995L4 18h12a2 2 0 0 0 1.995-1.85L18 16V4a2 2 0 0 0-1.85-1.995zm-1 11a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-5-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4M5 3a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path>`,
})
export class JamDiceIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDiceFIcon],svg[jam-dice-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm-1 13a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-5-5a2 2 0 1 0 0 4a2 2 0 0 0 0-4M5 3a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class JamDiceFIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDicesIcon],svg[jam-dices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 0a3 3 0 0 1 3 3v3h3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm6 8H9a1 1 0 0 0-.993.883L8 9v8a1 1 0 0 0 .883.993L9 18h8a1 1 0 0 0 .993-.883L18 17V9a1 1 0 0 0-.883-.993zm-7 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2m6 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-3-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-1.883-9.993L11 2H3a1 1 0 0 0-.993.883L2 3v8a1 1 0 0 0 .883.993L3 12h3V9a3 3 0 0 1 3-3h3V3a1 1 0 0 0-.883-.993M10 9a1 1 0 1 1 0 2a1 1 0 0 1 0-2m6 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2M4.513 8.993a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m5 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamDicesIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDicesFIcon],svg[jam-dices-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 0a3 3 0 0 1 3 3v3h3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm-1 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2m6 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3-3a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3-3a1 1 0 1 0 0 2a1 1 0 0 0 0-2m6 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2M4.513 8.993a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-3a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-3a1 1 0 1 0 0 2a1 1 0 0 0 0-2m5 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class JamDicesFIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDifferenciationIcon],svg[jam-differenciation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 .674a7 7 0 1 1 0 12.653A7 7 0 1 1 10 .673ZM10 3a5 5 0 0 0-2 4c0 1.636.786 3.088 2 4a5 5 0 0 0 2-4a5 5 0 0 0-2-4"></svg:path>`,
})
export class JamDifferenciationIcon {
  readonly viewBox = input("0 0 20 14")
  readonly width = input("1.43em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDiggIcon],svg[jam-digg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.548.006v3.5H0v7h5.544V.006zm-1.552 8.75v-3.5h1.552v3.5zm3.992-5.25h1.996v7H5.988zm0-3.5h1.996v1.969H5.988V.005zm8.205 3.5H8.871v7h3.326v1.531H8.871v1.969h5.322zm-3.326 5.25v-3.5h1.33v3.5zm9.092-5.25h-5.322v7h3.548v1.531h-3.548v1.969h5.322zm-1.774 5.25h-1.552v-3.5h1.552z"></svg:path>`,
})
export class JamDiggIcon {
  readonly viewBox = input("-2 -4.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDirectionIcon],svg[jam-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v4h12.98l2.853-1.714a.333.333 0 0 0 0-.572L14.98 4zm8-2h4.98a2 2 0 0 1 1.03.286L18.863 4a2.333 2.333 0 0 1 0 4L16.01 9.714a2 2 0 0 1-1.03.286H10v9a1 1 0 0 1-2 0v-9H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6V1a1 1 0 1 1 2 0z"></svg:path>`,
})
export class JamDirectionIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDirectionFIcon],svg[jam-direction-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4.98a2 2 0 0 1 1.03.286L18.863 4a2.333 2.333 0 0 1 0 4L16.01 9.714a2 2 0 0 1-1.03.286H10v9a1 1 0 0 1-2 0v-9H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6V1a1 1 0 1 1 2 0z"></svg:path>`,
})
export class JamDirectionFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDirectionsIcon],svg[jam-directions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3v4h12.98l2.853-1.714a.333.333 0 0 0 0-.572L14.98 3zm6-2a1 1 0 1 1 2 0h4.98a2 2 0 0 1 1.03.286L18.863 3a2.333 2.333 0 0 1 0 4L16.01 8.714A2 2 0 0 1 14.98 9H10v1h7.995a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H10v1a1 1 0 0 1-2 0v-1H5.015a2 2 0 0 1-1.03-.286L1.132 16a2.333 2.333 0 0 1 0-4l2.853-1.714A2 2 0 0 1 5.015 10H8V9H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm9.995 11H5.015l-2.853 1.714a.333.333 0 0 0 0 .572L5.015 16h12.98z"></svg:path>`,
})
export class JamDirectionsIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDirectionsFIcon],svg[jam-directions-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1a1 1 0 1 1 2 0h4.98a2 2 0 0 1 1.03.286L18.863 3a2.333 2.333 0 0 1 0 4L16.01 8.714A2 2 0 0 1 14.98 9H10v1h7.995a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H10v1a1 1 0 0 1-2 0v-1H5.015a2 2 0 0 1-1.03-.286L1.132 16a2.333 2.333 0 0 1 0-4l2.853-1.714A2 2 0 0 1 5.015 10H8V9H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"></svg:path>`,
})
export class JamDirectionsFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDiscIcon],svg[jam-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m7-8a6.99 6.99 0 0 1-2.89 5.666l-.53-.796L13 14a5 5 0 0 0 2-4a5 5 0 0 0-2-4l1.2-1.6A6.99 6.99 0 0 1 17 10m-7 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamDiscIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDiscFIcon],svg[jam-disc-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m7-10a6.99 6.99 0 0 0-2.8-5.6L13 6a4.99 4.99 0 0 1 2 4a5 5 0 0 1-2 4l.58.87l.53.796A6.99 6.99 0 0 0 17 10m-7 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class JamDiscFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDiscordIcon],svg[jam-discord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.45 0c1.118 0 2.031.901 2.05 2.025V20l-2.15-1.9l-1.21-1.12l-1.28-1.19l.53 1.85H2.05A2.055 2.055 0 0 1 0 15.615V2.06C0 .932.901.019 2.015 0zM7.32 4.78l-.1-.12h-.057c-.273.009-1.486.1-2.753 1.05l-.048.092c-.251.49-1.392 2.872-1.392 5.738l.02.033c.142.217 1.019 1.423 3.03 1.487l.295-.361l.375-.469c-1.166-.349-1.666-1.051-1.74-1.164l-.01-.016l.041.027q.07.047.239.143c.01.01.02.02.04.03c.03.02.06.03.09.05c.25.14.5.25.73.34c.41.16.9.32 1.47.43c.729.136 1.58.187 2.508.025l.082-.015c.47-.08.95-.22 1.45-.43c.35-.13.74-.32 1.15-.59l-.016.025c-.096.14-.62.833-1.794 1.165l.165.207c.253.314.495.603.495.603c2.21-.07 3.06-1.52 3.06-1.52c0-3.22-1.44-5.83-1.44-5.83c-1.238-.929-2.425-1.037-2.733-1.049L10.4 4.66l-.14.16c1.508.461 2.3 1.103 2.46 1.243l.03.027a8.15 8.15 0 0 0-5.03-.94c-.06 0-.11.01-.17.02l-.056.005c-.38.039-1.197.179-2.214.625l-.145.068c-.182.086-.314.153-.385.19l-.06.032s.813-.774 2.576-1.294zm-.38 3.61c.57 0 1.03.5 1.02 1.11c0 .61-.45 1.11-1.02 1.11c-.56 0-1.02-.5-1.02-1.11s.45-1.11 1.02-1.11m3.65 0c.57 0 1.02.5 1.02 1.11s-.45 1.11-1.02 1.11c-.56 0-1.02-.5-1.02-1.11s.45-1.11 1.02-1.11"></svg:path>`,
})
export class JamDiscordIcon {
  readonly viewBox = input("0 0 18 20")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDisqusIcon],svg[jam-disqus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.365 18.75a9.76 9.76 0 0 1-6.23-2.224L0 17.067l1.595-3.805a9.1 9.1 0 0 1-.866-3.887C.729 4.196 5.045 0 10.364 0C15.69 0 20 4.196 20 9.375s-4.31 9.375-9.635 9.375m.061-14.375H6.875v10h3.501c3.313 0 5.249-2.144 5.249-5.027V9.32c0-2.882-1.911-4.946-5.199-4.946z"></svg:path><svg:path d="M13.004 9.381c0 1.62-1.013 2.534-2.54 2.534H9.426V6.828h1.038c1.527 0 2.54.927 2.54 2.527z"></svg:path></svg:g>`,
})
export class JamDisqusIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDisqusCircleIcon],svg[jam-disqus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M10.172 14.665a4.88 4.88 0 0 1-3.116-1.113l-2.068.271l.797-1.903a4.5 4.5 0 0 1-.433-1.944c0-2.59 2.159-4.689 4.819-4.689c2.664 0 4.82 2.099 4.82 4.689s-2.156 4.689-4.82 4.689zm.03-7.19H8.426v5.001h1.751c1.657 0 2.625-1.072 2.625-2.514v-.013c0-1.442-.956-2.474-2.6-2.474"></svg:path><svg:path d="M11.491 9.979c0 .81-.506 1.267-1.27 1.267h-.519V8.702h.519c.764 0 1.27.464 1.27 1.264z"></svg:path></svg:g>`,
})
export class JamDisqusCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDisqusSquareIcon],svg[jam-disqus-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.172 14.665a4.88 4.88 0 0 1-3.116-1.113l-2.068.271l.797-1.903a4.5 4.5 0 0 1-.433-1.944c0-2.59 2.159-4.689 4.819-4.689c2.664 0 4.82 2.099 4.82 4.689s-2.156 4.689-4.82 4.689zm.03-7.19H8.426v5.001h1.751c1.657 0 2.625-1.072 2.625-2.514v-.013c0-1.442-.956-2.474-2.6-2.474"></svg:path><svg:path d="M11.491 9.979c0 .81-.506 1.267-1.27 1.267h-.519V8.702h.519c.764 0 1.27.464 1.27 1.264z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamDisqusSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDjIcon],svg[jam-dj-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h8a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm4 15A5 5 0 1 1 8 7a5 5 0 0 1 0 10m0-2a3 3 0 1 0 0-6a3 3 0 0 0 0 6M4 3h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m7 0h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1M8 13a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class JamDjIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDjFIcon],svg[jam-dj-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h8a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m4 17A5 5 0 1 0 8 7a5 5 0 0 0 0 10M4 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm7 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamDjFIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDnaIcon],svg[jam-dna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 17h8v-2H2zm.535-4h6.93A4 4 0 0 0 6 11c-1.48 0-2.773.804-3.465 2M10 5V3H2v2zm-.535 2h-6.93A4 4 0 0 0 6 9c1.48 0 2.773-.804 3.465-2m-.147 3A6 6 0 0 1 12 15v4a1 1 0 0 1-2 0H2a1 1 0 0 1-2 0v-4a6 6 0 0 1 2.682-5A6 6 0 0 1 0 5V1a1 1 0 1 1 2 0h8a1 1 0 0 1 2 0v4a6 6 0 0 1-2.682 5"></svg:path>`,
})
export class JamDnaIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDocumentIcon],svg[jam-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm2 1h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2m0 12h2a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m0-4h6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m0-4h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2"></svg:path>`,
})
export class JamDocumentIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDocumentFIcon],svg[jam-document-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m1 7a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2zm0 8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2zM4 3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2zm0 8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2z"></svg:path>`,
})
export class JamDocumentFIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDoorIcon],svg[jam-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 2v16h8V2zm2 7h1a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamDoorIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDownloadIcon],svg[jam-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 6.641l1.121-1.12a1 1 0 0 1 1.415 1.413L7.707 9.763a.997.997 0 0 1-1.414 0L3.464 6.934A1 1 0 1 1 4.88 5.52L6 6.641V1a1 1 0 1 1 2 0zM1 12h12a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamDownloadIcon {
  readonly viewBox = input("-5 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDribbbleIcon],svg[jam-dribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10c5.51 0 10-4.48 10-10S15.51 0 10 0m6.605 4.61a8.5 8.5 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271c-.065-.141-.12-.293-.184-.445a25 25 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362M10 1.475c2.17 0 4.154.813 5.662 2.148c-.152.216-1.443 1.941-4.48 3.08c-1.399-2.57-2.95-4.675-3.189-5A8.7 8.7 0 0 1 10 1.475m-3.633.803a54 54 0 0 1 3.167 4.935c-3.992 1.062-7.517 1.04-7.896 1.04a8.58 8.58 0 0 1 4.729-5.975M1.453 10.01v-.26c.37.01 4.512.065 8.775-1.215c.25.477.477.965.694 1.453c-.109.033-.228.065-.336.098c-4.404 1.42-6.747 5.303-6.942 5.629a8.52 8.52 0 0 1-2.19-5.705ZM10 18.547a8.48 8.48 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337c.022-.01.033-.01.054-.022a35.3 35.3 0 0 1 1.823 6.475a8.4 8.4 0 0 1-3.341.684m4.761-1.465c-.086-.52-.542-3.015-1.659-6.084c2.679-.423 5.022.271 5.314.369a8.47 8.47 0 0 1-3.655 5.715"></svg:path>`,
})
export class JamDribbbleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDrupalIcon],svg[jam-drupal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.134 3.711c-1.022-.635-1.989-.884-2.953-1.52C9.583 1.788 8.754.827 8.058 0c-.134 1.327-.54 1.866-1.003 2.251c-.982.768-1.6.998-2.45 1.46c-.714.366-4.592 2.673-4.592 7.634S4.201 19.96 8.85 19.96c4.65 0 8.683-3.365 8.683-8.46s-3.782-7.403-4.4-7.788zm.078 14.308c-.097.096-.984.711-2.026.808c-1.042.096-2.45.153-3.299-.616c-.135-.135-.097-.326 0-.402c.096-.079.173-.136.29-.136s.095 0 .154.038c.386.308.964.557 2.198.557c1.236 0 2.105-.344 2.49-.634c.174-.134.25-.019.27.058s.058.193-.077.327m-3.344-1.618c.213-.193.56-.501.89-.635c.327-.135.499-.116.809-.116c.308 0 .637.02.868.174s.367.5.442.69c.078.194 0 .309-.153.386c-.134.076-.154.038-.289-.211c-.134-.25-.25-.5-.926-.5c-.675 0-.887.23-1.215.5c-.328.269-.444.365-.56.211c-.116-.153-.077-.308.134-.5zm6.964-3.666c0 .596-.192 1.672-.656 2.345c-.462.674-.75.925-1.293.886c-.695-.059-2.084-2.212-2.971-2.252c-1.118-.037-3.55 2.33-5.46 2.33c-1.159 0-1.505-.174-1.89-.425c-.58-.404-.87-1.019-.85-1.865c.02-1.5 1.427-2.903 3.203-2.922c2.256-.02 3.821 2.229 4.958 2.21c.965-.017 2.818-1.903 3.725-1.903c.964 0 1.234.998 1.234 1.596"></svg:path>`,
})
export class JamDrupalIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDrupalCircleIcon],svg[jam-drupal-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M12.194 6.827c-.512-.318-.996-.443-1.48-.762c-.299-.202-.714-.683-1.063-1.098c-.067.665-.27.936-.503 1.128c-.492.385-.801.5-1.227.732c-.358.183-2.3 1.339-2.3 3.825c0 2.485 2.097 4.315 4.426 4.315s4.351-1.685 4.351-4.238s-1.895-3.71-2.204-3.902m.04 7.169a2.1 2.1 0 0 1-1.016.404c-.522.048-1.228.077-1.653-.308c-.067-.068-.049-.163 0-.202c.048-.04.087-.068.145-.068c.059 0 .048 0 .078.02c.193.154.483.278 1.101.278c.619 0 1.054-.172 1.247-.317c.087-.068.126-.01.136.029c.01.038.029.096-.039.164zm-1.676-.811c.106-.097.28-.251.445-.318c.164-.068.25-.058.406-.058c.154 0 .32.01.435.087c.116.077.184.25.221.346c.04.097 0 .154-.076.193c-.067.038-.077.02-.145-.106c-.067-.125-.126-.25-.464-.25s-.445.115-.609.25s-.222.183-.28.106s-.04-.154.067-.25m3.489-1.837c0 .299-.096.838-.329 1.175c-.231.338-.376.463-.648.444c-.348-.03-1.044-1.108-1.488-1.128c-.56-.02-1.779 1.167-2.736 1.167c-.58 0-.754-.087-.947-.213c-.29-.202-.435-.51-.426-.934c.01-.752.715-1.455 1.605-1.464c1.13-.01 1.915 1.116 2.484 1.107c.484-.009 1.412-.954 1.867-.954c.483 0 .618.5.618.8"></svg:path></svg:g>`,
})
export class JamDrupalCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamDrupalSquareIcon],svg[jam-drupal-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.194 6.827c-.512-.318-.996-.443-1.48-.762c-.299-.202-.714-.683-1.063-1.098c-.067.665-.27.936-.503 1.128c-.492.385-.801.5-1.227.732c-.358.183-2.3 1.339-2.3 3.825c0 2.485 2.097 4.315 4.426 4.315s4.351-1.685 4.351-4.238s-1.895-3.71-2.204-3.902m.04 7.169a2.1 2.1 0 0 1-1.016.404c-.522.048-1.228.077-1.653-.308c-.067-.068-.049-.163 0-.202c.048-.04.087-.068.145-.068c.059 0 .048 0 .078.02c.193.154.483.278 1.101.278c.619 0 1.054-.172 1.247-.317c.087-.068.126-.01.136.029c.01.038.029.096-.039.164zm-1.676-.811c.106-.097.28-.251.445-.318c.164-.068.25-.058.406-.058c.154 0 .32.01.435.087c.116.077.184.25.221.346c.04.097 0 .154-.076.193c-.067.038-.077.02-.145-.106c-.067-.125-.126-.25-.464-.25s-.445.115-.609.25s-.222.183-.28.106s-.04-.154.067-.25m3.489-1.837c0 .299-.096.838-.329 1.175c-.231.338-.376.463-.648.444c-.348-.03-1.044-1.108-1.488-1.128c-.56-.02-1.779 1.167-2.736 1.167c-.58 0-.754-.087-.947-.213c-.29-.202-.435-.51-.426-.934c.01-.752.715-1.455 1.605-1.464c1.13-.01 1.915 1.116 2.484 1.107c.484-.009 1.412-.954 1.867-.954c.483 0 .618.5.618.8"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamDrupalSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamEbayIcon],svg[jam-ebay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.853 2.229L17.16 5.81l-1.7-3.583h-1.183l.303.598c-.4-.63-1.191-.79-1.914-.79c-2.115 0-2.25 1.22-2.25 1.414h1.052s.055-.712 1.125-.712c.695 0 1.233.335 1.233.979v.23h-1.233c-1.368 0-2.196.351-2.433 1.063q.037-.237.037-.491c0-1.369-.876-2.469-2.356-2.469c-1.386 0-1.817.788-1.817.788V.202H5.007v4.011c-.015-.871-.552-2.177-2.43-2.177C1.17 2.037 0 2.664 0 4.559c0 1.5.788 2.445 2.613 2.445c2.148 0 2.286-1.49 2.286-1.49H3.86s-.224.802-1.31.802c-.884 0-1.52-.629-1.52-1.51h3.979v1.246c0 .332-.023.799-.023.799h.993s.036-.335.036-.641c0 0 .49.808 1.824.808c1.138 0 1.98-.673 2.259-1.71q-.008.081-.009.168c0 1.007.8 1.555 1.882 1.555c1.474 0 1.949-.857 1.949-.857c0 .341.025.677.025.677h.935s-.036-.417-.036-.683V3.866c0-.309-.048-.566-.135-.782l1.897 3.746l-.892 1.779h1.125l3.088-6.38h-1.073zM1.053 4.1c0-.864.749-1.356 1.487-1.356c.842 0 1.416.543 1.416 1.356zM7.59 6.295c-1.018 0-1.567-.837-1.567-1.764c0-.864.492-1.755 1.56-1.755c.954 0 1.56.745 1.56 1.745c0 1.072-.7 1.774-1.553 1.774m6.235-1.354c0 .4-.234 1.39-1.61 1.39c-.752 0-1.076-.396-1.076-.855c0-.835 1.088-.84 2.686-.84z"></svg:path>`,
})
export class JamEbayIcon {
  readonly viewBox = input("-2 -7.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamEggIcon],svg[jam-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18a6 6 0 0 0 6-6c0-4.221-3.418-10-6-10S2 7.779 2 12a6 6 0 0 0 6 6m0 2a8 8 0 0 1-8-8C0 7.582 3.582 0 8 0s8 7.582 8 12a8 8 0 0 1-8 8"></svg:path>`,
})
export class JamEggIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamEggFIcon],svg[jam-egg-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20.565a8 8 0 0 1-8-8c0-4.418 3.582-12 8-12s8 7.582 8 12a8 8 0 0 1-8 8"></svg:path>`,
})
export class JamEggFIcon {
  readonly viewBox = input("-4 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamEggsIcon],svg[jam-eggs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.843 12.37A4 4 0 0 0 18 9c0-1.238-.623-3.136-1.58-4.698C15.513 2.822 14.524 2 14 2s-1.513.822-2.42 2.302a12 12 0 0 0-.935 1.884a12.6 12.6 0 0 0-1.277-2.024C10.522 1.91 12.26 0 14 0c3 0 6 5.686 6 9a6 6 0 0 1-8.943 5.23c.36-.563.63-1.19.786-1.86M6 17a6 6 0 0 1-6-6c0-3.314 3-9 6-9s6 5.686 6 9a6 6 0 0 1-6 6m0-2a4 4 0 0 0 4-4c0-1.238-.623-3.136-1.58-4.698C7.513 4.822 6.524 4 6 4s-1.513.822-2.42 2.302C2.623 7.864 2 9.762 2 11a4 4 0 0 0 4 4"></svg:path>`,
})
export class JamEggsIcon {
  readonly viewBox = input("-2 -3.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamEggsFIcon],svg[jam-eggs-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17a6 6 0 0 1-6-6c0-3.314 3-9 6-9s6 5.686 6 9a6 6 0 0 1-6 6m6.612-2.161A5.98 5.98 0 0 0 14 11c0-2.518-1.732-6.405-3.88-8.127C11.213 1.227 12.607 0 14 0c3 0 6 5.686 6 9a6 6 0 0 1-7.388 5.839"></svg:path>`,
})
export class JamEggsFIcon {
  readonly viewBox = input("-2 -3.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamEjectIcon],svg[jam-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.31 6.51c.843.728.925 1.988.182 2.814a2.05 2.05 0 0 1-1.526.676H2.034C.911 10 0 9.107 0 8.006c0-.573.251-1.118.69-1.496L7.656.498a2.065 2.065 0 0 1 2.688 0zM2.034 8.006h13.932L9 1.994zM18 14v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2m-2 0H2v2h14z"></svg:path>`,
})
export class JamEjectIcon {
  readonly viewBox = input("-3 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamEjectCircleIcon],svg[jam-eject-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1.746-12.587l2.898 4.055c.646.905.389 2.13-.576 2.737a2.2 2.2 0 0 1-1.17.334H7.102c-1.16 0-2.102-.883-2.102-1.972c0-.391.124-.774.356-1.099l2.898-4.055c.647-.905 1.952-1.146 2.917-.54c.227.143.422.327.575.54m-4.644 5.154h5.796L10 6.512zM6 13.539h8a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2"></svg:path>`,
})
export class JamEjectCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamEjectCircleFIcon],svg[jam-eject-circle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m1.746-14.587a2 2 0 0 0-.575-.54c-.965-.606-2.27-.365-2.917.54L5.356 9.468A1.9 1.9 0 0 0 5 10.567c0 1.089.941 1.972 2.102 1.972h5.796c.417 0 .824-.116 1.17-.334c.965-.607 1.222-1.832.576-2.737zM6 13.54a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm1.102-2.972L10 6.512l2.898 4.055z"></svg:path>`,
})
export class JamEjectCircleFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamEjectSquareIcon],svg[jam-eject-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm7.746 3.413l2.898 4.055c.646.905.389 2.13-.576 2.737a2.2 2.2 0 0 1-1.17.334H7.102c-1.16 0-2.102-.883-2.102-1.972c0-.391.124-.774.356-1.099l2.898-4.055c.647-.905 1.952-1.146 2.917-.54c.227.143.422.327.575.54m-4.644 5.154h5.796L10 6.512zM6 13.539h8a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2"></svg:path>`,
})
export class JamEjectSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamEjectSquareFIcon],svg[jam-eject-square-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m7.746 5.413a2 2 0 0 0-.575-.54c-.965-.606-2.27-.365-2.917.54L5.356 9.468A1.9 1.9 0 0 0 5 10.567c0 1.089.941 1.972 2.102 1.972h5.796c.417 0 .824-.116 1.17-.334c.965-.607 1.222-1.832.576-2.737zM6 13.54a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm1.102-2.972L10 6.512l2.898 4.055z"></svg:path>`,
})
export class JamEjectSquareFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamEnvelopeIcon],svg[jam-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.598 2l5.747 5.12a1 1 0 0 0 1.33 0L16.423 2zM18 3.273l-5.994 5.341a3 3 0 0 1-3.992 0L2 3.254V12h16zM2 0h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2"></svg:path>`,
})
export class JamEnvelopeIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamEnvelopeFIcon],svg[jam-envelope-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.572.083L10.676 7.12a1 1 0 0 1-1.331 0L1.416.087A2 2 0 0 1 2 0h16a2 2 0 0 1 .572.083m1.356 1.385q.071.255.072.532v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 .072-.534l7.942 7.148a3 3 0 0 0 3.992 0z"></svg:path>`,
})
export class JamEnvelopeFIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamEnvelopeOpenIcon],svg[jam-envelope-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.328 6.868l7.017 6.253a1 1 0 0 0 1.33 0l7.009-6.246l-7.137-4.665a1 1 0 0 0-1.094 0zM18 7.082v2.19l-5.994 5.342a3 3 0 0 1-3.992 0L2 9.254V7.083V18h16zM.906 5.408L8.359.536a3 3 0 0 1 3.282 0l7.453 4.872A2 2 0 0 1 20 7.082V18a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7.082a2 2 0 0 1 .906-1.674"></svg:path>`,
})
export class JamEnvelopeOpenIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamEnvelopeOpenFIcon],svg[jam-envelope-open-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.25 5.52l-8.574 7.6a1 1 0 0 1-1.331 0L.703 5.56q.095-.082.203-.152L8.359.536a3 3 0 0 1 3.282 0l7.453 4.872q.081.053.156.113zM20 7.69V18a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7.698l8.014 6.916a3 3 0 0 0 3.992 0z"></svg:path>`,
})
export class JamEnvelopeOpenFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamExtinguisherIcon],svg[jam-extinguisher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.45 4.145A2 2 0 0 1 6.067 4H4a2 2 0 0 0-2 2v3a1 1 0 1 1-2 0V6a4 4 0 0 1 4-4h2.077a2 2 0 0 1 3.381-.117A1 1 0 0 1 11.45 2h1.311L18.722.036l.003.002a1 1 0 0 1 1.273.906L20 .945v3.992l-.002.001L20 5a1 1 0 0 1-1.275.962l-.003.002L12.892 4H11.45v1.009q0 .045-.004.09A4.5 4.5 0 0 1 15 9.5V17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9.5a4.5 4.5 0 0 1 3.457-4.378a1 1 0 0 1-.007-.113zm8.597-.471V2.436l-1.866.597zM10.5 7A2.5 2.5 0 0 0 8 9.5V17a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V9.5A2.5 2.5 0 0 0 10.5 7"></svg:path>`,
})
export class JamExtinguisherIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamExtinguisherFIcon],svg[jam-extinguisher-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.45 4.145A2 2 0 0 1 6.067 4H4a2 2 0 0 0-2 2v3a1 1 0 1 1-2 0V6a4 4 0 0 1 4-4h2.077a2 2 0 0 1 3.381-.117A1 1 0 0 1 11.45 2h1.311L18.722.036l.003.002a1 1 0 0 1 1.273.906L20 .945v3.992l-.002.001L20 5a1 1 0 0 1-1.275.962l-.003.002L12.892 4H11.45v1.009q0 .045-.004.09A4.5 4.5 0 0 1 15 9.5V17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9.5a4.5 4.5 0 0 1 3.457-4.378a1 1 0 0 1-.007-.113z"></svg:path>`,
})
export class JamExtinguisherFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamEyeIcon],svg[jam-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6c0-1.81-3.76-3.985-8.007-4C5.775 1.985 2 4.178 2 6c0 1.825 3.754 4.006 7.997 4C14.252 9.994 18 7.82 18 6m-8 6c-5.042.007-10-2.686-10-6S4.984-.017 10 0s10 2.686 10 6s-4.958 5.993-10 6m0-2a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class JamEyeIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamEyeCloseIcon],svg[jam-eye-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.398 7.23l1.472-1.472C18.749 6.842 20 8.34 20 10c0 3.314-4.958 5.993-10 6a14.7 14.7 0 0 1-3.053-.32l1.747-1.746q.64.067 1.303.066h.002c-.415 0-.815-.063-1.191-.18l1.981-1.982c.47-.202.847-.579 1.05-1.049l1.98-1.981A4 4 0 0 1 10.022 14C14.267 13.985 18 11.816 18 10c0-.943-1.022-1.986-2.602-2.77m-9.302 3.645A4 4 0 0 1 9.993 6C5.775 5.985 2 8.178 2 10c0 .896.904 1.877 2.327 2.644L2.869 14.1C1.134 13.028 0 11.585 0 10c0-3.314 4.984-6.017 10-6c.914.003 1.827.094 2.709.262l-1.777 1.776q-.435-.033-.88-.038q.424.007.823.096l-4.78 4.779zM19.092.707a1 1 0 0 1 0 1.414l-16.97 16.97a1 1 0 1 1-1.415-1.413L17.677.708a1 1 0 0 1 1.415 0z"></svg:path>`,
})
export class JamEyeCloseIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamEyeCloseFIcon],svg[jam-eye-close-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.329 11.885L2.12 19.092a1 1 0 1 1-1.414-1.414l7.324-7.324a2 2 0 0 1 2.322-2.322L17.679.706a1 1 0 0 1 1.414 1.414l-7.208 7.21a2 2 0 0 1-2.556 2.556zm7.54-6.127C18.75 6.842 20 8.34 20 10c0 3.314-4.958 5.993-10 6a14.7 14.7 0 0 1-3.053-.32l1.861-1.86a4 4 0 0 0 5.011-5.011zm-4.16-1.496l-1.834 1.834a4 4 0 0 0-4.779 4.779L2.869 14.1C1.134 13.028 0 11.585 0 10c0-3.314 4.984-6.017 10-6c.914.003 1.827.094 2.709.262"></svg:path>`,
})
export class JamEyeCloseFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamEyeFIcon],svg[jam-eye-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12c-5.042.007-10-2.686-10-6S4.984-.017 10 0s10 2.686 10 6s-4.958 5.993-10 6m0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-2a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamEyeFIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamEyedropperIcon],svg[jam-eyedropper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.502 12.348h2.829l2.707-2.578l-1.414-1.347zm-1.987 1.905a4.7 4.7 0 0 0-1.002 1.653l-.334.954l1.002-.318a5.05 5.05 0 0 0 1.954-1.15l1.196-1.14H4.515zM14.866 9.77a.92.92 0 0 1 0 1.347a1.036 1.036 0 0 1-1.414 0L7.55 16.738a7.1 7.1 0 0 1-2.737 1.61l-2.899.921c-.523.166-1.09-.103-1.264-.602a.9.9 0 0 1 0-.603l.966-2.76a6.6 6.6 0 0 1 1.69-2.606L9.21 7.076a.92.92 0 0 1 0-1.347a1.036 1.036 0 0 1 1.414 0l4.242-4.04c1.172-1.116 3.071-1.116 4.243 0a2.76 2.76 0 0 1 0 4.04l-4.243 4.04zm-2.828-2.694l1.414 1.347l4.243-4.04a.92.92 0 0 0 0-1.347a1.036 1.036 0 0 0-1.414 0z"></svg:path>`,
})
export class JamEyedropperIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamEyedropperFIcon],svg[jam-eyedropper-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.473 11.693l-1.36 1.36l-8.417-.068L9.23 7.451a1 1 0 1 1 1.415-1.414l4.242-4.243a3 3 0 1 1 4.243 4.243l-4.243 4.242a1 1 0 0 1-1.414 1.414m-3.191 3.192L7.57 17.596a7 7 0 0 1-2.736 1.691l-2.899.966A1 1 0 0 1 .67 18.988l.967-2.899a7 7 0 0 1 .522-1.186z"></svg:path>`,
})
export class JamEyedropperFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFacebookIcon],svg[jam-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865"></svg:path>`,
})
export class JamFacebookIcon {
  readonly viewBox = input("-7 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFacebookCircleIcon],svg[jam-facebook-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.695 6.937v1.377H7.687v1.683h1.008V15h2.072V9.997h1.39s.131-.807.194-1.69h-1.576v-1.15c0-.173.226-.404.45-.404h1.128V5h-1.535C8.644 5 8.695 6.685 8.695 6.937"></svg:path><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class JamFacebookCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFacebookSquareIcon],svg[jam-facebook-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.695 6.937v1.377H7.687v1.683h1.008V15h2.072V9.997h1.39s.131-.807.194-1.69h-1.576v-1.15c0-.173.226-.404.45-.404h1.128V5h-1.535C8.644 5 8.695 6.685 8.695 6.937"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamFacebookSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFastBackwardIcon],svg[jam-fast-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5.915L10.51.69a1.966 1.966 0 0 1 2.814-.182c.43.386.676.942.676 1.526v3.88L18.51.69a1.966 1.966 0 0 1 2.814-.182c.43.386.676.942.676 1.526v13.932C22 17.089 21.107 18 20.006 18a1.98 1.98 0 0 1-1.496-.69L14 12.085v3.88C14 17.09 13.107 18 12.006 18a1.98 1.98 0 0 1-1.496-.69L6 12.085V16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zm0 3.092l6.006 6.959V2.034L6 8.993zm8 0l6.006 6.959V2.034L14 8.993zM2 2v14h2V2z"></svg:path>`,
})
export class JamFastBackwardIcon {
  readonly viewBox = input("-1 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFastBackwardCircleIcon],svg[jam-fast-backward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-3.92-6.4V14a1 1 0 0 1-2 0V6a1 1 0 1 1 2 0v2.509l2.516-2.842c.377-.426.9-.667 1.447-.667c.866 0 1.604.594 1.882 1.425l.671-.758c.377-.426.9-.667 1.447-.667c1.104 0 2 .965 2 2.156v5.688c0 .575-.213 1.125-.591 1.53a1.9 1.9 0 0 1-2.829-.011l-.706-.767c-.1.29-.258.556-.465.778a1.9 1.9 0 0 1-2.829-.011zm7.963 1.244V7.156L11.906 9.57l-.004.948zm-4 0V7.156l-2.567 2.9z"></svg:path>`,
})
export class JamFastBackwardCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFastBackwardCircleFIcon],svg[jam-fast-backward-circle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.08 11.6l2.543 2.763a1.9 1.9 0 0 0 2.829.011c.207-.222.365-.488.465-.778l.706.767a1.9 1.9 0 0 0 2.829.011c.378-.405.59-.955.59-1.53V7.156c0-1.19-.895-2.156-2-2.156c-.546 0-1.069.241-1.446.667l-.671.758C11.647 5.595 10.909 5 10.043 5c-.547 0-1.07.241-1.447.667L6.08 8.51V6a1 1 0 1 0-2 0v8a1 1 0 0 0 2 0zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m4.043-7.156l-2.141-2.326l.004-.948l2.137-2.414zm-4 0l-2.567-2.788l2.567-2.9z"></svg:path>`,
})
export class JamFastBackwardCircleFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFastBackwardSquareIcon],svg[jam-fast-backward-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm2.08 9.6V14a1 1 0 0 1-2 0V6a1 1 0 1 1 2 0v2.509l2.516-2.842c.377-.426.9-.667 1.447-.667c.866 0 1.604.594 1.882 1.425l.671-.758c.377-.426.9-.667 1.447-.667c1.104 0 2 .965 2 2.156v5.688c0 .575-.213 1.125-.591 1.53a1.9 1.9 0 0 1-2.829-.011l-.706-.767c-.1.29-.258.556-.465.778a1.9 1.9 0 0 1-2.829-.011zm7.963 1.244V7.156L11.906 9.57l-.004.948zm-4 0V7.156l-2.567 2.9z"></svg:path>`,
})
export class JamFastBackwardSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFastBackwardSquareFIcon],svg[jam-fast-backward-square-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.08 11.6l2.543 2.763a1.9 1.9 0 0 0 2.829.011c.207-.222.365-.488.465-.778l.706.767a1.9 1.9 0 0 0 2.829.011c.378-.405.59-.955.59-1.53V7.156c0-1.19-.895-2.156-2-2.156c-.546 0-1.069.241-1.446.667l-.671.758C11.647 5.595 10.909 5 10.043 5c-.547 0-1.07.241-1.447.667L6.08 8.51V6a1 1 0 1 0-2 0v8a1 1 0 0 0 2 0zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m10.043 12.844l-2.141-2.326l.004-.948l2.137-2.414zm-4 0l-2.567-2.788l2.567-2.9z"></svg:path>`,
})
export class JamFastBackwardSquareFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFastForwardIcon],svg[jam-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 12.085l-4.51 5.225a1.966 1.966 0 0 1-2.814.182A2.05 2.05 0 0 1 8 15.966v-3.88L3.49 17.31a1.966 1.966 0 0 1-2.814.182A2.05 2.05 0 0 1 0 15.966V2.034C0 .911.893 0 1.994 0c.573 0 1.118.251 1.496.69L8 5.915v-3.88C8 .91 8.893 0 9.994 0c.573 0 1.118.251 1.496.69L16 5.915V2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm0-3.078v-.014L9.994 2.034V8.84q.012.161 0 .322v6.805zM1.994 2.034v13.932L8.006 9zM18 2v14h2V2z"></svg:path>`,
})
export class JamFastForwardIcon {
  readonly viewBox = input("-1 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFastForwardCircleIcon],svg[jam-fast-forward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m4.043-6.4L11.5 14.364a1.9 1.9 0 0 1-2.829.011a2.2 2.2 0 0 1-.465-.778l-.706.767a1.9 1.9 0 0 1-2.829.011a2.24 2.24 0 0 1-.59-1.53V7.156c0-1.19.895-2.156 2-2.156c.546 0 1.068.241 1.446.667l.67.758C8.477 5.595 9.214 5 10.08 5c.547 0 1.07.241 1.447.667l2.516 2.842V6a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0zM6.08 12.845l2.141-2.326l-.004-.948L6.08 7.156v5.688zm4 0l2.567-2.788l-2.567-2.9z"></svg:path>`,
})
export class JamFastForwardCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFastForwardCircleFIcon],svg[jam-fast-forward-circle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.043 8.509l-2.516-2.842A1.93 1.93 0 0 0 10.08 5c-.867 0-1.604.594-1.882 1.425l-.671-.758A1.93 1.93 0 0 0 6.08 5c-1.104 0-2 .965-2 2.156v5.688c0 .575.213 1.125.591 1.53a1.9 1.9 0 0 0 2.829-.011l.706-.767c.1.29.258.556.465.778a1.9 1.9 0 0 0 2.829-.011l2.543-2.762V14a1 1 0 0 0 2 0V6a1 1 0 1 0-2 0zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m-4.268-7.13V7.181l2.137 2.413l.004.949l-2.141 2.325zm4.426 0V7.181l2.567 2.899l-2.567 2.788z"></svg:path>`,
})
export class JamFastForwardCircleFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFastForwardSquareIcon],svg[jam-fast-forward-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm10.043 9.6L11.5 14.364a1.9 1.9 0 0 1-2.829.011a2.2 2.2 0 0 1-.465-.778l-.706.767a1.9 1.9 0 0 1-2.829.011a2.24 2.24 0 0 1-.59-1.53V7.156c0-1.19.895-2.156 2-2.156c.546 0 1.068.241 1.446.667l.67.758C8.477 5.595 9.214 5 10.08 5c.547 0 1.07.241 1.447.667l2.516 2.842V6a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0zM6.08 12.845l2.141-2.326l-.004-.948L6.08 7.156v5.688zm4 0l2.567-2.788l-2.567-2.9z"></svg:path>`,
})
export class JamFastForwardSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFastForwardSquareFIcon],svg[jam-fast-forward-square-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.043 8.509l-2.516-2.842A1.93 1.93 0 0 0 10.08 5c-.867 0-1.604.594-1.882 1.425l-.671-.758A1.93 1.93 0 0 0 6.08 5c-1.104 0-2 .965-2 2.156v5.688c0 .575.213 1.125.591 1.53a1.9 1.9 0 0 0 2.829-.011l.706-.767c.1.29.258.556.465.778a1.9 1.9 0 0 0 2.829-.011l2.543-2.762V14a1 1 0 0 0 2 0V6a1 1 0 1 0-2 0zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m1.973 12.93V7.242L8.11 9.656l.004.948zm4.03-.055V7.187l2.567 2.9z"></svg:path>`,
})
export class JamFastForwardSquareFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFeatherIcon],svg[jam-feather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.89 10.808l3.616-3.616a3 3 0 0 0-4.243-4.242L11.77 4.444l.598 2.23l.896-.896a1 1 0 1 1 1.415 1.414L11.66 10.21zm-1.633 1.633l-2.23-.598l-2.74 2.74l2.66.169zm-2.12-6.364L5.71 10.502l.163 2.665l4.86-4.86l-.598-2.23zM5.403 16.466L1.95 19.92a1 1 0 0 1-1.414-1.414l3.45-3.45l-.326-5.331l8.19-8.19a5 5 0 1 1 7.07 7.072l-8.198 8.198l-5.318-.34z"></svg:path>`,
})
export class JamFeatherIcon {
  readonly viewBox = input("-1.5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFeatherFIcon],svg[jam-feather-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.393 12.029l-4.461-1.196l3.018-3.018a1 1 0 1 0-1.414-1.414l-.897.897l-1.195-4.462l.677-.677a5 5 0 0 1 7.071 7.07zm-1.633 1.633l-3.766 3.766l-5.318-.339l4.623-4.623zM4.343 15.594l1.414 1.414l-3.535 3.535A1 1 0 1 1 .808 19.13l3.45-3.45l-.326-5.331L9.811 4.47l1.195 4.462z"></svg:path>`,
})
export class JamFeatherFIcon {
  readonly viewBox = input("-1.5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFemaleIcon],svg[jam-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12A5 5 0 1 0 7 2a5 5 0 0 0 0 10m1 4h1a1 1 0 0 1 0 2H8v1a1 1 0 0 1-2 0v-1H5a1 1 0 0 1 0-2h1v-2q0-.036.002-.07A7.002 7.002 0 0 1 7 0a7 7 0 0 1 .998 13.93L8 14z"></svg:path>`,
})
export class JamFemaleIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFileIcon],svg[jam-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.298 2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4.961zM3 0h8l5 4v13a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3"></svg:path>`,
})
export class JamFileIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFileFIcon],svg[jam-file-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h8l5 4v13a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3"></svg:path>`,
})
export class JamFileFIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFilesIcon],svg[jam-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3h3l3 3v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm0-2V7a2 2 0 0 1 2-2h2V2H2v11zm8.172-6H8v11h8V8.828z"></svg:path>`,
})
export class JamFilesIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFilesFIcon],svg[jam-files-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4H7a2 2 0 0 0-2 2v9H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2zM8 5h7l3 3v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"></svg:path>`,
})
export class JamFilesFIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFilterIcon],svg[jam-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.08 2l6.482 8.101A2 2 0 0 1 9 11.351V18l2-1.5v-5.15a2 2 0 0 1 .438-1.249L17.92 2zm0-2h15.84a2 2 0 0 1 1.561 3.25L13 11.35v5.15a2 2 0 0 1-.8 1.6l-2 1.5A2 2 0 0 1 7 18v-6.65L.519 3.25A2 2 0 0 1 2.08 0"></svg:path>`,
})
export class JamFilterIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFilterFIcon],svg[jam-filter-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.08.858h15.84a1 1 0 0 1 .78 1.625l-6.48 8.101a1 1 0 0 0-.22.625v5.149a1 1 0 0 1-.4.8l-2 1.5a1 1 0 0 1-1.6-.8v-6.65a1 1 0 0 0-.22-.624L.3 2.483A1 1 0 0 1 1.08.858"></svg:path>`,
})
export class JamFilterFIcon {
  readonly viewBox = input("-3 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFingerprintIcon],svg[jam-fingerprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7a1 1 0 1 1-2 0a7 7 0 1 1 14 0v2a1 1 0 0 1-2 0V7A5 5 0 1 0 2 7m3 3a1 1 0 0 1-2 0V7a4 4 0 1 1 8 0a1 1 0 0 1-2 0a2 2 0 1 0-4 0zm-2 3a1 1 0 0 1 2 0a2 2 0 1 0 4 0v-3a1 1 0 1 1 2 0v3a4 4 0 1 1-8 0m3-5a1 1 0 1 1 2 0v4a1 1 0 0 1-2 0zm-6 3a1 1 0 0 1 2 0v2a5 5 0 0 0 10 0a1 1 0 0 1 2 0a7 7 0 0 1-14 0z"></svg:path>`,
})
export class JamFingerprintIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFirstAidIcon],svg[jam-first-aid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm2-2V3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm2 0h6V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1zm2 4h2v6H9zm-2 2h6v2H7z"></svg:path>`,
})
export class JamFirstAidIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFirstAidFIcon],svg[jam-first-aid-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4.858v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3zm6 6v-2H9v2H7v2h2v2h2v-2h2v-2zm-4-6h6v-1a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1z"></svg:path>`,
})
export class JamFirstAidFIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFishIcon],svg[jam-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.366 2.085C9.773 2.973 10 3.96 10 5s-.227 2.027-.634 2.915C12.104 7.567 14 6.215 14 5s-1.896-2.567-4.634-2.915M15 2.577c1.052-1.184 2.851-2.074 5-2.42v9.685c-2.149-.345-3.948-1.235-5-2.42C13.635 8.96 11.012 10 8 10c-4.418 0-8-2.239-8-5s3.582-5 8-5c3.012 0 5.635 1.04 7 2.577M18 7V3c-1.15.23-2 1.038-2 2s.85 1.77 2 2M2 5c0 1.27 2.077 2.696 5.032 2.958A4.97 4.97 0 0 0 8 5a4.97 4.97 0 0 0-.968-2.958C4.077 2.304 2 3.73 2 5m3 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class JamFishIcon {
  readonly viewBox = input("-2 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFiverrIcon],svg[jam-fiverr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.63 5.63 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75z"></svg:path><svg:circle cx="14.375" cy="1.875" r="1.875"></svg:circle></svg:g>`,
})
export class JamFiverrIcon {
  readonly viewBox = input("-2.5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFiverrCircleIcon],svg[jam-fiverr-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M13.427 13.148v-5h-5v-.312c0-.517.42-.938.938-.938h.937V5.023h-.937a2.816 2.816 0 0 0-2.813 2.813v.312h-1.25v1.875h1.25v3.125h-1.25v1.875h4.375v-1.875h-1.25v-3.125h3.143v3.125h-1.268v1.875h4.375v-1.875z"></svg:path><svg:circle cx="12.402" cy="5.971" r="1.001"></svg:circle></svg:g>`,
})
export class JamFiverrCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFiverrSquareIcon],svg[jam-fiverr-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.427 13.148v-5h-5v-.312c0-.517.42-.938.938-.938h.937V5.023h-.937a2.816 2.816 0 0 0-2.813 2.813v.312h-1.25v1.875h1.25v3.125h-1.25v1.875h4.375v-1.875h-1.25v-3.125h3.143v3.125h-1.268v1.875h4.375v-1.875z"></svg:path><svg:circle cx="12.402" cy="5.971" r="1.001"></svg:circle><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamFiverrSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFlagIcon],svg[jam-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H2v7a1 1 0 0 1-2 0V1a1 1 0 1 1 2 0m0 9h12V3H2z"></svg:path>`,
})
export class JamFlagIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFlagFIcon],svg[jam-flag-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H2v7a1 1 0 0 1-2 0V1a1 1 0 1 1 2 0"></svg:path>`,
})
export class JamFlagFIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFlameIcon],svg[jam-flame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.652 5.594q-.242.291-.424.522q-.37.473-.7.922C2.813 9.383 2 11.204 2 12.381C2 15.461 4.665 18 8 18s6-2.538 6-5.619c0-1.888-1.97-5.13-5.972-9.453c-1.192 1.307-1.988 2.2-2.376 2.666M8 20c-4.418 0-8-3.411-8-7.619q0-2.54 2.914-6.523a28 28 0 0 1 1.202-1.545Q4.952 3.311 8 0q8 8.174 8 12.381C16 16.589 12.418 20 8 20m0-3c-2.21 0-4-1.706-4-3.81Q4 11.087 8 7q4 4.087 4 6.19C12 15.294 10.21 17 8 17m-2-3.81c0 .977.874 1.81 2 1.81s2-.833 2-1.81c0-.537-.654-1.675-2-3.24c-1.346 1.565-2 2.703-2 3.24"></svg:path>`,
})
export class JamFlameIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFlameFIcon],svg[jam-flame-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20c-4.418 0-8-3.411-8-7.619q0-2.54 2.914-6.523a28 28 0 0 1 1.202-1.545Q4.952 3.311 8 0q8 8.174 8 12.381C16 16.589 12.418 20 8 20m0-3c2.21 0 4-1.706 4-3.81Q12 11.087 8 7q-4 4.087-4 6.19C4 15.294 5.79 17 8 17"></svg:path>`,
})
export class JamFlameFIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFlashlightOffIcon],svg[jam-flashlight-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.31 5.825l3.865 3.865c.334-.09.642-.265.896-.518l2.121-2.122l-4.242-4.242l-2.122 2.12a2 2 0 0 0-.518.897m1.933 4.76l-2.829-2.828l-9.192 9.193a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l9.193-9.192zm-2.829-7.07l2.122-2.122a2 2 0 0 1 2.828 0l4.243 4.243a2 2 0 0 1 0 2.828l-2.122 2.122a4 4 0 0 1-2.578 1.164l-9.443 9.442a3 3 0 0 1-4.242 0l-1.414-1.414a3 3 0 0 1 0-4.242l9.442-9.443a4 4 0 0 1 1.164-2.578m-2.121 9.192a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 1 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414 0"></svg:path>`,
})
export class JamFlashlightOffIcon {
  readonly viewBox = input("-0.5 -0.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFlashlightOffFIcon],svg[jam-flashlight-off-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6.757L14.243 11L5.05 20.192a2 2 0 0 1-2.828 0L.808 18.778a2 2 0 0 1 0-2.828zm.904-1.924a3 3 0 0 1 .695-1.09l3.35-3.35a1 1 0 0 1 1.415 0l4.243 4.243a1 1 0 0 1 0 1.414l-3.32 3.32a3 3 0 0 1-1.134.712l-5.25-5.25zm-2.318 7.581a1 1 0 0 0 1.414 0L11.414 11A1 1 0 1 0 10 9.586L8.586 11a1 1 0 0 0 0 1.414"></svg:path>`,
})
export class JamFlashlightOffFIcon {
  readonly viewBox = input("-1.5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFlashlightOnIcon],svg[jam-flashlight-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.24 13.12l.381.02a1 1 0 0 0 .764-.29l2.121-2.122l-3.535-3.536l-2.122 2.122a1 1 0 0 0-.291.763l.021.38zm-1.684 1.143l-2.121-2.12l-7.071 7.07a1 1 0 0 0 0 1.414l.707.708a1 1 0 0 0 1.414 0zM9.435 7.9l2.121-2.12a2 2 0 0 1 2.829 0l3.535 3.535a2 2 0 0 1 0 2.828l-2.12 2.12a3 3 0 0 1-2.288.875L5.9 22.748a3 3 0 0 1-4.242 0l-.707-.706a3 3 0 0 1 0-4.243l7.611-7.611a3 3 0 0 1 .874-2.289zm8.485 0a1 1 0 0 1 0-1.414l2.122-2.121a1 1 0 1 1 1.414 1.414L19.335 7.9a1 1 0 0 1-1.415 0m1.863 1.674a1 1 0 0 1 .707-1.225l1.932-.518a1 1 0 1 1 .517 1.932l-1.931.518a1 1 0 0 1-1.225-.707m-3.984-3.795a1 1 0 0 1 0-1.414l2.121-2.121a1 1 0 0 1 1.415 1.414l-2.122 2.121a1 1 0 0 1-1.414 0m-1.673-1.862a1 1 0 0 1-.707-1.225L13.936.76a1 1 0 1 1 1.932.518l-.517 1.932a1 1 0 0 1-1.225.707"></svg:path>`,
})
export class JamFlashlightOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFlashlightOnFIcon],svg[jam-flashlight-on-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.2 10.81l3.99 3.99l-6.65 6.65a1.88 1.88 0 0 1-2.66 0L.55 20.12a1.88 1.88 0 0 1 0-2.66zm.85-1.809a2.8 2.8 0 0 1 .654-1.024l3.151-3.15a.94.94 0 0 1 1.33 0l3.99 3.99a.94.94 0 0 1 0 1.33l-3.123 3.121a2.8 2.8 0 0 1-1.066.669zm8.714-1.925a.87.87 0 0 1 0-1.227l2.098-2.097a.868.868 0 0 1 1.227 1.227l-2.097 2.097a.87.87 0 0 1-1.228 0m1.573 1.394a.87.87 0 0 1 .614-1.063l1.956-.524a.868.868 0 0 1 .45 1.677l-1.957.524a.87.87 0 0 1-1.063-.614m-3.414-3.235a.87.87 0 0 1 0-1.227L17.02 1.91a.868.868 0 0 1 1.228 1.227L16.15 5.235a.87.87 0 0 1-1.228 0zM13.53 3.663a.87.87 0 0 1-.614-1.063L13.44.644a.868.868 0 0 1 1.677.449l-.524 1.956a.87.87 0 0 1-1.063.614"></svg:path>`,
})
export class JamFlashlightOnFIcon {
  readonly viewBox = input("-1 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFlaskIcon],svg[jam-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2v5.938l-1.142.542a5 5 0 1 0 4.284 0L8 7.938V2zM4 6.674V0h6v6.674a7 7 0 1 1-6 0M3.535 11h6.93a4 4 0 1 1-6.93 0M4 0h6a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2"></svg:path>`,
})
export class JamFlaskIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFlickrIcon],svg[jam-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="4.727" cy="4.757" r="4.727"></svg:circle><svg:circle cx="15.255" cy="4.757" r="4.727"></svg:circle></svg:g>`,
})
export class JamFlickrIcon {
  readonly viewBox = input("-2 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFlickrCircleIcon],svg[jam-flickr-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="7.364" cy="10.379" r="2.364"></svg:circle><svg:circle cx="12.628" cy="10.379" r="2.364"></svg:circle><svg:path d="M10 18.494a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2c-5.523 0-10-4.478-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class JamFlickrCircleIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFlickrSquareIcon],svg[jam-flickr-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="7.364" cy="10.379" r="2.364"></svg:circle><svg:circle cx="12.628" cy="10.379" r="2.364"></svg:circle><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamFlickrSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFlowerIcon],svg[jam-flower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.094 11.59a6 6 0 0 1 .346-.466a3.5 3.5 0 0 1-.406-1.637A3.5 3.5 0 0 1 7.01 4.54a3.5 3.5 0 0 1 3.473-3.472A3.5 3.5 0 0 1 13 0c.943 0 1.799.373 2.428.98a3.504 3.504 0 0 1 3.521 3.5A3.57 3.57 0 0 1 20 7c0 .95-.379 1.813-.994 2.443V9.5A3.5 3.5 0 0 1 15.45 13c-.631.618-1.496 1-2.45 1c-.96 0-1.83-.387-2.463-1.013a3.5 3.5 0 0 1-1.68-.428a3.775 3.775 0 0 0 .127 4.623l1.79 2.184a1 1 0 1 1-1.547 1.268l-1.79-2.184a5.8 5.8 0 0 1-.964-1.692a3.21 3.21 0 0 1-3.404-.177q-1.452-1.018-2.48-6.547q4.713.266 6.166 1.283q.18.127.34.274zm4.265-.604l.586.58c.28.277.653.434 1.055.434c.4 0 .77-.154 1.05-.429l.596-.584l.835.013c.854 0 1.525-.671 1.525-1.5l-.013-.857l.581-.596C17.847 7.767 18 7.398 18 7c0-.41-.163-.79-.45-1.072l-.606-.593l.005-.847c0-.837-.671-1.509-1.5-1.509l-.823.005l-.585-.564A1.5 1.5 0 0 0 13 2a1.5 1.5 0 0 0-1.079.458l-.583.603l-.84.007A1.5 1.5 0 0 0 9.01 4.556l-.006.812l-.571.578C8.156 6.226 8 6.598 8 7c0 .407.16.783.443 1.065l.592.587v.834a1.5 1.5 0 0 0 1.5 1.5zM13 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-8.783 5.942a1.213 1.213 0 0 0 1.39-1.986c-.358-.251-1.198-.491-2.47-.674c.42 1.566.826 2.483 1.08 2.66"></svg:path>`,
})
export class JamFlowerIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFolderIcon],svg[jam-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4H9.415l-.471-1.334A1 1 0 0 0 8 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-6.17-2H17a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h5c1.306 0 2.417.835 2.83 2"></svg:path>`,
})
export class JamFolderIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFolderFIcon],svg[jam-folder-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.83 2H17a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h5c1.306 0 2.417.835 2.83 2"></svg:path>`,
})
export class JamFolderFIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFolderOpenIcon],svg[jam-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5a1 1 0 0 0-1-1H9.415l-.471-1.334A1 1 0 0 0 8 2H3a1 1 0 0 0-1 1v2zm0 2H2v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1zm-7.17-5H17a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h5c1.306 0 2.417.835 2.83 2"></svg:path>`,
})
export class JamFolderOpenIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFolderOpenFIcon],svg[jam-folder-open-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5V3a3 3 0 0 1 3-3h5c1.306 0 2.417.835 2.83 2H17a3 3 0 0 1 3 3zm0 2h20v6a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3z"></svg:path>`,
})
export class JamFolderOpenFIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFolderZipIcon],svg[jam-folder-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.83 2H17a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h5c1.306 0 2.417.835 2.83 2M17 4H9.415l-.471-1.334A1 1 0 0 0 8 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-3 2h2v2h-2zm-2-2h2v2h-2zm0 4h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2z"></svg:path>`,
})
export class JamFolderZipIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFolderZipFIcon],svg[jam-folder-zip-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.83 2H17a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h5c1.306 0 2.417.835 2.83 2M14 6v2h2V6zm-2-2v2h2V4zm0 4v2h2V8zm2 2v2h2v-2zm-2 2v2h2v-2z"></svg:path>`,
})
export class JamFolderZipFIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFootballIcon],svg[jam-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.835 14h6.33A10.3 10.3 0 0 0 10 10c0-1.37-.302-2.741-.835-4h-6.33A10.3 10.3 0 0 0 2 10c0 1.37.302 2.741.835 4m1.106 2c.484.688 1.01 1.254 1.499 1.63c.343.265.58.37.56.37s.217-.105.56-.37c.489-.376 1.015-.942 1.499-1.63H3.94zM7 11h1a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h1V9H4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2H7zM3.941 4H8.06c-.484-.688-1.01-1.254-1.499-1.63C6.217 2.105 5.98 2 6 2s-.217.105-.56.37c-.489.376-1.015.942-1.499 1.63M6 20c-2 0-6-4.477-6-10S4 0 6 0s6 4.477 6 10s-4 10-6 10"></svg:path>`,
})
export class JamFootballIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamForkIcon],svg[jam-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1.033-3.817A3.001 3.001 0 1 1 7 14.17v-1.047q0-.111.008-.221a1 1 0 0 0-.462-.637L3.46 10.42A3 3 0 0 1 2 7.845V5.829a3.001 3.001 0 1 1 2 0v2.016a1 1 0 0 0 .487.858l3.086 1.846a3 3 0 0 1 .443.324a3 3 0 0 1 .444-.324l3.086-1.846a1 1 0 0 0 .487-.858V5.841A3.001 3.001 0 0 1 13 0a3 3 0 0 1 1.033 5.817v2.028a3 3 0 0 1-1.46 2.575l-3.086 1.846a1 1 0 0 0-.462.637q.008.11.008.22zM3 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamForkIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamForkFIcon],svg[jam-fork-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.033 15.04A3.001 3.001 0 1 1 7 15.03v-1.047q0-.111.008-.221a1 1 0 0 0-.462-.638L3.46 11.277A3 3 0 0 1 2 8.703V6.687a3.001 3.001 0 1 1 2 0v2.016a1 1 0 0 0 .487.858l3.086 1.846a3 3 0 0 1 .443.324a3 3 0 0 1 .444-.324l3.086-1.846a1 1 0 0 0 .487-.858V6.699A3.001 3.001 0 0 1 13 .858a3 3 0 0 1 1.033 5.817v2.028a3 3 0 0 1-1.46 2.574l-3.086 1.846a1 1 0 0 0-.462.638q.008.11.008.22v1.06z"></svg:path>`,
})
export class JamForkFIcon {
  readonly viewBox = input("-4 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamForwardIcon],svg[jam-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.49 17.31a1.966 1.966 0 0 1-2.814.182A2.05 2.05 0 0 1 10 15.966V2.034C10 .911 10.893 0 11.994 0c.573 0 1.118.251 1.496.69l6.012 6.966c.664.768.664 1.92 0 2.688zM11.994 2.034v13.932L18.006 9zM3.49 17.31a1.966 1.966 0 0 1-2.814.182A2.05 2.05 0 0 1 0 15.966V2.034C0 .911.893 0 1.994 0c.573 0 1.118.251 1.496.69l6.012 6.966c.664.768.664 1.92 0 2.688zM1.994 2.034v13.932L8.006 9z"></svg:path>`,
})
export class JamForwardIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamForwardCircleIcon],svg[jam-forward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-.973-4.754l-1.956 1.398c-.905.646-2.13.389-2.737-.576A2.2 2.2 0 0 1 4 12.898V7.102C4 5.942 4.883 5 5.972 5c.391 0 .774.124 1.099.356l1.956 1.398C9.182 5.76 9.994 5 10.972 5c.391 0 .774.124 1.099.356l4.055 2.898c.905.647 1.146 1.952.54 2.917a2 2 0 0 1-.54.575l-4.055 2.898c-.905.646-2.13.389-2.737-.576a2.2 2.2 0 0 1-.307-.822m1.945-6.144v5.796L15.027 10zm-5 0v5.796l3.02-2.159l.004-1.476z"></svg:path>`,
})
export class JamForwardCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamForwardCircleFIcon],svg[jam-forward-circle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.027 13.246c.046.293.15.573.307.822c.607.965 1.832 1.222 2.737.576l4.055-2.898c.213-.153.397-.348.54-.575c.606-.965.365-2.27-.54-2.917L12.07 5.356A1.9 1.9 0 0 0 10.972 5c-.978 0-1.79.759-1.945 1.754L7.07 5.356A1.9 1.9 0 0 0 5.972 5C4.883 5 4 5.941 4 7.102v5.796c0 .417.116.824.334 1.17c.607.965 1.832 1.222 2.737.576zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m.972-12.898v5.796L15.027 10zm-5 0v5.796l3.02-2.159l.004-1.476z"></svg:path>`,
})
export class JamForwardCircleFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamForwardSquareIcon],svg[jam-forward-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm5.027 11.246l-1.956 1.398c-.905.646-2.13.389-2.737-.576A2.2 2.2 0 0 1 4 12.898V7.102C4 5.942 4.883 5 5.972 5c.391 0 .774.124 1.099.356l1.956 1.398C9.182 5.76 9.994 5 10.972 5c.391 0 .774.124 1.099.356l4.055 2.898c.905.647 1.146 1.952.54 2.917a2 2 0 0 1-.54.575l-4.055 2.898c-.905.646-2.13.389-2.737-.576a2.2 2.2 0 0 1-.307-.822m1.945-6.144v5.796L15.027 10zm-5 0v5.796l3.02-2.159l.004-1.476z"></svg:path>`,
})
export class JamForwardSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamForwardSquareFIcon],svg[jam-forward-square-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.027 13.246c.046.293.15.573.307.822c.607.965 1.832 1.222 2.737.576l4.055-2.898c.213-.153.397-.348.54-.575c.606-.965.365-2.27-.54-2.917L12.07 5.356A1.9 1.9 0 0 0 10.972 5c-.978 0-1.79.759-1.945 1.754L7.07 5.356A1.9 1.9 0 0 0 5.972 5C4.883 5 4 5.941 4 7.102v5.796c0 .417.116.824.334 1.17c.607.965 1.832 1.222 2.737.576zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m6.972 7.102L15.027 10l-4.055 2.898zm-5 0l3.024 2.161l-.003 1.476l-3.02 2.159V7.102z"></svg:path>`,
})
export class JamForwardSquareFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamFoursquareIcon],svg[jam-foursquare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.467.771A2.13 2.13 0 0 0 11.833 0H2.159C.974 0 .01.987.01 2.2v16.786c0 .418.253.792.635.94a.96.96 0 0 0 1.084-.273l5.189-5.985h3.481c1.064 0 1.957-.78 2.123-1.855l1.435-9.27a2.23 2.23 0 0 0-.489-1.772zm-2.403 4.844H6.465c-.55 0-1.015.461-1.005 1.025c.01.547.446.987.983.987h4.16a.5.5 0 0 1 .485.582l-.465 3.024a.496.496 0 0 1-.487.425l-3.662-.002a.97.97 0 0 0-.735.339l-3.763 4.34V2.2c0-.104.082-.188.183-.188h9.272a.5.5 0 0 1 .488.577l-.368 2.594a.496.496 0 0 1-.487.432"></svg:path>`,
})
export class JamFoursquareIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGamepadIcon],svg[jam-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5h1a1 1 0 1 1 0 2H7v1a1 1 0 1 1-2 0V7H4a1 1 0 1 1 0-2h1V4a1 1 0 1 1 2 0zm2.318-4h5.364A6 6 0 0 1 24 6c0 3.314-2.686 10-6 10c-1.976 0-3.729-2.378-4.822-5h-2.356C9.73 13.622 7.976 16 6 16C2.686 16 0 9.314 0 6a6 6 0 0 1 9.318-5m5.968 2H8.714l-.504-.335A4 4 0 0 0 2 6c0 3.117 2.542 8 4 8c.722 0 2.004-1.438 2.976-3.77L9.49 9h5.022l.513 1.23C15.996 12.562 17.278 14 18 14c1.458 0 4-4.883 4-8a4 4 0 0 0-6.21-3.335zM18 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-2 2a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-2 2a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class JamGamepadIcon {
  readonly viewBox = input("0 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGamepadFIcon],svg[jam-gamepad-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V4a1 1 0 1 0-2 0v1H4a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0V7h1a1 1 0 1 0 0-2zm2.318-4h5.364A6 6 0 0 1 24 6c0 3.314-2.686 10-6 10c-1.976 0-3.729-2.378-4.822-5h-2.356C9.73 13.622 7.976 16 6 16C2.686 16 0 9.314 0 6a6 6 0 0 1 9.318-5M18 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-2 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-2 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamGamepadFIcon {
  readonly viewBox = input("0 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGamepadRetroIcon],svg[jam-gamepad-retro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5h1a1 1 0 1 1 0 2H7v1a1 1 0 1 1-2 0V7H4a1 1 0 1 1 0-2h1V4a1 1 0 1 1 2 0zM6 0h12a6 6 0 1 1-4.472 10h-3.056A6 6 0 1 1 6 0m0 2a4 4 0 1 0 2.982 6.666L9.578 8h4.844l.596.666A4 4 0 1 0 18 2zm12 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-2 2a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-2 2a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class JamGamepadRetroIcon {
  readonly viewBox = input("0 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGamepadRetroFIcon],svg[jam-gamepad-retro-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V4a1 1 0 1 0-2 0v1H4a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0V7h1a1 1 0 1 0 0-2zM6 0h12a6 6 0 1 1-4.472 10h-3.056A6 6 0 1 1 6 0m12 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-2 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-2 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamGamepadRetroFIcon {
  readonly viewBox = input("0 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGammaIcon],svg[jam-gamma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 2H2v10h10zm-1 1v3H9V5H6v6H4V5H3V3z"></svg:path>`,
})
export class JamGammaIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGhostIcon],svg[jam-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 0 1 8 8v12l-4.919-1l-3.08 1l-2.992-1L0 20V8a8 8 0 0 1 8-8m6 8A6 6 0 0 0 2 8v9.561l3.138-.626l2.871.96l2.955-.96l3.036.618zm-8.5 2a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class JamGhostIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGhostFIcon],svg[jam-ghost-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 0 1 8 8v12l-4.919-1l-3.08 1l-2.992-1L0 20V8a8 8 0 0 1 8-8M5.5 10a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m5 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class JamGhostFIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGhostOrgIcon],svg[jam-ghost-org-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.049 15.31H7.89v3.774H.049zm11.76 0h7.836v3.774h-7.836zM.043 7.762h19.604v3.774H.043zM.049.214h11.762v3.774H.049zm15.681 0h3.92v3.774h-3.92z"></svg:path>`,
})
export class JamGhostOrgIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGhostOrgCircleIcon],svg[jam-ghost-org-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M5.024 12.655h3.92v1.887h-3.92zm5.881 0h3.918v1.887h-3.918zM5.021 8.881h9.802v1.887H5.021zm.003-3.774h5.881v1.887H5.024zm7.841 0h1.96v1.887h-1.96z"></svg:path></svg:g>`,
})
export class JamGhostOrgCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGhostOrgSquareIcon],svg[jam-ghost-org-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.024 12.655h3.92v1.887h-3.92zm5.881 0h3.918v1.887h-3.918zM5.021 8.881h9.802v1.887H5.021zm.003-3.774h5.881v1.887H5.024zm7.841 0h1.96v1.887h-1.96z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamGhostOrgSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGiftIcon],svg[jam-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12v6h10v-6zm11.437-5.952A2 2 0 0 1 16 8v2a2 2 0 0 1-1.017 1.742Q15 11.868 15 12v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-6q0-.131.017-.258A2 2 0 0 1 0 10V8a2 2 0 0 1 1.563-1.952A4 4 0 0 1 8 1.354a4 4 0 0 1 6.437 4.694M14 8H2v2h12zM7 4a2 2 0 1 0-2 2h2zm2 2h2a2 2 0 1 0-2-2zM7 7h2v12H7z"></svg:path>`,
})
export class JamGiftIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGiftFIcon],svg[jam-gift-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20v-8h6v6a2 2 0 0 1-2 2zM7 6v4H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h.535A4 4 0 0 1 8 1.354A4 4 0 0 1 14.465 6H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9V6zm0 14H3a2 2 0 0 1-2-2v-6h6zM7 6V4a2 2 0 1 0-2 2zm2 0h2a2 2 0 1 0-2-2z"></svg:path>`,
})
export class JamGiftFIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGithubIcon],svg[jam-github-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.88 1.099Q17.78-.001 16.233 0H3.746Q2.198 0 1.099 1.099Q-.001 2.199 0 3.746v12.487q0 1.548 1.099 2.647q1.1 1.1 2.647 1.099H6.66q.285 0 .429-.02a.5.5 0 0 0 .286-.169q.143-.15.143-.435l-.007-.885q-.006-.846-.006-1.34l-.3.052q-.285.052-.721.046a5.6 5.6 0 0 1-.904-.091a2 2 0 0 1-.872-.39a1.65 1.65 0 0 1-.572-.8l-.13-.3a3.3 3.3 0 0 0-.41-.663q-.28-.364-.566-.494l-.09-.065a1 1 0 0 1-.17-.156a.7.7 0 0 1-.117-.182q-.039-.092.065-.15q.104-.06.378-.059l.26.04q.26.051.643.311a2.1 2.1 0 0 1 .631.677q.3.532.722.813q.423.28.852.28t.742-.065a2.6 2.6 0 0 0 .585-.196q.117-.871.637-1.34a9 9 0 0 1-1.333-.234a5.3 5.3 0 0 1-1.223-.507a3.5 3.5 0 0 1-1.047-.872q-.416-.52-.683-1.365q-.266-.846-.266-1.952q0-1.573 1.027-2.68q-.48-1.183.091-2.652q.378-.118 1.119.175t1.086.5q.345.21.553.352a9.2 9.2 0 0 1 2.497-.338q1.288 0 2.498.338l.494-.312a7 7 0 0 1 1.197-.572q.689-.26 1.054-.143q.585 1.47.103 2.653q1.028 1.105 1.028 2.68q0 1.106-.267 1.957q-.266.852-.689 1.366a3.7 3.7 0 0 1-1.053.865q-.63.351-1.223.507a9 9 0 0 1-1.333.235q.675.585.676 1.846v3.11q0 .22.065.357a.36.36 0 0 0 .208.189q.143.052.254.064q.111.014.318.013h2.914q1.548 0 2.647-1.099t1.099-2.647V3.746q0-1.548-1.1-2.647z"></svg:path>`,
})
export class JamGithubIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGithubCircleIcon],svg[jam-github-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.18 15.008q.18 0 .271-.012a.32.32 0 0 0 .18-.107q.09-.094.09-.274l-.004-.557q-.004-.533-.004-.844l-.188.033a2.4 2.4 0 0 1-.455.028a3.5 3.5 0 0 1-.57-.057a1.3 1.3 0 0 1-.548-.246a1.04 1.04 0 0 1-.36-.503l-.082-.189a2 2 0 0 0-.258-.417a1 1 0 0 0-.357-.312l-.057-.04a.6.6 0 0 1-.106-.1a.5.5 0 0 1-.074-.114q-.024-.057.04-.094a.5.5 0 0 1 .238-.037l.164.025q.165.032.406.196q.24.164.397.426q.189.336.455.512a.96.96 0 0 0 .536.176q.27 0 .467-.04a1.6 1.6 0 0 0 .369-.124q.073-.548.4-.843a5.6 5.6 0 0 1-.839-.148a3.4 3.4 0 0 1-.77-.32a2.2 2.2 0 0 1-.66-.548q-.26-.328-.43-.86a4.1 4.1 0 0 1-.167-1.229q0-.99.647-1.687q-.303-.745.057-1.671q.239-.075.705.11q.467.184.684.316q.217.13.348.22a5.8 5.8 0 0 1 1.573-.212q.81 0 1.573.213l.31-.197q.32-.196.754-.36q.435-.165.664-.09q.37.926.065 1.67q.648.697.648 1.688q0 .696-.168 1.233t-.434.86a2.3 2.3 0 0 1-.664.545a3.3 3.3 0 0 1-.77.32a5.6 5.6 0 0 1-.84.147q.426.368.426 1.163v1.957q0 .14.041.226a.23.23 0 0 0 .131.119q.09.032.16.04t.2.009z"></svg:path><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class JamGithubCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGithubSquareIcon],svg[jam-github-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.18 15.008q.18 0 .271-.012a.32.32 0 0 0 .18-.107q.09-.094.09-.274l-.004-.557q-.004-.533-.004-.844l-.188.033a2.4 2.4 0 0 1-.455.028a3.5 3.5 0 0 1-.57-.057a1.3 1.3 0 0 1-.548-.246a1.04 1.04 0 0 1-.36-.503l-.082-.189a2 2 0 0 0-.258-.417a1 1 0 0 0-.357-.312l-.057-.04a.6.6 0 0 1-.106-.1a.5.5 0 0 1-.074-.114q-.024-.057.04-.094a.5.5 0 0 1 .238-.037l.164.025q.165.032.406.196q.24.164.397.426q.189.336.455.512a.96.96 0 0 0 .536.176q.27 0 .467-.04a1.6 1.6 0 0 0 .369-.124q.073-.548.4-.843a5.6 5.6 0 0 1-.839-.148a3.4 3.4 0 0 1-.77-.32a2.2 2.2 0 0 1-.66-.548q-.26-.328-.43-.86a4.1 4.1 0 0 1-.167-1.229q0-.99.647-1.687q-.303-.745.057-1.671q.239-.075.705.11q.467.184.684.316q.217.13.348.22a5.8 5.8 0 0 1 1.573-.212q.81 0 1.573.213l.31-.197q.32-.196.754-.36q.435-.165.664-.09q.37.926.065 1.67q.648.697.648 1.688q0 .696-.168 1.233t-.434.86a2.3 2.3 0 0 1-.664.545a3.3 3.3 0 0 1-.77.32a5.6 5.6 0 0 1-.84.147q.426.368.426 1.163v1.957q0 .14.041.226a.23.23 0 0 0 .131.119q.09.032.16.04t.2.009z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamGithubSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGitlabIcon],svg[jam-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.006 18.443L6.326 7.118h7.36zm0 0L1.168 7.118h5.158zM1.168 7.118l8.838 11.325l-9.68-7.032a.76.76 0 0 1-.276-.852zm0 0L3.385.296a.38.38 0 0 1 .724 0l2.217 6.822zm8.838 11.325l3.68-11.325h5.157zm8.837-11.325l1.119 3.441a.76.76 0 0 1-.277.852l-9.68 7.032zm0 0h-5.157L15.902.296a.38.38 0 0 1 .725 0z"></svg:path>`,
})
export class JamGitlabIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGitlabCircleIcon],svg[jam-gitlab-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M10 14.616L8.159 8.95h3.682zm0 0L5.578 8.95h2.58zM5.578 8.95L10 14.616l-4.843-3.518a.38.38 0 0 1-.138-.427l.56-1.722zm0 0l1.11-3.413a.19.19 0 0 1 .362 0L8.159 8.95h-2.58zM10 14.616l1.841-5.667h2.58zm4.422-5.667l.56 1.722a.38.38 0 0 1-.14.427L10 14.616zm0 0h-2.58l1.108-3.413a.19.19 0 0 1 .363 0z"></svg:path></svg:g>`,
})
export class JamGitlabCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGitlabSquareIcon],svg[jam-gitlab-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 14.616L8.159 8.95h3.682zm0 0L5.578 8.95h2.58zM5.578 8.95L10 14.616l-4.843-3.518a.38.38 0 0 1-.138-.427l.56-1.722zm0 0l1.11-3.413a.19.19 0 0 1 .362 0L8.159 8.95h-2.58zM10 14.616l1.841-5.667h2.58zm4.422-5.667l.56 1.722a.38.38 0 0 1-.14.427L10 14.616zm0 0h-2.58l1.108-3.413a.19.19 0 0 1 .363 0z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamGitlabSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGlassEmptyIcon],svg[jam-glass-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5a5 5 0 1 0 9-3H3c-.643.854-1 1.897-1 3m4 13v-6.07A7.002 7.002 0 0 1 2.101 0h9.798A7.002 7.002 0 0 1 8 11.93V18h2a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></svg:path>`,
})
export class JamGlassEmptyIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGlassFilledIcon],svg[jam-glass-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.1 4h9.8a5 5 0 0 0-.9-2H3a5 5 0 0 0-.9 2m9.8 2H2.1a5.002 5.002 0 0 0 9.8 0M6 18v-6.07A7.002 7.002 0 0 1 2.101 0h9.798A7.002 7.002 0 0 1 8 11.93V18h2a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></svg:path>`,
})
export class JamGlassFilledIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGlassFilledFIcon],svg[jam-glass-filled-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18v-6.07A7.002 7.002 0 0 1 2.101 0h9.798A7.002 7.002 0 0 1 8 11.93V18h2a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zM2 5h10q-.357-2.145-1-3H3q-.643.855-1 3"></svg:path>`,
})
export class JamGlassFilledFIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGlueIcon],svg[jam-glue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11a1 1 0 0 0-1 1v7h6v-7a1 1 0 0 0-1-1zm1-5V1a1 1 0 1 1 2 0v5h1a1 1 0 0 1 1 1v2.17c1.165.413 2 1.524 2 2.83v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-7c0-1.306.835-2.417 2-2.83V7a1 1 0 0 1 1-1zm0 2v1h2V8z"></svg:path>`,
})
export class JamGlueIcon {
  readonly viewBox = input("-7 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGlueFIcon],svg[jam-glue-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9H2V7.393a1 1 0 0 1 1-1h1v-5a1 1 0 1 1 2 0v5h1a1 1 0 0 1 1 1zm.809 1A3 3 0 0 1 10 12.393v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-7c0-.977.467-1.845 1.191-2.393z"></svg:path>`,
})
export class JamGlueFIcon {
  readonly viewBox = input("-7 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGoogleIcon],svg[jam-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.376 8.068A6 6 0 0 0 4.056 10c0 .734.132 1.437.376 2.086a5.946 5.946 0 0 0 8.57 3.045h.001a5.96 5.96 0 0 0 2.564-3.043H10.22V8.132h9.605a10 10 0 0 1-.044 3.956a10 10 0 0 1-3.52 5.71A9.96 9.96 0 0 1 10 20A9.998 9.998 0 0 1 1.118 5.401A10 10 0 0 1 10 0c2.426 0 4.651.864 6.383 2.302l-3.24 2.652a5.948 5.948 0 0 0-8.767 3.114"></svg:path>`,
})
export class JamGoogleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGoogleCircleIcon],svg[jam-google-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.188 9.034a2.97 2.97 0 0 0 .028 2.01a2.973 2.973 0 0 0 4.285 1.522a2.98 2.98 0 0 0 1.283-1.522H10.11V9.066h4.803a5 5 0 0 1-1.783 4.833A5 5 0 1 1 10 5a4.98 4.98 0 0 1 3.191 1.152l-1.62 1.326a2.974 2.974 0 0 0-4.384 1.557z"></svg:path><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class JamGoogleCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGooglePlayIcon],svg[jam-google-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.625 9.267l-3.635-2.1L11 10.061l2.733 2.644l3.892-2.25a.68.68 0 0 0 .342-.593a.68.68 0 0 0-.342-.595M13.373 6.81l-4-2.312L.607 0l9.901 9.584zM.752 19.98l8.636-4.763l3.728-2.155l-2.608-2.524zM.022.388l-.01 19.355l10.003-9.682z"></svg:path>`,
})
export class JamGooglePlayIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGooglePlayCircleIcon],svg[jam-google-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="m14.335 9.61l-1.817-1.05l-1.495 1.446l1.366 1.322l1.946-1.124a.34.34 0 0 0 .172-.297a.34.34 0 0 0-.172-.298zM12.21 8.38l-2-1.155l-4.384-2.25l4.95 4.793zM5.9 14.966l4.317-2.382l1.864-1.077l-1.304-1.263zM5.534 5.17l-.005 9.677l5.002-4.841z"></svg:path></svg:g>`,
})
export class JamGooglePlayCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGooglePlaySquareIcon],svg[jam-google-play-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m14.335 9.61l-1.817-1.05l-1.495 1.446l1.366 1.322l1.946-1.124a.34.34 0 0 0 .172-.297a.34.34 0 0 0-.172-.298zM12.21 8.38l-2-1.155l-4.384-2.25l4.95 4.793zM5.9 14.966l4.317-2.382l1.864-1.077l-1.304-1.263zM5.534 5.17l-.005 9.677l5.002-4.841z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamGooglePlaySquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGooglePlusIcon],svg[jam-google-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 5V2.5h-1.25V5h-2.5v1.25h2.5v2.5h1.25v-2.5H20V5zM6.25 5v2.5h3.536A3.76 3.76 0 0 1 6.25 10A3.755 3.755 0 0 1 2.5 6.25A3.755 3.755 0 0 1 6.25 2.5c.896 0 1.759.321 2.429.905L10.32 1.52A6.2 6.2 0 0 0 6.25 0A6.257 6.257 0 0 0 0 6.25a6.257 6.257 0 0 0 6.25 6.25a6.257 6.257 0 0 0 6.25-6.25V5z"></svg:path>`,
})
export class JamGooglePlusIcon {
  readonly viewBox = input("-2 -5.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGooglePlusCircleIcon],svg[jam-google-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M13.75 9.5V8.25h-.625V9.5h-1.25v.625h1.25v1.25h.625v-1.25H15V9.5zm-5.625 0v1.25h1.768A1.88 1.88 0 0 1 8.125 12a1.877 1.877 0 0 1-1.875-1.875c0-1.034.841-1.875 1.875-1.875c.448 0 .88.16 1.214.453l.822-.943A3.1 3.1 0 0 0 8.125 7A3.13 3.13 0 0 0 5 10.125a3.13 3.13 0 0 0 3.125 3.125a3.13 3.13 0 0 0 3.125-3.125V9.5z"></svg:path></svg:g>`,
})
export class JamGooglePlusCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGooglePlusSquareIcon],svg[jam-google-plus-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.75 9.5V8.25h-.625V9.5h-1.25v.625h1.25v1.25h.625v-1.25H15V9.5zm-5.625 0v1.25h1.768A1.88 1.88 0 0 1 8.125 12a1.877 1.877 0 0 1-1.875-1.875c0-1.034.841-1.875 1.875-1.875c.448 0 .88.16 1.214.453l.822-.943A3.1 3.1 0 0 0 8.125 7A3.13 3.13 0 0 0 5 10.125a3.13 3.13 0 0 0 3.125 3.125a3.13 3.13 0 0 0 3.125-3.125V9.5z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamGooglePlusSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGoogleSquareIcon],svg[jam-google-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.188 9.034a2.97 2.97 0 0 0 .028 2.01a2.973 2.973 0 0 0 4.285 1.522a2.98 2.98 0 0 0 1.283-1.522H10.11V9.066h4.803a5 5 0 0 1-1.783 4.833A5 5 0 1 1 10 5a4.98 4.98 0 0 1 3.191 1.152l-1.62 1.326a2.974 2.974 0 0 0-4.384 1.557z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamGoogleSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGpsIcon],svg[jam-gps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.913 2.9L2.632 9.226l4.829 2.006a5.77 5.77 0 0 1 3.118 3.119l2.006 4.828zm1.847.682l-6.328 16.281c-.4 1.03-1.551 1.557-2.571 1.18a1.92 1.92 0 0 1-1.11-1.067l-2.007-4.83a3.85 3.85 0 0 0-2.079-2.078l-4.828-2.006C.833 10.645.375 9.486.814 8.472A2.05 2.05 0 0 1 1.949 7.38L18.23 1.052a1.945 1.945 0 0 1 2.53 2.53"></svg:path>`,
})
export class JamGpsIcon {
  readonly viewBox = input("-1.5 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGpsFIcon],svg[jam-gps-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.919 2.635l-5.953 16.08c-.376 1.016-1.459 1.538-2.418 1.165a1.85 1.85 0 0 1-1.045-1.054l-1.887-4.77a3.7 3.7 0 0 0-1.955-2.052l-4.542-1.981C.174 9.61-.256 8.465.157 7.465a1.97 1.97 0 0 1 1.067-1.079L16.54.136c.967-.395 2.04.101 2.395 1.109c.157.446.151.94-.015 1.39z"></svg:path>`,
})
export class JamGpsFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGridIcon],svg[jam-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v4h4V2zm0-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m12 0h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 2v4h4V2zm0 10h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m0 2v4h4v-4zM2 12h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m0 2v4h4v-4z"></svg:path>`,
})
export class JamGridIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamGridFIcon],svg[jam-grid-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m12 0h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 12h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2M2 12h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2"></svg:path>`,
})
export class JamGridFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHairdryerIcon],svg[jam-hairdryer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8.286h4.017l.584.571a4 4 0 0 0 1.991 1.062l1.096.224l2.364 6.495a1 1 0 1 0 1.88-.684l-2.333-6.407l.793-.892A4 4 0 0 0 10.6 3.143l-.584.571H6zm-2 0V3.714H2v4.572zm5.2 2H2a2 2 0 0 1-2-2V3.714a2 2 0 0 1 2-2h7.2a6 6 0 0 1 8.686 8.27l1.925 5.286a3 3 0 1 1-5.638 2.052l-1.982-5.444a6 6 0 0 1-2.99-1.592zM12 5h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamHairdryerIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHairdryerFIcon],svg[jam-hairdryer-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10.286V1.714h3.2a6 6 0 0 1 8.686 8.27l1.925 5.286a3 3 0 1 1-5.638 2.052l-1.982-5.444a6 6 0 0 1-2.99-1.592zm-2 0H2a2 2 0 0 1-2-2V3.714a2 2 0 0 1 2-2h2zM12 5a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2z"></svg:path>`,
})
export class JamHairdryerFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHammerIcon],svg[jam-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.536 8.9l2.828 2.828l6.364-6.364l-2.829-2.828zm12.727 5.656l-4.95-4.95l-.706.708l4.95 4.95zm1.415 1.415l-.707.707l1.767 1.767a.5.5 0 0 0 .707-.707zM6.01 2.596L7.485 1.12a2 2 0 0 1 2.829 0l2.828 2.829a2 2 0 0 1 0 2.828l-1.414 1.414l8.132 8.132a2.5 2.5 0 1 1-3.536 3.536l-8.132-8.132l-1.414 1.414a2 2 0 0 1-2.828 0l-2.83-2.827a2 2 0 0 1 0-2.829l1.475-1.474a1.5 1.5 0 0 1 .293-1.708L4.303 2.89a1.5 1.5 0 0 1 1.708-.293z"></svg:path>`,
})
export class JamHammerIcon {
  readonly viewBox = input("-1.5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHammerFIcon],svg[jam-hammer-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.288 5.703a1.5 1.5 0 0 1 .293-1.707L3.996 2.58a1.5 1.5 0 0 1 1.707-.293L7.178.814a2 2 0 0 1 2.828 0l2.829 2.828a2 2 0 0 1 0 2.829L6.47 12.835a2 2 0 0 1-2.829 0L.814 10.006a2 2 0 0 1 0-2.828zM9.3 12.835l3.536-3.536l3.535 3.536l-3.535 3.535zm4.95 4.95l3.535-3.536l1.768 1.768a2.5 2.5 0 0 1-3.535 3.535l-1.768-1.768z"></svg:path>`,
})
export class JamHammerFIcon {
  readonly viewBox = input("-1.5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHashtagIcon],svg[jam-hashtag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6v2h2V6zm0-2h2V1a1 1 0 1 1 2 0v3h3a1 1 0 0 1 0 2h-3v2h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3H6v3a1 1 0 0 1-2 0v-3H1a1 1 0 1 1 0-2h3V6H1a1 1 0 1 1 0-2h3V1a1 1 0 1 1 2 0z"></svg:path>`,
})
export class JamHashtagIcon {
  readonly viewBox = input("-5 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHeaderIcon],svg[jam-header-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0z"></svg:path>`,
})
export class JamHeaderIcon {
  readonly viewBox = input("-8 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHeader1Icon],svg[jam-header-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0zm9.52.779H10V3h3.36v7h-1.84z"></svg:path>`,
})
export class JamHeader1Icon {
  readonly viewBox = input("-5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHeader2Icon],svg[jam-header-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0zm12.88 4.352V10H10V8.986l.1-.246l1.785-1.913c.43-.435.793-.77.923-1.011c.124-.23.182-.427.182-.587c0-.14-.04-.242-.127-.327a.47.47 0 0 0-.351-.127a.44.44 0 0 0-.355.158c-.105.117-.165.288-.173.525l-.012.338h-1.824l.016-.366c.034-.735.272-1.33.718-1.77S11.902 3 12.585 3q.637 0 1.14.275a2.1 2.1 0 0 1 .806.8q.299.516.3 1.063c0 .416-.23.849-.456 1.307c-.222.45-.534.876-1.064 1.555l-.116.123l-.254.229z"></svg:path>`,
})
export class JamHeader2Icon {
  readonly viewBox = input("-4.5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHeader3Icon],svg[jam-header-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0zm12.453 2.513l.043.055c.254.334.38.728.38 1.172c0 .637-.239 1.187-.707 1.628c-.466.439-1.06.658-1.763.658c-.671 0-1.235-.209-1.671-.627s-.673-.983-.713-1.676L10 7.353h1.803l.047.295c.038.238.112.397.215.49c.1.091.23.137.402.137a.57.57 0 0 0 .422-.159a.5.5 0 0 0 .158-.38c0-.163-.067-.295-.224-.419c-.17-.134-.438-.21-.815-.215l-.345-.004v-1.17l.345-.004c.377-.004.646-.08.815-.215c.157-.124.224-.255.224-.418a.5.5 0 0 0-.158-.381a.57.57 0 0 0-.422-.159a.57.57 0 0 0-.402.138c-.103.092-.177.251-.215.489l-.047.295H10l.022-.37c.04-.693.277-1.258.713-1.675c.436-.419 1-.628 1.67-.628c.704 0 1.298.22 1.764.658c.468.441.708.991.708 1.629a1.9 1.9 0 0 1-.424 1.226"></svg:path>`,
})
export class JamHeader3Icon {
  readonly viewBox = input("-4.5 -6.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHeader4Icon],svg[jam-header-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0zm10.636 4.74H10V7.302l.06-.198l2.714-4.11h1.687v3.952h.538V8.74h-.538V10h-1.825zm.154-1.283V5.774l-1.1 1.683z"></svg:path>`,
})
export class JamHeader4Icon {
  readonly viewBox = input("-4.5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHeader5Icon],svg[jam-header-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0zm8.003 4.317h2.68c.386 0 .699-.287.699-.642s-.313-.642-.698-.642H10.01l.002-.244L10 3h5.086v1.888h-3.144l.014.617h1.114c1.355 0 2.469.984 2.523 2.23c.052 1.21-.972 2.231-2.288 2.28l-.095.001l-3.21-.02V8.73z"></svg:path>`,
})
export class JamHeader5Icon {
  readonly viewBox = input("-4 -6.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHeader6Icon],svg[jam-header-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0zm11.949 2.057c.43.44.651.999.651 1.64c0 .629-.228 1.18-.67 1.62c-.442.437-.99.663-1.613.663a2.2 2.2 0 0 1-1.649-.693c-.43-.45-.652-.985-.652-1.58q0-.337.1-.672c.063-.211.664-1.627.837-1.966q.377-.737 1.197-2.137l1.78.652l-.917 1.88c.249.113.733.386.936.593m-1.63.765a.85.85 0 0 0-.858.863a.85.85 0 0 0 .252.613a.865.865 0 0 0 1.48-.614a.84.84 0 0 0-.25-.611a.87.87 0 0 0-.623-.251z"></svg:path>`,
})
export class JamHeader6Icon {
  readonly viewBox = input("-4.5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHeadsetIcon],svg[jam-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16.09a1 1 0 1 1-2 0V10C0 4.477 4.477 0 10 0s10 4.477 10 10v3.086a1 1 0 1 1-2 0V10a8 8 0 1 0-16 0zM2 10h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m0 2v5h2v-5zm14-2h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m0 2v5h2v-5z"></svg:path>`,
})
export class JamHeadsetIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHeadsetFIcon],svg[jam-headset-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10.858v7a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h2a8 8 0 1 0-16 0h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-7c0-5.523 4.477-10 10-10s10 4.477 10 10"></svg:path>`,
})
export class JamHeadsetFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHeartIcon],svg[jam-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.636 7.208L10 13.572l6.364-6.364a3 3 0 1 0-4.243-4.243L10 5.086l-2.121-2.12a3 3 0 0 0-4.243 4.242M9.293 1.55l.707.707l.707-.707a5 5 0 1 1 7.071 7.071l-7.07 7.071a1 1 0 0 1-1.415 0l-7.071-7.07a5 5 0 1 1 7.07-7.071z"></svg:path>`,
})
export class JamHeartIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHeartFIcon],svg[jam-heart-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.293 1.55l.707.708l.707-.707a5 5 0 1 1 7.071 7.071l-7.07 7.071a1 1 0 0 1-1.415 0L2.222 8.622a5 5 0 1 1 7.07-7.071z"></svg:path>`,
})
export class JamHeartFIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHelmetIcon],svg[jam-helmet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18h2a1 1 0 0 0 1-1v-2h-3zm-2-8a3 3 0 0 0-3 3h3zm2 0v3h5v4a3 3 0 0 1-3 3h-4v-5h-3v5q-.67-.017-1-.05c-5.053-.5-9-4.764-9-9.95C0 4.477 4.477 0 10 0c5.178 0 9.437 3.936 9.949 8.98q.034.335.051 1.02zm-7 3a5 5 0 0 1 5-5h4.749A8.006 8.006 0 0 0 10 2a8 8 0 0 0-8 8a8.006 8.006 0 0 0 6 7.749zm-2-3a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamHelmetIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHelmetFIcon],svg[jam-helmet-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18h2a1 1 0 0 0 1-1v-2h-3zm-2-8a3 3 0 0 0-3 3h3zm2 0v3h5v4a3 3 0 0 1-3 3h-4v-5h-3v5q-.67-.017-1-.05c-5.053-.5-9-4.764-9-9.95C0 4.477 4.477 0 10 0c5.178 0 9.437 3.936 9.949 8.98q.034.335.051 1.02zm-9 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class JamHelmetFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHelpIcon],svg[jam-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-3a1 1 0 1 1 0-2a1 1 0 0 1 0 2m1.276-3.218a1 1 0 0 1-1.232-1.576l.394-.308a1.5 1.5 0 1 0-1.847-2.364l-.394.308a1 1 0 1 1-1.23-1.576l.393-.308a3.5 3.5 0 1 1 4.31 5.516z"></svg:path>`,
})
export class JamHelpIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHelpFIcon],svg[jam-help-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20.393c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.478 10 10s-4.477 10-10 10m1.276-8.218l.394-.308a3.5 3.5 0 1 0-4.31-5.516l-.394.308a1 1 0 1 0 1.231 1.576l.394-.308a1.5 1.5 0 0 1 1.847 2.364l-.394.308a1 1 0 1 0 1.232 1.576M10 15.393a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamHelpFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHighlighterIcon],svg[jam-highlighter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.038 11.06l-1.035 3.207l1.776 1.775l3.165-1.077l-3.906-3.906zm1.24-1.59l4.242 4.243l6.364-6.364a2 2 0 0 0 0-2.829L18.47 3.106a2 2 0 0 0-2.829 0L9.277 9.47zm-3.503 6.4L3.88 17.765l1.653 1.151l1.644-1.644zM19.884 1.692l1.414 1.414a4 4 0 0 1 0 5.657l-7.778 7.778l-4.22 1.437l-3.536 3.535L.778 18.04l4.291-4.292L6.45 9.47l7.778-7.778a4 4 0 0 1 5.657 0z"></svg:path>`,
})
export class JamHighlighterIcon {
  readonly viewBox = input("-0.5 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHighlighterFIcon],svg[jam-highlighter-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.914 15.45l-3.182 1.06l-4.242-4.242l1.06-3.182zm1.414-1.414L7.964 7.672l6.364-6.364c1.566-1.566 3.969-1.69 5.657 0l.707.707c1.69 1.688 1.566 4.091 0 5.657zM7.964 17.57L5.136 20.4L.893 17.571l3.536-3.535l3.535 3.535z"></svg:path>`,
})
export class JamHighlighterFIcon {
  readonly viewBox = input("-1 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHistoryIcon],svg[jam-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.106 9h3.953c.546 0 .988.448.988 1s-.442 1-.988 1h-4.941a.994.994 0 0 1-.988-1V4c0-.552.442-1 .988-1s.988.448.988 1zm6-6.071A10.03 10.03 0 0 1 22 10c0 5.523-4.424 10-9.882 10v-2c4.366 0 7.906-3.582 7.906-8a8.02 8.02 0 0 0-2.316-5.657A7.83 7.83 0 0 0 12.118 2C8.574 2 5.574 4.36 4.571 7.612l1.352-.923a.98.98 0 0 1 1.372.27a1.007 1.007 0 0 1-.267 1.388l-3.277 2.237a.98.98 0 0 1-1.372-.27L.17 6.998a1.007 1.007 0 0 1 .267-1.389a.98.98 0 0 1 1.372.27l.839 1.259C3.863 3.01 7.643 0 12.118 0c2.729 0 5.2 1.12 6.988 2.929"></svg:path>`,
})
export class JamHistoryIcon {
  readonly viewBox = input("-1 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHomeIcon],svg[jam-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18V7.132l-8-4.8l-8 4.8V18h4v-2.75a4 4 0 1 1 8 0V18zm-6 2v-4.75a2 2 0 1 0-4 0V20H2a2 2 0 0 1-2-2V7.132a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.132V18a2 2 0 0 1-2 2z"></svg:path>`,
})
export class JamHomeIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHomeFIcon],svg[jam-home-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20.565v-5a3 3 0 0 0-6 0v5H2a2 2 0 0 1-2-2V7.697a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.697v10.868a2 2 0 0 1-2 2z"></svg:path>`,
})
export class JamHomeFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHourglassIcon],svg[jam-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2v4a3 3 0 1 0 6 0V2zm8 16a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2v-4a4.99 4.99 0 0 1 2-4a5 5 0 0 1-2-4V2a1 1 0 1 1 0-2h10a1 1 0 0 1 0 2v4a5 5 0 0 1-2 4a4.99 4.99 0 0 1 2 4zm-2 0v-4a3 3 0 0 0-6 0v4z"></svg:path>`,
})
export class JamHourglassIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamHourglassFIcon],svg[jam-hourglass-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2v-4a4.99 4.99 0 0 1 2-4a5 5 0 0 1-2-4V2a1 1 0 1 1 0-2h10a1 1 0 0 1 0 2v4a5 5 0 0 1-2 4a4.99 4.99 0 0 1 2 4z"></svg:path>`,
})
export class JamHourglassFIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamIceCreamIcon],svg[jam-ice-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2a3 3 0 0 0-3 3v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5a3 3 0 0 0-3-3m1 12v5a1 1 0 0 1-2 0v-5H3a3 3 0 0 1-3-3V5a5 5 0 1 1 10 0v6a3 3 0 0 1-3 3z"></svg:path>`,
})
export class JamIceCreamIcon {
  readonly viewBox = input("-7 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamIceCreamFIcon],svg[jam-ice-cream-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14v5a1 1 0 0 1-2 0v-5H3a3 3 0 0 1-3-3V5a5 5 0 1 1 10 0v6a3 3 0 0 1-3 3z"></svg:path>`,
})
export class JamIceCreamFIcon {
  readonly viewBox = input("-7 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamIdCardIcon],svg[jam-id-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 2v10h16V2zm9 2h5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2m0 3h5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2M4 4h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamIdCardIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamIdCardFIcon],svg[jam-id-card-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h16c1.105 0 2 .831 2 1.857v9.286C20 12.169 19.105 13 18 13H2c-1.105 0-2-.831-2-1.857V1.857C0 .831.895 0 2 0m9 3a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zm0 3a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zM3 3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></svg:path>`,
})
export class JamIdCardFIcon {
  readonly viewBox = input("-2 -5.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamInboxIcon],svg[jam-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.702V12h16V5.702L15.039 2H4.96zM0 5l4-5h12l4 5v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm13.874 2a4.002 4.002 0 0 1-7.748 0H2V5h16v2zm-2.142 0H8.268a2 2 0 0 0 3.464 0"></svg:path>`,
})
export class JamInboxIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamInboxFIcon],svg[jam-inbox-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5H0l4-5h12zm0 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7h6.126a4.002 4.002 0 0 0 7.748 0zM8.265 7h3.465a2 2 0 0 1-3.465 0"></svg:path>`,
})
export class JamInboxFIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamInboxesIcon],svg[jam-inboxes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.961V18h16V4.961L14.298 2H5.702zM0 4l5-4h10l5 4v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm13.874 2a4.002 4.002 0 0 1-7.748 0H2V4h16v2zm-2.142 0H8.268a2 2 0 0 0 3.464 0m2.142 7a4.002 4.002 0 0 1-7.748 0H2v-2h16v2zm-2.142 0H8.268a2 2 0 0 0 3.464 0"></svg:path>`,
})
export class JamInboxesIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamInboxesFIcon],svg[jam-inboxes-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6v5H0V6h6.126a4.002 4.002 0 0 0 7.748 0zm0-2H0l5-4h10zm0 9v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-5h6.126a4.002 4.002 0 0 0 7.748 0zM8.268 13h3.464a2 2 0 0 1-3.464 0m-.002-6.988h3.464a2 2 0 0 1-3.464 0"></svg:path>`,
})
export class JamInboxesFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamIndentIcon],svg[jam-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2m0 8h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2m6-4h6a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2M4.44 5.857L2.382 7.091a1 1 0 0 1-1.515-.857V3.766a1 1 0 0 1 1.515-.857l2.056 1.234a1 1 0 0 1 0 1.714z"></svg:path>`,
})
export class JamIndentIcon {
  readonly viewBox = input("-4.5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamInfiniteIcon],svg[jam-infinite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 9a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7M11 5.5a3.5 3.5 0 1 0 .668-2.057a6.5 6.5 0 0 0-1.001-1.887A5.5 5.5 0 1 1 10 8.663A5.5 5.5 0 1 1 11 5.5"></svg:path>`,
})
export class JamInfiniteIcon {
  readonly viewBox = input("-2 -6.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamInfoIcon],svg[jam-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-10a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1m0-1a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class JamInfoIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamInfoFIcon],svg[jam-info-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-12a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1m0-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamInfoFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamInstagramIcon],svg[jam-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0m3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"></svg:path><svg:path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164a5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31a3.155 3.155 0 0 1 0 6.31"></svg:path><svg:circle cx="15.156" cy="4.858" r="1.237"></svg:circle></svg:g>`,
})
export class JamInstagramIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamInstantPictureIcon],svg[jam-instant-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8.322V2H2v12h3.576l3.97-5.292A3 3 0 0 1 14 8.322m0 3.753l-1.188-2.066a1 1 0 0 0-1.667-.101L8.076 14H14zM14 16H2v2h12zM2 0h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m4 9a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamInstantPictureIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamInstantPictureFIcon],svg[jam-instant-picture-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 11.252l-1.454-2.24a3 3 0 0 0-5-.304L5.575 14H0V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zM8.076 14l3.07-4.092a1 1 0 0 1 1.666.101L15.284 14zM16 16v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2zM6 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class JamInstantPictureFIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamIntersectionIcon],svg[jam-intersection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14A7 7 0 1 1 10 .674a7 7 0 1 1 0 12.653A7 7 0 0 1 7 14M7 2a5 5 0 1 0 1 9.9A6.98 6.98 0 0 1 6 7a6.98 6.98 0 0 1 2-4.9A5 5 0 0 0 7 2m7 5a6.98 6.98 0 0 1-2 4.9a5 5 0 1 0 0-9.8A6.98 6.98 0 0 1 14 7"></svg:path>`,
})
export class JamIntersectionIcon {
  readonly viewBox = input("0 0 20 14")
  readonly width = input("1.43em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamItalicIcon],svg[jam-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.273 8l1.95-6H3a1 1 0 1 1 0-2h5a1 1 0 1 1 0 2H6.326l-1.95 6H6a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2z"></svg:path>`,
})
export class JamItalicIcon {
  readonly viewBox = input("-7.5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
